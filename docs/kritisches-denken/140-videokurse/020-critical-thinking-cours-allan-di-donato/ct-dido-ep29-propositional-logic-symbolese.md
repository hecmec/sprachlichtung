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

Whereas the fundamental elements of categorical logic were **terms** (subject, predicate, middle), the fundamental elements of propositional logic are **statements** or **propositions**, hence the name. Statements can be **simple** (also called **atomic**), such as "fast foods tend to be unhealthy," or **compound**, such as "Chuck Berry plays the guitar and Fats Domino plays the piano," which joins two atomic statements with the operator _and_.

</div>
<div className="col col--6 video-translation">

Während die grundlegenden Elemente der kategorialen Logik **Terme** waren (Subjekt, Prädikat, Mittelbegriff), sind die grundlegenden Elemente der Aussagenlogik **Aussagen** oder **Propositionen**, daher der Name. Aussagen können **einfach** (auch **atomar** genannt) sein, wie „Fast Food ist tendenziell ungesund", oder **zusammengesetzt**, wie „Chuck Berry spielt Gitarre und Fats Domino spielt Klavier", was zwei atomare Aussagen mit dem Operator _und_ verbindet.

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

- **Statement variables**: lowercase letters _p_ through _z_ stand for any proposition and are used to build general **statement forms** (e.g., _p · q_). Substituting specific content gives a **substitution instance**.
- **Statement abbreviations**: uppercase letters _A_ through _Z_ abbreviate specific propositions. "I am Batman" can become _B_, no matter how long or complex the original sentence is.
- The **conclusion indicator** (the **tri-dot**, which Di Donato calls the "Predator sight") translates as _therefore_ or _so_.

</div>
<div className="col col--6 video-translation">

