---
title: "Formales vs. informelles Schließen"
sidebar_position: 70
description: "Die Unterschiede zwischen formalem und informellem logischen Schließen im kritischen Denken"
keywords:
  - formale Logik
  - informelle Logik
  - Schlussfolgerungen
  - natürliche Sprache
  - logische Struktur
last_update:
  date: 2026-01-28
  author: Immanuel Lupinus

completeness: 3/5
draft: false
image: /img/kd/bennycheung_logic_dallE-3.jpg
---

![Banner im Stil einer alten Pergamentzeichnung: Augen, ein Mikrochip und Schaltkreise als Symbole für Logik](/img/kd/bennycheung_logic_dallE-3.jpg)  
_Denken, symbolische Logik und Schaltkreise. Gemalt von DallE-3, einer KI._

<!-- # Formales vs. informelles Schließen -->

Manche meinen, alle guten Argumente bestünden im Wesentlichen aus formalen logischen Schlüssen oder Syllogismen. Aber wenn man genau hinsieht, dann merkt man schnell, dass Argumentieren nicht viel mit formalem logischem Schließen zu tun hat.

Logisches Schließen kann in zwei Gruppen eingeteilt werden: formales und informelles Schließen. Beide sind für das kritische Denken wichtig, haben aber unterschiedliche Anwendungsbereiche und Methoden.

## Beispiel für verschiedene Arten des Schließens

Hier nehmen wir uns ein sehr berühmtes Beispiel vor. Es ist der Syllogismus in der Form Barbara. Der Modus Barbara ist eine klassische Form des logischen Schlusses (Syllogismus) in der traditionellen aristotelischen Logik.[^modus-barbara] Barbara ist einfach eine Merkhilfe, die uns daran erinnert, dass dieser Syllogismus drei Urteile vom Typ A (allgemein bejahend) enthält.
Das heißt: Obersatz, Untersatz und Schlussfolgerung haben die Form "Alle A sind B".

<details>
  <summary>Aristotelische Syllogistik als Lehrsystem im Mittelalter</summary>

Diese Namen stammen nicht von Aristoteles selbst, sondern aus dem Mittelalter. Damals wurde die aristotelische Syllogistik zu einem Lehrsystem ausgebaut, das man auswendig lernen konnte, am einflussreichsten in den _Summulae logicales_ des Petrus Hispanus (13. Jahrhundert), dem meistbenutzten Logiklehrbuch Europas für rund drei Jahrhunderte.[^petrus-hispanus] Grundlage sind vier Urteilsformen, die mit den Vokalen **A**, **E**, **I** und **O** abgekürzt werden. Die Merkhilfe dafür sind die lateinischen Wörter _affirmo_ ("ich bejahe") für A und I sowie _nego_ ("ich verneine") für E und O.

| Code  | Form                 | Beispiel                               |
| ----- | -------------------- | -------------------------------------- |
| **A** | allgemein bejahend   | Alle Menschen sind sterblich           |
| **E** | allgemein verneinend | Kein Mensch ist unsterblich            |
| **I** | teilweise bejahend   | Einige Griechen sind Philosophen       |
| **O** | teilweise verneinend | Einige Griechen sind keine Philosophen |

Aus diesen Codes setzen sich die Merknamen der gültigen Schlussformen zusammen: Die Vokale eines Namens geben der Reihe nach Obersatz, Untersatz und Schlussfolgerung an. In B**a**rb**a**r**a** stecken dreimal A, also drei allgemein bejahende Urteile, in C**e**l**a**r**e**nt dagegen E, A, E. Die mittelalterlichen Merkverse ("Barbara, Celarent, Darii, Ferio …") waren damit eine Gedächtnisstütze für die 24 gültigen Modi, lange bevor es Formelschreibweisen wie $\forall x\,(M(x) \rightarrow S(x))$ gab.

</details>

### Barbara: In natürlicher Sprache

Wir können den Schluss in der natürlichen Sprache ausdrücken und sogar sagen, dass er uns intuitiv einleuchtet. Nur leider sind nicht alle Syllogismen so intuitiv.

