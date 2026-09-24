---
title: Einführung in die Logik
sidebar_position: 10
description: "Eine grundlegende Einführung in die Logik als Fundament des kritischen Denkens und Argumentierens."
keywords:
  - Logik
  - kritisches Denken
  - Argumentation
  - Denkgrundlagen
  - rationales Denken
last_update:
  date: 2026-09-23
  author: Immanuel Lupinus

completeness: 3/5
draft: false
---

Die Logik ist ein wichtiges Fundament des kritischen Denkens. Um Argumente analysieren, bewerten und konstruieren zu können, müssen wir die grundlegenden Bausteine der Logik verstehen. In diesem Kapitel lernen wir die wichtigsten logischen Elemente kennen, die uns helfen, klarer zu denken und bessere Argumente zu formulieren.

Die Logik gehört zum **formalen Schließen**: Sie interessiert sich nicht dafür, _worüber_ wir reden, sondern nur dafür, _wie_ die Aussagen zusammenhängen (siehe [Formales vs. informelles Schließen](../020-was-ist-ein-gutes-argument/070-formales-vs-informelles-schliessen.md)).

:::info Die Grundidee

Wenn wir mit **wahren Annahmen (Prämissen)** anfangen und dann nur **gültige logische Regeln** anwenden, kommen wir immer zu **wahren Schlussfolgerungen**. Auf diesem Weg können wir uns nicht verirren.

:::

Das ist ein starkes Versprechen, aber es hat einen Preis. Die Logik garantiert nur den _Transport_ der Wahrheit von den Prämissen zur Konklusion, nicht die Wahrheit der Prämissen selbst. Wer von falschen Annahmen ausgeht, kommt mit tadellosen Regeln zu falschen Ergebnissen

Zum Beispiel: "Alle Vögel können fliegen, Pinguine sind Vögel, also können Pinguine fliegen". Das ist logisch einwandfrei und trotzdem falsch. Die Logik ersetzt also nicht die Prüfung der Fakten, sie sorgt dafür, dass wir beim Weiterdenken nichts hinzuerfinden.

## Kurzgeschichte der Logik in Europa

### Antike: Aristoteles und die Stoiker

Die grundlegenden Ideen finden wir schon bei **Aristoteles**. In seinen logischen Schriften, später _Organon_ (Werkzeug) genannt, untersucht er als Erster systematisch, welche Schlussformen allein aufgrund ihrer Form gültig sind, und begründet damit die Syllogistik.[^aristoteles-organon]

Die **Stoiker**, vor allem Chrysipp, entwickelten daneben eine zweite Tradition: Sie untersuchten nicht Begriffe wie "alle Menschen", sondern ganze Aussagen und ihre Verknüpfung mit "wenn, dann", "und", "oder".[^stoiker] Damit nahmen sie vorweg, was wir heute Aussagenlogik nennen. Beide Stränge zusammen bilden den antiken Kern, von dem die europäische Logik über zwei Jahrtausende gezehrt hat.

### Mittelalter

Im Mittelalter war Logik kein Nebenfach, sondern Teil des Grundstudiums, und sie wurde erheblich verfeinert. **Petrus Abaelardus** arbeitete an der Bedeutung von Aussagen, **Wilhelm von Ockham** und **Johannes Buridan** entwickelten die Lehre von der _Supposition_, also davon, wofür ein Wort in einem Satz jeweils steht.[^mittelalter] Sie untersuchten auch die _Insolubilia_, die unlösbaren Sätze, zu denen der Lügner-Satz "Dieser Satz ist falsch" gehört, und damit Probleme, die in der modernen Logik wiederkehren. Buridan ist heute noch durch ein Gedankenexperiment bekannt, das seinen Namen trägt.

<details>
  <summary>**Beispiel: Buridans Esel**</summary>

Ein Esel steht genau in der Mitte zwischen zwei gleich großen, gleich guten Heuhaufen. Da nichts für den einen und gegen den anderen spricht, findet er keinen Grund, sich zu entscheiden, und verhungert zwischen beiden.

Die Pointe: Wer ausschließlich nach Gründen handelt, ist bei völliger Gleichheit der Gründe handlungsunfähig. Manchmal müssen wir wählen, ohne dass ein Grund den Ausschlag gibt.

</details>

### Renaissance und Neuzeit

