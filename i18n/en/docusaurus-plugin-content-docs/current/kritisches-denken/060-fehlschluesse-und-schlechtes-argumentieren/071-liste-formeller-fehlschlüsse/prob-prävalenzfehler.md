---
title: Base Rate Fallacy
title_meta: Base Rate Fallacy
sidebar_label: Base Rate Fallacy
sidebar_position: 1
description: Description of the base rate fallacy (base rate neglect)
keywords:
  - fallacies
  - probability
  - critical thinking
  - base rate fallacy
  - base rate neglect
last_update:
  date: 2026-06-07
  author: Immanuel Lupinus
completeness: 4/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=29691d2e-->
:::tip In brief
The base rate (prevalence) of a characteristic is ignored and only the hit rate of a test is considered.

_No judgement without the base rate._
:::

<!--t src=23594b0b-->
## Definition

<!--t src=c1afa2c6-->
The **base rate fallacy** (base rate neglect) consists in overlooking, when judging a probability, the **base rate** of a characteristic in the population (its prevalence) and relying solely on the seemingly high informativeness of a test or indicator.

<!--t src=86fbd915-->
The error ignores the fact that, with a **rare** characteristic, even a good test yields many **false positives**, because the large healthy majority numerically outweighs the few genuine hits.

<!--t src=3c24b250-->
The fallacy has the following form:

<!--t src=1af807c1-->
1. The test detects the characteristic with a high hit rate (e.g. 99%).
2. For a given person the test comes out positive.
3. Therefore the person has the characteristic with about 99% probability.

<!--t src=2522cf33-->
Correctly, the question „How likely is the characteristic *given a positive test*?“ requires the base rate – it is taken into account via **Bayes' theorem**.

<!--t src=d370887f-->
### Worked example

<!--t src=64d67d95-->
A disease has a prevalence of $0{,}1\,\%$. The test detects sick people at $99\,\%$ (sensitivity) and gives a false-positive result in $5\,\%$ of healthy people. For $100\,000$ people:

<!--t src=6365a438-->
- Sick: $100$ → of whom positive: $\approx 99$
- Healthy: $99\,900$ → of whom falsely positive: $\approx 4995$

<!--t src=307997a8-->
$$P(\text{sick} \mid \text{positive}) = \frac{99}{99 + 4995} \approx 1{,}9\,\%$$

<!--t src=deebfbed-->
Despite a „99% test“, a person who tests positive is healthy with over $98\,\%$ probability.

<!--t src=34d355ad-->
Also known as: _base rate fallacy_ / _base rate neglect_

<!--t src=2851dcb3-->
## Related fallacies

<!--t src=4d08b756-->
<!-- list similar fallacies -->

<!--t src=bab88b3d-->
- **Conditional probability fallacy** – closely related: the base rate fallacy is at its core a confusion of $P(A \mid B)$ and $P(B \mid A)$.
- **Prosecutor's fallacy** – the forensic variant of the same error.
- **Gambler's fallacy** – related as a typical probability error.

<!--t src=9dbba01b-->
## Examples

<!--t src=a67a7a61-->
### Example 1

<!--t src=5422e642-->
<!-- description of example one -->

<!--t src=d36742ec-->
> „The drug test is 99% reliable and positive for you – so you are a user with 99% probability.“

<!--t src=9dfed815-->
If use is rare in the tested group, the false positives predominate. The actual probability is often far below 99% (see worked example).

<!--t src=f350657d-->
### Example 2

<!--t src=c7d6981c-->
<!-- description of example two -->

<!--t src=bc30a8ab-->
> A facial recognition system „with 99.9% accuracy“ flags a person in a crowd. The police treat them as the almost certainly wanted person.

<!--t src=bdc146ac-->
If one searches for a single person among millions, even a tiny error rate produces far more false matches than genuine ones.

<!--t src=69b1092f-->
## Sources

<!--t src=63102e9b-->
<!-- Where is this fallacy described. (Wikipedia, etc.) -->

<!--t src=5631bf19-->
- [Wikipedia: Base rate fallacy](https://en.wikipedia.org/wiki/Base_rate_fallacy)
