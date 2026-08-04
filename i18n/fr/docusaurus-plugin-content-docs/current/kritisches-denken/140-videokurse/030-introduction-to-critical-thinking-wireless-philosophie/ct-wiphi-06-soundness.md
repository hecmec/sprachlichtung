---
title: "6. Soundness"
sidebar_position: 6
keywords:
  - fundamentals
  - soundness
  - critical thinking
  - wireless philosophy
last_update:
  date: 2026-08-04
  author: Immanuel Lupinus

completeness: 4/5
translation_status: manual
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/3P0fUHUaZcs' />

&nbsp;

Wireless Philosophy, Fundamentals, 5:15. Original title: _CRITICAL THINKING - Fundamentals: Soundness [HD]_

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

Aaron Ancell (Duke University) introduces **soundness**, and begins by recalling why validity on its own is not enough. (If validity is still unfamiliar, watch the [video on validity](./ct-wiphi-04-validity.md) first.)

</div>
<div className="col col--6 video-translation">

Aaron Ancell (Duke University) introduit la **solidité** et commence par rappeler pourquoi la validité seule ne suffit pas. (Si la validité ne vous est pas encore familière, regardez d'abord la [vidéo sur la validité](./ct-wiphi-04-validity.md).)

</div>
</div>

<div className="row">
<div className="col col--6">

### Why validity is not enough

</div>
<div className="col col--6 video-translation">

<h3>Pourquoi la validité ne suffit pas</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

An argument is valid if it is impossible for all its premises to be true while its conclusion is false. That condition is met here:

</div>
<div className="col col--6 video-translation">

Un argument est valide s'il est impossible que toutes ses prémisses soient vraies alors que sa conclusion est fausse. Cette condition est remplie ici :

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** All cats are purple.<br />
> **Premise 2:** Everything that is purple is a person.<br />
> **Conclusion:** Therefore, all cats are people.

</div>
<div className="col col--6 video-translation">

> **Prémisse 1 :** Tous les chats sont violets.<br />
> **Prémisse 2 :** Tout ce qui est violet est une personne.<br />
> **Conclusion :** Donc tous les chats sont des personnes.

</div>
</div>

<div className="row">
<div className="col col--6">

If all cats were purple and all purple things were people, all cats would indeed be people. But not all cats are purple, so the argument, valid as it is, is not informative and establishes nothing. Since the goal of an argument is usually to show that a conclusion is true, we normally want more than validity.

</div>
<div className="col col--6 video-translation">

Si tous les chats étaient violets et si toutes les choses violettes étaient des personnes, tous les chats seraient effectivement des personnes. Mais tous les chats ne sont pas violets ; l'argument, tout valide qu'il soit, n'est donc pas informatif et n'établit rien. Comme le but d'un argument est en général de montrer qu'une conclusion est vraie, nous voulons normalement plus que la validité.

</div>
</div>

<div className="row">
<div className="col col--6">

### The two requirements

</div>
<div className="col col--6 video-translation">

<h3>Les deux exigences</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**Soundness** is a technical notion, distinct from ordinary talk of "sound advice" or "sound judgement", and like validity it applies only to deductive arguments. To be sound, an argument must meet **both** requirements:

</div>
<div className="col col--6 video-translation">

La **solidité** est une notion technique, distincte de la manière courante de parler d'un « conseil solide » ou d'un « jugement sûr », et, comme la validité, elle ne s'applique qu'aux arguments déductifs. Pour être solide, un argument doit satisfaire **les deux** exigences :

</div>
</div>

<div className="row">
<div className="col col--6">

1. The argument must be **valid**. Every invalid argument is unsound.
2. Its premises must **all be true**. A single false premise makes an argument unsound.

</div>
<div className="col col--6 video-translation">

1. L'argument doit être **valide**. Tout argument invalide est non solide.
2. Ses prémisses doivent **toutes être vraies**. Une seule prémisse fausse rend un argument non solide.

</div>
</div>

<div className="row">
<div className="col col--6">

The purple cats argument meets the first and fails the second. The reverse case also exists:

</div>
<div className="col col--6 video-translation">

L'argument des chats violets satisfait la première et échoue à la seconde. Le cas inverse existe aussi :

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** All dead parrots are dead.<br />
> **Premise 2:** Parrots are not frogs.<br />
> **Conclusion:** Therefore, frogs exist.

</div>
<div className="col col--6 video-translation">

> **Prémisse 1 :** Tous les perroquets morts sont morts.<br />
> **Prémisse 2 :** Les perroquets ne sont pas des grenouilles.<br />
> **Conclusion :** Donc les grenouilles existent.

</div>
</div>

<div className="row">
<div className="col col--6">

Both premises are true and the conclusion is true as well, but the conclusion does not follow from them. The argument is invalid, and therefore unsound, no matter how true its parts are. And some arguments fail both requirements at once:

</div>
<div className="col col--6 video-translation">

Les deux prémisses sont vraies et la conclusion l'est également, mais la conclusion n'en découle pas. L'argument est invalide, et donc non solide, si vraies que soient ses parties. Et certains arguments échouent aux deux exigences à la fois :

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** Ostriches cannot fly.<br />
> **Premise 2:** All insects wear top hats.<br />
> **Conclusion:** Therefore, ostriches are insects.

</div>
<div className="col col--6 video-translation">

> **Prémisse 1 :** Les autruches ne peuvent pas voler.<br />
> **Prémisse 2 :** Tous les insectes portent des hauts-de-forme.<br />
> **Conclusion :** Donc les autruches sont des insectes.

</div>
</div>

<div className="row">
<div className="col col--6">

### Why soundness is worth having

</div>
<div className="col col--6 video-translation">

<h3>Pourquoi la solidité vaut la peine</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

If we know an argument is sound, we know its conclusion **must be true**. Putting the two requirements together: a valid argument's conclusion cannot be false if its premises are true, and in a sound argument the premises _are_ all true. There is no way for a sound argument to have a false conclusion. This is what makes sound arguments so useful: they let us establish that things are true.

</div>
<div className="col col--6 video-translation">

Si nous savons qu'un argument est solide, nous savons que sa conclusion **doit être vraie**. En réunissant les deux exigences : la conclusion d'un argument valide ne peut pas être fausse si ses prémisses sont vraies, et dans un argument solide les prémisses _sont_ toutes vraies. Il est impossible qu'un argument solide ait une conclusion fausse. C'est ce qui rend les arguments solides si utiles : ils nous permettent d'établir que des choses sont vraies.

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** Whales do not have fur.<br />
> **Premise 2:** Whales are mammals.<br />
> **Conclusion:** Therefore, not all mammals have fur.

</div>
<div className="col col--6 video-translation">

> **Prémisse 1 :** Les baleines n'ont pas de fourrure.<br />
> **Prémisse 2 :** Les baleines sont des mammifères.<br />
> **Conclusion :** Donc tous les mammifères n'ont pas de fourrure.

</div>
</div>

<div className="row">
<div className="col col--6">

The argument is valid and its premises are true, so it is sound, and its conclusion has to be true.

</div>
<div className="col col--6 video-translation">

L'argument est valide et ses prémisses sont vraies : il est donc solide, et sa conclusion ne peut qu'être vraie.

</div>
</div>

<div className="row">
<div className="col col--6">

Ancell closes with an invitation: try writing a sound argument of your own.

</div>
<div className="col col--6 video-translation">

Ancell conclut par une invitation : essayez de rédiger vous-même un argument solide.

</div>
</div>

<div className="row">
<div className="col col--6">

### Key takeaway

</div>
<div className="col col--6 video-translation">

<h3>À retenir</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Soundness is validity plus true premises, and only the pair together guarantees a true conclusion. Checking an argument therefore means asking two separate questions, and failing either one is enough to make it unsound.

</div>
<div className="col col--6 video-translation">

La solidité, c'est la validité plus des prémisses vraies, et seul le couple garantit une conclusion vraie. Vérifier un argument revient donc à poser deux questions distinctes, et échouer à l'une des deux suffit à le rendre non solide.

</div>
</div>
