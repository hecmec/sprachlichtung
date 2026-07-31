---
id: automates
title: Automates
title_meta: "Automates : de la machine de Turing au problème de l'arrêt"
sidebar_label: Automates
sidebar_position: 1
description: Qu'est-ce qu'un automate au sens d'Alan Turing ? Une introduction accessible aux machines de Turing, à la calculabilité, au problème de l'arrêt et à la complexité.
keywords:
  - Automates
  - Machine de Turing
  - Alan Turing
  - Calculabilité
  - Problème de l'arrêt
  - Complexité
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=cd7f88e7-->
## Qu'est-ce qu'un automate ?

<!--t src=07f03d48-->
Quand nous parlons d'automates dans la vie courante, nous pensons aux machines à café ou aux distributeurs de billets. En informatique, le mot désigne quelque chose de plus abstrait : un automate est une machine qui suit obstinément une règle. Elle lit un signe, consulte sa table de règles, change d'état interne et poursuit. Aucune compréhension, aucune réflexion, aucune intuition. Rien que des règles.

<!--t src=b4a036ee-->
C'est précisément là que réside la force de cette notion. Qui veut comprendre ce que les ordinateurs, et plus tard l'intelligence artificielle, peuvent faire en principe doit d'abord savoir ce qu'est une machine qui suit des règles et où se situent ses limites.

<!--t src=7fe69137-->
## L'idée de Turing

<!--t src=fe560c19-->
En 1936, le mathématicien britannique Alan Turing imagina la machine la plus simple qui soit : un ruban de papier infiniment long, divisé en cases, et une tête de lecture-écriture placée au-dessus du ruban.[^turing] La machine ne peut faire que quatre choses :

<!--t src=8dca73b9-->
- lire le signe inscrit dans la case courante,
- y écrire un signe,
- se déplacer d'une case vers la gauche ou vers la droite,
- passer dans un autre état.

<!--t src=809b83ec-->
Rien de plus. Ce qu'elle fait à chaque étape est consigné dans une table finie : « Si tu es dans l'état 3 et que tu lis un 1, alors écris 0, va à droite et passe à l'état 5. »

<!--t src=d7cf00d4-->
Le plus stupéfiant : cette machine peut calculer tout ce qu'un ordinateur moderne peut calculer. Votre portable est plus rapide et plus commode, mais pas plus puissant.

<!--t src=f0765d20-->
## Une machine de Turing en papier toilette et en cailloux

<!--t src=e12fc81a-->
On peut effectivement reconstruire une machine de Turing, sans la moindre électronique. Un rouleau de papier toilette fournit le ruban, chaque feuille est une case. Des cailloux ou des pièces sont les signes : un caillou signifie 1, une feuille vide signifie 0. Vous écrivez votre table d'états sur un bout de papier, votre état est une allumette que vous posez sur la ligne courante. Vous êtes vous-même la tête de lecture-écriture.

<!--t src=6a45c6fc-->
Ce n'est pas un jeu, mais une remarque sérieuse : calculer n'a pas besoin de puce. Il faut un support, des règles et quelqu'un ou quelque chose qui exécute les règles sans réfléchir. Ce que fait votre ordinateur, vous le faites aussi avec du papier toilette. Simplement beaucoup plus lentement.

<!--t src=90b6793d-->
## Les automates peuvent-ils répondre à toutes les questions clairement posées ?

<!--t src=e33a1558-->
On est tenté d'espérer qu'une machine doive pouvoir répondre à toute question, pourvu qu'elle soit posée avec assez de précision. Turing a montré que cet espoir est faux.

<!--t src=8e740bd0-->
Son résultat le plus célèbre est le **problème de l'arrêt**. La question est la suivante : existe-t-il un programme qui prédise de façon fiable, pour n'importe quel autre programme, s'il finira par s'arrêter ou tournera indéfiniment ? La question est parfaitement claire. Et la réponse est : non, un tel programme ne peut pas exister.

<!--t src=371c5dd4-->
La démonstration procède par contradiction. Supposons qu'il existe un vérificateur d'arrêt parfait. On pourrait alors construire une machine malicieuse qui applique ce vérificateur à elle-même et fait ensuite exactement le contraire : si le vérificateur dit « elle s'arrête », elle tourne indéfiniment ; s'il dit « elle tourne indéfiniment », elle s'arrête aussitôt. Le vérificateur a donc tort dans tous les cas. Il ne peut donc pas exister.

<!--t src=6d17870f-->
C'est une limite de principe, non une limite technique. Aucun calculateur plus rapide, aucun modèle de langue plus grand et aucun ordinateur quantique ne la franchira jamais. Il existe des questions clairement formulées qui sont indécidables par principe.

<!--t src=25c0361b-->
## Fini, infini, compliqué

<!--t src=5b395261-->
Les automates existent en différentes puissances, et les différences tiennent à la mémoire.

<!--t src=e919edf2-->
Un **automate fini** n'a qu'un nombre fini d'états et pas de ruban. Il peut commander un feu de circulation ou vérifier qu'une adresse électronique contient un @. Mais il ne peut pas compter combien de parenthèses restent ouvertes, car il lui faudrait pour cela une mémoire illimitée.

<!--t src=da38ce4f-->
La **machine de Turing**, avec son ruban infini, se situe au sommet de cette hiérarchie. Entre les deux se trouvent d'autres modèles, par exemple les automates à pile, qui savent compter les parenthèses mais guère plus.

<!--t src=1b704b16-->
Même là où une tâche est en principe soluble, la question du coût demeure. Certains problèmes se résolvent en un temps raisonnable, d'autres seulement après des millions d'années de calcul. Cette distinction entre « calculable » et « calculable en pratique » est l'objet de la théorie de la complexité et la raison pour laquelle le chiffrement fonctionne.

<!--t src=94de333d-->
## Pourquoi cette page est ici

<!--t src=6c577b6a-->
Ce chapitre traite des mondes artificiels et de l'intelligence artificielle. Tout ce qui vient dans les pages suivantes, des probabilités aux grands modèles de langue en passant par les réseaux de neurones, revient au bout du compte à des automates. Ce sont de très grands, très rapides, très impressionnants automates. Mais les limites que Turing a trouvées en 1936 avec du papier et un crayon valent pour eux tous.

<!--t src=61d521c3-->
[^turing]: Alan M. Turing : _On Computable Numbers, with an Application to the Entscheidungsproblem_, Proceedings of the London Mathematical Society, 1936.
