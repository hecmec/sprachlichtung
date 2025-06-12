
- for the markdown files in referenced in the chat do the following:

- add more front-matter properties 
- if the title is longer than 30 characters, add a property sidebar_label to the front-matter that shorter than 30 chars.
- the sidebar_position should be like the file name prefix or similar
- add a description: this is a short SEO description that explains to the user what to expect from this page. Put it between double quotes for security.
- add or update keywords property in the front-matter (yml style list) like this example. Put 3 to 6 keywords that are useful for SEO
        keywords:
            - kritisches Denken
            - Argumentation
            - Reflexion
- add the last_update section            
last_update:
  date: 2025-05-20
  author: Immanuel Lupinus
