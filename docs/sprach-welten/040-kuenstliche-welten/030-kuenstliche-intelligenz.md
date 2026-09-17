---
title: Künstliche Intelligenz
title_meta: "Künstliche Intelligenz: Sparten, Lernarten und Anwendungsfelder"
sidebar_label: Künstliche Intelligenz
sidebar_position: 3
description: "Was künstliche Intelligenz umfasst, wie Maschinen lernen, wo KI längst im Alltag steckt und wohin sich das Feld gerade bewegt."
keywords:
  - Künstliche Intelligenz
  - Maschinelles Lernen
  - Neuronale Netze
  - Überwachtes Lernen
  - Verstärkendes Lernen
  - Anwendungsfelder
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
# slug:
# image:
---

## Ein paar überraschende Tatsachen

**Erstens:** "Künstliche Intelligenz" bezeichnet kein Ding, sondern eine Grenze, die ständig weiterwandert. Schachcomputer galten als KI, bis sie gewannen. Spracherkennung galt als KI, bis sie im Telefon steckte. Sobald etwas zuverlässig funktioniert, heißt es plötzlich nur noch Software. Der Informatiker Larry Tesler brachte es auf die Formel: KI ist alles, was noch nicht gemacht wurde.[^tesler]

**Zweitens:** Die KI, die Ihr Leben tatsächlich beeinflusst, ist unscheinbar. Sie entscheidet über Kreditwürdigkeit, sortiert Bewerbungen vor, plant Ihre Route, schlägt das nächste Video vor und liest Ihre Röntgenbilder mit. Chatbots sind der sichtbare, aber keineswegs der folgenreichste Teil.

**Drittens:** Die Grundidee neuronaler Netze stammt aus den 1940er Jahren, das entscheidende Lernverfahren aus den 1980ern. Neu ist nicht die Theorie. Neu sind Datenmengen und Rechenleistung.

## Was gehört alles dazu?

KI ist ein Dach, unter dem sehr verschiedene Werkzeuge stehen.

**Symbolische KI** arbeitet mit ausformulierten Regeln und Logik. Expertensysteme der 1980er Jahre gehören dazu, aber auch heutige Planungs- und Beweissysteme. Sie sind nachvollziehbar und starr.

**Maschinelles Lernen** leitet Muster aus Daten ab, statt Regeln vorzugeben, wie im [vorigen Kapitel](./020-progamme-und-wahrscheinlichkeiten.md) beschrieben.

**Neuronale Netze und Deep Learning** sind eine besonders erfolgreiche Familie innerhalb des maschinellen Lernens: viele Schichten einfacher Recheneinheiten, die zusammen komplizierte Zusammenhänge abbilden.

Quer dazu liegen Arbeitsgebiete wie Bildverarbeitung, Sprachverarbeitung, Robotik und Suche. Wenn jemand "die KI" sagt, lohnt die Rückfrage, welches dieser Dinge gemeint ist.

## Die Frage: Was heißt es, dass eine Maschine lernt?

Lernen klingt nach Verstehen. Gemeint ist etwas Nüchterneres: Ein Programm hat viele Stellschrauben, anfangs zufällig eingestellt, und dreht sie so lange nach, bis seine Ausgaben besser zu den Beispielen passen. Es gibt drei Arten, wie man ihm dabei Rückmeldung gibt.

**Überwachtes Lernen** ist Lernen mit Lösungsblatt. Man zeigt Beispiele mit richtiger Antwort: dieses Bild zeigt einen Tumor, jenes nicht. Das ist die häufigste und die datenhungrigste Form. Jemand muss die Antworten liefern, meist unterbezahlte Menschen.

**Unüberwachtes Lernen** ist Lernen ohne Lösungsblatt. Das Programm bekommt nur Daten und sucht selbst Struktur, etwa Kundengruppen mit ähnlichem Verhalten. Es findet Muster, aber niemand hat ihm gesagt, welche wichtig sind.

**Verstärkendes Lernen** ist Lernen durch Belohnung. Das Programm probiert, bekommt Punkte für gute Ergebnisse und passt sein Verhalten an. So lernen Systeme Spiele und Roboter das Greifen. Der Haken: Sie optimieren exakt die Punktzahl, nicht das, was Sie gemeint haben.

## Theorie und Praxis: die Sache mit der Belohnung

Diese letzte Warnung ist keine Theorie. Ein Videoplattform-System, das auf Verweildauer optimiert wird, lernt zuverlässig, dass Empörung länger bindet als Sachlichkeit. Es hat keine politische Absicht. Es hat eine Zielfunktion, und es erfüllt sie perfekt.

Genau das ist die praktische Lehre aus dem Lernbegriff: Ein lernendes System tut nie das Gewünschte, sondern immer das Messbare. Wer wissen will, wie sich eine KI verhalten wird, muss fragen, worauf sie optimiert wurde und wer diese Größe ausgesucht hat.

Dasselbe gilt für Daten. Ein Bewerbungsfilter, der aus früheren Einstellungsentscheidungen lernt, übernimmt deren Vorurteile mitsamt der Aura mathematischer Objektivität.

## Wohin sich das Feld bewegt

Vier Entwicklungen prägen die Gegenwart:

- **Multimodalität:** Ein Modell verarbeitet Text, Bild, Ton und Video gemeinsam statt getrennt.
- **Agenten:** Systeme führen mehrschrittige Aufgaben aus, rufen Werkzeuge auf und handeln, statt nur zu antworten.
- **Kleine Modelle:** Neben den Riesen entstehen kompakte Modelle, die lokal auf dem eigenen Gerät laufen, ohne Daten in eine fremde Wolke zu schicken.
- **Regulierung:** Mit der europäischen KI-Verordnung wird erstmals nach Risiko unterschieden statt nach Technik.

Was in all dem unverändert bleibt: Es sind Automaten, die Wahrscheinlichkeiten schätzen. Die Fähigkeiten wachsen erstaunlich schnell, die grundlegende Funktionsweise nicht.

[^tesler]: Zugeschrieben nach Douglas R. Hofstadter: _Gödel, Escher, Bach_, Basic Books, 1979, wo die Formel als "Teslers Theorem" zitiert wird.
