---
title: Conditional Probability Fallacy
title_meta: Conditional Probability Fallacy
sidebar_label: Conditional Probability
sidebar_position: 1
description: Description of the conditional probability fallacy (confusion of the inverse)
keywords:
  - fallacies
  - probability
  - critical thinking
  - conditional probability
  - confusion of the inverse
last_update:
  date: 2026-06-07
  author: Immanuel Lupinus
completeness: 4/5
draft: false
translation_status: mixed
custom_translation_overwritten: false
---

<!--t src=5900d1c5-->

:::tip In brief
The conditional probability $P(A \mid B)$ is confused with its inverse $P(B \mid A)$.

_„If A, then often B“ does not mean „If B, then often A“._
:::

<!--t src=23594b0b-->

## Definition

<!--t src=afa2ea22-->

The **conditional probability fallacy** (confusion of the inverse) equates two different conditional probabilities: the probability of $A$ given $B$ and that of $B$ given $A$.

<!--t src=64e3e9e1-->

The error fails to recognise that $P(A \mid B)$ and $P(B \mid A)$ are in general **not** equal. The two are related via **Bayes' theorem**, which additionally takes the base rates $P(A)$ and $P(B)$ into account:

<!--t src=a0d9b202-->

$$P(A \mid B) = \frac{P(B \mid A)\,\cdot\,P(A)}{P(B)}$$

<!--t src=3c24b250-->

The fallacy has the following form:

<!--t src=3044340b-->

1. $P(B \mid A)$ is high (e.g. „almost all A are B“).
2. In the case at hand, $B$ is present.
3. Therefore $P(A \mid B)$ is likewise high.

<!--t src=4a6850df-->

As long as the base rates are not taken into account, this inference is not admissible. It is the structural root of the **base rate fallacy** and of the **prosecutor's fallacy**.

<!--t src=5a5d0e48-->

Also known as: _confusion of the inverse_ / _conditional probability fallacy_

<!--t src=2851dcb3-->

## Related fallacies

<!--t src=4d08b756-->
<!-- list similar fallacies -->

<!--t src=880a89be-->
- **Base rate fallacy** &mdash; the most common manifestation, when the base rate is additionally neglected.
- **Prosecutor's fallacy** &mdash; the forensic variant: $P(\text{evidence} \mid \text{innocent})$ is confused with $P(\text{innocent} \mid \text{evidence})$.
- **Converse error** &mdash; the logical counterpart: there the inadmissible reversal of the conditional instead of the conditional probability.

<!--t src=9dbba01b-->

## Examples

<!--t src=a67a7a61-->

### Example 1

<!--t src=5422e642-->
<!-- description of example one -->

<!--t src=102f7a52-->
> "Most traffic fatalities were not wearing a helmet &mdash; so a helmet hardly protects."

<!--t src=ae523f2a-->

What is asked for is $P(\text{fatality} \mid \text{no helmet})$, but what is given is something like $P(\text{no helmet} \mid \text{fatality})$. Without the base rate (how many people wear no helmet at all) the inference is worthless.

<!--t src=f350657d-->

### Example 2

<!--t src=c7d6981c-->
<!-- description of example two -->

<!--t src=f576a906-->

> In the courtroom: „The probability that an innocent person shows this DNA trace is 1 in a million. So the defendant is innocent with that probability.“

<!--t src=e298db25-->

This confuses $P(\text{trace} \mid \text{innocent})$ with $P(\text{innocent} \mid \text{trace})$. With many possible suspects, despite a rare trace there can be quite a few innocent people who match by chance.

<!--t src=69b1092f-->

## Sources

<!--t src=63102e9b-->
<!-- Where is this fallacy described. (Wikipedia, etc.) -->

<!--t src=702a53c3-->

- [Wikipedia: Confusion of the inverse](https://en.wikipedia.org/wiki/Confusion_of_the_inverse)
- [Wikipedia: Prosecutor's fallacy](https://en.wikipedia.org/wiki/Prosecutor%27s_fallacy)
