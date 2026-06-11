# Restructuring proposal: chapter "Richtig Argumentieren" (020-was-ist-ein-gutes-argument)

> Working note / planning document. Goal: keep all the good existing content,
> but distribute it across sub-pages along a clear learning arc instead of the
> current loosely-ordered list.

## 1. What the chapter currently contains

| File | Title | Core content |
|------|-------|--------------|
| `010-einfuehrung-argumente.md` | Einführung | Mixes 3 things: (a) definition argument/argumentation/premise/conclusion, (b) full Toulmin schema, (c) 4 example dialogues (cooperative / persuade / emotional / against) + chapter overview |
| `020-merkmale-guter-argumente.md` | Merkmale guter Argumente | Klarheit, Relevanz, Angemessenheit, Widerlegbarkeit, Verhältnismäßigkeit |
| `030-rhetorik-versus-argumentation.md` | Rhetorik versus Argumentation | Ethos/Pathos/Logos, Rhetorik vs. Argumentation |
| `040-formales-vs-informelles-schliessen.md` | Formales vs. informelles Schließen | formale vs. informelle Logik |
| `050-muster-gueltiger-argumente.md` | Muster gültiger Argumente | Deduktion/Induktion/Abduktion **plus** Syllogismus, Reductio, Analogie, Abduktion |
| `060-argumente-analysieren.md` | Argumente Analysieren | **DUPLICATE** of 062 (identical body) + a TODO note |
| `062-versteckte-annahmen-erkennen.md` | Versteckte Annahmen erkennen | Arten + Methoden versteckter Annahmen |
| `070-uebung-…` / `080-loesungen.md` | Übung / Lösungen | exercises |
| `090-zusammenfassung.md` | Zusammenfassung | recap |
| `100-quiz-…` | Quiz | quiz |

## 2. The main problems

1. **The intro tries to do too much.** `010` is the only page that defines what
   an argument *is* (premise/conclusion), but that definition is buried in a
   bullet list *and* immediately followed by the full Toulmin schema *and* four
   example dialogues. A reader who just wants "what is an argument?" gets
   overloaded.
2. **No dedicated "What is an argument / how is it built" page.** The chapter
   overview in `010` even *promises* a section "Etwas exakter: Definitionen"
   (Argument, Prämisse, Konklusion, Gültigkeit, Tragfähigkeit) — but that page
   does not exist.
3. **`060` and `062` are near-duplicates.** Identical body about *hidden
   assumptions*. The TODO comment in `060` says the real argument-analysis /
   Toulmin page "ist verschwunden". So: the analysis page is missing, and there
   is a duplicate instead.
4. **Foundational reasoning is mixed with patterns.** Deduktion / Induktion /
   Abduktion (a *foundation* — how reasoning works) sits inside "Muster gültiger
   Argumente" (a *catalogue* of valid forms). These are two different levels.
5. **Order is not a learning arc.** The reader jumps: definitions → quality →
   rhetoric → formal/informal → patterns → analysis. Quality criteria come
   before the reader has seen reasoning types or how to read an argument's
   structure.

## 3. Proposed learning arc

A clean progression from "what & why" → "how reasoning works" → "is it any
good?" → "how do I take one apart":

```
A. Foundations   →  B. Reasoning      →  C. Evaluation      →  D. Analysis      →  E. Practice
   what / why /      types & valid        good vs bad,          take apart,
   structure         patterns             rhetoric, formal      hidden assumptions
```

This matches exactly what you asked for: **first** introduce what argumentation
is and what role it plays, **then** what an argument is and how it is built,
*then* distribute the rest.

## 4. Proposed page structure

### A. Foundations

**`010` Einführung: Was ist Argumentation und wozu?** *(slim down current 010)*
- Was ist Argumentation, welche Rolle spielt sie im Alltag (begründen,
  überzeugen, gemeinsam zur besten Lösung kommen, sich vor Manipulation
  schützen).
