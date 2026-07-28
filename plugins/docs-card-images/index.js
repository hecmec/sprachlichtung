const fs = require("fs");
const path = require("path");

/**
 * Build-time plugin that computes a representative image for every docs page and
 * exposes it as global data, so client components (e.g. <CategoryIndexList/>) can
 * show a thumbnail per page.
 *
 * Image resolution order, per doc:
 *   1. front matter `image`
 *   2. the first inline image in the page body (`![](...)` or `<img src="...">`)
 *   3. the configured `defaultImage`
 *
 * Relative paths are normalized to a served URL:
 *   - `http(s)://…` and `/…` are kept as-is
 *   - a path resolving inside `/static` becomes its served root path
 *   - otherwise, if a file of the same basename exists in `/static/img`, that is used
 *   - otherwise the default image is used
 *
 * Options: { defaultImage?: string }  (root-relative, e.g. "/img/brain-workout.webp")
 */
module.exports = function docsCardImagesPlugin(context, options = {}) {
  const { siteDir } = context;
  const staticDir = path.join(siteDir, "static");
  const defaultImage = options.defaultImage || "/img/brain-workout.webp";

  function stripFrontmatter(raw) {
    if (raw.startsWith("---")) {
      const end = raw.indexOf("\n---", 3);
      if (end !== -1) {
        const nl = raw.indexOf("\n", end + 1);
        return nl !== -1 ? raw.slice(nl + 1) : "";
      }
    }
    return raw;
  }

  function firstBodyImage(body) {
    const md = body.match(/!\[[^\]]*\]\(\s*([^)\s]+)/);
    if (md) return md[1];
    const html = body.match(/<img[^>]*\bsrc\s*=\s*["']([^"']+)["']/i);
    if (html) return html[1];
    return null;
  }

  function normalize(rawImage, sourceAbsPath) {
    if (!rawImage) return null;
    let img = String(rawImage).trim().replace(/^["']+|["']+$/g, "");
    if (!img) return null;
    if (/^https?:\/\//i.test(img)) return { image: img, external: true };
    if (img.startsWith("/")) return { image: img, external: false };

    const clean = img.split("?")[0].split("#")[0];
    const abs = path.resolve(path.dirname(sourceAbsPath), clean);

    // Inside /static ? -> served at its root-relative path
    const relStatic = path.relative(staticDir, abs);
    if (relStatic && !relStatic.startsWith("..") && !path.isAbsolute(relStatic)) {
      return { image: "/" + relStatic.split(path.sep).join("/"), external: false };
    }
    // Same basename present in /static/img ?
    const base = path.basename(clean);
    if (fs.existsSync(path.join(staticDir, "img", base))) {
      return { image: "/img/" + base, external: false };
    }
    return null;
  }

  function resolveDocImage(doc) {
    const sourceAbs = doc.source.replace(/^@site/, siteDir);

    // 1. front matter image
    const fm = doc.frontMatter && doc.frontMatter.image;
    let resolved = normalize(fm, sourceAbs);

    // 2. first inline image in the body
    if (!resolved) {
      try {
        const raw = fs.readFileSync(sourceAbs, "utf8");
        const bodyImg = firstBodyImage(stripFrontmatter(raw));
        resolved = normalize(bodyImg, sourceAbs);
      } catch (e) {
        /* ignore unreadable source */
      }
    }

    // 3. default
    return resolved || { image: defaultImage, external: false };
  }

  return {
    name: "docs-card-images",

    async allContentLoaded({ allContent, actions }) {
      const byId = {};
      const byPermalink = {};

      const docsPlugin = allContent["docusaurus-plugin-content-docs"] || {};
      for (const instance of Object.values(docsPlugin)) {
        const versions = (instance && instance.loadedVersions) || [];
        for (const version of versions) {
          for (const doc of version.docs || []) {
            const info = resolveDocImage(doc);
            byId[doc.id] = info;
            if (doc.permalink) byPermalink[doc.permalink] = info;
          }
        }
      }

      actions.setGlobalData({ defaultImage, byId, byPermalink });
    },
  };
};
