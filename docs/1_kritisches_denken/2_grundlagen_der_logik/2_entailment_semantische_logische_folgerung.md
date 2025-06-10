---
title: Semantische Folgerung (Entailment)
sidebar_label: "Semantische Folgerung"
sidebar_position: 3
---

**Semantische Folgerung** oder Entailment ist ein fundamentales Konzept in der Logik. Es beschreibt eine Beziehung zwischen Aussagen, bei der eine Aussage (oder eine Gruppe von Aussagen) eine andere Aussage notwendigerweise impliziert.

:::tip[Beispiel]

"**Max ist ein Hund.**" daraus folgt semantisch "**Max ist ein Tier.**"

:::

Formal ausgedrückt:  
   __"Aus den Aussagen A, B, C ... folgt eine Schlussfolgerung S logisch"__  
heisst so viel wie:  
__"Es ist unmöglich, dass A, B, C wahr sind und S falsch ist."__ 

Mit anderen Worten: 
__"Wenn A, B, C wahr sind, dann muss auch S wahr sein."__

Die semantische Folgerung hat eine Schwester: die **syntaktische Folgerung**, die sich auf die **Ableitbarkeit** von Aussagen in einem formalen System bezieht. 

Während syntaktische Folgerung sich auf die Regeln der Ableitung konzentriert, befasst sich semantische Folgerung mit der **Bedeutung und Wahrheit** von Aussagen.

## Beispiele für semantische Folgerung

Das hört sich alles sehr theoretisch an, also ein paar Beispiele.

### Folgerungen aus der Bedeutung von Worten (semantisch)

- Hunde sind Tiere und Jungesellen sind nicht verheiratet.

Das ist wahr, weil wir die Sprache so benutzen. 
Von solchen Sätzen, die aufgrund ihrer Bedeutung wahr sind, sagt man oft:  
sie sind **analytisch wahr**. 


:::tip[Beispiel]
"__Tom ist Junggeselle.__" daraus folgt "__Tom ist nicht verheiratet."  
:::
Wenn es wahr ist, dass Tom ein Junggeselle ist, dann muss es auch wahr sein, dass Tom unverheiratet ist.


- Wenn etwas rot ist, dann ist es farbig.

:::tip[Beispiel]
"__Der Würfel ist rot.__" daraus folgt "__Der Würfel ist farbig.__"
:::

Wenn es wahr ist, dass der Würfel rot ist, muss es auch wahr sein, dass er farbig ist.

- Wir können semantische Folgerungen mit komplizierteren Sätzen machen.

:::tip[Beispiel]
"__Alle Menschen sind sterblich.__" und  
"__Sokrates ist ein Mensch.__" daraus folgt  
"__Sokrates ist sterblich.__"
:::

Wenn beide Prämissen wahr sind, muss die Schlussfolgerung ebenfalls wahr sein.

Das folgt aus unseren Sprachregeln: wie wir "alle" und "Menschen" und "sterblich" benutzen.



## Semantische Folgerung vs. Implikation

Wir müssen semantische Folgerung nicht nur von formaler Ableitbarkeit unterscheiden, sondern auch von der **materialen Implikation** (das ist ein schlaues Wort für den "Wenn-Also-Dann"-Operator in der formalen Logik)  unterscheiden:

- **Folgerung** (A ⊨ B) ist eine semantische Beziehung: Es geht um die notwendige Wahrheitserhaltung von A zu B.
- **Implikation** (A → B) ist ein logischer Operator: "Wenn A, dann B" kann wahr sein, auch wenn zwischen A und B kein inhaltlicher Zusammenhang besteht.

**Beispiel für Implikation ohne Entailment:**
"Wenn Paris die Hauptstadt von Italien ist, dann ist 2+2=4."

Diese Implikation ist formal wahr (da der Vordersatz falsch ist), aber es besteht kein Entailment, da kein inhaltlicher Zusammenhang zwischen den Aussagen existiert.

## Symbolisch

Wir können Semantische Folgerung auch symbolisch darstellen.
Wenn wir eine Menge von Prämissen Γ und eine Konklusion φ haben:

Γ ⊨ φ
heißt: Aus den Aussagen in Γ folgt φ logisch, d.h. in jedem Modell, in dem alle Aussagen in Γ wahr sind, ist auch φ wahr.

## Bedeutung von Entailment im kritischen Denken

Das Verständnis von Entailment ist entscheidend für das kritische Denken, da es uns hilft:

- Gültige von ungültigen Schlussfolgerungen zu unterscheiden
- Die Semanitschen Konsequenzen unserer Überzeugungen zu erkennen
- Implizite Annahmen in Argumenten aufzudecken
- Die Stärke Semanitscher Verbindungen zwischen Aussagen zu bewerten


## Quellen

- https://de.wikipedia.org/wiki/Ableitung_(Logik)

- https://de.wikipedia.org/wiki/Semantische_Folgerung
