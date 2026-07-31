---
id: programs_and_probabilities
title: Programs and Probabilities
title_meta: "Programs and Probabilities: Why AI Estimates Instead of Calculating"
sidebar_label: Programs and Probabilities
sidebar_position: 2
description: Classical programs follow rules, AI works with probabilities. Why that is the decisive difference and what statistics has to do with it.
keywords:
  - Programming
  - Probability
  - Machine learning
  - Statistics
  - Artificial intelligence
  - Spam filter
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=05de4eff-->
## Three things that surprise most people

<!--t src=65482fa7-->
**First:** if you ask a language model the same question twice, you often get two different answers. A pocket calculator never does that. This is not a bug but a design decision.

<!--t src=bc3d458d-->
**Second:** nobody has taught an AI what a cat is. There is no line of code saying "cat = four legs, fur, whiskers". There are only numbers that have shifted while looking at many pictures.

<!--t src=1ba32bdb-->
**Third:** what is sold today as machine thinking is at heart eighteenth-century statistics, carried out on very fast hardware.

<!--t src=cee5e137-->
## How does one normally program?

<!--t src=09397f40-->
Classical programs consist of rules that a human being has written down. A tax program calculates: "If the income is above this amount, then apply that rate." A traffic light controller switches on a timetable. These are automata in Turing's sense, as described in the [previous chapter](./010-automaten.md): read a symbol, consult the table, carry on.

<!--t src=707a3b9a-->
This way of programming works splendidly as long as you know the rules. And that is exactly where the problem lies.

<!--t src=918a4176-->
## The question: how do you write a rule for "cat"?

<!--t src=94d19952-->
Try it. Four legs? A three-legged tomcat is still a cat. Fur? Not in every breed. Whiskers? Seals have them too. Every rule you write down has exceptions, and every exception has exceptions of its own.

<!--t src=ca2a8fd1-->
The same holds for almost everything humans do effortlessly: recognising a face, getting a joke, reading handwriting, telling junk mail from real post. We are good at these things, but we cannot say by what rules we are good at them. The chemist and philosopher Michael Polanyi called this "tacit knowledge": we know more than we can tell.[^polanyi]

<!--t src=f0962f22-->
When the rule cannot be written down, classical programming has reached its end. So the whole thing is turned around.

<!--t src=f57af534-->
## The answer: don't prescribe rules, count frequencies

<!--t src=be523f88-->
Instead of saying _what_ a cat is, you show the program a hundred thousand pictures labelled "cat" and a hundred thousand without. The program looks for patterns of its own accord that statistically coincide with the word. In the end it does not say "this is a cat" but "94 percent probability of a cat".

<!--t src=9d1b1401-->
That is the real break. A classical program answers _yes_ or _no_. A learning program answers with a number between zero and one. It knows nothing, it estimates.

<!--t src=bf74453c-->
This way of thinking is old. In the eighteenth century Thomas Bayes formulated the rule for how to adjust a conjecture as soon as new evidence comes in.[^bayes] That is precisely what machine learning does: it starts with random guesses and corrects them a million times over against examples. Artificial intelligence and statistics are not related subjects, they are over long stretches the same subject with different marketing.

<!--t src=65993d29-->
## Theory and practice: the spam filter

<!--t src=18f7b313-->
The spam filter is the finest example, because you can see right through it.

<!--t src=a999f84d-->
It simply counts how often a word occurs in junk mail and how often in normal post. If "prize notification" turns up in 4000 spam messages and in three genuine ones, the word is a strong indicator. The filter combines the indicators of all the words in a message into a probability. If that probability is above a threshold, the message goes into the spam folder.

<!--t src=5cd39f6b-->
Nobody ever programmed the rule "messages containing prize notification are spam". It emerged from your own behaviour, every time you clicked "mark as spam".

<!--t src=a232314c-->
The limits are just as clearly visible as the principle: the filter does not understand a single word. It can be wrong, and it is. It gets worse as soon as spammers change their language. And it is never better than the examples it learned from.

<!--t src=3c6680aa-->
## What follows from this

<!--t src=3f8167fa-->
Large language models work no differently in principle from this filter, only on an incomparably larger scale. They estimate which word is likely to come next and then pick one of the plausible candidates. That is why you get two different answers. That is why such systems occasionally invent sources: an invented source looks statistically just as plausible as a real one.

<!--t src=63894c9e-->
Anyone who keeps this in mind reads every statement about AI differently. Not "the machine has recognised" but "the machine considers it likely".

<!--t src=b1066cd1-->
[^polanyi]: Michael Polanyi: _The Tacit Dimension_, University of Chicago Press, 1966.

<!--t src=81178dbf-->
[^bayes]: Thomas Bayes: _An Essay towards solving a Problem in the Doctrine of Chances_, Philosophical Transactions of the Royal Society, 1763 (published posthumously).
