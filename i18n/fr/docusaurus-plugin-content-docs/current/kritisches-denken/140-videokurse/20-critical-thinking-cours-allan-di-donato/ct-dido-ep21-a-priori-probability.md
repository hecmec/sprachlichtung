---
title: "21. A Priori Probability"
sidebar_position: 21
keywords:
  - a priori probability
  - probability calculations
  - conjunction rule
  - permutations and combinations
  - independent and dependent events
  - types of averages
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
translation_status: manual
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/gmf5pdW_3U8' />

&nbsp;

<div className="row">
<div className="col col--6">

## Summary

</div>
<div className="col col--6 video-translation">

<h2>Résumé</h2>

</div>
</div>

<div className="row">
<div className="col col--6">

Building on the previous discussion of mathematical certainty, this lecture turns to **probability**: the likelihood that something is the case, which always comes in degrees. Since only perfect inductions yield certainty and those are rare, we usually operate in the realm of probability. There are two kinds, and this video focuses almost entirely on the first.

</div>
<div className="col col--6 video-translation">

Dans le prolongement de la discussion précédente sur la certitude mathématique, ce cours passe à la **probabilité** : la vraisemblance qu’une chose soit le cas, laquelle s’exprime toujours en degrés. Puisque seules les inductions parfaites livrent la certitude et qu’elles sont rares, nous évoluons le plus souvent dans le domaine de la probabilité. Il en existe deux sortes, et cette vidéo se concentre presque entièrement sur la première.

</div>
</div>

<div className="row">
<div className="col col--6">

### A Priori vs. A Posteriori Probability

</div>
<div className="col col--6 video-translation">

<h3>Probabilité a priori et a posteriori</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**A priori probability** (Latin for "from what comes before") is purely mathematical, logical, and statistical. It is independent of events or experience and can be computed without observing anything in the world, for example the chance of winning a lottery you have never run. **A posteriori probability** (Latin for "from what comes after") is empirical, scientific, and experimental. It depends on accumulated observational data, for example the chance that a 20-year-old man lives to 75.

</div>
<div className="col col--6 video-translation">

La **probabilité a priori** (du latin « à partir de ce qui précède ») est purement mathématique, logique et statistique. Elle est indépendante des événements et de l’expérience et peut se calculer sans rien observer dans le monde : par exemple les chances de gagner à une loterie que l’on n’a jamais organisée. La **probabilité a posteriori** (du latin « à partir de ce qui suit ») est empirique, scientifique et expérimentale. Elle dépend de données d’observation accumulées : par exemple la probabilité qu’un homme de 20 ans atteigne 75 ans.

</div>
</div>

<div className="row">
<div className="col col--6">

A natural question is why we speak of probability rather than certainty if the calculations are mathematical. We *can* have mathematical certainty about the calculations themselves and know an exact probability, but the result still only describes the chance that something occurs. Numbers have no causal power, and whether an event actually happens is influenced by factors beyond the math.

</div>
<div className="col col--6 video-translation">

On se demande naturellement pourquoi parler de probabilité plutôt que de certitude si les calculs sont mathématiques. Nous *pouvons* avoir une certitude mathématique sur les calculs eux-mêmes et connaître une probabilité exacte, mais le résultat ne décrit toujours que la chance qu’une chose se produise. Les nombres n’ont aucun pouvoir causal, et la survenue effective d’un événement dépend de facteurs étrangers au calcul.

</div>
</div>

<div className="row">
<div className="col col--6">

### Exclusive (Single) Events

</div>
<div className="col col--6 video-translation">

<h3>Les événements exclusifs (isolés)</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

For an **exclusive event**, taken by itself and not combined with or dependent on any other, the formula is simple: divide the number of **target events** (T) that satisfy the criteria by the number of **possible outcomes** (P). So the probability of A equals T / P.

</div>
<div className="col col--6 video-translation">

Pour un **événement exclusif**, pris en lui-même et ni combiné à un autre ni dépendant d’un autre, la formule est simple : diviser le nombre d’**événements visés** (V) qui satisfont au critère par le nombre d’**issues possibles** (P). La probabilité de A est donc égale à V / P.

</div>
</div>

<div className="row">
<div className="col col--6">

- Heads on a coin toss: 1 target out of 2 outcomes = 1/2 (50%).
- Rolling a six on a die: 1 out of 6.
- Drawing a particular card: 1 out of 52.

</div>
<div className="col col--6 video-translation">

- Face à pile ou face : 1 événement visé sur 2 issues = 1/2 (50 %).
- Faire un six avec un dé : 1 sur 6.
- Tirer une carte déterminée : 1 sur 52.

