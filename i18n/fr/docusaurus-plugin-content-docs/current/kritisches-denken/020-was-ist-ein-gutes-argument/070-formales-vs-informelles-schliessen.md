---
title: Inférence formelle vs. informelle
sidebar_position: 70
description: Les différences entre l'inférence logique formelle et informelle dans la pensée critique
keywords:
  - logique formelle
  - logique informelle
  - inférences
  - langage naturel
  - structure logique
last_update:
  date: 2026-01-28
  author: Immanuel Lupinus
completeness: 3/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=7e951c4c-->
![Bannière dans le style d'un ancien dessin sur parchemin : des yeux, une puce électronique et des circuits comme symboles de la logique](/img/kd/bennycheung_logic_dallE-3.jpg)  
_La pensée, la logique symbolique et les circuits. Peint par DallE-3, une IA._

<!--t src=4ed4a1c7-->
<!-- # Formales vs. informelles Schließen -->

<!--t src=a941200a-->
Certains pensent que tous les bons arguments se composent pour l'essentiel d'inférences logiques formelles ou de syllogismes. Mais en y regardant de près, on s'aperçoit vite qu'argumenter n'a pas grand-chose à voir avec l'inférence logique formelle.

<!--t src=c3168d77-->

L'inférence logique peut se diviser en deux groupes : l'inférence formelle et l'inférence informelle. Les deux sont importantes pour la pensée critique, mais elles ont des domaines d'application et des méthodes différents.

<!--t src=f9ab45f6-->
## Un exemple des différentes formes d'inférence

<!--t src=76de0143-->
Prenons ici un exemple très célèbre. Il s'agit du syllogisme sous la forme Barbara. Le mode Barbara est une forme classique de l'inférence logique (le syllogisme) dans la logique aristotélicienne traditionnelle.[^modus-barbara] Barbara n'est qu'un moyen mnémotechnique qui nous rappelle que ce syllogisme contient trois jugements de type A (universels affirmatifs).
Autrement dit : la majeure, la mineure et la conclusion ont toutes la forme « Tous les A sont B ».

<!--t src=2fcafb16-->
<details>
  <summary>La syllogistique aristotélicienne comme système d'enseignement au Moyen Âge</summary>

Ces noms ne viennent pas d'Aristote lui-même, mais du Moyen Âge. La syllogistique aristotélicienne fut alors développée en un système d'enseignement que l'on pouvait apprendre par cœur, de la manière la plus influente dans les _Summulae logicales_ de Pierre d'Espagne (XIIIe siècle), le manuel de logique le plus utilisé en Europe pendant près de trois siècles.[^petrus-hispanus] Il repose sur quatre formes de jugement, abrégées par les voyelles **A**, **E**, **I** et **O**. Le moyen mnémotechnique correspondant est constitué des mots latins _affirmo_ (« j'affirme ») pour A et I, et _nego_ (« je nie ») pour E et O.

| Code  | Forme                  | Exemple                                    |
| ----- | ---------------------- | ------------------------------------------ |
| **A** | universel affirmatif   | Tous les hommes sont mortels               |
| **E** | universel négatif      | Aucun homme n'est immortel                 |
| **I** | particulier affirmatif | Certains Grecs sont philosophes            |
| **O** | particulier négatif    | Certains Grecs ne sont pas philosophes     |

C'est de ces codes que sont formés les noms mnémotechniques des formes d'inférence valides : les voyelles d'un nom indiquent successivement la majeure, la mineure et la conclusion. B**a**rb**a**r**a** contient trois fois A, donc trois jugements universels affirmatifs, tandis que C**e**l**a**r**e**nt contient E, A, E. Les vers mnémotechniques médiévaux (« Barbara, Celarent, Darii, Ferio … ») étaient ainsi une aide à la mémoire pour les 24 modes valides, bien avant qu'existent des écritures formelles comme $\forall x\,(M(x) \rightarrow S(x))$.

</details>

<!--t src=e1e22e10-->
### Barbara : en langue naturelle

<!--t src=bbed90db-->
Nous pouvons exprimer cette inférence en langue naturelle et même dire qu'elle nous paraît intuitivement évidente. Malheureusement, tous les syllogismes ne sont pas aussi intuitifs.

<!--t src=ec52fb51-->
<table>
<tbody>
<tr><td>**Prémisse 1**</td><td>Tous les hommes sont mortels.</td></tr>
<tr><td>**Prémisse 2**</td><td>Tous les Grecs sont des hommes.</td></tr>
<tr><td>**Conclusion**</td><td>Tous les Grecs sont mortels.</td></tr>
</tbody>
</table>

<!--t src=fbad223e-->
### Barbara comme syllogisme classique

<!--t src=cd2200b0-->
Ici sous sa forme médiévale.

<!--t src=d7ab4a12-->
<table>
<tbody>
<tr><td>**Majeure**</td><td>M a S</td></tr>
<tr><td>**Mineure**</td><td>G a M</td></tr>
<tr><td>**Conclusion**</td><td>G a S</td></tr>
</tbody>
</table>

<!--t src=bb24bde9-->
### Barbara : formalisé

<!--t src=5c487451-->
avec $M$ = homme, $S$ = mortel, $G$ = Grec

<!--t src=75f0716f-->
<table>
<tbody>
<tr><td style={{width: '3em'}}>**P1**</td><td>$\forall x\,(M(x) \rightarrow S(x))$</td></tr>
<tr><td>**P2**</td><td>$\forall x\,(G(x) \rightarrow M(x))$</td></tr>
<tr><td>**C**</td><td>$\forall x\,(G(x) \rightarrow S(x))$</td></tr>
</tbody>
</table>

<!--t src=4b683727-->
### Barbara comme diagramme de Venn

<!--t src=296d8b2d-->
Beaucoup de relations simples de ce type peuvent être représentées par des diagrammes de Venn.

<!--t src=d519b060-->
![Diagramme de Venn du mode Barbara : trois cercles de même taille M, G et S ; en rose, les zones vides, M hors de S et G hors de M](/img/kd/syllogismus-barbara-venn.svg)  
_Le rose signifie ici : il n'y a personne, cela n'existe pas._

<!--t src=80d4bdc2-->
Comment lit-on ce diagramme ?

<!--t src=2bf2aedf-->
Les trois cercles divisent la surface en huit zones : chaque zone correspond à une combinaison des trois propriétés. Le centre, c'est « homme et Grec et mortel » ; le croissant en bas à gauche, c'est « Grec, mais ni homme ni mortel », et ainsi de suite. Hors de tous les cercles se trouve tout ce qui ne possède aucune des trois propriétés.

<!--t src=7fed073b-->
Le rose signifie : cette zone est vide. C'est là le véritable tour de force du procédé. Un énoncé universel ne dit pas que quelque chose existe, mais seulement que quelque chose ne se rencontre pas. « Tous les hommes sont mortels » signifie sur le diagramme : il n'existe rien qui soit à la fois homme et non mortel ; on biffe donc la surface $M$ hors de $S$. De même pour « Tous les Grecs sont des hommes » : $G$ hors de $M$ est biffé.

<!--t src=08f72d5e-->
Et voici le point décisif : on n'inscrit que les prémisses, jamais la conclusion. On regarde ensuite si celle-ci s'y trouve déjà d'elle-même. La question est : reste-t-il une zone où pourrait habiter un Grec qui ne soit pas mortel ? Les deux biffures couvrent ensemble toute la surface $G$ hors de $S$. Donc non, un tel être ne peut pas exister. C'est exactement ce qu'affirme « Tous les Grecs sont mortels », et l'inférence est donc valide.

<!--t src=97bd039b-->
Un syllogisme invalide se trahit par le fait qu'il reste une zone blanche dans laquelle un contre-exemple peut se loger. Pour les énoncés en « certains », le hachurage ne suffit d'ailleurs pas : on y place en plus un × dans une zone pour dire : ici, il y a quelqu'un.

<!--t src=0efe15a3-->
<details>
  <summary>Les diagrammes de Venn sont-ils un moyen formel ou informel ?</summary>

Formel, même si cela n'en a pas l'air. Ce qui fait qu'un procédé est formel, ce n'est pas que des symboles soient alignés sur une ligne, mais que les règles portent sur la seule forme et soient vérifiables mécaniquement. C'est exactement ce que réalise le procédé de Venn : une notation fixe (cercles, hachures, ×), des règles d'inscription fixes, un procédé de lecture fixe. C'est même une **procédure de décision** : elle examine tout syllogisme classique en un nombre fini d'étapes, avec un résultat univoque. La logique des prédicats ne peut pas en faire autant dans cette généralité.

Longtemps, les diagrammes ont pourtant été tenus en logique pour une simple aide à la visualisation, une béquille pour la compréhension et non un moyen de preuve. Sun-Joo Shin a montré en 1994 que c'était un préjugé : elle a écrit le système de Venn comme un calcul et en a démontré la correction et la complétude &mdash; exactement ce que l'on exige par ailleurs d'un calcul logique.[^shin-diagramme]

La véritable limite n'est pas la rigueur, mais la **portée**. Le procédé ne fonctionne que pour des propriétés à une place et un petit nombre de termes. Avec quatre termes, il faut déjà des ellipses au lieu de cercles ; avec cinq, l'image devient illisible ; et des relations comme « tout homme a une mère » ou des quantificateurs imbriqués ne peuvent pas du tout être représentés. Les diagrammes de Venn sont donc un appareil formel à part entière pour une toute petite partie de la logique.

À ne pas confondre avec le [diagramme d'Euler](040-muster-gueltiger-argumente.md) reproduit en haut de cette page-là. Euler dessine la situation effective, ici un cercle dans un cercle dans un cercle. Venn dessine toujours toutes les intersections et biffe celles qui sont vides. C'est pourquoi le diagramme de Venn peut aussi rendre visible qu'une inférence _ne_ vaut _pas_ : une zone reste alors blanche, où le contre-exemple trouve place.

</details>

<!--t src=bad148ac-->

## L'inférence formelle

<!--t src=734cf412-->

L'**inférence formelle** repose sur des règles et des structures explicites, indépendantes du contenu des arguments. Elle se concentre sur la forme ou la structure d'un argument et utilise souvent une notation symbolique.

<!--t src=84fd8461-->

Caractéristiques de l'inférence formelle :

<!--t src=93bc06c1-->

- Utilisation de systèmes formels comme la logique des prédicats ou la logique propositionnelle
- Des règles strictes pour les inférences valides
- Indépendance par rapport au contenu spécifique
- Précision et univocité
- Possibilité d'une démonstration formelle

<!--t src=0da05a41-->
<details>
  <summary>**Dérivation en déduction naturelle (Gentzen)**</summary>

Pouvons-nous aussi dériver d'une manière ou d'une autre le syllogisme Barbara ?  
En [déduction naturelle](../030-grundlagen-der-logik/010-einfuehrung-logik.md), il n'existe pas de règle du syllogisme. L'inférence est au contraire dérivée pas à pas à partir des règles pour $\forall$ et $\rightarrow$. $a$ désigne ici un objet quelconque, pris au hasard.

| Ligne | Formule                              | Justification                                              |
| ----- | ------------------------------------ | ---------------------------------------------------------- |
| 1     | $\forall x\,(M(x) \rightarrow S(x))$ | Prémisse 1                                                 |
| 2     | $\forall x\,(G(x) \rightarrow M(x))$ | Prémisse 2                                                 |
| 3     | $G(a)$                               | **Hypothèse provisoire**                                   |
| 4     | $G(a) \rightarrow M(a)$              | élimination du $\forall$ à partir de 2                     |
| 5     | $M(a)$                               | élimination du $\rightarrow$ (modus ponens) à partir de 3 et 4 |
| 6     | $M(a) \rightarrow S(a)$              | élimination du $\forall$ à partir de 1                     |
| 7     | $S(a)$                               | élimination du $\rightarrow$ à partir de 5 et 6            |
| 8     | $G(a) \rightarrow S(a)$              | introduction du $\rightarrow$, l'hypothèse 3 est déchargée |
| 9     | $\forall x\,(G(x) \rightarrow S(x))$ | introduction du $\forall$ à partir de 8                    |

Deux étapes portent toute la dérivation :

- **Les lignes 3 à 8, l'hypothèse provisoire.** Pour montrer « si Grec, alors mortel », on suppose à titre d'essai que $a$ est un Grec, on en dérive la mortalité, puis on abandonne de nouveau l'hypothèse. Il reste l'énoncé conditionnel, qui tient désormais sans aucune hypothèse.
- **La ligne 9, la généralisation.** Elle n'est permise que parce que rien de particulier n'a été présupposé au sujet de $a$. Ce qui vaut pour un objet quelconque pris au hasard vaut pour tous.

C'est exactement ainsi que nous argumentons aussi dans la vie courante : « Prenons un Grec quelconque. C'est un homme, et les hommes sont mortels. Il est donc mortel. Comme je ne visais personne en particulier, cela vaut pour tous les Grecs. »

</details>

<!--t src=487d16f9-->
Ce schéma d'argumentation est valide indépendamment du contenu particulier. Peu importe ce que désignent M, G et S &mdash; la conclusion découle nécessairement des prémisses.

<!--t src=bcabc811-->

## L'inférence informelle

<!--t src=683d64f6-->

L'**inférence informelle** concerne les argumentations en langage naturel, qui ne sont pas entièrement formalisées. Elle tient compte du contexte, des connaissances de fond et des hypothèses implicites.

<!--t src=2e501eaa-->

Caractéristiques de l'inférence informelle :

<!--t src=31f41f88-->

- Utilisation du langage naturel
- Prise en compte du contexte et des connaissances de fond
- Intégration de prémisses implicites
- Souplesse et capacité d'adaptation
- Application dans les discussions et débats quotidiens

<!--t src=d20c5f21-->

**Exemple d'inférence informelle :**
« La pelouse est mouillée. Il a dû pleuvoir cette nuit. »

<!--t src=5102fa03-->

Cet argument contient des hypothèses implicites (p. ex. que la pluie est la cause la plus probable d'une pelouse mouillée) et repose sur le savoir et l'expérience du quotidien.

<!--t src=df7b35a4-->

## Différences et domaines d'application

<!--t src=93743f59-->

Les principales différences entre l'inférence formelle et informelle sont :

<!--t src=db19d830-->

1. **Précision vs. souplesse** : l'inférence formelle est plus précise, mais moins souple ; l'inférence informelle est plus souple, mais éventuellement moins précise.

<!--t src=196658dc-->

2. **Explicite vs. implicite** : l'inférence formelle rend toutes les hypothèses explicites ; l'inférence informelle peut contenir des hypothèses implicites.

<!--t src=03bb6471-->

3. **Domaine d'application** : l'inférence formelle est souvent utilisée en mathématiques, en logique formelle et en informatique théorique ; l'inférence informelle prédomine dans les discussions quotidiennes, la politique, l'éthique et bien d'autres domaines.

<!--t src=df4952b1-->

Les deux types d'inférence ont leurs forces et leurs faiblesses :

<!--t src=1d00d510-->

- L'inférence formelle offre précision et clarté, mais peut être trop rigide dans des situations réelles complexes.
- L'inférence informelle est plus souple et plus contextuelle, mais peut être plus sujette aux raisonnements fallacieux et aux ambiguïtés.

<!--t src=a2073daf-->

Pour la pensée critique, il est important de comprendre les deux types d'inférence et de les employer de façon appropriée selon le contexte.

<!--t src=7dce1dd3-->
[^modus-barbara]: Sur les règles mnémotechniques de la syllogistique et les 24 modes valides : [Modus Barbara (Wikipedia)](https://de.wikipedia.org/wiki/Modus_Barbara) 🇩🇪, [Syllogisme (Wikipédia)](https://fr.wikipedia.org/wiki/Syllogisme) 🇫🇷.

<!--t src=518ff2db-->
[^shin-diagramme]: Sun-Joo Shin : _The Logical Status of Diagrams_, Cambridge University Press 1994. Shin traite les diagrammes de Venn comme un système formel autonome, doté d'une syntaxe et d'une sémantique, et en démontre la correction et la complétude. Un aperçu du débat : [Diagrams (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/diagrams/) 🇬🇧.

<!--t src=93b87364-->
[^petrus-hispanus]: Pierre d'Espagne : _Summulae logicales_ (XIIIe siècle). C'est de lui que proviennent les vers mnémotechniques appris dans toutes les universités au Moyen Âge et au début de l'époque moderne. Pour les personnes intéressées : [Petrus Hispanus (Wikipedia)](https://de.wikipedia.org/wiki/Petrus_Hispanus) 🇩🇪.

<!--t src=afea780d-->

[Artikel auf Deutsch](pathname:///docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen) | [Article in English](pathname:///en/docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen)
