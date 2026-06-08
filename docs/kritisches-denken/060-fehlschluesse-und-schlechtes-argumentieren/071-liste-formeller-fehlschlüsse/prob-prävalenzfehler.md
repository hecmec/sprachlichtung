---
title: "Prävalenzfehler"
title_meta: "Prävalenzfehler"
sidebar_label: Prävalenzfehler
sidebar_position: 1
description: "Beschreibung des Prävalenzfehlers bzw. der Vernachlässigung der Grundrate (Base Rate Fallacy)"
keywords:
  - Fehlschlüsse
  - Fallacies
  - Wahrscheinlichkeit
  - kritisches Denken
  - Prävalenzfehler
  - Base Rate Fallacy
last_update:
  date: 2026-06-07
  author: Immanuel Lupinus
completeness: 4/5
draft: false
# slug:
# image:
---

:::tip Kurz
Die Grundhäufigkeit (Prävalenz) eines Merkmals wird ignoriert und nur die Trefferrate eines Tests beachtet.

_Ohne Grundrate kein Urteil._
:::

## Definition

Der **Prävalenzfehler** (Vernachlässigung der Grundrate) besteht darin, bei der Beurteilung einer Wahrscheinlichkeit die **Grundhäufigkeit** eines Merkmals in der Bevölkerung (die Prävalenz) zu übersehen und sich allein an der scheinbar hohen Aussagekraft eines Tests oder Indizes zu orientieren.

Der Fehler ignoriert, dass bei einem **seltenen** Merkmal selbst ein guter Test viele **falsch positive** Ergebnisse liefert, weil die grosse gesunde Mehrheit die wenigen echten Treffer zahlenmässig übertrifft.

Der Fehlschluss hat die folgende Form:

1. Der Test erkennt das Merkmal mit hoher Trefferquote (z. B. 99 %).
2. Bei einer Person fällt der Test positiv aus.
3. Also hat die Person das Merkmal mit etwa 99 % Wahrscheinlichkeit.

Korrekt verlangt die Frage „Wie wahrscheinlich ist das Merkmal *bei positivem Test*?“ die Grundrate – sie wird über das **Bayes-Theorem** berücksichtigt.

### Rechenbeispiel

Eine Krankheit hat eine Prävalenz von $0{,}1\,\%$. Der Test erkennt Kranke zu $99\,\%$ (Sensitivität) und liefert bei Gesunden in $5\,\%$ ein falsch positives Ergebnis. Bei $100\,000$ Personen:

- Kranke: $100$ → davon positiv: $\approx 99$
- Gesunde: $99\,900$ → davon fälschlich positiv: $\approx 4995$

$$P(\text{krank} \mid \text{positiv}) = \frac{99}{99 + 4995} \approx 1{,}9\,\%$$

Trotz „99-%-Test“ ist eine positiv getestete Person mit über $98\,\%$ Wahrscheinlichkeit gesund.

EN: _base rate fallacy_ / _base rate neglect_

## Verwandtschaft

<!-- zähle ähnliche Fehlschlüsse auf -->

- **Fehlschluss der bedingten Wahrscheinlichkeit** – eng verwandt: Der Prävalenzfehler ist im Kern eine Vertauschung von $P(A \mid B)$ und $P(B \mid A)$.
- **Prosecutor's Fallacy** – die forensische Variante desselben Fehlers.
- **Spielerfehlschluss** – verwandt als typischer Wahrscheinlichkeitsfehler.

## Beispiele

### Beispiel 1

<!-- Beschreibung Beispiel eins -->

> „Der Drogentest ist zu 99 % zuverlässig und bei dir positiv – also bist du mit 99 % Wahrscheinlichkeit Konsument.“

Ist Konsum in der getesteten Gruppe selten, überwiegen die falsch Positiven. Die tatsächliche Wahrscheinlichkeit liegt oft weit unter 99 % (siehe Rechenbeispiel).

### Beispiel 2

<!-- Beschreibung Beispiel zwei -->

> Eine Gesichtserkennung „mit 99,9 % Genauigkeit“ schlägt auf einer Person in einer Menschenmenge an. Die Polizei behandelt sie als beinahe sicher gesuchte Person.

Sucht man eine einzige Person unter Millionen, erzeugt selbst eine winzige Fehlerrate weit mehr Fehltreffer als echte Treffer.

## Quellen

<!-- Wo wird dieser Fehlschluss beschrieben. (Wikipedia, etc) -->

- [Wikipedia: Prävalenzfehler](https://de.wikipedia.org/wiki/Pr%C3%A4valenzfehler)
- [Wikipedia: Base rate fallacy](https://en.wikipedia.org/wiki/Base_rate_fallacy)
