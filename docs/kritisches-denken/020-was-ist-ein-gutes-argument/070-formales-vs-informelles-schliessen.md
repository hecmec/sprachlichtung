---
title: "Formales vs. informelles Schließen"
sidebar_position: 7
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

Manche meinen, alle guten Argumente bestünden im wesentlichen aus formalen logischen Schlüssen oder Syllogismen. Aber wenn man genau hinsieht, dann merkt man schnell, dass Argumentieren nicht viel mit formalem logischen Schliessen zu tun hat.

Logisches Schließen kann in zwei Gruppen eingeteilt werden: formales und informelles Schließen. Beide sind für das kritische Denken wichtig, haben aber unterschiedliche Anwendungsbereiche und Methoden.

## Formales Schließen

**Formales Schließen** basiert auf expliziten Regeln und Strukturen, die unabhängig vom Inhalt der Argumente sind. Es konzentriert sich auf die Form oder Struktur eines Arguments und verwendet oft symbolische Notation.

Merkmale des formalen Schließens:

- Verwendung formaler Systeme wie Prädikatenlogik oder Aussagenlogik
- Strenge Regeln für gültige Schlussfolgerungen
- Unabhängigkeit vom spezifischen Inhalt
- Präzision und Eindeutigkeit
- Möglichkeit der formalen Beweisführung

### Beispiel für formales Schließen (Syllogismus)

<Columns>
<Column>

**In natürlicher Sprache**

<table>
<tbody>
<tr><td>**Prämisse 1**</td><td>Alle Menschen sind sterblich.</td></tr>
<tr><td>**Prämisse 2**</td><td>Alle Griechen sind Menschen.</td></tr>
<tr><td>**Schlussfolgerung**</td><td>Alle Griechen sind sterblich.</td></tr>
</tbody>
</table>

</Column>
<Column>

**Formalisiert**

mit $M$ = Mensch, $S$ = sterblich, $G$ = Grieche

<table>
<tbody>
<tr><td style={{width: '3em'}}>**P1**</td><td>$\forall x\,(M(x) \rightarrow S(x))$</td></tr>
<tr><td>**P2**</td><td>$\forall x\,(G(x) \rightarrow M(x))$</td></tr>
<tr><td>**K**</td><td>$\forall x\,(G(x) \rightarrow S(x))$</td></tr>
</tbody>
</table>

</Column>
</Columns>

<Columns>
<Column>

**Klassischer Syllogismus (Modus Barbara):**

<table>
<tbody>
<tr><td>**Obersatz**</td><td>M a S</td></tr>
<tr><td>**Untersatz**</td><td>G a M</td></tr>
<tr><td>**Schlussfolgerung**</td><td>G a S</td></tr>
</tbody>
</table>

</Column>
<Column>

**Venn-Diagramm**

![Venn-Diagramm des Modus Barbara: drei gleich große Kreise M, G und S; rosa markiert sind die leeren Bereiche, M außerhalb von S und G außerhalb von M](/img/kd/syllogismus-barbara-venn.svg)  
_Rosa heisst hier: niemand hier, gibt es nicht. Alle Mensch sind Sterblich wird so zu "Die Zone unsterbliche Menschen ist leer"._

</Column>
</Columns>

Dieses Argumentationsmuster ist unabhängig vom spezifischen Inhalt gültig. Es spielt keine Rolle, wofür A, B und C stehen &mdash; die Schlussfolgerung folgt notwendigerweise aus den Prämissen.

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

[Article en français](pathname:///fr/docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen) | [Article in English](pathname:///en/docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen)
