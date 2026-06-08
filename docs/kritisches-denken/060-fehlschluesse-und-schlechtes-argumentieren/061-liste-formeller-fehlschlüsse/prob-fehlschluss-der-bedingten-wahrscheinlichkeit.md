---
title: "Fehlschluss der bedingten Wahrscheinlichkeit"
title_meta: "Fehlschluss der bedingten Wahrscheinlichkeit"
sidebar_label: Bedingte Wahrscheinlichkeit
sidebar_position: 1
description: "Beschreibung des Fehlschlusses der bedingten Wahrscheinlichkeit (Confusion of the Inverse)"
keywords:
  - Fehlschlüsse
  - Fallacies
  - Wahrscheinlichkeit
  - kritisches Denken
  - bedingte Wahrscheinlichkeit
  - Confusion of the Inverse
last_update:
  date: 2026-06-07
  author: Immanuel Lupinus
completeness: 1/5
draft: true
# slug:
# image:
---

:::tip Kurz
Die bedingte Wahrscheinlichkeit $P(A \mid B)$ wird mit ihrer Umkehrung $P(B \mid A)$ verwechselt.

_„Wenn A, dann oft B“ heisst nicht „Wenn B, dann oft A“._
:::

## Definition

Der **Fehlschluss der bedingten Wahrscheinlichkeit** (Vertauschung des Bedingten) setzt zwei verschiedene bedingte Wahrscheinlichkeiten gleich: die Wahrscheinlichkeit von $A$ unter der Bedingung $B$ und die von $B$ unter der Bedingung $A$.

Der Fehler verkennt, dass $P(A \mid B)$ und $P(B \mid A)$ im Allgemeinen **nicht** gleich sind. Beide hängen über das **Bayes-Theorem** zusammen, das zusätzlich die Grundraten $P(A)$ und $P(B)$ einbezieht:

$$P(A \mid B) = \frac{P(B \mid A)\,\cdot\,P(A)}{P(B)}$$

Der Fehlschluss hat die folgende Form:

1. $P(B \mid A)$ ist hoch (z. B. „fast alle A sind B“).
2. Im vorliegenden Fall liegt $B$ vor.
3. Also ist $P(A \mid B)$ ebenfalls hoch.

Solange die Grundraten nicht berücksichtigt werden, ist dieser Schluss nicht zulässig. Er ist die strukturelle Wurzel des **Prävalenzfehlers** und der **Prosecutor's Fallacy**.

EN: _confusion of the inverse_ / _conditional probability fallacy_

## Verwandtschaft

<!-- zähle ähnliche Fehlschlüsse auf -->

- **Prävalenzfehler** – die häufigste Erscheinungsform, wenn zusätzlich die Grundrate vernachlässigt wird.
- **Prosecutor's Fallacy** – die forensische Variante: $P(\text{Spur} \mid \text{unschuldig})$ wird mit $P(\text{unschuldig} \mid \text{Spur})$ verwechselt.
- **Umkehrung des Konditionals** – das logische Pendant: dort die unzulässige Umkehrung des Konditionals statt der bedingten Wahrscheinlichkeit.

## Beispiele

### Beispiel 1

<!-- Beschreibung Beispiel eins -->

> „Die meisten Verkehrstoten trugen keinen Helm – also schützt ein Helm kaum.“

Gefragt wäre $P(\text{Unfalltod} \mid \text{kein Helm})$, angegeben wird aber so etwas wie $P(\text{kein Helm} \mid \text{Unfalltod})$. Ohne die Grundrate (wie viele Personen überhaupt keinen Helm tragen) ist der Schluss wertlos.

### Beispiel 2

<!-- Beschreibung Beispiel zwei -->

> Im Gerichtssaal: „Die Wahrscheinlichkeit, dass eine unschuldige Person diese DNA-Spur zeigt, beträgt 1 zu einer Million. Also ist der Angeklagte mit dieser Wahrscheinlichkeit unschuldig.“

Das verwechselt $P(\text{Spur} \mid \text{unschuldig})$ mit $P(\text{unschuldig} \mid \text{Spur})$. Bei vielen möglichen Verdächtigen kann es trotz seltener Spur etliche zufällig passende, unschuldige Personen geben.

## Quellen

<!-- Wo wird dieser Fehlschluss beschrieben. (Wikipedia, etc) -->

- [Wikipedia: Confusion of the inverse](https://en.wikipedia.org/wiki/Confusion_of_the_inverse)
- [Wikipedia: Prosecutor's fallacy](https://en.wikipedia.org/wiki/Prosecutor%27s_fallacy)
