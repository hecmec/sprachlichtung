---
title: "28. Categorical Logic - Categorical Syllogisms"
sidebar_position: 28
keywords:
  - categorical syllogism
  - distribution of terms
  - major minor middle term
  - rules of validity
  - syllogistic fallacies
  - deductive argument
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
translation_status: manual
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/2POmtPgCRb8' />

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

This lecture finally puts the earlier groundwork of categorical logic to work by analyzing arguments in the form of **categorical syllogisms**. A **syllogism** is a standard form of deductive argument in which a conclusion is inferred from two premises. A categorical syllogism specifically consists of three categorical propositions and contains exactly three terms. Each term keeps the same meaning throughout the argument, and each term appears in exactly two of the propositions. (Recall that any single categorical proposition contains only two terms: a subject and a predicate.)

</div>
<div className="col col--6 video-translation">

Ce cours met enfin à profit les bases posées en logique catégorique en analysant des arguments sous la forme de **syllogismes catégoriques**. Un **syllogisme** est une forme canonique d’argument déductif dans laquelle une conclusion est inférée de deux prémisses. Un syllogisme catégorique se compose précisément de trois propositions catégoriques et contient exactement trois termes. Chaque terme conserve le même sens tout au long de l’argument, et chaque terme figure dans exactement deux des propositions. (Rappelons qu’une proposition catégorique isolée ne contient que deux termes : un sujet et un prédicat.)

</div>
</div>

<div className="row">
<div className="col col--6">

### A Worked Example

</div>
<div className="col col--6 video-translation">

<h3>Un exemple travaillé</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Consider: Premise 1, "No logicians are people who embrace contradiction"; Premise 2, "Some teachers are people who embrace contradiction"; Conclusion, "Therefore, some teachers are not logicians." Here *logicians* appears in Premise 1 and the conclusion, *teachers* appears in Premise 2 and the conclusion, and *people who embrace contradiction* appears once in each premise. The goal is to determine whether such a syllogism is **valid**, meaning structured so that if the premises are true the conclusion could not possibly be false.

</div>
<div className="col col--6 video-translation">

Soit : prémisse 1, « Aucun logicien n’est une personne qui embrasse la contradiction » ; prémisse 2, « Quelques enseignants sont des personnes qui embrassent la contradiction » ; conclusion, « Donc quelques enseignants ne sont pas des logiciens ». Ici, *logiciens* figure dans la prémisse 1 et dans la conclusion, *enseignants* dans la prémisse 2 et dans la conclusion, et *personnes qui embrassent la contradiction* une fois dans chaque prémisse. Il s’agit de déterminer si un tel syllogisme est **valide**, c’est-à-dire structuré de telle sorte que, si les prémisses sont vraies, la conclusion ne puisse aucunement être fausse.

</div>
</div>

<div className="row">
<div className="col col--6">

### Distribution

</div>
<div className="col col--6 video-translation">

<h3>La distribution</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Before testing validity, we need the concept of **distribution**. Distribution is an attribute of a *term* (subject or predicate) describing its relationship to the entire class it denotes. A term is **distributed** when it refers to the whole class; otherwise it is **undistributed**. Note the contrast: terms have distribution, whereas propositions have *quantity* (universal or particular).

</div>
<div className="col col--6 video-translation">

Avant de tester la validité, il nous faut la notion de **distribution**. La distribution est un attribut d’un *terme* (sujet ou prédicat) qui décrit son rapport à la classe entière qu’il désigne. Un terme est **distribué** lorsqu’il renvoie à toute la classe ; sinon, il est **non distribué**. Notez le contraste : les termes ont une distribution, tandis que les propositions ont une *quantité* (universelle ou particulière).

</div>
</div>

<div className="row">
<div className="col col--6">

The subject's distribution is easy to spot from the quantifier: it is distributed after *all* or *no*, and undistributed after *some*. The predicate gives no such clue, so it is easiest to memorize the pattern: **universals distribute their subjects, and negatives distribute their predicates**. Applied to the four proposition types:

</div>
<div className="col col--6 video-translation">

La distribution du sujet se repère facilement au quantificateur : il est distribué après *tous* ou *aucun*, non distribué après *quelques*. Le prédicat n’offre aucun indice de ce genre : le plus simple est de mémoriser la règle, à savoir que **les universelles distribuent leur sujet et les négatives distribuent leur prédicat**. Appliquée aux quatre types de propositions :

</div>
</div>

