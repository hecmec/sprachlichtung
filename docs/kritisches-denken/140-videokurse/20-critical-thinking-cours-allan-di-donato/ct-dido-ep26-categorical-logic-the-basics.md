---
title: "Categorical Logic - The Basics"
sidebar_position: 25
keywords:
  - categorical logic
  - categorical propositions
  - subject and predicate terms
  - quality and quantity
  - standard categorical form
  - Euler circles
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/D6jAEO-H3VE' />

&nbsp;

## Summary

This episode opens the study of **categorical logic**, the oldest branch of formal logic, reaching back to **Aristotle** and the ancient Greeks. Like mathematics, deductive logic must be built from the ground up: you cannot test the validity of a **categorical syllogism** before mastering its building blocks.

### Categorical Propositions and the Four Types

**Categorical propositions** are the building blocks of the syllogism. They are statements about relationships among **classes** (categories) of things, affirming or denying that one class is wholly or partially included in another. Because a proposition can either **affirm or deny** (quality) and do so **wholly or partially** (quantity), there are exactly four subtypes:

- **A** – universal affirmative ("All dogs are mammals")
- **E** – universal negative ("No dogs are cats")
- **I** – particular affirmative ("Some dogs are wolves")
- **O** – particular negative ("Some dogs are not wolves")

Medieval logicians drew these letters from the Latin words **_affirmo_** ("I affirm," giving **A** and **I**) and **_nego_** ("I deny," giving **E** and **O**).

### The Four Parts of a Proposition

Propositions themselves break down into four more fundamental parts:

1. The **subject term** — what the assertion is about (in "All dogs are mammals," *dogs*).
2. The **predicate term** — what is asserted about the subject (*mammals*).
3. The **copula** — the verb joining subject and predicate, which in logic is always a form of **to be** (*is/are*, *is not/are not*, in any tense). The copula determines **quality**.
4. The **quantifier** — the word indicating extent: **all** or **some**. It determines **quantity**. In a universal negative, the word **no** stands in for both the quantifier *all* and the negative part of the copula.

Every categorical proposition therefore has both **quality** (affirmative or negative, the only two options) and **quantity** (**universal**, the whole class, or **particular**, some portion of the class).

### Euler Circles

The relationships between subject and predicate can be pictured with **Euler circles**, named after the 18th-century mathematician **Leonhard Euler**. There are only five possible diagrams:

- **A** ("All A is B") uses two diagrams: A and B coinciding completely, or A entirely contained within B.
- **I** ("Some A is B") can be shown in four ways: the two A-diagrams plus partial overlap (resembling a **Venn diagram**) and B contained within A.
- **E** ("No A is B") uses a fifth diagram: two wholly separate circles.
- **O** ("Some A is not B") is already covered by diagrams three through five.

A key insight: because **some** can mean *any amount up to and including all*, the same diagrams that illustrate an A proposition also illustrate an I proposition. Thus if all dogs are mammals, it is also true that *some* dogs are mammals.

### Translating Ordinary Sentences into Standard Form

The rest of the episode addresses **translation**: rendering everyday sentences into **standard categorical form**, with all four parts clearly distinguished. There are no rigid rules; the guiding principle is to **translate the meaning, not the words**, by first asking what the sentence actually states.

**Singular subjects.** A proper noun names a **class of one**, so it takes the quantifier *all*: "Bill went to the store" becomes "All Bill...". The whole class (Bill) is the subject.

**Missing copula or extra phrases.** Standard form requires the verb *to be*; other verbs must be rewritten, and prepositional phrases or adjectives need a **generic noun** of the intended class added. "All Bill went to the store" becomes "All (Bill) is (a person who went to the store)." Di Donato suggests compartmentalizing the four parts, using parentheses, and replacing long terms with single-letter placeholders.

**Words that signal quantity.** Words such as *anyone*, *everyone*, *whoever*, *a*, *the*, or *not* must be replaced with the only acceptable quantifiers: **all**, **some**, and **no**. "Anyone without hair is bald" becomes "All people without hair are people who are bald."

**Judgment calls.** "The dolphin is an aquatic mammal" most likely refers to the whole class: "All dolphins are aquatic mammals." But "The morning paper was soaked by the rain" probably refers to a single paper: "Some morning papers were papers soaked by the rain."

**The ambiguous "all are not."** "All dogs are not black" looks like an E proposition ("No dogs are black"), but the speaker usually means *not all* dogs are black. So it becomes the particular negative "Some dogs are not black." The construction **all S is not P** often means **some S is not P**.

**Exclusive propositions** (using *only* or *none but*) translate into **A** propositions in two steps: add the quantifier *all* while dropping the exclusive word, then **reverse** subject and predicate. "None but animals are veterinary patients" becomes "All veterinary patients are animals." An **exception** arises when *only* is preceded by the definite article *the*: "The only person in the pool is Tom" must preserve the meaning that no one else is present, giving "All persons in the pool are persons identical with Tom." The test is whether the translation is **logically equivalent** to the original (can one be true while the other is false?).

**Negative propositions** denying an entire class are **E** types: "Dogs are not humans" becomes "No dogs are humans," moving the negation into the quantifier position.

**Exceptive propositions** (signaled by *except*) contain two claims at once. "All police officers except those wearing gas masks passed out from the gas" splits into a universal affirmative ("All non-gas-mask-wearing officers are officers who passed out from the gas") and a universal negative ("No gas-mask-wearing officers are officers who passed out from the gas"). Di Donato uses the prefix **non-** to mark the relevant subclasses, previewing **term complements** for the next episode.

### Takeaway

Logic is a **language of its own**, and translation is an essential skill. When no simple rule applies, always determine what the statement means and translate that meaning. The next episode continues categorical logic with the **square of opposition** and **immediate inference**.