- **Aussagenvariablen**: die Kleinbuchstaben _p_ bis _z_ stehen für eine beliebige Proposition und werden verwendet, um allgemeine **Aussageformen** zu bilden (z. B. _p · q_). Das Einsetzen konkreten Inhalts ergibt eine **Substitutionsinstanz**.
- **Aussagenabkürzungen**: die Großbuchstaben _A_ bis _Z_ kürzen bestimmte Propositionen ab. „Ich bin Batman" kann zu _B_ werden, egal wie lang oder komplex der ursprüngliche Satz ist.
- Der **Schlussfolgerungsindikator** (die **drei Punkte**, die Di Donato das „Predator-Visier" nennt) wird als _also_ oder _daher_ übersetzt.

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

- **Negation** (the **tilde**, ~) means _not_ or "it is not the case that," reversing the truth value of a proposition.
- The **hypothetical** or conditional (**horseshoe** ⊃ or **arrow** →) translates _if p then q_ and expresses **material implication**.
- The **disjunction** (the **wedge** ∨) joins **disjuncts** to express _either p or q_.
- The **conjunction** (the **dot** · or **ampersand** &) joins **conjuncts** to express _both p and q_.
- The **biconditional** (the **tri-bar** ≡ or **double-sided arrow** ↔) expresses **material equivalence**, _p if and only if q_.
- **Brackets** (parentheses) are essential for removing ambiguity in compound statements with several operators.

</div>
<div className="col col--6 video-translation">

- **Negation** (die **Tilde**, ~) bedeutet _nicht_ oder „es ist nicht der Fall, dass" und kehrt den Wahrheitswert einer Proposition um.
- Das **Hypothetische** oder Konditional (**Hufeisen** ⊃ oder **Pfeil** →) übersetzt _wenn p dann q_ und drückt die **materiale Implikation** aus.
- Die **Disjunktion** (der **Keil** ∨) verbindet **Disjunkte**, um _entweder p oder q_ auszudrücken.
- Die **Konjunktion** (der **Punkt** · oder das **Et-Zeichen** &) verbindet **Konjunkte**, um _sowohl p als auch q_ auszudrücken.
- Das **Bikonditional** (der **Dreifachbalken** ≡ oder **beidseitige Pfeil** ↔) drückt die **materiale Äquivalenz** aus, _p genau dann, wenn q_.
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

- A **hypothetical** is always true _except_ when the antecedent is true and the consequent is false.
- A **disjunction** is true as long as at least one disjunct is true; it is false only when both are false.
- A **conjunction** is true _only_ when both conjuncts are true.
- A **biconditional** is true _only_ when both components share the same truth value.

</div>
<div className="col col--6 video-translation">

- Ein **Hypothetisches** ist immer wahr, _außer_ wenn das Antezedens wahr und das Konsequens falsch ist.
- Eine **Disjunktion** ist wahr, solange mindestens ein Disjunkt wahr ist; sie ist nur falsch, wenn beide falsch sind.
- Eine **Konjunktion** ist _nur_ wahr, wenn beide Konjunkte wahr sind.
- Ein **Bikonditional** ist _nur_ wahr, wenn beide Komponenten denselben Wahrheitswert teilen.

</div>
</div>

<div className="row">
<div className="col col--6">

Di Donato also notes that some compound propositions are **not** truth-functional. With connectives like _because_, _believes that_, or _hopes that_, the truth of the whole is not fixed by the truth of the parts. "Joe failed because he didn't turn in his homework" requires a genuine causal link, and "Joe believed the sun revolves around the earth" is true so long as Joe holds that belief, regardless of whether the belief itself is true.

</div>
<div className="col col--6 video-translation">

Di Donato merkt außerdem an, dass manche zusammengesetzten Propositionen **nicht** wahrheitsfunktional sind. Bei Bindewörtern wie _weil_, _glaubt, dass_ oder _hofft, dass_ ist die Wahrheit des Ganzen nicht durch die Wahrheit der Teile festgelegt. „Joe fiel durch, weil er seine Hausaufgaben nicht abgab" erfordert einen echten kausalen Zusammenhang, und „Joe glaubte, die Sonne drehe sich um die Erde" ist wahr, solange Joe diese Überzeugung hegt, unabhängig davon, ob die Überzeugung selbst wahr ist.

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

A large part of the lesson is learning which English words signal which operator. For **hypotheticals**, the word _if_ introduces the **antecedent** and _then_ the **consequent**. The tricky phrase _only if_ points instead to the **consequent**, so "p only if q" is _p ⊃ q_. A **necessary condition** is the consequent; a **sufficient condition** is the antecedent. Phrases like _implies_, _entails_, _given that_, _provided that_, and _on the condition that_ all point to the antecedent, while _is implied by_ or _is entailed by_ point to the consequent.

</div>
<div className="col col--6 video-translation">

Ein großer Teil der Lektion besteht darin zu lernen, welche englischen Wörter welchen Operator signalisieren. Bei **Hypothetischen** führt das Wort _if_ (wenn) das **Antezedens** ein und _then_ (dann) das **Konsequens**. Die knifflige Wendung _only if_ (nur wenn) weist stattdessen auf das **Konsequens**, sodass „p only if q" _p ⊃ q_ ist. Eine **notwendige Bedingung** ist das Konsequens; eine **hinreichende Bedingung** ist das Antezedens. Wendungen wie _implies_, _entails_, _given that_, _provided that_ und _on the condition that_ weisen alle auf das Antezedens, während _is implied by_ oder _is entailed by_ auf das Konsequens weisen.

</div>
</div>

<div className="row">
<div className="col col--6">

For **disjunctions**, watch for _either…or_, plain _or_, and the counter-intuitive _unless_ ("p unless q" equals _p ∨ q_). **Conjunctions** are signaled not only by _and_ and _both…and_ but also by _although_, _but_, _even though_, _however_, _nevertheless_, and _yet_. The **biconditional** appears as _if and only if_, _a necessary and sufficient condition_, and _just in case_.

</div>
<div className="col col--6 video-translation">

Bei **Disjunktionen** achte auf _either … or_, das schlichte _or_ und das kontraintuitive _unless_ („p unless q" entspricht _p ∨ q_). **Konjunktionen** werden nicht nur durch _and_ und _both … and_ signalisiert, sondern auch durch _although_, _but_, _even though_, _however_, _nevertheless_ und _yet_. Das **Bikonditional** erscheint als _if and only if_, _a necessary and sufficient condition_ und _just in case_.

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

- "The ringing of the bell is sufficient for the dog to start salivating" → _R ⊃ D_ (the sufficient item is the antecedent).
- "Mark watches TV unless Jim goes to the bank" → _M ∨ J_.
- "It's not the case that both Sean and Deirdre are dancers" → _~(S · D)_.
- "Neither Bill nor Jeff play football" → _~(B ∨ J)_, a negated disjunction.
- "Jules likes pizza even though Luigi likes lasagna just in case either Moshe likes mozzarella or Henry likes Limburger" → _(J · L) ≡ (M ∨ H)_, showing how brackets keep complex forms clear.

</div>
<div className="col col--6 video-translation">

- „The ringing of the bell is sufficient for the dog to start salivating" → _R ⊃ D_ (das Hinreichende ist das Antezedens).
- „Mark watches TV unless Jim goes to the bank" → _M ∨ J_.
- „It's not the case that both Sean and Deirdre are dancers" → _~(S · D)_.
- „Neither Bill nor Jeff play football" → _~(B ∨ J)_, eine negierte Disjunktion.
- „Jules likes pizza even though Luigi likes lasagna just in case either Moshe likes mozzarella or Henry likes Limburger" → _(J · L) ≡ (M ∨ H)_, was zeigt, wie Klammern komplexe Formen klar halten.

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

[Article en français](/fr/docs/kritisches-denken/140-videokurse/020-critical-thinking-cours-allan-di-donato/ct-dido-ep29-propositional-logic-symbolese.md) | [Article in English](/en/docs/kritisches-denken/140-videokurse/020-critical-thinking-cours-allan-di-donato/ct-dido-ep29-propositional-logic-symbolese.md)