<div className="row">
<div className="col col--6">

- **A (universal affirmative):** subject distributed only.
- **E (universal negative):** both subject and predicate distributed.
- **I (particular affirmative):** nothing distributed.
- **O (particular negative):** predicate distributed only.

</div>
<div className="col col--6 video-translation">

- **A (universelle affirmative) :** sujet distribué seulement.
- **E (universelle négative) :** sujet et prédicat distribués.
- **I (particulière affirmative) :** rien de distribué.
- **O (particulière négative) :** prédicat distribué seulement.

</div>
</div>

<div className="row">
<div className="col col--6">

### Major, Minor, and Middle Terms

</div>
<div className="col col--6 video-translation">

<h3>Grand terme, petit terme et moyen terme</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

A lone proposition has no major, minor, or middle term, but a syllogism does. The **major term** is the predicate of the conclusion, and the premise containing it is the **major premise**. The **minor term** is the subject of the conclusion, found in the **minor premise**. The remaining term, which appears in both premises but never in the conclusion, is the **middle term**. The middle term is structurally the most important: it links the two premises and makes inference to a conclusion possible.

</div>
<div className="col col--6 video-translation">

Une proposition isolée n’a ni grand terme, ni petit terme, ni moyen terme ; un syllogisme, si. Le **grand terme** est le prédicat de la conclusion, et la prémisse qui le contient est la **majeure**. Le **petit terme** est le sujet de la conclusion, que l’on trouve dans la **mineure**. Le terme restant, qui figure dans les deux prémisses mais jamais dans la conclusion, est le **moyen terme**. Structurellement, le moyen terme est le plus important : c’est lui qui relie les deux prémisses et rend l’inférence d’une conclusion possible.

</div>
</div>

<div className="row">
<div className="col col--6">

### The Four Rules of Validity

</div>
<div className="col col--6 video-translation">

<h3>Les quatre règles de validité</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

With these pieces in place, testing validity reduces to applying four rules.

</div>
<div className="col col--6 video-translation">

Ces éléments en place, tester la validité revient à appliquer quatre règles.

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 1 - Three terms only.** A syllogism must contain exactly three terms. More than three commits the **fallacy of equivocation** (the four-term fallacy). Sometimes this is obvious nonsense, but it can hide. In "All heroes are demigods; Martin Luther King Jr. is a hero; therefore MLK is a demigod," *hero* is used equivocally: a mythical god-parent in Premise 1, a modern self-sacrificing person in Premise 2. That yields four terms, no genuine middle term, and so no real connection.

</div>
<div className="col col--6 video-translation">

**Règle 1 – Trois termes, pas davantage.** Un syllogisme doit contenir exactement trois termes. Au-delà, on commet le **sophisme d’équivoque** (le sophisme des quatre termes). C’est parfois manifestement absurde, mais cela peut aussi se dissimuler. Dans « Tous les héros sont des demi-dieux ; Martin Luther King Jr. est un héros ; donc MLK est un demi-dieu », *héros* est employé de façon équivoque : un être né d’un dieu dans la prémisse 1, une figure moderne du dévouement dans la prémisse 2. Cela fait quatre termes, aucun véritable moyen terme, et donc aucun lien réel.

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 2 - The middle term must be distributed at least once.** If it is not, there is no guarantee the major and minor terms connect. Violating this is the **fallacy of the undistributed (illicit) middle**. Example: "All Baptists are baptized; all Catholics are baptized; therefore all Catholics are Baptists." Both premises are A propositions, whose predicates (the middle term *baptized*) are undistributed, so the conclusion does not follow. The same hidden form drives arguments like "The Democratic Party supports health-care reform; socialists support health-care reform; therefore the Democratic Party is socialist."

</div>
<div className="col col--6 video-translation">

**Règle 2 – Le moyen terme doit être distribué au moins une fois.** À défaut, rien ne garantit que le grand et le petit terme se rejoignent. La violer, c’est commettre le **sophisme du moyen terme non distribué (moyen illicite)**. Exemple : « Tous les baptistes sont baptisés ; tous les catholiques sont baptisés ; donc tous les catholiques sont baptistes. » Les deux prémisses sont des propositions A, dont les prédicats (le moyen terme *baptisés*) ne sont pas distribués : la conclusion ne suit donc pas. La même forme cachée gouverne des arguments comme « le Parti démocrate soutient la réforme de la santé ; les socialistes soutiennent la réforme de la santé ; donc le Parti démocrate est socialiste ».

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 3 - Any term distributed in the conclusion must be distributed in the premises.** If a conclusion has no distributed terms, that is fine; the rule only constrains those that are. Violations produce the **fallacy of illicit major** (major term distributed in the conclusion but not the premise) or the **fallacy of illicit minor** (same for the minor term). You cannot infer all of something from only some of it. Example: "All dogs are mammals; no cats are dogs; therefore no cats are mammals." The conclusion is an E, distributing both terms. *Cats* is distributed in the minor premise (fine), but *mammals* is the predicate of an A major premise and is undistributed there: an **illicit major**.