In Renaissance und Neuzeit wurde die Logik hochgehalten, brachte aber lange wenig Neues hervor. Die einflussreiche _Logik von Port-Royal_ (1662) war eher ein Lehrbuch des vernünftigen Denkens als ein formales System.[^port-royal] Eine wichtige Ausnahme ist **Gottfried Wilhelm Leibniz**: Er träumte von einer universellen Zeichensprache (_characteristica universalis_) und einem Kalkül des Denkens (_calculus ratiocinator_), mit dem sich Streitfragen berechnen ließen, sodass zwei Uneinige sagen könnten: "Lasst uns rechnen."[^leibniz] Seine Schriften dazu blieben größtenteils unveröffentlicht und wurden erst wiederentdeckt, als die moderne Logik längst begonnen hatte.

<details>
  <summary>**Leibniz: Identität und Ersetzbarkeit**</summary>

Leibniz hat als Erster scharf gefasst, was **Identität** bedeutet: Zwei Ausdrücke bezeichnen dasselbe, wenn sie in jedem Satz füreinander eingesetzt werden können, ohne dass sich der Wahrheitswert ändert, _salva veritate_ ("unter Bewahrung der Wahrheit").[^salva-veritate]

"Mark Twain" und "Samuel Clemens" sind in diesem Sinn identisch: Jeder wahre Satz über den einen bleibt wahr, wenn man den anderen Namen einsetzt.

Die Regel hat eine praktische Kehrseite, denn sie versagt in Sätzen über Meinungen: "Anna glaubt, dass Mark Twain Bücher schrieb" kann wahr sein, während "Anna glaubt, dass Samuel Clemens Bücher schrieb" falsch ist, wenn Anna den bürgerlichen Namen nicht kennt. An dieser Stelle beginnt eine Debatte, die über Frege bis in die heutige Sprachphilosophie reicht.

</details>

<details>
  <summary>**Leibniz: die Rechenmaschine**</summary>

Leibniz baute ab 1672 eine Maschine, die alle vier Grundrechenarten beherrschte, und erfand dafür die **Staffelwalze**, ein Bauteil, das noch bis ins 20. Jahrhundert in mechanischen Rechnern steckte.[^rechenmaschine]

Sein Motiv war handfest: "Es ist unwürdig, die Zeit von hervorragenden Leuten mit knechtischen Rechenarbeiten zu verschwenden."

1703 beschrieb er zudem das **Binärsystem**, in dem jede Zahl allein aus 0 und 1 besteht, und ahnte, dass sich damit besonders einfach rechnen ließe. Zwischen dieser Idee und dem ersten Computer liegen zwar 240 Jahre, aber die Richtung stimmte: Denken in Regeln, die eine Maschine ausführen kann.

</details>

### Moderne Logik

Die moderne Logik beginnt mit **George Boole**, der 1847 zeigte, dass sich logische Verknüpfungen wie eine Algebra rechnen lassen.[^boole] Den entscheidenden Schritt macht **Gottlob Frege** 1879 mit der _Begriffsschrift_: Er führt Quantoren ("für alle", "es gibt") und Variablen ein und kann damit erstmals auch mehrstellige Beziehungen und verschachtelte Aussagen erfassen, an denen die Syllogistik scheiterte.[^frege] Seitdem ging es schnell: **Kurt Gödel** bewies 1930 die Vollständigkeit der Prädikatenlogik und 1931 seine Unvollständigkeitssätze, **Gerhard Gentzen** entwickelte 1934 das natürliche Schließen, **Alfred Tarski** klärte den Wahrheitsbegriff formaler Sprachen. Diese Logik ist heute die Grundlage von Mathematik, Informatik und Linguistik: Jede Programmiersprache und jede Datenbankabfrage lebt von ihr.

## Arten der Logik

### Aussagenlogik

Die **Aussagenlogik** ist die einfachste Stufe. Sie behandelt ganze Aussagen als unteilbare Bausteine ($p$, $q$, $r$) und untersucht nur, wie diese mit "nicht", "und", "oder" und "wenn, dann" verknüpft sind. Der Wahrheitswert des Ganzen hängt dann allein von den Wahrheitswerten der Teile ab: "Es regnet **und** die Straße ist nass" ist genau dann wahr, wenn beide Teile wahr sind. Das klingt trivial, deckt aber viele Alltagsfehler auf, etwa die Verwechslung von "wenn, dann" mit "nur wenn" (siehe [Notwendige versus hinreichende Bedingungen](050-notwendige-versus-hinreichende-bedingungen.md)).

