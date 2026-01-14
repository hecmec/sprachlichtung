---
mode: agent
---
for each file in docs/kritisches_denken and its subdirectories recursively
  if the file is a markdown file
    if the file contains front-matter with a customProps.notion_page_id property
      read the customProps.notion_page_id property
      use it as the page_id in Notion
    else
      create a new page with page_id in Notion as a child page under the Notion page corresponding to the nearest parent directory that contains a _category_.json file with a customProps.notion_page_id property, or under the page "Kritisches Denken" (page_id=27e7c6ccb2d78044922cd9259ecea30b) if no such parent directory exists
      
      - Use as page title: the title property from the front-matter of the markdown file, or if it doesn't exist, the file name without the extension
      - Use the md front-matter and add it as a first code block whose language is yaml containing plain front matter (with the leading --- markers)
      - Use as page content: the content of the markdown file except the front matter, converted to Notion format
      - update the markdown file front-matter to include the customProps.notion_page_id property with the created page_id
      - update the file_name property in the front-matter to be the file name of the markdown file (without path but with extension)

    if the md file name starts with an underscore then mark the page in notion as excluded by setting the front-matter property excluded: true
