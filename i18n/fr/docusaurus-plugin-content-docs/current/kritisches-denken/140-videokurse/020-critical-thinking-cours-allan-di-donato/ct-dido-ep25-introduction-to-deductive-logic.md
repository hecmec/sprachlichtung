---
title: "25. Introduction to Deductive Logic"
sidebar_position: 25
keywords:
  - deductive logic
  - validity and soundness
  - formal logic
  - propositions
  - categorical propositions
  - necessary and sufficient conditions
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
translation_status: manual
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/BmbPbtMlG0Y' />

&nbsp;

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

After completing the course's long overview of induction, scientific method, and empirical observation, this episode shifts away from **empiricism** toward what is more purely rational: **deductive logic**. It opens with a review of foundational concepts before previewing the types of propositions that the coming videos will explore in depth.

</div>
<div className="col col--6 video-translation">

Après le long panorama consacré à l’induction, à la méthode scientifique et à l’observation empirique, cet épisode s’éloigne de l’**empirisme** pour aborder ce qui relève plus purement de la raison : la **logique déductive**. Il s’ouvre sur un rappel des notions fondamentales, avant d’annoncer les types de propositions que les vidéos suivantes exploreront en détail.

</div>
</div>

<div className="row">
<div className="col col--6">

### Arguments: Premises and Conclusions

</div>
<div className="col col--6 video-translation">

<h3>Les arguments : prémisses et conclusions</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

An **argument** is a structured group of statements or propositions intended to perform a rational, persuasive task. Every argument, whether deductive or inductive, has the same two basic parts: **premises** (the initial supporting claims) and a **conclusion** (the final resulting claim). The conclusion is meant to follow from the premises, and the purpose is to convince the reader that the conclusion is true, _assuming_ the premises are true.

</div>
<div className="col col--6 video-translation">

Un **argument** est un ensemble structuré d’énoncés ou de propositions destiné à remplir une tâche rationnelle et persuasive. Tout argument, déductif ou inductif, comporte les deux mêmes parties fondamentales : les **prémisses** (les affirmations initiales qui soutiennent) et une **conclusion** (l’affirmation finale qui en résulte). La conclusion est censée découler des prémisses, et le but est de convaincre le lecteur que la conclusion est vraie, _à supposer_ que les prémisses le soient.

</div>
</div>

<div className="row">
<div className="col col--6">

### Validity, Truth, and Soundness

</div>
<div className="col col--6 video-translation">

<h3>Validité, vérité et concluance</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

One of the most important qualities a deductive argument can possess is **validity**. Validity applies only to deductive arguments, and it is a property of the argument itself, not of the individual claims within it. To master it, we need both the concept and the rules or techniques for testing for it (the tests come in later videos).

</div>
<div className="col col--6 video-translation">

L’une des qualités les plus importantes qu’un argument déductif puisse posséder est la **validité**. La validité ne s’applique qu’aux arguments déductifs, et c’est une propriété de l’argument lui-même, non des affirmations qui le composent. Pour la maîtriser, il nous faut à la fois la notion et les règles ou techniques permettant de la tester (ces tests viendront dans les vidéos suivantes).

</div>
</div>

<div className="row">
<div className="col col--6">

An argument is **valid** whenever its premises are formally related to its conclusion in such a way that it would be logically impossible for all the premises to be true and the conclusion false. The key word is _if_: in a valid argument, **if** the premises are true, then the conclusion **must** be true. Validity is therefore a "truth preservative."

</div>
<div className="col col--6 video-translation">

Un argument est **valide** dès lors que ses prémisses sont formellement reliées à sa conclusion de telle sorte qu’il serait logiquement impossible que toutes les prémisses soient vraies et la conclusion fausse. Le mot clé est _si_ : dans un argument valide, **si** les prémisses sont vraies, alors la conclusion **doit** l’être. La validité conserve donc la vérité.

</div>
</div>

<div className="row">
<div className="col col--6">

