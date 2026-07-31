---
title: "29. Propositional Logic - Symbolese"
sidebar_position: 29
keywords:
  - propositional logic
  - truth-functional propositions
  - logical operators
  - symbolic logic
  - conditional statements
  - translating arguments
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
translation_status: manual
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/o2_QMuy0i0g' />

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

After several episodes on categorical logic, this video circles back to a different family of propositions: **truth-functional** or **propositional logic**. Like categorical logic, it is concerned with the **form** or **structure** of arguments rather than their content. To capture that structure as clearly as possible, propositional logic uses its own artificial language, which Di Donato playfully calls **Symbolese**, reassuring viewers that it is far easier to learn than Latin.

</div>
<div className="col col--6 video-translation">

Après plusieurs épisodes consacrés à la logique catégorique, cette vidéo revient à une autre famille de propositions : la logique **vérifonctionnelle** ou **propositionnelle**. Comme la logique catégorique, elle s’intéresse à la **forme** ou à la **structure** des arguments plutôt qu’à leur contenu. Pour saisir cette structure le plus clairement possible, la logique propositionnelle recourt à sa propre langue artificielle, que Di Donato baptise plaisamment le **symbolais**, en assurant aux spectateurs qu’elle s’apprend bien plus facilement que le latin.

</div>
</div>

<div className="row">
<div className="col col--6">

### Statements as Building Blocks

</div>
<div className="col col--6 video-translation">

<h3>Les énoncés comme éléments constitutifs</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Whereas the fundamental elements of categorical logic were **terms** (subject, predicate, middle), the fundamental elements of propositional logic are **statements** or **propositions**, hence the name. Statements can be **simple** (also called **atomic**), such as "fast foods tend to be unhealthy," or **compound**, such as "Chuck Berry plays the guitar and Fats Domino plays the piano," which joins two atomic statements with the operator *and*.

</div>
<div className="col col--6 video-translation">

Là où les éléments fondamentaux de la logique catégorique étaient les **termes** (sujet, prédicat, moyen terme), ceux de la logique propositionnelle sont les **énoncés** ou **propositions**, d’où son nom. Les énoncés peuvent être **simples** (on dit aussi **atomiques**), comme « la restauration rapide tend à être mauvaise pour la santé », ou **composés**, comme « Chuck Berry joue de la guitare et Fats Domino joue du piano », qui joint deux énoncés atomiques par l’opérateur *et*.

</div>
</div>

<div className="row">
<div className="col col--6">

The label **truth-functional** captures the key idea: the truth value of a compound proposition depends entirely on the truth values of its component parts. The conjunction above is true only if both atomic statements are true. As always, the focus is on **validity**, a property of form rather than content. Form does not guarantee truth, but it preserves truth as long as we start with true premises. By representing only statement forms and argument forms, symbolic logic makes formal relationships visible and removes confusion caused by the wording of a proposition.

</div>
<div className="col col--6 video-translation">

Le qualificatif **vérifonctionnel** en dit l’idée maîtresse : la valeur de vérité d’une proposition composée dépend entièrement des valeurs de vérité de ses composantes. La conjonction ci-dessus n’est vraie que si les deux énoncés atomiques sont vrais. Comme toujours, l’attention porte sur la **validité**, propriété de la forme et non du contenu. La forme ne garantit pas la vérité, mais elle la conserve pourvu que l’on parte de prémisses vraies. En ne représentant que des formes d’énoncés et des formes d’arguments, la logique symbolique rend visibles les relations formelles et écarte la confusion née de la formulation d’une proposition.

</div>
</div>

<div className="row">
<div className="col col--6">

### The Vocabulary of Symbolese

</div>
<div className="col col--6 video-translation">

<h3>Le vocabulaire du symbolais</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The language has several kinds of symbols:

</div>
<div className="col col--6 video-translation">

Cette langue comporte plusieurs sortes de symboles :

</div>
</div>

<div className="row">
<div className="col col--6">

- **Statement variables**: lowercase letters *p* through *z* stand for any proposition and are used to build general **statement forms** (e.g., *p · q*). Substituting specific content gives a **substitution instance**.
- **Statement abbreviations**: uppercase letters *A* through *Z* abbreviate specific propositions. "I am Batman" can become *B*, no matter how long or complex the original sentence is.
- The **conclusion indicator** (the **tri-dot**, which Di Donato calls the "Predator sight") translates as *therefore* or *so*.

</div>
<div className="col col--6 video-translation">