<table>
<tbody>
<tr><td>**Prämisse 1**</td><td>Alle Menschen sind sterblich.</td></tr>
<tr><td>**Prämisse 2**</td><td>Alle Griechen sind Menschen.</td></tr>
<tr><td>**Schlussfolgerung**</td><td>Alle Griechen sind sterblich.</td></tr>
</tbody>
</table>

### Barbara als klassischer Syllogismus

Hier in der mittelalterlichen Form.

<table>
<tbody>
<tr><td>**Obersatz**</td><td>M a S</td></tr>
<tr><td>**Untersatz**</td><td>G a M</td></tr>
<tr><td>**Schlussfolgerung**</td><td>G a S</td></tr>
</tbody>
</table>

### Barbara: Formalisiert

mit $M$ = Mensch, $S$ = sterblich, $G$ = Grieche

<table>
<tbody>
<tr><td style={{width: '3em'}}>**P1**</td><td>$\forall x\,(M(x) \rightarrow S(x))$</td></tr>
<tr><td>**P2**</td><td>$\forall x\,(G(x) \rightarrow M(x))$</td></tr>
<tr><td>**K**</td><td>$\forall x\,(G(x) \rightarrow S(x))$</td></tr>
</tbody>
</table>

### Barbara als Venn-Diagramm

Viele einfache Beziehungen dieser Art kann man als Venn-Diagramme darstellen.

![Venn-Diagramm des Modus Barbara: drei gleich große Kreise M, G und S; rosa markiert sind die leeren Bereiche, M außerhalb von S und G außerhalb von M](/img/kd/syllogismus-barbara-venn.svg)  
_Rosa heißt hier: Hier ist niemand, das gibt es nicht._

Wie liest man das Diagramm?

Die drei Kreise teilen die Fläche in acht Zonen: jede Zone steht für eine Kombination der drei Eigenschaften. Die Mitte ist "Mensch und Grieche und sterblich", die Sichel links unten ist "Grieche, aber weder Mensch noch sterblich" und so weiter. Außerhalb aller Kreise liegt alles, was keine der drei Eigenschaften hat.

Rosa bedeutet: Diese Zone ist leer. Das ist der eigentliche Trick des Verfahrens. Ein Allsatz sagt nichts darüber, dass es etwas gibt, sondern nur, dass etwas nicht vorkommt. "Alle Menschen sind sterblich" heißt im Diagramm: Es gibt nichts, was Mensch und zugleich nicht sterblich ist, also wird die Fläche $M$ außerhalb von $S$ ausgestrichen. Ebenso für "Alle Griechen sind Menschen": $G$ außerhalb von $M$ wird ausgestrichen.

Und jetzt das Entscheidende: Man trägt nur die Prämissen ein, nie die Schlussfolgerung. Dann sieht man nach, ob sie schon von selbst dasteht. Die Frage lautet: Gibt es noch eine Zone, in der ein Grieche wohnen könnte, der nicht sterblich ist? Die beiden Ausstreichungen decken zusammen die ganze Fläche $G$ außerhalb von $S$ ab. Also nein, so einer kann nicht existieren. Genau das behauptet "Alle Griechen sind sterblich", und der Schluss ist damit gültig.

Ein ungültiger Syllogismus verrät sich daran, dass eine weiße Zone übrig bleibt, in die ein Gegenbeispiel passt. Für Einige-Sätze reicht Schraffieren übrigens nicht, da setzt man zusätzlich ein × in eine Zone, um zu sagen: Hier ist jemand.

<details>
  <summary>Sind Venn-Diagramme ein formelles oder ein informelles Mittel?</summary>

Formal, auch wenn es nicht danach aussieht. Was ein formales Verfahren ausmacht, ist nicht, dass Symbole in einer Zeile stehen, sondern dass die Regeln allein auf die Form zugreifen und mechanisch prüfbar sind. Genau das leistet das Venn-Verfahren: feste Notation (Kreise, Schraffur, ×), feste Eintragungsregeln, ein festes Ableseverfahren. Es ist sogar ein **Entscheidungsverfahren**, es prüft jeden klassischen Syllogismus in endlich vielen Schritten mit eindeutigem Ergebnis. Das kann die Prädikatenlogik in dieser Allgemeinheit nicht.

