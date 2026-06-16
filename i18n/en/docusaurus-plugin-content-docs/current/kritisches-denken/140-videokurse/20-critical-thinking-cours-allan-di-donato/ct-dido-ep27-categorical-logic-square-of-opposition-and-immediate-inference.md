---
title: "Categorical Logic - Square of Opposition & Immediate Inference"
sidebar_position: 26
keywords:
  - square of opposition
  - immediate inference
  - categorical propositions
  - logical equivalence
  - conversion obversion contraposition
  - subalternation
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/40KlV2t6zWo' />

&nbsp;

## Summary

Building on the previous episode about categorical propositions, this video introduces two related tools: the **square of opposition** (a diagram) and **immediate inference** (the deductions we can draw with it). Together they let us judge the truth value of related propositions and transform statements into **logically equivalent** ones, skills that become essential once we start analyzing arguments.

### The Square of Opposition

The square is a balanced, symmetrical diagram whose four corners hold the four types of categorical proposition: **A, E, I, O** (read left to right, top to bottom). The two dimensions of the square encode the two features of a proposition:

- **Altitude (top vs. bottom) marks quantity.** Universals (A, E) sit on top; particulars (I, O) sit at the base.
- **Side (left vs. right) marks quality.** Affirmatives (A, I) sit on the left; negatives (E, O) on the right.

All relationships assume the propositions share the same subject and predicate terms. The arrows between the corners represent four kinds of relationship.

### The Four Relationships

**Contradictories** (A↔O and E↔I) rest on the law of non-contradiction. A pair must have opposite truth values: they cannot both be true and cannot both be false. The truth of one implies the falsity of the other, and vice versa. This is the strongest link, and it always lets us infer the partner's truth value.

**Contraries** (A and E) cannot both be true, but they can both be false. So the truth of one implies the falsehood of the other, while the falsity of one tells us nothing. (Di Donato's example: belief systems treated as conjunctions of propositions: two systems can both be false, each containing a different false belief.)

**Subcontraries** (I and O) are the mirror image: they cannot both be false, but they can both be true. The falsity of one implies the truth of the other, yet the truth of one tells us nothing about the other.

**Alternation (subalternation)** runs vertically between a **superaltern** (the universal above) and a **subaltern** (the particular below): A↔I and E↔O.

- *Superalternation:* the truth of the upper implies the truth of the lower, but the falsity of the upper implies nothing.
- *Subalternation:* the falsity of the lower implies the falsity of the upper, but the truth of the lower implies nothing.

### Immediate Inference

**Immediate inference** means drawing a conclusion from a single premise without the mediation of any other premise. Knowing the truth value of one proposition, the square lets us judge the other three, within limits. If "All dragons are extinct" (A) is true, then E is false (contraries), I is true (subalternation), and O is false (contradictory).

But the square also has gaps. From a *false* E proposition we can infer its contradictory I is true, yet A and O remain **unknown**: the falsity of a contrary determines nothing, and superimplication and subalternation both fail to reach them. Some corners simply cannot be deduced from certain starting points.

### Logical Equivalence and the Three Transformations

Two propositions are **logically equivalent** if and only if they always share both the same truth value *and* the same meaning. (This is stronger than **material implication**, which guarantees only matching truth values.) A transformation yields a new statement, but it expresses the same proposition, since a proposition is the meaning, not the statement. Each transformation is itself a form of immediate inference. There are three:

**Conversion** simply swaps the subject and predicate terms. It is the simplest move, but only the contradictories **E and I** may be converted. "No human is a fish" converts validly to "No fish is a human." Converting an A proposition fails: "All circles are geometric figures" does not equal "All geometric figures are circles."

**Obversion** takes two steps: (1) change the quality (affirmative ↔ negative) without changing the quantity, and (2) replace the predicate with its **term complement** (e.g. "Italian" becomes "non-Italian"). Any of the four types can be obverted. A↔E and I↔O switch under obversion. Example: "All real pizza is Italian" obverts to "No real pizza is non-Italian."

**Contraposition** also takes two steps: (1) swap subject and predicate (as in conversion), and (2) replace each term with its complement. Like conversion it works on only two types, but here the other pair of contradictories, **A and O**. The original is the *contraponend*, the result the *contrapositive*. Example: "Some dessert is not ice cream" becomes "Some non-ice-cream is not non-dessert."

### Putting It Together

The transformations can be combined with the square to reach a target statement. Di Donato works a chained example (assuming existential import so that something capable of reasoning exists): starting from a false O proposition, he contraposes it, then applies superalternation and conversion to determine the truth value of the goal statement about humans. Different routes through the square yield the same result. The takeaway is that mastery comes through practice. The next episode turns to **categorical syllogisms**.
