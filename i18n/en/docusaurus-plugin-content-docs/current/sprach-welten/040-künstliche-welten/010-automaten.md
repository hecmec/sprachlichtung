---
id: automata
title: Automata
title_meta: "Automata: From the Turing Machine to the Halting Problem"
sidebar_label: Automata
sidebar_position: 1
description: What is an automaton in Alan Turing's sense? An accessible introduction to Turing machines, computability, the halting problem and complexity.
keywords:
  - Automata
  - Turing machine
  - Alan Turing
  - Computability
  - Halting problem
  - Complexity
last_update:
  date: 2026-07-31
  author: Immanuel Lupinus
completeness: 2/5
draft: false
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=cd7f88e7-->
## What is an automaton?

<!--t src=07f03d48-->
When we speak of automata in everyday life, we think of coffee machines or ticket dispensers. In computer science the word means something more abstract: an automaton is a machine that doggedly follows a rule. It reads a symbol, looks it up in its table of rules, changes its internal state and carries on. No understanding, no reflection, no intuition. Only rules.

<!--t src=b4a036ee-->
That is precisely where the power of this concept lies. Anyone who wants to understand what computers, and later artificial intelligence, can do in principle must first know what a rule-following machine actually is and where its limits lie.

<!--t src=7fe69137-->
## Turing's idea

<!--t src=fe560c19-->
In 1936 the British mathematician Alan Turing imagined the simplest machine conceivable: an infinitely long paper tape divided into cells, and a read-write head positioned over the tape.[^turing] The machine can do only four things:

<!--t src=8dca73b9-->
- read the symbol in the current cell,
- write a symbol into it,
- move one cell to the left or to the right,
- switch to a different state.

<!--t src=809b83ec-->
Nothing more. What it does at each step is laid down in a finite table: "If you are in state 3 and read a 1, then write 0, move right and switch to state 5."

<!--t src=d7cf00d4-->
The astonishing part: this machine can compute everything a modern computer can compute. Your laptop is faster and more convenient, but not more powerful.

<!--t src=f0765d20-->
## A Turing machine made of toilet paper and pebbles

<!--t src=e12fc81a-->
You really can build a Turing machine without any electronics at all. A roll of toilet paper supplies the tape, each sheet is a cell. Pebbles or coins are the symbols: a pebble means 1, an empty sheet means 0. You write your state table on a piece of paper, and your state is a matchstick you place on the current row. You yourself are the read-write head.

<!--t src=6a45c6fc-->
This is not a gimmick but a serious point: computing needs no chip. It needs a medium, rules, and someone or something that carries out the rules mindlessly. What your computer does, you can do with toilet paper too. Just very much more slowly.

<!--t src=90b6793d-->
## Can automata answer every clearly posed question?

<!--t src=e33a1558-->
It is tempting to hope that a machine must be able to answer any question, as long as it is posed precisely enough. Turing showed that this hope is mistaken.

<!--t src=8e740bd0-->
His most famous result is the **halting problem**. The question is this: is there a program that reliably predicts, for any other program whatsoever, whether it will eventually stop or run forever? The question is perfectly clearly posed. And the answer is: no, such a program cannot exist.

<!--t src=371c5dd4-->
The proof works by contradiction. Suppose there were a perfect halting checker. Then one could build a malicious machine that applies this checker to itself and then does exactly the opposite: if the checker says "it halts", it runs forever; if the checker says "it runs forever", it stops at once. So the checker is wrong in either case. Hence it cannot exist.

<!--t src=6d17870f-->
This is a limit of principle, not a technical one. No faster computer, no larger language model and no quantum computer will ever cross it. There are clearly formulated questions that are undecidable in principle.

<!--t src=25c0361b-->
## Finite, infinite, complicated

<!--t src=5b395261-->
Automata come in different strengths, and the differences have to do with memory.

<!--t src=e919edf2-->
A **finite automaton** has only finitely many states and no tape. It can control a set of traffic lights or check whether an email address contains an @. But it cannot count how many brackets are still open, because that would require unlimited memory.

<!--t src=da38ce4f-->
The **Turing machine** with its infinite tape sits at the top of this hierarchy. Between the two lie further models, for instance automata with a stack, which can count brackets but not much else.

<!--t src=1b704b16-->
Even where a task is solvable in principle, the question of cost remains. Some problems can be solved in a reasonable time, others only after millions of years of computation. This distinction between "computable" and "computable in practice" is the subject of complexity theory and the reason encryption works at all.

<!--t src=94de333d-->
## Why this page is here

<!--t src=6c577b6a-->
This chapter is about artificial worlds and artificial intelligence. Everything on the following pages, from probabilities through neural networks to large language models, comes down to automata in the end. They are very large, very fast, very impressive automata. But the limits Turing found in 1936 with paper and pencil apply to all of them.

<!--t src=61d521c3-->
[^turing]: Alan M. Turing: _On Computable Numbers, with an Application to the Entscheidungsproblem_, Proceedings of the London Mathematical Society, 1936.