<details>
  <summary>**Die Verknüpfungen und die De-Morgan-Gesetze**</summary>

| Verknüpfung | Schreibweise      | wahr, wenn                        |
| ----------- | ----------------- | --------------------------------- |
| Negation    | $\neg p$          | $p$ falsch ist                    |
| Konjunktion | $p \wedge q$      | beide wahr sind                   |
| Disjunktion | $p \vee q$        | mindestens eines wahr ist         |
| Implikation | $p \rightarrow q$ | nicht $p$ wahr und $q$ falsch ist |

Aus diesen Bausteinen ergeben sich Gesetze, die man im Alltag ständig braucht. Die bekanntesten sind die **De-Morgan-Gesetze**:[^demorgan] Die Verneinung einer Konjunktion ist gleichwertig mit der Disjunktion der Verneinungen, und umgekehrt.

$$
\neg(p \wedge q) \leftrightarrow (\neg p \vee \neg q) \qquad\qquad \neg(p \vee q) \leftrightarrow (\neg p \wedge \neg q)
$$

In Worten: "Es stimmt nicht, dass ich Zeit **und** Geld habe" heißt "Ich habe keine Zeit **oder** kein Geld". Und "Ich mag weder Kaffee **noch** Tee" heißt "Ich mag keinen Kaffee **und** keinen Tee". Wer das verwechselt, widerlegt oft das Falsche: Um "Zeit und Geld" zu bestreiten, genügt es, eines von beiden zu bestreiten.

</details>

### Prädikatenlogik erster und zweiter Stufe

Die **Prädikatenlogik** schaut in die Aussagen hinein. Sie unterscheidet Gegenstände ("Sokrates"), Eigenschaften und Beziehungen ("ist sterblich", "ist älter als") und erlaubt es, mit Quantoren über Gegenstände zu sprechen: $\forall x$ ("für alle x") und $\exists x$ ("es gibt ein x"). "Jeder Mensch hat eine Mutter" wird so zu $\forall x\,(M(x) \rightarrow \exists y\,(\text{Mutter}(y,x)))$, und man sieht sofort, dass die Reihenfolge der Quantoren zählt: "Es gibt eine Mutter aller Menschen" wäre etwas ganz anderes. In der **zweiten Stufe** darf man zusätzlich über _Eigenschaften_ selbst quantifizieren, etwa: "Für jede Eigenschaft gilt: Entweder ein Gegenstand hat sie oder er hat sie nicht." Diese Ausdrucksstärke ist verlockend, hat aber ihren Preis, denn die Logik zweiter Stufe besitzt kein vollständiges Beweisverfahren mehr. 😢

<details>
  <summary>**Beispiele: Formalisierung in erster und zweiter Stufe**</summary>

Mit $M(x)$ = "$x$ ist ein Mensch", $\text{Mutter}(y,x)$ = "$y$ ist die Mutter von $x$" und $\text{rasiert}(x,y)$ = "$x$ rasiert $y$":

**Erste Stufe: Quantoren über Gegenstände**

| In natürlicher Sprache                     | Formalisiert                                                  |
| ------------------------------------------ | ------------------------------------------------------------- |
| Es gibt ein $x$                            | $\exists x$                                                   |
| Für alle $x$                               | $\forall x$                                                   |
| Es gibt einen Menschen                     | $\exists x\,M(x)$                                             |
| Jeder Mensch hat eine Mutter               | $\forall x\,(M(x) \rightarrow \exists y\,\text{Mutter}(y,x))$ |
| Es gibt eine Mutter aller Menschen         | $\exists y\,\forall x\,(M(x) \rightarrow \text{Mutter}(y,x))$ |
| Es gibt Menschen, die sich selbst rasieren | $\exists x\,(M(x) \wedge \text{rasiert}(x,x))$                |

Die beiden mittleren Zeilen unterscheiden sich nur in der Reihenfolge der Quantoren, sagen aber etwas völlig Verschiedenes: einmal hat jeder Mensch _irgendeine_ Mutter, einmal hätten alle Menschen _dieselbe_ Mutter.

**Zweite Stufe: Quantoren über Eigenschaften und Relationen**

