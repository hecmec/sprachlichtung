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

## Zusammenfassung

</div>
</div>

<div className="row">
<div className="col col--6">

After completing the course's long overview of induction, scientific method, and empirical observation, this episode shifts away from **empiricism** toward what is more purely rational: **deductive logic**. It opens with a review of foundational concepts before previewing the types of propositions that the coming videos will explore in depth.

</div>
<div className="col col--6 video-translation">

Nach dem Abschluss des langen Überblicks des Kurses über Induktion, wissenschaftliche Methode und empirische Beobachtung wendet sich diese Folge vom **Empirismus** ab und dem zu, was reiner rational ist: der **deduktiven Logik**. Sie beginnt mit einer Wiederholung grundlegender Begriffe, bevor sie die Arten von Aussagen vorstellt, welche die kommenden Videos eingehend erkunden werden.

</div>
</div>

<div className="row">
<div className="col col--6">

### Arguments: Premises and Conclusions

</div>
<div className="col col--6 video-translation">

### Argumente: Prämissen und Schlussfolgerungen

</div>
</div>

<div className="row">
<div className="col col--6">

An **argument** is a structured group of statements or propositions intended to perform a rational, persuasive task. Every argument, whether deductive or inductive, has the same two basic parts: **premises** (the initial supporting claims) and a **conclusion** (the final resulting claim). The conclusion is meant to follow from the premises, and the purpose is to convince the reader that the conclusion is true, _assuming_ the premises are true.

</div>
<div className="col col--6 video-translation">

Ein **Argument** ist eine strukturierte Gruppe von Aussagen oder Propositionen, die eine rationale, überzeugende Aufgabe erfüllen soll. Jedes Argument, ob deduktiv oder induktiv, hat dieselben zwei Grundteile: **Prämissen** (die anfänglichen stützenden Behauptungen) und eine **Schlussfolgerung** (die abschließende, sich ergebende Behauptung). Die Schlussfolgerung soll aus den Prämissen folgen, und der Zweck ist, den Leser zu überzeugen, dass die Schlussfolgerung wahr ist, _vorausgesetzt_, die Prämissen sind wahr.

</div>
</div>

<div className="row">
<div className="col col--6">

### Validity, Truth, and Soundness

</div>
<div className="col col--6 video-translation">

### Gültigkeit, Wahrheit und Stichhaltigkeit

</div>
</div>

<div className="row">
<div className="col col--6">

One of the most important qualities a deductive argument can possess is **validity**. Validity applies only to deductive arguments, and it is a property of the argument itself, not of the individual claims within it. To master it, we need both the concept and the rules or techniques for testing for it (the tests come in later videos).

</div>
<div className="col col--6 video-translation">

Eine der wichtigsten Eigenschaften, die ein deduktives Argument besitzen kann, ist die **Gültigkeit**. Gültigkeit gilt nur für deduktive Argumente, und sie ist eine Eigenschaft des Arguments selbst, nicht der einzelnen Behauptungen darin. Um sie zu meistern, brauchen wir sowohl den Begriff als auch die Regeln oder Techniken, um sie zu prüfen (die Tests kommen in späteren Videos).

</div>
</div>

<div className="row">
<div className="col col--6">

An argument is **valid** whenever its premises are formally related to its conclusion in such a way that it would be logically impossible for all the premises to be true and the conclusion false. The key word is _if_: in a valid argument, **if** the premises are true, then the conclusion **must** be true. Validity is therefore a "truth preservative."

</div>
<div className="col col--6 video-translation">

Ein Argument ist **gültig**, wann immer seine Prämissen formal so mit seiner Schlussfolgerung verbunden sind, dass es logisch unmöglich wäre, dass alle Prämissen wahr und die Schlussfolgerung falsch sind. Das Schlüsselwort ist _wenn_: In einem gültigen Argument gilt, **wenn** die Prämissen wahr sind, dann **muss** die Schlussfolgerung wahr sein. Gültigkeit ist daher ein „Wahrheitsbewahrer".

