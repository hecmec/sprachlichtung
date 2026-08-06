---
title: "7. Bayes' Theorem"
sidebar_position: 7
keywords:
  - fundamentals
  - bayes' theorem
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
controls src='https://youtu.be/OqmJhPQYRc8' />

&nbsp;

Wireless Philosophy, Fundamentals, 6:21. Original title: _CRITICAL THINKING - Fundamentals: Bayes' Theorem [HD]_

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

Ian Olasov (CUNY Graduate Center) presents **Bayes' theorem**, a fact about probabilities first discovered in a version of it by Thomas Bayes in the 18th century. It has many applications, and some philosophers regard it as the key to understanding what rational thinking amounts to.

</div>
<div className="col col--6 video-translation">

Ian Olasov (CUNY Graduate Center) stellt den **Satz von Bayes** vor, eine Tatsache über Wahrscheinlichkeiten, die Thomas Bayes im 18. Jahrhundert in einer Fassung erstmals entdeckte. Er hat viele Anwendungen, und manche Philosophen halten ihn für den Schlüssel zum Verständnis dessen, was rationales Denken ausmacht.

</div>
</div>

<div className="row">
<div className="col col--6">

### Prior probabilities

</div>
<div className="col col--6 video-translation">

<h3>A-priori-Wahrscheinlichkeiten</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The **probability** of a proposition is the chance that the proposition is true. Suppose you know that one student in a class of 20 has the flu, but not which one. If Sally is in the class, you would say the probability that Sally has the flu is 1 in 20:

</div>
<div className="col col--6 video-translation">

Die **Wahrscheinlichkeit** einer Aussage ist die Chance, dass die Aussage wahr ist. Angenommen, Sie wissen, dass eine von 20 Schülerinnen und Schülern einer Klasse die Grippe hat, aber nicht, wer. Wenn Sally in der Klasse ist, würden Sie sagen, die Wahrscheinlichkeit, dass Sally die Grippe hat, liegt bei 1 zu 20:

</div>
</div>

<div className="row">
<div className="col col--6">

$$
P(\text{Sally has the flu}) = 0.05
$$

</div>
<div className="col col--6 video-translation">

$$
P(\text{Sally hat die Grippe}) = 0{,}05
$$

</div>
</div>

<div className="row">
<div className="col col--6">

This is your **prior probability**, the one you hold before finding out anything new.

</div>
<div className="col col--6 video-translation">

Das ist Ihre **A-priori-Wahrscheinlichkeit**, die Sie haben, bevor Sie etwas Neues erfahren.

</div>
</div>

<div className="row">
<div className="col col--6">

### Conditional probabilities

</div>
<div className="col col--6 video-translation">

<h3>Bedingte Wahrscheinlichkeiten</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Now suppose the class has five girls and 15 boys. You still do not know whether the flu patient is a boy or a girl, but you can say what your probability _would_ be either way. If you learned the patient was a girl, your probability that it is Sally would rise to 1 in 5; if you learned it was a boy, it would drop to zero:

</div>
<div className="col col--6 video-translation">

Nehmen wir nun an, die Klasse besteht aus fünf Mädchen und 15 Jungen. Sie wissen weiterhin nicht, ob die erkrankte Person ein Junge oder ein Mädchen ist, können aber sagen, wie hoch Ihre Wahrscheinlichkeit in beiden Fällen _wäre_. Erführen Sie, dass es ein Mädchen ist, stiege Ihre Wahrscheinlichkeit, dass es Sally ist, auf 1 zu 5; erführen Sie, dass es ein Junge ist, fiele sie auf null:

</div>
</div>

<div className="row">
<div className="col col--6">

$$
P(\text{Sally has the flu} \mid \text{the patient is a girl}) = 0.2
$$

</div>
<div className="col col--6 video-translation">

$$
P(\text{Sally hat die Grippe} \mid \text{die erkrankte Person ist ein Mädchen}) = 0{,}2
$$

</div>
</div>

<div className="row">
<div className="col col--6">

The vertical line marks a **conditional probability**. The problem Bayes' theorem solves is that we often do not know what our conditional probability ought to be: we know some new evidence may turn up, but not yet how it should affect our confidence in a hypothesis.

</div>
<div className="col col--6 video-translation">

Der senkrechte Strich kennzeichnet eine **bedingte Wahrscheinlichkeit**. Das Problem, das der Satz von Bayes löst, besteht darin, dass wir oft nicht wissen, wie hoch unsere bedingte Wahrscheinlichkeit sein sollte: Wir wissen, dass neue Belege auftauchen können, aber noch nicht, wie sie unser Vertrauen in eine Hypothese verändern sollten.

</div>
</div>

<div className="row">
<div className="col col--6">

### The theorem

</div>
<div className="col col--6 video-translation">

<h3>Der Satz</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

For a hypothesis $H$ and a piece of evidence $E$:

</div>
<div className="col col--6 video-translation">

Für eine Hypothese $H$ und einen Beleg $E$:

</div>
</div>

<div className="row">
<div className="col col--6">

$$
P(H \mid E) = \frac{P(E \mid H) \cdot P(H)}{P(E)}
$$

