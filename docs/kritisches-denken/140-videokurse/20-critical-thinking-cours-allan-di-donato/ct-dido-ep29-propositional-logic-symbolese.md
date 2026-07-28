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

<h2>Zusammenfassung</h2>

</div>
</div>

<div className="row">
<div className="col col--6">

After several episodes on categorical logic, this video circles back to a different family of propositions: **truth-functional** or **propositional logic**. Like categorical logic, it is concerned with the **form** or **structure** of arguments rather than their content. To capture that structure as clearly as possible, propositional logic uses its own artificial language, which Di Donato playfully calls **Symbolese**, reassuring viewers that it is far easier to learn than Latin.

</div>
<div className="col col--6 video-translation">

Nach mehreren Folgen über kategoriale Logik kehrt dieses Video zu einer anderen Familie von Propositionen zurück: der **wahrheitsfunktionalen** oder **Aussagenlogik**. Wie die kategoriale Logik befasst sie sich mit der **Form** oder **Struktur** von Argumenten statt mit ihrem Inhalt. Um diese Struktur so klar wie möglich zu erfassen, verwendet die Aussagenlogik ihre eigene künstliche Sprache, die Di Donato scherzhaft **Symbolesisch** nennt und den Zuschauern versichert, dass sie weit leichter zu lernen ist als Latein.

</div>
</div>

<div className="row">
<div className="col col--6">

### Statements as Building Blocks

</div>
<div className="col col--6 video-translation">

<h3>Aussagen als Bausteine</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Whereas the fundamental elements of categorical logic were **terms** (subject, predicate, middle), the fundamental elements of propositional logic are **statements** or **propositions**, hence the name. Statements can be **simple** (also called **atomic**), such as "fast foods tend to be unhealthy," or **compound**, such as "Chuck Berry plays the guitar and Fats Domino plays the piano," which joins two atomic statements with the operator *and*.

</div>
<div className="col col--6 video-translation">

Während die grundlegenden Elemente der kategorialen Logik **Terme** waren (Subjekt, Prädikat, Mittelbegriff), sind die grundlegenden Elemente der Aussagenlogik **Aussagen** oder **Propositionen**, daher der Name. Aussagen können **einfach** (auch **atomar** genannt) sein, wie „Fast Food ist tendenziell ungesund", oder **zusammengesetzt**, wie „Chuck Berry spielt Gitarre und Fats Domino spielt Klavier", was zwei atomare Aussagen mit dem Operator *und* verbindet.

</div>
</div>

<div className="row">
<div className="col col--6">

The label **truth-functional** captures the key idea: the truth value of a compound proposition depends entirely on the truth values of its component parts. The conjunction above is true only if both atomic statements are true. As always, the focus is on **validity**, a property of form rather than content. Form does not guarantee truth, but it preserves truth as long as we start with true premises. By representing only statement forms and argument forms, symbolic logic makes formal relationships visible and removes confusion caused by the wording of a proposition.

</div>
<div className="col col--6 video-translation">

Die Bezeichnung **wahrheitsfunktional** erfasst den Kerngedanken: Der Wahrheitswert einer zusammengesetzten Proposition hängt vollständig von den Wahrheitswerten ihrer Bestandteile ab. Die obige Konjunktion ist nur wahr, wenn beide atomaren Aussagen wahr sind. Wie immer liegt der Fokus auf der **Gültigkeit**, einer Eigenschaft der Form und nicht des Inhalts. Die Form garantiert keine Wahrheit, aber sie bewahrt die Wahrheit, solange wir mit wahren Prämissen beginnen. Indem sie nur Aussageformen und Argumentformen darstellt, macht die symbolische Logik formale Beziehungen sichtbar und beseitigt die Verwirrung, die durch die Formulierung einer Proposition verursacht wird.

</div>
</div>

<div className="row">
<div className="col col--6">

### The Vocabulary of Symbolese

</div>
<div className="col col--6 video-translation">

<h3>Das Vokabular des Symbolesischen</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The language has several kinds of symbols:

</div>
<div className="col col--6 video-translation">

Die Sprache hat mehrere Arten von Symbolen:

</div>
</div>

<div className="row">
<div className="col col--6">

