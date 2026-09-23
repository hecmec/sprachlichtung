---
title: Formal vs. informal reasoning
sidebar_label: Formal vs. informal reasoning
sidebar_position: 70
description: The differences between formal and informal logical reasoning in critical thinking
keywords:
  - formal logic
  - informal logic
  - inferences
  - natural language
  - logical structure
last_update:
  date: 2026-01-28
  author: Immanuel Lupinus
completeness: 3/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=7e951c4c-->
![Banner in the style of an old parchment drawing: eyes, a microchip and circuits as symbols of logic](/img/kd/bennycheung_logic_dallE-3.jpg)  
_Thinking, symbolic logic and circuits. Painted by DallE-3, an AI._

<!--t src=4ed4a1c7-->
<!-- # Formal vs. informal reasoning -->

<!--t src=a941200a-->
Some people think that all good arguments consist essentially of formal logical inferences or syllogisms. But if you look closely, you quickly notice that arguing has little to do with formal logical reasoning.

<!--t src=c3168d77-->

Logical reasoning can be divided into two groups: formal and informal reasoning. Both are important for critical thinking, but have different areas of application and methods.

<!--t src=f9ab45f6-->
## An example of different kinds of reasoning

<!--t src=76de0143-->
Here we take up a very famous example. It is the syllogism in the form Barbara. The mood Barbara is a classical form of logical inference (syllogism) in traditional Aristotelian logic.[^modus-barbara] Barbara is simply a mnemonic that reminds us that this syllogism contains three judgements of type A (universal affirmative).
That is: major premise, minor premise and conclusion all have the form "All A are B".

<!--t src=2fcafb16-->
<details>
  <summary>Aristotelian syllogistic as a teaching system in the Middle Ages</summary>

These names do not come from Aristotle himself, but from the Middle Ages. Back then Aristotelian syllogistic was developed into a teaching system that could be learned by heart, most influentially in the _Summulae logicales_ of Peter of Spain (13th century), Europe's most widely used logic textbook for some three centuries.[^petrus-hispanus] Its basis is four forms of judgement, abbreviated with the vowels **A**, **E**, **I** and **O**. The mnemonic for this is the Latin words _affirmo_ ("I affirm") for A and I, and _nego_ ("I deny") for E and O.

| Code  | Form                   | Example                          |
| ----- | ---------------------- | -------------------------------- |
| **A** | universal affirmative  | All humans are mortal            |
| **E** | universal negative     | No human is immortal             |
| **I** | particular affirmative | Some Greeks are philosophers     |
| **O** | particular negative    | Some Greeks are not philosophers |

The mnemonic names of the valid forms of inference are put together from these codes: the vowels of a name give, in order, the major premise, the minor premise and the conclusion. B**a**rb**a**r**a** contains A three times, that is, three universal affirmative judgements, whereas C**e**l**a**r**e**nt contains E, A, E. The medieval mnemonic verses ("Barbara, Celarent, Darii, Ferio …") were thus a memory aid for the 24 valid moods, long before there were formula notations such as $\forall x\,(M(x) \rightarrow S(x))$.

</details>

<!--t src=e1e22e10-->
### Barbara: in natural language

<!--t src=bbed90db-->
We can express the inference in natural language and even say that it is intuitively evident to us. Unfortunately, not all syllogisms are that intuitive.

<!--t src=ec52fb51-->
<table>
<tbody>
<tr><td>**Premise 1**</td><td>All humans are mortal.</td></tr>
<tr><td>**Premise 2**</td><td>All Greeks are humans.</td></tr>
<tr><td>**Conclusion**</td><td>All Greeks are mortal.</td></tr>
</tbody>
</table>

<!--t src=fbad223e-->
### Barbara as a classical syllogism

<!--t src=cd2200b0-->
Here in its medieval form.

<!--t src=d7ab4a12-->
<table>
<tbody>
<tr><td>**Major premise**</td><td>M a S</td></tr>
<tr><td>**Minor premise**</td><td>G a M</td></tr>
<tr><td>**Conclusion**</td><td>G a S</td></tr>
</tbody>
</table>

<!--t src=bb24bde9-->
### Barbara: formalized

<!--t src=5c487451-->
with $M$ = human, $S$ = mortal, $G$ = Greek

<!--t src=75f0716f-->
<table>
<tbody>
<tr><td style={{width: '3em'}}>**P1**</td><td>$\forall x\,(M(x) \rightarrow S(x))$</td></tr>
<tr><td>**P2**</td><td>$\forall x\,(G(x) \rightarrow M(x))$</td></tr>
<tr><td>**C**</td><td>$\forall x\,(G(x) \rightarrow S(x))$</td></tr>
</tbody>
</table>