</div>
</div>

<div className="row">
<div className="col col--6">

A separate desirable quality, which strictly belongs to the parts of the argument rather than the argument itself, is **truth**. When an argument is both valid and has true premises, it is **sound**, which is the gold standard.

</div>
<div className="col col--6 video-translation">

Eine gesonderte wünschenswerte Eigenschaft, die streng genommen zu den Teilen des Arguments und nicht zum Argument selbst gehört, ist die **Wahrheit**. Wenn ein Argument sowohl gültig ist als auch wahre Prämissen hat, ist es **stichhaltig**, was der Goldstandard ist.

</div>
</div>

<div className="row">
<div className="col col--6">

Several consequences follow from these definitions:

</div>
<div className="col col--6 video-translation">

Aus diesen Definitionen folgen mehrere Konsequenzen:

</div>
</div>

<div className="row">
<div className="col col--6">

- A valid argument **can** have a false conclusion, but only if it also has at least one false premise.
- If a conclusion is false and the argument is valid, there must be at least one false premise.
- If the conclusion is false but the premises are all true, the argument cannot be valid.

</div>
<div className="col col--6 video-translation">

- Ein gültiges Argument **kann** eine falsche Schlussfolgerung haben, aber nur, wenn es auch mindestens eine falsche Prämisse hat.
- Wenn eine Schlussfolgerung falsch und das Argument gültig ist, muss es mindestens eine falsche Prämisse geben.
- Wenn die Schlussfolgerung falsch ist, die Prämissen aber alle wahr sind, kann das Argument nicht gültig sein.

</div>
</div>

<div className="row">
<div className="col col--6">

A valid argument with false premises can even yield a _true_ conclusion. The video illustrates this with a series of examples:

</div>
<div className="col col--6 video-translation">

Ein gültiges Argument mit falschen Prämissen kann sogar eine _wahre_ Schlussfolgerung ergeben. Das Video veranschaulicht dies mit einer Reihe von Beispielen:

</div>
</div>

<div className="row">
<div className="col col--6">

- _All dogs are four-legged animals; Scooby-Doo is a dog; therefore Scooby-Doo has four legs._ Valid, true premises, true conclusion.
- _All dogs are four-legged animals; Big Bird is a dog; therefore Big Bird has four legs._ Valid, but the false minor premise ("Big Bird is a dog") produces a false conclusion.
- _All dogs are two-legged animals; Big Bird is a dog; therefore Big Bird has two legs._ Valid, with two false premises, yet a true conclusion.

</div>
<div className="col col--6 video-translation">

