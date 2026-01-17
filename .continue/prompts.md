## Explain Code
Explain the following code in simple terms:

```{{language}}
{{selected_code}}
```

## Generate Tests
Write unit tests for this function using {{test_framework}}:

```{{language}}
{{selected_code}}
```

## Docusaurus Translate single German file to English

**Purpose**:
Translate a German Docusaurus documentation file into English and create the corresponding English file in the correct location.

**Convention for Locating Files**:
- German files are located in: `docs/<path-to-file>.md`
- English files should be created in: `i18n/en/docusaurus-plugin-content-docs/current/<path-to-file>.md`
  (Mirror the same directory structure as the German file.)

**Steps to Follow**:
1. **Check if a translation already exists**
   - If there is no corresponding English document, create one with the original name but in the english hierarchy.
   - If the german update date is more recent than the english date, then continue with the translation. Otherwise notify the user.
2. **Translate the content** of the German file into English while preserving:
   - Markdown formatting (headings, lists, links, etc.).
   - Frontmatter fields (e.g., `title`, `description`, `keywords`), translating their values to English.
   - Code blocks, examples, and special characters (e.g., `&mdash;`).
3. **Create the English file** in the correct location (`i18n/en/docusaurus-plugin-content-docs/current/`).
   - Ensure the directory structure matches the German file (e.g., if the German file is in `docs/kritisches-denken/010-file.md`, the English file should be in `i18n/en/docusaurus-plugin-content-docs/current/kritisches-denken/010-file.md`).
4. **Update the date** in the frontmatter to the current date.
5. **Do NOT update the filename** keep the german filename (e.g., `010-einfuehrung.md` → `010-einfuehrung.md`, this is how Docusaurus works).
6. **Do NOT modify the sidebar manually**. Docusaurus will automatically include the file in the English sidebar if the directory structure is correct.

## Docusaurus Translate current German Folder to English

**Purpose**:
Translate all German Docusaurus documentation files in the current folder into English and create the corresponding English files in the correct locations.

**Steps to Follow**:
- First get the list of all markdown files in the current German folder.
- Show it to the user and ask permission to continue.
- If the user denies, then quit.
- If the user confirms then take one file after another and translate it using the "Docusaurus Translate single German file to English" process.
- Always ask permission to create files and wait for confirmation before proceeding.