<!--t src=4b683727-->
### Barbara as a Venn diagram

<!--t src=296d8b2d-->
Many simple relations of this kind can be represented as Venn diagrams.

<!--t src=d519b060-->
![Venn diagram of the mood Barbara: three circles M, G and S of equal size; the empty regions are marked in pink, M outside S and G outside M](/img/kd/syllogismus-barbara-venn.svg)  
_Pink here means: nobody is here, this does not exist._

<!--t src=80d4bdc2-->
How do you read the diagram?

<!--t src=2bf2aedf-->
The three circles divide the area into eight zones: each zone stands for one combination of the three properties. The middle is "human and Greek and mortal", the crescent at the bottom left is "Greek, but neither human nor mortal", and so on. Outside all the circles lies everything that has none of the three properties.

<!--t src=7fed073b-->
Pink means: this zone is empty. That is the real trick of the procedure. A universal statement says nothing about something existing, only that something does not occur. "All humans are mortal" means in the diagram: there is nothing that is human and at the same time not mortal, so the area $M$ outside $S$ is crossed out. The same goes for "All Greeks are humans": $G$ outside $M$ is crossed out.

<!--t src=08f72d5e-->
And now the decisive point: you enter only the premises, never the conclusion. Then you look to see whether it is already there of its own accord. The question is: is there still a zone in which a Greek could live who is not mortal? Together, the two crossed-out areas cover the whole area $G$ outside $S$. So no, such a person cannot exist. That is exactly what "All Greeks are mortal" claims, and the inference is therefore valid.

<!--t src=97bd039b-->
An invalid syllogism gives itself away by the fact that a white zone is left over into which a counterexample fits. For some-statements, incidentally, hatching is not enough; there you additionally put an × into a zone to say: someone is here.

<!--t src=0efe15a3-->
<details>
  <summary>Are Venn diagrams a formal or an informal device?</summary>

Formal, even if it does not look that way. What makes a procedure formal is not that symbols stand in a row, but that the rules apply to the form alone and can be checked mechanically. That is exactly what the Venn procedure does: a fixed notation (circles, hatching, ×), fixed rules for entering information, a fixed reading-off procedure. It is even a **decision procedure**: it checks every classical syllogism in finitely many steps with an unambiguous result. Predicate logic cannot do that in this generality.

For a long time, diagrams were nevertheless regarded in logic as a mere visual aid, a crutch for understanding and not a means of proof. In 1994 Sun-Joo Shin showed that this was a prejudice: she wrote down the Venn system as a calculus and proved its soundness and completeness &mdash; exactly what one otherwise demands of a logical calculus.[^shin-diagramme]

The real limitation is not rigour, but **reach**. The procedure works only for one-place properties and a small number of terms. With four terms you already need ellipses instead of circles, with five the picture becomes unreadable, and relations such as "every human has a mother" or nested quantifiers cannot be represented at all. Venn diagrams are thus a fully fledged formal apparatus for a very small piece of logic.

Not to be confused with the [Euler diagram](040-muster-gueltiger-argumente.md) shown at the top of that page. Euler draws the actual situation, here a circle within a circle within a circle. Venn always draws all the overlaps and crosses out the empty ones. That is why the Venn diagram can also make it visible when an inference does _not_ hold: then a zone stays white, with room for the counterexample.

</details>

<!--t src=bad148ac-->

## Formal reasoning

<!--t src=734cf412-->

**Formal reasoning** is based on explicit rules and structures that are independent of the content of the arguments. It concentrates on the form or structure of an argument and often uses symbolic notation.

<!--t src=84fd8461-->

Characteristics of formal reasoning:

<!--t src=93bc06c1-->

- Use of formal systems such as predicate logic or propositional logic
- Strict rules for valid inferences
- Independence from the specific content
- Precision and unambiguity
- The possibility of formal proof

<!--t src=0da05a41-->
<details>
  <summary>**Derivation in natural deduction (Gentzen)**</summary>

Can we also derive the Barbara syllogism somehow?  
In [natural deduction](../030-grundlagen-der-logik/010-einfuehrung-logik.md) there is no syllogism rule. Instead, the inference is derived step by step from the rules for $\forall$ and $\rightarrow$. Here $a$ stands for an arbitrarily chosen object.

