---
title: Programme und Wahrscheinlichkeiten
title_meta: "Programme und Wahrscheinlichkeiten: Warum KI schätzt statt rechnet"
sidebar_label: Programme und Wahrscheinlichkeiten
sidebar_position: 2
description: "Klassische Programme folgen Regeln, KI arbeitet mit Wahrscheinlichkeiten. Warum das der entscheidende Unterschied ist und was Statistik damit zu tun hat."
keywords:
  - Programmierung
  - Wahrscheinlichkeit
  - Maschinelles Lernen
  - Statistik
  - Künstliche Intelligenz
  - Spamfilter
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
# slug:
# image:
---

## Drei Dinge, die die meisten überraschen

**Erstens:** Wenn Sie einem Sprachmodell zweimal dieselbe Frage stellen, bekommen Sie oft zwei verschiedene Antworten. Ein Taschenrechner tut das nie. Das ist kein Fehler, sondern Absicht.

**Zweitens:** Niemand hat einer KI beigebracht, was eine Katze ist. Es gibt keine Zeile Code, in der steht "Katze = vier Beine, Fell, Schnurrhaare". Es gibt nur Zahlen, die sich beim Betrachten vieler Bilder verschoben haben.

**Drittens:** Das, was heute als Denken der Maschinen verkauft wird, ist im Kern Statistik aus dem 18. Jahrhundert, ausgeführt auf sehr schneller Hardware.

## Wie programmiert man normalerweise?

Klassische Programme bestehen aus Regeln, die ein Mensch aufgeschrieben hat. Ein Steuerprogramm rechnet: "Wenn das Einkommen über diesem Betrag liegt, dann nimm jenen Satz." Eine Ampelsteuerung schaltet nach Zeitplan. Das sind Automaten in Turings Sinn, wie im [vorigen Kapitel](./010-automaten.md) beschrieben: Zeichen lesen, Tabelle befragen, weitermachen.

Diese Art zu programmieren funktioniert hervorragend, solange man die Regeln kennt. Und genau da liegt das Problem.

## Die Frage: Wie schreibt man eine Regel für "Katze"?

Versuchen Sie es. Vier Beine? Ein dreibeiniger Kater bleibt eine Katze. Fell? Nicht bei jeder Rasse. Schnurrhaare? Robben haben auch welche. Jede Regel, die Sie aufschreiben, hat Ausnahmen, und jede Ausnahme hat wieder Ausnahmen.

Dasselbe gilt für fast alles, was Menschen mühelos können: ein Gesicht erkennen, einen Witz verstehen, eine Handschrift lesen, Werbemüll von echter Post unterscheiden. Wir beherrschen diese Dinge, aber wir können nicht sagen, nach welchen Regeln wir sie beherrschen. Der Chemiker und Philosoph Michael Polanyi nannte das "stillschweigendes Wissen": Wir wissen mehr, als wir zu sagen wissen.[^polanyi]

Wenn sich die Regel nicht aufschreiben lässt, ist die klassische Programmierung am Ende. Also dreht man die Sache um.

## Die Antwort: nicht Regeln vorgeben, sondern Häufigkeiten zählen

Statt zu sagen, _was_ eine Katze ist, zeigt man dem Programm hunderttausend Bilder mit der Beschriftung "Katze" und hunderttausend ohne. Das Programm sucht selbst nach Mustern, die statistisch mit dem Wort zusammenfallen. Am Ende sagt es nicht "das ist eine Katze", sondern "mit 94 Prozent Wahrscheinlichkeit eine Katze".

Das ist der eigentliche Bruch. Ein klassisches Programm antwortet mit _ja_ oder _nein_. Ein lernendes Programm antwortet mit einer Zahl zwischen null und eins. Es weiß nichts, es schätzt.

Diese Denkweise ist alt. Thomas Bayes formulierte im 18. Jahrhundert die Regel, wie man eine Vermutung anpasst, sobald neue Belege eintreffen.[^bayes] Genau das tut maschinelles Lernen: Es startet mit zufälligen Vermutungen und korrigiert sie millionenfach an Beispielen. Künstliche Intelligenz und Statistik sind keine verwandten Fächer, sie sind über weite Strecken dasselbe Fach mit unterschiedlichem Marketing.

## Theorie und Praxis: der Spamfilter

Der Spamfilter ist das schönste Beispiel, weil man ihn ganz durchschauen kann.

Er zählt schlicht, wie oft ein Wort in Werbemüll vorkommt und wie oft in normaler Post. Taucht "Gewinnbenachrichtigung" in 4000 Spam-Mails auf und in drei echten, ist das Wort ein starker Hinweis. Der Filter verrechnet die Hinweise aller Wörter einer Mail zu einer Wahrscheinlichkeit. Liegt sie über einem Schwellenwert, wandert die Mail in den Spam-Ordner.

Niemand hat je die Regel "Mails mit Gewinnbenachrichtigung sind Spam" programmiert. Sie ist aus Ihrem eigenen Verhalten entstanden, jedes Mal, wenn Sie auf "Als Spam markieren" geklickt haben.

Die Grenzen sind dabei genauso gut sichtbar wie das Prinzip: Der Filter versteht kein einziges Wort. Er kann sich irren und tut es auch. Er wird schlechter, sobald Spammer ihre Sprache ändern. Und er ist nie besser als die Beispiele, aus denen er gelernt hat.

## Was daraus folgt

Große Sprachmodelle arbeiten nicht grundsätzlich anders als dieser Filter, nur ungleich größer. Sie schätzen, welches Wort als nächstes wahrscheinlich ist, und wählen dann eines aus den plausiblen Kandidaten aus. Deshalb bekommen Sie zweimal verschiedene Antworten. Deshalb erfinden solche Systeme gelegentlich Quellen: Eine erfundene Quelle sieht statistisch genauso plausibel aus wie eine echte.

Wer das im Kopf behält, liest jede Aussage über KI anders. Nicht "die Maschine hat erkannt", sondern "die Maschine hält es für wahrscheinlich".

[^polanyi]: Michael Polanyi: _The Tacit Dimension_, University of Chicago Press, 1966.

[^bayes]: Thomas Bayes: _An Essay towards solving a Problem in the Doctrine of Chances_, Philosophical Transactions of the Royal Society, 1763 (posthum veröffentlicht).