| In natürlicher Sprache                                                  | Formalisiert                                                   |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| Für jede Eigenschaft gilt: Ein Gegenstand hat sie oder er hat sie nicht | $\forall P\,\forall x\,(P(x) \vee \neg P(x))$                  |
| Einige Relationen sind symmetrisch                                      | $\exists R\,\forall x\,\forall y\,(R(x,y) \rightarrow R(y,x))$ |

Man erkennt die zweite Stufe daran, dass die Quantoren nicht mehr über $x$ und $y$ laufen, sondern über $P$ und $R$, also über die Eigenschaften und Beziehungen selbst.

</details>

### Das natürliche logische Schließen (Gentzen)

**Gerhard Gentzen** stellte 1934 fest, dass Mathematiker in der Praxis anders argumentieren als die künstlichen Axiomensysteme der Logik es nahelegen, und entwickelte das **natürliche Schließen**.[^gentzen] Statt weniger Axiome gibt es hier für jede Verknüpfung eine Einführungs- und eine Beseitigungsregel: Wer "A und B" zeigen will, zeigt A und zeigt B; wer "A und B" schon hat, darf A herausziehen. Besonders alltagsnah ist die Annahme auf Probe: Um "wenn A, dann B" zu beweisen, nimmt man A versuchsweise an, leitet B her und legt die Annahme danach wieder ab. Genau so argumentieren wir auch im Gespräch: "Nehmen wir einmal an, der Zug fällt aus. Dann kämen wir zu spät. Also müssen wir für diesen Fall einen Plan B haben."

### Modale Logiken

**Modale Logiken** untersuchen nicht nur, ob etwas wahr ist, sondern _in welchem Modus_ es wahr ist:

- **notwendig**: es könnte gar nicht anders sein (zum Beispiel "2 + 2 = 4")
- **möglich**: es könnte so sein (zum Beispiel "Es regnet morgen")
- **kontingent**: es ist so, könnte aber auch anders sein (zum Beispiel "Bern ist die Hauptstadt der Schweiz")

Gedeutet werden diese Modi meist über **mögliche Welten**: Notwendig ist, was in allen erreichbaren Welten gilt, möglich, was in mindestens einer gilt.[^kripke] Dasselbe Muster lässt sich auf andere Bereiche übertragen, etwa auf Pflichten ("geboten", "erlaubt", "verboten") oder auf Wissen ("sie weiß, dass", "sie hält für möglich, dass"). Für das kritische Denken ist das nützlich, weil viele Streitfragen genau hier entschieden werden: Wer "Das ist unmöglich" sagt, meint oft nur "Das ist sehr unwahrscheinlich".

### Nichtklassische Logiken

Die klassische Logik trifft zwei starke Annahmen:

:::warning[Annahme - Zweiwertigkeit]
Jede Aussage ist wahr oder falsch
:::

:::warning[Annahme - Widerspruch]
Aus einem Widerspruch folgt beliebiges
:::

Beide Annahmen wurden bestritten.

Die **intuitionistische Logik** verzichtet auf den Satz vom ausgeschlossenen Dritten und akzeptiert nur, was konstruktiv gezeigt werden kann, was sie zur Logik der Informatik gemacht hat.

**Mehrwertige** und **Fuzzy-Logiken** lassen Zwischenstufen bei den Wahrheitswerten zu, was bei vagen Begriffen hilft: Ab welchem Haar genau hat jemand eine Glatze?

**Parakonsistente Logiken** schließlich erlauben es, mit Widersprüchen zu arbeiten, ohne dass sofort alles beweisbar wird, was etwa in großen Datenbanken mit widersprüchlichen Einträgen praktisch ist.

## Das Problem der Anwendbarkeit der Logik

### Formalisierung der Prämissen

Der schwierigste Schritt liegt vor der Logik: Aus einem Satz der Umgangssprache muss eine formale Prämisse werden. "Jeder liebt jemanden" hat zwei Lesarten, die sich formal klar unterscheiden, sprachlich aber nicht. "Die meisten Studierenden bestehen die Prüfung" lässt sich in der klassischen Prädikatenlogik gar nicht ausdrücken, weil "die meisten" kein Quantor der ersten Stufe ist. Wer formalisiert, trifft also inhaltliche Entscheidungen, und genau dort, nicht im Kalkül, entstehen die meisten Fehler.