| Line | Formula                              | Justification                                          |
| ---- | ------------------------------------ | ------------------------------------------------------ |
| 1    | $\forall x\,(M(x) \rightarrow S(x))$ | Premise 1                                              |
| 2    | $\forall x\,(G(x) \rightarrow M(x))$ | Premise 2                                              |
| 3    | $G(a)$                               | **Tentative assumption**                               |
| 4    | $G(a) \rightarrow M(a)$              | $\forall$-elimination from 2                           |
| 5    | $M(a)$                               | $\rightarrow$-elimination (modus ponens) from 3 and 4  |
| 6    | $M(a) \rightarrow S(a)$              | $\forall$-elimination from 1                           |
| 7    | $S(a)$                               | $\rightarrow$-elimination from 5 and 6                 |
| 8    | $G(a) \rightarrow S(a)$              | $\rightarrow$-introduction, assumption 3 is discharged |
| 9    | $\forall x\,(G(x) \rightarrow S(x))$ | $\forall$-introduction from 8                          |

Two steps carry the whole derivation:

- **Lines 3 to 8, the tentative assumption.** In order to show "if Greek, then mortal", one assumes tentatively that $a$ is a Greek, derives mortality from this and then discharges the assumption again. What remains is the if-then statement, which now stands without any assumption.
- **Line 9, the generalization.** It is only permitted because nothing special was presupposed about $a$. What holds for an arbitrarily chosen object holds for all of them.

This is exactly how we argue in everyday life too: "Take any Greek at all. He is a human being, and humans are mortal. So he is mortal. Since I did not mean anyone in particular, this holds for all Greeks."

</details>

<!--t src=487d16f9-->
This argument pattern is valid independently of the specific content. It does not matter what M, G and S stand for &mdash; the conclusion follows necessarily from the premises.

<!--t src=bcabc811-->

## Informal reasoning

<!--t src=683d64f6-->

**Informal reasoning** refers to arguments in natural language that are not fully formalized. It takes into account the context, background knowledge and implicit assumptions.

<!--t src=2e501eaa-->

Characteristics of informal reasoning:

<!--t src=31f41f88-->

- Use of natural language
- Consideration of context and background knowledge
- Inclusion of implicit premises
- Flexibility and adaptability
- Application in everyday discussions and debates

<!--t src=d20c5f21-->

**Example of informal reasoning:**
"The lawn is wet. It must have rained during the night."

<!--t src=5102fa03-->

This argument contains implicit assumptions (e.g. that rain is the most probable cause of a wet lawn) and is based on everyday knowledge and experience.

<!--t src=df7b35a4-->

## Differences and areas of application

<!--t src=93743f59-->

The main differences between formal and informal reasoning are:

<!--t src=db19d830-->

1. **Precision vs. flexibility**: Formal reasoning is more precise, but less flexible; informal reasoning is more flexible, but possibly less precise.

<!--t src=196658dc-->

2. **Explicitness vs. implicitness**: Formal reasoning makes all assumptions explicit; informal reasoning can contain implicit assumptions.

<!--t src=03bb6471-->

3. **Area of application**: Formal reasoning is often used in mathematics, formal logic and theoretical computer science; informal reasoning is predominant in everyday discussions, politics, ethics and many other fields.

<!--t src=df4952b1-->

Both types of reasoning have their strengths and weaknesses:

<!--t src=1d00d510-->

- Formal reasoning offers precision and clarity, but can be too rigid in complex real-world situations.
- Informal reasoning is more flexible and more context-related, but can be more prone to fallacies and ambiguities.

<!--t src=a2073daf-->

For critical thinking it is important to understand both types of reasoning and to apply them appropriately depending on the context.

<!--t src=7dce1dd3-->
[^modus-barbara]: On the mnemonic rules of syllogistic and the 24 valid moods: [Modus Barbara (Wikipedia)](https://de.wikipedia.org/wiki/Modus_Barbara) 🇩🇪, [Syllogism (Wikipedia)](https://en.wikipedia.org/wiki/Syllogism) 🇬🇧.

<!--t src=518ff2db-->
[^shin-diagramme]: Sun-Joo Shin: _The Logical Status of Diagrams_, Cambridge University Press 1994. Shin treats Venn diagrams as a formal system in their own right, with a syntax and a semantics, and proves its soundness and completeness. An overview of the debate: [Diagrams (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/diagrams/) 🇬🇧.

<!--t src=93b87364-->
[^petrus-hispanus]: Peter of Spain: _Summulae logicales_ (13th century). The mnemonic verses that were learned at every university in the Middle Ages and the early modern period go back to him. For those interested: [Petrus Hispanus (Wikipedia)](https://de.wikipedia.org/wiki/Petrus_Hispanus) 🇩🇪, [Peter of Spain (Wikipedia)](https://en.wikipedia.org/wiki/Peter_of_Spain) 🇬🇧.

<!--t src=afea780d-->

[Artikel auf Deutsch](pathname:///docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen) | [Article en français](pathname:///fr/docs/kritisches-denken/was-ist-ein-gutes-argument/formales-vs-informelles-schliessen)