A separate desirable quality, which strictly belongs to the parts of the argument rather than the argument itself, is **truth**. When an argument is both valid and has true premises, it is **sound**, which is the gold standard.

</div>
<div className="col col--6 video-translation">

Une autre qualité souhaitable, qui appartient à proprement parler aux parties de l’argument et non à l’argument lui-même, est la **vérité**. Lorsqu’un argument est à la fois valide et pourvu de prémisses vraies, il est **concluant**, ce qui constitue l’étalon-or.

</div>
</div>

<div className="row">
<div className="col col--6">

Several consequences follow from these definitions:

</div>
<div className="col col--6 video-translation">

Plusieurs conséquences découlent de ces définitions :

</div>
</div>

<div className="row">
<div className="col col--6">

- A valid argument **can** have a false conclusion, but only if it also has at least one false premise.
- If a conclusion is false and the argument is valid, there must be at least one false premise.
- If the conclusion is false but the premises are all true, the argument cannot be valid.

</div>
<div className="col col--6 video-translation">

- Un argument valide **peut** avoir une conclusion fausse, mais seulement s’il comporte aussi au moins une prémisse fausse.
- Si une conclusion est fausse et que l’argument est valide, il doit y avoir au moins une prémisse fausse.
- Si la conclusion est fausse alors que toutes les prémisses sont vraies, l’argument ne peut pas être valide.

</div>
</div>

<div className="row">
<div className="col col--6">

A valid argument with false premises can even yield a _true_ conclusion. The video illustrates this with a series of examples:

</div>
<div className="col col--6 video-translation">

Un argument valide aux prémisses fausses peut même donner une conclusion _vraie_. La vidéo l’illustre par une série d’exemples :

</div>
</div>

<div className="row">
<div className="col col--6">

- _All dogs are four-legged animals; Scooby-Doo is a dog; therefore Scooby-Doo has four legs._ Valid, true premises, true conclusion.
- _All dogs are four-legged animals; Big Bird is a dog; therefore Big Bird has four legs._ Valid, but the false minor premise ("Big Bird is a dog") produces a false conclusion.
- _All dogs are two-legged animals; Big Bird is a dog; therefore Big Bird has two legs._ Valid, with two false premises, yet a true conclusion.

</div>
<div className="col col--6 video-translation">

- _Tous les chiens sont des animaux à quatre pattes ; Scooby-Doo est un chien ; donc Scooby-Doo a quatre pattes._ Valide, prémisses vraies, conclusion vraie.
- _Tous les chiens sont des animaux à quatre pattes ; Big Bird est un chien ; donc Big Bird a quatre pattes._ Valide, mais la mineure fausse (« Big Bird est un chien ») produit une conclusion fausse.
- _Tous les chiens sont des animaux à deux pattes ; Big Bird est un chien ; donc Big Bird a deux pattes._ Valide, avec deux prémisses fausses, et pourtant une conclusion vraie.

</div>
</div>

<div className="row">
<div className="col col--6">

The lesson: validity only says that _if_ the premises are true the conclusion must be true. It is a logical mistake to think that false premises guarantee a false conclusion.

</div>
<div className="col col--6 video-translation">

La leçon : la validité dit seulement que _si_ les prémisses sont vraies, la conclusion doit l’être. C’est une faute de logique que de croire que des prémisses fausses garantissent une conclusion fausse.

</div>
</div>

<div className="row">
<div className="col col--6">

### Formal vs. Material Logic

</div>
<div className="col col--6 video-translation">

<h3>Logique formelle et logique matérielle</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**Formal logic** is the branch concerned with the principles and methods of deductive reasoning, deducing conclusions from propositions. It deals with the **form** of an argument: how the premises are structured. The example _All cats are dogs; Tom is a cat; therefore Tom is a dog_ is valid purely because of its structure, even though a premise is false (swap "dogs" for "mammals" and the form is obviously fine).

</div>
<div className="col col--6 video-translation">