Lange galten Diagramme in der Logik dennoch als bloße Anschauungshilfe, als Krücke fürs Verständnis und nicht als Beweismittel. Sun-Joo Shin hat 1994 gezeigt, dass das ein Vorurteil war: Sie hat das Venn-System als Kalkül aufgeschrieben und dafür Korrektheit und Vollständigkeit bewiesen, also genau das, was man sonst von einem Logikkalkül verlangt.[^shin-diagramme]

Die eigentliche Einschränkung ist nicht die Strenge, sondern die **Reichweite**. Das Verfahren funktioniert nur für einstellige Eigenschaften und wenige Begriffe. Bei vier Begriffen braucht man schon Ellipsen statt Kreise, bei fünf wird das Bild unlesbar, und Relationen wie "jeder Mensch hat eine Mutter" oder verschachtelte Quantoren lassen sich gar nicht darstellen. Venn-Diagramme sind also ein vollwertiger formaler Apparat für ein sehr kleines Stück der Logik.

Nicht zu verwechseln mit dem [Euler-Diagramm](040-muster-gueltiger-argumente.md), das oben auf jener Seite abgebildet ist. Euler zeichnet die tatsächliche Lage, hier also einen Kreis im Kreis im Kreis. Venn zeichnet immer alle Überschneidungen und streicht die leeren aus. Deshalb kann das Venn-Diagramm auch sichtbar machen, wenn ein Schluss _nicht_ gilt: Dann bleibt eine Zone weiß, in der das Gegenbeispiel Platz hat.

</details>

## Formales Schließen

**Formales Schließen** basiert auf expliziten Regeln und Strukturen, die unabhängig vom Inhalt der Argumente sind. Es konzentriert sich auf die Form oder Struktur eines Arguments und verwendet oft symbolische Notation.

Merkmale des formalen Schließens:

- Verwendung formaler Systeme wie Prädikatenlogik oder Aussagenlogik
- Strenge Regeln für gültige Schlussfolgerungen
- Unabhängigkeit vom spezifischen Inhalt
- Präzision und Eindeutigkeit
- Möglichkeit der formalen Beweisführung

<details>
  <summary>**Herleitung im natürlichen Schließen (Gentzen)**</summary>

