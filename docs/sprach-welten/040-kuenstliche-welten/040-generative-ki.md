---
title: Generative KI
title_meta: "Generative KI: von der Zeitreihe über LSTM bis zur Aufmerksamkeit"
sidebar_label: Generative KI
sidebar_position: 6
description: "Wie generative KI funktioniert: Erzeugen ist Vorhersagen. Der Weg von der Zeitreihenprognose über rekurrente Netze und LSTM bis zum Aufmerksamkeitsmechanismus."
keywords:
  - Generative KI
  - Zeitreihe
  - Rekurrente Netze
  - LSTM
  - Aufmerksamkeit
  - Transformer
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
# slug:
# image:
---

## Erzeugen ist Vorhersagen

Der überraschendste Satz über generative KI lautet: Sie erzeugt nichts. Sie sagt vorher.

Ein Programm, das den morgigen Stromverbrauch schätzt, tut im Kern dasselbe wie ein Programm, das einen Text schreibt. Beide bekommen eine Folge von Werten und schätzen den nächsten. Der einzige Unterschied liegt darin, was man mit der Schätzung macht. Bei der Prognose liest man sie ab. Beim Erzeugen hängt man sie hinten an die Folge an und fragt erneut: und was kommt jetzt?

Aus dieser einen Rückkopplung entsteht alles, was heute als generative KI verkauft wird. Ein Textgenerator ist eine Wettervorhersage für Wörter, die man immer wieder auf ihr eigenes Ergebnis anwendet.

## Die Frage: Wie merkt sich eine Maschine, was vorher war?

Damit die Vorhersage gelingt, muss das Programm den Zusammenhang kennen. Der nächste Messwert hängt von den vorherigen ab, das nächste Wort vom bisherigen Satz. Ein gewöhnliches neuronales Netz kann das nicht: Es sieht immer nur eine feste Eingabe und hat kein Gedächtnis. Die gesamte Entwicklung der letzten dreißig Jahre lässt sich als Ringen um dieses Gedächtnis lesen.

### Rekurrente Netze: die Schleife

Die erste Antwort waren **rekurrente Netze** (RNN). Das Netz verarbeitet die Folge Schritt für Schritt und gibt sich sein eigenes Zwischenergebnis als zusätzliche Eingabe zurück. Dieser Zustand ist sein Kurzzeitgedächtnis.

Die Idee ist elegant und funktioniert schlecht. Bei langen Folgen verblasst die Information aus dem Anfang, weil sie bei jedem Schritt erneut durch dieselbe Rechnung gedrückt wird. Das Netz vergisst den Satzanfang, bevor der Satz zu Ende ist.

### LSTM: gezielt vergessen

Die zweite Antwort kam 1997 von Sepp Hochreiter und Jürgen Schmidhuber: das **Long Short-Term Memory**.[^lstm] Sie ergänzten die Schleife um kleine Schleusen, die selbst gelernt werden. Eine Schleuse entscheidet, was in das Gedächtnis aufgenommen wird, eine zweite, was gelöscht wird, eine dritte, was nach außen gegeben wird.

Ein LSTM kann also lernen, ein Detail über hundert Wörter hinweg festzuhalten und Unwichtiges sofort fallen zu lassen. Damit funktionierten erstmals maschinelle Übersetzung, Spracherkennung im Telefon und brauchbare Textvorhersage.

Zwei Nachteile blieben. Das Modell arbeitet die Folge streng nacheinander ab, lässt sich also kaum auf viele Rechenkerne verteilen. Und alles, was es aus tausend Wörtern behalten will, muss durch einen einzigen Gedächtniszustand passen: ein Nadelöhr.

### Aufmerksamkeit: alles gleichzeitig ansehen

Die dritte Antwort verwarf das Nadelöhr. Statt die Vergangenheit in einen Zustand zu pressen, darf das Modell bei jedem Schritt auf **alle** vorherigen Positionen zurückblicken und selbst gewichten, welche gerade wichtig sind. Diese Gewichtung heißt **Aufmerksamkeit**.

Beim Wort "sie" in einem langen Absatz sucht das Modell die Stelle, auf die sich das Wort bezieht, und gewichtet sie hoch. Nichts muss über hundert Schritte durchgereicht werden, der Bezug entsteht direkt.

2017 zeigte eine Gruppe bei Google, dass man die Schleife komplett weglassen kann und allein mit Aufmerksamkeit auskommt.[^transformer] Das Ergebnis heißt Transformer. Weil kein Schritt mehr auf den vorherigen warten muss, lässt sich das Training auf tausende Grafikkarten verteilen. Genau diese Parallelisierbarkeit, nicht eine besondere Klugheit der Architektur, machte die heutigen großen Modelle möglich.

## Nicht nur Text

Bilder entstehen meist anders, nach demselben Grundgedanken. Bei der **Diffusion** lernt ein Modell, aus einem Bild schrittweise Rauschen zu entfernen.[^diffusion] Zum Erzeugen startet man mit reinem Rauschen und lässt das Modell so lange entrauschen, bis ein Bild dasteht. Auch hier wird nichts erfunden, sondern in vielen kleinen Schritten vorhergesagt, wie es weitergeht.

## Was in der Praxis daraus folgt

- **Verschiedene Antworten:** Aus den geschätzten Wahrscheinlichkeiten wird gewürfelt. Wie stark, regelt ein Wert, den man Temperatur nennt. Deshalb ist zweimal dieselbe Frage zweimal derselbe Vorgang, aber nicht dieselbe Antwort.
- **Erfundene Quellen:** Das Modell erzeugt, was plausibel weitergeht, nicht, was zutrifft. Eine erfundene Literaturangabe folgt derselben Statistik wie eine echte.
- **Fenstergröße zählt:** Was außerhalb des betrachteten Textfensters liegt, existiert für das Modell nicht.
- **Der Anfang bestimmt viel:** Weil jede Ausgabe an die bisherige Folge angehängt wird, färbt der Einstieg auf alles Folgende ab. Deshalb wirkt die Formulierung einer Anfrage so stark.

[^lstm]: Sepp Hochreiter, Jürgen Schmidhuber: _Long Short-Term Memory_, Neural Computation 9(8), 1997.

[^transformer]: Ashish Vaswani u. a.: _Attention Is All You Need_, NeurIPS, 2017.

[^diffusion]: Jonathan Ho, Ajay Jain, Pieter Abbeel: _Denoising Diffusion Probabilistic Models_, NeurIPS, 2020.
