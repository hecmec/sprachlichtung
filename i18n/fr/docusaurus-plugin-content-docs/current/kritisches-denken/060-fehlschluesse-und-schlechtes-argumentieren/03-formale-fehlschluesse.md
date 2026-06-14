---
title: Sophismes formels
sidebar_label: Sophismes formels
id: sophismes_formels
sidebar_position: 3
description: Analyse des sophismes formels courants qui, indépendamment du contenu, enfreignent les règles de la structure logique
keywords:
  - sophismes formels
  - affirmation du conséquent
  - négation de l'antécédent
  - quaternio terminorum
  - moyen terme non distribué
  - structure logique
  - syllogisme
last_update:
  date: 2026-02-11
  author: Immanuel Lupinus
translation_status: auto
custom_translation_overwritten: false
---

<!--t src=b715d897-->
<!-- ## Formale Fehlschlüsse -->

<!--t src=2aa2da81-->
Les sophismes formels enfreignent les règles de la logique formelle. Ils sont structurellement erronés, indépendamment du contenu spécifique des énoncés.

<!--t src=b2a927e7-->
Tous les sophismes formels sont des cas particuliers du **Non sequitur** (du latin pour "cela ne suit pas")

<!--t src=a1a25048-->
## 1. Affirmation du conséquent (Affirming the Consequent)

<!--t src=16669b58-->
Ce sophisme a la forme suivante :

<!--t src=d1e42aba-->
1. Si A, alors B.
2. B est vrai.
3. Donc A est vrai.

<!--t src=895c5326-->
### Exemple :

<!--t src=118339c0-->
1. S'il pleut, la rue est mouillée.
2. La rue est mouillée.
3. Donc il pleut.

<!--t src=072b7b42-->
### Pourquoi est-ce erroné ?

<!--t src=ec3de9ef-->
Il existe peut-être d'autres raisons pour qu'une rue soit mouillée (par exemple un nettoyage de la chaussée, une conduite d'eau éclatée). Le sophisme consiste à conclure de la vérité du conséquent (B) à la vérité de l'antécédent (A).

<!--t src=cbf92f11-->
### Diagramme de Venn

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
  <text x="155" y="40" font-size="16" id="svg_14">R (Pluie)</text>
  <text x="285" y="40" font-size="16" id="svg_15">N (Rue mouillée)</text>
 </g>
</svg>

<!--t src=06ff4f44-->
## 2. Négation de l'antécédent (Denying the Antecedent)

<!--t src=16669b58-->
Ce sophisme a la forme suivante :

<!--t src=1e30b8e7-->
1. Si A, alors B.
2. A n'est pas vrai.
3. Donc B n'est pas vrai.

<!--t src=895c5326-->
### Exemple :

<!--t src=ede3780a-->
1. Si quelqu'un a de la fièvre, il est malade.
2. Max n'a pas de fièvre.
3. Donc Max n'est pas malade.

<!--t src=072b7b42-->
### Pourquoi est-ce erroné ?

<!--t src=b9adaa6c-->
Il existe peut-être d'autres raisons pour lesquelles quelqu'un pourrait être malade, même sans avoir de fièvre. Le sophisme consiste à conclure de la fausseté de l'antécédent (A) à la fausseté du conséquent (B).

<!--t src=cbf92f11-->
### Diagramme de Venn

<!--t src=44c0ca30-->
Le diagramme de Venn a la même forme que dans l'exemple précédent.

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
  <text x="155" y="40" font-size="16" id="svg_14">F (Fièvre)</text>
  <text x="285" y="40" font-size="16" id="svg_15">K (malade)</text>
 </g>
</svg>
<!-- TODO:  
Wenn ich in Wien bin, bin ich in Österreich.
	Ich bin nicht in Wien.
'non sequitur' 	Deshalb bin ich auch nicht in Österreich.  -->

<!--t src=1663f7c5-->
## 3. Quaternio terminorum (sophisme des quatre termes)

<!--t src=24190d11-->
Ce sophisme apparaît dans les syllogismes catégoriques lorsqu'un terme est employé avec des significations différentes, de sorte que le syllogisme contient en réalité quatre termes au lieu de trois.

<!--t src=82b4e76e-->
**Exemple :**
1. Toutes les étoiles brillent dans le ciel.
2. Certains acteurs de cinéma sont des stars (des étoiles).
3. Donc certains acteurs de cinéma brillent dans le ciel.

<!--t src=d3ad64a1-->
**Pourquoi est-ce erroné ?** Le terme "étoile/star" est employé avec deux significations différentes (corps céleste vs. personne célèbre). De ce fait, le syllogisme contient en réalité quatre termes au lieu de trois, ce qui rend la structure logique invalide.

<!--t src=4a9b3b04-->
## 4. Sophisme du moyen terme non distribué (Undistributed Middle)

<!--t src=e930e8b0-->
Ce sophisme apparaît dans les syllogismes catégoriques lorsque le moyen terme n'est employé de façon complète (distributive) dans aucune des prémisses.

<!--t src=45a05c10-->
**Exemple :**
1. Tous les chiens sont des mammifères.
2. Tous les chats sont des mammifères.
3. Donc tous les chiens sont des chats.

<!--t src=4de80c71-->
**Pourquoi est-ce erroné ?** Le moyen terme "mammifères" n'est employé de façon complète dans aucune des prémisses. Le sophisme consiste à conclure d'une propriété commune (tous deux sont des mammifères) à une identité.

<!--t src=cbf92f11-->
### Diagramme de Venn

<!--t src=b8a247a4-->
Comme on peut le voir, après avoir exclu (hachures) les chiens non-mammifères et les chats non-mammifères, il n'existe aucun chevauchement obligatoire entre les chiens et les chats, bien que les deux soient des mammifères. Notre exemple m est un chien et un mammifère, mais pas un chat.\
Les informations des prémisses ne suffisent toutefois pas à exclure des animaux qui seraient à la fois des chats et des chiens.

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
  <text id="svg_15" font-size="16" y="40" x="130">H (Chiens)</text>
  <text id="svg_16" font-size="16" y="40" x="360">K (Chats)</text>
  <text id="svg_17" font-size="16" y="395" x="200">S (Mammifères)</text>
 </g>
</svg>
