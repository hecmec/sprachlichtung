---
title: Erreur de prévalence
title_meta: Erreur de prévalence
sidebar_label: Erreur de prévalence
sidebar_position: 1
id: erreur_de_prevalence
description: Description de l'erreur de prévalence ou de la négligence du taux de base (base rate fallacy)
keywords:
  - Sophismes
  - Fallacies
  - Probabilité
  - pensée critique
  - erreur de prévalence
  - Base Rate Fallacy
last_update:
  date: 2026-06-07
  author: Immanuel Lupinus
completeness: 4/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=29691d2e-->
:::tip En bref
La fréquence de base (prévalence) d'une caractéristique est ignorée et l'on ne tient compte que du taux de réussite d'un test.

_Sans taux de base, pas de jugement._
:::

<!--t src=23594b0b-->
## Définition

<!--t src=c1afa2c6-->
L'**erreur de prévalence** (négligence du taux de base) consiste, lors de l'évaluation d'une probabilité, à négliger la **fréquence de base** d'une caractéristique dans la population (la prévalence) et à se fier uniquement à la valeur informative apparemment élevée d'un test ou d'un indice.

<!--t src=86fbd915-->
L'erreur ignore que, pour une caractéristique **rare**, même un bon test produit de nombreux résultats **faussement positifs**, car la grande majorité saine dépasse numériquement les rares vrais positifs.

<!--t src=3c24b250-->
Le sophisme a la forme suivante :

<!--t src=1af807c1-->
1. Le test détecte la caractéristique avec un taux de réussite élevé (par ex. 99 %).
2. Chez une personne, le test est positif.
3. Donc la personne possède la caractéristique avec une probabilité d'environ 99 %.

<!--t src=7445f8dc-->
Correctement, la question « Quelle est la probabilité de la caractéristique _en cas de test positif_ ? » requiert le taux de base : il est pris en compte au moyen du **théorème de Bayes**.

<!--t src=d370887f-->
### Exemple chiffré

<!--t src=64d67d95-->
Une maladie a une prévalence de $0{,}1\,\%$. Le test détecte les malades à $99\,\%$ (sensibilité) et donne chez les personnes saines un résultat faussement positif dans $5\,\%$ des cas. Pour $100\,000$ personnes :

<!--t src=6365a438-->
- Malades : $100$ → dont positifs : $\approx 99$
- Sains : $99\,900$ → dont faussement positifs : $\approx 4995$

<!--t src=307997a8-->
$$P(\text{malade} \mid \text{positif}) = \frac{99}{99 + 4995} \approx 1{,}9\,\%$$

<!--t src=deebfbed-->
Malgré un « test à 99 % », une personne testée positive est saine avec une probabilité de plus de $98\,\%$.

<!--t src=34d355ad-->
EN : _base rate fallacy_ / _base rate neglect_

<!--t src=2851dcb3-->
## Parenté

<!--t src=4d08b756-->
<!-- zähle ähnliche Fehlschlüsse auf -->

<!--t src=c177a919-->
- **Sophisme de la probabilité conditionnelle** &mdash; étroitement apparenté : l'erreur de prévalence est au fond une confusion entre $P(A \mid B)$ et $P(B \mid A)$.
- **Prosecutor's Fallacy** &mdash; la variante judiciaire de la même erreur.
- **Sophisme du joueur** &mdash; apparenté en tant qu'erreur de probabilité typique.

<!--t src=9dbba01b-->
## Exemples

<!--t src=a67a7a61-->
### Exemple 1

<!--t src=5422e642-->
<!-- Beschreibung Beispiel eins -->

<!--t src=ae3ee0b4-->
> « Le test de dépistage de drogue est fiable à 99 % et il est positif chez toi &mdash; donc tu es consommateur avec une probabilité de 99 %. »

<!--t src=9dfed815-->
Si la consommation est rare dans le groupe testé, les faux positifs l'emportent. La probabilité réelle se situe souvent bien en dessous de 99 % (voir l'exemple chiffré).

<!--t src=f350657d-->
### Exemple 2

<!--t src=c7d6981c-->
<!-- Beschreibung Beispiel zwei -->

<!--t src=bc30a8ab-->
> Une reconnaissance faciale « avec une précision de 99,9 % » réagit sur une personne dans une foule. La police la traite comme la personne recherchée presque à coup sûr.

<!--t src=bdc146ac-->
Lorsqu'on cherche une seule personne parmi des millions, même un taux d'erreur infime produit bien plus de faux positifs que de vrais positifs.

<!--t src=69b1092f-->
## Sources

<!--t src=63102e9b-->
<!-- Wo wird dieser Fehlschluss beschrieben. (Wikipedia, etc) -->

<!--t src=5631bf19-->
- [Wikipédia : Négligence de la fréquence de base](https://fr.wikipedia.org/wiki/N%C3%A9gligence_de_la_fr%C3%A9quence_de_base)
- [Wikipedia: Base rate fallacy](https://en.wikipedia.org/wiki/Base_rate_fallacy)
