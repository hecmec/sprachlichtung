---
title: "Muster gültiger Argumente"
sidebar_position: 4
description: "Eine Übersicht über verschiedene Muster gültiger Argumente und ihre Anwendung im kritischen Denken"
keywords:
  - Syllogismus
  - Reductio ad Absurdum
  - Analogieargument
  - Abduktion
  - logisches Schließen
  - Argumentationsmuster
last_update:
  date: 2026-06-11
  author: Immanuel Lupinus
completeness: 3/5
draft: false
---

<!-- # Muster gültiger Argumente
https://www.youtube.com/watch?v=ZdkxigKjVI8
 -->

Aufbauend auf den [drei Schlussformen](030-deduktion-induktion-abduktion.md) gibt es bestimmte **Argumentationsmuster**, die immer wieder vorkommen. Sie bilden die Grundlage für logisch korrektes Schließen und lassen sich in ganz unterschiedlichen Kontexten anwenden. Hier betrachten wir einige besonders wichtige Muster.

## Kategorischer Syllogismus

Ein **kategorischer Syllogismus**[^syllogismus-geschichte] ist ein deduktives Argument, das aus drei kategorischen Aussagen besteht: zwei Prämissen und einer Schlussfolgerung.

**Form:**

1. Alle/Einige A sind/sind nicht B. (Obersatz)
2. Alle/Einige B sind/sind nicht C. (Untersatz)
3. Daher: Alle/Einige A sind/sind nicht C. (Schlussfolgerung)

**Beispiel: Planeten**

1. Alle Planeten sind Himmelskörper.
2. Einige Himmelskörper sind gasförmig.
3. Daher sind einige Planeten gasförmig.

**Achtung:** Nicht alle Formen des kategorischen Syllogismus sind gültig. Die Gültigkeit hängt von der spezifischen Kombination der Quantoren (alle, einige) und der Anordnung der Begriffe ab.

## Reductio ad Absurdum (Beweis durch Widerspruch)

**Reductio ad Absurdum** ist eine Argumentationsform, bei der man die Negation der zu beweisenden Aussage annimmt und zeigt, dass diese Annahme zu einem Widerspruch führt.

**Form:**

1. Annahme: Nicht-A ist wahr.
2. Wenn Nicht-A wahr ist, dann folgt B.
3. B führt zu einem Widerspruch.
4. Daher muss A wahr sein.

**Beispiel: Primzahlen**

1. Annahme: Es gibt nicht unendlich viele Primzahlen.
2. Wenn es nur endlich viele Primzahlen gibt, können wir sie alle multiplizieren und 1 addieren, um eine neue Zahl N zu erhalten.
3. N ist entweder selbst eine Primzahl oder durch eine Primzahl teilbar, die nicht in unserer ursprünglichen Liste enthalten ist.
4. Dies widerspricht unserer Annahme, dass wir alle Primzahlen aufgelistet haben.
5. Daher muss es unendlich viele Primzahlen geben.

## Analogieargument

Ein **Analogieargument** schließt von Ähnlichkeiten zwischen zwei Dingen auf weitere Ähnlichkeiten.

**Form:**

1. A hat die Eigenschaften X, Y und Z.
2. B hat die Eigenschaften X und Y.
3. Daher hat B wahrscheinlich auch die Eigenschaft Z.

**Beispiel: Leben auf Mars**

1. Der Planet Mars hat eine feste Oberfläche, eine Atmosphäre und Wassereis an den Polen.
2. Die Erde hat eine feste Oberfläche, eine Atmosphäre und Wassereis an den Polen.
3. Die Erde beherbergt Leben.
4. Daher könnte der Mars möglicherweise auch Leben beherbergen.

Analogieargumente sind induktiv und liefern keine Gewissheit, sondern nur Wahrscheinlichkeiten. Ihre Stärke hängt davon ab, wie relevant die gemeinsamen Eigenschaften für die Schlussfolgerung sind.

## Abduktion (Schluss auf die beste Erklärung)

**Abduktion** ist eine Form des Schließens, bei der man von einer Beobachtung auf die wahrscheinlichste Erklärung schließt.

**Form:**

1. Beobachtung: Phänomen P tritt auf.
2. Erklärung E würde P gut erklären.
3. Keine andere Erklärung erklärt P so gut wie E.
4. Daher ist E wahrscheinlich wahr.

**Beispiel: Nasser Rasen**

1. Beobachtung: Der Rasen ist nass.
2. Erklärung: Es hat geregnet.
3. Alternative Erklärungen (Sprinkleranlage, Tau) sind weniger wahrscheinlich, da es keine Sprinkleranlage gibt und die Nässe zu stark für Tau ist.
4. Daher hat es wahrscheinlich geregnet.

Abduktion ist eine wichtige Form des Schließens in der Wissenschaft, Medizin und im Alltag, aber sie liefert keine Gewissheit. Die Stärke einer abduktiven Schlussfolgerung hängt davon ab, wie gut die Erklärung das Phänomen erklärt und wie viel besser sie ist als alternative Erklärungen.

## Anwendung im kritischen Denken

Das Verständnis dieser Argumentationsmuster ist für das kritische Denken aus mehreren Gründen wichtig:

1. Es ermöglicht die Identifizierung und Bewertung von Argumenten in verschiedenen Kontexten.

2. Es hilft, eigene Argumente strukturierter und überzeugender zu gestalten.

3. Es erleichtert das Erkennen von Fehlschlüssen, die gültigen Argumentationsmustern ähneln, aber logische Fehler enthalten.

4. Es fördert ein tieferes Verständnis der verschiedenen Arten des Schließens (deduktiv, induktiv, abduktiv) und ihrer jeweiligen Stärken und Grenzen.

[^syllogismus-geschichte]: Der Syllogismus war über mehr als zwei Jahrtausende, von Aristoteles bis Gottlob Frege, der Kern der Logik. Aristoteles begründete mit seiner _Syllogistik_ die erste formale Logik überhaupt, und bis weit ins 19. Jahrhundert galt die Syllogismuslehre (in verschiedenen Formen) als nahezu vollständige Theorie des gültigen Schließens. Erst mit George Boole und dann mit Freges _Begriffsschrift_ (1879) und der Entwicklung der modernen Prädikatenlogik wurde dieses Bild abgelöst. Aus heutiger Sicht ist der Syllogismus kein eigenständiges System mehr, sondern lediglich ein **Spezialfall der Prädikatenlogik erster Stufe** (First Order Logic): Alle syllogistischen Schlüsse lassen sich mit Quantoren und Prädikaten ausdrücken, während die Prädikatenlogik weit darüber hinausgeht und etwa mehrstellige Relationen und verschachtelte Quantoren erfasst, die der klassische Syllogismus gar nicht behandeln kann. Für Interessierte: [Syllogismus (Wikipedia)](https://de.wikipedia.org/wiki/Syllogismus).
