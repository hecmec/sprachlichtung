---
id: generative_ai
title: Generative AI
title_meta: "Generative AI: From Time Series through LSTM to Attention"
sidebar_label: Generative AI
sidebar_position: 6
description: "How generative AI works: generating is predicting. The road from time series forecasting through recurrent networks and LSTM to the attention mechanism."
keywords:
  - Generative AI
  - Time series
  - Recurrent networks
  - LSTM
  - Attention
  - Transformer
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=5164af19-->
## Generating is predicting

<!--t src=235dfe5c-->
The most surprising sentence about generative AI is this: it generates nothing. It predicts.

<!--t src=0c601c6a-->
A program that estimates tomorrow's electricity consumption does essentially the same thing as a program that writes a text. Both are given a sequence of values and estimate the next one. The only difference lies in what you do with the estimate. In forecasting you simply read it off. In generating you append it to the sequence and ask again: and what comes now?

<!--t src=fe112a4f-->
Out of this single feedback loop comes everything that is sold today as generative AI. A text generator is a weather forecast for words, applied over and over to its own output.

<!--t src=33f9d08a-->
## The question: how does a machine remember what came before?

<!--t src=3b675203-->
For the prediction to succeed, the program has to know the context. The next measurement depends on the previous ones, the next word on the sentence so far. An ordinary neural network cannot do this: it only ever sees one fixed input and has no memory. The whole development of the past thirty years can be read as a struggle over this memory.

<!--t src=f1546ace-->
### Recurrent networks: the loop

<!--t src=59523476-->
The first answer was **recurrent networks** (RNN). The network processes the sequence step by step and feeds its own intermediate result back in as an additional input. This state is its short-term memory.

<!--t src=9155b654-->
The idea is elegant and works badly. With long sequences the information from the beginning fades, because at every step it is pushed through the same computation again. The network forgets the start of the sentence before the sentence has ended.

<!--t src=df5271cf-->
### LSTM: forgetting on purpose

<!--t src=e1c2dbc2-->
The second answer came in 1997 from Sepp Hochreiter and Jürgen Schmidhuber: the **Long Short-Term Memory**.[^lstm] They added small gates to the loop, and the gates are themselves learned. One gate decides what is taken into memory, a second what is deleted, a third what is passed to the outside.

<!--t src=abe7d2f1-->
An LSTM can therefore learn to hold on to a detail across a hundred words and to drop the unimportant at once. This made machine translation, speech recognition in the telephone and usable text prediction work for the first time.

<!--t src=ffb81250-->
Two drawbacks remained. The model works through the sequence strictly one item after another, so it can hardly be spread across many processor cores. And everything it wants to retain out of a thousand words has to fit through a single memory state: a bottleneck.

<!--t src=15a14021-->
### Attention: looking at everything at once

<!--t src=fbdcd742-->
The third answer threw out the bottleneck. Instead of squeezing the past into a single state, the model is allowed at every step to look back at **all** previous positions and to weigh for itself which ones matter right now. This weighting is called **attention**.

<!--t src=c93c5576-->
At the word "she" in a long paragraph, the model looks for the place the word refers to and weights it highly. Nothing has to be handed along through a hundred steps; the reference is established directly.

<!--t src=f384b9ae-->
In 2017 a group at Google showed that the loop can be dropped entirely and that attention alone suffices.[^transformer] The result is called the transformer. Because no step has to wait for the previous one any more, training can be distributed across thousands of graphics cards. It is precisely this parallelisability, not any special cleverness of the architecture, that made today's large models possible.

<!--t src=258b9f7b-->
## Not only text

<!--t src=6797e33a-->
Images usually come about differently, following the same basic idea. In **diffusion**, a model learns to remove noise from an image step by step.[^diffusion] To generate, you start with pure noise and let the model denoise until an image stands there. Here too nothing is invented; in many small steps the model predicts how things continue.

<!--t src=5dc738af-->
## What follows from this in practice

<!--t src=4e1a9527-->
- **Different answers:** the estimated probabilities are sampled from. How strongly is governed by a value called the temperature. That is why asking the same question twice is twice the same procedure but not the same answer.
- **Invented sources:** the model produces what plausibly continues, not what is true. An invented reference follows the same statistics as a real one.
- **Window size matters:** whatever lies outside the text window under consideration does not exist for the model.
- **The beginning determines a lot:** because every output is appended to the sequence so far, the opening colours everything that follows. This is why the wording of a request has such a strong effect.

<!--t src=2b6968a6-->
[^lstm]: Sepp Hochreiter, Jürgen Schmidhuber: _Long Short-Term Memory_, Neural Computation 9(8), 1997.

<!--t src=992b6aef-->
[^transformer]: Ashish Vaswani et al.: _Attention Is All You Need_, NeurIPS, 2017.

<!--t src=a8d0effa-->
[^diffusion]: Jonathan Ho, Ajay Jain, Pieter Abbeel: _Denoising Diffusion Probabilistic Models_, NeurIPS, 2020.