- Die vier Gesprächssituationen als Beispiele: kooperativ, überreden (mit
  Gründen), überreden (mit Emotionen), gegeneinander. *(keep the 4 dialogue
  boxes here — they belong to "what is argumentation", not to "what is an
  argument")*
- Kapitelüberblick (the "Überblick des Kapitels" block — update it to the new
  page list).
- **Remove from here:** the Prämisse/Konklusion definition bullets and the full
  Toulmin schema → move to the new page below.

**`020` Was ist ein Argument? Aufbau und Begriffe** *(NEW — fills the promised
"Definitionen" gap)*
- Kerndefinition: ein Argument = **Prämissen** + **Konklusion** (move the
  bullet definitions out of 010 and expand them).
- Struktur sichtbar machen: Prämissen erkennen, Konklusion erkennen,
  Signalwörter ("weil", "also", "daher").
- Saubere Begriffe: Argument, Prämisse, Konklusion, **Gültigkeit**,
  **Tragfähigkeit/Solidität** (the vocabulary the overview already promises).
- **Toulmin-Schema** als Modell des inneren Aufbaus *(moved here from 010 — it
  is literally "how an argument is built", so it belongs to this page, not the
  general intro)*.

### B. Reasoning

**`030` Arten des Schließens: Deduktion, Induktion, Abduktion** *(EXTRACT from
current 050)*
- The Peirce section (Deduktion/Induktion/Abduktion, the mermaid diagram, the
  Merksatz). This is foundational and should come *before* the catalogue of
  patterns.

**`040` Muster gültiger Argumente** *(current 050 minus the part moved to 030)*
- Kategorischer Syllogismus, Reductio ad Absurdum, Analogieargument, Abduktion
  als Argumentform.
- Optionally pull in Modus Ponens / Modus Tollens here too (the overview text
  mentions them but no page currently delivers them).

### C. Evaluation

**`050` Merkmale guter Argumente** *(current 020, unchanged)*

**`060` Rhetorik versus Argumentation** *(current 030, unchanged)*

**`070` Formales vs. informelles Schließen** *(current 040, unchanged)*

### D. Analysis

**`080` Argumente analysieren** *(REBUILD the "verschwundene" page)*
- This is where the missing argument-analysis content goes: reconstructing an
  argument, identifying premises/conclusion, *applying* the Toulmin schema in
  practice. (See the TODO links already in `060`.)

**`090` Versteckte Annahmen erkennen** *(current 062 — keep ONE copy)*
- Arten (Wert-, faktische, konzeptuelle, kausale Annahmen) + Methoden
  (Warum-Kette, Negationstest, Perspektivenwechsel, Analogieprüfung).
- **Delete `060-argumente-analysieren.md`** (it is the duplicate body of 062).

### E. Practice

- **`100` Übung** *(current 070)*
- **`110` Lösungen** *(current 080)*
- **`120` Zusammenfassung** *(current 090 — update the bullet list to the new
  structure)*
- **`130` Quiz** *(current 100)*

## 5. Old → new mapping (at a glance)

| New page | Source |
|----------|--------|
| 010 Einführung (slim) | 010 minus definitions/Toulmin |
| 020 Was ist ein Argument? (NEW) | definition bullets + Toulmin, both from 010 |
| 030 Deduktion/Induktion/Abduktion | extracted from 050 |
| 040 Muster gültiger Argumente | rest of 050 |
| 050 Merkmale guter Argumente | 020 (as-is) |
| 060 Rhetorik vs. Argumentation | 030 (as-is) |
| 070 Formales vs. informelles Schließen | 040 (as-is) |
| 080 Argumente analysieren (REBUILD) | new content + 060 TODO links |
| 090 Versteckte Annahmen erkennen | 062 (keep one copy) |
| — delete — | 060 (duplicate of 062) |
| 100–130 Übung/Lösung/Zusammenfassung/Quiz | 070/080/090/100 |

## 6. Concrete clean-up actions (independent of the big restructure)

These are worth doing even if the full reorg waits:

1. **Delete the duplicate** `060-argumente-analysieren.md`, or repurpose it into
   the real "Argumente analysieren" page (its title already says so).
2. **Split `050`**: pull Deduktion/Induktion/Abduktion into its own page.
3. **Move the Toulmin schema** out of the intro into a dedicated structure page.
4. **Update the "Überblick des Kapitels"** in `010` and the recap in `090` to
   match whatever final page list you choose.

> Note: sidebar order is driven by the numeric file prefixes (autogenerated
> sidebar), so renumbering files is enough — no `sidebars.ts` edits needed.
> Remember the umlaut-folder link caveat if you add cross-page relative links.
