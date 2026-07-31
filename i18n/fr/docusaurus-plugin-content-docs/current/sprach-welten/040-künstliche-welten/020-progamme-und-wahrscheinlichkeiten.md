---
id: programmes_et_probabilites
title: Programmes et probabilités
title_meta: "Programmes et probabilités : pourquoi l'IA estime au lieu de calculer"
sidebar_label: Programmes et probabilités
sidebar_position: 2
description: Les programmes classiques suivent des règles, l'IA travaille avec des probabilités. Pourquoi c'est là la différence décisive et ce que la statistique vient y faire.
keywords:
  - Programmation
  - Probabilité
  - Apprentissage automatique
  - Statistique
  - Intelligence artificielle
  - Filtre antispam
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=05de4eff-->
## Trois choses qui surprennent la plupart des gens

<!--t src=65482fa7-->
**Premièrement :** si vous posez deux fois la même question à un modèle de langue, vous obtenez souvent deux réponses différentes. Une calculatrice ne fait jamais cela. Ce n'est pas un défaut, mais une intention.

<!--t src=bc3d458d-->
**Deuxièmement :** personne n'a appris à une IA ce qu'est un chat. Il n'existe aucune ligne de code disant « chat = quatre pattes, fourrure, moustaches ». Il n'y a que des nombres qui se sont déplacés à force de regarder beaucoup d'images.

<!--t src=1ba32bdb-->
**Troisièmement :** ce que l'on vend aujourd'hui comme la pensée des machines est au fond de la statistique du XVIIIe siècle, exécutée sur du matériel très rapide.

<!--t src=cee5e137-->
## Comment programme-t-on d'ordinaire ?

<!--t src=09397f40-->
Les programmes classiques sont faits de règles qu'un être humain a écrites. Un programme fiscal calcule : « Si le revenu dépasse ce montant, applique tel taux. » Une commande de feux de circulation commute selon un horaire. Ce sont des automates au sens de Turing, tels que les décrit le [chapitre précédent](./010-automaten.md) : lire un signe, consulter la table, poursuivre.

<!--t src=707a3b9a-->
Cette manière de programmer fonctionne à merveille tant que l'on connaît les règles. Et c'est précisément là que se situe le problème.

<!--t src=918a4176-->
## La question : comment écrire une règle pour « chat » ?

<!--t src=94d19952-->
Essayez. Quatre pattes ? Un matou à trois pattes reste un chat. De la fourrure ? Pas chez toutes les races. Des moustaches ? Les phoques en ont aussi. Chaque règle que vous écrivez a des exceptions, et chaque exception a de nouveau des exceptions.

<!--t src=ca2a8fd1-->
Il en va de même pour presque tout ce que les humains font sans effort : reconnaître un visage, comprendre une plaisanterie, lire une écriture manuscrite, distinguer les prospectus du vrai courrier. Nous maîtrisons ces choses, mais nous ne pouvons pas dire selon quelles règles nous les maîtrisons. Le chimiste et philosophe Michael Polanyi appelait cela le « savoir tacite » : nous savons plus que nous ne savons dire.[^polanyi]

<!--t src=f0962f22-->
Quand la règle ne se laisse pas écrire, la programmation classique est au bout de son latin. On retourne donc le problème.

<!--t src=f57af534-->
## La réponse : ne pas prescrire des règles, mais compter des fréquences

<!--t src=be523f88-->
Au lieu de dire _ce qu'est_ un chat, on montre au programme cent mille images étiquetées « chat » et cent mille sans. Le programme cherche lui-même des motifs qui coïncident statistiquement avec le mot. À la fin, il ne dit pas « c'est un chat », mais « chat avec 94 pour cent de probabilité ».

<!--t src=9d1b1401-->
Voilà la véritable rupture. Un programme classique répond _oui_ ou _non_. Un programme qui apprend répond par un nombre entre zéro et un. Il ne sait rien, il estime.

<!--t src=bf74453c-->
Cette façon de penser est ancienne. Au XVIIIe siècle, Thomas Bayes a formulé la règle qui permet d'ajuster une conjecture dès que de nouveaux indices arrivent.[^bayes] C'est exactement ce que fait l'apprentissage automatique : il part de conjectures aléatoires et les corrige des millions de fois sur des exemples. L'intelligence artificielle et la statistique ne sont pas des disciplines voisines, ce sont sur de larges portions la même discipline avec un marketing différent.

<!--t src=65993d29-->
## Théorie et pratique : le filtre antispam

<!--t src=18f7b313-->
Le filtre antispam est le plus bel exemple, parce qu'on peut le percer à jour de bout en bout.

<!--t src=a999f84d-->
Il compte tout simplement combien de fois un mot apparaît dans les courriers publicitaires et combien de fois dans le courrier normal. Si « notification de gain » figure dans 4000 messages indésirables et dans trois messages authentiques, le mot est un indice fort. Le filtre combine les indices de tous les mots d'un message en une probabilité. Si celle-ci dépasse un seuil, le message part dans le dossier des indésirables.

<!--t src=5cd39f6b-->
Personne n'a jamais programmé la règle « les messages contenant notification de gain sont des spams ». Elle est née de votre propre comportement, chaque fois que vous avez cliqué sur « marquer comme indésirable ».

<!--t src=a232314c-->
Les limites y sont tout aussi visibles que le principe : le filtre ne comprend pas un seul mot. Il peut se tromper, et il se trompe. Il se dégrade dès que les spammeurs changent de langage. Et il n'est jamais meilleur que les exemples dont il a appris.

<!--t src=3c6680aa-->
## Ce qui en découle

<!--t src=3f8167fa-->
Les grands modèles de langue ne travaillent pas fondamentalement autrement que ce filtre, seulement à une tout autre échelle. Ils estiment quel mot est probable ensuite, puis en choisissent un parmi les candidats plausibles. C'est pourquoi vous obtenez deux fois des réponses différentes. C'est pourquoi de tels systèmes inventent parfois des sources : une source inventée paraît statistiquement tout aussi plausible qu'une vraie.

<!--t src=63894c9e-->
Qui garde cela en tête lit autrement chaque affirmation sur l'IA. Non pas « la machine a reconnu », mais « la machine le tient pour probable ».

<!--t src=b1066cd1-->
[^polanyi]: Michael Polanyi : _The Tacit Dimension_, University of Chicago Press, 1966.

<!--t src=81178dbf-->
[^bayes]: Thomas Bayes : _An Essay towards solving a Problem in the Doctrine of Chances_, Philosophical Transactions of the Royal Society, 1763 (publié à titre posthume).
