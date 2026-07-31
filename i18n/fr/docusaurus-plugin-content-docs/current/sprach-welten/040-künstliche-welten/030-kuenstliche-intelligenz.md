---
id: intelligence_artificielle
title: Intelligence artificielle
title_meta: "Intelligence artificielle : branches, formes d'apprentissage et domaines d'application"
sidebar_label: Intelligence artificielle
sidebar_position: 3
description: Ce que recouvre l'intelligence artificielle, comment les machines apprennent, où l'IA est depuis longtemps présente au quotidien et vers où le domaine se dirige.
keywords:
  - Intelligence artificielle
  - Apprentissage automatique
  - Réseaux de neurones
  - Apprentissage supervisé
  - Apprentissage par renforcement
  - Domaines d'application
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=9be62154-->
## Quelques faits surprenants

<!--t src=38d85d4a-->
**Premièrement :** « intelligence artificielle » ne désigne pas une chose, mais une frontière qui ne cesse de reculer. Les ordinateurs d'échecs passaient pour de l'IA jusqu'à ce qu'ils gagnent. La reconnaissance vocale passait pour de l'IA jusqu'à ce qu'elle se retrouve dans le téléphone. Dès que quelque chose fonctionne de façon fiable, cela s'appelle soudain simplement un logiciel. L'informaticien Larry Tesler l'a résumé en une formule : l'IA, c'est tout ce qui n'a pas encore été fait.[^tesler]

<!--t src=6788fcaa-->
**Deuxièmement :** l'IA qui influence réellement votre vie est discrète. Elle décide de votre solvabilité, présélectionne les candidatures, planifie votre itinéraire, propose la vidéo suivante et lit vos radiographies avec vous. Les agents conversationnels en sont la partie visible, mais nullement la plus lourde de conséquences.

<!--t src=018dec22-->
**Troisièmement :** l'idée de base des réseaux de neurones date des années 1940, la méthode d'apprentissage décisive des années 1980. Ce qui est nouveau, ce n'est pas la théorie. Ce sont les volumes de données et la puissance de calcul.

<!--t src=0459acb7-->
## Qu'est-ce qui en fait partie ?

<!--t src=d40cbd8e-->
L'IA est un toit sous lequel se trouvent des outils très différents.

<!--t src=d0434564-->
L'**IA symbolique** travaille avec des règles explicitement formulées et de la logique. Les systèmes experts des années 1980 en font partie, mais aussi les systèmes actuels de planification et de démonstration. Ils sont compréhensibles et rigides.

<!--t src=446d0ac5-->
L'**apprentissage automatique** dégage des motifs à partir de données au lieu de prescrire des règles, comme le décrit le [chapitre précédent](./020-progamme-und-wahrscheinlichkeiten.md).

<!--t src=39a08079-->
Les **réseaux de neurones et l'apprentissage profond** forment une famille particulièrement fructueuse au sein de l'apprentissage automatique : de nombreuses couches d'unités de calcul simples qui, ensemble, représentent des relations compliquées.

<!--t src=d2bb9006-->
Transversalement se trouvent des domaines de travail comme le traitement d'images, le traitement du langage, la robotique et la recherche d'information. Quand quelqu'un dit « l'IA », il vaut la peine de demander de laquelle de ces choses il parle.

<!--t src=20619c36-->
## La question : que veut dire qu'une machine apprend ?

<!--t src=80e8ef0f-->
Apprendre évoque la compréhension. Ce que l'on entend par là est plus prosaïque : un programme possède de nombreux réglages, d'abord fixés au hasard, et il les ajuste jusqu'à ce que ses sorties correspondent mieux aux exemples. Il y a trois manières de lui donner un retour pendant ce processus.

<!--t src=37d0297a-->
L'**apprentissage supervisé** est un apprentissage avec corrigé. On montre des exemples accompagnés de la bonne réponse : cette image montre une tumeur, celle-là non. C'est la forme la plus répandue et la plus gourmande en données. Quelqu'un doit fournir les réponses, le plus souvent des personnes sous-payées.

<!--t src=230e0065-->
L'**apprentissage non supervisé** est un apprentissage sans corrigé. Le programme ne reçoit que des données et cherche lui-même une structure, par exemple des groupes de clients au comportement semblable. Il trouve des motifs, mais personne ne lui a dit lesquels sont importants.

<!--t src=0450a82c-->
L'**apprentissage par renforcement** est un apprentissage par récompense. Le programme essaie, reçoit des points pour les bons résultats et adapte son comportement. C'est ainsi que des systèmes apprennent des jeux et des robots à saisir. Le hic : ils optimisent exactement le score, non ce que vous vouliez dire.

<!--t src=37f3a5f4-->
## Théorie et pratique : la question de la récompense

<!--t src=62641999-->
Ce dernier avertissement n'est pas de la théorie. Un système de plateforme vidéo optimisé sur le temps passé apprend immanquablement que l'indignation retient plus longtemps que la sobriété. Il n'a aucune intention politique. Il a une fonction objectif, et il la remplit parfaitement.

<!--t src=2e1bcbe9-->
C'est exactement la leçon pratique de la notion d'apprentissage : un système qui apprend ne fait jamais ce qui est souhaité, mais toujours ce qui est mesurable. Qui veut savoir comment une IA va se comporter doit demander sur quoi elle a été optimisée et qui a choisi cette grandeur.

<!--t src=4796b603-->
Il en va de même pour les données. Un filtre de candidatures qui apprend de décisions d'embauche passées en reprend les préjugés, désormais assortis de l'aura de l'objectivité mathématique.

<!--t src=9412f879-->
## Vers où le domaine se dirige

<!--t src=1e7df3bc-->
Quatre évolutions marquent le présent :

<!--t src=5b9159d5-->
- **La multimodalité :** un modèle traite conjointement texte, image, son et vidéo au lieu de les traiter séparément.
- **Les agents :** des systèmes exécutent des tâches en plusieurs étapes, appellent des outils et agissent au lieu de se contenter de répondre.
- **Les petits modèles :** à côté des géants apparaissent des modèles compacts qui tournent localement sur votre propre appareil, sans envoyer de données dans un nuage étranger.
- **La régulation :** avec le règlement européen sur l'IA, on distingue pour la première fois selon le risque et non selon la technique.

<!--t src=9d2868d8-->
Ce qui, dans tout cela, ne change pas : ce sont des automates qui estiment des probabilités. Les capacités croissent à une vitesse étonnante, le mode de fonctionnement fondamental, non.

<!--t src=98bf591d-->
[^tesler]: Attribué d'après Douglas R. Hofstadter : _Gödel, Escher, Bach_, Basic Books, 1979, où la formule est citée comme le « théorème de Tesler ».
