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

<h2>Zusammenfassung</h2>

</div>
</div>

<div className="row">
<div className="col col--6">

Aaron Ancell (Duke University) introduces **soundness**, and begins by recalling why validity on its own is not enough. (If validity is still unfamiliar, watch the [video on validity](./ct-wiphi-04-validity.md) first.)

</div>
<div className="col col--6 video-translation">

Aaron Ancell (Duke University) führt in die **Schlüssigkeit** ein und erinnert zunächst daran, warum Gültigkeit allein nicht genügt. (Wer mit der Gültigkeit noch nicht vertraut ist, sollte zuerst das [Video zur Gültigkeit](./ct-wiphi-04-validity.md) ansehen.)

</div>
</div>

<div className="row">
<div className="col col--6">

### Why validity is not enough

</div>
<div className="col col--6 video-translation">

<h3>Warum Gültigkeit nicht genügt</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

An argument is valid if it is impossible for all its premises to be true while its conclusion is false. That condition is met here:

</div>
<div className="col col--6 video-translation">

Ein Argument ist gültig, wenn es unmöglich ist, dass alle seine Prämissen wahr sind, während seine Schlussfolgerung falsch ist. Diese Bedingung ist hier erfüllt:

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** All cats are purple.<br />
> **Premise 2:** Everything that is purple is a person.<br />
> **Conclusion:** Therefore, all cats are people.

</div>
<div className="col col--6 video-translation">

> **Prämisse 1:** Alle Katzen sind lila.<br />
> **Prämisse 2:** Alles, was lila ist, ist eine Person.<br />
> **Schlussfolgerung:** Also sind alle Katzen Personen.

</div>
</div>

<div className="row">
<div className="col col--6">

If all cats were purple and all purple things were people, all cats would indeed be people. But not all cats are purple, so the argument, valid as it is, is not informative and establishes nothing. Since the goal of an argument is usually to show that a conclusion is true, we normally want more than validity.

</div>
<div className="col col--6 video-translation">

Wären alle Katzen lila und alle lila Dinge Personen, so wären alle Katzen tatsächlich Personen. Aber nicht alle Katzen sind lila, und so ist das Argument, so gültig es auch ist, nicht informativ und belegt nichts. Da das Ziel eines Arguments gewöhnlich darin besteht, zu zeigen, dass eine Schlussfolgerung wahr ist, wollen wir normalerweise mehr als Gültigkeit.

</div>
</div>

<div className="row">
<div className="col col--6">

### The two requirements

</div>
<div className="col col--6 video-translation">

<h3>Die zwei Anforderungen</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**Soundness** is a technical notion, distinct from ordinary talk of "sound advice" or "sound judgement", and like validity it applies only to deductive arguments. To be sound, an argument must meet **both** requirements:

</div>
<div className="col col--6 video-translation">

**Schlüssigkeit** ist ein Fachbegriff, verschieden von der alltäglichen Rede vom „vernünftigen Rat" oder „gesunden Urteil", und wie die Gültigkeit gilt sie nur für deduktive Argumente. Um schlüssig zu sein, muss ein Argument **beide** Anforderungen erfüllen:

</div>
</div>

<div className="row">
<div className="col col--6">

1. The argument must be **valid**. Every invalid argument is unsound.
2. Its premises must **all be true**. A single false premise makes an argument unsound.

</div>
<div className="col col--6 video-translation">

1. Das Argument muss **gültig** sein. Jedes ungültige Argument ist unschlüssig.
2. Seine Prämissen müssen **alle wahr** sein. Eine einzige falsche Prämisse macht ein Argument unschlüssig.

</div>
</div>

<div className="row">
<div className="col col--6">

The purple cats argument meets the first and fails the second. The reverse case also exists:

</div>
<div className="col col--6 video-translation">

Das Argument mit den lila Katzen erfüllt die erste Anforderung und scheitert an der zweiten. Auch der umgekehrte Fall kommt vor:

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** All dead parrots are dead.<br />
> **Premise 2:** Parrots are not frogs.<br />
> **Conclusion:** Therefore, frogs exist.

</div>
<div className="col col--6 video-translation">

