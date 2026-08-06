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

<h2>Zusammenfassung</h2>

</div>
</div>

<div className="row">
<div className="col col--6">

This lecture finally puts the earlier groundwork of categorical logic to work by analyzing arguments in the form of **categorical syllogisms**. A **syllogism** is a standard form of deductive argument in which a conclusion is inferred from two premises. A categorical syllogism specifically consists of three categorical propositions and contains exactly three terms. Each term keeps the same meaning throughout the argument, and each term appears in exactly two of the propositions. (Recall that any single categorical proposition contains only two terms: a subject and a predicate.)

</div>
<div className="col col--6 video-translation">

Diese Vorlesung setzt die frühere Grundlagenarbeit der kategorialen Logik endlich in die Tat um, indem sie Argumente in Form von **kategorialen Syllogismen** analysiert. Ein **Syllogismus** ist eine Standardform des deduktiven Arguments, in der eine Schlussfolgerung aus zwei Prämissen erschlossen wird. Ein kategorialer Syllogismus besteht speziell aus drei kategorialen Propositionen und enthält genau drei Terme. Jeder Term behält im ganzen Argument dieselbe Bedeutung, und jeder Term erscheint in genau zwei der Propositionen. (Erinnere dich, dass eine einzelne kategoriale Proposition nur zwei Terme enthält: ein Subjekt und ein Prädikat.)

</div>
</div>

<div className="row">
<div className="col col--6">

### A Worked Example

</div>
<div className="col col--6 video-translation">

<h3>Ein durchgerechnetes Beispiel</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Consider: Premise 1, "No logicians are people who embrace contradiction"; Premise 2, "Some teachers are people who embrace contradiction"; Conclusion, "Therefore, some teachers are not logicians." Here *logicians* appears in Premise 1 and the conclusion, *teachers* appears in Premise 2 and the conclusion, and *people who embrace contradiction* appears once in each premise. The goal is to determine whether such a syllogism is **valid**, meaning structured so that if the premises are true the conclusion could not possibly be false.

</div>
<div className="col col--6 video-translation">

Betrachte: Prämisse 1, „Keine Logiker sind Menschen, die den Widerspruch umarmen"; Prämisse 2, „Einige Lehrer sind Menschen, die den Widerspruch umarmen"; Schlussfolgerung, „Also sind einige Lehrer keine Logiker". Hier erscheint *Logiker* in Prämisse 1 und der Schlussfolgerung, *Lehrer* erscheint in Prämisse 2 und der Schlussfolgerung, und *Menschen, die den Widerspruch umarmen* erscheint einmal in jeder Prämisse. Das Ziel ist zu bestimmen, ob ein solcher Syllogismus **gültig** ist, also so aufgebaut, dass, wenn die Prämissen wahr sind, die Schlussfolgerung unmöglich falsch sein könnte.

</div>
</div>

<div className="row">
<div className="col col--6">

### Distribution

</div>
<div className="col col--6 video-translation">

<h3>Verteilung (Distribution)</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Before testing validity, we need the concept of **distribution**. Distribution is an attribute of a *term* (subject or predicate) describing its relationship to the entire class it denotes. A term is **distributed** when it refers to the whole class; otherwise it is **undistributed**. Note the contrast: terms have distribution, whereas propositions have *quantity* (universal or particular).

</div>
<div className="col col--6 video-translation">

Bevor wir die Gültigkeit prüfen, brauchen wir den Begriff der **Verteilung**. Verteilung ist ein Attribut eines *Terms* (Subjekt oder Prädikat), das seine Beziehung zur gesamten Klasse beschreibt, die er bezeichnet. Ein Term ist **verteilt**, wenn er sich auf die ganze Klasse bezieht; andernfalls ist er **unverteilt**. Beachte den Gegensatz: Terme haben Verteilung, während Propositionen *Quantität* haben (universell oder partikulär).

</div>
</div>

<div className="row">
<div className="col col--6">

The subject's distribution is easy to spot from the quantifier: it is distributed after *all* or *no*, and undistributed after *some*. The predicate gives no such clue, so it is easiest to memorize the pattern: **universals distribute their subjects, and negatives distribute their predicates**. Applied to the four proposition types:

</div>
<div className="col col--6 video-translation">

Die Verteilung des Subjekts ist leicht am Quantor zu erkennen: Es ist nach *alle* oder *kein* verteilt und nach *einige* unverteilt. Das Prädikat gibt keinen solchen Hinweis, daher ist es am einfachsten, sich das Muster einzuprägen: **Universelle verteilen ihre Subjekte, und verneinende verteilen ihre Prädikate**. Angewandt auf die vier Propositionstypen:

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