### Formalisierung in der Physik und anderen Naturwissenschaften

In den Naturwissenschaften funktioniert die Formalisierung erstaunlich gut, allerdings meist über die Mathematik und nicht über die Logik im engeren Sinn. Begriffe wie Masse, Ladung oder Temperatur sind durch Messvorschriften scharf gefasst, und Theorien sagen präzise Werte voraus, die sich prüfen lassen. Der Physiker Eugene Wigner sprach deshalb von der "unverschämten Wirksamkeit der Mathematik in den Naturwissenschaften".[^wigner] Aber auch hier gilt: Das Modell ist nicht die Welt. Die Ableitung ist nur so gut wie die Annahmen über Reibung, Störgrößen und Randbedingungen, die man vorher hineingesteckt hat.

### Kann man, will man Sozialwissenschaften formalisieren?

In den Sozialwissenschaften sind die Begriffe unschärfer: Was genau ist "Vertrauen", "Klasse" oder "Gerechtigkeit"? Formalisierung ist trotzdem verbreitet, etwa in der Spieltheorie oder in ökonomischen Modellen, und sie leistet dort Gutes, weil sie versteckte Annahmen sichtbar macht. Das Gefangenendilemma zeigt in wenigen Zeilen, wie rationale Einzelentscheidungen zu einem für alle schlechten Ergebnis führen können. Die Kritik daran lautet, dass solche Modelle Menschen auf Nutzenmaximierer verkürzen und das Messbare wichtiger erscheinen lassen als das Wichtige. Vernünftig ist deshalb ein Nebeneinander: formale Modelle als Werkzeug, ergänzt durch Interpretation, Geschichte und qualitative Forschung.

### Ist die Logik gegen die Emanzipation?

Dieser Einwand taucht regelmäßig auf und verdient eine ernsthafte Antwort. Feministische Autorinnen wie Andrea Nye haben argumentiert, die formale Logik sei historisch ein Herrschaftsinstrument: Sie entstand in Männerbünden, blendet Sprecher, Situation und Gefühl aus und gibt vor, von einem Ort ohne Standpunkt zu sprechen.[^nye] Andere, etwa Val Plumwood, halten dagegen, dass nicht die Logik selbst das Problem ist, sondern ein bestimmtes Denken in starren Gegensätzen, und sie arbeiten an besseren Logiken statt gegen die Logik.[^plumwood]

Jedes effektive Werkzeug kann für reine Herrschaftsinteressen missbraucht werden. Es kann aber auch helfen, Ketten zu zerschneiden. Praktisch spricht also viel für die zweite Sicht: Wer wenig Macht hat, profitiert besonders von kritischen Werkzeugen.

Ein Argument prüfen kann jede und jeder, unabhängig von Titel und Status. Die Gefahr liegt weniger in der Logik als im rhetorischen Missbrauch der Form, etwa wenn Formalisierung dazu dient, Betroffene mundtot zu machen.

<details>
  <summary>**Beispiel: Der sogenannte Positivismusstreit**</summary>

Historisch wurde dieser Streit in Deutschland schon einmal auf hohem Niveau geführt, im **Positivismusstreit** der 1960er Jahre.[^positivismusstreit] 1961 trafen in Tübingen Karl Popper und Theodor W. Adorno aufeinander, später legten Hans Albert und Jürgen Habermas polemisch nach. Gestritten wurde darüber, ob die Sozialwissenschaften wie die Naturwissenschaften prüfbare Vermutungen aufstellen sollen, ob sich Forschung von Werturteilen trennen lässt und welchem Interesse Erkenntnis dient. Schon das Etikett war schief: Popper war kein Positivist, sondern ein scharfer Kritiker des Wiener Kreises, und Adorno war kein Gegner des Argumentierens, sondern misstraute einer Vernunft, die sich aufs Rechnen verkürzt.

Die Aufteilung in "Empiristen und Positivisten" hier und "fortschrittliche, emanzipatorische" Denker dort ist deshalb eine gefährliche Vereinfachung, oft von Leuten vorgetragen, die weder Frege oder Popper noch Adorno oder Deleuze studiert haven.  
Sie macht aus einer Sachfrage eine Lagerfrage und verdeckt, wie viel beide Seiten teilten: das Misstrauen gegen letzte Gewissheiten und die Überzeugung, dass Kritik das eigentliche Geschäft der Wissenschaft ist. Die brauchbare Lehre aus dem Streit lautet nicht "Logik ja" oder "Logik nein", sondern: "**Welche Logik wann und wozu?**".