- _Alle Hunde sind vierbeinige Tiere; Scooby-Doo ist ein Hund; also hat Scooby-Doo vier Beine._ Gültig, wahre Prämissen, wahre Schlussfolgerung.
- _Alle Hunde sind vierbeinige Tiere; Bibo ist ein Hund; also hat Bibo vier Beine._ Gültig, aber die falsche Unterprämisse („Bibo ist ein Hund") erzeugt eine falsche Schlussfolgerung.
- _Alle Hunde sind zweibeinige Tiere; Bibo ist ein Hund; also hat Bibo zwei Beine._ Gültig, mit zwei falschen Prämissen, und doch eine wahre Schlussfolgerung.

</div>
</div>

<div className="row">
<div className="col col--6">

The lesson: validity only says that _if_ the premises are true the conclusion must be true. It is a logical mistake to think that false premises guarantee a false conclusion.

</div>
<div className="col col--6 video-translation">

Die Lektion: Gültigkeit sagt nur, dass, _wenn_ die Prämissen wahr sind, die Schlussfolgerung wahr sein muss. Es ist ein logischer Fehler zu meinen, falsche Prämissen garantierten eine falsche Schlussfolgerung.

</div>
</div>

<div className="row">
<div className="col col--6">

### Formal vs. Material Logic

</div>
<div className="col col--6 video-translation">

### Formale vs. materiale Logik

</div>
</div>

<div className="row">
<div className="col col--6">

**Formal logic** is the branch concerned with the principles and methods of deductive reasoning, deducing conclusions from propositions. It deals with the **form** of an argument: how the premises are structured. The example _All cats are dogs; Tom is a cat; therefore Tom is a dog_ is valid purely because of its structure, even though a premise is false (swap "dogs" for "mammals" and the form is obviously fine).

</div>
<div className="col col--6 video-translation">

**Formale Logik** ist der Zweig, der sich mit den Prinzipien und Methoden des deduktiven Schließens befasst, Schlussfolgerungen aus Aussagen zu deduzieren. Sie befasst sich mit der **Form** eines Arguments: wie die Prämissen strukturiert sind. Das Beispiel _Alle Katzen sind Hunde; Tom ist eine Katze; also ist Tom ein Hund_ ist rein aufgrund seiner Struktur gültig, obwohl eine Prämisse falsch ist (ersetze „Hunde" durch „Säugetiere", und die Form ist offensichtlich in Ordnung).

</div>
</div>

<div className="row">
<div className="col col--6">

This is the difference between formal and material logic. When analyzing form, it is often useful to **replace words with symbols** to reveal structure more clearly, which necessarily hides the content. Both kinds of logic matter, but a nonsensical premise does not destroy validity.

</div>
<div className="col col--6 video-translation">

Das ist der Unterschied zwischen formaler und materialer Logik. Beim Analysieren der Form ist es oft nützlich, **Wörter durch Symbole zu ersetzen**, um die Struktur klarer zu zeigen, was notwendigerweise den Inhalt verbirgt. Beide Arten von Logik sind wichtig, aber eine unsinnige Prämisse zerstört die Gültigkeit nicht.

</div>
</div>

<div className="row">
<div className="col col--6">

### Propositions and Declarative Sentences

</div>
<div className="col col--6 video-translation">

### Propositionen und Aussagesätze

</div>
</div>

<div className="row">
<div className="col col--6">

A reminder on terminology: an _argument_ cannot be true or false; only premises and conclusions can be, because they are propositions. Conversely, an argument can be valid or invalid, while propositions cannot.

</div>
<div className="col col--6 video-translation">

Eine Erinnerung zur Terminologie: Ein _Argument_ kann nicht wahr oder falsch sein; nur Prämissen und Schlussfolgerungen können es sein, weil sie Propositionen sind. Umgekehrt kann ein Argument gültig oder ungültig sein, Propositionen dagegen nicht.

</div>
</div>

<div className="row">
<div className="col col--6">

A **proposition** is the meaning of a **declarative sentence**, and a declarative sentence is one that makes a truth claim. A proposition must therefore be either true or false. A simple test is to ask whether the sentence could be true. Questions ("Do you want to go to the movies?"), imperatives ("Take out the trash"), and exclamations ("Groovy!") are not declarative sentences. Exceptions exist: a **rhetorical question** functions as a statement, and exclamations can carry claims ("That was an awesome movie") that have a truth value even when subjective.

</div>
<div className="col col--6 video-translation">

Eine **Proposition** ist die Bedeutung eines **Aussagesatzes**, und ein Aussagesatz ist einer, der einen Wahrheitsanspruch erhebt. Eine Proposition muss daher entweder wahr oder falsch sein. Ein einfacher Test ist zu fragen, ob der Satz wahr sein könnte. Fragen („Willst du ins Kino gehen?"), Imperative („Bring den Müll raus") und Ausrufe („Toll!") sind keine Aussagesätze. Ausnahmen existieren: Eine **rhetorische Frage** fungiert als Aussage, und Ausrufe können Behauptungen tragen („Das war ein großartiger Film"), die einen Wahrheitswert haben, selbst wenn sie subjektiv sind.

</div>
</div>

<div className="row">
<div className="col col--6">

Crucially, many different sentences can express a single proposition. Five sentences such as "We have to work hard," "We must labor diligently," and even a Latin version all share **one** proposition, because the proposition is the _meaning_. This insight is essential to translation work and explains how people who speak different languages can communicate.

</div>
<div className="col col--6 video-translation">

Entscheidend ist, dass viele verschiedene Sätze eine einzige Proposition ausdrücken können. Fünf Sätze wie „Wir müssen hart arbeiten", „Wir müssen fleißig schuften" und sogar eine lateinische Fassung teilen alle **eine** Proposition, weil die Proposition die _Bedeutung_ ist. Diese Einsicht ist für die Übersetzungsarbeit wesentlich und erklärt, wie Menschen, die verschiedene Sprachen sprechen, kommunizieren können.

</div>
</div>

<div className="row">
<div className="col col--6">

### Five Types of Propositions (Preview)

</div>
<div className="col col--6 video-translation">

### Fünf Arten von Propositionen (Vorschau)

</div>
</div>

<div className="row">
<div className="col col--6">

The coming videos will reason with five proposition types. The first, **categorical**, gets its own treatment (categorical logic); the other four are handled together under **propositional** or **truth-functional logic**.

</div>
<div className="col col--6 video-translation">

Die kommenden Videos werden mit fünf Arten von Propositionen schließen. Die erste, die **kategoriale**, erhält ihre eigene Behandlung (kategoriale Logik); die anderen vier werden zusammen unter der **Aussagenlogik** oder **wahrheitsfunktionalen Logik** behandelt.

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

- **Kategoriale Propositionen** betreffen Beziehungen zwischen Klassen oder Kategorien und bejahen oder verneinen, dass eine Klasse ganz oder teilweise in einer anderen enthalten ist. Sie unterteilen sich in vier Untertypen: **universell bejahend** („alle sind"), **universell verneinend** („keine sind"), **partikulär bejahend** („einige sind") und **partikulär verneinend** („einige sind nicht").
- **Hypothetische (konditionale) Propositionen** sind zusammengesetzte _Wenn-dann_-Aussagen (wenn _Antezedens_, dann _Konsequens_). Die Beziehung ist **nicht kausal**: Das Antezedens ist eine **hinreichende Bedingung** (seine Wahrheit garantiert das Konsequens), und das Konsequens ist eine **notwendige Bedingung** (ohne die das Antezedens nicht gelten kann). Das Beispiel „wenn Feuer, dann Sauerstoff" zeigt dies: Feuer garantiert Sauerstoff, weil Sauerstoff für Feuer notwendig ist, doch Sauerstoff garantiert kein Feuer.
- **Disjunktive Propositionen** verwenden „oder" / „entweder … oder". Ein **Disjunkt** ist eine Komponente. Die **inklusive (schwache)** Disjunktion bedeutet, dass mindestens ein Disjunkt wahr ist (beide können es sein); die **exklusive (starke)** Disjunktion bedeutet, dass genau eines wahr ist. Eine Disjunktion ist wahr, solange ein Disjunkt wahr ist.
- **Konjunktive Propositionen** verwenden „und" (oder „sowohl … als auch", und manchmal „aber"). Eine Konjunktion ist **nur wahr, wenn beide Konjunkte wahr sind**.
- **Bikonditionale Propositionen** behaupten, dass zwei Komponenten denselben Wahrheitswert haben (sie sind **material äquivalent**), mit „genau dann, wenn". Ein Bikonditional „A genau dann, wenn B" entfaltet sich in zwei Hypothetische (wenn A dann B, und wenn B dann A) und ist daher sowohl eine notwendige als auch eine hinreichende Bedingung.

</div>
</div>

<div className="row">
<div className="col col--6">

The next episode begins a multi-part investigation of **categorical logic**, focusing on that first proposition type.

</div>
<div className="col col--6 video-translation">

Die nächste Folge beginnt eine mehrteilige Untersuchung der **kategorialen Logik** und konzentriert sich auf diese erste Art von Proposition.

</div>
</div>