</div>
<div className="col col--6 video-translation">

$$
P(H \mid E) = \frac{P(E \mid H) \cdot P(H)}{P(E)}
$$

</div>
</div>

<div className="row">
<div className="col col--6">

Three ingredients go into the probability of a hypothesis given the evidence: the probability of the **evidence given the hypothesis**, the **prior probability of the hypothesis**, and the **prior probability of the evidence**.

</div>
<div className="col col--6 video-translation">

Drei Zutaten gehen in die Wahrscheinlichkeit einer Hypothese angesichts des Belegs ein: die Wahrscheinlichkeit des **Belegs unter der Hypothese**, die **A-priori-Wahrscheinlichkeit der Hypothese** und die **A-priori-Wahrscheinlichkeit des Belegs**.

</div>
</div>

<div className="row">
<div className="col col--6">

### The WebMD example

</div>
<div className="col col--6 video-translation">

<h3>Das WebMD-Beispiel</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

One morning you feel off, browse WebMD, and find a rare disease that catches your eye. Reading its symptom list, you realise you have every one of them, so $P(E \mid H) = 0.95$. You begin to panic, and then remember that two ingredients are still missing.

</div>
<div className="col col--6 video-translation">

Eines Morgens fühlen Sie sich unwohl, stöbern auf WebMD und stoßen auf eine seltene Krankheit, die Ihnen ins Auge fällt. Beim Lesen der Symptomliste stellen Sie fest, dass Sie jedes einzelne Symptom haben, also $P(E \mid H) = 0{,}95$. Sie geraten in Panik und erinnern sich dann, dass noch zwei Zutaten fehlen.

</div>
</div>

<div className="row">
<div className="col col--6">

A little more googling tells you the disease is extremely rare, affecting only 1 in 100,000 people, so $P(H) = 0.00001$. And what are your symptoms? A headache and a runny nose: very common, roughly 1 person in 100 has them, so $P(E) = 0.01$. Putting it together:

</div>
<div className="col col--6 video-translation">

Etwas weiteres Googeln zeigt Ihnen, dass die Krankheit äußerst selten ist und nur 1 von 100.000 Menschen betrifft, also $P(H) = 0{,}00001$. Und worin bestehen Ihre Symptome? Kopfschmerzen und eine laufende Nase: sehr verbreitet, ungefähr 1 von 100 Menschen hat sie, also $P(E) = 0{,}01$. Zusammengesetzt:

</div>
</div>

<div className="row">
<div className="col col--6">

$$
P(H \mid E) = \frac{0.95 \cdot 0.00001}{0.01} = 0.00095
$$

</div>
<div className="col col--6 video-translation">

$$
P(H \mid E) = \frac{0{,}95 \cdot 0{,}00001}{0{,}01} = 0{,}00095
$$

</div>
</div>

<div className="row">
<div className="col col--6">

A little less than 1 in 1000, rather than the 95 percent that the symptom match seemed to suggest.

</div>
<div className="col col--6 video-translation">

Etwas weniger als 1 zu 1000, statt der 95 Prozent, die die Übereinstimmung der Symptome nahezulegen schien.

</div>
</div>

<div className="row">
<div className="col col--6">

### The base rate fallacy

</div>
<div className="col col--6 video-translation">

<h3>Der Basisratenfehler</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The mistake the example guards against is to ignore the prior probability of the hypothesis, or to treat $P(H \mid E)$ as though it were $P(E \mid H)$. This is the **base rate fallacy**. In the case above the two differ enormously: one is less than a tenth of a percent, the other is 95 percent. Without Bayes' theorem you might have got a great deal more worked up than the evidence warranted.

</div>
<div className="col col--6 video-translation">

Der Fehler, vor dem das Beispiel schützt, besteht darin, die A-priori-Wahrscheinlichkeit der Hypothese zu ignorieren oder $P(H \mid E)$ zu behandeln, als wäre es $P(E \mid H)$. Das ist der **Basisratenfehler**. Im obigen Fall unterscheiden sich beide gewaltig: das eine liegt unter einem Zehntel Prozent, das andere bei 95 Prozent. Ohne den Satz von Bayes hätten Sie sich womöglich weit mehr aufgeregt, als die Belege rechtfertigen.

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

Bayes' theorem tells us what probability to assign a hypothesis in the light of a piece of evidence. Even if the formula slips your mind, remember its three ingredients: the probability of the evidence given the hypothesis, the prior probability of the hypothesis, and the prior probability of the evidence. Leave any one of them out and the picture is incomplete.

</div>
<div className="col col--6 video-translation">

Der Satz von Bayes sagt uns, welche Wahrscheinlichkeit wir einer Hypothese angesichts eines Belegs zuweisen sollten. Selbst wenn Ihnen die Formel entfällt, merken Sie sich ihre drei Zutaten: die Wahrscheinlichkeit des Belegs unter der Hypothese, die A-priori-Wahrscheinlichkeit der Hypothese und die A-priori-Wahrscheinlichkeit des Belegs. Lässt man eine davon weg, bleibt das Bild unvollständig.

</div>
</div>
