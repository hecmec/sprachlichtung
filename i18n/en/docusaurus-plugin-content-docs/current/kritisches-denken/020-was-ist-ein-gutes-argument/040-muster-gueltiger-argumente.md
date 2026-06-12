---
title: Patterns of valid arguments
sidebar_label: Patterns of valid arguments
id: patterns_of_valid_arguments
sidebar_position: 4
description: An overview of various patterns of valid arguments and their application in critical thinking
keywords:
  - syllogism
  - reductio ad absurdum
  - argument from analogy
  - abduction
  - logical reasoning
  - argument patterns
last_update:
  date: 2026-06-11
  author: Immanuel Lupinus
completeness: 3/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=b693d8fb-->
<!-- # Patterns of valid arguments
https://www.youtube.com/watch?v=ZdkxigKjVI8
 -->

<!--t src=c5b040fc-->
Building on the [three forms of inference](030-deduktion-induktion-abduktion.md), there are certain **argument patterns** that recur again and again. They form the basis for logically correct reasoning and can be applied in very different contexts. Here we look at a few especially important patterns.

<!--t src=b41cf185-->
## Categorical syllogism

<!--t src=4aec106f-->
A **categorical syllogism**[^syllogismus-geschichte] is a deductive argument that consists of three categorical statements: two premises and a conclusion.

<!--t src=47f6212a-->
**Form:**

<!--t src=239abda7-->
1. All/Some A are/are not B. (Major premise)
2. All/Some B are/are not C. (Minor premise)
3. Therefore: All/Some A are/are not C. (Conclusion)

<!--t src=dd30a40f-->
**Example: Planets**

<!--t src=08b0d69c-->
1. All planets are celestial bodies.
2. Some celestial bodies are gaseous.
3. Therefore some planets are gaseous.

<!--t src=b8aa8a05-->
**Caution:** Not all forms of the categorical syllogism are valid. Validity depends on the specific combination of quantifiers (all, some) and the arrangement of the terms.

<!--t src=a65fe800-->
## Reductio ad absurdum (proof by contradiction)

<!--t src=6eb8698b-->
**Reductio ad absurdum** is a form of argument in which one assumes the negation of the statement to be proven and shows that this assumption leads to a contradiction.

<!--t src=47f6212a-->
**Form:**

<!--t src=897c5d84-->
1. Assumption: Not-A is true.
2. If not-A is true, then B follows.
3. B leads to a contradiction.
4. Therefore A must be true.

<!--t src=10c87824-->
**Example: Prime numbers**

<!--t src=ff90ab8a-->
1. Assumption: There are not infinitely many prime numbers.
2. If there are only finitely many prime numbers, we can multiply them all together and add 1 to obtain a new number N.
3. N is either itself a prime number or divisible by a prime number that is not contained in our original list.
4. This contradicts our assumption that we had listed all prime numbers.
5. Therefore there must be infinitely many prime numbers.

<!--t src=9c30066f-->
## Argument from analogy

<!--t src=b6651f97-->
An **argument from analogy** infers further similarities from similarities between two things.

<!--t src=47f6212a-->
**Form:**

<!--t src=9dbfdffc-->
1. A has the properties X, Y and Z.
2. B has the properties X and Y.
3. Therefore B probably also has the property Z.

<!--t src=86d97790-->
**Example: Life on Mars**

<!--t src=9876e331-->
1. The planet Mars has a solid surface, an atmosphere and water ice at the poles.
2. The Earth has a solid surface, an atmosphere and water ice at the poles.
3. The Earth harbors life.
4. Therefore Mars could possibly harbor life as well.

<!--t src=1d69b679-->
Arguments from analogy are inductive and provide no certainty, only probabilities. Their strength depends on how relevant the shared properties are for the conclusion.

<!--t src=02c404ce-->
## Abduction (inference to the best explanation)

<!--t src=abf14581-->
**Abduction** is a form of reasoning in which one infers the most probable explanation from an observation.

<!--t src=47f6212a-->
**Form:**

<!--t src=ab9e32a6-->
1. Observation: Phenomenon P occurs.
2. Explanation E would explain P well.
3. No other explanation explains P as well as E.
4. Therefore E is probably true.

<!--t src=607c63ff-->
**Example: Wet lawn**

<!--t src=f365442d-->
1. Observation: The lawn is wet.
2. Explanation: It has rained.
3. Alternative explanations (sprinkler system, dew) are less probable, since there is no sprinkler system and the wetness is too heavy for dew.
4. Therefore it has probably rained.

<!--t src=208c5cf0-->
Abduction is an important form of reasoning in science, medicine and everyday life, but it provides no certainty. The strength of an abductive conclusion depends on how well the explanation accounts for the phenomenon and how much better it is than alternative explanations.

<!--t src=b80789dc-->
## Application in critical thinking

<!--t src=c6a02cbe-->
Understanding these argument patterns is important for critical thinking for several reasons:

<!--t src=0b8c5d99-->
1. It makes it possible to identify and evaluate arguments in various contexts.

<!--t src=7f5e1bc6-->
2. It helps to make one's own arguments more structured and more convincing.

<!--t src=ec529a5a-->
3. It makes it easier to recognize fallacies that resemble valid argument patterns but contain logical errors.

<!--t src=af4bd593-->
4. It fosters a deeper understanding of the various types of reasoning (deductive, inductive, abductive) and their respective strengths and limits.

<!--t src=f5a55c64-->
[^syllogismus-geschichte]: For more than two millennia, from Aristotle to Gottlob Frege, the syllogism was the core of logic. With his _syllogistic_, Aristotle founded the first formal logic at all, and well into the 19th century the doctrine of the syllogism (in various forms) was regarded as a nearly complete theory of valid reasoning. Only with George Boole and then with Frege's _Begriffsschrift_ (1879) and the development of modern predicate logic was this picture superseded. From today's perspective the syllogism is no longer an independent system, but merely a **special case of first-order predicate logic** (First Order Logic): all syllogistic inferences can be expressed with quantifiers and predicates, while predicate logic goes far beyond this and captures, for example, multi-place relations and nested quantifiers that the classical syllogism cannot handle at all. For those interested: [Syllogism (Wikipedia)](https://en.wikipedia.org/wiki/Syllogism).
