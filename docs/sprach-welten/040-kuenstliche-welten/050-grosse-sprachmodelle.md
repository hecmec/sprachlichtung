---
title: Große Sprachmodelle
title_meta: "Große Sprachmodelle: Was neu ist, wohin es geht und die Frage nach AGI"
sidebar_label: Große Sprachmodelle
sidebar_position: 7
description: "Was große Sprachmodelle von früheren KI-Systemen unterscheidet, wie sie entstehen, ob sie immer besser werden und was von der Rede über AGI zu halten ist."
keywords:
  - Große Sprachmodelle
  - LLM
  - Skalierungsgesetze
  - Feinabstimmung
  - AGI
  - Benchmarks
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
# slug:
# image:
---

## Was daran wirklich neu ist

Technisch ist ein großes Sprachmodell nichts anderes als die im [vorigen Kapitel](./040-generative-ki.md) beschriebene Maschine: Sie schätzt, wie eine Folge weitergeht. Neu sind drei Dinge.

**Erstens die Größe.** Trainiert wird nicht auf einem Fachgebiet, sondern auf einem erheblichen Teil des verfügbaren geschriebenen Textes, mit Rechenaufwänden im Bereich von Kraftwerksleistung.

**Zweitens, dass Größe die Sache qualitativ verändert.** Man erwartete bessere Textvorhersage. Man bekam Systeme, die übersetzen, zusammenfassen, programmieren und argumentieren, ohne dass jemand ihnen diese Aufgaben beigebracht hätte. Wer nur das nächste Wort gut vorhersagen will, muss offenbar nebenbei allerhand über Grammatik, Fakten und Schlussfolgern mitlernen.

**Drittens die Bedienung.** Frühere KI war ein Werkzeug für Fachleute mit einer festen Aufgabe. Ein Sprachmodell bedient man mit Sprache. Das erklärt die gesellschaftliche Wucht besser als jeder technische Fortschritt.

## Wie so ein Modell entsteht

Der Weg hat zwei sehr ungleiche Hälften.

Im **Vortraining** lernt das Modell monatelang aus riesigen Textmengen ausschließlich eines: das nächste Wort vorherzusagen. Danach kann es viel, ist aber unbrauchbar, weil es Anweisungen nicht befolgt, sondern nur fortsetzt.

In der **Nachbearbeitung** wird es mit vergleichsweise wenigen Beispielen darauf getrimmt, Fragen zu beantworten, und anschließend an menschlichen Bewertungen ausgerichtet: Von zwei Antworten wählen Menschen die bessere, das Modell lernt daraus, was erwünscht ist.[^instruct]

Diese zweite Hälfte formt den Charakter des Systems. Der höfliche, hilfsbereite, vorsichtige Ton ist kein Wesenszug, sondern ein Trainingsergebnis. Und die Bewertungsmaßstäbe hat ein Unternehmen festgelegt.

## Werden die immer schlauer?

Um 2020 fand man verblüffend regelmäßige Zusammenhänge: Mehr Rechenleistung, mehr Daten und mehr Parameter verbessern die Vorhersagequalität nach einer glatten Kurve.[^scaling] Später zeigte sich, dass viele Modelle schlicht zu wenig Text für ihre Größe gesehen hatten.[^chinchilla] Diese Rechenregeln trieben den Wettlauf um immer größere Systeme.

Nur stößt dieser Weg an mehrere Wände zugleich: Hochwertiger menschlicher Text ist endlich, die Kosten wachsen schneller als der Nutzen, und die Kurven flachen ab. Deshalb hat sich die Anstrengung verschoben. Statt Modelle größer zu machen, lässt man sie beim Antworten länger rechnen, in Zwischenschritten arbeiten, Werkzeuge aufrufen und Ergebnisse prüfen. Der Zuwachs kommt heute mehr aus der Arbeitsweise als aus der Modellgröße.

Beim Wort "schlauer" ist Vorsicht geboten. Gemessen wird an Testsammlungen, und diese Tests stehen im Internet, also womöglich auch in den Trainingsdaten. Ein Sprung in der Punktzahl ist deshalb nicht automatisch ein Sprung im Können. Auffällig bleibt die Mischung: Systeme lösen Aufgaben auf Wettbewerbsniveau und scheitern an Aufgaben, die Kinder beherrschen.

## Haben wir bald AGI?

"Allgemeine künstliche Intelligenz" soll ein System bezeichnen, das jede geistige Aufgabe auf menschlichem Niveau bewältigt. Das Problem beginnt bei der Definition: Es gibt keine anerkannte, und die vorhandenen verschieben sich mit dem, was Systeme gerade können. Vorhersagen zum Zeitpunkt reichen von wenigen Jahren bis nie, was vor allem zeigt, dass niemand es weiß.

Nüchtern lässt sich benennen, was heutigen Systemen fehlt: ein verlässliches Weltmodell statt Sprachstatistik, ein dauerhaftes Gedächtnis über Sitzungen hinweg, die Fähigkeit, aus wenigen Beispielen zu lernen wie ein Kind, ein Begriff von Ursache und Wirkung sowie Zuverlässigkeit. Ein System, das in neunzig Prozent der Fälle brilliert und in zehn Prozent selbstbewusst irrt, ist keine allgemeine Intelligenz, sondern ein Werkzeug mit Aufsichtspflicht.

Beachten Sie außerdem, wer über AGI spricht. Die Erzählung von der nahen Superintelligenz ist Werbung und Warnung zugleich, und sie kommt oft von denselben Häusern, die Kapital einwerben.

## Was das praktisch heißt

- Behandeln Sie Antworten als Entwurf, nicht als Auskunft. Prüfen lässt sich alles, was zählt.
- Fragen Sie bei jeder Aussage über Fähigkeiten: gemessen woran, verglichen womit?
- Nutzen Sie die Systeme dort, wo Sie das Ergebnis beurteilen können. Genau dort sind sie stark.
- Verwechseln Sie flüssige Sprache nicht mit Sachkenntnis. Die Flüssigkeit ist trainiert, die Sachkenntnis ist Nebenprodukt.

[^instruct]: Long Ouyang u. a.: _Training language models to follow instructions with human feedback_, NeurIPS, 2022.

[^scaling]: Jared Kaplan u. a.: _Scaling Laws for Neural Language Models_, arXiv, 2020.

[^chinchilla]: Jordan Hoffmann u. a.: _Training Compute-Optimal Large Language Models_, NeurIPS, 2022.
