---
title: "21. A Priori Probability"
sidebar_position: 21
keywords:
  - a priori probability
  - probability calculations
  - conjunction rule
  - permutations and combinations
  - independent and dependent events
  - types of averages
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/gmf5pdW_3U8' />

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

Building on the previous discussion of mathematical certainty, this lecture turns to **probability**: the likelihood that something is the case, which always comes in degrees. Since only perfect inductions yield certainty and those are rare, we usually operate in the realm of probability. There are two kinds, and this video focuses almost entirely on the first.

</div>
<div className="col col--6 video-translation">

Aufbauend auf der vorigen Erörterung der mathematischen Gewissheit wendet sich diese Vorlesung der **Wahrscheinlichkeit** zu: der Wahrscheinlichkeit, dass etwas der Fall ist, die stets in Graden auftritt. Da nur vollkommene Induktionen Gewissheit liefern und diese selten sind, bewegen wir uns gewöhnlich im Bereich der Wahrscheinlichkeit. Es gibt zwei Arten, und dieses Video konzentriert sich fast ausschließlich auf die erste.

</div>
</div>

<div className="row">
<div className="col col--6">

### A Priori vs. A Posteriori Probability

</div>
<div className="col col--6 video-translation">

<h3>A-priori- vs. A-posteriori-Wahrscheinlichkeit</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**A priori probability** (Latin for "from what comes before") is purely mathematical, logical, and statistical. It is independent of events or experience and can be computed without observing anything in the world, for example the chance of winning a lottery you have never run. **A posteriori probability** (Latin for "from what comes after") is empirical, scientific, and experimental. It depends on accumulated observational data, for example the chance that a 20-year-old man lives to 75.

</div>
<div className="col col--6 video-translation">

**A-priori-Wahrscheinlichkeit** (lateinisch für „von dem, was vorher kommt") ist rein mathematisch, logisch und statistisch. Sie ist unabhängig von Ereignissen oder Erfahrung und lässt sich berechnen, ohne irgendetwas in der Welt zu beobachten, zum Beispiel die Chance, in einer Lotterie zu gewinnen, die du nie durchgeführt hast. **A-posteriori-Wahrscheinlichkeit** (lateinisch für „von dem, was nachher kommt") ist empirisch, wissenschaftlich und experimentell. Sie hängt von angesammelten Beobachtungsdaten ab, zum Beispiel der Chance, dass ein 20-jähriger Mann 75 wird.

</div>
</div>

<div className="row">
<div className="col col--6">

A natural question is why we speak of probability rather than certainty if the calculations are mathematical. We *can* have mathematical certainty about the calculations themselves and know an exact probability, but the result still only describes the chance that something occurs. Numbers have no causal power, and whether an event actually happens is influenced by factors beyond the math.

</div>
<div className="col col--6 video-translation">

Eine naheliegende Frage ist, warum wir von Wahrscheinlichkeit statt von Gewissheit sprechen, wenn die Berechnungen mathematisch sind. Wir *können* mathematische Gewissheit über die Berechnungen selbst haben und eine exakte Wahrscheinlichkeit kennen, aber das Ergebnis beschreibt trotzdem nur die Chance, dass etwas eintritt. Zahlen haben keine kausale Kraft, und ob ein Ereignis tatsächlich eintritt, wird von Faktoren jenseits der Mathematik beeinflusst.

</div>
</div>

<div className="row">
<div className="col col--6">

### Exclusive (Single) Events

</div>
<div className="col col--6 video-translation">

<h3>Ausschließliche (einzelne) Ereignisse</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

For an **exclusive event**, taken by itself and not combined with or dependent on any other, the formula is simple: divide the number of **target events** (T) that satisfy the criteria by the number of **possible outcomes** (P). So the probability of A equals T / P.

</div>
<div className="col col--6 video-translation">

Für ein **ausschließliches Ereignis**, für sich genommen und nicht mit einem anderen kombiniert oder von ihm abhängig, ist die Formel einfach: Teile die Anzahl der **Zielereignisse** (T), die die Kriterien erfüllen, durch die Anzahl der **möglichen Ausgänge** (P). Die Wahrscheinlichkeit von A ist also T / P.

</div>
</div>

<div className="row">
<div className="col col--6">

- Heads on a coin toss: 1 target out of 2 outcomes = 1/2 (50%).
- Rolling a six on a die: 1 out of 6.
- Drawing a particular card: 1 out of 52.

</div>
<div className="col col--6 video-translation">

- Kopf bei einem Münzwurf: 1 Ziel von 2 Ausgängen = 1/2 (50 %).
- Eine Sechs mit einem Würfel: 1 von 6.
- Eine bestimmte Karte ziehen: 1 von 52.

</div>
</div>

<div className="row">
<div className="col col--6">

### Independent Events

</div>
<div className="col col--6 video-translation">

