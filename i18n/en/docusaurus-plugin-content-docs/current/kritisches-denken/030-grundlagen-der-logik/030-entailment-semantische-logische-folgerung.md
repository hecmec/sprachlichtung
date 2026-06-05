---
title: Semantic Entailment
sidebar_label: Semantic Entailment
sidebar_position: 30
description: Explanation of the concept of semantic entailment with examples and its significance for logical thinking.
keywords:
  - semantic entailment
  - entailment
  - logical implication
  - propositional logic
  - meaning analysis
last_update:
  date: 2026-01-28
  author: Immanuel Lupinus
translation_status: auto
---

<!--t src=1252293b-->
**Semantic entailment** or entailment is a fundamental concept in logic. It describes a relationship between statements where one statement (or a group of statements) necessarily implies another statement.

<!--t src=84c2a92e-->
:::tip
"**Max is a dog.**" semantically entails "**Max is an animal.**"
:::

<!--t src=f13af5f7-->
Formally expressed:
**"From statements A, B, C ... a conclusion S follows logically"**
means:
**"It is impossible for A, B, C to be true and S to be false."**

<!--t src=308ee6b7-->
In other words:
**"If A, B, C are true, then S must also be true."**

<!--t src=fd7a296f-->
Semantic entailment has a sister: **syntactic entailment**, which refers to the **derivability** of statements in a formal system.

<!--t src=05d64fd6-->
While syntactic entailment focuses on the rules of derivation, semantic entailment deals with the **meaning and truth** of statements.

<!--t src=68322767-->
## Examples of semantic entailment

<!--t src=6b8ccdf3-->
This all sounds very theoretical, so here are some examples.

<!--t src=dc2ec311-->
### Entailments from the meaning of words (semantic)

<!--t src=e5144c12-->
- Dogs are animals and bachelors are not married.

<!--t src=4bda3768-->
This is true because we use language this way.
Such sentences that are true due to their meaning are often called:
**analytically true**.

<!--t src=5c0f4026-->
:::tip
"**Tom is a bachelor.**" entails "**Tom is not married.**"
:::

<!--t src=3fb274d5-->
If it is true that Tom is a bachelor, then it must also be true that Tom is unmarried.

<!--t src=4444901a-->
- If something is red, then it is colored.

<!--t src=55b045db-->
:::tip
"**The cube is red.**" entails "**The cube is colored.**"
:::

<!--t src=b81e204c-->
If it is true that the cube is red, it must also be true that it is colored.

<!--t src=356d7c4e-->
- We can make semantic entailments with more complicated sentences.

<!--t src=8a883310-->
:::tip
"**All humans are mortal.**" and
"**Socrates is a human.**" entails
"**Socrates is mortal.**"
:::

<!--t src=5177d010-->
If both premises are true, the conclusion must also be true.

<!--t src=6646a4ec-->
This follows from our language rules: how we use "all" and "humans" and "mortal".

<!--t src=1e8d2dd8-->
<details>
<summary>Some prefer it a bit more formal</summary>

## Semantic Entailment vs. Implication

We must distinguish semantic entailment not only from formal derivability, but also from **material implication** (that's a fancy word for the "if-then" operator in formal logic):

- **Entailment** (A ⊨ B) is a semantic relationship: It's about the necessary preservation of truth from A to B.
- **Implication** (A → B) is a logical operator: "If A, then B" can be true even if there is no substantive connection between A and B.

**Example of implication without entailment:**
"If Paris is the capital of Italy, then 2+2=4."

This implication is formally true (since the antecedent is false), but there is no entailment since no substantive connection exists between the statements.

## Symbolically

We can also represent semantic entailment symbolically.
If we have a set of premises Γ and a conclusion φ:

Γ ⊨ φ
means: From the statements in Γ, φ follows logically, i.e., in every model where all statements in Γ are true, φ is also true.

</details>

<!--t src=7a8dcfc7-->
## Significance of entailment in critical thinking

<!--t src=2c9f8c0d-->
Understanding entailment is crucial for critical thinking as it helps us:

<!--t src=0ba1aef1-->
- Distinguish valid from invalid conclusions
- Recognize the semantic consequences of our beliefs
- Uncover implicit assumptions in arguments
- Evaluate the strength of semantic connections between statements

<!--t src=69b1092f-->
## Sources

<!--t src=23ba7c5a-->
- [Derivation in Logic](https://en.wikipedia.org/wiki/Logical_consequence), Wikipedia
- [Semantic Entailment](https://en.wikipedia.org/wiki/Logical_consequence), Wikipedia