- **Statement variables**: lowercase letters *p* through *z* stand for any proposition and are used to build general **statement forms** (e.g., *p · q*). Substituting specific content gives a **substitution instance**.
- **Statement abbreviations**: uppercase letters *A* through *Z* abbreviate specific propositions. "I am Batman" can become *B*, no matter how long or complex the original sentence is.
- The **conclusion indicator** (the **tri-dot**, which Di Donato calls the "Predator sight") translates as *therefore* or *so*.

</div>
<div className="col col--6 video-translation">

- **Aussagenvariablen**: die Kleinbuchstaben *p* bis *z* stehen für eine beliebige Proposition und werden verwendet, um allgemeine **Aussageformen** zu bilden (z. B. *p · q*). Das Einsetzen konkreten Inhalts ergibt eine **Substitutionsinstanz**.
- **Aussagenabkürzungen**: die Großbuchstaben *A* bis *Z* kürzen bestimmte Propositionen ab. „Ich bin Batman" kann zu *B* werden, egal wie lang oder komplex der ursprüngliche Satz ist.
- Der **Schlussfolgerungsindikator** (die **drei Punkte**, die Di Donato das „Predator-Visier" nennt) wird als *also* oder *daher* übersetzt.

</div>
</div>

<div className="row">
<div className="col col--6">

### The Operators

</div>
<div className="col col--6 video-translation">

<h3>Die Operatoren</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Operators connect or modify statements and determine the overall truth value:

</div>
<div className="col col--6 video-translation">

Operatoren verbinden oder modifizieren Aussagen und bestimmen den Gesamtwahrheitswert:

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

- **Negation** (die **Tilde**, ~) bedeutet *nicht* oder „es ist nicht der Fall, dass" und kehrt den Wahrheitswert einer Proposition um.
- Das **Hypothetische** oder Konditional (**Hufeisen** ⊃ oder **Pfeil** →) übersetzt *wenn p dann q* und drückt die **materiale Implikation** aus.
- Die **Disjunktion** (der **Keil** ∨) verbindet **Disjunkte**, um *entweder p oder q* auszudrücken.
- Die **Konjunktion** (der **Punkt** · oder das **Et-Zeichen** &) verbindet **Konjunkte**, um *sowohl p als auch q* auszudrücken.
- Das **Bikonditional** (der **Dreifachbalken** ≡ oder **beidseitige Pfeil** ↔) drückt die **materiale Äquivalenz** aus, *p genau dann, wenn q*.
- **Klammern** sind wesentlich, um Mehrdeutigkeit in zusammengesetzten Aussagen mit mehreren Operatoren zu beseitigen.

</div>
</div>

<div className="row">
<div className="col col--6">

### How Each Operator Behaves

</div>
<div className="col col--6 video-translation">

<h3>Wie sich jeder Operator verhält</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Each operator has its own truth conditions:

</div>
<div className="col col--6 video-translation">

Jeder Operator hat seine eigenen Wahrheitsbedingungen:

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

- Ein **Hypothetisches** ist immer wahr, *außer* wenn das Antezedens wahr und das Konsequens falsch ist.
- Eine **Disjunktion** ist wahr, solange mindestens ein Disjunkt wahr ist; sie ist nur falsch, wenn beide falsch sind.
- Eine **Konjunktion** ist *nur* wahr, wenn beide Konjunkte wahr sind.
- Ein **Bikonditional** ist *nur* wahr, wenn beide Komponenten denselben Wahrheitswert teilen.

</div>
</div>

<div className="row">
<div className="col col--6">

Di Donato also notes that some compound propositions are **not** truth-functional. With connectives like *because*, *believes that*, or *hopes that*, the truth of the whole is not fixed by the truth of the parts. "Joe failed because he didn't turn in his homework" requires a genuine causal link, and "Joe believed the sun revolves around the earth" is true so long as Joe holds that belief, regardless of whether the belief itself is true.

</div>
<div className="col col--6 video-translation">

Di Donato merkt außerdem an, dass manche zusammengesetzten Propositionen **nicht** wahrheitsfunktional sind. Bei Bindewörtern wie *weil*, *glaubt, dass* oder *hofft, dass* ist die Wahrheit des Ganzen nicht durch die Wahrheit der Teile festgelegt. „Joe fiel durch, weil er seine Hausaufgaben nicht abgab" erfordert einen echten kausalen Zusammenhang, und „Joe glaubte, die Sonne drehe sich um die Erde" ist wahr, solange Joe diese Überzeugung hegt, unabhängig davon, ob die Überzeugung selbst wahr ist.

</div>
</div>

<div className="row">
<div className="col col--6">

### Translating English into Symbolese

</div>
<div className="col col--6 video-translation">

<h3>Natürliche Sprache ins Symbolesische übersetzen</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

A large part of the lesson is learning which English words signal which operator. For **hypotheticals**, the word *if* introduces the **antecedent** and *then* the **consequent**. The tricky phrase *only if* points instead to the **consequent**, so "p only if q" is *p ⊃ q*. A **necessary condition** is the consequent; a **sufficient condition** is the antecedent. Phrases like *implies*, *entails*, *given that*, *provided that*, and *on the condition that* all point to the antecedent, while *is implied by* or *is entailed by* point to the consequent.

</div>
<div className="col col--6 video-translation">

Ein großer Teil der Lektion besteht darin zu lernen, welche englischen Wörter welchen Operator signalisieren. Bei **Hypothetischen** führt das Wort *if* (wenn) das **Antezedens** ein und *then* (dann) das **Konsequens**. Die knifflige Wendung *only if* (nur wenn) weist stattdessen auf das **Konsequens**, sodass „p only if q" *p ⊃ q* ist. Eine **notwendige Bedingung** ist das Konsequens; eine **hinreichende Bedingung** ist das Antezedens. Wendungen wie *implies*, *entails*, *given that*, *provided that* und *on the condition that* weisen alle auf das Antezedens, während *is implied by* oder *is entailed by* auf das Konsequens weisen.

</div>
</div>

<div className="row">
<div className="col col--6">

For **disjunctions**, watch for *either…or*, plain *or*, and the counter-intuitive *unless* ("p unless q" equals *p ∨ q*). **Conjunctions** are signaled not only by *and* and *both…and* but also by *although*, *but*, *even though*, *however*, *nevertheless*, and *yet*. The **biconditional** appears as *if and only if*, *a necessary and sufficient condition*, and *just in case*.

</div>
<div className="col col--6 video-translation">

Bei **Disjunktionen** achte auf *either … or*, das schlichte *or* und das kontraintuitive *unless* („p unless q" entspricht *p ∨ q*). **Konjunktionen** werden nicht nur durch *and* und *both … and* signalisiert, sondern auch durch *although*, *but*, *even though*, *however*, *nevertheless* und *yet*. Das **Bikonditional** erscheint als *if and only if*, *a necessary and sufficient condition* und *just in case*.

</div>
</div>

<div className="row">
<div className="col col--6">

### Worked Examples

</div>
<div className="col col--6 video-translation">

<h3>Durchgerechnete Beispiele</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Di Donato closes with practice translations:

</div>
<div className="col col--6 video-translation">

Di Donato schließt mit Übungsübersetzungen:

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

- „The ringing of the bell is sufficient for the dog to start salivating" → *R ⊃ D* (das Hinreichende ist das Antezedens).
- „Mark watches TV unless Jim goes to the bank" → *M ∨ J*.
- „It's not the case that both Sean and Deirdre are dancers" → *~(S · D)*.
- „Neither Bill nor Jeff play football" → *~(B ∨ J)*, eine negierte Disjunktion.
- „Jules likes pizza even though Luigi likes lasagna just in case either Moshe likes mozzarella or Henry likes Limburger" → *(J · L) ≡ (M ∨ H)*, was zeigt, wie Klammern komplexe Formen klar halten.

</div>
</div>

<div className="row">
<div className="col col--6">

The episode ends by previewing the next topic: using these elements to examine the different types of **syllogisms** built from these propositions.

</div>
<div className="col col--6 video-translation">

Die Folge endet mit einer Vorschau auf das nächste Thema: diese Elemente zu verwenden, um die verschiedenen Arten von **Syllogismen** zu untersuchen, die aus diesen Propositionen aufgebaut sind.

</div>
</div>
