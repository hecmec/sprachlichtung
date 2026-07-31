---
id: large_language_models
title: Large Language Models
title_meta: "Large Language Models: What Is New, Where It Is Going and the Question of AGI"
sidebar_label: Large Language Models
sidebar_position: 7
description: What distinguishes large language models from earlier AI systems, how they are built, whether they keep getting better and what to make of the talk about AGI.
keywords:
  - Large language models
  - LLM
  - Scaling laws
  - Fine-tuning
  - AGI
  - Benchmarks
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=5b589ab6-->
## What is really new about them

<!--t src=d83fdae1-->
Technically, a large language model is nothing other than the machine described in the [previous chapter](./040-generative-ki.md): it estimates how a sequence continues. Three things are new.

<!--t src=bbd0ac1d-->
**First, the size.** Training happens not on one specialist domain but on a considerable share of all available written text, with computing costs in the range of power station output.

<!--t src=c636268b-->
**Second, that size changes the matter qualitatively.** What was expected was better text prediction. What arrived were systems that translate, summarise, program and argue, without anyone having taught them these tasks. It seems that anyone wanting to predict the next word well has to pick up a good deal about grammar, facts and inference along the way.

<!--t src=b4ef51e4-->
**Third, the way they are operated.** Earlier AI was a tool for specialists with a fixed task. A language model is operated with language. That explains its social impact better than any technical advance.

<!--t src=c6fff48a-->
## How such a model comes about

<!--t src=7164f303-->
The road has two very unequal halves.

<!--t src=957a7a35-->
In **pre-training** the model learns for months from vast quantities of text, and learns one thing only: to predict the next word. Afterwards it can do a great deal, but it is unusable, because it does not follow instructions, it merely continues them.

<!--t src=256a7304-->
In **post-training** it is trimmed with comparatively few examples to answer questions, and then aligned with human judgements: given two answers, people choose the better one, and the model learns from that what is wanted.[^instruct]

<!--t src=d2f1dc82-->
This second half shapes the character of the system. The polite, helpful, cautious tone is not an intrinsic trait but a training outcome. And the standards of judgement were set by a company.

<!--t src=43038a6a-->
## Are they getting ever smarter?

<!--t src=b09bddfc-->
Around 2020 astonishingly regular relationships were found: more computing power, more data and more parameters improve prediction quality along a smooth curve.[^scaling] It later emerged that many models had simply seen too little text for their size.[^chinchilla] These rules of thumb drove the race for ever larger systems.

<!--t src=9742c5bd-->
Only this road runs into several walls at once: high-quality human text is finite, costs grow faster than benefits, and the curves are flattening. The effort has therefore shifted. Instead of making models bigger, they are made to compute longer while answering, to work in intermediate steps, to call tools and to check results. Today the gains come more from the way of working than from the size of the model.

<!--t src=d1eca667-->
Caution is called for with the word "smarter". Measurement is done against test collections, and these tests are on the internet, hence possibly in the training data as well. A jump in the score is therefore not automatically a jump in ability. What remains striking is the mixture: systems solve competition-level problems and fail at tasks that children manage.

<!--t src=90c79544-->
## Will we have AGI soon?

<!--t src=63f788ce-->
"Artificial general intelligence" is meant to denote a system that handles any intellectual task at human level. The trouble starts with the definition: there is no accepted one, and the existing ones shift along with whatever systems happen to be capable of. Predictions of the date range from a few years to never, which mainly shows that nobody knows.

<!--t src=f7fbaa37-->
What can soberly be named is what today's systems lack: a reliable model of the world rather than language statistics, a lasting memory across sessions, the ability to learn from a few examples the way a child does, a notion of cause and effect, and reliability. A system that shines in ninety percent of cases and errs confidently in ten percent is not a general intelligence but a tool that requires supervision.

<!--t src=077ec80c-->
Note, too, who is doing the talking about AGI. The story of imminent superintelligence is advertisement and warning at once, and it often comes from the very houses that are raising capital.

<!--t src=773685f6-->
## What this means in practice

<!--t src=eadec9d4-->
- Treat answers as a draft, not as information. Everything that matters can be checked.
- With every claim about capabilities, ask: measured against what, compared with what?
- Use these systems where you can judge the result. That is exactly where they are strong.
- Do not mistake fluent language for expertise. The fluency is trained, the expertise is a by-product.

<!--t src=63ffc268-->
[^instruct]: Long Ouyang et al.: _Training language models to follow instructions with human feedback_, NeurIPS, 2022.

<!--t src=368c3474-->
[^scaling]: Jared Kaplan et al.: _Scaling Laws for Neural Language Models_, arXiv, 2020.

<!--t src=a60f0206-->
[^chinchilla]: Jordan Hoffmann et al.: _Training Compute-Optimal Large Language Models_, NeurIPS, 2022.
