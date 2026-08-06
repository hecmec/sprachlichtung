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
translation_status: manual
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

<h2>Résumé</h2>

</div>
</div>

<div className="row">
<div className="col col--6">

Ian Olasov (CUNY Graduate Center) presents **Bayes' theorem**, a fact about probabilities first discovered in a version of it by Thomas Bayes in the 18th century. It has many applications, and some philosophers regard it as the key to understanding what rational thinking amounts to.

</div>
<div className="col col--6 video-translation">

Ian Olasov (CUNY Graduate Center) présente le **théorème de Bayes**, un fait sur les probabilités dont une version fut découverte par Thomas Bayes au XVIIIᵉ siècle. Il a de nombreuses applications, et certains philosophes y voient la clé pour comprendre en quoi consiste la pensée rationnelle.

</div>
</div>

<div className="row">
<div className="col col--6">

### Prior probabilities

</div>
<div className="col col--6 video-translation">

<h3>Probabilités a priori</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The **probability** of a proposition is the chance that the proposition is true. Suppose you know that one student in a class of 20 has the flu, but not which one. If Sally is in the class, you would say the probability that Sally has the flu is 1 in 20:

</div>
<div className="col col--6 video-translation">

La **probabilité** d'une proposition est la chance que cette proposition soit vraie. Supposons que vous sachiez qu'un élève sur vingt dans une classe a la grippe, sans savoir lequel. Si Sally est dans la classe, vous diriez que la probabilité que Sally ait la grippe est de 1 sur 20 :

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
P(\text{Sally a la grippe}) = 0{,}05
$$

</div>
</div>

<div className="row">
<div className="col col--6">

This is your **prior probability**, the one you hold before finding out anything new.

</div>
<div className="col col--6 video-translation">

C'est votre **probabilité a priori**, celle que vous entretenez avant d'apprendre quoi que ce soit de nouveau.

</div>
</div>

<div className="row">
<div className="col col--6">

### Conditional probabilities

</div>
<div className="col col--6 video-translation">

<h3>Probabilités conditionnelles</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Now suppose the class has five girls and 15 boys. You still do not know whether the flu patient is a boy or a girl, but you can say what your probability _would_ be either way. If you learned the patient was a girl, your probability that it is Sally would rise to 1 in 5; if you learned it was a boy, it would drop to zero:

</div>
<div className="col col--6 video-translation">

Supposons maintenant que la classe compte cinq filles et quinze garçons. Vous ignorez toujours si la personne malade est un garçon ou une fille, mais vous pouvez dire quelle _serait_ votre probabilité dans chaque cas. Si vous appreniez qu'il s'agit d'une fille, votre probabilité que ce soit Sally monterait à 1 sur 5 ; si vous appreniez qu'il s'agit d'un garçon, elle tomberait à zéro :

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
P(\text{Sally a la grippe} \mid \text{la personne malade est une fille}) = 0{,}2
$$

</div>
</div>

<div className="row">
<div className="col col--6">

The vertical line marks a **conditional probability**. The problem Bayes' theorem solves is that we often do not know what our conditional probability ought to be: we know some new evidence may turn up, but not yet how it should affect our confidence in a hypothesis.

</div>
<div className="col col--6 video-translation">

La barre verticale marque une **probabilité conditionnelle**. Le problème que résout le théorème de Bayes est que nous ignorons souvent quelle devrait être notre probabilité conditionnelle : nous savons que de nouveaux indices peuvent apparaître, mais pas encore comment ils devraient modifier notre confiance en une hypothèse.

</div>
</div>

<div className="row">
<div className="col col--6">

### The theorem

</div>
<div className="col col--6 video-translation">

<h3>Le théorème</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

For a hypothesis $H$ and a piece of evidence $E$:

</div>
<div className="col col--6 video-translation">

Pour une hypothèse $H$ et un indice $E$ :

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

Trois ingrédients entrent dans la probabilité d'une hypothèse étant donné l'indice : la probabilité de l'**indice sous l'hypothèse**, la **probabilité a priori de l'hypothèse** et la **probabilité a priori de l'indice**.

</div>
</div>

<div className="row">
<div className="col col--6">

### The WebMD example

</div>
<div className="col col--6 video-translation">

<h3>L'exemple WebMD</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

One morning you feel off, browse WebMD, and find a rare disease that catches your eye. Reading its symptom list, you realise you have every one of them, so $P(E \mid H) = 0.95$. You begin to panic, and then remember that two ingredients are still missing.

</div>
<div className="col col--6 video-translation">

Un matin, vous vous sentez mal, vous parcourez WebMD et tombez sur une maladie rare qui attire votre attention. En lisant sa liste de symptômes, vous constatez que vous les avez tous, d'où $P(E \mid H) = 0{,}95$. Vous commencez à paniquer, puis vous vous souvenez qu'il manque encore deux ingrédients.

</div>
</div>

<div className="row">
<div className="col col--6">

A little more googling tells you the disease is extremely rare, affecting only 1 in 100,000 people, so $P(H) = 0.00001$. And what are your symptoms? A headache and a runny nose: very common, roughly 1 person in 100 has them, so $P(E) = 0.01$. Putting it together:

</div>
<div className="col col--6 video-translation">

Quelques recherches de plus vous apprennent que la maladie est extrêmement rare et ne touche qu'une personne sur 100 000, d'où $P(H) = 0{,}00001$. Et quels sont vos symptômes ? Un mal de tête et le nez qui coule : très courants, environ une personne sur 100 les présente, d'où $P(E) = 0{,}01$. En rassemblant le tout :

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

Un peu moins de 1 sur 1000, et non les 95 pour cent que la correspondance des symptômes semblait suggérer.

</div>
</div>

<div className="row">
<div className="col col--6">

### The base rate fallacy

</div>
<div className="col col--6 video-translation">

<h3>Le biais de négligence de la fréquence de base</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The mistake the example guards against is to ignore the prior probability of the hypothesis, or to treat $P(H \mid E)$ as though it were $P(E \mid H)$. This is the **base rate fallacy**. In the case above the two differ enormously: one is less than a tenth of a percent, the other is 95 percent. Without Bayes' theorem you might have got a great deal more worked up than the evidence warranted.

</div>
<div className="col col--6 video-translation">

L'erreur contre laquelle l'exemple met en garde consiste à ignorer la probabilité a priori de l'hypothèse, ou à traiter $P(H \mid E)$ comme s'il s'agissait de $P(E \mid H)$. C'est le **biais de négligence de la fréquence de base**. Dans le cas ci-dessus, les deux diffèrent énormément : l'un est inférieur à un dixième de pour cent, l'autre atteint 95 pour cent. Sans le théorème de Bayes, vous auriez pu vous alarmer bien plus que les indices ne le justifiaient.

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

Bayes' theorem tells us what probability to assign a hypothesis in the light of a piece of evidence. Even if the formula slips your mind, remember its three ingredients: the probability of the evidence given the hypothesis, the prior probability of the hypothesis, and the prior probability of the evidence. Leave any one of them out and the picture is incomplete.

</div>
<div className="col col--6 video-translation">

Le théorème de Bayes nous dit quelle probabilité attribuer à une hypothèse à la lumière d'un indice. Même si la formule vous échappe, retenez ses trois ingrédients : la probabilité de l'indice sous l'hypothèse, la probabilité a priori de l'hypothèse et la probabilité a priori de l'indice. Omettez-en un seul et le tableau reste incomplet.

</div>
</div>