- **A (universell bejahend):** nur das Subjekt verteilt.
- **E (universell verneinend):** sowohl Subjekt als auch Prädikat verteilt.
- **I (partikulär bejahend):** nichts verteilt.
- **O (partikulär verneinend):** nur das Prädikat verteilt.

</div>
</div>

<div className="row">
<div className="col col--6">

### Major, Minor, and Middle Terms

</div>
<div className="col col--6 video-translation">

<h3>Ober-, Unter- und Mittelbegriff</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

A lone proposition has no major, minor, or middle term, but a syllogism does. The **major term** is the predicate of the conclusion, and the premise containing it is the **major premise**. The **minor term** is the subject of the conclusion, found in the **minor premise**. The remaining term, which appears in both premises but never in the conclusion, is the **middle term**. The middle term is structurally the most important: it links the two premises and makes inference to a conclusion possible.

</div>
<div className="col col--6 video-translation">

Eine einzelne Proposition hat keinen Ober-, Unter- oder Mittelbegriff, ein Syllogismus aber schon. Der **Oberbegriff** ist das Prädikat der Schlussfolgerung, und die Prämisse, die ihn enthält, ist die **Oberprämisse**. Der **Unterbegriff** ist das Subjekt der Schlussfolgerung, zu finden in der **Unterprämisse**. Der verbleibende Term, der in beiden Prämissen erscheint, aber nie in der Schlussfolgerung, ist der **Mittelbegriff**. Der Mittelbegriff ist strukturell der wichtigste: Er verbindet die beiden Prämissen und macht den Schluss auf eine Schlussfolgerung möglich.

</div>
</div>

<div className="row">
<div className="col col--6">

### The Four Rules of Validity

</div>
<div className="col col--6 video-translation">

<h3>Die vier Regeln der Gültigkeit</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

With these pieces in place, testing validity reduces to applying four rules.

</div>
<div className="col col--6 video-translation">

Wenn diese Teile vorhanden sind, reduziert sich die Gültigkeitsprüfung auf das Anwenden von vier Regeln.

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 1 - Three terms only.** A syllogism must contain exactly three terms. More than three commits the **fallacy of equivocation** (the four-term fallacy). Sometimes this is obvious nonsense, but it can hide. In "All heroes are demigods; Martin Luther King Jr. is a hero; therefore MLK is a demigod," *hero* is used equivocally: a mythical god-parent in Premise 1, a modern self-sacrificing person in Premise 2. That yields four terms, no genuine middle term, and so no real connection.

</div>
<div className="col col--6 video-translation">

**Regel 1 – Nur drei Terme.** Ein Syllogismus muss genau drei Terme enthalten. Mehr als drei begeht den **Fehlschluss der Äquivokation** (den Vier-Begriffe-Fehlschluss). Manchmal ist dies offensichtlicher Unsinn, aber er kann sich verbergen. In „Alle Helden sind Halbgötter; Martin Luther King Jr. ist ein Held; also ist MLK ein Halbgott" wird *Held* äquivok verwendet: ein mythischer Gottvater in Prämisse 1, eine moderne, sich aufopfernde Person in Prämisse 2. Das ergibt vier Terme, keinen echten Mittelbegriff und somit keine echte Verbindung.

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 2 - The middle term must be distributed at least once.** If it is not, there is no guarantee the major and minor terms connect. Violating this is the **fallacy of the undistributed (illicit) middle**. Example: "All Baptists are baptized; all Catholics are baptized; therefore all Catholics are Baptists." Both premises are A propositions, whose predicates (the middle term *baptized*) are undistributed, so the conclusion does not follow. The same hidden form drives arguments like "The Democratic Party supports health-care reform; socialists support health-care reform; therefore the Democratic Party is socialist."

</div>
<div className="col col--6 video-translation">

**Regel 2 – Der Mittelbegriff muss mindestens einmal verteilt sein.** Ist er es nicht, gibt es keine Garantie, dass Ober- und Unterbegriff sich verbinden. Dies zu verletzen ist der **Fehlschluss des unverteilten (unerlaubten) Mittelbegriffs**. Beispiel: „Alle Baptisten sind getauft; alle Katholiken sind getauft; also sind alle Katholiken Baptisten". Beide Prämissen sind A-Propositionen, deren Prädikate (der Mittelbegriff *getauft*) unverteilt sind, sodass die Schlussfolgerung nicht folgt. Dieselbe verborgene Form treibt Argumente wie „Die Demokratische Partei unterstützt die Gesundheitsreform; Sozialisten unterstützen die Gesundheitsreform; also ist die Demokratische Partei sozialistisch".

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 3 - Any term distributed in the conclusion must be distributed in the premises.** If a conclusion has no distributed terms, that is fine; the rule only constrains those that are. Violations produce the **fallacy of illicit major** (major term distributed in the conclusion but not the premise) or the **fallacy of illicit minor** (same for the minor term). You cannot infer all of something from only some of it. Example: "All dogs are mammals; no cats are dogs; therefore no cats are mammals." The conclusion is an E, distributing both terms. *Cats* is distributed in the minor premise (fine), but *mammals* is the predicate of an A major premise and is undistributed there: an **illicit major**.