</div>
</div>

<div className="row">
<div className="col col--6">

### Independent Events

</div>
<div className="col col--6 video-translation">

<h3>Les événements indépendants</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**Independent events** are multiple events where one has no effect on another. To combine them, compute each event's odds separately and multiply, using the **restricted conjunction rule**: P(A and B) = P(A) × P(B).

</div>
<div className="col col--6 video-translation">

Les **événements indépendants** sont des événements multiples dont aucun n’a d’effet sur les autres. Pour les combiner, on calcule séparément les chances de chacun et on les multiplie, selon la **règle restreinte de la conjonction** : P(A et B) = P(A) × P(B).

</div>
</div>

<div className="row">
<div className="col col--6">

- Two coins both heads: 1/2 × 1/2 = 1/4.
- One heads and one tails: because two of the four combinations match the criterion, it reduces to a 2/2 chance on the first flip and 1/2 on the second = 1/2.
- Two sixes on dice: 1/6 × 1/6 = 1/36.
- A six and a four: two target events on the first roll, so 2/36 = 1/18.

</div>
<div className="col col--6 video-translation">

- Deux pièces sur face : 1/2 × 1/2 = 1/4.
- Une face et un pile : comme deux des quatre combinaisons satisfont au critère, cela se ramène à une chance de 2/2 au premier lancer et de 1/2 au second = 1/2.
- Deux six aux dés : 1/6 × 1/6 = 1/36.
- Un six et un quatre : deux événements visés au premier lancer, soit 2/36 = 1/18.

</div>
</div>

<div className="row">
<div className="col col--6">

### Dependent Events

</div>
<div className="col col--6 video-translation">

<h3>Les événements dépendants</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**Dependent events** are connected so that each influences the next. Drawing cards without replacement is the classic case: the second draw has different odds because the deck has changed. The **general conjunction rule** handles both cases: P(A and B) = P(A) × P(B given A), where "B given A" is the probability of B occurring if A has occurred. For independent events, P(B given A) simply equals P(B), so this rule generalizes the restricted one.

</div>
<div className="col col--6 video-translation">

Les **événements dépendants** sont liés de telle sorte que chacun influence le suivant. Tirer des cartes sans remise en est le cas classique : le second tirage n’a pas les mêmes chances, car le jeu a changé. La **règle générale de la conjonction** couvre les deux cas : P(A et B) = P(A) × P(B sachant A), où « B sachant A » est la probabilité que B se produise si A s’est produit. Pour des événements indépendants, P(B sachant A) est simplement égale à P(B) : cette règle généralise donc la règle restreinte.

</div>
</div>

<div className="row">
<div className="col col--6">

Drawing two aces without replacement: P(A) = 4/52, P(B given A) = 3/51 (one fewer ace, one fewer card). Multiplying gives roughly 1 in 221.

</div>
<div className="col col--6 video-translation">

Tirer deux as sans remise : P(A) = 4/52, P(B sachant A) = 3/51 (un as de moins, une carte de moins). La multiplication donne environ 1 chance sur 221.

</div>
</div>

<div className="row">
<div className="col col--6">

### Permutations and Combinations

</div>
<div className="col col--6 video-translation">

<h3>Permutations et combinaisons</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

To count how many arrangements are possible, the **simple permutation formula** uses the **factorial** (n!): multiply every whole number from 1 up to n.

</div>
<div className="col col--6 video-translation">

Pour dénombrer les arrangements possibles, la **formule des permutations simples** recourt à la **factorielle** (n!) : le produit de tous les entiers de 1 à n.

</div>
</div>

<div className="row">
<div className="col col--6">

- Arrangements of three letters (ABC): 3! = 6.
- Five people in five chairs: 5! = 120.
- A 10-digit code using each digit once: 10! = 3,628,800.

</div>
<div className="col col--6 video-translation">

- Arrangements de trois lettres (ABC) : 3! = 6.
- Cinq personnes sur cinq chaises : 5! = 120.
- Un code à 10 chiffres utilisant chaque chiffre une seule fois : 10! = 3 628 800.

</div>
</div>

<div className="row">
<div className="col col--6">

When we want only a **subset** of r items from n, we use n! / (n − r)!. A three-number code from a 10-digit keypad with no repeats: 10! / 7! = 10 × 9 × 8 = 720.

</div>
<div className="col col--6 video-translation">

