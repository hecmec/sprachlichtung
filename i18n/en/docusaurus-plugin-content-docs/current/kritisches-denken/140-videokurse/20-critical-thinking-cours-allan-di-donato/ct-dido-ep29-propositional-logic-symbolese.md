---
title: "Propositional Logic - Symbolese"
sidebar_position: 28
keywords:
  - propositional logic
  - truth-functional propositions
  - logical operators
  - symbolic logic
  - conditional statements
  - translating arguments
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/o2_QMuy0i0g' />

&nbsp;

## Summary

After several episodes on categorical logic, this video circles back to a different family of propositions: **truth-functional** or **propositional logic**. Like categorical logic, it is concerned with the **form** or **structure** of arguments rather than their content. To capture that structure as clearly as possible, propositional logic uses its own artificial language, which Di Donato playfully calls **Symbolese**, reassuring viewers that it is far easier to learn than Latin.

### Statements as Building Blocks

Whereas the fundamental elements of categorical logic were **terms** (subject, predicate, middle), the fundamental elements of propositional logic are **statements** or **propositions**, hence the name. Statements can be **simple** (also called **atomic**), such as "fast foods tend to be unhealthy," or **compound**, such as "Chuck Berry plays the guitar and Fats Domino plays the piano," which joins two atomic statements with the operator *and*.

The label **truth-functional** captures the key idea: the truth value of a compound proposition depends entirely on the truth values of its component parts. The conjunction above is true only if both atomic statements are true. As always, the focus is on **validity**, a property of form rather than content. Form does not guarantee truth, but it preserves truth as long as we start with true premises. By representing only statement forms and argument forms, symbolic logic makes formal relationships visible and removes confusion caused by the wording of a proposition.

### The Vocabulary of Symbolese

The language has several kinds of symbols:

- **Statement variables**: lowercase letters *p* through *z* stand for any proposition and are used to build general **statement forms** (e.g., *p · q*). Substituting specific content gives a **substitution instance**.
- **Statement abbreviations**: uppercase letters *A* through *Z* abbreviate specific propositions. "I am Batman" can become *B*, no matter how long or complex the original sentence is.
- The **conclusion indicator** (the **tri-dot**, which Di Donato calls the "Predator sight") translates as *therefore* or *so*.

### The Operators

Operators connect or modify statements and determine the overall truth value:

- **Negation** (the **tilde**, ~) means *not* or "it is not the case that," reversing the truth value of a proposition.
- The **hypothetical** or conditional (**horseshoe** ⊃ or **arrow** →) translates *if p then q* and expresses **material implication**.
- The **disjunction** (the **wedge** ∨) joins **disjuncts** to express *either p or q*.
- The **conjunction** (the **dot** · or **ampersand** &) joins **conjuncts** to express *both p and q*.
- The **biconditional** (the **tri-bar** ≡ or **double-sided arrow** ↔) expresses **material equivalence**, *p if and only if q*.
- **Brackets** (parentheses) are essential for removing ambiguity in compound statements with several operators.

### How Each Operator Behaves

Each operator has its own truth conditions:

- A **hypothetical** is always true *except* when the antecedent is true and the consequent is false.
- A **disjunction** is true as long as at least one disjunct is true; it is false only when both are false.
- A **conjunction** is true *only* when both conjuncts are true.
- A **biconditional** is true *only* when both components share the same truth value.

Di Donato also notes that some compound propositions are **not** truth-functional. With connectives like *because*, *believes that*, or *hopes that*, the truth of the whole is not fixed by the truth of the parts. "Joe failed because he didn't turn in his homework" requires a genuine causal link, and "Joe believed the sun revolves around the earth" is true so long as Joe holds that belief, regardless of whether the belief itself is true.

### Translating English into Symbolese

A large part of the lesson is learning which English words signal which operator. For **hypotheticals**, the word *if* introduces the **antecedent** and *then* the **consequent**. The tricky phrase *only if* points instead to the **consequent**, so "p only if q" is *p ⊃ q*. A **necessary condition** is the consequent; a **sufficient condition** is the antecedent. Phrases like *implies*, *entails*, *given that*, *provided that*, and *on the condition that* all point to the antecedent, while *is implied by* or *is entailed by* point to the consequent.

For **disjunctions**, watch for *either…or*, plain *or*, and the counter-intuitive *unless* ("p unless q" equals *p ∨ q*). **Conjunctions** are signaled not only by *and* and *both…and* but also by *although*, *but*, *even though*, *however*, *nevertheless*, and *yet*. The **biconditional** appears as *if and only if*, *a necessary and sufficient condition*, and *just in case*.

### Worked Examples

Di Donato closes with practice translations:

- "The ringing of the bell is sufficient for the dog to start salivating" → *R ⊃ D* (the sufficient item is the antecedent).
- "Mark watches TV unless Jim goes to the bank" → *M ∨ J*.
- "It's not the case that both Sean and Deirdre are dancers" → *~(S · D)*.
- "Neither Bill nor Jeff play football" → *~(B ∨ J)*, a negated disjunction.
- "Jules likes pizza even though Luigi likes lasagna just in case either Moshe likes mozzarella or Henry likes Limburger" → *(J · L) ≡ (M ∨ H)*, showing how brackets keep complex forms clear.

The episode ends by previewing the next topic: using these elements to examine the different types of **syllogisms** built from these propositions.
