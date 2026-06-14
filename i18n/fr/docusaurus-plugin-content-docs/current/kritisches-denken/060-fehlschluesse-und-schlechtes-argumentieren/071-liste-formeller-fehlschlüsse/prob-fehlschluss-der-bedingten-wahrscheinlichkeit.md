---
title: Sophisme de la probabilité conditionnelle
title_meta: Sophisme de la probabilité conditionnelle
sidebar_label: Probabilité conditionnelle
sidebar_position: 1
description: Description du sophisme de la probabilité conditionnelle (Confusion of the Inverse)
keywords:
  - Sophismes
  - Fallacies
  - Probabilité
  - pensée critique
  - probabilité conditionnelle
  - Confusion of the Inverse
id: sophisme_probabilite_conditionnelle
last_update:
  date: 2026-06-07
  author: Immanuel Lupinus
completeness: 4/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=5900d1c5-->
:::tip En bref
La probabilité conditionnelle $P(A \mid B)$ est confondue avec son inverse $P(B \mid A)$.

_« Si A, alors souvent B » ne signifie pas « Si B, alors souvent A »._
:::

<!--t src=23594b0b-->
## Définition

<!--t src=afa2ea22-->
Le **sophisme de la probabilité conditionnelle** (inversion du conditionnement) assimile deux probabilités conditionnelles différentes : la probabilité de $A$ sous la condition $B$ et celle de $B$ sous la condition $A$.

<!--t src=64e3e9e1-->
L'erreur méconnaît le fait que $P(A \mid B)$ et $P(B \mid A)$ ne sont en général **pas** égales. Les deux sont reliées par le **théorème de Bayes**, qui intègre en plus les taux de base $P(A)$ et $P(B)$ :

<!--t src=a0d9b202-->
$$P(A \mid B) = \frac{P(B \mid A)\,\cdot\,P(A)}{P(B)}$$

<!--t src=3c24b250-->
Le sophisme a la forme suivante :

<!--t src=3044340b-->
1. $P(B \mid A)$ est élevée (par ex. « presque tous les A sont des B »).
2. Dans le cas présent, $B$ est avéré.
3. Donc $P(A \mid B)$ est elle aussi élevée.

<!--t src=4a6850df-->
Tant que les taux de base ne sont pas pris en compte, ce raisonnement n'est pas valide. Il est la racine structurelle de l'**erreur de prévalence** et de la **Prosecutor's Fallacy**.

<!--t src=5a5d0e48-->
EN : _confusion of the inverse_ / _conditional probability fallacy_

<!--t src=2851dcb3-->
## Parenté

<!--t src=4d08b756-->
<!-- zähle ähnliche Fehlschlüsse auf -->

<!--t src=880a89be-->
- **Erreur de prévalence** &mdash; la forme de manifestation la plus fréquente, lorsque le taux de base est en outre négligé.
- **Prosecutor's Fallacy** &mdash; la variante médico-légale : $P(\text{Spur} \mid \text{unschuldig})$ est confondue avec $P(\text{unschuldig} \mid \text{Spur})$.
- **Inversion du conditionnel** &mdash; le pendant logique : il s'agit là de l'inversion illégitime du conditionnel plutôt que de la probabilité conditionnelle.

<!--t src=9dbba01b-->
## Exemples

<!--t src=a67a7a61-->
### Exemple 1

<!--t src=5422e642-->
<!-- Beschreibung Beispiel eins -->

<!--t src=102f7a52-->
> « La plupart des victimes de la route ne portaient pas de casque &mdash; donc un casque ne protège guère. »

<!--t src=ae523f2a-->
Ce qu'il faudrait connaître, c'est $P(\text{Unfalltod} \mid \text{kein Helm})$, mais ce qui est indiqué est plutôt quelque chose comme $P(\text{kein Helm} \mid \text{Unfalltod})$. Sans le taux de base (combien de personnes ne portent tout simplement pas de casque), le raisonnement est sans valeur.

<!--t src=f350657d-->
### Exemple 2

<!--t src=c7d6981c-->
<!-- Beschreibung Beispiel zwei -->

<!--t src=f576a906-->
> Dans la salle d'audience : « La probabilité qu'une personne innocente présente cette trace ADN est de 1 sur un million. Donc l'accusé est innocent avec cette probabilité. »

<!--t src=e298db25-->
Cela confond $P(\text{Spur} \mid \text{unschuldig})$ avec $P(\text{unschuldig} \mid \text{Spur})$. Avec de nombreux suspects possibles, il peut y avoir, malgré la rareté de la trace, bon nombre de personnes innocentes correspondant par hasard.

<!--t src=69b1092f-->
## Sources

<!--t src=63102e9b-->
<!-- Wo wird dieser Fehlschluss beschrieben. (Wikipedia, etc) -->

<!--t src=702a53c3-->
- [Wikipedia (de) : Confusion of the Inverse](https://de.wikipedia.org/wiki/Confusion_of_the_Inverse)
- [Wikipedia : Confusion of the inverse](https://en.wikipedia.org/wiki/Confusion_of_the_inverse)
- [Wikipedia : Prosecutor's fallacy](https://en.wikipedia.org/wiki/Prosecutor%27s_fallacy)
