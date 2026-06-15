---
title: "A Priori Probability"
sidebar_position: 20
keywords:
  - a priori probability
  - probability calculations
  - conjunction rule
  - permutations and combinations
  - independent and dependent events
  - types of averages
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/gmf5pdW_3U8' />

&nbsp;

## Summary

Building on the previous discussion of mathematical certainty, this lecture turns to **probability**: the likelihood that something is the case, which always comes in degrees. Since only perfect inductions yield certainty and those are rare, we usually operate in the realm of probability. There are two kinds, and this video focuses almost entirely on the first.

### A Priori vs. A Posteriori Probability

**A priori probability** (Latin for "from what comes before") is purely mathematical, logical, and statistical. It is independent of events or experience and can be computed without observing anything in the world, for example the chance of winning a lottery you have never run. **A posteriori probability** (Latin for "from what comes after") is empirical, scientific, and experimental. It depends on accumulated observational data, for example the chance that a 20-year-old man lives to 75.

A natural question is why we speak of probability rather than certainty if the calculations are mathematical. We *can* have mathematical certainty about the calculations themselves and know an exact probability, but the result still only describes the chance that something occurs. Numbers have no causal power, and whether an event actually happens is influenced by factors beyond the math.

### Exclusive (Single) Events

For an **exclusive event**, taken by itself and not combined with or dependent on any other, the formula is simple: divide the number of **target events** (T) that satisfy the criteria by the number of **possible outcomes** (P). So the probability of A equals T / P.

- Heads on a coin toss: 1 target out of 2 outcomes = 1/2 (50%).
- Rolling a six on a die: 1 out of 6.
- Drawing a particular card: 1 out of 52.

### Independent Events

**Independent events** are multiple events where one has no effect on another. To combine them, compute each event's odds separately and multiply, using the **restricted conjunction rule**: P(A and B) = P(A) × P(B).

- Two coins both heads: 1/2 × 1/2 = 1/4.
- One heads and one tails: because two of the four combinations match the criterion, it reduces to a 2/2 chance on the first flip and 1/2 on the second = 1/2.
- Two sixes on dice: 1/6 × 1/6 = 1/36.
- A six and a four: two target events on the first roll, so 2/36 = 1/18.

### Dependent Events

**Dependent events** are connected so that each influences the next. Drawing cards without replacement is the classic case: the second draw has different odds because the deck has changed. The **general conjunction rule** handles both cases: P(A and B) = P(A) × P(B given A), where "B given A" is the probability of B occurring if A has occurred. For independent events, P(B given A) simply equals P(B), so this rule generalizes the restricted one.

Drawing two aces without replacement: P(A) = 4/52, P(B given A) = 3/51 (one fewer ace, one fewer card). Multiplying gives roughly 1 in 221.

### Permutations and Combinations

To count how many arrangements are possible, the **simple permutation formula** uses the **factorial** (n!): multiply every whole number from 1 up to n.

- Arrangements of three letters (ABC): 3! = 6.
- Five people in five chairs: 5! = 120.
- A 10-digit code using each digit once: 10! = 3,628,800.

When we want only a **subset** of r items from n, we use n! / (n − r)!. A three-number code from a 10-digit keypad with no repeats: 10! / 7! = 10 × 9 × 8 = 720.

Because real codes usually *allow repetition*, we need the **complex permutation formula**: raise the number of options per position to the power of the number of positions.

- Three-letter combinations from ABC with repeats: 3³ = 27.
- A 10-digit code allowing repeats: 10¹⁰ = 10 billion.
- A safe with three 15-number dials: 15³ = 3,375.

Notice that guessing the correct three-letter combination returns us to the basic rule: for each position there is 1 target out of 3 options, so 1/3 × 1/3 × 1/3 = 1/27.

### Back to A Posteriori Probability and Averages

The key contrast is that a priori probability can be calculated exactly *before* any event, whereas **a posteriori probability** cannot be calculated until *after* events and observations. This is why it is tied to the **scientific method**, which provides guidelines for forming and testing hypotheses, the topic of the next video. Examples include presidential approval polls, which must actually be taken, and computing an **average**, which requires collected data such as test scores.

Crucially, "average" is **ambiguous**. There are three types:

- **Mean**: the sum of values divided by their count.
- **Median**: the middle value when data is ordered.
- **Mode**: the value occurring most frequently.

For a small firm's salaries, the mean might be \$65,000, the median \$45,000, and the mode \$30,000, where nearly half the employees fall. The chosen average can dramatically change an argument about income, taxes, life expectancy, or global temperatures. The closing warning: we cannot evaluate information critically when terms are imprecise or when we ignore distinctions like the kinds of average, echoing earlier problems of **vagueness and ambiguity**.