- **Les variables d’énoncé** : les minuscules *p* à *z* tiennent lieu de n’importe quelle proposition et servent à bâtir des **formes d’énoncés** générales (par exemple *p · q*). En y substituant un contenu déterminé, on obtient une **instance de substitution**.
- **Les abréviations d’énoncés** : les majuscules *A* à *Z* abrègent des propositions déterminées. « Je suis Batman » peut devenir *B*, si longue et complexe que soit la phrase d’origine.
- **L’indicateur de conclusion** (les **trois points**, que Di Donato appelle le « viseur du Predator ») se traduit par *donc* ou *par conséquent*.

</div>
</div>

<div className="row">
<div className="col col--6">

### The Operators

</div>
<div className="col col--6 video-translation">

<h3>Les opérateurs</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Operators connect or modify statements and determine the overall truth value:

</div>
<div className="col col--6 video-translation">

Les opérateurs relient ou modifient des énoncés et déterminent la valeur de vérité de l’ensemble :

</div>
</div>

<div className="row">
<div className="col col--6">

- **Negation** (the **tilde**, ~) means *not* or "it is not the case that," reversing the truth value of a proposition.
- The **hypothetical** or conditional (**horseshoe** ⊃ or **arrow** →) translates *if p then q* and expresses **material implication**.
- The **disjunction** (the **wedge** ∨) joins **disjuncts** to express *either p or q*.
- The **conjunction** (the **dot** · or **ampersand** &) joins **conjuncts** to express *both p and q*.
- The **biconditional** (the **tri-bar** ≡ or **double-sided arrow** ↔) expresses **material equivalence**, *p if and only if q*.
- **Brackets** (parentheses) are essential for removing ambiguity in compound statements with several operators.

</div>
<div className="col col--6 video-translation">

- **La négation** (le **tilde**, ~) signifie *non* ou « il n’est pas le cas que », et inverse la valeur de vérité d’une proposition.
- **L’hypothétique** ou conditionnel (le **fer à cheval** ⊃ ou la **flèche** →) traduit *si p alors q* et exprime l’**implication matérielle**.
- **La disjonction** (le **coin** ∨) joint des **disjoints** pour exprimer *p ou q*.
- **La conjonction** (le **point** · ou l’**esperluette** &) joint des **conjoints** pour exprimer *à la fois p et q*.
- **Le biconditionnel** (la **triple barre** ≡ ou la **double flèche** ↔) exprime l’**équivalence matérielle**, *p si et seulement si q*.
- **Les parenthèses** sont indispensables pour lever l’ambiguïté des énoncés composés comportant plusieurs opérateurs.

</div>
</div>

<div className="row">
<div className="col col--6">

### How Each Operator Behaves

</div>
<div className="col col--6 video-translation">

<h3>Le comportement de chaque opérateur</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Each operator has its own truth conditions:

</div>
<div className="col col--6 video-translation">

Chaque opérateur a ses propres conditions de vérité :

</div>
</div>

<div className="row">
<div className="col col--6">

- A **hypothetical** is always true *except* when the antecedent is true and the consequent is false.
- A **disjunction** is true as long as at least one disjunct is true; it is false only when both are false.
- A **conjunction** is true *only* when both conjuncts are true.
- A **biconditional** is true *only* when both components share the same truth value.

</div>
<div className="col col--6 video-translation">

- Une **hypothétique** est toujours vraie *sauf* lorsque l’antécédent est vrai et le conséquent faux.
- Une **disjonction** est vraie dès qu’au moins un disjoint est vrai ; elle n’est fausse que si les deux le sont.
- Une **conjonction** n’est vraie *que* si les deux conjoints sont vrais.
- Un **biconditionnel** n’est vrai *que* si les deux composantes ont la même valeur de vérité.

</div>
</div>

<div className="row">
<div className="col col--6">

Di Donato also notes that some compound propositions are **not** truth-functional. With connectives like *because*, *believes that*, or *hopes that*, the truth of the whole is not fixed by the truth of the parts. "Joe failed because he didn't turn in his homework" requires a genuine causal link, and "Joe believed the sun revolves around the earth" is true so long as Joe holds that belief, regardless of whether the belief itself is true.

</div>
<div className="col col--6 video-translation">

Di Donato note aussi que certaines propositions composées ne sont **pas** vérifonctionnelles. Avec des connecteurs comme *parce que*, *croit que* ou *espère que*, la vérité du tout n’est pas fixée par celle des parties. « Joe a échoué parce qu’il n’a pas rendu ses devoirs » suppose un lien causal réel, et « Joe croyait que le Soleil tourne autour de la Terre » est vrai tant que Joe entretient cette croyance, que celle-ci soit vraie ou non.

