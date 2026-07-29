const fs = require("fs");
const path = require("path");

/**
 * Build-time plugin that enumerates every image served from `/static/img`
 * (recursively) and exposes the list as global data, so the client
 * <ImageReferential/> component can render a browsable catalog of reusable
 * images with copy-ready root-relative links (e.g. `/img/kd/foo.png`).
 *
 * Only static images are handled here: they are served verbatim at their
 * root path, so no bundling is needed and the link shown is exactly the one
 * docs paste into markdown. Images that live *inside* the docs tree are
 * picked up separately by the component via `require.context`, since those
 * need webpack to emit them.
 */
module.exports = function imageReferentialPlugin(context) {
  const { siteDir } = context;
  const staticDir = path.join(siteDir, "static");
  const imgRoot = path.join(staticDir, "img");

  const IMAGE_EXT = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp",
    ".avif",
    ".bmp",
    ".ico",
  ]);

  return {
    name: "image-referential",

    async loadContent() {
      const images = [];
      (function walk(dir) {
        let entries = [];
        try {
          entries = fs.readdirSync(dir, { withFileTypes: true });
        } catch (e) {
          return;
        }
        for (const entry of entries) {
          const p = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(p);
          } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
            // Served root-relative, e.g. "/img/kd/foo.png"
            images.push("/" + path.relative(staticDir, p).split(path.sep).join("/"));
          }
        }
      })(imgRoot);

      images.sort((a, b) => a.localeCompare(b));
      return images;
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ images: content });
    },
  };
};
