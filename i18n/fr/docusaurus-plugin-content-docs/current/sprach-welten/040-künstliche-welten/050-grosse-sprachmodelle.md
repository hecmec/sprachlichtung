---
id: grands_modeles_de_langue
title: Grands modèles de langue
title_meta: "Grands modèles de langue : ce qui est nouveau, où cela va et la question de l'AGI"
sidebar_label: Grands modèles de langue
sidebar_position: 7
description: Ce qui distingue les grands modèles de langue des systèmes d'IA antérieurs, comment ils sont fabriqués, s'ils s'améliorent toujours et ce qu'il faut penser du discours sur l'AGI.
keywords:
  - Grands modèles de langue
  - LLM
  - Lois d'échelle
  - Affinage
  - AGI
  - Bancs d'essai
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=5b589ab6-->
## Ce qui est vraiment nouveau

<!--t src=d83fdae1-->
Techniquement, un grand modèle de langue n'est rien d'autre que la machine décrite au [chapitre précédent](./040-generative-ki.md) : il estime la manière dont une suite se poursuit. Trois choses sont nouvelles.

<!--t src=bbd0ac1d-->
**Premièrement, la taille.** L'entraînement ne porte pas sur un domaine de spécialité, mais sur une part considérable du texte écrit disponible, avec des coûts de calcul de l'ordre de la puissance d'une centrale électrique.

<!--t src=c636268b-->
**Deuxièmement, le fait que la taille change qualitativement la chose.** On attendait une meilleure prédiction de texte. On a obtenu des systèmes qui traduisent, résument, programment et argumentent, sans que personne leur ait enseigné ces tâches. Qui veut seulement bien prédire le mot suivant doit visiblement apprendre au passage bien des choses sur la grammaire, les faits et le raisonnement.

<!--t src=b4ef51e4-->
**Troisièmement, la manière de s'en servir.** L'IA d'autrefois était un outil pour spécialistes, avec une tâche fixée. Un modèle de langue se commande avec du langage. Cela explique sa force de frappe sociale mieux que n'importe quel progrès technique.

<!--t src=c6fff48a-->
## Comment naît un tel modèle

<!--t src=7164f303-->
Le chemin comporte deux moitiés très inégales.

<!--t src=957a7a35-->
Lors du **pré-entraînement**, le modèle apprend pendant des mois, à partir d'immenses quantités de texte, une seule chose : prédire le mot suivant. Il sait ensuite beaucoup, mais il est inutilisable, parce qu'il ne suit pas les consignes, il les prolonge.

<!--t src=256a7304-->
Lors du **post-entraînement**, il est ajusté avec relativement peu d'exemples pour répondre à des questions, puis aligné sur des jugements humains : de deux réponses, des personnes choisissent la meilleure, et le modèle en apprend ce qui est souhaité.[^instruct]

<!--t src=d2f1dc82-->
Cette seconde moitié façonne le caractère du système. Le ton poli, serviable et prudent n'est pas un trait de nature, mais un résultat d'entraînement. Et les critères d'évaluation ont été fixés par une entreprise.

<!--t src=43038a6a-->
## Deviennent-ils toujours plus intelligents ?

<!--t src=b09bddfc-->
Vers 2020, on a découvert des relations d'une régularité étonnante : plus de puissance de calcul, plus de données et plus de paramètres améliorent la qualité de prédiction selon une courbe lisse.[^scaling] Il est apparu ensuite que beaucoup de modèles avaient tout simplement vu trop peu de texte pour leur taille.[^chinchilla] Ces règles de calcul ont alimenté la course aux systèmes toujours plus grands.

<!--t src=9742c5bd-->
Seulement, cette voie se heurte à plusieurs murs à la fois : le texte humain de qualité est fini, les coûts croissent plus vite que le bénéfice, et les courbes s'aplatissent. L'effort s'est donc déplacé. Au lieu d'agrandir les modèles, on les laisse calculer plus longtemps au moment de répondre, travailler par étapes intermédiaires, appeler des outils et vérifier des résultats. Le gain vient aujourd'hui davantage de la manière de travailler que de la taille du modèle.

<!--t src=d1eca667-->
Devant le mot « intelligent », la prudence s'impose. On mesure sur des collections de tests, et ces tests sont sur Internet, donc peut-être aussi dans les données d'entraînement. Un bond dans le score n'est donc pas automatiquement un bond dans la compétence. Ce qui reste frappant, c'est le mélange : ces systèmes résolvent des exercices de niveau concours et échouent sur des tâches que des enfants maîtrisent.

<!--t src=90c79544-->
## Aurons-nous bientôt l'AGI ?

<!--t src=63f788ce-->
L'« intelligence artificielle générale » est censée désigner un système capable d'accomplir toute tâche intellectuelle au niveau humain. Le problème commence avec la définition : il n'en existe pas de reconnue, et celles qui circulent se déplacent au gré de ce que les systèmes savent faire à l'instant. Les prévisions de date vont de quelques années à jamais, ce qui montre surtout que personne n'en sait rien.

<!--t src=f7fbaa37-->
On peut nommer sobrement ce qui manque aux systèmes actuels : un modèle du monde fiable plutôt que des statistiques de langage, une mémoire durable d'une session à l'autre, la capacité d'apprendre à partir de quelques exemples comme le fait un enfant, une notion de cause et d'effet, ainsi que la fiabilité. Un système qui brille dans quatre-vingt-dix pour cent des cas et se trompe avec assurance dans dix pour cent n'est pas une intelligence générale, mais un outil qui exige une surveillance.

<!--t src=077ec80c-->
Observez en outre qui parle d'AGI. Le récit de la superintelligence imminente est à la fois publicité et avertissement, et il vient souvent des maisons mêmes qui lèvent des capitaux.

<!--t src=773685f6-->
## Ce que cela veut dire en pratique

<!--t src=eadec9d4-->
- Traitez les réponses comme un brouillon, non comme un renseignement. Tout ce qui compte peut être vérifié.
- Devant chaque affirmation sur les capacités, demandez : mesuré à quoi, comparé à quoi ?
- Utilisez ces systèmes là où vous pouvez juger le résultat. C'est exactement là qu'ils sont forts.
- Ne confondez pas la fluidité de la langue avec la compétence sur le fond. La fluidité est entraînée, la compétence est un sous-produit.

<!--t src=63ffc268-->
[^instruct]: Long Ouyang et al. : _Training language models to follow instructions with human feedback_, NeurIPS, 2022.

<!--t src=368c3474-->
[^scaling]: Jared Kaplan et al. : _Scaling Laws for Neural Language Models_, arXiv, 2020.

<!--t src=a60f0206-->
[^chinchilla]: Jordan Hoffmann et al. : _Training Compute-Optimal Large Language Models_, NeurIPS, 2022.
