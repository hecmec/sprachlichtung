---
title: Validité et solidité
sidebar_position: 60
description: Distinction entre la validité et la solidité des arguments, avec des exemples pour évaluer les conclusions logiques.
keywords:
  - validité
  - solidité
  - forme logique
  - valeur de vérité
  - évaluation d'arguments
  - analyse critique
last_update:
  date: 2026-01-28
  author: Immanuel Lupinus
completeness: 3/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=a1217c05-->
La validité et la solidité sont des concepts centraux pour évaluer les arguments en logique.

<!--t src=15c0765d-->
## La validité (validity)

<!--t src=10ce9bca-->
Un argument est **valide** lorsque la conclusion découle logiquement des prémisses.

<!--t src=044a6f37-->
:::tip Définition
Un raisonnement est **valide** :

**Si toutes les prémisses sont vraies, la conclusion doit l'être aussi.**

_ou autrement dit_

Si toutes les prémisses sont vraies, alors la conclusion ne peut pas être fausse.
:::

<!--t src=3c93250c-->
La validité ne concerne que la forme logique de l'argument, non la valeur de vérité des prémisses.

<!--t src=58c57cde-->
**Exemple d'un argument valide :**
- Prémisse 1 : Tous les hommes sont mortels.
- Prémisse 2 : Socrate est un homme.
- Conclusion : Socrate est mortel.

<!--t src=a756e62f-->
Cet argument est valide, parce que la conclusion découle logiquement des prémisses. Si les deux prémisses sont vraies, la conclusion doit l'être aussi.

<!--t src=f23895e2-->
**Exemple d'un argument invalide :**
- Prémisse 1 : Tous les chiens sont des animaux.
- Prémisse 2 : Certains animaux savent nager.
- Conclusion : Certains chiens savent nager.

<!--t src=f932def6-->
Cet argument est invalide, parce que la conclusion ne découle pas nécessairement des prémisses. Même si les deux prémisses sont vraies, la conclusion pourrait être fausse (il se pourrait qu'aucun chien ne sache nager, même si certains autres animaux le peuvent).

<!--t src=0a3a1e46-->
## Solidité, correction (soundness)

<!--t src=094da10d-->
Un argument est **correct** ou **solide** lorsqu'il (1) est valide et (2) que toutes ses prémisses sont effectivement vraies. La solidité concerne à la fois la forme logique et la valeur de vérité des prémisses.

<!--t src=6f0cf28d-->
**Exemple d'un argument correct :**
- Prémisse 1 : Tous les hommes sont mortels. (Vrai)
- Prémisse 2 : Socrate est un homme. (Vrai)
- Conclusion : Socrate est mortel.

<!--t src=cff9389c-->
Cet argument est solide, parce qu'il est valide et que les deux prémisses sont vraies.

<!--t src=a2a0fae5-->
**Exemple d'un argument valide, mais non correct :**
- Prémisse 1 : Tous les chats savent voler. (Faux)
- Prémisse 2 : Felix est un chat. (Vrai)
- Conclusion : Felix sait voler.

<!--t src=382326c1-->
Cet argument est valide (la conclusion découle logiquement des prémisses), mais n'est pas solide, parce que la première prémisse est fausse.

<!--t src=b3655d38-->
<!-- TODO: Beispiel von Aristoteles 
Alle Menschen sind ... -->

<!--t src=51bdfdae-->
## Relation entre validité et solidité

<!--t src=0677088a-->
La relation entre la validité et la solidité peut se résumer ainsi :

<!--t src=e43c3dbb-->
- La **validité** ne concerne que la **forme logique** : la conclusion découle-t-elle des prémisses ?
- La **solidité** concerne la **forme logique ET la valeur de vérité** : la conclusion découle-t-elle des prémisses ET toutes les prémisses sont-elles vraies ?
- Tout argument solide est valide, mais tout argument valide n'est pas solide.
- Un argument solide garantit une conclusion vraie.

<!--t src=385f4b6e-->
## Importance pour la pensée critique

<!--t src=88abbe8b-->
La distinction entre validité et solidité est importante pour la pensée critique, pour plusieurs raisons :

<!--t src=1f9aeda3-->
1. Elle permet une évaluation nuancée des arguments : un argument peut être logiquement correct (valide), mais conduire néanmoins à des conclusions fausses si les prémisses sont fausses.

<!--t src=e624419e-->
2. Elle attire l'attention sur deux aspects distincts de l'argumentation :
   - La structure logique (validité)
   - Le fondement factuel (vérité des prémisses)

<!--t src=e1d6ff9d-->
3. Elle aide à identifier plus précisément les erreurs d'argumentation :
   - Les erreurs formelles (invalidité)
   - Les erreurs de contenu (prémisses fausses)
