---
id: 03-formale-fehlschluesse
title: Formal Fallacies
sidebar_position: 3
description: Analysis of common formal fallacies that violate the rules of logical structure regardless of content
keywords:
  - formal fallacies
  - affirming the consequent
  - denying the antecedent
  - quaternio terminorum
  - undistributed middle
  - logical structure
  - syllogism
last_update:
  date: 2026-02-11
  author: Immanuel Lupinus
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=b715d897-->
<!-- ## Formal Fallacies -->

<!--t src=2aa2da81-->
Formal fallacies violate the rules of formal logic. They are structurally flawed, regardless of the specific content of the statements.

<!--t src=b2a927e7-->
All formal fallacies are special cases of **Non sequitur** (Latin for "it does not follow").

<!--t src=a1a25048-->
## 1. Affirming the Consequent

<!--t src=16669b58-->
This fallacy has the following form:

<!--t src=d1e42aba-->
1. If A, then B.
2. B is true.
3. Therefore A is true.

<!--t src=895c5326-->
### Example:

<!--t src=118339c0-->
1. If it is raining, the street is wet.
2. The street is wet.
3. Therefore it is raining.

<!--t src=072b7b42-->
### Why is this flawed?

<!--t src=ec3de9ef-->
There may be other reasons for a wet street (e.g. street cleaning, a burst water pipe). The fallacy lies in inferring the truth of the antecedent (A) from the truth of the consequent (B).

<!--t src=cbf92f11-->
### Venn Diagram

<!--t src=11a8b1ec-->
<!-- <p style="text-align:center; margin:20px">
  <img src="img/venn_diag_regen_nass.png" alt="venn diagram" style="max-width:600px; display:block; margin:0 auto;" />
</p> -->
<!-- https://freesvgeditor.com/fr/svg-editor-online -->
<svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <!-- Schraffur -->
  <!-- Clip für Schnittmenge -->
  <clipPath id="clipR">
   <circle cx="200" cy="150" r="90" id="svg_1"/>
  </clipPath>
  <!-- Maske für R \ N -->
  <mask id="maskN">
   <rect x="0" y="0" width="500" height="300" fill="white" id="svg_2"/>
   <circle cx="280" cy="150" r="90" fill="black" id="svg_3"/>
  </mask>
  <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6">
   <line x1="0" y1="0" x2="6" y2="6" stroke="black" id="svg_4"/>
  </pattern>
 </defs>
 <g>
  <title>Layer 1</title>
  <!-- Hintergrund -->
  <rect x="0" y="0" width="500" height="300" fill="white" id="svg_5"/>
  <!-- N (Straße nass) blau -->
  <circle cx="280" cy="150" r="90" fill="#6fa8dc" id="svg_6"/>
  <!-- R (Regen) gelb -->
  <circle cx="200" cy="150" r="90" fill="#ffd966" id="svg_7"/>
  <!-- Überschneidung R ∩ N grün -->
  <circle cx="280" cy="150" r="90" fill="#93c47d" clip-path="url(#clipR)" id="svg_8"/>
  <!-- Verbotener Bereich R \ N -->
  <circle cx="200" cy="150" r="90" fill="url(#hatch)" mask="url(#maskN)" id="svg_9"/>
  <!-- Umrisse -->
  <circle cx="200" cy="150" r="90" fill="none" stroke="black" stroke-width="2" id="svg_10"/>
  <circle cx="280" cy="150" r="90" fill="none" stroke="black" stroke-width="2" id="svg_11"/>
  <!-- Punkt m: nass, aber kein Regen -->
  <circle cx="320" cy="150" r="4" fill="black" id="svg_12"/>
  <!-- Labels -->
  <text x="328" y="155" font-size="14" id="svg_13">m</text>
  <text x="155" y="40" font-size="16" id="svg_14">R (rain)</text>
  <text x="285" y="40" font-size="16" id="svg_15">N (wet street)</text>
 </g>
</svg>

<!--t src=06ff4f44-->
## 2. Denying the Antecedent

<!--t src=16669b58-->
This fallacy has the following form:

<!--t src=1e30b8e7-->
1. If A, then B.
2. A is not true.
3. Therefore B is not true.

<!--t src=895c5326-->
### Example:

<!--t src=ede3780a-->
1. If someone has a fever, they are ill.
2. Max does not have a fever.
3. Therefore Max is not ill.

<!--t src=072b7b42-->
### Why is this flawed?

<!--t src=b9adaa6c-->
There may be other reasons why someone could be ill, even without having a fever. The fallacy lies in inferring the falsity of the consequent (B) from the falsity of the antecedent (A).

<!--t src=cbf92f11-->
### Venn Diagram

<!--t src=44c0ca30-->
The Venn diagram has the same form as in the previous example.

<!--t src=283fdfbc-->
<!-- <p style="text-align:center; margin:20px">
  <img src="img/venn_diag_max_fieber_krank.png" alt="venn diagram" style="max-width:600px; display:block; margin:0 auto;" />
</p> -->