La **logique formelle** est la branche qui traite des principes et des méthodes du raisonnement déductif, c’est-à-dire de la déduction de conclusions à partir de propositions. Elle porte sur la **forme** d’un argument : la façon dont les prémisses sont structurées. L’exemple _Tous les chats sont des chiens ; Tom est un chat ; donc Tom est un chien_ est valide en raison de sa seule structure, bien qu’une prémisse soit fausse (remplacez « chiens » par « mammifères » et la forme apparaît manifestement correcte).

</div>
</div>

<div className="row">
<div className="col col--6">

This is the difference between formal and material logic. When analyzing form, it is often useful to **replace words with symbols** to reveal structure more clearly, which necessarily hides the content. Both kinds of logic matter, but a nonsensical premise does not destroy validity.

</div>
<div className="col col--6 video-translation">

Telle est la différence entre logique formelle et logique matérielle. Pour analyser la forme, il est souvent utile de **remplacer les mots par des symboles** afin de faire apparaître plus nettement la structure, ce qui masque nécessairement le contenu. Les deux logiques importent, mais une prémisse absurde ne détruit pas la validité.

</div>
</div>

<div className="row">
<div className="col col--6">

### Propositions and Declarative Sentences

</div>
<div className="col col--6 video-translation">

<h3>Propositions et phrases déclaratives</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

A reminder on terminology: an _argument_ cannot be true or false; only premises and conclusions can be, because they are propositions. Conversely, an argument can be valid or invalid, while propositions cannot.

</div>
<div className="col col--6 video-translation">

Rappel terminologique : un _argument_ ne peut être ni vrai ni faux ; seules les prémisses et les conclusions peuvent l’être, parce que ce sont des propositions. Inversement, un argument peut être valide ou invalide, ce que les propositions ne peuvent pas être.

</div>
</div>

<div className="row">
<div className="col col--6">

A **proposition** is the meaning of a **declarative sentence**, and a declarative sentence is one that makes a truth claim. A proposition must therefore be either true or false. A simple test is to ask whether the sentence could be true. Questions ("Do you want to go to the movies?"), imperatives ("Take out the trash"), and exclamations ("Groovy!") are not declarative sentences. Exceptions exist: a **rhetorical question** functions as a statement, and exclamations can carry claims ("That was an awesome movie") that have a truth value even when subjective.

</div>
<div className="col col--6 video-translation">

Une **proposition** est la signification d’une **phrase déclarative**, et une phrase déclarative est une phrase qui émet une prétention à la vérité. Une proposition doit donc être vraie ou fausse. Un test simple consiste à se demander si la phrase pourrait être vraie. Les questions (« Veux-tu aller au cinéma ? »), les impératifs (« Sors la poubelle ») et les exclamations (« Génial ! ») ne sont pas des phrases déclaratives. Il y a des exceptions : une **question rhétorique** fonctionne comme un énoncé, et les exclamations peuvent porter des affirmations (« C’était un film formidable ») qui ont une valeur de vérité, même subjective.

</div>
</div>

<div className="row">
<div className="col col--6">

Crucially, many different sentences can express a single proposition. Five sentences such as "We have to work hard," "We must labor diligently," and even a Latin version all share **one** proposition, because the proposition is the _meaning_. This insight is essential to translation work and explains how people who speak different languages can communicate.

</div>
<div className="col col--6 video-translation">

Point capital : bien des phrases différentes peuvent exprimer une seule et même proposition. Cinq phrases telles que « Nous devons travailler dur », « Il nous faut œuvrer avec application », et même une version latine, partagent **une** proposition, car la proposition est la _signification_. Cette idée est essentielle au travail de traduction et explique comment des personnes parlant des langues différentes peuvent se comprendre.

</div>
</div>

<div className="row">
<div className="col col--6">

### Five Types of Propositions (Preview)

</div>
<div className="col col--6 video-translation">

<h3>Cinq types de propositions (aperçu)</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The coming videos will reason with five proposition types. The first, **categorical**, gets its own treatment (categorical logic); the other four are handled together under **propositional** or **truth-functional logic**.

