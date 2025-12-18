
- detect the language of the current big markdown file. (md_lang)
- cut this file into sections delimited by 2 level headers
- put each section into its own markdown file.
    - the file name should be the section header slugfied with .md
    - put the file into docs/1_kritisches_denken/folder_name (folder name is the slug version of the title of this file)
    - files are numbered from 1 to n
- for each file do the following:
    - comment out the level one header at the top (this will be in the fornt-matter)
    - create a front-matter
        title: The level 2 header
        sidebar_position: the number of the file
        description: short SEO description of this file content in double quotes
        keywords: some keywords for SEO about this file's content as a yaml list  (like in 1_was_ist_kritisches_denken.md)
        last_update:
           date: date string of update (like 2025-05-10)
           author: Immanuel Lupinus
    - put the markdown of the section into the file
    - promote all other headers by one (level 3 become level 2 etc.)
    - treat everything in the language md_lang

