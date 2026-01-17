---
agent: agent
---
for each direct sub directory in docs/kritisches_denken recursively
  if the sub directory contains a _category_.json file
    read the _category_.json file
    extract the label and link.description properties
    extract the customProps.notion_page_id property if it exists
    if customProps.notion_page_id exists
      use it as the page_id in Notion
    else
      create a new page with page_id in Notion as a child page under the page  "Kritisches Denken" (page_id=27e7c6ccb2d78044922cd9259ecea30b)
   - Use as page title: the label property of the _category_.json
   - Use as page content the link.description of the _category_.json