</div>
</div>

<div className="row">
<div className="col col--6">

### Translating English into Symbolese

</div>
<div className="col col--6 video-translation">

<h3>Traduire le français en symbolais</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

A large part of the lesson is learning which English words signal which operator. For **hypotheticals**, the word *if* introduces the **antecedent** and *then* the **consequent**. The tricky phrase *only if* points instead to the **consequent**, so "p only if q" is *p ⊃ q*. A **necessary condition** is the consequent; a **sufficient condition** is the antecedent. Phrases like *implies*, *entails*, *given that*, *provided that*, and *on the condition that* all point to the antecedent, while *is implied by* or *is entailed by* point to the consequent.

</div>
<div className="col col--6 video-translation">

Une bonne part de la leçon consiste à apprendre quels mots de la langue courante signalent quel opérateur. Pour les **hypothétiques**, le mot *si* introduit l’**antécédent** et *alors* le **conséquent**. La locution piégeuse *seulement si* désigne au contraire le **conséquent** : « p seulement si q » s’écrit donc *p ⊃ q*. Une **condition nécessaire** est le conséquent ; une **condition suffisante** est l’antécédent. Des expressions comme *implique*, *entraîne*, *étant donné que*, *pourvu que* et *à la condition que* désignent toutes l’antécédent, tandis que *est impliqué par* ou *est entraîné par* désignent le conséquent.

</div>
</div>

<div className="row">
<div className="col col--6">

For **disjunctions**, watch for *either…or*, plain *or*, and the counter-intuitive *unless* ("p unless q" equals *p ∨ q*). **Conjunctions** are signaled not only by *and* and *both…and* but also by *although*, *but*, *even though*, *however*, *nevertheless*, and *yet*. The **biconditional** appears as *if and only if*, *a necessary and sufficient condition*, and *just in case*.

</div>
<div className="col col--6 video-translation">

Pour les **disjonctions**, guettez *ou bien… ou bien*, le simple *ou* et le contre-intuitif *à moins que* (« p à moins que q » équivaut à *p ∨ q*). Les **conjonctions** ne sont pas signalées seulement par *et* et *à la fois… et*, mais aussi par *bien que*, *mais*, *quoique*, *cependant*, *néanmoins* et *pourtant*. Le **biconditionnel** apparaît sous les formes *si et seulement si*, *une condition nécessaire et suffisante* et *dans le seul cas où*.

</div>
</div>

<div className="row">
<div className="col col--6">

### Worked Examples

</div>
<div className="col col--6 video-translation">

<h3>Exemples travaillés</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Di Donato closes with practice translations:

</div>
<div className="col col--6 video-translation">

Di Donato termine par des exercices de traduction :

</div>
</div>

<div className="row">
<div className="col col--6">

- "The ringing of the bell is sufficient for the dog to start salivating" → *R ⊃ D* (the sufficient item is the antecedent).
- "Mark watches TV unless Jim goes to the bank" → *M ∨ J*.
- "It's not the case that both Sean and Deirdre are dancers" → *~(S · D)*.
- "Neither Bill nor Jeff play football" → *~(B ∨ J)*, a negated disjunction.
- "Jules likes pizza even though Luigi likes lasagna just in case either Moshe likes mozzarella or Henry likes Limburger" → *(J · L) ≡ (M ∨ H)*, showing how brackets keep complex forms clear.

</div>
<div className="col col--6 video-translation">

- « La sonnerie de la cloche est suffisante pour que le chien se mette à saliver » → *R ⊃ D* (l’élément suffisant est l’antécédent).
- « Mark regarde la télévision à moins que Jim n’aille à la banque » → *M ∨ J*.
- « Il n’est pas le cas que Sean et Deirdre soient tous deux danseurs » → *~(S · D)*.
- « Ni Bill ni Jeff ne jouent au football » → *~(B ∨ J)*, une disjonction niée.
- « Jules aime la pizza bien que Luigi aime les lasagnes, dans le seul cas où Moshe aime la mozzarella ou Henry aime le limbourg » → *(J · L) ≡ (M ∨ H)*, qui montre comment les parenthèses maintiennent la clarté des formes complexes.

</div>
</div>

<div className="row">
<div className="col col--6">

The episode ends by previewing the next topic: using these elements to examine the different types of **syllogisms** built from these propositions.

</div>
<div className="col col--6 video-translation">

L’épisode s’achève en annonçant le sujet suivant : l’emploi de ces éléments pour examiner les différents types de **syllogismes** bâtis à partir de ces propositions.

</div>
</div>
