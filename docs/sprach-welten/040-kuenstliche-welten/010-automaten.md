---
title: Automaten
title_meta: "Automaten: Von der Turingmaschine zum Halteproblem"
sidebar_label: Automaten
sidebar_position: 1
description: "Was ist ein Automat im Sinne von Alan Turing? Eine verständliche Einführung in Turingmaschinen, Berechenbarkeit, das Halteproblem und Komplexität."
keywords:
  - Automaten
  - Turingmaschine
  - Alan Turing
  - Berechenbarkeit
  - Halteproblem
  - Komplexität
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
# slug:
# image:
---

## Was ist ein Automat?

Wenn wir im Alltag von Automaten sprechen, denken wir an Kaffeemaschinen oder Fahrkartenschalter. In der Informatik meint das Wort etwas Abstrakteres: ein Automat ist eine Maschine, die stur einer Regel folgt. Sie liest ein Zeichen, schaut in ihrer Regeltabelle nach, ändert ihren inneren Zustand und macht weiter. Kein Verstehen, kein Nachdenken, keine Intuition. Nur Regeln.

Genau darin liegt die Kraft dieses Begriffs. Wer verstehen will, was Computer und später künstliche Intelligenz grundsätzlich können, muss zuerst wissen, was eine regelfolgende Maschine überhaupt ist und wo ihre Grenzen liegen.

## Turings Idee

Der britische Mathematiker Alan Turing stellte sich 1936 eine denkbar einfache Maschine vor: ein unendlich langes Papierband, eingeteilt in Felder, und einen Schreib-Lese-Kopf, der über dem Band steht.[^turing] Die Maschine kann nur vier Dinge tun:

- das Zeichen im aktuellen Feld lesen,
- ein Zeichen hineinschreiben,
- ein Feld nach links oder rechts rücken,
- in einen anderen Zustand wechseln.

Mehr nicht. Was sie in jedem Schritt tut, steht in einer endlichen Tabelle: "Wenn du im Zustand 3 bist und eine 1 liest, dann schreibe 0, gehe nach rechts und wechsle in Zustand 5."

Das Verblüffende: Diese Maschine kann alles berechnen, was ein moderner Computer berechnen kann. Ihr Laptop ist schneller und bequemer, aber nicht mächtiger.

## Turingmaschine aus Klopapier und Steinchen

Man kann eine Turingmaschine tatsächlich nachbauen, ganz ohne Elektronik. Eine Rolle Toilettenpapier liefert das Band, jedes Blatt ist ein Feld. Steinchen oder Münzen sind die Zeichen: ein Steinchen bedeutet 1, ein leeres Blatt bedeutet 0. Ihre Zustandstabelle schreiben Sie auf einen Zettel, Ihr Zustand ist ein Streichholz, das Sie auf die aktuelle Zeile legen. Sie selbst sind der Schreib-Lese-Kopf.

Das ist keine Spielerei, sondern eine ernsthafte Pointe: Rechnen braucht keinen Chip. Es braucht ein Medium, Regeln und jemanden oder etwas, das die Regeln stumpf ausführt. Was Ihr Computer tut, tun Sie mit Klopapier auch. Nur eben sehr viel langsamer.

## Können Automaten alle klaren Fragen beantworten?

Es liegt nahe zu hoffen: Wenn eine Frage nur präzise genug gestellt ist, muss eine Maschine sie doch beantworten können. Turing hat gezeigt, dass diese Hoffnung falsch ist.

Sein berühmtestes Ergebnis ist das **Halteproblem**. Die Frage lautet: Gibt es ein Programm, das für jedes beliebige andere Programm zuverlässig vorhersagt, ob es irgendwann anhält oder ewig weiterläuft? Die Frage ist völlig klar gestellt. Und die Antwort lautet: Nein, ein solches Programm kann es nicht geben.

Der Beweis funktioniert über einen Widerspruch. Angenommen, es gäbe einen perfekten Halte-Prüfer. Dann könnte man eine boshafte Maschine bauen, die diesen Prüfer auf sich selbst anwendet und anschließend genau das Gegenteil tut: Sagt der Prüfer "sie hält an", läuft sie ewig weiter; sagt er "sie läuft ewig", hält sie sofort an. Der Prüfer hat also in jedem Fall unrecht. Damit kann es ihn nicht geben.

Das ist eine grundsätzliche Grenze, keine technische. Kein schnellerer Rechner, kein größeres Sprachmodell und kein Quantencomputer wird sie je überschreiten. Es gibt klar formulierte Fragen, die prinzipiell unentscheidbar sind.

## Endlich, unendlich, kompliziert

Automaten gibt es in unterschiedlichen Stärken, und die Unterschiede haben mit Gedächtnis zu tun.

Ein **endlicher Automat** hat nur endlich viele Zustände und kein Band. Er kann eine Ampelschaltung steuern oder prüfen, ob eine E-Mail-Adresse ein @ enthält. Aber er kann nicht zählen, wie viele Klammern noch offen sind, denn dafür bräuchte er unbeschränktes Gedächtnis.

Die **Turingmaschine** mit ihrem unendlichen Band steht am oberen Ende dieser Hierarchie. Zwischen beiden liegen weitere Modelle, etwa Automaten mit einem Stapelspeicher, die Klammern zählen können, aber sonst wenig.

Selbst dort, wo eine Aufgabe grundsätzlich lösbar ist, bleibt die Frage nach dem Aufwand. Manche Probleme lassen sich in vernünftiger Zeit lösen, andere erst nach Jahrmillionen Rechenzeit. Diese Unterscheidung zwischen "berechenbar" und "praktisch berechenbar" ist der Gegenstand der Komplexitätstheorie und der Grund, warum Verschlüsselung überhaupt funktioniert.

## Warum das hier steht

Dieses Kapitel handelt von künstlichen Welten und künstlicher Intelligenz. Alles, was auf den folgenden Seiten kommt, von Wahrscheinlichkeiten über neuronale Netze bis zu großen Sprachmodellen, läuft am Ende auf Automaten. Es sind sehr große, sehr schnelle, sehr eindrucksvolle Automaten. Aber die Grenzen, die Turing 1936 mit Papier und Bleistift gefunden hat, gelten für sie alle.

[^turing]: Alan M. Turing: _On Computable Numbers, with an Application to the Entscheidungsproblem_, Proceedings of the London Mathematical Society, 1936.