<h3>Unabhängige Ereignisse</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**Independent events** are multiple events where one has no effect on another. To combine them, compute each event's odds separately and multiply, using the **restricted conjunction rule**: P(A and B) = P(A) × P(B).

</div>
<div className="col col--6 video-translation">

**Unabhängige Ereignisse** sind mehrere Ereignisse, bei denen keines eine Wirkung auf ein anderes hat. Um sie zu kombinieren, berechne die Chancen jedes Ereignisses einzeln und multipliziere, mit der **eingeschränkten Konjunktionsregel**: P(A und B) = P(A) × P(B).

</div>
</div>

<div className="row">
<div className="col col--6">

- Two coins both heads: 1/2 × 1/2 = 1/4.
- One heads and one tails: because two of the four combinations match the criterion, it reduces to a 2/2 chance on the first flip and 1/2 on the second = 1/2.
- Two sixes on dice: 1/6 × 1/6 = 1/36.
- A six and a four: two target events on the first roll, so 2/36 = 1/18.

</div>
<div className="col col--6 video-translation">

- Zwei Münzen beide Kopf: 1/2 × 1/2 = 1/4.
- Einmal Kopf und einmal Zahl: Da zwei der vier Kombinationen das Kriterium erfüllen, reduziert es sich auf eine 2/2-Chance beim ersten Wurf und 1/2 beim zweiten = 1/2.
- Zwei Sechsen mit Würfeln: 1/6 × 1/6 = 1/36.
- Eine Sechs und eine Vier: zwei Zielereignisse beim ersten Wurf, also 2/36 = 1/18.

</div>
</div>

<div className="row">
<div className="col col--6">

### Dependent Events

</div>
<div className="col col--6 video-translation">

<h3>Abhängige Ereignisse</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

**Dependent events** are connected so that each influences the next. Drawing cards without replacement is the classic case: the second draw has different odds because the deck has changed. The **general conjunction rule** handles both cases: P(A and B) = P(A) × P(B given A), where "B given A" is the probability of B occurring if A has occurred. For independent events, P(B given A) simply equals P(B), so this rule generalizes the restricted one.

</div>
<div className="col col--6 video-translation">

**Abhängige Ereignisse** sind so verbunden, dass jedes das nächste beeinflusst. Karten ohne Zurücklegen zu ziehen ist der klassische Fall: Der zweite Zug hat andere Chancen, weil sich das Deck verändert hat. Die **allgemeine Konjunktionsregel** deckt beide Fälle ab: P(A und B) = P(A) × P(B gegeben A), wobei „B gegeben A" die Wahrscheinlichkeit ist, dass B eintritt, wenn A eingetreten ist. Für unabhängige Ereignisse ist P(B gegeben A) einfach gleich P(B), sodass diese Regel die eingeschränkte verallgemeinert.

</div>
</div>

<div className="row">
<div className="col col--6">

Drawing two aces without replacement: P(A) = 4/52, P(B given A) = 3/51 (one fewer ace, one fewer card). Multiplying gives roughly 1 in 221.

</div>
<div className="col col--6 video-translation">

Zwei Asse ohne Zurücklegen ziehen: P(A) = 4/52, P(B gegeben A) = 3/51 (ein Ass weniger, eine Karte weniger). Das Multiplizieren ergibt ungefähr 1 zu 221.

</div>
</div>

<div className="row">
<div className="col col--6">

### Permutations and Combinations

</div>
<div className="col col--6 video-translation">

<h3>Permutationen und Kombinationen</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

To count how many arrangements are possible, the **simple permutation formula** uses the **factorial** (n!): multiply every whole number from 1 up to n.

</div>
<div className="col col--6 video-translation">

Um zu zählen, wie viele Anordnungen möglich sind, verwendet die **einfache Permutationsformel** die **Fakultät** (n!): Multipliziere jede ganze Zahl von 1 bis n.

</div>
</div>

<div className="row">
<div className="col col--6">

- Arrangements of three letters (ABC): 3! = 6.
- Five people in five chairs: 5! = 120.
- A 10-digit code using each digit once: 10! = 3,628,800.

</div>
<div className="col col--6 video-translation">

- Anordnungen von drei Buchstaben (ABC): 3! = 6.
- Fünf Personen auf fünf Stühlen: 5! = 120.
- Ein 10-stelliger Code, der jede Ziffer einmal verwendet: 10! = 3.628.800.

</div>
</div>

<div className="row">
<div className="col col--6">

When we want only a **subset** of r items from n, we use n! / (n − r)!. A three-number code from a 10-digit keypad with no repeats: 10! / 7! = 10 × 9 × 8 = 720.

</div>
<div className="col col--6 video-translation">

Wenn wir nur eine **Teilmenge** von r Elementen aus n wollen, verwenden wir n! / (n − r)!. Ein dreistelliger Zahlencode aus einem 10-Tasten-Feld ohne Wiederholungen: 10! / 7! = 10 × 9 × 8 = 720.

</div>
</div>