</details>

## Interessante theoretische Fragen

### Formale Systeme und Semantik

Ein logisches System hat zwei Seiten. Die **_Syntax_** sagt, welche Zeichenreihen erlaubt sind und welche Umformungen man vornehmen darf, rein mechanisch, ohne jede Bedeutung. Die _**Semantik**_ gibt den Zeichen eine Deutung und erklärt, wann eine Aussage in einem Modell wahr ist. Die spannende Frage ist, wie gut beide Seiten zusammenpassen.

<details>
  <summary>**Beispiel: Mikro-Semantik**</summary>

Die Formel $\exists x\,G(x)$ ist für sich genommen bedeutungslos. Erst ein **Modell** gibt ihr einen Sinn, und dazu braucht es zwei Angaben:

- ein **Universum**, über das die Quantoren laufen, hier die Zahlenmenge $\mathcal{U} = \{1, 2, 3\}$
- eine **Deutung der Zeichen**, hier $G(x)$ = "$x$ ist gerade", also $G$ trifft auf die 2 zu

In diesem Modell ist $\exists x\,G(x)$ **wahr** (die 2 ist gerade) und $\forall x\,G(x)$ **falsch** (die 1 nicht). Wechseln wir das Universum zu $\mathcal{U}' = \{2, 4, 6\}$, sind beide Formeln wahr. Dieselbe Zeichenreihe, ein anderes Modell, ein anderer Wahrheitswert: Genau das ist der Unterschied zwischen Syntax und Semantik.

</details>

### Vollständigkeit

Ein Kalkül ist **_korrekt_**, wenn er nur Wahres beweist,

Wir sagen, dass ein Kalkül **_vollständig_** ist, wenn er alles Wahre auch beweisen kann.

Gödel zeigte 1930, dass die Prädikatenlogik erster Stufe beides ist, ein bemerkenswertes Ergebnis: Rein mechanisches Zeichenschieben holt hier alles ein, was inhaltlich gilt.

### Erfüllbarkeit

Eine Formelmenge ist **_erfüllbar_**, wenn es mindestens eine Situation gibt, in der alle Formeln (also jede nach den Syntaxregeln korrekt gebildete Zeichenreihe) wahr sind. Das ist die Frage hinter vielen praktischen Problemen, vom Stundenplan bis zur Chipverifikation, und moderne SAT-Solver beantworten sie für Millionen von Variablen.

<details>
  <summary>**Beispiel: Die Sitzordnung**</summary>

Drei Gäste sollen nebeneinander auf eine Bank: Anna, Bea und Carl. Es gelten drei Wünsche:

1. Anna sitzt neben Bea.
2. Bea sitzt nicht neben Carl.
3. Carl sitzt neben Anna.

Diese Menge ist **erfüllbar**: Die Reihe Bea, Anna, Carl macht alle drei Wünsche wahr. Kommt ein vierter Wunsch dazu, "Anna sitzt am Rand und hat nur einen Nachbarn", wird die Menge **unerfüllbar**, denn Anna müsste gleichzeitig neben Bea und neben Carl sitzen.

Man sieht daran zweierlei: Erfüllbarkeit fragt nicht, ob die Wünsche vernünftig sind, sondern nur, ob sie zusammen erfüllbar sind. Und schon bei wenigen Bedingungen wird das Durchprobieren mühsam, weshalb man dafür Programme schreibt.

</details>

### Widersprüchlichkeit

In der klassischen Logik ist ein Widerspruch fatal, denn aus "A und nicht A" folgt jede beliebige Aussage (_ex falso quodlibet_). Deshalb ist Konsistenz die Mindestanforderung an jede Theorie (siehe [Kohärenz vs. Konsistenz](020-kohaerenz-vs-konsistenz.md)).

### Logik und Mengenlehre

Die Mengenlehre sollte das Fundament der Mathematik werden. Frege war gerade dabei die Mathematik auf feste Grundlagen zu stellen, da kam Russell 1901 und zeigte, dass die naive Version widersprüchlich ist. Russell hat eine seltsame Menge definiert, deren Definition selbstbezüglich ist.

:::info Russell's Babier

In einem Dorf rasiert der Barbier genau diejenigen Männer, die sich nicht selbst rasieren.