</div>
<div className="col col--6 video-translation">

**Règle 3 – Tout terme distribué dans la conclusion doit l’être dans les prémisses.** Qu’une conclusion ne comporte aucun terme distribué ne pose pas de problème ; la règle ne contraint que ceux qui le sont. Les violations produisent le **sophisme du grand terme illicite** (grand terme distribué dans la conclusion mais non dans la prémisse) ou le **sophisme du petit terme illicite** (de même pour le petit terme). On ne peut inférer la totalité d’une chose à partir d’une partie seulement. Exemple : « Tous les chiens sont des mammifères ; aucun chat n’est un chien ; donc aucun chat n’est un mammifère. » La conclusion est une E, qui distribue les deux termes. *Chats* est distribué dans la mineure (c’est correct), mais *mammifères* est le prédicat d’une majeure de type A et n’y est pas distribué : **grand terme illicite**.

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 4 - The number of negative premises must equal the number of negative claims in the conclusion.** Since the conclusion is a single proposition, this implies you cannot draw a valid conclusion from two negative premises, and you cannot get a negative conclusion from two affirmative premises. Example: "No war is meant to be fun; no government action is meant to be fun; therefore no war is a government action." Two negative premises, one negative conclusion (1 + 1 = 1) is invalid. Both terms are merely excluded from "things meant to be fun," so their relationship to each other remains unknown.

</div>
<div className="col col--6 video-translation">

**Règle 4 – Le nombre de prémisses négatives doit égaler le nombre d’affirmations négatives dans la conclusion.** La conclusion étant une proposition unique, il s’ensuit qu’on ne peut tirer de conclusion valide de deux prémisses négatives, ni obtenir une conclusion négative à partir de deux prémisses affirmatives. Exemple : « Aucune guerre n’est destinée à être amusante ; aucune action gouvernementale n’est destinée à être amusante ; donc aucune guerre n’est une action gouvernementale. » Deux prémisses négatives pour une conclusion négative (1 + 1 = 1) : c’est invalide. Les deux termes sont simplement exclus des « choses destinées à être amusantes », de sorte que leur rapport mutuel demeure inconnu.

</div>
</div>

<div className="row">
<div className="col col--6">

### A Translation Trap

</div>
<div className="col col--6 video-translation">

<h3>Un piège de traduction</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Finally, a deceptive case: "Peter loves Mary Jane; Harry loves Peter; therefore Harry loves Mary Jane." Treating the personal names as classes of one, it appears to pass all four rules, yet it sounds wrong. The problem is **translation**. Properly rendered, the terms are *Peter*, *Harry*, *person who loves Mary Jane*, and *person who loves Peter*: four terms, violating Rule 1. The lesson is that careful translation into standard form is essential before testing validity.

</div>
<div className="col col--6 video-translation">

Enfin, un cas trompeur : « Peter aime Mary Jane ; Harry aime Peter ; donc Harry aime Mary Jane. » En traitant les noms propres comme des classes à un membre, l’argument semble satisfaire aux quatre règles, et pourtant il sonne faux. Le problème vient de la **traduction**. Correctement rendus, les termes sont *Peter*, *Harry*, *personne qui aime Mary Jane* et *personne qui aime Peter* : quatre termes, en violation de la règle 1. La leçon est qu’une traduction soigneuse en forme canonique est indispensable avant de tester la validité.

</div>
</div>

<div className="row">
<div className="col col--6">

The video closes by noting that categorical propositions are not the only kind. The next installment shifts to **propositional logic**, beginning with the language of symbolization.

</div>
<div className="col col--6 video-translation">

La vidéo se clôt en rappelant que les propositions catégoriques ne sont pas les seules. Le volet suivant passe à la **logique propositionnelle**, en commençant par le langage de la symbolisation.

</div>
</div>