</div>
<div className="col col--6 video-translation">

Les vidéos à venir raisonneront à partir de cinq types de propositions. Le premier, la proposition **catégorique**, fera l’objet d’un traitement propre (la logique catégorique) ; les quatre autres seront abordés ensemble sous le nom de logique **propositionnelle** ou vérifonctionnelle.

</div>
</div>

<div className="row">
<div className="col col--6">

- **Categorical propositions** concern relationships among classes or categories, affirming or denying that one class is wholly or partially included in another. They subdivide into four subtypes: **universal affirmative** ("all are"), **universal negative** ("no are"), **particular affirmative** ("some are"), and **particular negative** ("some are not").
- **Hypothetical (conditional) propositions** are compound _if-then_ statements (if _antecedent_, then _consequent_). The relationship is **not causal**: the antecedent is a **sufficient condition** (its truth guarantees the consequent), and the consequent is a **necessary condition** (without which the antecedent cannot hold). The example "if fire, then oxygen" shows this: fire guarantees oxygen because oxygen is necessary for fire, yet oxygen does not guarantee fire.
- **Disjunctive propositions** use "or" / "either...or." A **disjunct** is one component. The **inclusive (weak)** disjunction means at least one disjunct is true (both may be); the **exclusive (strong)** disjunction means exactly one is true. A disjunction is true as long as one disjunct is true.
- **Conjunctive propositions** use "and" (or "both...and," and sometimes "but"). A conjunction is true **only if both conjuncts are true**.
- **Biconditional propositions** assert that two components have the same truth value (they are **materially equivalent**), using "if and only if." A biconditional "A if and only if B" unpacks into two hypotheticals (if A then B, and if B then A) and is therefore both a necessary and a sufficient condition.

</div>
<div className="col col--6 video-translation">

- **Les propositions catégoriques** portent sur les relations entre classes ou catégories : elles affirment ou nient qu’une classe soit incluse en tout ou en partie dans une autre. Elles se subdivisent en quatre sous-types : **universelle affirmative** (« tous sont »), **universelle négative** (« aucun n’est »), **particulière affirmative** (« quelques-uns sont ») et **particulière négative** (« quelques-uns ne sont pas »).
- **Les propositions hypothétiques (conditionnelles)** sont des énoncés composés en _si… alors_ (si _antécédent_, alors _conséquent_). La relation n’est **pas causale** : l’antécédent est une **condition suffisante** (sa vérité garantit le conséquent) et le conséquent une **condition nécessaire** (sans laquelle l’antécédent ne peut tenir). L’exemple « s’il y a du feu, alors il y a de l’oxygène » le montre : le feu garantit l’oxygène parce que l’oxygène est nécessaire au feu, tandis que l’oxygène ne garantit pas le feu.
- **Les propositions disjonctives** emploient « ou » / « ou bien… ou bien ». Un **disjoint** est l’une des composantes. La disjonction **inclusive (faible)** signifie qu’au moins un disjoint est vrai (les deux peuvent l’être) ; la disjonction **exclusive (forte)** signifie qu’exactement un seul est vrai. Une disjonction est vraie dès lors qu’un disjoint est vrai.
- **Les propositions conjonctives** emploient « et » (ou « à la fois… et », et parfois « mais »). Une conjonction n’est vraie **que si les deux conjoints sont vrais**.
- **Les propositions biconditionnelles** affirment que deux composantes ont la même valeur de vérité (elles sont **matériellement équivalentes**), au moyen de « si et seulement si ». Un biconditionnel « A si et seulement si B » se décompose en deux hypothétiques (si A alors B, et si B alors A) et constitue donc à la fois une condition nécessaire et une condition suffisante.

</div>
</div>

<div className="row">
<div className="col col--6">

The next episode begins a multi-part investigation of **categorical logic**, focusing on that first proposition type.

</div>
<div className="col col--6 video-translation">

L’épisode suivant entame une étude en plusieurs volets de la **logique catégorique**, centrée sur ce premier type de propositions.

</div>
</div>