</div>
<div className="col col--6 video-translation">

**Regel 3 – Jeder in der Schlussfolgerung verteilte Term muss in den Prämissen verteilt sein.** Wenn eine Schlussfolgerung keine verteilten Terme hat, ist das in Ordnung; die Regel schränkt nur die verteilten ein. Verletzungen erzeugen den **Fehlschluss des unerlaubten Oberbegriffs** (Oberbegriff in der Schlussfolgerung verteilt, aber nicht in der Prämisse) oder den **Fehlschluss des unerlaubten Unterbegriffs** (dasselbe für den Unterbegriff). Man kann nicht von nur einem Teil von etwas auf das Ganze schließen. Beispiel: „Alle Hunde sind Säugetiere; keine Katzen sind Hunde; also sind keine Katzen Säugetiere". Die Schlussfolgerung ist eine E, die beide Terme verteilt. *Katzen* ist in der Unterprämisse verteilt (in Ordnung), aber *Säugetiere* ist das Prädikat einer A-Oberprämisse und dort unverteilt: ein **unerlaubter Oberbegriff**.

</div>
</div>

<div className="row">
<div className="col col--6">

**Rule 4 - The number of negative premises must equal the number of negative claims in the conclusion.** Since the conclusion is a single proposition, this implies you cannot draw a valid conclusion from two negative premises, and you cannot get a negative conclusion from two affirmative premises. Example: "No war is meant to be fun; no government action is meant to be fun; therefore no war is a government action." Two negative premises, one negative conclusion (1 + 1 = 1) is invalid. Both terms are merely excluded from "things meant to be fun," so their relationship to each other remains unknown.

</div>
<div className="col col--6 video-translation">

**Regel 4 – Die Zahl der verneinenden Prämissen muss der Zahl der verneinenden Behauptungen in der Schlussfolgerung entsprechen.** Da die Schlussfolgerung eine einzelne Proposition ist, bedeutet dies, dass man aus zwei verneinenden Prämissen keine gültige Schlussfolgerung ziehen kann und aus zwei bejahenden Prämissen keine verneinende Schlussfolgerung erhält. Beispiel: „Kein Krieg ist zum Spaß gedacht; keine Regierungshandlung ist zum Spaß gedacht; also ist kein Krieg eine Regierungshandlung". Zwei verneinende Prämissen, eine verneinende Schlussfolgerung (1 + 1 = 1) ist ungültig. Beide Terme werden bloß aus den „zum Spaß gedachten Dingen" ausgeschlossen, sodass ihre Beziehung zueinander unbekannt bleibt.

</div>
</div>

<div className="row">
<div className="col col--6">

### A Translation Trap

</div>
<div className="col col--6 video-translation">

<h3>Eine Übersetzungsfalle</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

Finally, a deceptive case: "Peter loves Mary Jane; Harry loves Peter; therefore Harry loves Mary Jane." Treating the personal names as classes of one, it appears to pass all four rules, yet it sounds wrong. The problem is **translation**. Properly rendered, the terms are *Peter*, *Harry*, *person who loves Mary Jane*, and *person who loves Peter*: four terms, violating Rule 1. The lesson is that careful translation into standard form is essential before testing validity.

</div>
<div className="col col--6 video-translation">

Schließlich ein täuschender Fall: „Peter liebt Mary Jane; Harry liebt Peter; also liebt Harry Mary Jane". Behandelt man die Personennamen als Klassen von einem, scheint es alle vier Regeln zu bestehen, und doch klingt es falsch. Das Problem ist die **Übersetzung**. Richtig wiedergegeben, sind die Terme *Peter*, *Harry*, *Person, die Mary Jane liebt* und *Person, die Peter liebt*: vier Terme, was Regel 1 verletzt. Die Lektion ist, dass eine sorgfältige Übersetzung in die Standardform wesentlich ist, bevor man die Gültigkeit prüft.

</div>
</div>

<div className="row">
<div className="col col--6">

The video closes by noting that categorical propositions are not the only kind. The next installment shifts to **propositional logic**, beginning with the language of symbolization.

</div>
<div className="col col--6 video-translation">

Das Video schließt mit dem Hinweis, dass kategoriale Propositionen nicht die einzige Art sind. Die nächste Folge wechselt zur **Aussagenlogik** und beginnt mit der Sprache der Symbolisierung.

</div>
</div>