> **Prämisse 1:** Alle toten Papageien sind tot.<br />
> **Prämisse 2:** Papageien sind keine Frösche.<br />
> **Schlussfolgerung:** Also existieren Frösche.

</div>
</div>

<div className="row">
<div className="col col--6">

Both premises are true and the conclusion is true as well, but the conclusion does not follow from them. The argument is invalid, and therefore unsound, no matter how true its parts are. And some arguments fail both requirements at once:

</div>
<div className="col col--6 video-translation">

Beide Prämissen sind wahr, und auch die Schlussfolgerung ist wahr, doch die Schlussfolgerung folgt nicht aus ihnen. Das Argument ist ungültig und damit unschlüssig, so wahr seine Teile auch sein mögen. Und manche Argumente scheitern an beiden Anforderungen zugleich:

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** Ostriches cannot fly.<br />
> **Premise 2:** All insects wear top hats.<br />
> **Conclusion:** Therefore, ostriches are insects.

</div>
<div className="col col--6 video-translation">

> **Prämisse 1:** Strauße können nicht fliegen.<br />
> **Prämisse 2:** Alle Insekten tragen Zylinder.<br />
> **Schlussfolgerung:** Also sind Strauße Insekten.

</div>
</div>

<div className="row">
<div className="col col--6">

### Why soundness is worth having

</div>
<div className="col col--6 video-translation">

<h3>Warum Schlüssigkeit erstrebenswert ist</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

If we know an argument is sound, we know its conclusion **must be true**. Putting the two requirements together: a valid argument's conclusion cannot be false if its premises are true, and in a sound argument the premises _are_ all true. There is no way for a sound argument to have a false conclusion. This is what makes sound arguments so useful: they let us establish that things are true.

</div>
<div className="col col--6 video-translation">

Wenn wir wissen, dass ein Argument schlüssig ist, wissen wir, dass seine Schlussfolgerung **wahr sein muss**. Führt man die beiden Anforderungen zusammen: Die Schlussfolgerung eines gültigen Arguments kann nicht falsch sein, wenn seine Prämissen wahr sind, und in einem schlüssigen Argument _sind_ alle Prämissen wahr. Ein schlüssiges Argument kann unmöglich eine falsche Schlussfolgerung haben. Genau das macht schlüssige Argumente so nützlich: Sie erlauben uns, festzustellen, dass etwas wahr ist.

</div>
</div>

<div className="row">
<div className="col col--6">

> **Premise 1:** Whales do not have fur.<br />
> **Premise 2:** Whales are mammals.<br />
> **Conclusion:** Therefore, not all mammals have fur.

</div>
<div className="col col--6 video-translation">

> **Prämisse 1:** Wale haben kein Fell.<br />
> **Prämisse 2:** Wale sind Säugetiere.<br />
> **Schlussfolgerung:** Also haben nicht alle Säugetiere Fell.

</div>
</div>

<div className="row">
<div className="col col--6">

The argument is valid and its premises are true, so it is sound, and its conclusion has to be true.

</div>
<div className="col col--6 video-translation">

Das Argument ist gültig und seine Prämissen sind wahr, also ist es schlüssig, und seine Schlussfolgerung muss wahr sein.

</div>
</div>

<div className="row">
<div className="col col--6">

Ancell closes with an invitation: try writing a sound argument of your own.

</div>
<div className="col col--6 video-translation">

Ancell schließt mit einer Einladung: Versuchen Sie, selbst ein schlüssiges Argument zu formulieren.

</div>
</div>

<div className="row">
<div className="col col--6">

### Key takeaway

</div>
<div className="col col--6 video-translation">

<h3>Die zentrale Erkenntnis</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Soundness is validity plus true premises, and only the pair together guarantees a true conclusion. Checking an argument therefore means asking two separate questions, and failing either one is enough to make it unsound.

</div>
<div className="col col--6 video-translation">

Schlüssigkeit ist Gültigkeit plus wahre Prämissen, und nur beide zusammen garantieren eine wahre Schlussfolgerung. Ein Argument zu prüfen heißt daher, zwei getrennte Fragen zu stellen, und schon das Scheitern an einer von beiden macht es unschlüssig.

</div>
</div>
