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

Aaron Ancell (Duke University) introduces **soundness**, and begins by recalling why validity on its own is not enough. (If validity is still unfamiliar, watch the [video on validity](./ct-wiphi-04-validity.md) first.)

### Why validity is not enough

An argument is valid if it is impossible for all its premises to be true while its conclusion is false. That condition is met here:

> **Premise 1:** All cats are purple.<br />
> **Premise 2:** Everything that is purple is a person.<br />
> **Conclusion:** Therefore, all cats are people.

If all cats were purple and all purple things were people, all cats would indeed be people. But not all cats are purple, so the argument, valid as it is, is not informative and establishes nothing. Since the goal of an argument is usually to show that a conclusion is true, we normally want more than validity.

### The two requirements

**Soundness** is a technical notion, distinct from ordinary talk of "sound advice" or "sound judgement", and like validity it applies only to deductive arguments. To be sound, an argument must meet **both** requirements:

1. The argument must be **valid**. Every invalid argument is unsound.
2. Its premises must **all be true**. A single false premise makes an argument unsound.

The purple cats argument meets the first and fails the second. The reverse case also exists:

> **Premise 1:** All dead parrots are dead.<br />
> **Premise 2:** Parrots are not frogs.<br />
> **Conclusion:** Therefore, frogs exist.

Both premises are true and the conclusion is true as well, but the conclusion does not follow from them. The argument is invalid, and therefore unsound, no matter how true its parts are. And some arguments fail both requirements at once:

> **Premise 1:** Ostriches cannot fly.<br />
> **Premise 2:** All insects wear top hats.<br />
> **Conclusion:** Therefore, ostriches are insects.

### Why soundness is worth having

If we know an argument is sound, we know its conclusion **must be true**. Putting the two requirements together: a valid argument's conclusion cannot be false if its premises are true, and in a sound argument the premises _are_ all true. There is no way for a sound argument to have a false conclusion. This is what makes sound arguments so useful: they let us establish that things are true.

> **Premise 1:** Whales do not have fur.<br />
> **Premise 2:** Whales are mammals.<br />
> **Conclusion:** Therefore, not all mammals have fur.

The argument is valid and its premises are true, so it is sound, and its conclusion has to be true.

Ancell closes with an invitation: try writing a sound argument of your own.

### Key takeaway

Soundness is validity plus true premises, and only the pair together guarantees a true conclusion. Checking an argument therefore means asking two separate questions, and failing either one is enough to make it unsound.

</div>
<div className="col col--6 video-translation">

<h2>Zusammenfassung</h2>

_Die Zusammenfassung dieses Videos folgt noch._

</div>
</div>