Lorsque nous ne voulons qu’un **sous-ensemble** de r éléments parmi n, nous utilisons n! / (n − r)!. Un code à trois chiffres sur un clavier de 10 chiffres, sans répétition : 10! / 7! = 10 × 9 × 8 = 720.

</div>
</div>

<div className="row">
<div className="col col--6">

Because real codes usually *allow repetition*, we need the **complex permutation formula**: raise the number of options per position to the power of the number of positions.

</div>
<div className="col col--6 video-translation">

Comme les codes réels *autorisent* généralement la répétition, il nous faut la **formule des permutations complexes** : élever le nombre d’options par position à la puissance du nombre de positions.

</div>
</div>

<div className="row">
<div className="col col--6">

- Three-letter combinations from ABC with repeats: 3³ = 27.
- A 10-digit code allowing repeats: 10¹⁰ = 10 billion.
- A safe with three 15-number dials: 15³ = 3,375.

</div>
<div className="col col--6 video-translation">

- Combinaisons de trois lettres parmi ABC avec répétitions : 3³ = 27.
- Un code à 10 chiffres autorisant les répétitions : 10¹⁰ = 10 milliards.
- Un coffre-fort à trois molettes de 15 chiffres : 15³ = 3 375.

</div>
</div>

<div className="row">
<div className="col col--6">

Notice that guessing the correct three-letter combination returns us to the basic rule: for each position there is 1 target out of 3 options, so 1/3 × 1/3 × 1/3 = 1/27.

</div>
<div className="col col--6 video-translation">

Remarquons que deviner la bonne combinaison de trois lettres nous ramène à la règle de base : pour chaque position, il y a 1 cible sur 3 options, soit 1/3 × 1/3 × 1/3 = 1/27.

</div>
</div>

<div className="row">
<div className="col col--6">

### Back to A Posteriori Probability and Averages

</div>
<div className="col col--6 video-translation">

<h3>Retour à la probabilité a posteriori et aux moyennes</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The key contrast is that a priori probability can be calculated exactly *before* any event, whereas **a posteriori probability** cannot be calculated until *after* events and observations. This is why it is tied to the **scientific method**, which provides guidelines for forming and testing hypotheses, the topic of the next video. Examples include presidential approval polls, which must actually be taken, and computing an **average**, which requires collected data such as test scores.

</div>
<div className="col col--6 video-translation">

Le contraste essentiel est que la probabilité a priori se calcule exactement *avant* tout événement, tandis que la **probabilité a posteriori** ne peut se calculer qu’*après* des événements et des observations. C’est pourquoi elle est liée à la **méthode scientifique**, qui fournit les règles pour formuler et tester des hypothèses, sujet de la prochaine vidéo. Exemples : les sondages de popularité présidentielle, qui doivent réellement être réalisés, ou le calcul d’une **moyenne**, qui exige des données recueillies telles que des résultats d’examens.

</div>
</div>

<div className="row">
<div className="col col--6">

Crucially, "average" is **ambiguous**. There are three types:

</div>
<div className="col col--6 video-translation">

Point capital : le mot « moyenne » est **ambigu**. Il en existe trois types :

</div>
</div>

<div className="row">
<div className="col col--6">

- **Mean**: the sum of values divided by their count.
- **Median**: the middle value when data is ordered.
- **Mode**: the value occurring most frequently.

</div>
<div className="col col--6 video-translation">

- **La moyenne arithmétique** : la somme des valeurs divisée par leur nombre.
- **La médiane** : la valeur centrale une fois les données ordonnées.
- **Le mode** : la valeur qui revient le plus souvent.

</div>
</div>

<div className="row">
<div className="col col--6">

For a small firm's salaries, the mean might be \$65,000, the median \$45,000, and the mode \$30,000, where nearly half the employees fall. The chosen average can dramatically change an argument about income, taxes, life expectancy, or global temperatures. The closing warning: we cannot evaluate information critically when terms are imprecise or when we ignore distinctions like the kinds of average, echoing earlier problems of **vagueness and ambiguity**.

</div>
<div className="col col--6 video-translation">

Pour les salaires d’une petite entreprise, la moyenne arithmétique pourrait être de \$65,000, la médiane de \$45,000 et le mode de \$30,000, là où se situe près de la moitié des employés. La moyenne retenue peut changer du tout au tout un argument portant sur les revenus, les impôts, l’espérance de vie ou les températures mondiales. Avertissement final : nous ne pouvons pas évaluer une information de façon critique lorsque les termes sont imprécis ou que nous négligeons des distinctions comme celle des types de moyenne, ce qui fait écho aux problèmes de **vague et d’ambiguïté** vus plus haut.

</div>
</div>