Frage: Rasiert der Barbier sich selbst?
Antwort: Wenn er es tut, gehört er zu denen, die sich selbst rasieren, also darf er es nicht. Wenn er es nicht tut, gehört er zu denen, die er rasieren muss, also tut er es.

Formal, mit $b$ für den Barbier: $\forall x\,(\text{rasiert}(b,x) \leftrightarrow \neg\,\text{rasiert}(x,x))$. Setzt man für $x$ den Barbier selbst ein, steht da $\text{rasiert}(b,b) \leftrightarrow \neg\,\text{rasiert}(b,b)$, ein glatter Widerspruch.

:::

Beim Babier ist der Widerspruch belanglos. In der Mathematik sind solche selbstwidersprüchlichen Definitionen katastrophal.

Die heute am meisten akzeptierte Antwort war ein vorsichtigeres Axiomensystem <Tooltip text="(ZFC)" model="info">**Z** wie **Ernst Zermelo** (1871–1953), der 1908 das erste Axiomensystem der Mengenlehre aufstellte,
**F** wie **Abraham Fraenkel** (1891–1965), der es um 1922 ergänzte, und
**C** wie _choice_, das Auswahlaxiom.</Tooltip>, auf dem die Mathematik bis heute steht.

<details>
  <summary>**Die Axiome von ZFC**</summary>

Die Grundidee ist Bescheidenheit: Man sagt nicht mehr "zu jeder Eigenschaft gibt es die Menge der Dinge, die sie haben", sondern erlaubt nur noch wenige, klar umrissene Wege, aus vorhandenen Mengen neue zu bauen.[^zfc]

| Axiom                   | Was es besagt                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| Extensionalität         | Zwei Mengen sind gleich, wenn sie dieselben Elemente haben                               |
| Leere Menge             | Es gibt eine Menge ohne Elemente                                                         |
| Paarmenge               | Zu zwei Mengen gibt es die Menge, die genau diese beiden enthält                         |
| Vereinigung             | Zu einer Menge von Mengen gibt es die Menge all ihrer Elemente                           |
| Potenzmenge             | Zu jeder Menge gibt es die Menge aller ihrer Teilmengen                                  |
| Aussonderung            | Aus einer **vorhandenen** Menge darf man die Elemente mit einer Eigenschaft heraussuchen |
| Ersetzung               | Bildet man jedes Element einer Menge eindeutig ab, ist auch das Ergebnis eine Menge      |
| Unendlichkeit           | Es gibt eine unendliche Menge                                                            |
| Fundierung              | Keine Menge enthält sich selbst, auch nicht über Umwege                                  |
| Auswahl (_choice_, "C") | Aus beliebig vielen nichtleeren Mengen darf man gleichzeitig je ein Element wählen       |

**Warum Russells Menge nicht mehr entsteht:** Entscheidend ist die **Aussonderung**. Man darf nicht mehr einfach "die Menge aller Mengen, die sich nicht selbst enthalten" bilden, sondern nur innerhalb einer bereits vorhandenen Menge aussondern, und eine "Menge aller Mengen" gibt es in ZFC nicht. Das Fundierungsaxiom verbietet zusätzlich, dass eine Menge sich selbst enthält.

Das **Auswahlaxiom** war lange umstritten, weil es die Existenz einer Auswahl behauptet, ohne ein Verfahren anzugeben, wie man sie findet. Gödel und Paul Cohen zeigten später, dass es sich mit den übrigen Axiomen weder beweisen noch widerlegen lässt.

</details>

### Gödel

1931 bewies Gödel, dass jedes hinreichend starke, widerspruchsfreie formale System wahre Sätze enthält, die es selbst nicht beweisen kann, und dass es seine eigene Widerspruchsfreiheit nicht beweisen kann.[^goedel] Das beendete Hilberts Programm, die Mathematik ein für alle Mal sicher zu begründen. Für das kritische Denken ist die Lehre bescheidener, aber wichtig: Es gibt kein System, das uns alle Fragen abnimmt.

