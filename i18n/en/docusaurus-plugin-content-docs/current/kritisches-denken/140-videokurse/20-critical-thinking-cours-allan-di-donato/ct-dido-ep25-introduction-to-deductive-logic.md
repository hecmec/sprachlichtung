---
title: "Introduction to Deductive Logic"
sidebar_position: 24
keywords:
  - deductive logic
  - validity and soundness
  - formal logic
  - propositions
  - categorical propositions
  - necessary and sufficient conditions
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/BmbPbtMlG0Y' />

&nbsp;

## Summary

After completing the course's long overview of induction, scientific method, and empirical observation, this episode shifts away from **empiricism** toward what is more purely rational: **deductive logic**. It opens with a review of foundational concepts before previewing the types of propositions that the coming videos will explore in depth.

### Arguments: Premises and Conclusions

An **argument** is a structured group of statements or propositions intended to perform a rational, persuasive task. Every argument, whether deductive or inductive, has the same two basic parts: **premises** (the initial supporting claims) and a **conclusion** (the final resulting claim). The conclusion is meant to follow from the premises, and the purpose is to convince the reader that the conclusion is true, *assuming* the premises are true.

### Validity, Truth, and Soundness

One of the most important qualities a deductive argument can possess is **validity**. Validity applies only to deductive arguments, and it is a property of the argument itself, not of the individual claims within it. To master it, we need both the concept and the rules or techniques for testing for it (the tests come in later videos).

An argument is **valid** whenever its premises are formally related to its conclusion in such a way that it would be logically impossible for all the premises to be true and the conclusion false. The key word is *if*: in a valid argument, **if** the premises are true, then the conclusion **must** be true. Validity is therefore a "truth preservative."

A separate desirable quality, which strictly belongs to the parts of the argument rather than the argument itself, is **truth**. When an argument is both valid and has true premises, it is **sound**, which is the gold standard.

Several consequences follow from these definitions:

- A valid argument **can** have a false conclusion, but only if it also has at least one false premise.
- If a conclusion is false and the argument is valid, there must be at least one false premise.
- If the conclusion is false but the premises are all true, the argument cannot be valid.

A valid argument with false premises can even yield a *true* conclusion. The video illustrates this with a series of examples:

- *All dogs are four-legged animals; Scooby-Doo is a dog; therefore Scooby-Doo has four legs.* Valid, true premises, true conclusion.
- *All dogs are four-legged animals; Big Bird is a dog; therefore Big Bird has four legs.* Valid, but the false minor premise ("Big Bird is a dog") produces a false conclusion.
- *All dogs are two-legged animals; Big Bird is a dog; therefore Big Bird has two legs.* Valid, with two false premises, yet a true conclusion.

The lesson: validity only says that *if* the premises are true the conclusion must be true. It is a logical mistake to think that false premises guarantee a false conclusion.

### Formal vs. Material Logic

**Formal logic** is the branch concerned with the principles and methods of deductive reasoning, deducing conclusions from propositions. It deals with the **form** of an argument: how the premises are structured. The example *All cats are dogs; Tom is a cat; therefore Tom is a dog* is valid purely because of its structure, even though a premise is false (swap "dogs" for "mammals" and the form is obviously fine).

This is the difference between formal and material logic. When analyzing form, it is often useful to **replace words with symbols** to reveal structure more clearly, which necessarily hides the content. Both kinds of logic matter, but a nonsensical premise does not destroy validity.

### Propositions and Declarative Sentences

A reminder on terminology: an *argument* cannot be true or false; only premises and conclusions can be, because they are propositions. Conversely, an argument can be valid or invalid, while propositions cannot.

A **proposition** is the meaning of a **declarative sentence**, and a declarative sentence is one that makes a truth claim. A proposition must therefore be either true or false. A simple test is to ask whether the sentence could be true. Questions ("Do you want to go to the movies?"), imperatives ("Take out the trash"), and exclamations ("Groovy!") are not declarative sentences. Exceptions exist: a **rhetorical question** functions as a statement, and exclamations can carry claims ("That was an awesome movie") that have a truth value even when subjective.

Crucially, many different sentences can express a single proposition. Five sentences such as "We have to work hard," "We must labor diligently," and even a Latin version all share **one** proposition, because the proposition is the *meaning*. This insight is essential to translation work and explains how people who speak different languages can communicate.

### Five Types of Propositions (Preview)

The coming videos will reason with five proposition types. The first, **categorical**, gets its own treatment (categorical logic); the other four are handled together under **propositional** or **truth-functional logic**.

- **Categorical propositions** concern relationships among classes or categories, affirming or denying that one class is wholly or partially included in another. They subdivide into four subtypes: **universal affirmative** ("all are"), **universal negative** ("no are"), **particular affirmative** ("some are"), and **particular negative** ("some are not").
- **Hypothetical (conditional) propositions** are compound *if-then* statements (if *antecedent*, then *consequent*). The relationship is **not causal**: the antecedent is a **sufficient condition** (its truth guarantees the consequent), and the consequent is a **necessary condition** (without which the antecedent cannot hold). The example "if fire, then oxygen" shows this: fire guarantees oxygen because oxygen is necessary for fire, yet oxygen does not guarantee fire.
- **Disjunctive propositions** use "or" / "either...or." A **disjunct** is one component. The **inclusive (weak)** disjunction means at least one disjunct is true (both may be); the **exclusive (strong)** disjunction means exactly one is true. A disjunction is true as long as one disjunct is true.
- **Conjunctive propositions** use "and" (or "both...and," and sometimes "but"). A conjunction is true **only if both conjuncts are true**.
- **Biconditional propositions** assert that two components have the same truth value (they are **materially equivalent**), using "if and only if." A biconditional "A if and only if B" unpacks into two hypotheticals (if A then B, and if B then A) and is therefore both a necessary and a sufficient condition.

The next episode begins a multi-part investigation of **categorical logic**, focusing on that first proposition type.