<div className="row">
<div className="col col--6">

Because real codes usually *allow repetition*, we need the **complex permutation formula**: raise the number of options per position to the power of the number of positions.

</div>
<div className="col col--6 video-translation">

Da echte Codes gewöhnlich *Wiederholung erlauben*, brauchen wir die **komplexe Permutationsformel**: Erhebe die Anzahl der Optionen pro Position in die Potenz der Anzahl der Positionen.

</div>
</div>

<div className="row">
<div className="col col--6">

- Three-letter combinations from ABC with repeats: 3³ = 27.
- A 10-digit code allowing repeats: 10¹⁰ = 10 billion.
- A safe with three 15-number dials: 15³ = 3,375.

</div>
<div className="col col--6 video-translation">

- Dreibuchstaben-Kombinationen aus ABC mit Wiederholungen: 3³ = 27.
- Ein 10-stelliger Code mit erlaubter Wiederholung: 10¹⁰ = 10 Milliarden.
- Ein Safe mit drei 15-Zahlen-Rädern: 15³ = 3.375.

</div>
</div>

<div className="row">
<div className="col col--6">

Notice that guessing the correct three-letter combination returns us to the basic rule: for each position there is 1 target out of 3 options, so 1/3 × 1/3 × 1/3 = 1/27.

</div>
<div className="col col--6 video-translation">

Beachte, dass das Erraten der richtigen Dreibuchstaben-Kombination uns zur Grundregel zurückführt: Für jede Position gibt es 1 Ziel von 3 Optionen, also 1/3 × 1/3 × 1/3 = 1/27.

</div>
</div>

<div className="row">
<div className="col col--6">

### Back to A Posteriori Probability and Averages

</div>
<div className="col col--6 video-translation">

<h3>Zurück zur A-posteriori-Wahrscheinlichkeit und zu Mittelwerten</h3>

</div>
</div>

<div className="row">
<div className="col col--6">

The key contrast is that a priori probability can be calculated exactly *before* any event, whereas **a posteriori probability** cannot be calculated until *after* events and observations. This is why it is tied to the **scientific method**, which provides guidelines for forming and testing hypotheses, the topic of the next video. Examples include presidential approval polls, which must actually be taken, and computing an **average**, which requires collected data such as test scores.

</div>
<div className="col col--6 video-translation">

Der entscheidende Gegensatz ist, dass die A-priori-Wahrscheinlichkeit *vor* jedem Ereignis exakt berechnet werden kann, während die **A-posteriori-Wahrscheinlichkeit** erst *nach* Ereignissen und Beobachtungen berechnet werden kann. Deshalb ist sie an die **wissenschaftliche Methode** gebunden, die Richtlinien für das Bilden und Testen von Hypothesen liefert, das Thema des nächsten Videos. Beispiele sind Zustimmungsumfragen zu Präsidenten, die tatsächlich durchgeführt werden müssen, und die Berechnung eines **Mittelwerts**, die gesammelte Daten wie Testergebnisse erfordert.

</div>
</div>

<div className="row">
<div className="col col--6">

Crucially, "average" is **ambiguous**. There are three types:

</div>
<div className="col col--6 video-translation">

Entscheidend ist, dass „Durchschnitt" **mehrdeutig** ist. Es gibt drei Typen:

</div>
</div>

<div className="row">
<div className="col col--6">

- **Mean**: the sum of values divided by their count.
- **Median**: the middle value when data is ordered.
- **Mode**: the value occurring most frequently.

</div>
<div className="col col--6 video-translation">

- **Arithmetisches Mittel (Mean)**: die Summe der Werte geteilt durch ihre Anzahl.
- **Median**: der mittlere Wert, wenn die Daten geordnet sind.
- **Modus**: der am häufigsten vorkommende Wert.

</div>
</div>

<div className="row">
<div className="col col--6">

For a small firm's salaries, the mean might be \$65,000, the median \$45,000, and the mode \$30,000, where nearly half the employees fall. The chosen average can dramatically change an argument about income, taxes, life expectancy, or global temperatures. The closing warning: we cannot evaluate information critically when terms are imprecise or when we ignore distinctions like the kinds of average, echoing earlier problems of **vagueness and ambiguity**.

</div>
<div className="col col--6 video-translation">

Bei den Gehältern einer kleinen Firma könnte das arithmetische Mittel \$65.000 betragen, der Median \$45.000 und der Modus \$30.000, wo fast die Hälfte der Angestellten liegt. Der gewählte Durchschnitt kann ein Argument über Einkommen, Steuern, Lebenserwartung oder globale Temperaturen dramatisch verändern. Die abschließende Warnung: Wir können Informationen nicht kritisch bewerten, wenn Begriffe ungenau sind oder wenn wir Unterscheidungen wie die Arten des Durchschnitts ignorieren, ein Widerhall der früheren Probleme von **Vagheit und Mehrdeutigkeit**.

</div>
</div>
