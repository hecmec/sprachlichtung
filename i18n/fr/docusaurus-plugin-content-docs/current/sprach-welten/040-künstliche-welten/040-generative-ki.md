---
id: ia_generative
title: IA générative
title_meta: "IA générative : de la série temporelle au LSTM et à l'attention"
sidebar_label: IA générative
sidebar_position: 6
description: "Comment fonctionne l'IA générative : engendrer, c'est prédire. Le chemin de la prévision de séries temporelles aux réseaux récurrents et au LSTM, jusqu'au mécanisme d'attention."
keywords:
  - IA générative
  - Série temporelle
  - Réseaux récurrents
  - LSTM
  - Attention
  - Transformeur
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=5164af19-->
## Engendrer, c'est prédire

<!--t src=235dfe5c-->
La phrase la plus surprenante au sujet de l'IA générative est celle-ci : elle n'engendre rien. Elle prédit.

<!--t src=0c601c6a-->
Un programme qui estime la consommation d'électricité de demain fait au fond la même chose qu'un programme qui écrit un texte. Tous deux reçoivent une suite de valeurs et estiment la suivante. La seule différence tient à ce que l'on fait de l'estimation. Dans la prévision, on la lit. Dans la génération, on l'ajoute à la fin de la suite et on redemande : et maintenant, que vient-il ?

<!--t src=fe112a4f-->
De cette unique rétroaction naît tout ce qui se vend aujourd'hui comme IA générative. Un générateur de texte est une prévision météorologique pour les mots, appliquée sans cesse à son propre résultat.

<!--t src=33f9d08a-->
## La question : comment une machine retient-elle ce qui précède ?

<!--t src=3b675203-->
Pour que la prédiction réussisse, le programme doit connaître le contexte. La mesure suivante dépend des précédentes, le mot suivant de la phrase déjà écrite. Un réseau de neurones ordinaire en est incapable : il ne voit jamais qu'une entrée fixe et n'a pas de mémoire. Toute l'évolution des trente dernières années se laisse lire comme une lutte autour de cette mémoire.

<!--t src=f1546ace-->
### Les réseaux récurrents : la boucle

<!--t src=59523476-->
La première réponse fut celle des **réseaux récurrents** (RNN). Le réseau traite la suite pas à pas et se redonne son propre résultat intermédiaire comme entrée supplémentaire. Cet état est sa mémoire à court terme.

<!--t src=9155b654-->
L'idée est élégante et fonctionne mal. Sur de longues suites, l'information du début s'estompe, parce qu'elle est repassée à chaque étape par le même calcul. Le réseau oublie le début de la phrase avant qu'elle ne soit finie.

<!--t src=df5271cf-->
### LSTM : oublier à dessein

<!--t src=e1c2dbc2-->
La deuxième réponse est venue en 1997 de Sepp Hochreiter et Jürgen Schmidhuber : le **Long Short-Term Memory**.[^lstm] Ils ont complété la boucle par de petites vannes, elles-mêmes apprises. Une vanne décide de ce qui entre en mémoire, une deuxième de ce qui en est effacé, une troisième de ce qui est transmis vers l'extérieur.

<!--t src=abe7d2f1-->
Un LSTM peut donc apprendre à retenir un détail sur une centaine de mots et à laisser tomber aussitôt l'accessoire. C'est ainsi qu'ont fonctionné pour la première fois la traduction automatique, la reconnaissance vocale au téléphone et une prédiction de texte utilisable.

<!--t src=ffb81250-->
Deux inconvénients demeuraient. Le modèle traite la suite strictement l'un après l'autre et ne se répartit donc guère sur de nombreux cœurs de calcul. Et tout ce qu'il veut retenir de mille mots doit passer par un unique état de mémoire : un goulot d'étranglement.

<!--t src=15a14021-->
### L'attention : tout regarder en même temps

<!--t src=fbdcd742-->
La troisième réponse a rejeté le goulot d'étranglement. Au lieu de comprimer le passé dans un état, le modèle peut à chaque étape se retourner sur **toutes** les positions précédentes et pondérer lui-même celles qui comptent sur le moment. Cette pondération s'appelle l'**attention**.

<!--t src=c93c5576-->
Devant le mot « elle » dans un long paragraphe, le modèle cherche l'endroit auquel le mot renvoie et lui donne un poids élevé. Rien n'a besoin d'être transmis sur cent étapes, le lien s'établit directement.

<!--t src=f384b9ae-->
En 2017, un groupe de Google a montré que l'on peut supprimer complètement la boucle et se contenter de l'attention seule.[^transformer] Le résultat s'appelle le transformeur. Comme plus aucune étape n'a besoin d'attendre la précédente, l'entraînement se répartit sur des milliers de cartes graphiques. C'est précisément cette parallélisation, et non une intelligence particulière de l'architecture, qui a rendu possibles les grands modèles d'aujourd'hui.

<!--t src=258b9f7b-->
## Pas seulement le texte

<!--t src=6797e33a-->
Les images naissent le plus souvent autrement, selon la même idée de fond. Dans la **diffusion**, un modèle apprend à retirer pas à pas le bruit d'une image.[^diffusion] Pour engendrer, on part d'un bruit pur et on laisse le modèle débruiter jusqu'à ce qu'une image apparaisse. Là non plus rien n'est inventé : en de nombreuses petites étapes, le modèle prédit la suite.

<!--t src=5dc738af-->
## Ce qui en découle dans la pratique

<!--t src=4e1a9527-->
- **Des réponses différentes :** les probabilités estimées font l'objet d'un tirage au sort. Son intensité est réglée par une valeur appelée température. C'est pourquoi poser deux fois la même question est deux fois le même processus, mais pas la même réponse.
- **Des sources inventées :** le modèle produit ce qui continue de façon plausible, non ce qui est exact. Une référence inventée suit la même statistique qu'une vraie.
- **La taille de la fenêtre compte :** ce qui se trouve hors de la fenêtre de texte considérée n'existe pas pour le modèle.
- **Le début détermine beaucoup :** comme chaque sortie s'ajoute à la suite déjà produite, l'amorce déteint sur tout ce qui suit. C'est pourquoi la formulation d'une requête a un effet aussi fort.

<!--t src=2b6968a6-->
[^lstm]: Sepp Hochreiter, Jürgen Schmidhuber : _Long Short-Term Memory_, Neural Computation 9(8), 1997.

<!--t src=992b6aef-->
[^transformer]: Ashish Vaswani et al. : _Attention Is All You Need_, NeurIPS, 2017.

<!--t src=a8d0effa-->
[^diffusion]: Jonathan Ho, Ajay Jain, Pieter Abbeel : _Denoising Diffusion Probabilistic Models_, NeurIPS, 2020.