Können wir den Barbara Syllogismus auch irgendwie herleiten?  
Im [natürlichen Schließen](../030-grundlagen-der-logik/010-einfuehrung-logik.md#das-natürliche-logische-schließen-gentzen) gibt es keine Syllogismus-Regel. Der Schluss wird stattdessen Schritt für Schritt aus den Regeln für $\forall$ und $\rightarrow$ hergeleitet. $a$ steht dabei für einen beliebig herausgegriffenen Gegenstand.

| Zeile | Formel                               | Begründung                                                |
| ----- | ------------------------------------ | --------------------------------------------------------- |
| 1     | $\forall x\,(M(x) \rightarrow S(x))$ | Prämisse 1                                                |
| 2     | $\forall x\,(G(x) \rightarrow M(x))$ | Prämisse 2                                                |
| 3     | $G(a)$                               | **Annahme auf Probe**                                     |
| 4     | $G(a) \rightarrow M(a)$              | $\forall$-Beseitigung aus 2                               |
| 5     | $M(a)$                               | $\rightarrow$-Beseitigung (modus ponens) aus 3 und 4      |
| 6     | $M(a) \rightarrow S(a)$              | $\forall$-Beseitigung aus 1                               |
| 7     | $S(a)$                               | $\rightarrow$-Beseitigung aus 5 und 6                     |
| 8     | $G(a) \rightarrow S(a)$              | $\rightarrow$-Einführung, Annahme 3 wird wieder entlassen |
| 9     | $\forall x\,(G(x) \rightarrow S(x))$ | $\forall$-Einführung aus 8                                |

Zwei Schritte tragen die ganze Herleitung:

- **Zeile 3 bis 8, die Annahme auf Probe.** Um "wenn Grieche, dann sterblich" zu zeigen, nimmt man versuchsweise an, $a$ sei ein Grieche, leitet daraus die Sterblichkeit her und legt die Annahme danach wieder ab. Übrig bleibt der Wenn-dann-Satz, der nun ohne Annahme dasteht.
- **Zeile 9, die Verallgemeinerung.** Sie ist nur erlaubt, weil über $a$ nichts Besonderes vorausgesetzt wurde. Was für einen beliebig herausgegriffenen Gegenstand gilt, gilt für alle.

Genau so argumentieren wir auch im Alltag: "Nehmen wir einen beliebigen Griechen. Der ist ein Mensch, und Menschen sind sterblich. Also ist er sterblich. Da ich niemanden Bestimmten gemeint habe, gilt das für alle Griechen."

</details>

Dieses Argumentationsmuster ist unabhängig vom spezifischen Inhalt gültig. Es spielt keine Rolle, wofür M, G und S stehen &mdash; die Schlussfolgerung folgt notwendigerweise aus den Prämissen.

## Informelles Schließen

**Informelles Schließen** bezieht sich auf Argumentationen in natürlicher Sprache, die nicht vollständig formalisiert sind. Es berücksichtigt den Kontext, Hintergrundwissen und implizite Annahmen.

Merkmale des informellen Schließens:

- Verwendung natürlicher Sprache
- Berücksichtigung von Kontext und Hintergrundwissen
- Einbeziehung impliziter Prämissen
- Flexibilität und Anpassungsfähigkeit
- Anwendung in alltäglichen Diskussionen und Debatten

**Beispiel für informelles Schließen:**
"Der Rasen ist nass. Es muss in der Nacht geregnet haben."

Dieses Argument enthält implizite Annahmen (z.B. dass Regen die wahrscheinlichste Ursache für einen nassen Rasen ist) und basiert auf Alltagswissen und Erfahrung.

## Unterschiede und Anwendungsbereiche

Die Hauptunterschiede zwischen formalem und informellem Schließen sind:

1. **Präzision vs. Flexibilität**: Formales Schließen ist präziser, aber weniger flexibel; informelles Schließen ist flexibler, aber möglicherweise weniger präzise.

2. **Explizitheit vs. Implizitheit**: Formales Schließen macht alle Annahmen explizit; informelles Schließen kann implizite Annahmen enthalten.

3. **Anwendungsbereich**: Formales Schließen wird oft in Mathematik, formaler Logik und theoretischer Informatik verwendet; informelles Schließen ist in alltäglichen Diskussionen, Politik, Ethik und vielen anderen Bereichen vorherrschend.

Beide Arten des Schließens haben ihre Stärken und Schwächen:

- Formales Schließen bietet Präzision und Klarheit, kann aber in komplexen realen Situationen zu starr sein.
- Informelles Schließen ist flexibler und kontextbezogener, kann aber anfälliger für Fehlschlüsse und Mehrdeutigkeiten sein.

Für kritisches Denken ist es wichtig, beide Arten des Schließens zu verstehen und je nach Kontext angemessen einzusetzen.

[^modus-barbara]: Zu den Merkregeln der Syllogistik und den 24 gültigen Modi: [Modus Barbara (Wikipedia)](https://de.wikipedia.org/wiki/Modus_Barbara).

[^shin-diagramme]: Sun-Joo Shin: _The Logical Status of Diagrams_, Cambridge University Press 1994. Shin behandelt Venn-Diagramme als eigenständiges formales System mit Syntax und Semantik und beweist dessen Korrektheit und Vollständigkeit. Ein Überblick über die Debatte: [Diagrams (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/diagrams/) 🇬🇧.

[^petrus-hispanus]: Petrus Hispanus: _Summulae logicales_ (13. Jahrhundert). Von ihm stammen die Merkverse, die im Mittelalter und in der frühen Neuzeit an allen Universitäten gelernt wurden. Für Interessierte: [Petrus Hispanus (Wikipedia)](https://de.wikipedia.org/wiki/Petrus_Hispanus).

[Article en français](pathname:///fr/docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen) | [Article in English](pathname:///en/docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen)
