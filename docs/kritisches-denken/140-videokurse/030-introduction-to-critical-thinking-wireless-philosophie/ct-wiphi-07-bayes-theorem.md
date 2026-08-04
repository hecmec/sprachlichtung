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

Ian Olasov (CUNY Graduate Center) presents **Bayes' theorem**, a fact about probabilities first discovered in a version of it by Thomas Bayes in the 18th century. It has many applications, and some philosophers regard it as the key to understanding what rational thinking amounts to.

### Prior probabilities

The **probability** of a proposition is the chance that the proposition is true. Suppose you know that one student in a class of 20 has the flu, but not which one. If Sally is in the class, you would say the probability that Sally has the flu is 1 in 20:

$$
P(\text{Sally has the flu}) = 0.05
$$

This is your **prior probability**, the one you hold before finding out anything new.

### Conditional probabilities

Now suppose the class has five girls and 15 boys. You still do not know whether the flu patient is a boy or a girl, but you can say what your probability _would_ be either way. If you learned the patient was a girl, your probability that it is Sally would rise to 1 in 5; if you learned it was a boy, it would drop to zero:

$$
P(\text{Sally has the flu} \mid \text{the patient is a girl}) = 0.2
$$

The vertical line marks a **conditional probability**. The problem Bayes' theorem solves is that we often do not know what our conditional probability ought to be: we know some new evidence may turn up, but not yet how it should affect our confidence in a hypothesis.

### The theorem

For a hypothesis $H$ and a piece of evidence $E$:

$$
P(H \mid E) = \frac{P(E \mid H) \cdot P(H)}{P(E)}
$$

Three ingredients go into the probability of a hypothesis given the evidence: the probability of the **evidence given the hypothesis**, the **prior probability of the hypothesis**, and the **prior probability of the evidence**.

### The WebMD example

One morning you feel off, browse WebMD, and find a rare disease that catches your eye. Reading its symptom list, you realise you have every one of them, so $P(E \mid H) = 0.95$. You begin to panic, and then remember that two ingredients are still missing.

A little more googling tells you the disease is extremely rare, affecting only 1 in 100,000 people, so $P(H) = 0.00001$. And what are your symptoms? A headache and a runny nose: very common, roughly 1 person in 100 has them, so $P(E) = 0.01$. Putting it together:

$$
P(H \mid E) = \frac{0.95 \cdot 0.00001}{0.01} = 0.00095
$$

A little less than 1 in 1000, rather than the 95 percent that the symptom match seemed to suggest.

### The base rate fallacy

The mistake the example guards against is to ignore the prior probability of the hypothesis, or to treat $P(H \mid E)$ as though it were $P(E \mid H)$. This is the **base rate fallacy**. In the case above the two differ enormously: one is less than a tenth of a percent, the other is 95 percent. Without Bayes' theorem you might have got a great deal more worked up than the evidence warranted.

### Key takeaway

Bayes' theorem tells us what probability to assign a hypothesis in the light of a piece of evidence. Even if the formula slips your mind, remember its three ingredients: the probability of the evidence given the hypothesis, the prior probability of the hypothesis, and the prior probability of the evidence. Leave any one of them out and the picture is incomplete.

</div>
<div className="col col--6 video-translation">

<h2>Zusammenfassung</h2>

_Die Zusammenfassung dieses Videos folgt noch._

</div>
</div>
