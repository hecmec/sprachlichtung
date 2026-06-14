---
title: La conséquence sémantique (entailment)
sidebar_label: Conséquence sémantique
sidebar_position: 30
description: Explication du concept de conséquence sémantique, avec des exemples et son importance pour la pensée logique.
keywords:
  - conséquence sémantique
  - entailment
  - implication logique
  - logique propositionnelle
  - analyse du sens
last_update:
  date: 2026-01-28
  author: Immanuel Lupinus
completeness: 3/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=1252293b-->
La **conséquence sémantique** ou entailment est un concept fondamental en logique. Elle décrit une relation entre des énoncés dans laquelle un énoncé (ou un groupe d'énoncés) en implique nécessairement un autre.

<!--t src=84c2a92e-->
:::tip
« **Max est un chien.** » il s'ensuit sémantiquement « **Max est un animal.** »
:::

<!--t src=f13af5f7-->
Formellement :
**« De la conjonction des énoncés A, B, C… découle logiquement une conclusion S »**
signifie à peu près :
**« Il est impossible que A, B, C soient vrais et que S soit faux. »**

<!--t src=308ee6b7-->
Autrement dit :
**« Si A, B, C sont vrais, alors S doit aussi être vrai. »**

<!--t src=fd7a296f-->
La conséquence sémantique a une sœur : la **conséquence syntaxique**, qui se rapporte à la **dérivabilité** des énoncés dans un système formel.

<!--t src=05d64fd6-->
Tandis que la conséquence syntaxique se concentre sur les règles de dérivation, la conséquence sémantique s'occupe de la **signification et de la vérité** des énoncés.

<!--t src=68322767-->
## Exemples de conséquence sémantique

<!--t src=6b8ccdf3-->
Tout cela paraît très théorique ; voici donc quelques exemples.

<!--t src=dc2ec311-->
### Conséquences tirées de la signification des mots (sémantiques)

<!--t src=e5144c12-->
- Les chiens sont des animaux et les célibataires ne sont pas mariés.

<!--t src=4bda3768-->
C'est vrai parce que nous utilisons la langue ainsi.  
De tels énoncés, qui sont vrais en raison de leur signification, on dit souvent :
qu'ils sont **analytiquement vrais**.

<!--t src=5c0f4026-->
:::tip
« **Tom est célibataire.** » il s'ensuit « **Tom n'est pas marié**. »
:::

<!--t src=3fb274d5-->
S'il est vrai que Tom est célibataire, alors il doit aussi être vrai que Tom n'est pas marié.

<!--t src=4444901a-->
- Si quelque chose est rouge, alors il est coloré.

<!--t src=55b045db-->
:::tip
« **Le cube est rouge.** » il s'ensuit « **Le cube est coloré.** »
:::

<!--t src=b81e204c-->
S'il est vrai que le cube est rouge, il doit aussi être vrai qu'il est coloré.

<!--t src=356d7c4e-->
- Nous pouvons faire des conséquences sémantiques avec des phrases plus compliquées.

<!--t src=8a883310-->
:::tip
« **Tous les hommes sont mortels.** » et  
« **Socrate est un homme.** » il s'ensuit  
« **Socrate est mortel.** »
:::

<!--t src=5177d010-->
Si les deux prémisses sont vraies, la conclusion doit l'être également.

<!--t src=6646a4ec-->
Cela découle de nos règles de langage : de la manière dont nous utilisons « tous », « hommes » et « mortel ».

<!--t src=1e8d2dd8-->
<details>
<summary>Pour ceux qui aiment un peu plus de formalisme</summary>

## Conséquence sémantique vs. implication

Nous devons distinguer la conséquence sémantique non seulement de la dérivabilité formelle, mais aussi de l'**implication matérielle** (c'est un mot savant pour l'opérateur « si… alors » de la logique formelle) :

- La **conséquence** (A ⊨ B) est une relation sémantique : il s'agit de la préservation nécessaire de la vérité de A vers B.
- L'**implication** (A → B) est un opérateur logique : « Si A, alors B » peut être vrai même s'il n'existe aucun lien de contenu entre A et B.

**Exemple d'implication sans entailment :**
« Si Paris est la capitale de l'Italie, alors 2+2=4. »

Cette implication est formellement vraie (puisque l'antécédent est faux), mais il n'y a pas d'entailment, car il n'existe aucun lien de contenu entre les énoncés.

## Symboliquement

Nous pouvons aussi représenter la conséquence sémantique de façon symbolique.
Si nous avons un ensemble de prémisses Γ et une conclusion φ :

Γ ⊨ φ
signifie : de la conjonction des énoncés de Γ découle logiquement φ, c'est-à-dire que dans tout modèle où tous les énoncés de Γ sont vrais, φ est aussi vrai.

</details>

<!--t src=7a8dcfc7-->
## Importance de l'entailment dans la pensée critique

<!--t src=2c9f8c0d-->
Comprendre l'entailment est essentiel pour la pensée critique, car cela nous aide à :

<!--t src=0ba1aef1-->
- distinguer les conclusions valides des conclusions invalides
- reconnaître les conséquences sémantiques de nos convictions
- mettre au jour les hypothèses implicites dans les arguments
- évaluer la force des liens sémantiques entre les énoncés

<!--t src=69b1092f-->
## Sources

<!--t src=23ba7c5a-->
- [Dérivation (logique)](https://de.wikipedia.org/wiki/Ableitung_(Logik)), Wikipédia
- [Conséquence logique](https://fr.wikipedia.org/wiki/Cons%C3%A9quence_logique), Wikipédia
