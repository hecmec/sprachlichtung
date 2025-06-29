---
sidebar_position: 4
---

# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-page).
```

```md
Let's see how to [Create a page](./create-a-page.md).
```

**Result:** Let's see how to [Create a page](./create-a-page.md).

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`/static/img/docusaurus.png`):

```md
![Docusaurus logo](/static/img/docusaurus.png)
```

You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![Docusaurus logo](./img/docusaurus.png)
```

You can also specify image dimensions:

```md
![Docusaurus logo|200x100](./img/docusaurus.png)
```

![Docusaurus logo|150](./img/docusaurus.png)

Or just the width (height will be adjusted automatically to maintain aspect ratio):

```md
![Docusaurus logo|300](./img/docusaurus.png)
```

You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![Docusaurus logo](./img/docusaurus.png)
```
:::tip

## Code Blocks

Markdown code blocks are **supported** with Syntax highlighting.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

note, tip, info, warning, danger

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip My tip 

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

```

<!-- :::tip -->
:::tip Mein

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## Markdown Emoji
You can use emojis

```markdown
:heart:
```

:heart: oder :lion: or :spades:

## Checkboxes
Adds support for Github's - [ ] and - [x] check box syntax to VS Code's built-in markdown preview.

- [x]

## Footnotes

Footnotes allow you to add notes and references without cluttering the main content.

```md
Here's a sentence with a footnote[^1].

[^1]: This is the footnote.
```

Here's a sentence with a footnote[^1].

[^1]: This is the footnote.

You can also use named footnotes:

```md
Here's another sentence[^note].

[^note]: This is a named footnote.
```

## Shortcuts
Here is the github of [vscode-markdown-shortcuts](https://github.com/mdickin/vscode-markdown-shortcuts).

- Ctrl-B for **bold**  
- Ctrl-I for _italic_  
- Ctrl-L for toggle [link](www.example.org) to resource.  

## Details - Collapse

<details>
  <summary>Hier kannst du mehr Quellen finden</summary>
  - Quelle 1
  - Quelle 2 
  - Quelle 3
</details>
