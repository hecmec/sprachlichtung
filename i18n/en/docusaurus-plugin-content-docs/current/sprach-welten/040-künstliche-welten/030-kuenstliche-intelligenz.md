---
id: artificial_intelligence
title: Artificial Intelligence
title_meta: "Artificial Intelligence: Branches, Kinds of Learning and Fields of Application"
sidebar_label: Artificial Intelligence
sidebar_position: 3
description: What artificial intelligence covers, how machines learn, where AI has long been part of everyday life and where the field is currently heading.
keywords:
  - Artificial intelligence
  - Machine learning
  - Neural networks
  - Supervised learning
  - Reinforcement learning
  - Fields of application
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=9be62154-->
## A few surprising facts

<!--t src=38d85d4a-->
**First:** "artificial intelligence" does not denote a thing but a boundary that keeps moving. Chess computers counted as AI until they started winning. Speech recognition counted as AI until it ended up in the telephone. As soon as something works reliably, it is suddenly just software. The computer scientist Larry Tesler put it in a formula: AI is whatever hasn't been done yet.[^tesler]

<!--t src=6788fcaa-->
**Second:** the AI that actually shapes your life is inconspicuous. It decides on creditworthiness, pre-sorts job applications, plans your route, suggests the next video and helps read your X-rays. Chatbots are the visible part, but by no means the most consequential one.

<!--t src=018dec22-->
**Third:** the basic idea of neural networks dates from the 1940s, the decisive learning method from the 1980s. What is new is not the theory. What is new is the volume of data and the computing power.

<!--t src=0459acb7-->
## What all belongs to it?

<!--t src=d40cbd8e-->
AI is an umbrella covering very different tools.

<!--t src=d0434564-->
**Symbolic AI** works with explicitly formulated rules and logic. The expert systems of the 1980s belong here, but so do today's planning and theorem-proving systems. They are transparent and rigid.

<!--t src=446d0ac5-->
**Machine learning** derives patterns from data instead of prescribing rules, as described in the [previous chapter](./020-progamme-und-wahrscheinlichkeiten.md).

<!--t src=39a08079-->
**Neural networks and deep learning** are a particularly successful family within machine learning: many layers of simple computing units that together capture complicated relationships.

<!--t src=d2bb9006-->
Cutting across these are fields of work such as image processing, language processing, robotics and search. When somebody says "the AI", it is worth asking which of these things they mean.

<!--t src=20619c36-->
## The question: what does it mean for a machine to learn?

<!--t src=80e8ef0f-->
Learning sounds like understanding. What is meant is something more sober: a program has many adjusting screws, set at random to begin with, and it keeps turning them until its outputs fit the examples better. There are three ways of giving it feedback while it does so.

<!--t src=37d0297a-->
**Supervised learning** is learning with an answer sheet. You show examples with the correct answer: this image shows a tumour, that one does not. It is the most common and the most data-hungry form. Somebody has to supply the answers, usually underpaid people.

<!--t src=230e0065-->
**Unsupervised learning** is learning without an answer sheet. The program is given only data and looks for structure itself, for instance groups of customers with similar behaviour. It finds patterns, but nobody has told it which ones matter.

<!--t src=0450a82c-->
**Reinforcement learning** is learning through reward. The program tries things out, receives points for good outcomes and adapts its behaviour. This is how systems learn games and robots learn to grasp. The catch: they optimise exactly the score, not what you meant.

<!--t src=37f3a5f4-->
## Theory and practice: the business with the reward

<!--t src=62641999-->
That last warning is not theory. A video platform system optimised for time spent reliably learns that outrage holds attention longer than sobriety. It has no political intention. It has an objective function, and it fulfils it perfectly.

<!--t src=2e1bcbe9-->
That is exactly the practical lesson of the notion of learning: a learning system never does what is wanted, always what is measurable. Anyone who wants to know how an AI will behave has to ask what it was optimised for and who picked that quantity.

<!--t src=4796b603-->
The same holds for data. An application filter that learns from past hiring decisions inherits their prejudices, now wrapped in the aura of mathematical objectivity.

<!--t src=9412f879-->
## Where the field is heading

<!--t src=1e7df3bc-->
Four developments shape the present:

<!--t src=5b9159d5-->
- **Multimodality:** one model processes text, image, sound and video together rather than separately.
- **Agents:** systems carry out multi-step tasks, call tools and act instead of merely answering.
- **Small models:** alongside the giants, compact models are emerging that run locally on your own device, without sending data into somebody else's cloud.
- **Regulation:** with the European AI Act, a distinction is drawn for the first time by risk rather than by technology.

<!--t src=9d2868d8-->
What remains unchanged through all of it: these are automata estimating probabilities. The capabilities are growing astonishingly fast, the basic mode of operation is not.

<!--t src=98bf591d-->
[^tesler]: Attributed after Douglas R. Hofstadter: _Gödel, Escher, Bach_, Basic Books, 1979, where the formula is quoted as "Tesler's Theorem".
