---
title: "Categorical Logic - Categorical Syllogisms"
sidebar_position: 27
keywords:
  - categorical syllogism
  - distribution of terms
  - major minor middle term
  - rules of validity
  - syllogistic fallacies
  - deductive argument
last_update:
  date: 2026-06-15
  author: Immanuel Lupinus

completeness: 3/5
---

import React from 'react';
import ReactPlayer from 'react-player';

<ReactPlayer style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
controls src='https://youtu.be/2POmtPgCRb8' />

&nbsp;

## Summary

This lecture finally puts the earlier groundwork of categorical logic to work by analyzing arguments in the form of **categorical syllogisms**. A **syllogism** is a standard form of deductive argument in which a conclusion is inferred from two premises. A categorical syllogism specifically consists of three categorical propositions and contains exactly three terms. Each term keeps the same meaning throughout the argument, and each term appears in exactly two of the propositions. (Recall that any single categorical proposition contains only two terms: a subject and a predicate.)

### A Worked Example

Consider: Premise 1, "No logicians are people who embrace contradiction"; Premise 2, "Some teachers are people who embrace contradiction"; Conclusion, "Therefore, some teachers are not logicians." Here *logicians* appears in Premise 1 and the conclusion, *teachers* appears in Premise 2 and the conclusion, and *people who embrace contradiction* appears once in each premise. The goal is to determine whether such a syllogism is **valid**, meaning structured so that if the premises are true the conclusion could not possibly be false.

### Distribution

Before testing validity, we need the concept of **distribution**. Distribution is an attribute of a *term* (subject or predicate) describing its relationship to the entire class it denotes. A term is **distributed** when it refers to the whole class; otherwise it is **undistributed**. Note the contrast: terms have distribution, whereas propositions have *quantity* (universal or particular).

The subject's distribution is easy to spot from the quantifier: it is distributed after *all* or *no*, and undistributed after *some*. The predicate gives no such clue, so it is easiest to memorize the pattern: **universals distribute their subjects, and negatives distribute their predicates**. Applied to the four proposition types:

- **A (universal affirmative):** subject distributed only.
- **E (universal negative):** both subject and predicate distributed.
- **I (particular affirmative):** nothing distributed.
- **O (particular negative):** predicate distributed only.

### Major, Minor, and Middle Terms

A lone proposition has no major, minor, or middle term, but a syllogism does. The **major term** is the predicate of the conclusion, and the premise containing it is the **major premise**. The **minor term** is the subject of the conclusion, found in the **minor premise**. The remaining term, which appears in both premises but never in the conclusion, is the **middle term**. The middle term is structurally the most important: it links the two premises and makes inference to a conclusion possible.

### The Four Rules of Validity

With these pieces in place, testing validity reduces to applying four rules.

**Rule 1 - Three terms only.** A syllogism must contain exactly three terms. More than three commits the **fallacy of equivocation** (the four-term fallacy). Sometimes this is obvious nonsense, but it can hide. In "All heroes are demigods; Martin Luther King Jr. is a hero; therefore MLK is a demigod," *hero* is used equivocally: a mythical god-parent in Premise 1, a modern self-sacrificing person in Premise 2. That yields four terms, no genuine middle term, and so no real connection.

**Rule 2 - The middle term must be distributed at least once.** If it is not, there is no guarantee the major and minor terms connect. Violating this is the **fallacy of the undistributed (illicit) middle**. Example: "All Baptists are baptized; all Catholics are baptized; therefore all Catholics are Baptists." Both premises are A propositions, whose predicates (the middle term *baptized*) are undistributed, so the conclusion does not follow. The same hidden form drives arguments like "The Democratic Party supports health-care reform; socialists support health-care reform; therefore the Democratic Party is socialist."

**Rule 3 - Any term distributed in the conclusion must be distributed in the premises.** If a conclusion has no distributed terms, that is fine; the rule only constrains those that are. Violations produce the **fallacy of illicit major** (major term distributed in the conclusion but not the premise) or the **fallacy of illicit minor** (same for the minor term). You cannot infer all of something from only some of it. Example: "All dogs are mammals; no cats are dogs; therefore no cats are mammals." The conclusion is an E, distributing both terms. *Cats* is distributed in the minor premise (fine), but *mammals* is the predicate of an A major premise and is undistributed there: an **illicit major**.

**Rule 4 - The number of negative premises must equal the number of negative claims in the conclusion.** Since the conclusion is a single proposition, this implies you cannot draw a valid conclusion from two negative premises, and you cannot get a negative conclusion from two affirmative premises. Example: "No war is meant to be fun; no government action is meant to be fun; therefore no war is a government action." Two negative premises, one negative conclusion (1 + 1 = 1) is invalid. Both terms are merely excluded from "things meant to be fun," so their relationship to each other remains unknown.

### A Translation Trap

Finally, a deceptive case: "Peter loves Mary Jane; Harry loves Peter; therefore Harry loves Mary Jane." Treating the personal names as classes of one, it appears to pass all four rules, yet it sounds wrong. The problem is **translation**. Properly rendered, the terms are *Peter*, *Harry*, *person who loves Mary Jane*, and *person who loves Peter*: four terms, violating Rule 1. The lesson is that careful translation into standard form is essential before testing validity.

The video closes by noting that categorical propositions are not the only kind. The next installment shifts to **propositional logic**, beginning with the language of symbolization.