[^aristoteles-organon]: Aristoteles, _Analytica priora_ (Erste Analytik), in den logischen Schriften des _Organon_. Deutsch etwa: Aristoteles, _Lehre vom Schluss oder Erste Analytik_, Meiner. Für Interessierte: [Aristotle's Logic (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/aristotle-logic/).

[^stoiker]: Die Schriften Chrysipps sind verloren und nur in Zitaten überliefert. Überblick: [Stoicism: Logic (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/stoicism/#Log).

[^mittelalter]: Wilhelm von Ockham, _Summa logicae_ (um 1323); Johannes Buridan, _Summulae de dialectica_. Überblick: [Medieval Theories of Supposition (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/medieval-terms/).

[^port-royal]: Antoine Arnauld, Pierre Nicole: _La logique ou l'art de penser_ (1662), bekannt als _Logik von Port-Royal_.

[^leibniz]: Gottfried Wilhelm Leibniz, u. a. _De arte combinatoria_ (1666) und Fragmente zum _calculus ratiocinator_. Überblick: [Leibniz's Logic (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/leibniz-logic-influence/).

[^salva-veritate]: Leibniz formuliert das Kriterium in den _Generales inquisitiones de analysi notionum et veritatum_ (1686): "Eadem sunt quorum unum potest substitui alteri salva veritate." Heute heißt das Prinzip _Leibniz' Gesetz_. Für Interessierte: [The Identity of Indiscernibles (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/identity-indiscernible/).

[^rechenmaschine]: Leibniz' _Machina arithmetica_, ab 1672 entwickelt; das Binärsystem beschreibt er in _Explication de l'arithmétique binaire_ (1703). Das Zitat über die "knechtischen Rechenarbeiten" stammt aus einem Brief von 1685. Für Interessierte: [Leibniz-Rechenmaschine (Wikipedia)](https://de.wikipedia.org/wiki/Leibniz-Rechenmaschine).

[^boole]: George Boole: _The Mathematical Analysis of Logic_ (1847) und _An Investigation of the Laws of Thought_ (1854).

[^demorgan]: Benannt nach Augustus De Morgan (1806–1871), der die Gesetze in _Formal Logic_ (1847) formulierte. Bekannt waren sie schon im Mittelalter, unter anderem bei Wilhelm von Ockham. Für Interessierte: [De Morgansche Gesetze (Wikipedia)](https://de.wikipedia.org/wiki/De_Morgansche_Gesetze).

[^frege]: Gottlob Frege: _Begriffsschrift, eine der arithmetischen nachgebildete Formelsprache des reinen Denkens_ (1879).

[^gentzen]: Gerhard Gentzen: _Untersuchungen über das logische Schließen_, Mathematische Zeitschrift 39 (1935).

[^kripke]: Saul Kripke: _Semantical Considerations on Modal Logic_ (1963). Überblick: [Modal Logic (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/logic-modal/).

[^wigner]: Eugene Wigner: _The Unreasonable Effectiveness of Mathematics in the Natural Sciences_, Communications in Pure and Applied Mathematics 13 (1960).

[^nye]: Andrea Nye: _Words of Power. A Feminist Reading of the History of Logic_, Routledge 1990.

[^plumwood]: Val Plumwood: _The Politics of Reason. Towards a Feminist Logic_, Australasian Journal of Philosophy 71 (1993).

[^positivismusstreit]: Die Beiträge sind gesammelt in: Theodor W. Adorno u. a.: _Der Positivismusstreit in der deutschen Soziologie_, Luchterhand 1969, darin Karl Popper: _Die Logik der Sozialwissenschaften_ (1962). Habermas hat seine Position kurz darauf ausgearbeitet in: Jürgen Habermas: _Erkenntnis und Interesse_, Suhrkamp 1968. Historische Darstellung: Hans-Joachim Dahms: _Positivismusstreit_, Suhrkamp 1994.

[^zfc]: Ernst Zermelo: _Untersuchungen über die Grundlagen der Mengenlehre I_, Mathematische Annalen 65 (1908); Abraham Fraenkel: _Zu den Grundlagen der Cantor-Zermeloschen Mengenlehre_, Mathematische Annalen 86 (1922). Für Interessierte: [Zermelo-Fraenkel Set Theory (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/set-theory/zf.html).

[^goedel]: Kurt Gödel: _Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I_, Monatshefte für Mathematik und Physik 38 (1931).

[Article en français](pathname:///fr/docs/kritisches-denken/grundlagen-der-logik/einfuehrung-logik) | [Article in English](pathname:///en/docs/kritisches-denken/grundlagen-der-logik/einfuehrung-logik)