<!--t src=828ff7b6-->
<svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <!-- Schraffur -->
  <!-- Clip für Schnittmenge -->
  <clipPath id="clipR">
   <circle cx="200" cy="150" r="90" id="svg_1"/>
  </clipPath>
  <!-- Maske für R \ N -->
  <mask id="maskN">
   <rect x="0" y="0" width="500" height="300" fill="white" id="svg_2"/>
   <circle cx="280" cy="150" r="90" fill="black" id="svg_3"/>
  </mask>
  <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6">
   <line x1="0" y1="0" x2="6" y2="6" stroke="black" id="svg_4"/>
  </pattern>
 </defs>
 <g>
  <title>Layer 1</title>
  <!-- Hintergrund -->
  <rect x="0" y="0" width="500" height="300" fill="white" id="svg_5"/>
  <!-- N (Straße nass) blau -->
  <circle cx="280" cy="150" r="90" fill="#6fa8dc" id="svg_6"/>
  <!-- R (Regen) gelb -->
  <circle cx="200" cy="150" r="90" fill="#ffd966" id="svg_7"/>
  <!-- Überschneidung R ∩ N grün -->
  <circle cx="280" cy="150" r="90" fill="#93c47d" clip-path="url(#clipR)" id="svg_8"/>
  <!-- Verbotener Bereich R \ N -->
  <circle cx="200" cy="150" r="90" fill="url(#hatch)" mask="url(#maskN)" id="svg_9"/>
  <!-- Umrisse -->
  <circle cx="200" cy="150" r="90" fill="none" stroke="black" stroke-width="2" id="svg_10"/>
  <circle cx="280" cy="150" r="90" fill="none" stroke="black" stroke-width="2" id="svg_11"/>
  <!-- Punkt m: nass, aber kein Regen -->
  <circle cx="320" cy="150" r="4" fill="black" id="svg_12"/>
  <!-- Labels -->
  <text x="328" y="155" font-size="14" id="svg_13">m</text>
  <text x="155" y="40" font-size="16" id="svg_14">F (fever)</text>
  <text x="285" y="40" font-size="16" id="svg_15">K (ill)</text>
 </g>
</svg>
<!-- TODO:  
Wenn ich in Wien bin, bin ich in Österreich.
	Ich bin nicht in Wien.
'non sequitur' 	Deshalb bin ich auch nicht in Österreich.  -->

<!--t src=1663f7c5-->
## 3. Quaternio Terminorum (Fallacy of Four Terms)

<!--t src=24190d11-->
This fallacy occurs in categorical syllogisms when a term is used with different meanings, so that the syllogism actually contains four terms instead of three.

<!--t src=82b4e76e-->
**Example:**
1. All stars shine in the sky.
2. Some film actors are stars.
3. Therefore some film actors shine in the sky.

<!--t src=d3ad64a1-->
**Why is this flawed?** The term "star" is used with two different meanings (celestial body vs. famous person). As a result, the syllogism actually contains four terms instead of three, which makes the logical structure invalid.

<!--t src=4a9b3b04-->
## 4. Fallacy of the Undistributed Middle

<!--t src=e930e8b0-->
This fallacy occurs in categorical syllogisms when the middle term is not used in full (distributively) in either premise.

<!--t src=45a05c10-->
**Example:**
1. All dogs are mammals.
2. All cats are mammals.
3. Therefore all dogs are cats.

<!--t src=4de80c71-->
**Why is this flawed?** The middle term "mammals" is not used in full in either premise. The fallacy lies in inferring identity from a shared property (both are mammals).

<!--t src=cbf92f11-->
### Venn Diagram

<!--t src=b8a247a4-->
As you can see, once the non-mammal dogs and non-mammal cats have been excluded (hatching), there is no necessary overlap between dogs and cats, even though both are mammals. Our example m is a dog and a mammal but not a cat.\
The information in the premises is not sufficient, however, to rule out animals that are both cats and dogs at the same time.

<!--t src=d762c975-->
<svg width="520" height="420" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <!-- Schraffur -->
  <!-- Maske: alles außer S -->
  <mask id="maskS">
   <rect id="svg_1" fill="white" height="420" width="520" y="0" x="0"/>
   <circle id="svg_2" fill="black" r="110" cy="260" cx="260"/>
  </mask>
  <pattern height="6" width="6" patternUnits="userSpaceOnUse" id="hatch">
   <line id="svg_3" stroke="black" y2="6" x2="6" y1="0" x1="0"/>
  </pattern>
 </defs>
 <g>
  <title>Layer 1</title>
  <!-- Hintergrund -->
  <rect id="svg_4" fill="white" height="420" width="520" y="0" x="0"/>
  <!-- Kreise (gleich groß, symmetrisch) -->
  <!-- Hunde -->
  <circle id="svg_5" fill-opacity="0.6" fill="#ffd966" r="110" cy="170" cx="210"/>
  <!-- Katzen -->
  <circle id="svg_6" fill-opacity="0.6" fill="#6fa8dc" r="110" cy="170" cx="310"/>
  <!-- Säugetiere -->
  <circle id="svg_7" fill-opacity="0.3" fill="#e06666" r="110" cy="260" cx="260"/>
  <!-- Verbotene Bereiche -->
  <!-- H \ S -->
  <circle id="svg_8" mask="url(#maskS)" fill="url(#hatch)" r="110" cy="170" cx="210"/>
  <!-- K \ S -->
  <circle id="svg_9" mask="url(#maskS)" fill="url(#hatch)" r="110" cy="170" cx="310"/>
  <!-- Umrisse -->
  <circle id="svg_10" stroke-width="2" stroke="black" fill="none" r="110" cy="170" cx="210"/>
  <circle id="svg_11" stroke-width="2" stroke="black" fill="none" r="110" cy="170" cx="310"/>
  <circle id="svg_12" stroke-width="2" stroke="black" fill="none" r="110" cy="260" cx="260"/>
  <!-- Punkt m: Hund, Säugetier, keine Katze -->
  <circle id="svg_13" fill="black" r="4" cy="245" cx="190"/>
  <!-- Labels -->
  <text id="svg_14" font-size="14" y="250" x="200">m</text>
  <text id="svg_15" font-size="16" y="40" x="130">H (dogs)</text>
  <text id="svg_16" font-size="16" y="40" x="360">K (cats)</text>
  <text id="svg_17" font-size="16" y="395" x="200">S (mammals)</text>
 </g>
</svg>
