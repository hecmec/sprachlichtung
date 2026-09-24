<!--
Torsten Wilholt: Logik und Argumentation. Materialien zu einführenden Vorlesungen über formale Logik und
Argumentationstheorie. Leibniz Universität Hannover, 2007, zuletzt überarbeitet 2014 (tinyurl.com/wilholtlogik).
Canonical source: book_logic_Wilholt-Logik-und-Argumentation.pdf. This file is a derived extract: do not hand-edit, regenerate instead.
Extraction 2026-09-24: page-image transcription by LLM agents (pdftotext -layout as helper; its private-font glyphs
were corrected from the images); every chunk verified against the PDF page images, plus automated checks
(page markers, all 606 slide numbers on the right pages, truth-tree numbering, sequent-proof labels, triangle-box counts).
Conventions: page markers give printed page and PDF page; slides are level-3 headings "N. Titel"; grey comment boxes
are blockquotes; triangle-marked principles start with the triangle symbol; math is LaTeX between dollar signs;
truth trees and sequent proofs are text code blocks; "sic" comments mark errors printed in the original.
-->

<!-- p. – | pdf 1 -->
# Logik und Argumentation

Materialien zu einführenden Vorlesungen über formale Logik und Argumentationstheorie

Prof. Dr. Torsten Wilholt
Institut für Philosophie
Leibniz Universität Hannover

torsten.wilholt@philos.uni-hannover.de

Verfügbar unter tinyurl.com/wilholtlogik

Zuerst erstellt 2007
Zuletzt überarbeitet 2014

<!-- p. ii | pdf 2 -->
## Inhalt /Gliederung

- 1. Logik und Argumentation: Einführung — 1

  Logik 1; Argumente 1; Gründe 1; Überzeugungen begründen / Überzeugungen verursachen 2; Gültigkeit 3; Gültige und schlüssige Argumente 3; Deduktive Gültigkeit 5; Deduktive und induktive Gültigkeit 5; Formale Logik 6; Logische Form 8; Illustration: deduktive Gültigkeit, Schlüssigkeit und Wahrheit 8; Eine einfache Heuristik zur Überprüfung deduktiver Argumente 9; Logische Form und grammatische Form 11; Formale Sprachen 11; Eine Logik oder mehrere Logiken? 12; Wozu formale Logik studieren? 12; Bietet die formale Logik eine *ausreichende* Grundlage für die Beurteilung von Argumenten? 13

- 2. Aussagenlogik: Grundsätzliches und Syntax — 15

  Aussagen 15; Satz vom ausgeschlossenen Dritten 16; Zweiwertigkeit der Logik 16; Zusammengesetzte und atomare Aussagen 17; Wahrheitsfunktionale Aussagenverknüpfungen 17; Das Ziel der Aussagenlogik 18; Die Konjunktion 18; Die Adjunktion 19; Die Negation 20; Die Subjunktion 21; Die Bisubjunktion 23; Beispiel: Ein aussagenlogisches Argument 23; Objekt- und Metasprache 24; Syntax und Semantik 26; Die Syntax der Sprache AL 26; Wohlgebildete Sätze der Sprache AL 27; Hauptzeichen 27; Nicht wohlgebildete Zeichenketten 27; Klammerersparnis 27; Die Junktoren der Aussagenlogik 28

- 3. Aussagenlogik: Semantik — 28

  Die Semantik der Sprache AL 28; Intensionale Interpretation 29; Extensionale Interpretation 29; Semantische Regeln der Sprache AL 30; Erinnerung: Wahrheitstafeln 30; Anwendung der semantischen Regeln 30

- 4. Aussagenlogik: Logik — 31

  Deduktive Argumente und logische Form in AL 31; Logische Form in AL 31; Deduktiv gültige Argumente in AL 32; Das Zeichen „⊨“ 33; Aussagenlogische Gültigkeit 34; Gebräuchliche Formen aussagenlogisch gültiger Argumente 35; Logische Wahrheit 37; Logische Wahrheit und das Zeichen „⊨“ 37; Logische Wahrheit und logische Folgerung 39; Tautologien folgen aus jeder Prämisse 39; Widersprüchliche Aussagen 39; Inkonsistente Aussagen(mengen) 39; Einige logische Begriffe 40; Aus einer Inkonsistenz folgt jede Aussage 40; Logische Äquivalenz 41; Das Einsetzungstheorem 41; Das Einsetzungstheorem: Was ist ein „echter Teilsatz“? 41; Wichtige aussagenlogische Äquivalenzen 42; Kommutativität 42; Assoziativität 42; Distributivität 43; DeMorgansche Gesetze 43; Äquivalenzen der Subjunktion 43; Äquivalenzen der Bisubjunktion 43; Das Substitutionstheorem 43; Umformungen nach Einsetzungs- und Substitutionstheorem 44; Ausdrückbarkeit von AL 45; Sheffer-Strich 46; Einige nützliche Regeln 46

- 5. Das Wahrheitsbaumverfahren für die Aussagenlogik — 47

  Das Wahrheitsbaumverfahren 47; Das Wahrheitsbaumverfahren: Grundidee 47; Wahrheitsbäume: Zweites Beispiel 49; Wahrheitsbäume: Vereinfachte Schreibweise 49; Wie sind die Regeln für alle Junktoren begründet? 50; Wahrheitsbäume: Alle Regeln für AL 51; Ein unabschließbarer Wahrheitsbaum 51; Grundeigenschaften des Wahrheitsbaumverfahrens für AL 52; Logische Folgerungen mit dem Wahrheitsbaumverfahren überprüfen 53; Verwendungsweisen des Wahrheitsbaumverfahrens 54; Die Ausführung des Wahrheitsbaumverfahrens: Praktische Hinweise 54; Die Ausführung des Wahrheitsbaumverfahrens: Praktische Hinweise 55; Die Nützlichkeit des Wahrheitsbaumverfahrens 57; Beweis der Korrektheit des Wahrheitsbaumverfahrens für AL 58; Beweis der Vollständigkeit des Wahrheitsbaumverfahrens für AL 59

<!-- p. iii | pdf 3 -->
- 6. Formalisierungen mit Hilfe der Aussagenlogik — 60

  Formalisierung durch intensionale Interpretation 60; Gelungene Formalisierung 61; Strukturreich formalisieren! 61; Konjunktionen 62; Adjunktionen 63; Negationen 63; Negation und Gegensatz 64; Subjunktionen 65; Notwendige und hinreichende Bedingungen 66; Bisubjunktionen 66

- 7. Typische aussagenlogische Argumentformen und formale Fehlschlüsse — 66

  Deduktiv gültige aussagenlogische Argumente 66; Modus Ponens 67; Disjunktiver Syllogismus 67; Konjunktiver Syllogismus 67; Hypothetischer Syllogismus 67; Klassisches Dilemma 67; Reductio ad absurdum 68; Formale Fehlschlüsse 68; Bejahung des Konsequens (*fallacia consequentis*) 68; Verneinung des Antecedens 69; Disjunktiver Fehlschluss 69; Beispiele 69; Allgemeine Regel für die Kritik von Argumenten 72

- 8. Voraussetzungen von Argumenten: Implizite Prämissen, Zirkel und präsumptive Fehlschlüsse — 72

  Implizite Voraussetzungen 72; Explizit und implizit 73; Implikaturen 74; Implizite Voraussetzungen als Implikaturen 75; Logisch stärker – logisch schwächer 76; Die kritische Rolle von Voraussetzungen: Zirkularität 77; Zirkularität (*petitio principii*) 77; Präsumptive Fehlschlüsse 78; Falsche Dichotomie 78; Fehlschluss der Teilung 79; Der Schluss vom Ganzen auf den Teil: Nicht immer ein Fehlschluss! 79; Fehlschluss der Verbindung 79; … auch nicht immer ein Fehlschluss 80; Teil und Ganzes 80; Genetischer Fehlschluss 80; *Argumentum ad hominem* 81; „Ad hominem“ in der Philosophie 82; *Argumentum ad hominem*: Immer ein Fehlschluss? 82; *Ipse dixit* 82; Autorität und Expertise 83; *Argumentum ad populum* 84; Die Berufung auf allgemein Bekanntes 85; *Argumentum ad ignorantiam* 85; Die Berufung auf das Nichtvorliegen von Beweisen 86

- 9: Prädikatenlogik: Syntax — 86

  Motivation der Prädikatenlogik 86; Binnenstruktur von Aussagen 87; Quantifizierte Aussagen 87; Prädikatenlogik 88; Begriff und Gegenstand 88; Logische Subjekte, logische Prädikate 89; Mehrstellige Prädikate 89; Logisches Subjekt und logisches Prädikat – Mehrdeutigkeiten 90; Quantoren 90; Variablen 91; PL-Sprachen 92; Die Syntax der PL-Sprachen: Deskriptive Grundzeichen 92; Die Syntax der PL-Sprachen: Logische Grundzeichen 92; Verschiedene PL-Sprachen 93; Der syntaktische Aufbau von PL-Sprachen 93; Wirkungsbereiche der Quantoren 95; Gebundene und freie Variablen 95; Sätze von PL-Sprachen 96; Klammerersparnis in PL-Sprachen 96; Beispiele für fehlerhaft gebildete „Sätze“ 97; Alternative Notation 97; E-Mail-Notation 97

- 10. Prädikatenlogik: Semantik — 98

  Interpretationen von PL-Sprachen 98; Offene Sätze 100; Beispiel: die Sprache $L_L$ 100; Die Interpretation der Sprache $L_L$ 100; Wahrheit in PL-Sprachen 101; Wahrheit in PL-Sprachen: Existenzsätze 102; Wahrheit in PL-Sprachen: Allsätze 103; Wahrheit in PL-Sprachen: Verschränkte Quantifikation 103; Mögliche syntaktische Abwegigkeiten in den PL-Sprachen 104; Einige erste Beispiele für die Bedeutung quantifizierter Sätze 104

- 11. Prädikatenlogik: Formalisierungen — 106

  Formalisierungen mit Hilfe von PL-Sprachen 106; Der Standard-Träger $D_K$ 107; Relativierte All- und Existenzaussagen 108; Formalisierung und argumentativer Kontext 108; Ein Prädikat oder mehrere? 109; Quantifizierte Aussagen: „alle“, „jede(r)“ 111; Quantifizierte Aussagen: Allaussagen ohne quantifizierende Ausdrücke 111; „Es gibt“, „existieren“ 111; „manche“, „einige“ 112; „irgend…“ 112; „ein“ 113; „kein“ 113; Quantifizierte Bedingungssätze 114; Weitere Beispiele für prädikatenlogische Formalisierungen 115

<!-- p. iv | pdf 4 -->
- 12. Prädikatenlogik: Logik — 117

  Logische Wahrheit in PL-Sprachen 117; Deduktive Gültigkeit / logische Folgerung in PL-Sprachen 118; Das Symbol „⊨“: 118; Logische Wahrheit und logische Folgerung 118; Inkonsistente Aussagen(mengen) in PL-Sprachen 119; Logisch wahre Konklusionen; inkonsistente Prämissen 119; Logische Äquivalenz in PL-Sprachen 119; Universaler Abschluss 120; Logische Äquivalenz von Ausdrücken in PL-Sprachen 120; Ein prädikatenlogisches Substitutionstheorem für aussagenlogische Äquivalenzen 121; Einsetzungstheorem für die Prädikatenlogik 121; Spezifisch prädikatenlogische Äquivalenzen 122; Die fundamentalen Quantorenäquivalenzen 122; Quantorenvertauschung 123; Quantorenaufteilung / -zusammenführung 124; Weitere Äquivalenzen 125; Wichtige Äquivalenzen: Übersicht 126

- 13. Das Wahrheitsbaumverfahren für die Prädikatenlogik — 127

  Erweiterung des Wahrheitsbaumverfahrens 127; Neue Regeln 129; Anwendungsbeispiele 131; Ein unabschließbarer Wahrheitsbaum 133; Weitere Beispiele für die Anwendung des Verfahrens 134; Korrektheit des prädikatenlogischen Wahrheitsbaumverfahrens 136; Vollständigkeit des prädikatenlogischen Wahrheitsbaumverfahrens 137; Der Satz von Löwenheim und Skolem 140; Syntaktische Charakterisierbarkeit 140; Nicht-Charakterisierbarkeit der Logik zweiter Stufe 140; Unentscheidbarkeit der Prädikatenlogik 141

- 14. Typische prädikatenlogische Argumentformen und formale Fehlschlüsse — 141

  Extensionen von Prädikaten 141; Euler-Venn-Diagramme 141; PL-Sätze in Euler-Venn-Diagrammen darstellen 142; Kategorische Aussagen 143; Kategorische Syllogismen (Beispiel: „Barbara“) 144; (Beispiel: „Camenes“) 145; (Beispiel: „Darii“) 146; (Beispiel: „Baroco“) 147; (Beispiel: „Ferison“) 147; Quasi-Syllogismus 148; Viele gültige Argumentformen 148; Formale Fehlschlüsse 148; Bejahung des Konsequens (*fallacia consequentis*) 148; Verneinung des Antecedens 149; Quantorenschwindel 149; Beispiele 150

- 15. Prädikatenlogik mit Identität — 152

  Das Identitätsprädikat 152; „Es gibt mehrere …“ 152; Eindeutige Existenzaussagen 152; Einzigkeit, Eindeutigkeit 153; Eindeutige und ein-eindeutige Relationen 153; Numerische Quantoren 153; Kennzeichnungen 154; Das Wahrheitsbaumverfahren für die Prädikatenlogik mit Identität 155; Gesamtübersicht der Regeln des Wahrheitsbaumverfahrens 156

- 16. Begriffe, Definitionen und Mehrdeutigkeit in Argumenten — 158

  Begriff und Gegenstand 158; Begriffe und Wörter 159; Sätze und Propositionen 159; Begriffsumfang und Begriffsinhalt 160; Klassische Begriffskonzeption 160; Weitere Beispiele 161; Klassische Begriffskonzeption: Schwierigkeiten 161; Die Familienähnlichkeits-Konzeption 161; Definitionen 163; Definitionen: verschiedene Funktionen 163; Verschiedene Arten von Definitionen: Stipulative Definitionen 164; Analytische Definitionen 164; Explikationen 165; Funktionen und Arten von Definitionen 165; Die Form von Definitionen: Definiendum und Definiens 165; Die Form von Definitionen (traditionell) 166; Die Form von Definitionen (modern) 166; Die Korrektheit von Definitionen 167; Die Eignung von Definitionen 169; Zirkuläre Definitionen 169; Definitionen in der Philosophie: Begriffsanalyse 170; *A priori* 170; Begriffsanalyse und Notwendigkeit 170; Begriffsanalyse: Beispiel 171; Mehrdeutigkeit in Argumenten 172; Äquivokation 172; Äquivokation: Beispiele 172; *Quaternio terminorum* 174; Mehrdeutigkeiten der logischen Form 175; *Ignoratio elenchi* 175; *Ignoratio elenchi*: Beispiele 176

<!-- p. v | pdf 5 -->
- 17. Formen induktiver Argumente — 177

  Induktive Argumente 177; Besonderheiten induktiver Argumente 177; Formen induktiver Argumente 177; Enumerative Induktion 177; Statistischer Syllogismus 178; Besonderheiten induktiver Argumente 180; *Requirement of total evidence* 181; Wie funktionieren induktive Argumente? 181

- 18. Wahrscheinlichkeit — 181

  Wahrscheinlichkeit: Zwei „Sprachen“ 181; Grundbegriffe der Wahrscheinlichkeitstheorie 182; Bedingte Wahrscheinlichkeit 183; Übertragung der Regeln auf bedingte Wahrscheinlichkeiten 184; Bayessche Regel 185; Ein Rechenbeispiel 185; Totale Wahrscheinlichkeit 186; Ein induktives Argument 187; Verschiedenartige Interpretationen 187; Die klassische Interpretation 188; Die Häufigkeits-Interpretation 188; Die Häufigkeits-Interpretation: Schwierigkeiten 189; Die Neigungs-Interpretation 189; Die subjektive Interpretation 190; Subjektive Wahrscheinlichkeit und Wettquote 190; Kurs und Wettquote 190; Subjektive Wahrscheinlichkeit und Wahrscheinlichkeitstheorie: Das Dutch Book Theorem 191

- 19. Induktives Schließen, Wahrscheinlichkeit und das Induktionsproblem — 192

  Subjektive Wahrscheinlichkeit und induktive Argumente 192; Subjektive Wahrscheinlichkeit und induktive Argumente: Beispiele 193; Induktive Verallgemeinerungen und subjektive Wahrscheinlichkeit 195; Grenzen der Analyse durch subjektive Wahrscheinlichkeiten 195; Das Induktionsproblem 196; Das Induktionsproblem: Lösungen? 197; Das Induktionsproblem und subjektive Wahrscheinlichkeit 198

- 20. Fehlschlüsse beim induktiven Argumentieren — 201

  Voreilige Generalisierung 201; Unausgewogene Statistik 202; Cicero über unausgewogene Statistik 202; Unausgewogene Statistik: Beispiel 202; Der Basisraten-Fehlschluss 203; Der Fehlschluss des Spielers 205; Der Konjunktions-Fehlschluss 206; Das Monty Hall Problem 206

- 21. Ausblick: Nichtstandardlogiken — 209

  Nichtstandardlogiken 209; Mehrwertige Logiken: Motivation 209; Lukasiewicz' System $L_3$ 209; Intuitionistische Logik 210; Intuitionistische Logik: Abweichungen 210; Modallogik 211; Modallogik: grundlegende Äquivalenzen 211; Modallogik: Mögliche-Welten-Semantik 211; Modallogik: Mögliche-Welten-Semantik 212; Angewandte Modallogik: Deontische Logik 213; Angewandte Modallogik: Temporale Logik 213

- Anhang 1. Kausales Urteilen — 215

  Der Schluss auf eine Ursache 215; Post hoc ergo propter hoc 215; A verursacht B – was ist gemeint? 215; Die kontrafaktische Analyse 215; Kontrafaktische Konditionale 216; Schwierigkeiten der kontrafaktischen Analyse 218; Andere Analysen 219; Eine Ursache / die Ursache 220; Allgemeine Kausalaussagen 220; Deterministische allgemeine Kausalaussagen: Mills Methoden 221; Die Methode der Übereinstimmungen 221; Die Methode der Differenzen 222; Die Methode der Übereinstimmungen und Differenzen 222; Die Grenzen von Mills Methoden 223; Kausalität und Statistik 224; Korrelationen 224; Korrelation und Kausalität 224; Abschirmende Faktoren 224; Korrelation und Abschirmung: Beispiel 225

- Anhang 2. Der Schluss auf die beste Erklärung — 226

  Einige Beispiele 226; Der Schluss auf die beste Erklärung 226; Was ist eine gute Erklärung? 227; Explanatorische Werte 227; Schluss auf die beste Erklärung – ein legitimes Konzept? (1) 228; Schluss auf die beste Erklärung – ein legitimes Konzept? (2) 228

<!-- p. vi | pdf 6 -->
- Anhang 3. Der Sequenzkalkül — 229

  Formale Beweisbarkeit, Ableitbarkeit 229; Der Sequenzkalkül 230; Beweiszeilen 230; Axiome 230; Regeln mit Prämissenzeilen 231; Beispiel: Konjunktionsbeseitigung 231; Beweis: Beispiel 232; Korrektheit von Beweiszeilen und Regeln 232; Tautologieaxiom und Ex Contradictione Quodlibet 233; Konjunktions-Einführung 233; Schnittregel 234; Vordere Adjunktions-Einführung 234; Hintere Adjunktions-Einführung 234; Subjunktions-Einführung 235; Subjunktions-Beseitigung 235; Bisubjunktions-Einführung 236; Bisubjunktions-Beseitigung 236; Ableitbare Regeln 236; Fallunterscheidung 237; Widerspruchsregel 238; Kontrapositionsregeln 238; Annahmenverbindung 239; Annahmenzerlegung 240; Anwendungsbeispiel 240; Verdünnungsregel 240; Modus Ponens 241; Modus Tollens 241; Kettenschluss 242; Anwendungsbeispiele 242; Ableitungen in PL-Sprachen 244; Korrektheit der prädikatenlogischen Beweiszeilen 244; Vordere All-Einführung 244; Hintere All-Einführung 245; Vordere Existenz-Einführung 245; Beispiel: Fehlanwendung der kritischen Quantorenregeln 246; Hintere Existenz-Einführung 246; Ableitbare Regel: Allbeseitigung 247; Anwendungsbeispiele 247; Variablensubstitution 249; Keine neuen Variablenbindungen erzeugen 250; Substitutionsregel 250; Spezialisierung und Partikularisierung 251; Anwendungsbeispiele 252; Korrektheit und Vollständigkeit des Sequenzkalküls 252; Übersicht der Regeln des Sequenzkalküls 253

## Zu diesem Skript

Diese Materialien stellen lediglich das Grundgerüst für eine insgesamt zweisemstrige Vorlesung zur Einführung in Logik und Argumentationstheorie dar. (Für eine einsemestrige Einführung in die Logik sind lediglich die Kapitel 1-7 und 9-15 relevant.) Die Materialien sind nicht für das Selbststudium ausgelegt und ersetzen insbesondere nicht die Teilnahme an der Vorlesung. Die Lehrveranstaltung (einschließlich der Klausur) ist auf Studierende ausgerichtet, die sowohl an der Vorlesung als auch an den begleitenden Übungen regelmäßig teilnehmen und die Übungsaufgaben zur Vorlesung regelmäßig und selbständig bearbeiten.

Die Materialien geben im Kern nur Inhalte der Videobeamer-Präsentation aus der Vorlesung wieder, um den Studierenden das Mitschreiben zu ersparen und so eine bessere Konzentration auf die Vorlesung selbst zu ermöglichen.

> Gelegentlich werden diese Inhalte durch kurze, wie in diesem Abschnitt gekennzeichnete Zusatz-Kommentare ergänzt.

Ebensowenig wie die Vorlesungsteilnahme ersetzt dieses Skript ein gutes Lehrbuch. Es enthält nur sehr komprimiert die wesentlichsten Inhalte und Beispiele aus der Vorlesung und kann deshalb nicht immer eine vollständige, aus sich selbst heraus gut verständliche Darstellung der behandelten Themen liefern.

Um Ihnen das Auffinden ausführlicherer Lehrbuchliteratur zu den behandelten Themen zu erleichtern, finden Sie im Folgenden eine nach Kapiteln aufgeschlüsselte Liste von Literaturempfehlungen.

<!-- p. vii | pdf 7 -->
## Literaturempfehlungen zu den einzelnen Kapiteln

Diese Literaturempfehlungen sind nicht erschöpfend, sondern sollen nur erste Hinweise geben, wo zu den entsprechenden Kapiteln passende Lehrbuchliteratur gefunden werden kann.

| Kapitel | Literaturempfehlungen |
|---|---|
| 1 | Rosenberg, Kap. 2; Beckermann, Teil I |
| 2 | Hoyningen-Huene, Abschn. I.3 u. II.1.1; Beckermann, Abschn. 10.1 u. 10.2 |
| 3 | Hoyningen-Huene, Abschn. II.1.3, Beckermann, Abschn. 10.3 |
| 4 | Hoyningen-Huene, Abschn. II.2, Beckermann, Abschn. 11 u. 12 |
| 5 | Beckermann, Abschn. 13 u. 27.1; Bostock, Kap. 4 |
| 6 | Beckermann, Abschn. 15 |
| 7 | Salmon, Abschn. 6-9; Black, Kap. 12 |
| 8 | Bowell/Kemp, Kap. 4 u. 5, Copi/Burgess-Jackson, Kap. 3 |
| 9 | Mates, Kap. 3; Beckermann, Abschn. 17.1 |
| 10 | Mates, Kap. 4; Beckermann, Abschn. 17.2 |
| 11 | Beckermann, Abschn. 21; Mates, Kap. 5 |
| 12 | Hoyningen-Huene, Abschn. III.2, Beckermann, Abschn. 18 |
| 13 | Salmon, Abschn. 14-15 |
| 14 | Beckermann, Abschn. 19 u. 27.2; Bostock, Kap. 4 |
| 15 | Bostock, Abschn. 8.1 |
| 16 | Copi/Burgess-Jackson, Kap. 4, Biermann/Assali, Kap. 10, Black, Kap. 11 |
| 17 | Salmon, Abschn. 19, 20 u. 23 |
| 18 | Hacking, Kap. 4-7 u. 11-13 |
| 19 | Hacking, Kap. 20-21 |
| 20 | Salmon, Abschn. 21 u. 22, Hacking, Kap. 3 u. 7 |

(Literaturangaben umseitig.)

<!-- p. viii | pdf 8 -->
## Literaturangaben

Ansgar Beckermann: *Einführung in die Logik*, 3. Aufl., Berlin: Walter de Gruyter 2010.

Arthur K. Bierman & Robin N. Assali: *The Critical Thinking Handbook*, Upper Saddle River, NJ: Prentice-Hall 1996.

Max Black: *Critical Thinking: An Introduction to Logic and Scientific Method*, 2. Aufl., Englewood Cliffs, NJ: Prentice-Hall 1952.

David Bostock: *Intermediate Logic*, Oxford: Clarendon 1997.

Tracy Bowell: *Critical Thinking: A Concise Guide*, London etc.: Routledge 2002.

Irving M. Copi & Keith Burgess-Jackson: *Informal Logic*, 3. Aufl., Upper Saddle River, NJ: Prentice Hall 1996.

Irving M. Copi: *Einführung in die Logik*, München: Fink 1998.

Heinz-Dieter Ebbinghaus, Jörg Flum und Wolfgang Thomas: *Einführung in die mathematische Logik*, 4. Aufl., Heidelberg: Spektrum 1996.

Wilhelm K. Essler: *Einführung in die Logik*, 2. Aufl., Stuttgart: Kröner 1996.

Ian Hacking: *An Introduction to Probability and Inductive Logic*, Cambridge etc.: Cambridge Univ. Press 2001.

Colin Howson: *Logic with Trees: An Introduction to Symbolic Logic*, London: Routledge 1997.

Paul Hoyningen-Huene: *Formale Logik: Eine philosophische Einführung*, Stuttgart: Reclam 1998.

Gary Jason: *Critical Thinking: Developing An Effective Worldview*, Belmont, Calif.: Wadsworth/Thomson Learning 2001.

Benson Mates: *Elementare Logik: Prädikatenlogik der ersten Stufe*, Göttingen: Vandenhoeck und Ruprecht 1969.

Arnold Oberschelp: *Logik für Philosophen*, 2. Aufl., Stuttgart: Metzler 1997.

Jay F. Rosenberg: *Philosophieren: Ein Handbuch für Anfänger*, Frankfurt a.M.: Klostermann 1986.

Sven Rosenkranz: *Einführung in die Logik*, Stuttgart: Metzler 2006.

Paul Ruppen: *Einstieg in die formale Logik: Ein Lern- und Übungsbuch für Nichtmathematiker*, Bern: Lang , 1997.

Wesley C. Salmon: *Logik*, Stuttgart: Reclam 1983.

<!-- p. 1 | pdf 9 -->
## 1. Logik und Argumentation: Einführung

### 1. Logik

Logik untersucht die Gültigkeit von Argumenten.

Ihre traditionelle Hauptaufgabe ist es, Methoden bereitzustellen, die helfen, gültige von ungültigen Argumenten zu unterscheiden.

> Daher rührt die Bedeutung der Logik für Philosophie sowie für alle Wissenschaften. In allen Wissenschaften sollen Aussagen mit Hilfe anderer Aussagen begründet werden.
>
> In dieser Veranstaltung werden wir die Begriffe „Argument“ und „Schluss“ synonym verwenden.

### 2. Argumente

Beispiele für Argumente

$$\begin{array}{l}
\text{Es ist Benzin im Tank oder der Motor läuft nicht.} \\
\text{Der Motor läuft.} \\
\hline
\text{Also ist Benzin im Tank.}
\end{array}$$

$$\begin{array}{l}
\text{Klaus hat gesagt, dass Toni schwanger sei.} \\
\hline
\text{Also muss Toni eine Frau sein.}
\end{array}$$

△ **Argumente bestehen aus einer *Schlussfolgerung* oder *Konklusion* (einer Aussage, die durch das Argument gestützt wird) und einer oder mehreren *Prämissen* (Aussagen, die zur Stützung der Konklusion angeführt werden).**

> Eine Konvention, an die sich viele Logikbücher und auch wir in dieser Vorlesung halten: Argumente werden mit einem waagerechten Strich angegeben; die Prämissen befinden sich darüber, die Konklusion darunter.
>
> Anhand des ersten Beispiels oben wird deutlich: Die Prämissen erzwingen praktisch den Übergang zur Konklusion. Anders gesagt: *Wenn* die Prämissen wahr sind, dann *kann* die Schlussfolgerung nicht falsch sein. Für solche Argumente interessiert sich die Logik besonders.

Argumente dienen dazu, Behauptungen zu *begründen*.

### 3. Gründe

Von Gründen sprechen wir in mindestens drei verschiedenen Sinnen:

- *Realgründe oder Ursachen:*
  Glatteis war der Grund dafür, dass das Auto von der Straße abkam.

<!-- p. 2 | pdf 10 -->
- *Handlungsgründe:*
  Lenas Überzeugung, damit ihre Zukunftschancen optimieren zu können, war der Grund, aus dem Sie sich für ein BWL-Studium entschied.
- *Epistemische Gründe:*
  Dass die Sonne bisher jeden morgen aufgegangen ist, ist ein guter, wenn auch nicht vollkommener Grund für die Annahme, dass sie es auch morgen wieder tun wird.

Wenn man davon spricht, dass eine Behauptung „begründet“ wird, meint man die Angabe **epistemischer Gründe**. Epistemische Gründe sind Umstände, die dafür sprechen, eine bestimmte Annahme für wahr zu halten. In diesem Sinn müssen Argumente Gründe für die Konklusion angeben.

> Natürlich kann die Angabe von epistemischen Gründen manchmal in einem Verweis auf Real- und/oder Handlungsgründe bestehen, z.B.:
>
> Niels wollte heute eine große Radtour machen, und er ist frühestens vor einer Stunde aufgebrochen. Also ist anzunehmen, dass er noch unterwegs ist.
>
> Aber epistemische Gründe müssen nicht immer in einem ursächlichen Verhältnis zur begründeten Aussage stehen.

### 4. Überzeugungen begründen / Überzeugungen verursachen

Logik und Argumentationstheorie im Sinne dieser Veranstaltung beschäftigen sich mit Begründungen von Überzeugungen.
Sie beschäftigt sich nicht allgemein mit Tricks und Techniken, bei anderen bestimmte Überzeugungen hervorzurufen – im Unterschied zur Rhetorik.

> Natürlich kann und soll Sie Ihnen trotzdem dabei helfen: Aber nur im Hinblick auf eine bestimmte Technik, bei anderen eine Überzeugung hervorzurufen; nämlich die Technik, die darin besteht, diese Überzeugung gut zu begründen.

### 5. Überzeugungen begründen / Überzeugungen verursachen

Beispiel:

Sie zweifeln daran, dass es ein universell gültiges moralisches Gesetz geben könnte? Nun, das Gravitationsgesetz ist universell gültig, die Gesetze der Mathematik sind universell gültig. Wie können Sie da an der Möglichkeit universell gültiger Gesetze zweifeln?

Aus logischer Sicht ist mit diesem „Argument“ vielerlei nicht in Ordnung.

> Erstens beruht die Argumentation darauf, dass zwei ganz verschiedene Dinge, nämlich moralische Gesetze und Naturgesetze, mit demselben Wort „Gesetz“ benannt werden. Diesen Argumentationsfehler werden wir unter dem Namen „Äquivokation“ noch genauer untersuchen.
>
> Zweitens verfehlt die implizite Schlussfolgerung „Universelle Gesetze sind möglich“ die eigentlich in Rede stehende Behauptung „Universelle moralische Gesetze sind möglich“. Diesen Fehler nennt man „*ignoratio elenchi*“.

Aus Sicht der Rhetorik sind diese Merkmale nicht unbedingt problematisch, solange das Gegenüber keinen Anstoß daran nimmt. Ein *rhetorisches* Studium dieser Merkmale würde sich damit befassen, wie man sie am Geschicktesten zum Einsatz bringt.

In dieser Veranstaltung werden wir sie dagegen als Argumentations*fehler* studieren, um fehlerhafte Begründungen kritisieren zu können.

<!-- p. 3 | pdf 11 -->
### 6. Gültigkeit

Damit die Prämissen die Konklusion wirklich gut begründen, müssen Prämissen und Konklusion im richtigen Verhältnis zueinander stehen. Dieses richtige Verhältnis bezeichnet man als *Gültigkeit* des Arguments:

△ **Ein Argument heißt genau dann *gültig*, wenn Folgendes gilt:
Wenn man die Prämissen für wahr hält, dann ist es deshalb vernünftig, auch die Konklusion für wahr zu halten.
(*Das* ist gemeint, wenn wir sagen: Die Prämissen stützen die Konklusion.)**

> Hinweis: Manche Bücher verwenden statt „gültig“ auch „korrekt“ oder „richtig“.

Bemerkung: Diese Definition der Gültigkeit liefert für sich genommen noch keinen sehr praktischen Ansatz zur Beurteilung der Gültigkeit von Argumenten. Denn dazu müsste man zuerst wissen, wann es „vernünftig“ ist, auf der Grundlage bestimmter Prämissen eine bestimmte Konklusion zu akzeptieren.
Wir werden noch zu weitergehenden Definitionen kommen, die uns eine präzisere Handhabe für die Beurteilung von Argumenten bieten.

Überlegen Sie, ob das folgende Beispiel nach unserer Definition ein gültiges Argument ist:

$$\begin{array}{l}
\text{Hubschrauber sind Vögel.} \\
\text{Alle Vögel sind Lebewesen.} \\
\hline
\text{Hubschrauber sind Lebewesen.}
\end{array}$$

> Auch dies *ist* ein gültiges Argument! Denn unter der Annahme, die Prämissen wären wahr, muss man auch die Konklusion für wahr halten. Dies zeigt, dass Gültigkeit nicht das alleinige Qualitätskriterium für Argumente sein kann. Gültigkeit sagt eben noch nichts über den tatsächlichen Wahrheitsgehalt der Prämissen.

### 7. Gültigkeit

Die Gültigkeit von Argumenten kann oft ganz unabhängig vom Wahrheitsgehalt von Prämissen und Konklusion beurteilt werden:

$$\begin{array}{l}
\text{Die Polkappen werden abschmelzen.} \\
\text{Wenn die Polkappen abschmelzen, dann werden erhebliche Teile von Bangladesh überschwemmt.} \\
\hline
\text{Erhebliche Teile von Bangladesh werden überschwemmt werden.}
\end{array}$$

Damit aus einem gültigen Argument auch ein gutes Argument wird, müssen die Prämissen auch wahr sein.

### 8. Gültige und schlüssige Argumente

△ **Ein Argument heißt genau dann *schlüssig*, wenn es gültig ist und alle seine Prämissen wahr sind.**

<!-- p. 4 | pdf 12 -->
z.B.:

$$\begin{array}{l}
\text{Wale sind Säugetiere.} \\
\text{Alle Säugetiere sind Warmblüter.} \\
\hline
\text{Wale sind Warmblüter.}
\end{array}$$

… ist ein gültiges Argument. Seine Prämissen sind außerdem wahr, also ist es auch schlüssig.
Dagegen ist

$$\begin{array}{l}
\text{Hubschrauber sind Vögel.} \\
\text{Alle Vögel sind Lebewesen.} \\
\hline
\text{Hubschrauber sind Lebewesen.}
\end{array}$$

zwar gültig, aber nicht schlüssig.

### 9. Gültige und schlüssige Argumente

Achtung: Die Wahrheit der Prämissen allein sagt nichts über Gültigkeit und Schlüssigkeit aus! Es kann sogar Argumente geben, bei denen sowohl die Prämissen als auch die Konklusion wahr sind, während das Argument dennoch nicht gültig (und demzufolge auch nicht schlüssig) ist.

$$\begin{array}{l}
\text{Einige Menschen sind Brillenträger.} \\
\text{Woody Allen ist ein Mensch.} \\
\hline
\text{Woody Allen ist ein Brillenträger.}
\end{array}$$

Was diesem Argument fehlt ist die Stützung der Konklusion durch die Prämissen. Die Prämissen könnten (in einer möglichen Welt) wahr sein und die Konklusion trotzdem falsch.

Das können Sie erkennen, indem Sie ein analoges Argument konstruieren, das wahre Prämissen hat, aber zu einer falschen Schlussfolgerung führt.

$$\begin{array}{l}
\text{Einige Menschen sind Brillenträger.} \\
\text{Woody Allen ist ein Mensch.} \\
\hline
\text{Woody Allen ist ein Brillenträger.}
\end{array}$$

$$\begin{array}{l}
\text{Einige Menschen sind Frauen.} \\
\text{Woody Allen ist ein Mensch.} \\
\hline
\text{Woody Allen ist eine Frau.}
\end{array}$$

### 10. Gültige und schlüssige Argumente

Die Logik interessiert sich in erster Linie für die Gültigkeit von Argumenten.

<!-- p. 5 | pdf 13 -->
Das liegt daran, dass für die Beurteilung der Wahrheit der Prämissen und somit der Schlüssigkeit normalerweise sachspezifisches Wissen erforderlich ist. Die Gültigkeit von Argumenten lässt sich dagegen interessanterweise in vielen Fällen ohne Rücksicht auf die sachlichen Inhalte beurteilen.
Genau dieser Umstand eröffnet uns die Möglichkeit, Logik zu betreiben.

### 11. Deduktive Gültigkeit

Manche Argumente haben die faszinierende Eigenschaft, dass die Wahrheit der Prämissen die Wahrheit der Konklusion praktisch erzwingt:

$$\begin{array}{l}
\text{Es ist Benzin im Tank oder der Motor läuft nicht.} \\
\text{Der Motor läuft.} \\
\hline
\text{Also ist Benzin im Tank.}
\end{array}$$

$$\begin{array}{l}
\text{Wale sind Säugetiere.} \\
\text{Alle Säugetiere sind Warmblüter.} \\
\hline
\text{Wale sind Warmblüter.}
\end{array}$$

Für diese Argumente gilt: Wenn die Prämissen wahr sind, dann muss die Konklusion wahr sein. Wir werden solche Argumente *deduktiv gültig* nennen. Eine genaue Definition der deduktiven Gültigkeit muss aber noch einen Moment warten.

### 12. Deduktive und induktive Gültigkeit

Nicht alle gültigen Argumente sind auch deduktiv gültig:

$$\begin{array}{l}
\text{Klaus hat gesagt, dass Toni schwanger sei.} \\
\text{Klaus sagt fast immer die Wahrheit.} \\
\text{Nur weibliche Lebewesen werden schwanger.} \\
\hline
\text{Also ist Toni weiblich.}
\end{array}$$

Dieses Argument ist nach unserer Definition gültig, insofern die Annahme, dass die Prämissen wahr sind, dafür spricht (es rational macht, zu glauben), dass auch die Schlussfolgerung wahr ist.
Aber: Die Schlussfolgerung muss nicht wahr sein, wenn die Prämissen wahr sind. Klaus könnte sich ausnahmsweise irren oder sogar lügen.
Stattdessen machen die Prämissen es wahrscheinlich, dass die Konklusion wahr ist. Solche Argumente heißen *induktiv gültig*.

> Genau genommen ist also die Frage, ob das Argument gültig ist, davon abhängig, wie wahrscheinlich die Schlussfolgerung im Lichte der angeführten Prämissen ist. Die Beurteilung solcher Fragen wird uns im zweiten Semester dieses Kurses beschäftigen. Wenn die Prämissen die Schlussfolgerung ausreichend wahrscheinlich machen, dann ist das Argument in sofern gültig, als es vernünftig ist, etwas sehr Wahrscheinliches zu glauben.

<!-- p. 6 | pdf 14 -->
### 13. Deduktive und induktive Gültigkeit

- *Induktive Gültigkeit*: Wenn alle Prämissen wahr sind, dann ist es wahrscheinlich, dass auch die Konklusion wahr ist.

Bei induktiven Argumenten ist die Gültigkeit eine graduelle Angelegenheit. Die Prämissen können die Konklusion mehr oder weniger wahrscheinlich machen. Mit induktiv gültigen Argumenten werden wir uns (ggf.) im zweiten Semester der Vorlesung beschäftigen. *In diesem Semester geht es uns in erster Linie um deduktiv gültige Argumente.*

- *Deduktive Gültigkeit* (vorläufige Definition): Wenn alle Prämissen wahr sind, dann muss die Konklusion wahr sein.

Bei deduktiven Argumenten soll die Gültigkeit ein Entweder-Oder sein: Ein Argument soll die Definition entweder ganz oder gar nicht erfüllen.

> Manche Autoren verwenden „gültig“ synonym mit „deduktiv gültig“ im obigen Sinn. Für diese Autoren gibt es folglich keine induktiv gültigen Argumente. In dieser Lehrveranstaltung verwenden wir „gültig“ aber in einem weniger restriktiven Sinn (wie oben definiert, siehe Folie 6).

### 14. Deduktive Gültigkeit

Aber was heißt es genau, dass die Schlussfolgerung wahr sein muss, falls die Prämissen wahr sind? Betrachten Sie das folgende Beispiel:

$$\begin{array}{l}
\text{Toni ist ein Mensch und Toni ist schwanger.} \\
\hline
\text{Also ist Toni eine Frau.}
\end{array}$$

In einem gewissen Sinne *muss* die Konklusion wahr sein, wenn die Prämisse wahr ist. Aber dies ist kein Beispiel für das, worauf die Logik mit dem Begriff der deduktiven Gültigkeit hinaus will: Mit deduktiv gültigen Argumenten sind solche gemeint, bei denen allein aus der Wahrheit der Prämissen die Wahrheit der Schlussfolgerung folgt, egal wie die Welt ansonsten beschaffen ist.

> Das „Muss“ der deduktiven Gültigkeit ist in diesem Sinne noch strenger als natürliche Gesetzmäßigkeiten es sind!

Ein Beispiel für deduktive Gültigkeit ist dagegen:

$$\begin{array}{l}
\text{Toni ist ein Mensch und Toni ist schwanger.} \\
\text{Alle schwangeren Menschen sind Frauen.} \\
\hline
\text{Also ist Toni eine Frau.}
\end{array}$$

Die deduktive Gültigkeit ist sogar in einem bestimmten Sinne *unabhängig vom Inhalt der Aussagen*, die in dem Argument vorkommen. Um zu verstehen, wie das möglich ist und die deduktive Gültigkeit endlich klar zu definieren, brauchen wir die Methoden der *formalen Logik*.

### 15. Formale Logik

Bei typischen deduktiv gültigen Argumenten fällt folgendes auf: Es gibt immer eine ganze Klasse von solchen Argumenten, die einander ähneln und alle deduktiv gültig sind:

<!-- p. 7 | pdf 15 -->
$$\begin{array}{l}
\text{Es ist Benzin im Tank oder der Motor läuft nicht.} \\
\text{Der Motor läuft.} \\
\hline
\text{Benzin ist im Tank.}
\end{array}$$

$$\begin{array}{l}
\text{Toni ist eine Frau oder Toni ist nicht schwanger.} \\
\text{Toni ist schwanger.} \\
\hline
\text{Toni ist eine Frau.}
\end{array}$$

$$\begin{array}{l}
\text{Die Zahl N ist ungerade oder das Produkt NM ist nicht ungerade.} \\
\text{Das Produkt NM ist ungerade.} \\
\hline
\text{Die Zahl N ist ungerade.}
\end{array}$$

### 16. Formale Logik

Offenbar liegt dies daran, dass diese Argumente formal gleich aufgebaut sind und dass in ihnen an den gleichen Stellen bestimmte inhaltsunabhängige Elemente vorkommen. Im Beispiel sind dies die Wörter „<span style="color:green">oder</span>“ und „<span style="color:red">nicht</span>“.

$$\begin{array}{l}
\color{blue}{\text{Es ist Benzin im Tank }} \color{green}{\text{oder}} \color{purple}{\text{ der Motor läuft }} \color{red}{\text{nicht}}\text{.} \\
\color{purple}{\text{Der Motor läuft.}} \\
\hline
\color{blue}{\text{Benzin ist im Tank.}}
\end{array}$$

$$\begin{array}{l}
\color{blue}{\text{Toni ist eine Frau }} \color{green}{\text{oder}} \color{purple}{\text{ Toni ist }} \color{red}{\text{nicht}} \color{purple}{\text{ schwanger.}} \\
\color{purple}{\text{Toni ist schwanger.}} \\
\hline
\color{blue}{\text{Toni ist eine Frau.}}
\end{array}$$

$$\begin{array}{l}
\color{blue}{\text{Die Zahl N ist ungerade }} \color{green}{\text{oder}} \color{purple}{\text{ das Produkt NM ist }} \color{red}{\text{nicht}} \color{purple}{\text{ ungerade.}} \\
\color{purple}{\text{Das Produkt NM ist ungerade.}} \\
\hline
\color{blue}{\text{Die Zahl N ist ungerade.}}
\end{array}$$

### 17. Formale Logik

Für die Wörter „oder“ und „nicht“ gilt:

- Sie sind *inhaltsunabhängig*, d.h. sie kommen in allen möglichen Aussagen vor, egal wovon sie handeln.
- Und es lassen sich *ganze Klassen inhaltlich völlig verschiedener Argumente* finden, in denen die inhaltlichen Bestandteile der Aussagen jeweils *in der selben Form* mit Hilfe von „oder“ und „nicht“ verknüpft sind und für die ausnahmslos gilt: Wenn die Prämissen wahr sind, dann ist auch die Konklusion wahr.

In allen bekannten Sprachen kommen Elemente vor, für die diese beiden Punkte gelten. Sie heißen *logische Konstanten*.

<!-- p. 8 | pdf 16 -->
△ **Die *formale Logik* untersucht die Bedingungen der Gültigkeit anhand formaler Eigenschaften von Argumenten. Sie tut dies, indem sie *logische Konstanten* der Sprache identifiziert und die Gesetzmäßigkeiten untersucht, nach denen sich mit Hilfe der logischen Konstanten gültige Argumente bilden lassen.**

### 18. Logische Form

Die drei Argumente haben eine gemeinsame Form. Ihre inhaltlichen Elemente sind auf die gleiche Weise arrangiert und mit Hilfe der logischen Konstanten verknüpft.

$$\begin{array}{l}
\color{blue}{\text{Toni ist eine Frau }} \color{green}{\text{oder}} \color{purple}{\text{ Toni ist }} \color{red}{\text{nicht}} \color{purple}{\text{ schwanger.}} \\
\color{purple}{\text{Toni ist schwanger.}} \\
\hline
\color{blue}{\text{Toni ist eine Frau.}}
\end{array}$$

$$\begin{array}{l}
\color{blue}{A} \ \color{green}{\text{oder}} \ \color{red}{\text{nicht}} \ \color{purple}{B} \\
\color{purple}{B} \\
\hline
\color{blue}{A}
\end{array}$$

△ **Die Art und Weise, wie die inhaltlichen Bestandteile des Arguments mit Hilfe der logischen Konstanten angeordnet und verknüpft sind, ist die *logische Form* des Arguments.**

> Hinweis: Damit ganz klar ist, was die logische Form eines Arguments ist, muss eindeutig feststehen,
> - welches die logischen Konstanten sind,
> - welches die inhaltlichen Elemente (Teilaussagen) sind und
> - welches die relevanten formalen Eigenschaften und Verknüpfungen dazwischen sind.
>
> Das ist zunächst mal eher intuitiv klar. Die formale Logik hat aber Methoden, dies ganz präzise zu definieren. Dazu werden wir noch kommen.

### 19. Deduktive Gültigkeit

Mit Hilfe des Begriffs der logischen Form können wir jetzt endlich die deduktive Gültigkeit genau definieren.

△ **Ein Argument heißt *deduktiv gültig*, wenn alle Argumente, die dieselbe logische Form und ausschließlich wahre Prämissen haben, auch eine wahre Konklusion besitzen.**

> Erinnerung: In manchen Büchern wird schon der Begriff der Gültigkeit oder Korrektheit für deduktive Gültigkeit in diesem Sinne reserviert.

△ **Wenn Prämissen und Konklusion in diesem Sinne ein deduktiv gültiges Argument bilden, sagt man auch, dass die Konklusion aus den Prämissen *logisch folgt*.**

### 20. Illustration: deduktive Gültigkeit, Schlüssigkeit und Wahrheit

Da es sehr wichtig ist, zu verstehen, was genau der Begriff der deduktiven Gültigkeit im Hinblick auf die Wahrheit von Schlussfolgerungen und Prämissen impliziert, veranschaulichen wir uns dies anhand der folgenden Übersichten.

<!-- p. 9 | pdf 17 -->
**Deduktiv gültige Argumente**

| | Schlussfolgerung wahr | Schlussfolgerung falsch |
|---|---|---|
| Prämissen wahr | Wenn Paris in Frankreich liegt, spricht man dort Französisch.<br>Paris liegt in Frankreich.<br>―――――――――――――――<br>In Paris spricht man Französisch. | ✗ |
| Prämissen falsch | Wenn London in Belgien liegt, spricht man dort Englisch.<br>London liegt in Belgien.<br>―――――――――――――――<br>In London spricht man Englisch. | Wenn Berlin in Italien liegt, spricht man dort Spanisch.<br>Berlin liegt in Italien.<br>―――――――――――――――<br>In Berlin spricht man Spanisch. |

<!-- Markierung: Die Zelle „Prämissen wahr / Schlussfolgerung falsch“ ist mit einem großen roten Kreuz (✗) durchgestrichen, das anzeigt, dass dieser Fall bei deduktiv gültigen Argumenten nicht vorkommen kann. Ein grüner Pfeil zeigt von der Bildunterschrift „deduktiv gültig und schlüssig“ (unten links) auf die Zelle „Prämissen wahr / Schlussfolgerung wahr“. Zwei blaue Pfeile zeigen von der Bildunterschrift „deduktiv gültig, aber nicht schlüssig“ (unten rechts) auf beide Zellen der Zeile „Prämissen falsch“. -->

*deduktiv gültig und schlüssig* — *deduktiv gültig, aber nicht schlüssig*

**Nicht deduktiv gültige „Argumente“**

| | Schlussfolgerung wahr | Schlussfolgerung falsch |
|---|---|---|
| Prämissen wahr | Alle Katholiken sind getauft.<br>Der Papst ist getauft.<br>―――――――――――――――<br>Der Papst ist ein Katholik. | Alle Katholiken sind getauft.<br>George W. Bush ist getauft.<br>―――――――――――――――<br>George W. Bush ist ein Katholik. |
| Prämissen falsch | Mäuse regieren heimlich die Welt.<br>Wenn das Buch Hiob genau 42 Kapitel hat, dann regieren Mäuse heimlich die Welt.<br>―――――――――――――――<br>Das Buch Hiob hat genau 42 Kapitel. | Nilpferde sind Reptilien.<br>Nur Reptilien spielen Klarinette.<br>―――――――――――――――<br>Alle Nilpferde spielen Klarinette. |

△ **Der einzige Fall, der nie auftreten kann, ist der eines deduktiv gültigen Arguments mit wahren Prämissen und einer falschen Konklusion.**

### 21. Eine einfache Heuristik zur Überprüfung deduktiver Argumente

Aus diesem Sachverhalt lässt sich eine einfache Heuristik ableiten, mit deren Hilfe Sie sich schnell über ein deduktives Argument orientieren können

> Als Heuristiken bezeichnet man Richtlinien für kognitive Vorgehensweisen. Eine Heuristik muss nicht unbedingt mit Sicherheit zum kognitiven Ziel führen, sondern kann auch eine bloße Daumenregel sein.

Wenn ein deduktives Argument gültig sein soll, dann muss *jedes* Argument, das dieselbe logische Form und wahre Prämissen hat, zu wahren Konklusionen führen.
Sie können deshalb die Gültigkeit eines deduktiven Arguments erproben, indem Sie einige analoge Argumente mit vertrauten und überschaubaren wahren Prämissen konstruieren.

Beispiel:

$$\begin{array}{l}
\text{Es gibt kein Opiat, das kein Analgetikum wäre.} \\
\text{Einige Inhaltsstoffe von gängigen Hustenmitteln sind Opiate.} \\
\hline
\text{Nicht alle gängigen Hustenmittel sind frei von Analgetika.}
\end{array}$$

<!-- p. 10 | pdf 18 -->
Manchmal empfiehlt es sich allerdings, zunächst die Aussagen durch (einfachere) logisch äquivalente Aussagen zu ersetzen.

Erste Prämisse:

Es gibt kein Opiat, das kein Analgetikum wäre.
$\equiv$ Alle Opiate sind Analgetika.

Konklusion:

Nicht alle gängigen Hustenmittel sind frei von Analgetika.
$\equiv$ Einige Inhaltsstoffe von gängigen Hustenmitteln sind Analgetika.

Umgeformtes Argument:

$$\begin{array}{l}
\text{Alle Opiate sind Analgetika.} \\
\text{Einige Inhaltsstoffe von gängigen Hustenmitteln sind Opiate.} \\
\hline
\text{Einige Inhaltsstoffe von gängigen Hustenmitteln sind Analgetika.}
\end{array}$$

Analoge Argumente:

$$\begin{array}{l}
\text{Alle Säugetiere sind Warmblüter.} \\
\text{Einige Raubtiere sind Säugetiere.} \\
\hline
\text{Einige Raubtiere sind Warmblüter.}
\end{array}$$

$$\begin{array}{l}
\text{Alle Polizisten sind Beamte.} \\
\text{Einige Schnurbartträger sind Polizisten.} \\
\hline
\text{Einige Schnurbartträger sind Beamte.}
\end{array}$$

> Das Argument gehört zu einem Typ, den wir erst mit Mitteln der Prädikatenlogik (Kap. 8 ff.) genau beschreiben werden können. (Es ist ein kategorischer Syllogismus des Typs „Darii“.)

### 22. Eine einfache Heuristik zur Überprüfung deduktiver Argumente

Achtung: Wenn Sie mit dieser Heuristik *kein* Gegenbeispiel zu dem vorgelegten Schluss finden, besteht natürlich noch immer eine Irrtumsmöglichkeit. Die von Ihnen erdachten analogen Schlüsse könnten ebenso ungültig sein wie der vorgelegte und nur zufällig wahre Konklusionen haben.

Anders verhält es sich im negativen Fall. Wenn Sie ein einwandfreies Gegenbeispiel gefunden haben (d.h. einen Schluss derselben Form, der von wahren Prämissen auf eine *falsche* Konklusion führt), ist das Argument eindeutig nicht gültig.

### 23. Eine einfache Heuristik zur Überprüfung deduktiver Argumente

$$\begin{array}{l}
\text{Alle Kommunisten befürworten ein staatliches Gesundheitssystem.} \\
\text{Hans Meier befürwortet ein staatliches Gesundheitssystem.} \\
\hline
\text{Hans Meier ist ein Kommunist.}
\end{array}$$

<!-- p. 11 | pdf 19 -->
Dieses Argument sieht der gültigen Argumentform eines sogenannten „Quasi-Syllogismus“ (s. Kap. 13) ähnlich, *ist* aber nicht gültig, wie man durch Bildung formal analoger Argumente leicht zeigen kann.

$$\begin{array}{l}
\text{Alle Frauen atmen.} \\
\text{Der Papst atmet.} \\
\hline
\text{Der Papst ist eine Frau.}
\end{array}$$

Das vorangehende Argument ist deshalb ein Beispiel für einen *formalen Fehlschluss*.

### 24. Grenzen der Heuristik

Allerdings stößt diese Heuristik bei komplexen logischen Zusammenhängen schnell an ihre Grenzen. Außerdem setzen sie voraus, dass man schon verstanden hat, was die logische Form eines Arguments ist, sodass man Argumente mit „derselben logischen Form“ bilden kann.

Was ist also die logische Form eines Arguments, und wie müssen Sprachen funktionieren, damit man solche Argumente in ihnen formulieren kann? Die Beantwortung dieser Fragen kann nur mit Hilfe der formalen Logik erfolgen. Außerdem werden wir mit ihrer Hilfe Verfahren kennen lernen, die auch bei komplexesten Zusammenhängen die Frage logischer Gültigkeit mit Sicherheit beantworten lassen.

### 25. Logische Form und grammatische Form

Die logische Form ist etwas anderes als die grammatische Form der Aussagen. Zum Beispiel haben die folgenden Aussagen dieselbe logische Form (und übrigens dieselbe Bedeutung) aber unterschiedliche grammatische Formen:

Es ist nicht der Fall, dass Wasser ein Metall ist.

Wasser ist kein Metall.

Für die logische Form ist nur relevant, dass es sich in beiden Fällen um die Verneinung der Aussage „Wasser ist ein Metall“ handelt. Ob eine Nebensatzkonstruktion in dem Satz vorkommt, ist egal.
Außerdem erkennen Sie hier, dass die logische Konstante „nicht“ auch in einer anderen sprachlichen Erscheinungsform vorkommt. Es wäre unsinnig, hier von einer weiteren logischen Konstante „keine“ zu sprechen, da die beiden Beispielsätze offenbar genau dasselbe bedeuten.

### 26. Formale Sprachen

Um diese Situation zu vereinfachen, studiert die formale Logik die Beziehung der logischen Folgerung anhand *formaler Sprachen*. In diesen formalen Sprachen hat jede logische Konstante eine eindeutige Erscheinungsform. Die Grammatik der formalen Sprachen ist ebenfalls so einfach, dass die logische Form der Aussagen in den formalen Sprachen an ihrem äußeren Erscheinungsbild eindeutig erkennbar ist.

> Das war der Hintergrund der Bemerkung, dass die Formale Logik über Methoden verfügt, den Begriff der logischen Form präzise zu fassen. Dies gelingt eben mit Hilfe der formalen Sprachen.

Die formalen Sprachen der Logik sind so konstruiert, dass sie die Funktionsweise der logischen Konstanten in natürlichen Sprachen widerspiegeln. Deshalb kann man Aussagen und Aussagensysteme aus natürlichen Sprachen in formale Sprachen übersetzen.
Wir werden aber sehen, dass nicht immer eine ganz präzise und eindeutige Übersetzung aller Aussagen aus natürlichen in formale Sprachen möglich ist. Grund: Die formalen Sprachen sind viel einfacher, eleganter

<!-- p. 12 | pdf 20 -->
und konsequenter aufgebaut als die natürlichen Sprachen. Die formalen Sprachen sind *Idealisierungen* der logischen Struktur natürlicher Sprachen.

> Ähnlich wie z.B. in der Physik reibungsfreie Ebenen oder gewichtslose Pendelschnüre.

### 27. Eine Logik oder mehrere Logiken?

In der Logik versucht man nicht bei jeder formalen Sprache, *alle* logischen Konstanten der natürlichen Sprache zu identifizieren und in der formalen Sprache abzubilden. Man beschränkt sich immer auf eine bestimmte Menge wichtiger logischer Konstanten.

In dieser Vorlesung werden wir es mit zwei Typen von formalen Sprachen zu tun haben. Zu Anfang werden wir uns mit *aussagenlogischen Sprachen* beschäftigen, die nur die allerwichtigste Grundmenge logischer Konstanten enthalten. Der Teilbereich der Logik, der sich mit diesen formalen Sprachen beschäftigt, heißt *Aussagenlogik*. Später kommen wir zu *prädikatenlogischen Sprachen*, die neben den logischen Konstanten der Aussagenlogik noch weitere logische Konstanten abbilden können. Dieser Teil heißt entsprechend *Prädikatenlogik*.

### 28. Eine Logik oder mehrere Logiken?

Da der Begriff der logischen Form davon abhängt, welche Elemente der Sprache man als logische Konstanten identifiziert, muss man entsprechend differenzieren: Streng genommen haben Argumente z.B. nicht ganz allgemein eine logische Form, sondern eine *aussagenlogische Form* und eine *prädikatenlogische Form*. Entsprechend muss man streng genommen auch unterscheiden, ob die Konklusion *aussagenlogisch* oder *prädikatenlogisch* aus den Prämissen *folgt*.

In diesem Sinn gibt es nicht eine Logik, sondern mehrere verschiedene Logiken.

> Dazu kommt noch, dass man die logischen Strukturen der natürlichen Sprache auf verschiedene Weise idealisieren kann. Deshalb gibt es sogar verschiedene Logiken mit denselben logischen Konstanten. Außerdem kann man sogar formale Sprachen erfinden, in denen es ganz anders funktionierende logische Konstanten gibt als in den natürlichen Sprachen (z.B. Quantenlogik). Aber nicht alle Logiken haben die gleiche Wichtigkeit. Die Logiken, die wir in der Vorlesung studieren, sind allgemein als Standard anerkannt und bilden die Grundlage für fast alle anderen Logiken. Aussagen- und Prädikatenlogik zusammen, wie wir sie in dieser Vorlesung studieren, werden oft auch als „klassische Logik“ bezeichnet.

### 29. Wozu formale Logik studieren?

Die Methoden der formalen Logik werden in der Philosophie vielfältig angewandt. Hier nur einige *Beispiele*.

In der *Sprachphilosophie* werden zentrale Fragen und Begriffe (wie Wahrheit oder Bedeutung) oft anhand formaler Sprachen diskutiert, weil man hier genauer sein kann als bei natürlichen Sprachen. Die Sprachen der formalen Logik dienen also als Modell für natürliche Sprachen.

Die Begriffe der logischen Folgerung, der Widerspruchsfreiheit oder des Beweises spielen auch in anderen Bereichen der Philosophie eine Rolle, wie etwa in der *Erkenntnistheorie* und der *Wissenschaftstheorie*. Die formale Logik erlaubt es, diese Begriffe genau zu analysieren.

<!-- p. 13 | pdf 21 -->
### 30. Wozu formale Logik studieren?

Außerdem kommt es in der Gegenwartsphilosophie oft vor, dass komplizierte logische Zusammenhänge zur besseren Übersicht und zur genaueren Analyse in passende formale Sprachen übersetzt werden. Das Ergebnis bezeichnet man manchmal als *Formalisierung* eines philosophischen Problems.

Formalisierungen kommen heute in allen Bereichen der Philosophie vor: Von der Ethik bis zur Metaphysik, von der Philosophie des Geistes bis zur Theorie der Gerechtigkeit.

Grundlage der Formalisierungen ist fast immer die Prädikatenlogik, wie Sie sie am Ende dieser Vorlesung kennengelernt haben werden.

### 31. Wozu formale Logik studieren?

△ **Sie müssen also als Studierende der Philosophie die formale Logik aus zwei Gründen lernen: Erstens, weil wichtige philosophische Grundbegriffe anhand der in der formalen Logik studierten formalen Sprachen untersucht und verstanden werden. Und zweitens, um Sie in die Lage zu versetzen, Formalisierungen in der fortgeschrittenen Diskussion der philosophischen Forschung aller Teilgebiete zu verstehen.**

### 32. Wozu formale Logik studieren?

Übrigens wird die formale Logik auch in vielen anderen Wissenschaften verwendet.
In der *Künstliche-Intelligenz-Forschung* wird z.B. Denken als Operation an Sätzen aus prädikatenlogischen formalen Sprachen modelliert.
In der *Informatik* spielt sie unter anderem eine Rolle, weil Programmiersprachen oft Grundbegriffe der Prädikatenlogik übernehmen.
Eine große Bedeutung hat die formale Logik außerdem in der *Linguistik* und in der *Mathematik*.

### 33. Bietet die formale Logik eine *ausreichende* Grundlage für die Beurteilung von Argumenten?

Wie Sie sehen werden, kann man mit Hilfe der formalen Logik tatsächlich oft Aufschluss über die deduktive Gültigkeit von Argumenten erhalten.

Oft ist aber liegen die zentralen Schwierigkeiten bei der Beurteilung von Argumenten auf Gebieten, die mit der Frage deduktiver Gültigkeit nichts zu tun haben. Deshalb werden in diesem zweisemestrigen Kurs neben der formalen Logik noch weitere argumentationstheoretische Inhalte behandelt.

### 34. Schlüssigkeit und Voraussetzungen

Wir haben schon gesehen, dass ein gültiges Argument nur dann auch eine gute Begründung für eine Behauptung liefert, wenn seine Voraussetzungen auch wahr sind.
Zwar hängt die Beurteilung der Voraussetzungen eines Arguments im Allgemeinen von sachbezogenen Erwägungen ab. Dennoch gibt es aber eine Reihe *typischer* Voraussetzungen, die in den verschiedensten Argumentationskontexten immer wieder gemacht werden. Diese typischen Voraussetzungen werden uns

<!-- p. 14 | pdf 22 -->
deshalb auch in dieser Vorlesung beschäftigen.

### 35. Argumentationspragmatische Aspekte (Zirkularität)

Sind also wenigstens alle *schlüssigen* Argumente gute Argumente?

$$\begin{array}{l}
\text{Belgien und die Niederlande sind Beneluxländer.} \\
\hline
\text{Also ist Belgien ein Beneluxland.}
\end{array}$$

Dieses Argument ist ganz offenbar sowohl gültig als auch schlüssig, und doch scheint es kein besonders gutes Argument zu sein.

Grund: Niemand, der nicht von vornherein ohnehin schon von der Konklusion überzeugt ist, würde die Prämisse glauben. In diesem Sinn taugt das Argument nicht dazu, die Konklusion zu begründen.

Es gibt also über Gültigkeit und Wahrheit der Prämissen noch weitere für die Beurteilung von Argumenten wichtige Aspekte.

### 36. Nicht-deduktive Argumente

Wie bereits gesehen, gibt es auch gute Argumente, die nicht deduktiv gültig sind:

$$\begin{array}{l}
\text{Niels Gunnarsson lebt in Trondheim.} \\
\text{Wer in Trondheim wohnt, besitzt mit großer Wahrscheinlichkeit ein Paar warme Socken.} \\
\hline
\text{Also wird Niels Gunnarsson ein Paar warme Socken besitzen.}
\end{array}$$

Im Sinne unserer Definition ist dieses Argument *gültig*: Die Wahrheit der Prämissen vorausgesetzt, ist es vernünftig, auch die Konklusion für wahr zu halten.

Es ist jedoch *nicht deduktiv gültig*, selbst wenn Niels Gunnarsson tatsächlich ein Paar warme Socken besitzen sollte. Denn es gibt Argumente derselben logischen Form, die von wahren Prämissen zu falschen Konklusionen führen:

$$\begin{array}{l}
\text{Mick Jagger befindet sich bei einem Stones-Konzert.} \\
\text{Wer sich bei einem Stones-Konzert befindet, besitzt mit großer Wahrscheinlichkeit eine Eintrittskarte.} \\
\hline
\text{Also wird Mick Jagger eine Eintrittskarte besitzen.}
\end{array}$$

### 37. Induktive Argumente

Zur Erinnerung: Die Art und Weise, in der das Niels-Gunarsson-Argument seine Konklusion dennoch stützt, kann man mit Hilfe des Wahrscheinlichkeitsbegriffs ausdrücken:
Wenn alle Prämissen wahr sind, dann ist es wahrscheinlich, dass auch die Konklusion wahr ist.
Solche Argumente nennt man *induktiv*. Die formale Logik kann nur sehr bedingt zu ihrer Beurteilung beitragen. Wir werden sie im zweiten Semester dieses Kurses genauer betrachten.

<!-- p. 15 | pdf 23 -->
Wir sehen also, dass es aus verschiedenen Gründen nicht *nur* auf den Begriff der deduktiven Gültigkeit ankommt, wenn wir Argumente untersuchen wollen.

Trotzdem spielt er eine sehr zentrale Rolle, weswegen wir jetzt das formale Studium einer bestimmten Klasse deduktiv gültiger Argumente kennenlernen wollen.

## 2. Aussagenlogik: Grundsätzliches und Syntax

### 38. Aussagen

Argumente bestehen aus Aussagen. Nicht jeder Satz ist eine Aussage:

Ach, wie schön!

Bielefeld ist die Metropole Ostwestfalens.

$2 + 2 = 4$

Woody Allen ist der gegenwärtige Präsident der USA.

Wird es morgen regnen?

Schließe die Tür!

### 39. Aussagen

△ ***Aussagen* sind Sätze, die entweder wahr oder falsch sind.**

Aussagen sind z.B.:

$56\,464\,456 + 864\,686 = 57\,329\,142$

An der Limmerstraße gibt es Kioske.

Paris ist die Hauptstadt von Belgien.

Keine Aussagen sind z.B.:

Die Kioske an der Limmerstraße

Uhbdzbbkeubm kjnbkk bjhskjka.

Himmeldonnerwetter!

Ist der Ball rund?

Hau ab!

> Bemerkung: Was eine Aussage ist und was nicht, ist natürlich strenggenommen relativ zu einer Sprache.
>
> Außerdem: Sätze natürlicher Sprachen lassen oft Dinge offen, die meist mehr oder weniger selbstverständlich sind und/oder sie lassen verschiedene Deutungen zu. Gemeint ist die Definition so: Aussagen sind Sätze, die, gegeben eine bestimmte Deutung, entweder wahr oder falsch sind.

△ **„Wahr“ und „falsch“ heißen in der Logik *Wahrheitswerte*.**

<!-- p. 16 | pdf 24 -->

### 40. Aussagen

Aus der Definition „Aussagen sind Sätze, die entweder wahr oder falsch sind“ folgen unmittelbar zwei Grundsätze der klassischen Logik:

△ ***Satz vom Widerspruch***  
**Keine Aussage ist zugleich wahr und falsch.**

△ ***Satz vom ausgeschlossenen Dritten (tertium non datur)***  
**Es gibt keine Aussage, die weder wahr noch falsch ist.**

Während der Satz vom Widerspruch unproblematisch und weithin anerkannt ist, ist der Satz vom ausgeschlossenen Dritten erläuterungsbedürftig.

### 41. Satz vom ausgeschlossenen Dritten

Es gibt in natürlichen Sprachen möglicherweise Beispiele für Aussagen, auf die der Satz vom ausgeschlossenen Dritten nicht zutrifft:

Gregor ist glatzköpfig.

Auf Gregors langem Weg vom vollbeschopften Jugendlichen zum haarlosen Greis scheint es ein Stadium zu geben, in dem die Aussage „Gregor ist glatzköpfig“ *weder wahr noch falsch* ist. Es scheint aber merkwürdig, deshalb in Abrede zu stellen, dass „Gregor ist glatzköpfig“ in diesem Stadium eine Aussage ist.

Unter anderem deshalb kann man daran zweifeln, ob der Satz vom ausgeschlossenen Dritten für natürliche Sprachen gilt.

Weitere, anders geartete Beispiele für Aussagesätze, die möglicherweise weder wahr noch falsch sind, sind die folgenden:

Am 1.1.2050 wird es in Hannover schneien.

El Dorado ist ein Königreich.

> Wohlgemerkt: Bei *all* diesen Fällen ist es sprachphilosophisch umstritten, ob die Aussagen wirklich in eine „Warheitswert-Lücke“<!-- sic --> zwischen den Wahrheitswerten „wahr“ und „falsch“ fallen.

### 42. Zweiwertigkeit der Logik

In der klassischen Logik gehen wir trotzdem davon aus, dass jede Aussage entweder wahr oder falsch ist. Dies ist eben eine der Idealisierungen, die die Logik bei der Konstruktion ihrer formalen Sprachen vornimmt.

Es gibt auch Logiken, die diese Idealisierung unterlassen und für die der Satz vom ausgeschlossenen Dritten nicht gilt. Die führen dann für gewöhnlich einen dritten Wahrheitswert (z.B. „unbestimmt“) oder noch mehrere zusätzliche Wahrheitswerte ein.

Die Logiken, die den Satz vom ausgeschlossenen Dritten anerkennen, heißen deshalb auch *zweiwertige* Logiken. In dieser Vorlesung werden wir uns nur mit zweiwertigen Logiken beschäftigen.

<!-- p. 17 | pdf 25 -->

### 43. Zusammengesetzte und atomare Aussagen

△ **Aussagen, die aus Teilaussagen zusammengesetzt sind (d.h. aus Bestandteilen, die selbst wahr oder falsch sind), wollen wir *zusammengesetzte Aussagen* nennen.**

Am Donnerstag hat es geregnet und am Freitag hatte Hans keine Zeit.

Emma ist glücklich, weil die Sonne scheint.

△ **Alle anderen Aussagen heißen *atomare Aussagen*.**

Es regnet.

Die Katze sitzt auf der Matratze.

Eine Aussage muss wohlgemerkt nicht kurz sein, um atomar zu sein.

An einem windstillen Sommertag eines unbestimmten Jahres, mehr als ein Jahrhundert nach der Gründung von Cornell, erklomm ein Mann, der vom Lügen lebte, den Hügel, um einen Drachen steigen zu lassen.

Entscheidend ist, dass sie nicht aus Bestandteilen zusammengesetzt ist, die für sich genommen Wahrheitswerte besitzen.

### 44. Wahrheitsfunktionale Aussagenverknüpfungen

Bei manchen zusammengesetzten Aussageverknüpfungen ergibt sich der Wahrheitswert der zusammengesetzten Aussage aus den Wahrheitswerten der Teilaussagen. Ein Beispiel:

Am Donnerstag hat es geregnet und am Freitag hatte Hans keine Zeit.

Wenn beide Teilaussagen wahr sind, ist die zusammengesetzte Aussage auch wahr.

Wenn mindestens eine der beiden Teilaussagen falsch ist, ist auch die zusammengesetzte Aussage falsch.

*Es genügt in diesem Beispiel, die Wahrheitswerte der Teilaussagen zu kennen, um den Wahrheitswert der zusammengesetzten Aussage beurteilen zu können.*

Dies ist ein Charakteristikum nicht nur dieses Beispielsatzes, sondern aller Aussagen, bei denen Teilaussagen durch die Konjunktion „und“ verbunden sind. Weil dabei der Wahrheitswert der zusammengesetzten Aussage eine Funktion der Wahrheitswerte der Teilaussagen ist, heißen solche Verknüpfungen *wahrheitsfunktional*.

△ **Eine Verknüpfung von Teilaussagen, bei der der Wahrheitswert der zusammengesetzten Aussage allein von den Wahrheitswerten der Teilaussagen hervorgeht, heißt *wahrheitsfunktionale Aussagenverknüpfung*.**

<!-- p. 18 | pdf 26 -->

### 45. Nicht-wahrheitsfunktionale Aussagenverknüpfungen

Nicht alle Aussagenverknüpfungen sind wahrheitsfunktional.

Emma ist glücklich, weil die Sonne scheint.

Hier genügt es nicht, die Wahrheitswerte der Teilaussagen

Emma ist glücklich.

und

Die Sonne scheint.

zu kennen, um die Gesamtaussage zu beurteilen.

### 46. Wahrheitsfunktionale und nicht-wahrheitsfunktionale Aussagenverknüpfungen

Weitere Beispiele für wahrheitsfunktionale Aussagenverknüpfungen:

Ich werde am Sonntag kommen oder (ich werde) eine Karte schicken.

Bielefeld liegt am Teutoburger Wald und (Bielefeld) ist die Metropole Ostwestfalens.

Weitere Beispiele für nicht-wahrheitsfunktionale Aussagenverknüpfungen:

Gisbert Schlüter schaute am Samstagabend Fußball, während seine Frau das Haus für immer verließ.

Dadurch, dass die mittlere Temperatur der Erde immer wärmer wird, steigt der Meeresspiegel immer weiter.

### 47. Das Ziel der Aussagenlogik

Das Ziel der Aussagenlogik ist es, diejenigen logischen Konstanten, die wahrheitsfunktionale Aussagenverknüpfungen sind, zu identifizieren, in einer formalen Sprache abzubilden und zu untersuchen.

Bevor wir die formale Sprache der Aussagenlogik kennenlernen, werden wir nun die wichtigsten wahrheitsfunktionalen Aussagenverknüpfungen anhand von Beispielen aus der natürlichen Sprache betrachten.

### 48. Die Konjunktion

Die Konjunktion haben Sie bereits kennengelernt. Im Deutschen spielt das Wort „und“ die Rolle der Konjunktion. Beispiele:

Bielefeld liegt am Teutoburger Wald und (Bielefeld) ist die Metropole Ostwestfalens.

Am Donnerstag hat es geregnet und am Freitag hatte Hans keine Zeit.

Die Wahrheit der zusammengesetzten Aussage ergibt sich bei der Konjunktion gemäß der folgenden Regel aus den Wahrheitswerten der Teilaussagen:

*Dann und nur dann, wenn beide Teilaussagen wahr sind, ist auch ihre Konjunktion wahr.*

<!-- p. 19 | pdf 27 -->

### 49. Die Konjunktion

Die Konjunktion zweier Aussagen symbolisiert man in der Aussagenlogik durch das Zeichen „∧“. Entsprechend kann man die Regel, nach der sich der Wahrheitswert einer Konjunktion aus den Wahrheitswerten der Teilaussagen ergibt, wie folgt ausbuchstabieren:

Wenn $A$ wahr ist und $B$ wahr ist, ist $A \wedge B$ wahr.

Wenn $A$ wahr ist und $B$ falsch ist, ist $A \wedge B$ falsch.

Wenn $A$ falsch ist und $B$ wahr ist, ist $A \wedge B$ falsch.

Wenn $A$ falsch ist und $B$ falsch ist, ist $A \wedge B$ falsch.

### 50. Die Konjunktion

Dafür hat sich eine übersichtliche Schreibweise eingebürgert, die man als *Wahrheitstafel* bezeichnet.

| $A$ | $B$ | $A \wedge B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | f |
| f | f | f |

### 51. Die Konjunktion

Achtung! „Und“ wird im Deutschen nicht immer als Aussagenverknüpfung verwendet:

Alfred und Ruth sind Geschwister.

Selbst dort, wo „und“ zur Verbindung von Teilaussagen verwendet wird, gibt es Ausnahmefälle, bei denen die Verknüpfung nicht eindeutig wahrheitsfunktional ist:

Die Ärzte entfernten die Mandeln und Hans wurde wieder gesund.

Solche Ausnahmen werden in der Aussagenlogik nicht erfasst. Mit der Konjunktion ist immer eine wahrheitsfunktionale Aussagenverknüpfung gemeint.

### 52. Die Adjunktion

Als Adjunktion bezeichnet man die Verknüpfung zweier Teilaussagen durch „oder“:

Frieda hat einen guten Job oder sie stammt aus einer wohlhabenden Familie.

Ich werde am Sonntag kommen oder (ich werde) eine Karte schicken.

Die Wahrheit der zusammengesetzten Aussage ergibt sich bei der Adjunktion gemäß der folgenden Regel aus den Wahrheitswerten der Teilaussagen:

<!-- p. 20 | pdf 28 -->

*Dann und nur dann, wenn mindestens eine der Teilaussagen wahr ist, ist auch ihre Adjunktion wahr.*

Anstelle von „Adjunktion“ verwenden manche Autoren auch das Wort „Disjunktion“.

### 53. Die Adjunktion

In der Logik symbolisiert man die Adjunktion durch das Zeichen „∨“, das für lateinisch „vel“ (=„oder“) steht.

(Merken: ∨, **o**ben offen, **o**der  
∧, **unt**en offen, **und**.)

Die Wahrheitstafel der Adjunktion sieht folgendermaßen aus:

| $A$ | $B$ | $A \vee B$ |
|---|---|---|
| w | w | w |
| w | f | w |
| f | w | w |
| f | f | f |

### 54. Die Adjunktion

Auch beim „Oder“ ist der Gebrauch in der natürlichen Sprache etwas komplexer als die angegebene Wahrheitstafel angibt. Manchmal wird nämlich „oder“ im Sinne des sogenannten *ausschließenden Oder* gebraucht:

Ich werde nachher eine Flasche Weißwein aus dem Keller mitnehmen, oder ich nehme den Prosecco aus dem Kühlschrank.

Beim ausschließenden Oder ist die zusammengesetzte Aussage dann und nur dann wahr, wenn genau eine Teilaussage wahr ist. Im Deutschen wird dies zumeist mit dem Zusatz „entweder“ ausgedrückt. Es hat also eine andere Wahrheitstafel als die eben genannte.

In der Aussagenlogik ist mit der Adjunktion immer das *einschließende Oder* gemeint, das durch die Wahrheitstafel auf der vorangehenden Folie charakterisiert ist.

### 55. Die Negation

Die Negation ist strenggenommen keine Aussagenverknüpfung, da sie nicht zwei Teilaussagen verknüpft, sondern auf eine Teilaussage angewendet wird:

Es ist nicht der Fall, dass Wasser ein Metall ist.

Zur Aussagenlogik gehört die Negation trotzdem, weil sie wahrheitsfunktional ist:

„Es ist nicht der Fall, dass Wasser ein Metall ist“ ist *wahr*, wenn „Wasser ist ein Metall“ *falsch* ist und „Es ist nicht der Fall, dass Wasser ein Metall ist“ ist *falsch*, wenn „Wasser ist ein Metall“ *wahr* ist.

Um den Wahrheitswert einer Negation zu bestimmen, genügt es, den Wahrheitswert der negierten Teilaussage zu kennen.

<!-- p. 21 | pdf 29 -->

### 56. Die Negation

Die Regel, der die Negation folgt, ist also:

*Eine Negation ist dann und nur dann wahr, wenn die negierte Teilaussage falsch ist.*

Entsprechend kann man ihre Wahrheitstafel wie folgt angeben:

| $A$ | $\neg A$ |
|---|---|
| w | f |
| f | w |

### 57. Die Negation

Auch bei der Negation gibt es Besonderheiten zu beachten. Es gibt im Deutschen und in anderen natürlichen Sprachen nicht-wahrheitsfunktionale Verwendungen von „nicht“, um einzelne inhaltliche Aspekte einer Aussage zu negieren:

Nicht Herta Kortokrax-Johanntobehrens fuhr mit dem Bus nach Ubbedissen.

Herta Kortokrax-Johanntobehrens fuhr nicht mit dem Bus nach Ubbedissen.

Herta Kortokrax-Johanntobehrens fuhr mit dem Bus nicht nach Ubbedissen.

Im Gegensatz dazu ist in der klassischen Aussagenlogik mit der Negation immer die Umkehrung des Wahrheitswertes gemeint.

Es ist nicht der Fall, dass Herta Kortokrax-Johanntobehrens mit dem Bus nach Ubbedissen fuhr.

Als Bedeutung von „¬“ merken Sie sich deshalb am besten „es ist nicht der Fall, dass“.

### 58. Die Subjunktion

In der Aussagenlogik spielen noch zwei weitere wahrheitsfunktionale Verknüpfungen eine Rolle, die wir zunächst anhand ihrer Regeln kennen lernen wollen. Die erste von ihnen heißt *Subjunktion* oder *materiale Implikation* und wird durch den Pfeil „→“ symbolisiert.

> Bemerkung: „Anhand ihrer Regeln“ soll hier heißen: Anhand derjenigen Regeln, die für sie in den formalen Sprachen der Logik gelten.

*$A \rightarrow B$ ist genau dann wahr, wenn $A$ falsch oder $B$ wahr ist.*

Sie können sich die Bedeutung von „$A \rightarrow B$“ daher am Besten als „nicht A, oder B“ merken. Es ergibt sich die folgende Wahrheitstafel:

| $A$ | $B$ | $A \rightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | w |
| f | f | w |

<!-- p. 22 | pdf 30 -->

An der Wahrheitstafel erkennt man, dass man die Regel auch andersherum formulieren kann:

*$A \rightarrow B$ ist genau dann falsch, wenn $A$ wahr und $B$ falsch ist.*

### 59. Die Subjunktion

In gewissem Sinne gibt die Subjunktion die Bedeutung der logischen Verknüpfung „wenn …, dann“ wieder.

Wenn der Motor läuft, dann ist Benzin im Tank.

Die Beispielaussage ist nur dann falsch, wenn der Motor läuft und kein Benzin im Tank ist. Sofern man sie in allen anderen Fällen als wahr gelten lassen will, genügt sie der Wahrheitstafel von „→“.

### 60. Die Subjunktion

Man könnte deshalb versucht sein, sich die Bedeutung von „→“ als „wenn …, dann“ zu merken. Aber dabei ist die größte Vorsicht geboten!

Woody Allen ist Brillenträger → In Jena werden viele Brillengläser hergestellt.

Den Gesetzen der Subjunktion zufolge ist die obige Beispielaussage wahr. Dagegen würden wir den folgenden Satz normalerweise *nicht* als wahr bezeichnen:

Wenn Woody Allen Brillenträger ist, dann werden in Jena viele Brillengläser hergestellt.

Der Grund dafür ist, dass die Verknüpfung „wenn …, dann“ in der deutschen Sprache nicht rein wahrheitsfunktional ist, sondern zusätzlich eine inhaltliche Relevanz des Vorderglieds für das Hinterglied behauptet.

### 61. Die Subjunktion

△ **Die Subjunktion spiegelt näherungsweise den wahrheitsfunktionalen Gehalt von „wenn …, dann“ wieder. Merken Sie sich als Bedeutung der Subjunktion, dass $A \rightarrow B$ genau dann wahr ist, wenn $A$ falsch ist oder $B$ wahr.**

> Bemerkung: Im weiteren Verlauf der Vorlesung werden wir eine komplexere formale Sprache kennenlernen (diejenige der Prädikatenlogik), mit deren Hilfe die Erfassung der normalsprachlichen Bedeutung von „wenn …, dann“ in vielen Fällen deutlich besser gelingt.

Es genügt also, zu wissen, dass $A$ falsch ist, um zu wissen, dass $A \rightarrow B$ wahr ist (ganz gleich, welchen Wahrheitswert $B$ hat).

Ebenso genügt es, zu wissen, dass $B$ wahr ist, um zu wissen, dass $A \rightarrow B$ wahr ist (ganz gleich, welchen Wahrheitswert $A$ hat).

△ **Merken Sie sich zusätzlich (was gleichbedeutend ist), dass $A \rightarrow B$ genau dann *falsch* ist, wenn $A$ wahr ist und $B$ falsch.**

<!-- p. 23 | pdf 31 -->

Übrigens wird das Vorderglied einer Subjunktion *Antecedens* genannt, das Hinterglied *Konsequens*.

### 62. Die Bisubjunktion

Die letzte wahrheitsfunktionale Verknüpfung, die wir kennen lernen, ist die Bisubjunktion, die durch das Zeichen „↔“ symbolisiert wird.

*Die Bisubjunktion zweier Aussagen ist dann und nur dann wahr, wenn beide denselben Wahrheitswert haben.*

Die Wahrheitstafel der Bisubjunktion sieht deshalb folgendermaßen aus:

| $A$ | $B$ | $A \leftrightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | f |
| f | f | w |

### 63. Die Bisubjunktion

Die Bisubjunktion bildet in einem gewissen Sinn den wahrheitsfunktionalen Gehalt von Aussagenverknüpfungen wie „genau dann, wenn …“ und „dann und nur dann, wenn“ ab.

Doch ist hier aus denselben Gründen wie bei der Bisubjunktion äußerste Vorsicht geboten! Die genannten Wendungen haben in der deutschen Sprache noch zusätzliche, nicht-wahrheitsfunktionale Bedeutungskomponenten, wie man am folgenden Beispiel sieht:

Der Papst ist ein Mann ↔ Der Mond umkreist die Erde.

Der Papst ist genau dann ein Mann, wenn der Mond die Erde umkreist.

### 64. Beispiel: Ein aussagenlogisches Argument

Um schon jetzt einen Eindruck davon zu gewinnen, wie die Aussagenlogik das Phänomen deduktiv gültiger Argumente zu erklären helfen kann, betrachten wir ein Beispiel für ein aussagenlogisches Argument.

$$\begin{array}{l} A \rightarrow B \\ A \\ \hline B \end{array}$$

An der Wahrheitstafel der Subjunktion können wir folgende Beobachtung anstellen:

| $A$ | $B$ | $A \rightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | w |
| f | f | w |

<!-- p. 24 | pdf 32 -->

Im einzigen Fall, in dem sowohl „$A \rightarrow B$“ als auch „$A$“ wahr sind, ist auch „$B$“ wahr. Das liegt an der Art und Weise, wie die wahrheitsfunktionale Aussagenverknüpfung „→“ funktioniert. Deshalb müssen bei allen Argumenten in AL, die diese Form aufweisen und bei denen beide Prämissen wahr sind, auch die Konklusionen wahr sein. Daher ist das obige Argument deduktiv gültig.

Analog sind auch entsprechende natürlichsprachliche Argumente deduktiv gültig:

$$\begin{array}{l} \text{Wenn Lisa die Klausur bestanden hat, bekommt sie den Schein.} \\ \text{Lisa hat die Klausur bestanden.} \\ \hline \text{Lisa bekommt den Schein.} \end{array}$$

### 65. Beispiel: Ein aussagenlogisches Argument

Betrachten Sie dagegen das folgende Argument:

$$\begin{array}{l} A \rightarrow B \\ B \\ \hline A \end{array}$$

| $A$ | $B$ | $A \rightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | w |
| f | f | w |

Anhand der Wahrheitstafel wird deutlich, dass es auch möglich ist, dass „$A \rightarrow B$“ und „$B$“ beide wahr sind, „$A$“ aber zugleich falsch. Es handelt sich deshalb um kein deduktiv gültiges Argument.

Entsprechend ist auch das analoge normalsprachliche Argument *nicht* gültig:

$$\begin{array}{l} \text{Wenn Peter faul war und nicht gelernt hat, ist er durch die Klausur durchgefallen.} \\ \text{Peter ist durch die Klausur durchgefallen.} \\ \hline \text{Peter war faul und hat nicht gelernt.} \end{array}$$

### 66. Objekt- und Metasprache

Nun, da wir die wichtigsten wahrheitsfunktionalen Aussagenverknüpfungen kennen und ahnen, wie sie funktionieren, können wir beginnen, uns mit der formalen Sprache der Aussagenlogik zu beschäftigen. Vorher müssen wir noch einige Begriffe klären.

„Kiel“ besteht aus vier Buchstaben.

<!-- p. 25 | pdf 33 -->

Handelt dieser Satz von der Stadt Kiel? Nein, er handelt vom *Namen* der Stadt Kiel. Dies ist ein wichtiger Unterschied, der in der Philosophie so ausgedrückt wird: „Kiel“ wird im obigen Beispielsatz nicht *verwendet*, sondern *erwähnt*. Im folgenden Satz wird „Kiel“ dagegen verwendet:

Kiel hat viele interessante Sehenswürdigkeiten.

### 67. Objekt- und Metasprache

Dass ein sprachlicher Ausdruck nur erwähnt und nicht verwendet wird, muss durch Anführungszeichen gekennzeichnet werden.

Die Anführungszeichen machen aus einem Ausdruck, der sich beispielsweise auf eine Stadt bezieht, einen Ausdruck, der sich auf den Namen einer Stadt bezieht:

Kiel

„Kiel“

### 68. Objekt- und Metasprache

Wir sprechen in der Logik über Ausdrücke formaler Sprachen, benutzen dafür aber die deutsche Sprache. Die Ausdrücke aus den formalen Sprachen können wir dabei in den deutschsprachigen Sätzen nur erwähnen, nicht verwenden.

In der Logik nennt man die (normalerweise formale) Sprache, über die man spricht, die *Objektsprache*; die Sprache, in der man Aussagen über die Objektsprache spricht, heißt *Metasprache*.

Bei der informellen Vorstellung der Aussagenverknüpfungen habe ich diese Trennung nicht streng durchgehalten (weil wir ja noch keine formale Sprache eingeführt hatten). Von jetzt an werden wir aber streng zwischen Objekt- und Metasprache trennen und darauf achten, Ausdrücke dort, wo sie erwähnt und nicht verwendet werden, in Anführungszeichen zu setzen.

Nur in Tabellen und wenn wir Ausdrücke oder Sätze der Objektsprache in einer eigenen Zeile absetzen, verzichten wir der Übersichtlichkeit halber auf Anführungszeichen.

### 69. Objekt- und Metasprache

Beispiele für die Unterscheidung von Erwähnen und Verwenden bzw. Objekt- und Metasprache:

Richtig:

„Torsten“ ist zweisilbig.

Wenn „$A \rightarrow B$“ falsch ist, muss „$B$“ falsch sein.

Der Satz „Schnee ist weiß“ ist genau dann wahr, wenn Schnee weiß ist.

> Bemerkung: Hier sieht man, dass Objekt- und Metasprache nicht unbedingt unterschiedliche Sprachen sein müssen.

Falsch:

„$2 + 2$“ = „$1 + 3$“

Kiel besteht aus vier Buchstaben.

„Die größte Stadt Ostwestfalens“ bezieht sich auf „Bielefeld“.

<!-- p. 26 | pdf 34 -->

### 70. Syntax und Semantik

In der Logik und in anderen Disziplinen, die sich mit Sprachen beschäftigen, unterscheidet man zwischen Syntax und Semantik.

△ **In der *Syntax* geht es um die formalen Beziehungen der sprachlichen Zeichen zueinander. Für formale Sprachen bedeutet das: Welches sind die Grundzeichen der formalen Sprache? Und wie bildet man daraus die komplexen Ausdrücke und Sätze der Sprache?**

Entsprechend werden solche Aspekte einer Sprache, die allein den formalen Aufbau der Ausdrücke aus den Grundzeichen und nicht deren Bedeutung betreffen, *syntaktische* Aspekte der Sprache genannt.

△ **In der *Semantik* geht es um die Bedeutungen der Ausdrücke und Sätze einer Sprache. Für formale Sprachen bedeutet das: Welches sind die Bedeutungen der Grundzeichen der formalen Sprache? Und wie ergeben sich aus diesen Bedeutungen die Bedeutungen der komplexen Ausdrücke und Sätze der Sprache?**

Entsprechend werden solche Aspekte einer Sprache, die wesentlich die Bedeutungen der Ausdrücke und Sätze betreffen, *semantische* Aspekte der Sprache genannt.

### 71. Die Syntax der Sprache AL

Damit kommen wir nun zur formalen Sprache der Aussagenlogik, die wir auch kurz die Sprache AL nennen werden; wir beginnen mit der Syntax.

Die Sprache AL ist aus den folgenden Grundzeichen aufgebaut:

- *Atomare Sätze.* Dies sind die Großbuchstaben „A“, „B“, „C“, usw. sowie Großbuchstaben mit Numeralen als Indizes: „$A_{1}$“, „$A_{2}$“, usw., „$B_{1}$“, „$B_{2}$“ usw.
- *Junktoren.* Dies sind die Zeichen „∧“, „∨“, „¬“, „→“ und „↔“.
- *Hilfszeichen.* Dies sind die Klammerzeichen „(“ und „)“.

### 72. Die Syntax der Sprache AL

Wie die Sätze der Sprache AL gebildet werden, ergibt sich aus der folgenden, siebenteiligen Definition:

1. Jeder atomare Satz ist ein Satz von AL.
2. Wenn $\varphi$ und $\psi$ Sätze von AL sind, dann ist auch $(\varphi \wedge \psi)$ ein Satz von AL.
3. Wenn $\varphi$ und $\psi$ Sätze von AL sind, dann ist auch $(\varphi \vee \psi)$ ein Satz von AL.
4. Wenn $\varphi$ ein Satz von AL ist, dann ist auch $\neg\varphi$ ein Satz von AL.
5. Wenn $\varphi$ und $\psi$ Sätze von AL sind, dann ist auch $(\varphi \rightarrow \psi)$ ein Satz von AL.
6. Wenn $\varphi$ und $\psi$ Sätze von AL sind, dann ist auch $(\varphi \leftrightarrow \psi)$ ein Satz von AL.
7. Außer den gemäß 1. bis 6. gebildeten gibt es keine weiteren Sätze von AL.

> Hinweis: Wohlgemerkt, in den Formulierungen 2.-3. lautet die Bedingung, dass $\varphi$ und $\psi$ Sätze von AL sind, und nicht etwa, dass sie atomare Sätze sind. Die Bedingungen können also mehrmals hintereinander auf Sätze wachsender Komplexität angewendet werden. Solche Definitionen nennt man rekursiv.

<!-- p. 27 | pdf 35 -->

### 73. Die Syntax der Sprache AL

Die Sätze von AL nennt man auch *wohlgebildete Sätze*. Zeichenketten, die den in der siebenteiligen Definition ausgedrückten syntaktischen Bedingungen nicht genügen, nennt man *nicht wohlgebildet*.

### 74. Wohlgebildete Sätze der Sprache AL

$$A$$

$$D_{421}$$

$$(A \rightarrow Z_{2})$$

$$(A \wedge \neg B)$$

$$((A \wedge \neg B) \vee (\neg A \wedge B))$$

$$((\neg A_{1} \rightarrow A_{2}) \rightarrow A_{3})$$

$$(((A_{4} \wedge \neg A_{5}) \vee (\neg A_{4} \wedge A_{5})) \leftrightarrow ((\neg A_{1} \rightarrow A_{2}) \rightarrow A_{3}))$$

### 75. Hauptzeichen

Derjenige Junktor, der bei der schrittweisen Bildung des Satzes gemäß der siebenteiligen Definition als Letzter eingeführt wird, heißt *Hauptzeichen* des Satzes.

$$((A \wedge \neg B) \boldsymbol{\vee} (\neg A \wedge B))$$

$$((\neg A_{1} \rightarrow A_{2}) \boldsymbol{\rightarrow} A_{3})$$

$$(((A_{4} \wedge \neg A_{5}) \vee (\neg A_{4} \wedge A_{5})) \boldsymbol{\leftrightarrow} ((\neg A_{1} \rightarrow A_{2}) \rightarrow A_{3}))$$

### 76. Nicht wohlgebildete Zeichenketten

$$(A \rightarrow q)$$

$$(\varphi \rightarrow \psi)$$

$$(A \wedge B \vee C)$$

$$\neg(A)$$

$$(B\neg \rightarrow C)$$

### 77. Klammerersparnis

Wie Sie gesehen haben, können die vielen Klammern einen Satz aus AL schnell sehr unübersichtlich machen. Deshalb gibt es drei einfache Klammerregeln:

1. Äußerste Klammern dürfen weggelassen werden.

   Z.B.: „$(A \wedge \neg B) \vee (\neg A \wedge B)$“ statt „$((A \wedge \neg B) \vee (\neg A \wedge B))$“

<!-- p. 28 | pdf 36 -->

2. „∧“ und „∨“ binden stärker als „→“ und „↔“.

   Z.B.: „$A \wedge B \rightarrow C$“ statt „$(A \wedge B) \rightarrow C$“,
   „$A \leftrightarrow C \vee D$“ statt „$A \leftrightarrow (C \vee D)$“.

3. Bei iterierten Konjunktionen, Adjunktionen und Bisubjunktionen dürfen die Klammern weggelassen werden.

   Z.B.: „$A \wedge B \wedge C$“ statt „$(A \wedge B) \wedge C$“,
   „$A \leftrightarrow B \leftrightarrow C \leftrightarrow D$“ statt „$((A \leftrightarrow B) \leftrightarrow C) \leftrightarrow D$“.

   Mit iterierten Verknüpfungen sind dabei zunächst nur solche Sätze gemeint, bei denen sich die Klammern auf der linken Seite sammeln.

### 78. Die Junktoren der Aussagenlogik

Zum Abschluss der Syntax hier noch eine Übersicht über die Junktoren der Aussagenlogik. Beachten Sie, dass die Junktoren in verschiedenen Büchern und Zeitschriften oft auch mit Hilfe anderer als der oben eingeführten Zeichen dargestellt werden. Die Tabelle enthält dafür einige gebräuchliche Beispiele in der rechten Spalte.

| | Name der Verknüpfung; Lesarten | Abweichende Symbole |
|---|---|---|
| $A \wedge B$ | *Konjunktion;* lies: „A und B“ | A & B, A·B, AB |
| $A \vee B$ | *Adjunktion (Disjunktion);* lies: „A oder B“ | A\|B |
| $\neg A$ | *Negation* lies: „nicht A“ | $\sim A$, $\overline{A}$ |
| $A \rightarrow B$ | *Subjunktion (materiale Implikation, Konditional);* lies: „wenn A, so B“ oder „A Pfeil B“ | $A \supset B$ |
| $A \leftrightarrow B$ | *Bisubjunktion;* lies „A genau dann, wenn B“ oder „A Doppelpfeil B“ | $A \equiv B$ |

## 3. Aussagenlogik: Semantik

### 79. Die Semantik der Sprache AL

Die Sätze der Sprache AL bedeuten zunächst einmal nichts Bestimmtes. Um ihnen eine Bedeutung beizulegen, müssen wir sie interpretieren. Dies tun wir zum Beispiel, wenn wir die Sprache AL *anwenden* wollen, um bestimmte logische Zusammenhänge zu formalisieren. Wir nehmen dann eine intensionale Interpretation vor.

△ **Eine *intensionale Interpretation* der Sprache AL ist eine Zuordnung, bei der einzelnen atomaren Sätzen Aussagen aus einer anderen Sprache zugeordnet werden. Die atomaren Sätze übernehmen den Wahrheitswert der ihnen zugeordneten Aussagen.**

> Bemerkung: Nachdem Wahrheitswerte einiger atomarer Sätze durch eine intensionale Interpretation festgelegt sind,

<!-- p. 29 | pdf 37 -->

> ergeben sich natürlich die Wahrheitswerte der aus ihnen zusammengesetzten Ausdrücke gemäß den Wahrheitstafeln der jeweiligen Junktoren. Dazu gleich mehr.

Hat man einen Teil der atomaren Sätze intensional interpretiert, dann man mit diesem Fragment der Sprache AL bestimmte Zusammenhänge formalisieren. Dazu ein Beispiel

### 80. Intensionale Interpretation

„A“ möge bedeuten „Helga Horstkötter ist zu Hause.“

„B“ möge bedeuten „Hermann Horstkötter ist zu Hause.“

„C“ möge bedeuten „Heike Horstkötter ist zu Hause.“

„D“ möge bedeuten „Mindestens zwei Horstkötters sind zu Hause.“

Wir können die Sprache AL verwenden, um einen Zusammenhang zwischen diesen vier Sätzen zu formulieren:

$$D \leftrightarrow (A \wedge B) \vee (B \wedge C) \vee (A \wedge C)$$

(Sofern es außer den genannten keine weiteren Horstkötters gibt, ist dies eine wahre Aussage.)

### 81. Extensionale Interpretationen

Wenn wir die *Logik* der Sprache AL untersuchen wollen, wollen wir aber gerade diejenigen Zusammenhänge zwischen den Sätzen untersuchen, die unabhängig von den konkreten Inhalten sind, für die die Aussagen und Teilaussagen stehen. Es geht uns um diejenigen Zusammenhänge, die bei *jeder beliebigen Interpretation der atomaren Sätze* gelten.

> Erinnerung: In der Logik geht es um die inhaltsunabhängigen logischen Konstanten. Die logischen Konstanten der Aussagenlogik sind die Junktoren, d.h. die wahrheitsfunktionalen Aussagenverknüpfungen. Die atomaren Sätze bilden die inhaltlichen Elemente der Sprache ab.

Schon bei einem einzigen atomaren Satz gibt es natürlich unendlich viele mögliche intensionale Interpretationen. Die Situation ist aber viel einfacher, weil die Junktoren der Aussagenlogik alle *wahrheitsfunktional* sind. Die Wahrheitswerte aller Sätze aus AL ergeben sich deshalb aus den Wahrheitswerten der atomaren Sätze. Deshalb kommt es bei der Untersuchung der logischen Zusammenhänge zwischen den Sätzen aus AL nur auf die verschiedenen möglichen Wahrheitswerte der atomaren Sätze an.

### 82. Extensionale Interpretationen

△ **Eine *extensionale Interpretation* oder *Bewertung* der Sprache AL ist eine Zuordnung, bei der jedem atomaren Satz genau ein Wahrheitswert zugewiesen wird.**

> Die Ausdrücke „intensional“ und „extensional“ gehen auf eine sprachphilosophische Unterscheidung zurück. „Intension“ bedeutet soviel wie „Sinn“. (Siehe unten, Kapitel 16.)

Sie können sich eine Bewertung wie eine unendliche Tabelle vorstellen:

<!-- p. 30 | pdf 38 -->

| atomarer Satz | A | B | C | D | E | F | G | H | I | J | K | L | M | N | … |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Wahrheitswert | w | f | f | w | w | f | w | f | f | w | w | w | f | w | … |

Zum Glück interessieren wir uns immer nur für endlich viele endlich lange Sätze, in denen nur endlich viele atomare Sätze vorkommen, so dass wir uns auch mit endlichen (Teil-) Bewertungen begnügen können.

### 83. Semantische Regeln der Sprache AL

Die semantischen Regeln (d.h. die Regeln, nach denen sich die Bedeutung der komplexen Ausdrücke aus den Bedeutungen der einfacheren ergeben) sind bei der Sprache AL durch die Wahrheitstafeln der Junktoren bestimmt.

△ **Ist eine Bewertung gegeben, dann ergeben sich, von den atomaren Sätzen ausgehend, die Wahrheitswerte der komplexeren Sätze von AL nach Maßgabe der Wahrheitstafeln der Junktoren.**

### 84. Erinnerung: Wahrheitstafeln

| $A$ | $\neg A$ |
|---|---|
| w | f |
| f | w |

| $A$ | $B$ | $A \wedge B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | f |
| f | f | f |

| $A$ | $B$ | $A \vee B$ |
|---|---|---|
| w | w | w |
| w | f | w |
| f | w | w |
| f | f | f |

| $A$ | $B$ | $A \rightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | w |
| f | f | w |

| $A$ | $B$ | $A \leftrightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | f |
| f | f | w |

### 85. Anwendung der semantischen Regeln

Bei der Anwendung der semantischen Regeln geht man von der Bewertung der atomaren Sätze aus und schreitet von dort aus zu den jeweils komplexeren Ausdrücken fort.

$$(A \wedge B) \vee (C \wedge D) \rightarrow (A \leftrightarrow \neg D)$$

$$\underbrace{\underbrace{\underbrace{\text{w}\;\text{f}}_{\text{f}}\;\;\underbrace{\text{w}\;\text{f}}_{\text{f}}}_{\text{f}}\;\;\underbrace{\text{w}\;\;\underbrace{\text{f}}_{\text{w}}}_{\text{w}}}_{\textbf{w}}$$

Die Feststellung des Wahrheitswertes eines zusammengesetzten Satzes von AL bei gegebener Bewertung nennt man auch *Wahrheitswertanalyse*.

<!-- p. 31 | pdf 39 -->

### 86. Anwendung der semantischen Regeln

Bei der Wahrheitswertanalyse kann man die Wahrheitswerte der zusammengesetzten Teilaussagen auch direkt unter die dazugehörigen Junktoren schreiben. Der Wahrheitswert des ganzen Satzes steht dann am Ende unter dem Hauptzeichen.

Beispiele:

$$(A \wedge \neg B) \vee (\neg A \wedge B)$$

| $A$ | $\wedge$ | $\neg$ | $B$ | $\vee$ | $\neg$ | $A$ | $\wedge$ | $B$ |
|---|---|---|---|---|---|---|---|---|
| <u>w</u> | f | f | <u>w</u> | **f** | f | <u>w</u> | f | <u>w</u> |

$$(\neg A_1 \rightarrow A_2) \rightarrow A_3$$

| $\neg$ | $A_1$ | $\rightarrow$ | $A_2$ | $\rightarrow$ | $A_3$ |
|---|---|---|---|---|---|
| w | <u>f</u> | f | <u>f</u> | **w** | <u>f</u> |

<!-- Notation: Unterstrichene Werte markieren die Bewertung eines atomaren Satzes; der fett gedruckte Wert steht unter dem Hauptzeichen (Endergebnis des ganzen Satzes). Diese Konvention gilt im Original für beide Beispiele. -->

### 87. Semantische Regeln der Sprache AL

Durch die Wahrheitswertanalayse <!-- sic --> lässt sich so bei gegebener Bewertung der Wahrheitswert jedes Satzes von AL bestimmen. Eine Bewertung legt also nicht nur die Wahrheitswerte der atomaren Sätze, sondern indirekt die Wahrheitswerte aller Sätze von AL fest.

## 4. Aussagenlogik: Logik

### 88. Deduktive Argumente und logische Form in AL

Erinnern Sie sich an die Definition der logischen Gültigkeit von Argumenten aus der Einführung:

Ein Argument heißt *deduktiv gültig*, wenn alle Argumente, die dieselbe logische Form und ausschließlich wahre Prämissen haben, auch eine wahre Konklusion besitzen.

Wie lässt sich diese Definition auf die Sprache AL anwenden?

Zunächst müssen wir uns klar darüber werden, was bei Aussagen und Argumenten der Sprache AL die logische Form ist.

### 89. Logische Form in AL

Die logischen Konstanten der Sprache AL sind natürlich die Junktoren. Daher gilt:

Zwei Sätze (oder Argumente) in AL haben dieselbe logische Form, wenn Sie in zweierlei Hinsicht übereinstimmen:

- Anordnung der Junktoren und
- Identität und Nicht-Identität unter mehrfach auftretenden atomaren Sätzen.

<!-- p. 32 | pdf 40 -->

Z.B. haben die folgenden Sätze dieselbe logische Form:

$$A \wedge B \rightarrow A \vee C$$
$$D_{12} \wedge Z \rightarrow D_{12} \vee Q_4$$

Die folgenden zwei Sätze von AL haben *nicht* dieselbe logische Form:

$$A_1 \vee A_2 \leftrightarrow A_3 \vee A_4$$
$$D \vee E \leftrightarrow F \vee D$$

### 90. Logische Form in AL

Diese Bestimmung der logischen Form lässt sich auch auf Argumente in AL anwenden. Die folgenden zwei Argumente haben dieselbe logische Form.

$$\begin{array}{l@{\qquad}l}
U \rightarrow V & R_2 \rightarrow A_{17} \\
V \rightarrow F & A_{17} \rightarrow G \\
\hline
U \rightarrow F & R_2 \rightarrow G
\end{array}$$

### 91. Logische Form in AL

$$\begin{array}{l@{\qquad}l}
U \rightarrow V & R_2 \rightarrow A_{17} \\
V \rightarrow F & A_{17} \rightarrow G \\
\hline
U \rightarrow F & R_2 \rightarrow G
\end{array}$$

Prämissen und Konklusionen von Argumenten derselben logischen Form können unterschiedliche Wahrheitswerte haben. Aber es ist klar, dass dies nicht an den unterschiedlichen Bezeichnungen der atomaren Sätze liegt, sondern nur an ihren unterschiedlichen *Bewertungen*.

> Wenn man sich also fragt, ob ein AL-Argument X deduktiv gültig ist, kann man sich deshalb sparen, alle Argumente, die dieselbe Form wie X haben und all ihre verschiedenen möglichen Bewertungen zu betrachten. Es genügt, alle verschiedenen Bewertungen von X selbst zu untersuchen, denn bei allen anderen AL-Argumenten mit derselben Form werden genau dieselben Wahrheitwert-Muster auftreten.

### 92. Deduktiv gültige Argumente in AL

Wenn man prüfen will, ob alle Argumente, die dieselbe logische Form wie ein gegebenes Argument und ausschließlich wahre Prämissen haben, auch eine wahre Konklusion besitzen, genügt es deshalb, alle verschiedenen möglichen Bewertungen des Arguments zu prüfen.

△ **Ein Argument in AL heißt *deduktiv gültig*, wenn unter allen Bewertungen, bei denen sämtliche Prämissen des Arguments wahr sind, auch die Konklusion wahr ist.**

Erinnerung: Man sagt dann auch, dass die Konklusion aus den Prämissen *logisch folgt*.

<!-- p. 33 | pdf 41 -->

### 93. Das Zeichen „⊨“

Um die Beziehung der logischen Folgerung auszudrücken, verwendet man oft das Zeichen „⊨“.
Z.B.:

$$U \rightarrow V,\ V \rightarrow S \vDash U \rightarrow S$$

$$A \wedge B \vDash A$$

Wohlgemerkt: „⊨“ ist kein Zeichen, das zur Sprache AL gehört, sondern als Abkürzung für die metasprachliche Formulierung „Aus … folgt logisch …“ zu verstehen.

> Deshalb müsste man strenggenommen Anführungszeichen verwenden und schreiben „$U \rightarrow V$“, „$V \rightarrow S$“ ⊨ „$U \rightarrow S$“. Diese Anführungszeichen werden aber gemeinhin aus Bequemlichkeit weggelassen.

### 94. Deduktiv gültige Argumente in AL

Ob ein Argument deduktiv gültig ist oder nicht, kann man deshalb überprüfen, indem man alle Bewertungen des Arguments ausprobiert. Am übersichtlichsten geschieht dies in Form einer Wahrheitstafel. Beispiel:

$$\begin{array}{l} U \vee V \\ \neg V \\ \hline U \end{array}$$

| $U$ | $V$ | Prämisse: $U \vee V$ | Prämisse: $\neg V$ | Konklusion: $U$ |
|---|---|---|---|---|
| w | w | w | f | w |
| w | f | w | w | w ✓ |
| f | w | w | f | f |
| f | f | f | w | f |

<!-- Markierung: In Zeile 2 (U=w, V=f) sind die beiden Prämissen-Zellen blau umkreist und die Konklusions-Zelle grün umkreist mit grünem Häkchen. -->

Das Argument ist deduktiv gültig, wenn in jeder Zeile, in der alle Prämissen wahr sind, auch die Konklusion wahr ist.

$$\begin{array}{l@{\qquad}l}
U \vee V & X_{17} \vee J_2 \\
\neg V & \neg J_2 \\
\hline
U & X_{17}
\end{array}$$

Wohlgemerkt: Das Ergebnis unserer Überprüfung bedeutet, dass *alle Argumente*, die dieselbe logische Form wie das Beispiel haben, deduktiv gültig sind. Die logische Form unseres Beispielarguments hat einen Namen, sie heißt *disjunktiver Syllogismus*.

### 95. Deduktiv gültige Argumente in AL

Wichtig ist, dass *alle* möglichen unterschiedlichen Bewertungen der Formel in der Wahrheitstafel auftreten. Bei $n$ verschiedenen atomaren Sätzen werden $2^n$ Zeilen erforderlich.

<!-- p. 34 | pdf 42 -->

Im folgenden Beispiel treten drei verschiedene atomare Sätze auf, man braucht also eine achtzeilige Wahrheitstafel.

$$\begin{array}{l} A \rightarrow B \\ B \rightarrow C \\ \hline A \rightarrow C \end{array}$$

Auch diese Argumentform ist so wichtig, dass sie einen Namen hat: Sie heißt *hypothetischer Syllogismus*.

Die folgende Wahrheitstafel zeigt, dass jeder hypothetische Syllogismus ein deduktiv gültiges Argument ist.

| $A$ | $B$ | $C$ | Prämisse: $A \rightarrow B$ | Prämisse: $B \rightarrow C$ | Konklusion: $A \rightarrow C$ |
|---|---|---|---|---|---|
| w | w | w | w | w | w ✓ |
| w | w | f | w | f | f |
| w | f | w | f | w | w |
| w | f | f | f | w | f |
| f | w | w | w | w | w ✓ |
| f | w | f | w | f | w |
| f | f | w | w | w | w ✓ |
| f | f | f | w | w | w ✓ |

<!-- Markierung: In den Zeilen 1, 5, 7 und 8 (den einzigen Zeilen, in denen beide Prämissen wahr sind) sind die Prämissen-Zellen blau umkreist und die Konklusions-Zelle grün umkreist mit grünem Häkchen. -->

### 96. Deduktiv gültige Argumente in AL

Wenn Sie das Wahrheitstafelverfahren auf ein Argument anwenden, dass nicht deduktiv gültig ist, werden Sie auf mindestens eine Zeile stoßen, bei der alle Prämissen wahr sind, nicht aber die Konklusion.

$$\begin{array}{l} A_1 \rightarrow A_2 \\ A_2 \\ \hline A_1 \end{array}$$

| $A_1$ | $A_2$ | Prämisse: $A_1 \rightarrow A_2$ | Prämisse: $A_2$ | Konklusion: $A_1$ |
|---|---|---|---|---|
| w | w | w | w | w ✓ |
| w | f | f | f | w |
| f | w | w | w | f |
| f | f | w | f | f |

<!-- Markierung: In Zeile 1 sind die beiden Prämissen-Zellen blau umkreist und die Konklusions-Zelle grün umkreist mit grünem Häkchen. In Zeile 3 sind die beiden Prämissen-Zellen ebenfalls blau umkreist, aber die Konklusions-Zelle „f“ ist rot umkreist (ohne Häkchen) — das Gegenbeispiel, das die deduktive Ungültigkeit des Arguments zeigt. -->

### 97. Aussagenlogische Gültigkeit

Ein Argument der natürlichen Sprache, das übersetzt in die Sprache AL ein deduktiv gültiges Argument ergibt, heißt *aussagenlogisch gültig*.

<!-- p. 35 | pdf 43 -->

Es folgen einige typische aussagenlogisch gültige Argumente. Die Formen dieser Argumente sind so gebräuchlich, dass sich Namen für sie eingebürgert haben.

### 98. Gebräuchliche Formen aussagenlogisch gültiger Argumente

*Modus Ponens*

$$\begin{array}{l}
\text{Wenn ich rauche, habe ich ein schlechtes Gewissen.} \\
\text{Ich rauche.} \\
\hline
\text{Ich habe ein schlechtes Gewissen.}
\end{array}$$

$$\begin{array}{l} A \rightarrow B \\ A \\ \hline B \end{array}$$

*Modus Tollens*

$$\begin{array}{l}
\text{Wenn es einen Sturm geben wird, fällt das Barometer.} \\
\text{Das Barometer fällt nicht.} \\
\hline
\text{Es wird keinen Sturm geben.}
\end{array}$$

$$\begin{array}{l} A \rightarrow B \\ \neg B \\ \hline \neg A \end{array}$$

*Disjunktiver Syllogismus*

$$\begin{array}{l}
\text{Michael hat reiche Eltern oder einen guten Job.} \\
\text{Einen guten Job hat Michael nicht.} \\
\hline
\text{Also hat er reiche Eltern.}
\end{array}$$

$$\begin{array}{l} A \vee B \\ \neg B \\ \hline A \end{array}$$

*Konjunktiver Syllogismus*

$$\begin{array}{l}
\text{Es ist nicht der Fall, dass sowohl Joachim Gauck als auch Angela Merkel das höchste Staatsamt innehaben.} \\
\text{Joachim Gauck hat das höchste Staatsamt inne.} \\
\hline
\text{Also hat Angela Merkel nicht das höchste Staatsamt inne.}
\end{array}$$

<!-- p. 36 | pdf 44 -->

$$\begin{array}{l} \neg(A \wedge B) \\ A \\ \hline \neg B \end{array}$$

*Hypothetischer Syllogismus*

$$\begin{array}{l}
\text{Wenn es regnet, wird die Erde nass.} \\
\text{Wenn die Erde nass wird, kommen die Regenwürmer.} \\
\hline
\text{Wenn es regnet, kommen die Regenwürmer.}
\end{array}$$

$$\begin{array}{l} A \rightarrow B \\ B \rightarrow C \\ \hline A \rightarrow C \end{array}$$

*Klassisches Dilemma*

$$\begin{array}{l}
\text{Wenn Neo die Pille schluckt, wird er unglücklich werden.} \\
\text{Wenn Neo die Pille nicht schluckt, wird er unglücklich werden.} \\
\hline
\text{Neo wird unglücklich werden.}
\end{array}$$

$$\begin{array}{l} A \rightarrow B \\ \neg A \rightarrow B \\ \hline B \end{array}$$

*Abschwächung der Konjunktion*

$$\begin{array}{l}
\text{Sie tanzten und sie lachten.} \\
\hline
\text{Sie lachten.}
\end{array}$$

$$\begin{array}{l} A \wedge B \\ \hline A \end{array}$$

*Abschwächung der Adjunktion*

$$\begin{array}{l}
\text{Die Mülleimer sind blau.} \\
\hline
\text{Die Mülleimer sind blau oder sie sind grün.}
\end{array}$$

<!-- p. 37 | pdf 45 -->

$$\begin{array}{l} A \\ \hline A \vee B \end{array}$$

### 99. Logische Wahrheit

Manche Sätze von AL sind unter jeder Bewertung wahr.

$$A \vee \neg A$$

| $A$ | $\neg A$ | $A \vee \neg A$ |
|---|---|---|
| w | f | w |
| f | w | w |

Ganz gleich, wie man „A“ interpretiert (extensional oder intensional), „$A \vee \neg A$“ ist notwendigerweise immer wahr.

### 100. Logische Wahrheit, Tautologien

△ **Sätze von AL, die unter jeder Bewertung wahr sind, heißen *logisch wahr*.**

△ **Logisch wahre Sätze von AL nennt man auch *Tautologien*.**

### 101. Logische Wahrheit

Einige logisch wahre Sätze von AL:

$$A \rightarrow A$$

$$A \leftrightarrow A$$

$$\neg(A \wedge \neg A)$$

> Diese Tautologie wird manchmal auch Satz vom Widerspruch genannt, ebenso wie man „$A \vee \neg A$“ manchmal als Satz vom ausgeschlossenen Dritten bezeichnet. Das ist aber irreführend und eine typische Verwechslung von Objekt- und Metasprache. Die eigentlich so zu bezeichnenden Sätze (vgl. Teil 1) sind metasprachliche Behauptungen.

$$A \rightarrow (B \rightarrow A)$$

### 102. Logische Wahrheit und das Zeichen „⊨“

Man kürzt die Feststellung, dass ein Satz logisch wahr ist, mit Hilfe desselben Zeichens ab, das auch zur Bezeichnung der logischen Folgerung verwendet wird:

<!-- p. 38 | pdf 46 -->

$$\vDash A \vee \neg A$$

Der Hintergrund dafür ist die Vorstellung, dass „$A \vee \neg A$“ voraussetzungslos wahr ist, also sozusagen bereits ohne Prämissen „aus nichts“ logisch folgt.

### 103. Logische Wahrheit

Tautologien kommen in beliebigen Komplexitätsgraden vor und müssen nicht auf den ersten Blick als solche erkennbar sein.

$$(A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))$$

Natürlich können Sie im Prinzip jeden Satz von AL mit Hilfe einer Wahrheitstafel daraufhin überprüfen, ob er logisch wahr ist.
Die Wahrheitstafel können Sie in einem vereinfachten Verfahren direkt unter dem Satz anlegen.

Schreiben Sie zunächst alle möglichen Bewertungen der auftretenden atomaren Sätze unter die ersten Vorkommnisse dieser Sätze.

$$(A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))$$

| $A$ | $B$ | $C$ |
|---|---|---|
| w | w | w |
| w | w | f |
| w | f | w |
| w | f | f |
| f | w | w |
| f | w | f |
| f | f | w |
| f | f | f |

Kopieren Sie diese dann unter die weiteren Vorkommnisse der jeweiligen atomaren Sätze.

$$(A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))$$

| $A$ | $B$ | $C$ | $A$ | $B$ | $A$ | $C$ |
|---|---|---|---|---|---|---|
| w | w | w | w | w | w | w |
| w | w | f | w | w | w | f |
| w | f | w | w | f | w | w |
| w | f | f | w | f | w | f |
| f | w | w | f | w | f | w |
| f | w | f | f | w | f | f |
| f | f | w | f | f | f | w |
| f | f | f | f | f | f | f |

Stellen Sie dann die Wahrheitswerte des Satzes unter allen Bewertungen fest, indem Sie jeweils von innen nach außen vorgehend die semantischen Regeln der Junktoren anwenden und die Zwischenergebnisse direkt unter den jeweiligen Junktor schreiben.

<!-- p. 39 | pdf 47 -->

$$(A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))$$

| $A$ | $\rightarrow$ | $B$ | $\rightarrow$ | $C$ | $\rightarrow$ | $A$ | $\rightarrow$ | $B$ | $\rightarrow$ | $A$ | $\rightarrow$ | $C$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| w | w | w | w | w | **w** | w | w | w | w | w | w | w |
| w | f | w | f | f | **w** | w | w | w | f | w | f | f |
| w | w | f | w | w | **w** | w | f | f | w | w | w | w |
| w | w | f | w | f | **w** | w | f | f | w | w | f | f |
| f | w | w | w | w | **w** | f | w | w | w | f | w | w |
| f | w | w | f | f | **w** | f | w | w | w | f | w | f |
| f | w | f | w | w | **w** | f | w | f | w | f | w | w |
| f | w | f | w | f | **w** | f | w | f | w | f | w | f |

> Wenn unter dem Hauptzeichen überall „w“ steht, dann ist der Satz unter jeder Bewertung wahr und folglich eine Tautologie.

### 104. Logische Wahrheit und logische Folgerung

Wenn φ und ψ Sätze von AL sind, gilt immer: Aus φ folgt logisch ψ genau dann, wenn φ → ψ ein logisch wahrer Satz ist.
Symbolisch: $\varphi \vDash \psi$ genau dann, wenn $\vDash \varphi \rightarrow \psi$.

Beweis:

Wenn aus φ logisch ψ folgt, macht jede Bewertung, die φ wahr macht, auch ψ wahr. Unter jeder solchen Bewertung ist aber φ → ψ wahr.

Wenn φ → ψ ein logisch wahrer Satz ist, dann gibt es keine Bewertung, unter der φ wahr ist und ψ falsch. Dann folgt aber φ logisch aus ψ.

### 105. Tautologien folgen aus jeder Prämisse

Wenn Σ eine beliebige Menge von Sätzen von AL und φ eine aussagenlogische Tautologie ist, dann folgt φ logisch aus Σ.

Beweis:

Ist φ eine Tautologie, dann ist φ unter *jeder* Bewertung überhaupt wahr. Also ist φ auch unter jeder Bewertung wahr, die alle Sätze aus der Prämissenmenge Σ wahr macht. Das heißt aber, dass φ aus Σ logisch folgt.

### 106. Widersprüchliche Aussagen

Es gibt auch Aussagen, die unter jeder Bewertung falsch sind.
Z.B.:

$$A \wedge \neg A$$

$$(P \rightarrow Q) \wedge P \wedge \neg Q$$

### 107. Inkonsistente Aussagen(mengen)

△ **Ein Satz von AL heißt *inkonsistent*, wenn er unter jeder Bewertung falsch ist.**

<!-- p. 40 | pdf 48 -->

> Inkonsistente Sätze werden auch logisch falsch, kontradiktorisch oder widersprüchlich genannt.

△ **Eine Menge Σ von Aussagen von AL heißt *inkonsistent*, wenn unter jeder Bewertung mindestens eine Aussage aus Σ falsch ist.**

> Dies entspricht unserer alltäglichen Redeweise von widersprüchlichen Aussagenmengen. Denn es bedeutet, dass die Aussagen der Menge Σ *unmöglich alle gleichzeitig wahr sein* können.

Beispiel einer inkonsistenten Aussagenmenge:
{„$P \vee Q$“, „$\neg P$“, „$\neg Q$“}

### 108. Einige logische Begriffe

Aussagen, die nicht inkonsistent sind, d.h. also die unter mindestens einer Bewertung wahr sind, heißen auch *konsistent* oder *erfüllbar*.

Hier eine Übersicht über einige logische Begriffe. Bei den Beispielsätzen gehen wir davon aus, dass eine Bewertung gegeben ist, unter der „A“ wahr ist.

Beispielsätze (Annahme: „A“ ist wahr):

|  |  |  |  |
|---|---|---|---|
| $A \wedge \neg A$ | $\neg A$ | $A$ | $A \vee \neg A$ |

> [Abbildung: Zwei Ebenen geschweifter Klammern über der obigen Tabelle. Obere Ebene: eine Klammer über den ersten beiden Spalten ($A \wedge \neg A$, $\neg A$) mit der Beschriftung „falsch“; eine Klammer über den letzten beiden Spalten ($A$, $A \vee \neg A$) mit der Beschriftung „wahr“. Darunter, zweite Ebene: eine Klammer nur über der ersten Spalte ($A \wedge \neg A$) mit der Beschriftung „inkonsistent, logisch falsch“; eine Klammer nur über der letzten Spalte ($A \vee \neg A$) mit der Beschriftung „logisch wahr“. Unter der Tabelle: eine Klammer über den beiden mittleren Spalten ($\neg A$, $A$) mit der Beschriftung „konsistent, erfüllbar“.]

### 109. Aus einer Inkonsistenz folgt jede Aussage

Wenn Σ eine inkonsistente Menge von Sätzen von AL ist und φ ein beliebiger Satz von AL, dann folgt φ logisch aus Σ.

Beweis:
Dass Σ inkonsistent ist, heißt, dass es keine Bewertung gibt, unter der alle Aussagen von Σ wahr sind. Das heißt auch, dass es keine Bewertung gibt, unter der die Aussagen aus Σ alle wahr sind und die Aussage φ falsch. Das ist aber dasselbe, wie zu sagen, dass alle diejenigen Bewertungen, die alle Aussagen von Σ wahr machen, auch φ wahr machen.

> Auf den ersten Blick sieht dieser Beweis für Sie vielleicht aus wie ein schlechter Trick. Aber er ist korrekt. Es hängt an der Bedeutung der Klausel „Wenn alle Bewertungen, die jede der Prämissen wahr machen, auch die Konklusion wahr machen…“ – was ist, wenn überhaupt keine Bewertung die Konklusion wahr macht? Nach der konventionellen und in der Logik üblichen Verwendung von „alle“ ist die Bedingung dann erfüllt.

<!-- p. 41 | pdf 49 -->

### 110. Logische Äquivalenz

Eine besondere Rolle spielen Tautologien, bei denen das Hauptzeichen die Bisubjunktion ist.

△ **Wenn φ und ψ Sätze von AL sind und φ ↔ ψ logisch wahr ist, dann heißen φ und ψ *logisch äquivalent*. Man schreibt dann auch φ ≡ ψ.**

Ein ganz einfaches Beispiel für eine logische Äquivalenz ist:

$$A \wedge B \equiv B \wedge A$$

> Bemerkung: Wieder gilt, dass „≡“ kein objektsprachliches Zeichen ist, sondern eine metasprachliche Kurzschrift für „(…) ↔ (…)“ ist logisch wahr.

△ **Zwei Sätze von AL φ und ψ sind genau dann logisch äquivalent, φ ≡ ψ, wenn unter jeder Bewertung beide denselben Wahrheitswert haben.**

> Das folgt unmittelbar aus der Definition der logischen Äquivalenz und der Wahrheitstafel der Bisubjunktion.

### 111. Das Einsetzungstheorem

Die besondere Bedeutung der logischen Äquivalenzen beruht darauf, dass man logisch äquivalente Ausdrücke wechselseitig füreinander einsetzen darf.

△ **Es seien φ, χ und ψ Sätze von AL. Wenn φ ≡ χ gilt und φ als echter Teilsatz in ψ vorkommt, dann hat derjenige Satz, der entsteht, indem man φ innerhalb von ψ durch χ ersetzt, unter jeder Bewertung denselben Wahrheitswert wie ψ.**

Ein echter Teilsatz zu sein, soll dabei bedeuten, dass φ innerhalb von ψ für sich allein und als Ganzes unter dem Einfluss eines Junktors steht.

> Der Beweis des Einsetzungstheorems ist recht einfach. Bei der Bestimmung des Wahrheitswertes von ψ spielt für jeden echten Teilsatz von ψ allein dessen Wahrheitswert eine Rolle. φ und χ haben aber unter jeder Bewertung identische Wahrheitswerte. Deshalb ist es gleichgültig, ob an einer bestimmten Stelle φ oder χ als echter Teilsatz auftritt.

### 112. Das Einsetzungstheorem: Was ist ein „echter Teilsatz“?

$$A \wedge B \rightarrow C$$

Hier ist „$A \wedge B$“ ein echter Teilsatz von „$A \wedge B \rightarrow C$“, weil er für sich und als Ganzes das Vorderglied der Subjunktion bildet. Dagegen ist „$B \rightarrow C$“ *kein* echter Teilsatz. Die Tatsache, dass diese Zeichenfolge überhaupt in dieser Form in „$A \wedge B \rightarrow C$“ vorkommt, ist nur ein Zufallsprodukt der Klammerersparnisregeln.

<!-- p. 42 | pdf 50 -->

### 113. Das Einsetzungstheorem

Ein Beispiel für Anwendungen des Einsetzungstheorems:

Wenn Sie die Formel

$$P \wedge Q \rightarrow R \wedge S$$

umwandeln in

$$Q \wedge P \rightarrow S \wedge R,$$

ändert sich nichts am Wahrheitswert, denn es gelten die Äquivalenzen

$$P \wedge Q \equiv Q \wedge P$$

und

$$R \wedge S \equiv S \wedge R.$$

### 114. Wichtige aussagenlogische Äquivalenzen

Idempotenz:

$$A \wedge A \equiv A \qquad A \vee A \equiv A$$

Doppelte Verneinung:

$$\neg\neg A \equiv A$$

### 115. Kommutativität

$$A \wedge B \equiv B \wedge A \qquad A \vee B \equiv B \vee A \qquad A \leftrightarrow B \equiv B \leftrightarrow A$$

### 116. Assoziativität

$$(A \wedge B) \wedge C \equiv A \wedge (B \wedge C) \qquad (A \vee B) \vee C \equiv A \vee (B \vee C)$$

$$(A \leftrightarrow B) \leftrightarrow C \equiv A \leftrightarrow (B \leftrightarrow C)$$

### 117. Beispiel für den Beweis einer aussagenlogischen Äquivalenz

$$((A \leftrightarrow B) \leftrightarrow C) \leftrightarrow (A \leftrightarrow (B \leftrightarrow C))$$

| $A$ | <span style="color:green">$\leftrightarrow$</span> | $B$ | <span style="color:blue">$\leftrightarrow$</span> | $C$ | <span style="color:magenta">**$\leftrightarrow$**</span> | $A$ | <span style="color:maroon">$\leftrightarrow$</span> | $B$ | <span style="color:red">$\leftrightarrow$</span> | $C$ |
|---|---|---|---|---|---|---|---|---|---|---|
| <span style="color:green">w</span> | <span style="color:blue">w</span> | <span style="color:green">w</span> | <span style="color:magenta">w</span> | <span style="color:blue">w</span> | **w** | <span style="color:maroon">w</span> | <span style="color:magenta">w</span> | <span style="color:red">w</span> | <span style="color:maroon">w</span> | <span style="color:red">w</span> |
| <span style="color:green">w</span> | <span style="color:blue">w</span> | <span style="color:green">w</span> | <span style="color:magenta">f</span> | <span style="color:blue">f</span> | **w** | <span style="color:maroon">w</span> | <span style="color:magenta">f</span> | <span style="color:red">w</span> | <span style="color:maroon">f</span> | <span style="color:red">f</span> |
| <span style="color:green">w</span> | <span style="color:blue">f</span> | <span style="color:green">f</span> | <span style="color:magenta">f</span> | <span style="color:blue">w</span> | **w** | <span style="color:maroon">w</span> | <span style="color:magenta">f</span> | <span style="color:red">f</span> | <span style="color:maroon">f</span> | <span style="color:red">w</span> |
| <span style="color:green">w</span> | <span style="color:blue">f</span> | <span style="color:green">f</span> | <span style="color:magenta">w</span> | <span style="color:blue">f</span> | **w** | <span style="color:maroon">w</span> | <span style="color:magenta">w</span> | <span style="color:red">f</span> | <span style="color:maroon">w</span> | <span style="color:red">f</span> |
| <span style="color:green">f</span> | <span style="color:blue">f</span> | <span style="color:green">w</span> | <span style="color:magenta">f</span> | <span style="color:blue">w</span> | **w** | <span style="color:maroon">f</span> | <span style="color:magenta">f</span> | <span style="color:red">w</span> | <span style="color:maroon">w</span> | <span style="color:red">w</span> |
| <span style="color:green">f</span> | <span style="color:blue">f</span> | <span style="color:green">w</span> | <span style="color:magenta">w</span> | <span style="color:blue">f</span> | **w** | <span style="color:maroon">f</span> | <span style="color:magenta">w</span> | <span style="color:red">w</span> | <span style="color:maroon">f</span> | <span style="color:red">f</span> |
| <span style="color:green">f</span> | <span style="color:blue">w</span> | <span style="color:green">f</span> | <span style="color:magenta">w</span> | <span style="color:blue">w</span> | **w** | <span style="color:maroon">f</span> | <span style="color:magenta">w</span> | <span style="color:red">f</span> | <span style="color:maroon">f</span> | <span style="color:red">w</span> |
| <span style="color:green">f</span> | <span style="color:blue">w</span> | <span style="color:green">f</span> | <span style="color:magenta">f</span> | <span style="color:blue">f</span> | **w** | <span style="color:maroon">f</span> | <span style="color:magenta">f</span> | <span style="color:red">f</span> | <span style="color:maroon">w</span> | <span style="color:red">f</span> |

<!-- Notation: Im Original ist jeder Wert in der Farbe des Junktors eingefärbt, der ihn als Nächstes verarbeitet (Grün: die ↔ zwischen A und B; Blau: die ↔ zwischen (A↔B) und C; Magenta: das Hauptzeichen ↔, zusätzlich fett gedruckt; Kastanienbraun: die ↔ zwischen A und (B↔C); Rot: die ↔ zwischen B und C). Die Kopfzeile ist entsprechend eingefärbt, jeder Junktor in seiner eigenen Farbe (das Hauptzeichen also magenta und fett); nur in den Wertezeilen ist das Ergebnis unter dem Hauptzeichen schwarz und fett statt magenta. -->

<!-- p. 43 | pdf 51 -->

### 118. Distributivität

$$A \wedge (B \vee C) \equiv (A \wedge B) \vee (A \wedge C)$$

$$A \vee (B \wedge C) \equiv (A \vee B) \wedge (A \vee C)$$

D.h.: Sie dürfen bei Und-oder-Kombinationen in *beiden* Fällen „ausklammern“.
Das ist ähnlich wie in der Arithmetik:

$$5 \cdot (10 + 2) = 5 \cdot 10 + 5 \cdot 2$$

Einen wichtigen Unterschied zur Arithmetik gibt es aber: Bei Und-oder-Kombinationen darf man in *beiden* Fällen ausklammern, egal ob die Oder-Verknüpfung innen und die Und-Verknüpfung außen steht oder umgekehrt.

> Dagegen funktioniert bei der Arithmetik das Ausklammern nur einer Kombination von Operanden, bei der umgekehrten *nicht*: $5 + (10 \cdot 2) \neq (5 + 10) \cdot (5 + 2)$.

### 119. DeMorgansche Gesetze

$$\neg(A \wedge B) \equiv \neg A \vee \neg B$$

$$\neg(A \vee B) \equiv \neg A \wedge \neg B$$

### 120. Äquivalenzen der Subjunktion

$$A \rightarrow B \equiv \neg A \vee B$$

$$A \rightarrow B \equiv \neg(A \wedge \neg B)$$

Kontraposition:

$$A \rightarrow B \equiv \neg B \rightarrow \neg A$$

### 121. Äquivalenzen der Bisubjunktion

$$A \leftrightarrow B \equiv (A \rightarrow B) \wedge (B \rightarrow A)$$

$$A \leftrightarrow B \equiv (A \wedge B) \vee (\neg A \wedge \neg B)$$

### 122. Das Substitutionstheorem

Für wahrheitserhaltende Umformungen ist in Kombination mit dem Einsetzungstheorem auch das Substitutionstheorem nützlich.

<!-- p. 44 | pdf 52 -->

△ **Sei α ein logisch wahrer Satz von AL. Dann ist auch der Satz, der entsteht, wenn ich jedes Vorkommnis eines bestimmten atomaren Satzes durch ein und dieselbe echte Teilaussage φ ersetze, logisch wahr.**

Beweis: Betrachten Sie das Ergebnis α' der Ersetzung unter einer beliebigen Bewertung B. Sei ξ der ersetzte atomare Satz. Dann bilden wir die Bewertung C wie folgt: C übernimmt für alle atomaren Sätze außer ξ die Bewertung von B; ξ selbst bewertet C mit demjenigen Wahrheitswert, der unter B dem Satz φ zukommt. α' muss unter B denselben Wahrheitswert haben wie α unter C (beachten Sie dass ξ in α' nicht vorkommt). Da α logisch wahr ist, muss dies der Wahrheitswert „wahr“ sein.

> … und das heißt, dass α' unter beliebigen Bewertungen wahr, folglich logisch wahr ist.

### 123. Das Substitutionstheorem

Beispiele für Anwendungen des Substitutionstheorems:

$$\vDash A \vee \neg A$$

Daher auch:

$$\vDash (X \wedge Y \rightarrow Z) \vee \neg(X \wedge Y \rightarrow Z)$$

$$\vDash A \rightarrow (B \rightarrow A)$$

Daher auch (nach zweifacher Anwendung des Substitutionstheorems):

$$\vDash F \vee G \rightarrow (B \wedge C \rightarrow F \vee G)$$

$$\vDash (A \rightarrow B) \leftrightarrow \neg A \vee B$$

Daher auch (wieder nach zweifacher Anwendung):

$$\vDash (J \wedge K \rightarrow L \vee M \vee N) \leftrightarrow \neg(J \wedge K) \vee L \vee M \vee N$$

### 124. Umformungen nach Einsetzungs- und Substitutionstheorem

Das Substitutionstheorem liefert so jede Menge praktischer logischer Äquivalenzen (die ja nichts anderes sind als logisch wahre Bisubjunktionen). Und mit deren Hilfe können Sie auch komplexe Sätze wahrheitserhaltend umformen. Denn logisch äquivalente Sätze haben unter jeder Interpretation dieselben Wahrheitswerte.
Z.B. wird, wie gesehen, aus

$$(A \rightarrow B) \equiv \neg A \vee B$$

per Substiutution <!-- sic -->

$$J \wedge K \rightarrow L \vee M \vee N \equiv \neg(J \wedge K) \vee L \vee M \vee N$$

und daher wissen Sie, dass Sie überall statt „$J \wedge K \rightarrow L \vee M \vee N$“ auch „$\neg(J \wedge K) \vee L \vee M \vee N$“ schreiben können.

<!-- p. 45 | pdf 53 -->

### 125. Umformungen nach Einsetzungs- und Substitutionstheorem

Durch die Kombination von Einsetzungs- und Substitutionstheorem sind eine Vielzahl von Umformungen erlaubt.
Z.B.:

$$(G \wedge F) \vee (E \vee \neg G \rightarrow G \wedge H)$$

kann umgeformt werden in:

$$(G \wedge F) \vee \neg(E \vee \neg G) \vee (G \wedge H)$$

Begründung: Per Einsetzungstheorem mit Hilfe der Äquivalenz

$$E \vee \neg G \rightarrow G \wedge H \equiv \neg(E \vee \neg G) \vee (G \wedge H),$$

die sich wiederum per Substitutionstheorem aus der Äquivalenz

$$A \rightarrow B \equiv \neg A \vee B$$

herleitet.

### 126. Umformungen nach Einsetzungs- und Substitutionstheorem

Durch Ersetzung logisch äquivalenter Teilsätze lässt sich weiter umformen:

$$(G \wedge F) \vee \neg(E \vee \neg G) \vee (G \wedge H)$$
$$(G \wedge F) \vee (\neg E \wedge \neg\neg G) \vee (G \wedge H)$$
$$(G \wedge F) \vee (\neg E \wedge G) \vee (G \wedge H)$$
$$(G \wedge F) \vee (G \wedge \neg E) \vee (G \wedge H)$$
$$(G \wedge F) \vee (G \wedge (\neg E \vee H))$$
$$G \wedge (F \vee \neg E \vee H)$$

Dabei können Sie sich beispielsweise die im letzten Schritt verwendete Äquivalenz

$$(G \wedge F) \vee (G \wedge (\neg E \vee H)) \equiv G \wedge (F \vee \neg E \vee H)$$

mit Hilfe des Substitutionstheorems aus der Äquivalenz

$$(A \wedge B) \vee (A \wedge C) \equiv A \wedge (B \vee C)$$

herleiten.

### 127. Ausdrückbarkeit von AL

Die Kombination aus Einsetzungs- und Substitutionstheorem macht klar, dass Sie in jedem Satz von AL jeden Junktor durch eine äquivalente Formulierung ersetzen können.

Z.B. „$A \wedge B$“ durch „$\neg(\neg A \vee \neg B)$“,
„$A \vee B$“ durch „$\neg(\neg A \wedge \neg B)$“,
„$A \rightarrow B$“ durch „$\neg(A \wedge \neg B)$“,
„$A \leftrightarrow B$“ durch „$\neg(A \wedge \neg B) \wedge \neg(B \wedge \neg A)$“.

Die drei unteren Zeilen zeigen gemeinsam, dass Sie jeden Satz von AL allein mit Hilfe der Junktoren „∧“ und „¬“ ausdrücken können.

<!-- p. 46 | pdf 54 -->

### 128. Ausdrückbarkeit von AL, Sheffer-Strich

Betrachten Sie nun einen neuen Junktor „∣“, definiert durch seine Wahrheitstafel.

| $A$ | $B$ | $A \mid B$ |
|---|---|---|
| w | w | f |
| w | f | w |
| f | w | w |
| f | f | w |

Es gilt:

$$A \wedge B \equiv \neg(A \mid B)$$

$$\neg A \equiv (A \mid A)$$

Da wir schon wissen, dass sich mit Hilfe von „∧“ und „¬“ jeder Satz von AL ausdrücken lässt, folgt, dass jeder Satz von AL allein mit Hilfe des Junktors „∣“ (sowie atomaren Sätzen und Klammern) formuliert werden kann.

> Der Junktor „∣“ heißt Sheffer-Strich nach dem Logiker Henry M. Sheffer. In der Schaltalgebra entspricht er dem NAND-Gatter, mit dessen Hilfe man jede beliebige logische Schaltung aufbauen kann.

### 129. Einige nützliche Regeln

In den folgenden Regeln sind mit φ, α und ω immer Sätze von AL gemeint.

Ist α logisch wahr, dann ist auch φ ∨ α logisch wahr.

Beispiel: „$((A \rightarrow B) \rightarrow C) \vee (A \rightarrow (B \rightarrow A))$“ ist logisch wahr, weil schon „$(A \rightarrow (B \rightarrow A))$“ logisch wahr ist.

Beweis: Dass α logisch wahr ist, heißt, dass es unter jeder Bewertung wahr ist. Aber unter jeder Bewertung, unter der mindestens eines ihrer Adjunktionsglieder wahr ist, muss auch die ganze Adjunktion wahr sein. Deshalb ist auch die Adjunktion φ ∨ α unter jeder Bewertung wahr.

Ist ω logisch falsch (inkonsistent), dann hat φ ∨ ω denselben Wahrheitswert wie φ.

Beispiel: „$A \vee B \vee \neg B$“ hat denselben Wahrheitswert wie „A“.

Ist α logisch wahr, dann hat φ ∧ α denselben Wahrheitswert wie φ.

Beispiel: „$A \wedge (B \rightarrow B)$“ hat denselben Wahrheitswert wie „A“.

Ist ω logisch falsch, dann ist auch φ ∧ ω logisch falsch.

Beispiel: „$A \wedge B \wedge \neg B$“ ist logisch falsch.

Ist α logisch wahr, dann ist auch φ → α logisch wahr.

Beispiel: „$A \rightarrow (B \leftrightarrow B)$“ ist logisch wahr.

<!-- p. 47 | pdf 55 -->

Ist $\omega$ logisch falsch, dann ist $\omega \rightarrow \varphi$ logisch wahr.

Beispiel: „$(B \wedge \neg B) \rightarrow A$“ ist logisch wahr.

> Wenn Sie einen Satz von AL nur unter einer einzigen ganz bestimmten Bewertung betrachten, dann dürfen Sie die sechs vorstehenden Regeln anwenden und überall „falsch“ statt „logisch falsch“ und „wahr“ statt „logisch wahr“ setzen. Beispiel (letzte Regel): Wenn „$A$“ falsch ist, ist „$A \rightarrow (B \vee C)$“ wahr.

## 5. Das Wahrheitsbaumverfahren für die Aussagenlogik

### 130. Das Wahrheitsbaumverfahren

Mit Hilfe von Wahrheitstafeln kann man grundsätzlich jeden Satz von AL auf seine logische Wahrheit hin überprüfen. Allerdings wächst die Größe der Tafeln exponentiell mit der Zahl der auftretenden atomaren Sätze. Für einen komplexen Satz mit 10 atomaren Sätzen bräuchte man schon eine Wahrheitstafel mit 1024 Zeilen. Glücklicherweise gibt es diverse Verfahren, die die Überprüfung von Sätzen von AL vereinfachen. Ein solches Verfahren besteht in der Konstruktion von *Wahrheitsbäumen* (oder *semantischen Tableaus*).

Die Grundidee beruht auf dem Prinzip des indirekten Beweises, denn mit einem Wahrheitsbaum zeigt man immer, dass ein bestimmter Satz oder eine bestimmte Menge von Sätzen *inkonsistent* ist.

### 131. Das Wahrheitsbaumverfahren: Grundidee

Wir wollen eine logische Wahrheit beweisen:

$$\vDash A \vee B \rightarrow (\neg A \rightarrow B)$$

Dem Prinzip des indirekten Beweises folgend, tun wir dies, indem wir nachweisen, dass die Annahme

1.  $A \vee B \rightarrow (\neg A \rightarrow B)$ **ist falsch**

inkonsistent ist. Wir nehmen dazu an, (1) träfe zu, und versuchen, daraus einen Widerspruch abzuleiten.

Wir wissen, dass eine Aussage der Form $\varphi \rightarrow \psi$ nur dann falsch ist, wenn das Antecedens wahr ist und das Konsequens falsch. Aus unserer Annahme (1) folgt also

2.  $A \vee B$ **ist wahr**   *und*

3.  $\neg A \rightarrow B$ **ist falsch**.

Dieselbe Überlegung lässt sich nun erneut auf (3) anwenden, so dass wir sagen können:

4.  $\neg A$ **ist wahr**   *und*

5.  $B$ **ist falsch**.

Was können wir aus (2) weiter folgern? Offenbar muss mindestens einer der folgenden zwei Umstände gelten, wenn (2) zutreffen soll:

6.  $A$ **ist wahr**   *oder*

7.  $B$ **ist wahr**.

Obwohl wir nur wissen das (6) oder (7) zutreffen muss, haben wir damit die Widersprüchlichkeit der Annahme nachgewiesen, denn falls (6) der Fall ist, steht das im Widerspruch zu (4); falls (7) zutrifft, widerspricht das (5).

<!-- p. 48 | pdf 56 -->

### 132. Das Wahrheitsbaumverfahren: Grundidee

Unsere Überlegungen kann man wie folgt schematisch zusammenstellen:

```text
1. A ∨ B → (¬A → B) ist falsch                      [Annahme]
2. A ∨ B ist wahr                                    [aus (1)]
3. ¬A → B ist falsch                                 [aus (1)]
4. ¬A ist wahr                                       [aus (3)]
5. B ist falsch                                      [aus (3)]
├─ 6. A ist wahr                                     [aus (2)]  ↯ [mit (4)]
└─ 7. B ist wahr                                     [aus (2)]  ↯ [mit (5)]
```

### 133. Das Wahrheitsbaumverfahren: Grundidee

Eine solche Struktur nennt man einen Wahrheitsbaum. Jeder Ast des Baums repräsentiert sozusagen einen Versuch, die Annahme(n) an seiner Wurzel als wahr zu interpretieren. Um eine wahrmachende Interpretationsmöglichkeit nachzuweisen, müssen alle Annahmen in einem Ast (einschließlich der Äste, aus denen er hervorgegangen ist) miteinander vereinbar sein. Wenn sich in einem Ast ein Widerspruch ergibt, nennen wir ihn „geschlossen“. Sind alle Äste eines Baums geschlossen, dann wissen wir, dass es keine Möglichkeit gibt, eine wahrmachende Interpretation zu entwickeln – die Annahme(nmenge) muss widersprüchlich sein.

> Einen Ast verstehen wir so, dass er alle Stücke des Baums, aus denen er hervorgegangen ist, mit einschließt. Ein Ast ist also sozusagen der gesamte Weg von einem Endpunkt eines Wahrheitsbaums bis an seine Wurzel.

### 134. Das Wahrheitsbaumverfahren: Grundidee

Bei der Konstruktion des vorigen Baums haben wir zwei Prinzipien verwendet:

```text
φ ∨ ψ ist wahr
├─ φ ist wahr
└─ ψ ist wahr
```

```text
φ → ψ ist falsch
│
φ ist wahr
ψ ist falsch
```

Diese Prinzipien lassen sich verallgemeinern, d.h. die linke Regel lässt sich in jedem Fall anwenden, um alle Interpretationsmöglichkeiten auszuentwickeln, die einen Satz mit „∨“ als Hauptzeichen wahr machen. Mit der rechten Regel kann man ganz allgemein ausentwickeln, was der Fall sein muss, wenn ein Satz mit „→“ als Hauptzeichen falsch sein soll.

Im Folgenden werden diese Regeln auf ein weiteres Beispiel angewandt, nämlich um zu zeigen:

$$\vDash P \wedge (Q \vee R) \rightarrow (P \wedge Q) \vee (P \wedge R)$$

Wie vorhin entwickeln wir dazu den Wahrheitsbaum aus der Annahme, dass diese Aussage falsch ist, um zu zeigen, dass dies zu einem Widerspruch führt.

<!-- p. 49 | pdf 57 -->

### 135. Wahrheitsbäume: Zweites Beispiel

```text
 1. P ∧ (Q ∨ R) → (P ∧ Q) ∨ (P ∧ R) ist falsch    [Annahme]
 2. P ∧ (Q ∨ R) ist wahr                           [aus (1)]
 3. (P ∧ Q) ∨ (P ∧ R) ist falsch                   [aus (1)]
 4. P ist wahr                                     [aus (2)]
 5. Q ∨ R ist wahr                                 [aus (2)]
 ├─ 6. Q ist wahr                                  [aus (5)]
 │  8. P ∧ Q ist falsch                            [aus (3)]
 │  9. P ∧ R ist falsch                            [aus (3)]
 │  ├─ 10. P ist falsch                            [aus (8)]   ↯
 │  └─ 11. Q ist falsch                            [aus (8)]   ↯
 └─ 7. R ist wahr                                  [aus (5)]
    12. P ∧ Q ist falsch                           [aus (3)]
    13. P ∧ R ist falsch                           [aus (3)]
    ├─ 14. P ist falsch                            [aus (13)]  ↯
    └─ 15. R ist falsch                            [aus (13)]  ↯
```

### 136. Wahrheitsbäume: Zweites Beispiel

In diesem Beispiel wurden zwei weitere Regeln angewandt, nämlich für Aussagen, deren Hauptzeichen „∧“ ist:

```text
φ ∧ ψ ist wahr
│
φ ist wahr
ψ ist wahr
```

```text
φ ∧ ψ ist falsch
├─ φ ist falsch
└─ ψ ist falsch
```

Solche Regeln gibt es für alle Junktoren, wie wir gleich sehen werden. Zunächst führen wir aber eine vereinfachte Schreibweise ein.

### 137. Wahrheitsbäume: Vereinfachte Schreibweise

Wegen der zweiwertigen Semantik von AL ist eine Annahme der Form „φ ist falsch“ gleichwertig mit „¬φ ist wahr“. Wir nutzen das aus, indem wir in Wahrheitsbäumen von jetzt an

statt „φ ist wahr“ nur kurz „φ“ und

statt „φ ist falsch“ einfach „¬φ“ schreiben.

<!-- p. 50 | pdf 58 -->

### 138. Das zweite Beispiel in vereinfachter Schreibweise

```text
1. ¬(P ∧ (Q ∨ R) → (P ∧ Q) ∨ (P ∧ R))               [A]
2. P ∧ (Q ∨ R)                                       [(1)]
3. ¬((P ∧ Q) ∨ (P ∧ R))                              [(1)]
4. P                                                 [(2)]
5. Q ∨ R                                             [(2)]
├─ 6. Q                                              [(5)]
│  8. ¬(P ∧ Q)                                       [(3)]
│  9. ¬(P ∧ R)                                       [(3)]
│  ├─ 10. ¬P                                         [(8)]   ↯
│  └─ 11. ¬Q                                         [(8)]   ↯
└─ 7. R                                              [(5)]
   12. ¬(P ∧ Q)                                      [(3)]
   13. ¬(P ∧ R)                                      [(3)]
   ├─ 14. ¬P                                         [(13)]  ↯
   └─ 15. ¬R                                         [(13)]  ↯
```

### 139. Wie sind die Regeln für alle Junktoren begründet?

Wir suchen exemplarisch die Regeln für Sätze mit Hauptzeichen „→“. Betrachten wir die Wahrheitstafel:

| $\varphi$ | $\psi$ | $\varphi \rightarrow \psi$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | w |
| f | f | w |

Wir sehen, dass es nur eine Möglichkeit dafür gibt, dass „$\varphi \rightarrow \psi$“ falsch ist. Deshalb verzweigt sich für $\neg(\varphi \rightarrow \psi)$ der Baum nicht und die Regel lautet:

```text
φ → ψ ist falsch
│
φ ist wahr
ψ ist falsch
```

(vereinfachte Schreibweise:)

```text
¬(φ → ψ)
│
φ
¬ψ
```

Es gibt drei Fälle, in denen „φ → ψ“ wahr ist, also würde man dafür vielleicht eine Aufspaltung in drei Äste erwarten. (Daran wäre im Prinzip nichts verkehrt.) Die drei Fälle lassen sich aber zusammenfassen: φ ist falsch oder ψ ist wahr. Daher lautet die Regel:

```text
φ → ψ ist wahr
├─ φ ist falsch
└─ ψ ist wahr
```

(vereinfachte Schreibweise:)

```text
φ → ψ
├─ ¬φ
└─ ψ
```

Eine dreifache Differenzierung in die Möglichkeiten der Wahrheitstafel ($\neg\varphi\,\psi$, $\neg\varphi\,\neg\psi$, $\varphi\,\psi$) würde

<!-- p. 51 | pdf 59 -->

nichts Zusätzliches bringen, da die beiden Äste unserer Regel genau dieselben Möglichkeiten für Widersprüche und widerspruchsfreie Entwicklungen repräsentieren.

Auf diese Weise lassen sich Regeln für alle Junktoren finden, die im Folgenden zusammengestellt sind.

### 140. Wahrheitsbäume: Alle Regeln für AL

```text
¬¬φ
│
φ
```

```text
φ ∧ ψ
│
φ
ψ
```

```text
¬(φ ∧ ψ)
├─ ¬φ
└─ ¬ψ
```

```text
φ ∨ ψ
├─ φ
└─ ψ
```

```text
¬(φ ∨ ψ)
│
¬φ
¬ψ
```

```text
φ → ψ
├─ ¬φ
└─ ψ
```

```text
¬(φ → ψ)
│
φ
¬ψ
```

```text
φ ↔ ψ
├─ φ
│  ψ
└─ ¬φ
   ¬ψ
```

```text
¬(φ ↔ ψ)
├─ φ
│  ¬ψ
└─ ¬φ
   ψ
```

```text
φ
¬φ
↯
```

### 141. Ein unabschließbarer Wahrheitsbaum

Was passiert, wenn wir versuchen, einen Baum aus einer Aussage zu entwickeln, die *nicht* widersprüchlich ist? Versuchen wir einmal, die folgende, **falsche** Behauptung durch einen indirekten Beweis im Wahrheitsbaumverfahren nachzuweisen:

$$\vDash (A \rightarrow B) \leftrightarrow (B \rightarrow A)$$

<!-- p. 52 | pdf 60 -->

```text
1. ¬((A → B) ↔ (B → A))                             [A]
├─ 2. ¬(A → B)                                      [(1)]
│  3. B → A                                         [(1)]
│  6. A                                             [(2)]
│  7. ¬B                                            [(2)]
│  ├─ 8. ¬B                                         [(3)]
│  └─ 9. A                                          [(3)]
└─ 4. A → B                                         [(1)]
   5. ¬(B → A)                                      [(1)]
   10. B                                            [(5)]
   11. ¬A                                           [(5)]
   ├─ 12. B                                         [(4)]
   └─ 13. ¬A                                        [(4)]
```

Wie wir sehen, können wir in diesem Fall keinen Ast des Baumes abschließen. Wir können keine Regel mehr auf einen Satz anwenden, auf die wir sie nicht schon angewendet hätten, und haben deshalb keine Aussicht darauf, noch etwas Neues in dem Baum zu erzeugen. Der Baum ist fertig ausentwickelt, ohne dass seine Äste geschlossen sind.

> Wir können sogar zwei konsistente Interpretationen von „¬((A → B) ↔ (B → A))“ aus dem Baum ablesen, nämlich (auf der linken Seite des Baums) B falsch und A wahr, sowie (auf der rechten Seite) B wahr und A falsch. Diese Interpretationen bieten zugleich Gegenmodelle gegen die falsche Behauptung
>
> $\vDash (A \rightarrow B) \leftrightarrow (B \rightarrow A)$

### 142. Grundeigenschaften des Wahrheitsbaumverfahrens für AL

△ **Jede Menge von Sätzen von AL, aus denen sich ein Wahrheitsbaum entwickeln lässt, dessen sämtliche Äste geschlossen sind, ist inkonsistent.**

Diese Eigenschaft bezeichnet man als *Korrektheit des Wahrheitsbaumverfahrens*.

△ **Aus jeder inkonsistenten Menge von Sätzen von AL lässt sich ein Wahrheitsbaum entwickeln, dessen sämtliche Äste geschlossen sind.**

Diese Eigenschaft bezeichnet man als *Vollständigkeit des Wahrheitsbaumverfahrens*.

> Die Beweise von Korrektheit und Vollständigkeit des Wahrheitsbaumverfahrens werden wir am Ende dieses Abschnitts führen.

### 143. Grundeigenschaften des Wahrheitsbaumverfahrens für AL

Außerdem gilt für das Wahrheitsbaumverfahren für AL die folgende Einsicht:

△ **Wenn wir jeden Satz im Baum außer den atomaren und negierten atomaren Sätzen für jeden unterhalb von ihm wachsenden Ast entwickelt haben und sich immer noch nicht alle Äste schließen lassen, dann *gibt* es für die Aussagenmenge an der Wurzel keinen Wahrheitsbaum, dessen sämtliche Äste geschlossen sind.**

Dieser Satz bedeutet, dass wir mit dem Wahrheitsbaumverfahren für AL in jedem Fall nach einer endlichen Zahl von Schritten fertig sind und dann wissen, ob die Annahmenmenge an der Wurzel des Satzes inkonsistent ist oder nicht.

> Was heißt es dabei genau, einen Satz „für jeden unterhalb von ihm wachsenden Ast entwickelt“ zu haben? Es bedeutet, die entsprechende Regel auf ihn angewendet zu haben, so dass die Ergebnisse dieser Anwendung entweder direkt unterhalb vom selben Ast oder Stamm abzweigen, oder, wenn es vorher schon eine Verzweigung gibt, in jedem der abzweigenden Unteräste einmal angebracht werden. Das obige „zweite Beispiel“ für einen Wahrheitsbaum illustriert dies gut: Da bei der Entwicklung von Satz (2) schon eine Aufspaltung des Baums

<!-- p. 53 | pdf 61 -->

> stattgefunden at<!-- sic -->, muss danach der Satz (3) zweimal entwickelt werden: einmal auf der rechten und einmal auf der linken Seite des Baums.

### 144. Logische Folgerungen mit dem Wahrheitsbaumverfahren überprüfen

Dass φ aus einer Menge Σ von Voraussetzungen logisch folgt, bedeutet, dass jede Bewertung, die alle Elemente aus Σ wahr macht, auch φ wahr macht – oder anders gesagt, dass es keine Interpretation gibt, die alle Aussagen aus Σ wahr, φ aber falsch machen würde. Wir können deshalb nachweisen, dass $\Sigma \vDash \varphi$, indem wir beweisen, dass die Voraussetzungen in Σ zusammengenommen mit der Negation von φ inkonsistent sind.

Im folgenden Beispiel wird also die Richtigkeit von

$$\neg(C \wedge D) \vDash \neg C \vee \neg D$$

bewiesen.

```text
1. ¬(C ∧ D)                                          [A]
2. ¬(¬C ∨ ¬D)                                        [A]
3. ¬¬C                                               [(2)]
4. ¬¬D                                               [(2)]
├─ 5. ¬C                                             [(1)]  ↯
└─ 6. ¬D                                             [(1)]  ↯
```

### 145. Logische Folgerungen mit dem Wahrheitsbaumverfahren überprüfen

Als zweites Beispiel hier der Nachweis der Gültigkeit für den Schluss

$$\begin{array}{l} A \vee B \rightarrow C \\ \neg C \\ \hline \neg(A \wedge B) \end{array}$$

<!-- p. 54 | pdf 62 -->

```text
1. A ∨ B → C                                         [A]
2. ¬C                                                [A]
3. ¬¬(A ∧ B)                                         [A]
4. A ∧ B                                             [(3)]
5. A                                                 [(4)]
6. B                                                 [(4)]
├─ 7. ¬(A ∨ B)                                       [(1)]
│  9. ¬A                                             [(7)]
│  10. ¬B                                            [(7)]  ↯
└─ 8. C                                              [(1)]  ↯
```

### 146. Verwendungsweisen des Wahrheitsbaumverfahrens

△ **Um die *logische Wahrheit* eines Satzes φ nachzuweisen,**

$$\mathbf{\vDash \varphi,}$$

**entwickle aus der**

$$\textbf{Annahme } \boldsymbol{\neg\varphi}$$

**einen Wahrheitsbaum, dessen sämtliche Äste abgeschlossen sind.**

△ **Um eine *logische Folgerung* nachzuweisen,**

$$\mathbf{\Sigma \vDash \varphi,}$$

**entwickle aus den**

$$\textbf{Annahmen } \boldsymbol{\Sigma, \neg\varphi}$$

**einen Wahrheitsbaum, dessen sämtliche Äste abgeschlossen sind.**

### 147. Die Ausführung des Wahrheitsbaumverfahrens: Praktische Hinweise

**Hinweis 1: Wie der folgende Baum zeigt, ist es nicht immer notwendig, einen Ast bis in die atomaren Sätze auszuentwickeln, um ihn schließen zu können.**

```text
1. P ∧ Q ↔ ¬(P ∧ Q) ∨ ¬Q                             [A]
├─ 2. P ∧ Q                                          [(1)]
│  3. ¬(P ∧ Q) ∨ ¬Q                                  [(1)]
│  ├─ 6. ¬(P ∧ Q)                                    [(3)]  ↯
│  └─ 7. ¬Q                                          [(3)]
│     8. P                                           [(2)]
│     9. Q                                           [(2)]  ↯
└─ 4. ¬(P ∧ Q)                                       [(1)]
   5. ¬(¬(P ∧ Q) ∨ ¬Q)                               [(1)]
   10. ¬¬(P ∧ Q)                                     [(5)]
   11. ¬¬Q                                           [(5)]  ↯
```

<!-- p. 55 | pdf 63 -->

### 148. Die Ausführung des Wahrheitsbaumverfahrens: Praktische Hinweise

**Hinweis 2: Damit man nicht vergisst, einen Satz des Baums zu entwickeln, kann man die bereits entwickelten Sätze mit Häkchen kennzeichnen.**

Beispiel: Nachweis von

$$(A \wedge B) \vee (A \wedge C) \vDash (A \wedge (B \vee C))$$

```text
1. ✓ (A ∧ B) ∨ (A ∧ C)                               [A]
2. ✓ ¬(A ∧ (B ∨ C))                                  [A]
├─ 3. ✓ A ∧ B                                        [(1)]
│  5. A                                              [(3)]
│  6. B                                              [(3)]
│  ├─ 7. ¬A                                          [(2)]  ↯
│  └─ 8. ✓ ¬(B ∨ C)                                  [(2)]
│     9. ¬B                                          [(8)]
│     10. ¬C                                         [(8)]  ↯
└─ 4. ✓ A ∧ C                                        [(1)]
   11. A                                             [(4)]
   12. C                                             [(4)]
   ├─ 13. ¬A                                         [(2)]  ↯
   └─ 14. ✓ ¬(B ∨ C)                                 [(2)]
      15. ¬B                                         [(14)]
      16. ¬C                                         [(14)]  ↯
```

Sehr wichtig ist, dass Sie hier das Häkchen bei Satz (2) noch nicht anbringen, nachdem Sie die Entwicklungsschritte (7) und (8) ausgeführt haben! Ein Satz muss für alle unterhalb von ihm wachsenden Äste entwickelt werden, deshalb sind wir mit Satz (2) erst fertig, nachdem wir auch die Schritte (13) und (14) unternommen haben. Erst dann darf das Häkchen bei „2.“ gesetzt werden.

Sowohl die Häkchen als auch die Zahlen im Baum sind rein didaktische Hilfskonstruktionen, weswegen Sie im Folgenden weggelassen werden.

<!-- p. 56 | pdf 64 -->

### 149. Die Ausführung des Wahrheitsbaumverfahrens: Praktische Hinweise

**Hinweis 3: Um Arbeit und Tinte zu sparen, sollte man immer zuerst alle nichtverzweigenden Regeln anwenden.**

Vergleichen Sie dazu die beiden folgenden Entwicklungen zum Beweis von

$$P \rightarrow Q,\ Q \rightarrow R,\ R \rightarrow S \vDash P \rightarrow S$$

In der ersten Entwicklung halten wir uns nicht an Hinweis 3:

```text
P → Q                                                [A]
Q → R                                                [A]
R → S                                                [A]
¬(P → S)                                             [A]
├─ ¬P
│  ├─ ¬Q
│  │  ├─ ¬R
│  │  │  P
│  │  │  ¬S  ↯
│  │  └─ S
│  │     P
│  │     ¬S  ↯
│  └─ R
│     ├─ ¬R  ↯
│     └─ S
│        P
│        ¬S  ↯
└─ Q
   ├─ ¬Q  ↯
   └─ R
      ├─ ¬R  ↯
      └─ S
         P
         ¬S  ↯
```

Dagegen wird im folgenden Baum Hinweis 3 berücksichtigt, was die Sache (hier zunächst nur ein wenig) vereinfacht:

```text
P → Q                                                [A]
Q → R                                                [A]
R → S                                                [A]
¬(P → S)                                             [A]
P
¬S
├─ ¬Q
│  ├─ ¬R
│  │  ├─ ¬P  ↯
│  │  └─ Q  ↯
│  └─ S  ↯
└─ R
   ├─ ¬P  ↯
   └─ Q
      ├─ ¬R  ↯
      └─ S  ↯
```

<!-- p. 57 | pdf 65 -->

### 150. Die Ausführung des Wahrheitsbaumverfahrens: Praktische Hinweise

**Hinweis 4: Wenn nur noch verzweigende Regeln zur Anwendung anstehen, dann ist es günstig, zuerst dort die Regel anzuwenden, wo sich einer der beiden entstehenden Äste sofort schließen lässt.**

Zur Illustration hier nochmals eine Entwicklung derselben Annahmenmenge wie oben, nur dass diesmal neben Hinweis 3 auch Hinweis 4 beachtet wird:

```text
P → Q                                                [A]
Q → R                                                [A]
R → S                                                [A]
¬(P → S)                                             [A]
P
¬S
├─ ¬P  ↯
└─ Q
   ├─ ¬Q  ↯
   └─ R
      ├─ ¬R  ↯
      └─ S  ↯
```

### 151. Die Nützlichkeit des Wahrheitsbaumverfahrens

Alles, was sich mit Wahrheitsbäumen zeigen lässt, könnte man prinzipiell auch mit Hilfe von Wahrheitstafeln herausfinden. Letzteres wäre allerdings im Allgemeinen viel aufwändiger. So erspart uns beispielsweise der folgende Baum, durch den die Gültigkeit des Schlusses

$$\begin{array}{l} \neg A \vee \neg E \vee C \\ C \vee \neg(A \wedge D) \\ B \vee F \rightarrow A \\ D \vee E \\ \hline F \rightarrow C \end{array}$$

erwiesen ist, eine Wahrheitstafel mit 64 Zeilen.

Computergeneriertes Wahrheitstafel-Protokoll zu diesem Schluss, mit den sechs atomaren Sätzen A–F und 64 Zeilen (absteigend alle Bewertungskombinationen von wwwwww bis ffffff). Kopfzeile des Protokolls:

`A B C D E F | (((((~A ∨ ~E) ∨ C) & (C ∨ ~(A & D))) & ((B ∨ F) -> A)) & (D ∨ E)) -> (F -> C)`

| A | B | C | D | E | F | (1) | (2) | (3) | (4) | (5) | (6) | (7) | (8) | (9) | (10) | (11) | (12) | (13) | (14) | (15) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| w | w | w | w | w | w | f | f | f | w | w | w | f | w | w | w | w | w | w | w | w |
| w | w | w | w | w | f | f | f | f | w | w | w | f | w | w | w | w | w | w | w | w |
| w | w | w | w | f | w | f | w | w | w | w | w | f | w | w | w | w | w | w | w | w |
| w | w | w | w | f | f | f | w | w | w | w | w | f | w | w | w | w | w | w | w | w |
| w | w | w | f | w | w | f | f | f | w | w | w | w | f | w | w | w | w | w | w | w |
| w | w | w | f | w | f | f | f | f | w | w | w | w | f | w | w | w | w | w | w | w |
| w | w | w | f | f | w | f | w | w | w | w | w | w | f | w | w | w | f | f | w | w |
| w | w | w | f | f | f | f | w | w | w | w | w | w | f | w | w | w | f | f | w | w |
| w | w | f | w | w | w | f | f | f | f | f | f | f | w | f | w | w | f | w | w | f |
| w | w | f | w | w | f | f | f | f | f | f | f | f | w | f | w | w | f | w | w | w |
| w | w | f | w | f | w | f | w | w | w | f | f | f | w | f | w | w | f | w | w | f |
| w | w | f | w | f | f | f | w | w | w | f | f | f | w | f | w | w | f | w | w | w |
| w | w | f | f | w | w | f | f | f | f | f | w | w | f | f | w | w | f | w | w | f |
| w | w | f | f | w | f | f | f | f | f | f | w | w | f | f | w | w | f | w | w | w |
| w | w | f | f | f | w | f | w | w | w | w | w | w | f | w | w | w | f | f | w | f |
| w | w | f | f | f | f | f | w | w | w | w | w | w | f | w | w | w | f | f | w | w |
| w | f | w | w | w | w | f | f | f | w | w | w | f | w | w | w | w | w | w | w | w |
| w | f | w | w | w | f | f | f | f | w | w | w | f | w | w | f | w | w | w | w | w |
| w | f | w | w | f | w | f | w | w | w | w | w | f | w | w | w | w | w | w | w | w |
| w | f | w | w | f | f | f | w | w | w | w | w | f | w | w | f | w | w | w | w | w |
| w | f | w | f | w | w | f | f | f | w | w | w | w | f | w | w | w | w | w | w | w |
| w | f | w | f | w | f | f | f | f | w | w | w | w | f | w | f | w | w | w | w | w |
| w | f | w | f | f | w | f | w | w | w | w | w | w | f | w | w | w | f | f | w | w |
| w | f | w | f | f | f | f | w | w | w | w | w | w | f | w | f | w | f | f | w | w |
| w | f | f | w | w | w | f | f | f | f | f | f | f | w | f | w | w | f | w | w | f |
| w | f | f | w | w | f | f | f | f | f | f | f | f | w | f | f | w | f | w | w | w |
| w | f | f | w | f | w | f | w | w | w | f | f | f | w | f | w | w | f | w | w | f |
| w | f | f | w | f | f | f | w | w | w | f | f | f | w | f | f | w | f | w | w | w |
| w | f | f | f | w | w | f | f | f | f | f | w | w | f | f | w | w | f | w | w | f |
| w | f | f | f | w | f | f | f | f | f | f | w | w | f | f | f | w | f | w | w | w |
| w | f | f | f | f | w | f | w | w | w | w | w | w | f | w | w | w | f | f | w | f |
| w | f | f | f | f | f | f | w | w | w | w | w | w | f | w | f | w | f | f | w | w |
| f | w | w | w | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | w | w | w | f | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | w | w | f | w | w | w | w | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | w | w | f | f | w | w | w | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | w | f | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | w | f | w | f | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | w | f | f | w | w | w | w | w | w | w | w | f | f | w | f | f | f | w | w |
| f | w | w | f | f | f | w | w | w | w | w | w | w | f | f | w | f | f | f | w | w |
| f | w | f | w | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | f |
| f | w | f | w | w | f | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | f | w | f | w | w | w | w | w | w | w | w | f | f | w | f | f | w | w | f |
| f | w | f | w | f | f | w | w | w | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | f | f | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | f |
| f | w | f | f | w | f | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | w | f | f | f | w | w | w | w | w | w | w | w | f | f | w | f | f | f | w | f |
| f | w | f | f | f | f | w | w | w | w | w | w | w | f | f | w | f | f | f | w | w |
| f | f | w | w | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | f | w | w | w | f | w | w | f | w | w | w | w | f | w | f | w | w | w | w | w |
| f | f | w | w | f | w | w | w | w | w | w | w | w | f | f | w | f | f | w | w | w |
| f | f | w | w | f | f | w | w | w | w | w | w | w | f | w | f | w | w | w | w | w |
| f | f | w | f | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | w |
| f | f | w | f | w | f | w | w | f | w | w | w | w | f | w | f | w | w | w | w | w |
| f | f | w | f | f | w | w | w | w | w | w | w | w | f | f | w | f | f | f | w | w |
| f | f | w | f | f | f | w | w | w | w | w | w | w | f | w | f | w | f | f | w | w |
| f | f | f | w | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | f |
| f | f | f | w | w | f | w | w | f | w | w | w | w | f | w | f | w | w | w | w | w |
| f | f | f | w | f | w | w | w | w | w | w | w | w | f | f | w | f | f | w | w | f |
| f | f | f | w | f | f | w | w | w | w | w | w | w | f | w | f | w | w | w | w | w |
| f | f | f | f | w | w | w | w | f | w | w | w | w | f | f | w | f | f | w | w | f |
| f | f | f | f | w | f | w | w | f | w | w | w | w | f | w | f | w | w | w | w | w |
| f | f | f | f | f | w | w | w | w | w | w | w | w | f | f | w | f | f | f | w | f |
| f | f | f | f | f | f | w | w | w | w | w | w | w | f | w | f | w | f | f | w | w |

Spalten (1)–(15) sind die Teilformeln in der Reihenfolge ihres Auftretens in der Kopfzeile:

- (1) $\neg A$
- (2) $\neg A \vee \neg E$
- (3) $\neg E$
- (4) $(\neg A \vee \neg E) \vee C$
- (5) Sp. (4) $\wedge$ Sp. (6)
- (6) $C \vee \neg(A \wedge D)$
- (7) $\neg(A \wedge D)$
- (8) $A \wedge D$
- (9) Sp. (5) $\wedge$ Sp. (11)
- (10) $B \vee F$
- (11) Sp. (10) $\rightarrow A$
- (12) Sp. (9) $\wedge$ Sp. (13)
- (13) $D \vee E$
- (14) Sp. (12) $\rightarrow$ Sp. (15) — die Gesamtformel (Prämissen → Konklusion); im Original mit „*“ markiert, in allen 64 Zeilen „w“ – die Tafel belegt so die logische Wahrheit des Schlusses auf demselben Weg, den der folgende Wahrheitsbaum viel kürzer erreicht
- (15) $F \rightarrow C$

<!-- p. 58 | pdf 66 -->

```text
¬A ∨ ¬E ∨ C                                          [A]
C ∨ ¬(A ∧ D)                                         [A]
B ∨ F → A                                            [A]
D ∨ E                                                [A]
¬(F → C)                                             [A]
F
¬C
├─ C  ↯
└─ ¬(A ∧ D)
   ├─ ¬A
   │  ├─ ¬(B ∨ F)
   │  │  ¬B
   │  │  ¬F  ↯
   │  └─ A  ↯
   └─ ¬D
      ├─ D  ↯
      └─ E
         ├─ C  ↯
         └─ ¬A ∨ ¬E
            ├─ ¬E  ↯
            └─ ¬A
               ├─ ¬(B ∨ F)
               │  ¬B
               │  ¬F  ↯
               └─ A  ↯
```

### 152. Beweis der Korrektheit des Wahrheitsbaumverfahrens für AL

> Korrektheit und Vollständigkeit des Wahrheitsbaumverfahrens gelten sogar für unendliche Mengen von Sätzen von AL. Wir werden die Vollständigkeit aber nur für endliche Mengen beweisen, da der Beweis für unendliche Mengen deutlich komplizierter ist.
>
> Beweise finden Sie auch beispielsweise in Beckermann 2003, Abschnitt 27.1 und Howson 1997, Kap.4. Ich lehne mich an die Darstellung der Beweise in Bostock 1997, Abschnitte 4.5-4.6, an.

Zu zeigen: Korrektheit des Wahrheitsbaumverfahrens:

Jede Menge von Sätzen von AL, aus denen sich ein Wahrheitsbaum entwickeln lässt, dessen sämtliche Äste geschlossen sind, ist inkonsistent.

Beweis:

Bei der Entwicklung jedes Baumes werden zwei Arten von Regeln angewandt:

<!-- p. 59 | pdf 67 -->

verzweigende Regeln

```text
Δ
α
├─ β
└─ γ
```

nichtverzweigende Regeln

```text
Δ
α
│
β
γ
```

(Δ ist die Menge aller übrigen, oberhalb dieser Entwicklung auf demselben Ast wie α stehenden Sätze. Zur Erinnerung: unter einem Ast verstehen wir immer den gesamten Weg von einem Endpunkt des Baumes bis zur Wurzel.)

(V) Für alle verzweigenden Regeln gilt: Wenn Δ, α konsistent ist, dann ist Δ, α, β konsistent, *oder* es ist Δ, α, γ konsistent.

(N) Für alle nichtverzweigenden Regeln gilt: Wenn Δ, α konsistent ist, dann ist auch Δ, α, β, γ konsistent.

Wir zeigen (V) und (N) nur für die beiden Regeln für die Adjunktion:

Wenn Δ, φ ∨ ψ konsistent ist, bedeutet das, dass es eine Bewertung *B* gibt, die Δ, φ ∨ ψ wahr macht. Dann muss unter *B* auch mindestens eines von den beiden Adjunkten φ und ψ wahr sein. Also wird auch mindestens eine der beiden Mengen Δ, φ ∨ ψ, φ und Δ, φ ∨ ψ, ψ unter *B* vollständig wahr und muss somit konsistent sein.

Wenn es eine Bewertung *C* gibt, unter der Δ, ¬(φ ∨ ψ) wahr ist, dann müssen unter dieser sowohl φ als auch ψ falsch sein, also muss dann auch Δ, ¬(φ ∨ ψ), ¬φ, ¬ψ konsistent sein.

(V) und (N) gelten auch für alle übrigen Regeln, da wir die Regeln genau in diesem Sinn aus den Wahrheitstafeln der Junktoren abgelesen haben (s.o. Folie 139).

> Wie (V) bei den Regeln für „↔“, die eine etwas andere Form haben, verstanden werden muss, dürfte klar sein: Wenn Δ, φ ↔ ψ konsistent ist, dann ist Δ, φ ↔ ψ, φ, ψ konsistent, oder es ist Δ, φ ↔ ψ, ¬φ, ¬ψ konsistent. (Entsprechend für ¬(φ ↔ ψ).)

Da ein Wahrheitsbaum durch wiederholte Anwendung von verzweigenden und nichtverzweigenden Regeln entsteht, für die alle (V) bzw. (N) gelten, gilt: Wenn eine Menge von Aussagen an der Wurzel eines Wahrheitsbaumes konsistent ist, dann muss auch mindestens ein Ast des Baums (bzw. die Menge der auf ihm stehenden Sätze) konsistent sein.

Da auf einem geschlossenen Ast ein Satz und seine Negation stehen, ist die Menge der auf ihm stehenden Sätze inkonsistent. Deshalb folgt: Wenn in einem Wahrheitsbaum alle Äste geschlossen sind, muss die Menge von Sätzen an seiner Wurzel inkonsistent sein. Q.E.D.

### 153. Beweis der Vollständigkeit des Wahrheitsbaumverfahrens für AL

Zu zeigen: Vollständigkeit des Wahrheitsbaumverfahrens:

Aus jeder endlichen inkonsistenten Menge von Sätzen von AL lässt sich ein Wahrheitsbaum entwickeln, dessen sämtliche Äste geschlossen sind.

Beweis:

Zunächst zwei Definitionen:

Ein Ast eines Wahrheitsbaums heißt *voll ausentwickelt*, wenn auf keinen der auf ihm stehenden Sätze mehr eine Regel angewandt werden kann, ohne zumindest auf einer der neu entstehenden Abzweigungen nur solche Sätze zu erzeugen, die bereits auf dem Ast stehen.

Ein Wahrheitsbaum heißt *fertig*, wenn jeder seiner Äste voll ausentwickelt oder geschlossen ist.

<!-- p. 60 | pdf 68 -->
Es ist leicht einzusehen, dass jede endliche Menge von Sätzen von AL in einen fertigen Wahrheitsbaum entwickelt werden kann: Jeder Satz hat eine endliche Länge, jede Regelanwendung erzeugt eine endliche Zahl *kürzerer* Sätze, so dass notwendig nach einer endlichen Zahl von Regelanwendungen alle Sätze auf atomare Sätze oder negierte atomare Sätze heruntergebrochen sind, auf die keine Regel mehr angewandt werden kann.

Nehmen wir also an, wir hätten es mit einem fertigen Wahrheitsbaum zu tun, bei dem (mindestens) ein Ast *A* nicht geschlossen ist. Dann können wir die folgende Bewertung *I* definieren:

*I* weise allen atomaren Sätzen, die (als solche, d.h. nicht negiert und nicht nur als Teil eines zusammengesetzten Satzes) auf *A* stehen, den Wert w zu, allen übrigen atomaren Sätzen von AL den Wert f.

Behauptung: *Alle* Sätze auf *A* müssen unter *I* wahr sein. Für die atomaren Sätze auf *A* ist das klar. Für negierte atomare Sätze $\neg\alpha$ auf *A* gilt das deshalb, weil $\alpha$ nicht auf *A* steht (sonst wäre *A* geschlossen) und deshalb durch *I* den Wert f zugewiesen bekommt. Für alle übrigen Sätze gilt: Es ist schon einmal eine Regel auf sie angewendet worden (denn *A* ist voll ausentwickelt). Nun gilt aber folgendes:

(V') Für alle verzweigenden aussagenlogischen Regeln gilt: $\beta \vDash \alpha$ und $\gamma \vDash \alpha$.

(N') Für alle nichtverzweigenden aussagenlogischen Regeln gilt: $\beta \wedge \gamma \vDash \alpha$.

Auch diese beiden Prinzipien folgen aus der Art und Weise, wie wir die Regeln aus den Wahrheitstafeln der Junktoren entwickelt haben, und können leicht für jede Regel überprüft werden.

Deshalb gilt: Wenn alle kürzeren, auf einem Ast stehenden Sätze wahr sind, müssen auch die über ihnen auf demselben Ast stehenden längeren Sätze, aus denen sie durch Entwicklung hervorgegangen sind, wahr sein. Es müssen deshalb *alle* Sätze auf *A* unter *I* wahr sein. Insbesondere die Sätze an der Wurzel des Baumes, die auch zu *A* gehören, müssen alle unter *I* wahr und somit konsistent sein.

Wir haben gezeigt: Jeder fertige Wahrheitsbaum, der (mindestens) einen nicht geschlossenen Ast besitzt, wurzelt in einer konsistenten Menge von Sätzen.

Dazu ist äquivalent: Für einen Wahrheitsbaum, der in einer *in*konsistenten Menge von Sätzen wurzelt, gibt es *keinen* fertigen Wahrheitsbaum, der einen nicht geschlossenen Ast besitzt.

Da es für jede endliche Menge von Sätzen von AL einen fertigen Wahrheitsbaum gibt, folgt:

Für jede endliche inkonsistente Menge von Sätzen von AL gibt es einen Wahrheitsbaum, dessen sämtliche Äste geschlossen sind. Q.E.D.

## 6. Formalisierungen mit Hilfe der Aussagenlogik

### 154. Formalisierung durch intensionale Interpretation

Da die Sprache AL so konstruiert ist, dass die Semantik der Junktoren die Semantik wahrheitsfunktionaler Aussagenverknüpfungen in natürlichen Sprachen widerspiegelt, kann man mit ihrer Hilfe Aussagen und Argumente natürlicher Sprachen formalisieren.

Man gibt eine Formalisierung einer Aussage an, indem man eine intensionale Interpretation für einen Teil der atomaren Sätze der Sprache AL angibt und einen aus diesen Sätzen aufgebauten Satz von AL, der die Übersetzung der natürlichsprachlichen Aussage darstellen soll.

<!-- p. 61 | pdf 69 -->
### 155. Formalisierung durch intensionale Interpretation

Beispiel:

Es sind Pilze auf der Pizza oder Kerstin ist nicht froh.

Formalisierung:

$$P \vee \neg K$$

$P$: Es sind Pilze auf der Pizza.
$K$: Kerstin ist froh.

### 156. Gelungene Formalisierung

Eine aussagenlogische Formalisierung ist dann und nur dann gelungen, wenn die Teilaussagen, die als intensionale Interpretation der atomaren Sätze dienen, in der natürlichsprachlichen Aussage tatsächlich durch wahrheitsfunktionale Aussagenverknüpfungen verknüpft sind—und zwar durch diejenigen wahrheitsfunktionalen Verknüpfungen, die genau den Junktoren entsprechen, die in der Formalisierung verwendet werden.

Wenn $\varphi, \psi_{1}, \psi_{2}, \ldots$ jeweils gelungene aussagenlogische Formalisierungen der natürlichsprachlichen Sätze $\rho, \sigma_{1}, \sigma_{2}, \ldots$ sind, dann gilt:

- Wenn $\varphi$ logisch wahr ist, dann ist auch $\rho$ (aussagen)logisch wahr.
- Wenn $\varphi$ logisch aus den Prämissen $\psi_{1}, \psi_{2}, \ldots$ folgt, dann folgt auch $\rho$ (aussagen)logisch aus $\sigma_{1}, \sigma_{2}, \ldots$ .

> Letzteres bedeutet: Sie können die deduktive Gültigkeit eines Arguments feststellen, indem Sie das Argument formalisieren und die deduktive Gültigkeit des formalisierten Arguments in AL prüfen. Vorsicht: Wenn das Ergebnis sich nicht als deduktiv gültig herausstellt, bedeutet das nicht etwa, dass das Ausgangsargument ungültig wäre! Denn es könnte sein, dass sich die deduktive Gültigkeit des Arguments aus Aspekten der logischen Form ergibt, die durch die Sprache AL nicht erfasst werden können.

### 157. Strukturreich formalisieren!

Eine nützliche Formalisierung sollte keine Möglichkeit auslassen, wahrheitsfunktionale Verknüpfungen der natürlichsprachlichen Aussage als Junktoren wiederzugeben.

Zwar könnte man

Es sind Pilze auf der Pizza oder Kerstin ist nicht froh.

Auch wie folgt formalisieren:

$$A \vee B$$

$A$: Es sind Pilze auf der Pizza.
$B$: Kerstin ist nicht froh.

Oder gar so:

$$X$$

$X$: Es sind Pilze auf der Pizza oder Kerstin ist nicht froh.

<!-- p. 62 | pdf 70 -->
… aber je genauer die Struktur der natürlichsprachlichen Aussage in der Formalisierung wiedergegeben wird, desto mehr logische Beziehungen zu anderen Aussagen treten dabei zu Tage.

Unter den angegebenen Formalisierungen von

Es sind Pilze auf der Pizza oder Kerstin ist nicht froh

lässt nur die folgende

$$P \vee \neg K$$

$P$: Es sind Pilze auf der Pizza.
$K$: Kerstin ist froh.

erkennen, dass der formalisierte Satz logisch äquivalent ist mit

Wenn Kerstin froh ist, dann sind Pilze auf der Pizza.

$$K \rightarrow P$$

$P$: Es sind Pilze auf der Pizza.
$K$: Kerstin ist froh.

### 158. Konjunktionen

Erinnerung: Nicht jedes Vorkommnis von „und“ ist eine wahrheitsfunktionale Aussagenverknüpfung! (Vgl. Folie 51.)

Dafür gibt es andererseits andere Aussagenverknüpfungen, die bei der Formalisierung angemessen als Konjunktion wiedergegeben werden können.

(1) Otto fährt nach Norderney, obwohl er das Meer hasst.

Satz (1) kann sinnvoll formalisiert werden durch:

(1') $N \wedge M$
$N$: Otto fährt nach Norderney.
$M$: Otto hasst das Meer.

Das ist so, obwohl (1') zugleich auch eine sinnvolle Formalisierung von (2) ist:

(2) Otto fährt nach Norderney und Otto hasst das Meer.

Natürlich bedeuten (1) und (2) nicht genau dasselbe. Aber der entscheidende Punkt ist: Die Bedingungen, unter denen (2) *wahr* ist, sind dieselben, wie diejenigen, unter denen (1) wahr ist.

Ein Sprecher, der (1) äußert, will zusätzlich zu einer Mitteilung darüber, was der Fall ist, noch eine Einschätzung der Sachlage übermitteln (nämlich dass er eine Unstimmigkeit in Ottos Handeln empfindet), aber dies betrifft nicht die Wahrheitsbedingungen des Satzes.

Diese Einschätzung geht bei der Formalisierung verloren, aber für eine gelungene Formalisierung kommt es eben nur auf die Beziehungen zwischen den Wahrheitswerten der (Teil-)Aussagen an.

<!-- p. 63 | pdf 71 -->
### 159. Konjunktionen

Ähnlich wie bei „obwohl“ liegt der Fall bei „aber“ und „sondern“.

Gudrun geht nicht ins Kino, sondern ins Theater.

Formalisierung:

$$\neg K \wedge T$$

$K$: Gudrun geht ins Kino.
$T$: Gudrun geht ins Theater.

Peter hat viel Geld, aber er ist nicht glücklich.

Formalisierung:

$$G \wedge \neg H$$

$G$: Peter hat viel Geld.
$H$: Peter ist glücklich.

### 160. Adjunktionen

Erinnerung: Nicht jedes Vorkommnis von „oder“ kann adäquat mit „∨“ formalisiert werden, denn die Bedeutung von „oder“ kann zwischen dem einschließenden und dem ausschließenden Oder schwanken. (Vgl. Folie 54.)

Wir werden aber im Allgemeinen davon ausgehen, dass mit „oder“ das einschließende und nur mit „entweder … oder“ das ausschließende Oder gemeint ist.

> Wie sich das ausschließende Oder formalisieren lässt, haben Sie im Rahmen der Übungsaufgaben gelernt.

### 161. Negationen

Erinnerung: Der Negationsjunktor „¬“ ist überall dort angebracht, wo man im Deutschen die Verneinung mit „es ist nicht der Fall, dass“ ausdrücken könnte. (Vgl. Folie 57.)

Außer „nicht“ gibt es verschiedene andere natürlichsprachliche Mittel, die auch sinnvoll mit der Negation wiedergegeben werden können.

Wasser ist kein Metall.

Formalisierung:

$$\neg W$$

$W$: Wasser ist ein Metall.

Das Wohnzimmer ist unbeheizt.

Formalisierung:

$$\neg B$$

$B$: Das Wohnzimmer ist beheizt.

<!-- p. 64 | pdf 72 -->
### 162. Negation und Gegensatz

Aber Vorsicht: Versuchen Sie nicht, den folgenden Satz als Negation wiederzugeben:

Markus ist unbeliebt.

Dieser Satz bedeutet nämlich nicht dasselbe wie „Es ist nicht der Fall, dass Markus beliebt ist.“ Denn „Markus ist unbeliebt“ und „Markus ist beliebt“ bilden keinen kontradiktorischen Gegensatz.

△ **Zwei Sätze bilden genau dann einen _kontradiktorischen Gegensatz_, wenn der eine genau dann wahr ist, wenn der andere falsch ist.**

Mit Hilfe von aussagenlogischen Junktoren kann man den Umstand, dass $\varphi$ und $\psi$ einen kontradiktorischen Gegensatz bilden, wie folgt ausdrücken:

$$\varphi \leftrightarrow \neg\psi$$

Beispielsweise bilden „Das Wohnzimmer ist beheizt“ und „Das Wohnzimmer ist unbeheizt“ einen kontradiktorischen Gegensatz.

△ **Nur bei _kontradiktorischen_ Gegensätzen ist es möglich, den einen Satz als Negation des anderen zu formalisieren.**

### 163. Negation und Gegensatz

Dagegen bilden „Markus ist beliebt“ und „Markus ist unbeliebt“ keinen kontradiktorischen, sondern einen konträren Gegensatz.

△ **Zwei Sätze bilden einen _konträren Gegensatz_, wenn sie zwar beide zugleich falsch sein, aber nicht beide zugleich wahr sein können.**

Mit Hilfe von aussagenlogischen Junktoren kann man den Umstand, dass $\varphi$ und $\psi$ einen konträren Gegensatz bilden, wie folgt ausdrücken:

$$\neg(\varphi \wedge \psi)$$

> Außerdem sagt man manchmal, dass zwei Sätze, die zwar beide zugleich wahr sein, aber nicht beide zugleich falsch sein können, einen subkonträren Gegensatz bildeten. In AL bedeutet das schlicht: „$A \vee B$“. Die Rede von subkonträren Gegensätzen ist allerdings ziemlich irreführend, weil solche Sätze dem normalen Sprachgebrauch zufolge gar keinen Gegensatz bilden. Ein Beispiel wäre: „Einige Bielefelder sind katholisch“ und „Einige Bielefelder sind nicht katholisch“.

### 164. Negation und Gegensatz

Beispiele für kontradiktorische Gegensätze:

„Es gibt einen Fan, der noch keine Karte hat.“ / „Jeder Fan hat schon eine Karte.“

„Die Anzahl der Bäume in Finnland ist ungerade.“ / „Die Anzahl der Bäume in Finnland ist gerade.“

<!-- p. 65 | pdf 73 -->
Beispiele für konträre Gegensätze:

„Alle Menschen sind Lügner.“ / „Kein Mensch ist ein Lügner.“

„Peter ist reich.“ / „Peter ist arm.“

### 165. Subjunktionen

Erinnerung (vgl. Folien 60-61): Es gibt Fälle, in denen die Verwendung von Konditionalen in natürlichen Sprachen nicht gut mit der Verwendung der Subjunktion in AL übereinstimmt, z.B.:

Wenn Woody Allen Brillenträger ist, dann werden in Jena viele Brillengläser hergestellt.

Das Problem tritt hauptsächlich dann auf, wenn die im Antecedens ausgesprochene Tatsache sachlich überhaupt keine Relevanz für die im Konsequens ausgesprochene hat.

△ **Dagegen können im Allgemeinen Konditionale, bei denen tatsächlich eine sachliche Relevanz zwischen Antecedens und Konsequens besteht, näherungsweise gut als Subjunktion formalisiert werden.**

> Faustregel also: Bei gegebener Relevanz kann man als Subjunktion formalisieren; Skepsis ist angezeigt, wo die sachliche Relevanz zwischen Antecedens und Konsequens zweifelhaft ist.

### 166. Subjunktionen

Beispiel für eine gelungene Formalisierung:

Wenn der Motor läuft, ist Benzin im Tank.

Formalisierung:

$$M \rightarrow B$$

$M$: Der Motor läuft.
$B$: Es ist Benzin im Tank.

Dank der Formalisierung können wir z.B. wissen, dass diese Aussage logisch äquivalent zu ihrer *Kontraposition* „$\neg B \rightarrow \neg M$“ ist:

Wenn kein Benzin im Tank ist, läuft der Motor nicht.

Außerdem kennen wir die Äquivalenz zu „$\neg M \vee B$“ und somit zu:

Der Motor läuft nicht oder es ist Benzin im Tank.

### 167. Subjunktionen

Achtung: Bei der Wendung „nur wenn“ ist die Reihenfolge von Antecedens und Konsequens im Deutschen umgekehrt! (D.h. der Nebensatz, in dem das „nur wenn“ auftritt, entspricht dem *Konsequens*.)

<!-- p. 66 | pdf 74 -->
Nur wenn Berta eingeladen worden ist, kommt Anton zur Party.

Formalisierung:

$$A \rightarrow B$$

$A$: Anton kommt zur Party.
$B$: Berta ist eingeladen worden.

### 168. Notwendige und hinreichende Bedingungen

Konditionale können im Deutschen auch mit Hilfe der Begriffe der notwendigen und hinreichenden Bedingung ausgedrückt werden.

Dabei entspricht eine *notwendige* Bedingung immer dem *Konsequens* einer Subjunktion:

Dass Berta eingeladen worden ist, ist notwendige Bedingung dafür, dass Anton zur Party kommt.

Eine *hinreichende* Bedingung dagegen entspricht dem *Antecedens*:

Dass Anton zur Party kommt, ist hinreichende Bedingung dafür, dass Berta eingeladen worden ist.

> Dass dieser Beispielsatz etwas merkwürdig aussieht, liegt daran, dass wir dazu tendieren, einen kausalen Gehalt in Bedingungssätze hineinzulesen.

Formalisierung in beiden Fällen:

$$A \rightarrow B$$

$A$: Anton kommt zur Party.
$B$: Berta ist eingeladen worden.

### 169. Bisubjunktionen

Für die Bisubjunktionen gilt das gleiche wie für die Subjunktionen: Im Allgemeinen sind sie brauchbar als Formalisierung von „genau dann, wenn“ und „dann und nur dann, wenn“, sofern die verbundenen Teilsätze sachlich füreinander relevant sind. Wo diese Relevanz in Frage steht, ist es auch fragwürdig „↔“ als genaue Entsprechung des natürlichsprachlichen „genau dann, wenn“ anzuerkennen.

## 7. Typische aussagenlogische Argumentformen und formale Fehlschlüsse

### 170. Deduktiv gültige aussagenlogische Argumente

Zur Erinnerung werden im Folgenden noch einmal typische gültige Argumentformen vorgestellt.

> Es gibt unendlich viele deduktiv gültige Argumentformen, so dass wir natürlich nur eine Auswahl typischer Formen betrachten können.

<!-- p. 67 | pdf 75 -->
### 171. Modus Ponens

$$\begin{array}{l@{\qquad}l}
\text{Wenn Lisa klug ist, sollte sie Philosophie studieren.} & A \rightarrow B \\
\text{Lisa ist klug.} & A \\
\hline
\text{Lisa sollte Philosophie studieren.} & B
\end{array}$$

### 172. Modus Tollens

$$\begin{array}{l@{\qquad}l}
\text{Wenn man mit einem Angriffskrieg einen Konflikt lösen kann, dann gibt es dafür sicher historische Beispiele.} & A \rightarrow B \\
\text{Es gibt keine historischen Beispiele dafür, dass mit einem Angriffskrieg ein Konflikt zu lösen ist.} & \neg B \\
\hline
\text{Man kann mit einem Angriffskrieg keinen Konflikt lösen.} & \neg A
\end{array}$$

### 173. Disjunktiver Syllogismus

$$\begin{array}{l@{\qquad}l}
\text{Otto fährt diesen Sommer nach Mallorca oder nach Teneriffa.} & A \vee B \\
\text{Otto fährt diesen Sommer nicht nach Teneriffa.} & \neg B \\
\hline
\text{Also fährt er nach Mallorca.} & A
\end{array}$$

### 174. Konjunktiver Syllogismus

$$\begin{array}{l@{\qquad}l}
\text{Es kann nicht sein, dass Walter sich einen Mercedes und einen Porsche gekauft hat.} & \neg(A \wedge B) \\
\text{Walter hat sich einen Porsche gekauft.} & A \\
\hline
\text{Walter hat sich keinen Mercedes gekauft.} & \neg B
\end{array}$$

### 175. Hypothetischer Syllogismus

$$\begin{array}{l@{\qquad}l}
\text{Wenn Perikles weise ist, ist er gerecht.} & A \rightarrow B \\
\text{Wenn Perikles gerecht ist, wird er keinen Krieg beginnen.} & B \rightarrow C \\
\hline
\text{Wenn Perikles weise ist, wird er keinen Krieg beginnen.} & A \rightarrow C
\end{array}$$

### 176. Klassisches Dilemma

$$\begin{array}{l@{\qquad}l}
\text{Wenn Peter aus seiner mit Salzwasser gefüllten Feldflasche trinkt, wird er verdursten.} & A \rightarrow B \\
\text{Wenn Peter nicht aus seiner Feldflasche trinkt, wird er verdursten.} & \neg A \rightarrow B \\
\hline
\text{Peter wird verdursten.} & B
\end{array}$$

<!-- p. 68 | pdf 76 -->
### 177. Reductio ad absurdum

Oft wird auch das Prinzip des indirekten Beweises, auch bekannt unter dem Namen „reductio ad absurdum“, zu den aussagenlogischen Argumentformen gezählt. Manchmal wird es mit dem *modus tollens* gleichgesetzt.

Die *reductio ad absurdum* (kurz: *reductio*) ist jedoch keine bestimmte Argumentform, sondern eine Strategie, aus einem gültigen Argument ein anderes gültiges Argument zu machen. Eine solche Strategie nennt man in der Logik ein *Thema* (Plural „Themata“).

Bei der *reductio ad absurdum* verwandelt man ein gültiges Argument, das von Nicht-A auf etwas bekanntermaßen Falsches schließt, in ein Argument für A.

Genauer besteht eine *reductio* aus den folgenden Elementen:

- Annahme: $\neg A$
- Deduktiv gültiges Argument, das von $\neg A$
    - auf A (Widerspruch zur Annahme)
    - oder auf B und auf $\neg B$ (Kontradiktion)
    - oder auf C schließt, wobei C bekanntermaßen oder offensichtlicherweise falsch ist.
- Konklusion: A

### 178. Reductio ad absurdum: Beispiel

Euklids Beweis, dass es keine größte Primzahl gibt.

Annahme: Es gibt eine größte Primzahl, sie heiße *p*.

Argument:

Dann gibt es nur endlich viele Primzahlen. Wir können sie also alle miteinander multiplizieren und zu diesem Produkt 1 addieren. Das Ergebnis heiße *x*.

Wenn man jetzt *x* durch eine der anderen Primzahlen teilt, bleibt immer der Rest 1. Also ist *x* selbst eine Primzahl.

Außerdem ist *x* größer als *p*.

Dann gäbe es eine Primzahl, die größer ist als die größte Primzahl. Das ist aber unmöglich.

Konklusion: Es gibt keine größte Primzahl.

### 179. Formale Fehlschlüsse

△ **Argumentationen, die den Anschein eines deduktiven Arguments erwecken, aber nicht gültig sind, weil sie keine deduktiv gültige Argumentform haben, nennt man _formale Fehlschlüsse_.**

> Ähnlich wie für die gültigen Argumentformen gilt: Es gibt unendlich viele Möglichkeiten, einen formalen Fehlschluss zu begehen. Man kann deshalb nur einige wenige typische Beispiele aufzählen und benennen.

### 180. Bejahung des Konsequens (*fallacia consequentis*)

Dies ist ein Beispiel für einen sehr alltäglichen Fehlschluss:

<!-- p. 69 | pdf 77 -->
$$\begin{array}{l@{\qquad}l}
\text{Wenn Anna für die Klausur nicht geübt hat, wird sie schlecht abgeschnitten haben.} & A \rightarrow B \\
\text{Anna hat in der Klausur schlecht abgeschnitten.} & B \\
\hline
\text{Also hat Anna für die Klausur nicht geübt.} & A
\end{array}$$

### 181. Verneinung des Antecedens

$$\begin{array}{l@{\qquad}l}
\text{Wenn Tina weiter raucht, wird sie bald krank werden.} & A \rightarrow B \\
\text{Tina raucht aber nicht weiter.} & \neg A \\
\hline
\text{Also wird sie auch nicht bald krank werden.} & \neg B
\end{array}$$

### 182. Disjunktiver Fehlschluss

$$\begin{array}{l@{\qquad}l}
\text{Paul muss einmal längere Zeit im Gefängnis gewesen sein, oder er hat schon in seiner Jugend kriminelle Kenntnisse erworben.} & A \vee B \\
\text{Paul war tatsächlich einmal im Gefängnis.} & A \\
\hline
\text{Also hat er seiner Jugend keine kriminellen Kenntnisse erworben.} & \neg B
\end{array}$$

### 183. Beispiele

Versuchen Sie, die folgenden Beispiele entweder auf eine gültige aussagenlogische Argumentform zurückzuführen, oder sie als Fehlschluss zu entlarven.

<!-- p. 70 | pdf 78 -->
### 184. Beispiel 1

Wenn du siehst, lebst du; nun aber siehst du; also lebst du.

Pseudo-Apuleius, *De interpretatione* (p. 184, 16-23) [3./4. Jh. n. Chr.]

### 185. Beispiel 2

Reichtum ist entweder böse oder ein Gut; doch Reichtum ist nicht böse; daher ist Reichtum ein Gut.

Sextus Empiricus, *Wider die Logiker* [2. Jh. n. Chr.]

### 186. Beispiel 3

Fridolin hat einen Sprachfehler oder er ist betrunken. Fridolin hat tatsächlich einen Sprachfehler. Also ist er nicht betrunken.

### 187. Beispiel 4

Entweder es ist Tag, oder aber es ist Nacht; nun ist es Tag; also nicht: es ist Nacht.

Sextus Empiricus, *Grundzüge der pyrrhonischen Skepsis* (II 157-159)

> Achtung: *Dies* ist, dem ersten Augenschein zum Trotz, kein disjunktiver Fehlschluss. Das „Oder“ der ersten Prämisse ist nämlich als ein ausschließendes zu lesen. Formalisierung deshalb:
>
> $T$: Es ist Tag.
> $N$: Es ist Nacht.
>
> $$\begin{array}{l} T \leftrightarrow \neg N \\ T \\ \hline \neg N \end{array}$$

### 188. Beispiel 5

Es ist doch grundsätzlich so: Wenn einer Drogenhändler oder Landstreicher ist, dann hält er sich regelmäßig beim Hauptbahnhof auf. Dieser Typ von gegenüber hält sich dort auch regelmäßig auf. Also muss er ja wohl ein Drogenhändler oder ein Landstreicher sein.

### 189. Beispiel 6

Wenn die Rhetorik nicht nützlich ist, dann ist sie nicht die Wissenschaft vom guten Reden. […] Nun aber ist sie die Wissenschaft vom guten Reden, also ist sie nützlich.

Martianus Capella, *De nuptiis Philologiae et Mercurii* (IV, 414-21)

> $N$: Die Rhetorik ist nützlich.
> $W$: Die Rhetorik ist die Wissenschaft vom guten Reden.

<!-- p. 71 | pdf 79 -->
> $$\begin{array}{l} \neg N \rightarrow \neg W \\ W \\ \hline N \end{array}$$

### 190. Beispiel 7

Wenn sich etwas bewegt, dann bewegt es sich entweder an dem Ort, wo es ist, oder an dem, wo es nicht ist. Weder aber, wo es ist (denn dort ruht es ja, wenn es dort ist), noch, wo es nicht ist (denn wo etwas nicht ist, dort kann es auch nichts tun oder leiden). Also bewegt sich nichts.

(Sextus Empiricus, *Grundriß der pyrrhonischen Skepsis*)

> Das Grundmuster dieser Argumentation lässt sich gut mit aussagenlogischen Mitteln erfassen (wenn es auch mit Hilfe der Prädikatenlogik noch genauer ginge).
>
> $B$: Etwas bewegt sich.
> $I$: Etwas bewegt sich dort, wo es ist.
> $N$: Etwas bewegt sich dort, wo es nicht ist.
>
> $$\begin{array}{l} B \rightarrow I \vee N \\ \neg I \\ \neg N \\ \hline \neg B \end{array}$$

### 191. Beispiel 8

Alkibiades weiß um das Gerechte entweder deshalb, weil er es gelernt hat, oder deshalb, weil er es selbst gefunden hat. Nun aber weiß er es nicht deshalb, weil er es gelernt hat. Also weiß er es deshalb, weil er es selbst gefunden hat.

Galen [129-199 n. Chr.], *Institutio logica* (XV, 1-11)

### 192. Beispiel 9

Wenn du weißt, dass du tot bist, dann bist du tot; wenn du weißt, dass du tot bist, dann bist du nicht tot; es folgt, dass du nicht weißt, dass du tot bist.

Origines, *Contra Celsum* (VII 15, p. 166) [3. Jh. n. Chr.]

> $W$: Du weißt, dass du tot bist.
> $T$: Du bist tot.
>
> $$\begin{array}{l} W \rightarrow T \\ W \rightarrow \neg T \\ \hline \neg W \end{array}$$
>
> Von der Gültigkeit dieser Schlussform können Sie sich z.B. durch einen Wahrheitsbaum überzeugen.
>
> ```text
> W → T
> W → ¬T
> ¬¬W
> ├─ ¬W                                    ↯
> └─ T
>    ├─ ¬W                                 ↯
>    └─ ¬T                                 ↯
> ```

<!-- p. 72 | pdf 80 -->

### 193. Allgemeine Regel für die Kritik von Argumenten

Die logische Form des verwendeten Schlusses ist eine Möglichkeit, ein gegebenes Argument zu kritisieren. Eine weitere Möglichkeit ist, seine Prämissen oder Voraussetzungen anzuzweifeln (dazu mehr im folgenden Kapitel). Ganz allgemein gilt die folgende

△ **Grundregel für die Kritik an Argumenten: Wenn Sie ein Argument kritisieren wollen, richten Sie Ihre Kritik gegen (1) die Glaubhaftigkeit von einer oder mehreren Prämissen und/oder (2) die Gültigkeit des Schlusses. Kritisieren Sie ein Argument *nie*, indem Sie nur die Glaubhaftigkeit der Schlussfolgerung in Frage ziehen.**

## 8. Voraussetzungen von Argumenten: Implizite Prämissen, Zirkel und präsumptive Fehlschlüsse

### 194. Implizite Voraussetzungen

Das folgende Argument ist strenggenommen *nicht* formal gültig:

$$\begin{array}{l}
\text{Das nächste EM-Finale findet in Österreich oder in der Schweiz statt.} \\
\hline
\text{Also können wir zum nächsten EM-Finale hinfahren.}
\end{array}$$

Dennoch scheint das Argument in Ordnung, wenn man anerkennt, dass in dem Kontext, in dem es vorgebracht wird, allseits bekannt ist, dass die mit „wir“ gemeinten Personen sowohl in die Schweiz als auch nach Österreich zu einem Fußballspiel fahren können.

Wenn man diese Proposition dem Argument als Prämissen hinzufügen würde, würde das Argument auch gültig. Solche Propositionen kann man als *stillschweigende* oder *implizite Prämissen* oder *Voraussetzungen* des Arguments bezeichnen.

> Das Argument könnte man also wie folgt formalisieren:
>
> A: Das nächste EM-Finale findet in Österreich statt.
>
> B: Das nächste EM-Finale findet in der Schweiz statt.
>
> C: Wir können zum nächsten EM-Finale hinfahren.
>
> $$\begin{array}{ll}
> A \vee B & \text{(explizite Prämisse)} \\
> (A \rightarrow C) \wedge (B \rightarrow C) & \text{(implizite Prämisse).} \\
> \hline
> C &
> \end{array}$$

Um ein Argument zu analysieren, ist es oft hilfreich, implizite Voraussetzungen zu identifizieren und anzugeben.

<!-- p. 73 | pdf 81 -->

### 195. Beispiele

Weitere Beispiele für Argumente mit impliziten Prämissen:

$$\begin{array}{l}
\text{Brechts „Augsburger Kreidekreis“ ist kein Gedicht.} \\
\text{Brechts „Augsburger Kreidekreis“ ist kein Schauspiel.} \\
\hline
\text{Also ist Brechts „Augsburger Kreidekreis“ ein Prosawerk.}
\end{array}$$

> Eine formalisierte Rekonstruktion mit impliziter Prämisse könnte so aussehen:
>
> L: Brechts „Augsburger Kreidekreis“ ist ein Gedicht.
>
> D: Brechts „Augsburger Kreidekreis“ ist ein Schauspiel.
>
> E: Brechts „Augsburger Kreidekreis“ ist ein Prosawerk.
>
> $$\begin{array}{ll}
> \neg L & \\
> \neg D & \\
> L \vee D \vee E & \text{(implizite Prämisse)} \\
> \hline
> E &
> \end{array}$$

$$\begin{array}{l}
\text{Das ZDF überträgt das Spiel.} \\
\hline
\text{Also übertragen die ARD das Spiel nicht.}
\end{array}$$

> Rekonstruktion:
>
> Z: Das ZDF überträgt das Spiel.
>
> A: Die ARD übertragen das Spiel.
>
> $$\begin{array}{ll}
> Z & \\
> \neg(Z \wedge A) & \text{(implizite Prämisse)} \\
> \hline
> \neg A &
> \end{array}$$

### 196. Explizit und implizit

Wenn ein Sprecher einen Satz äußert, spricht man oft davon, dass seine Äußerung sowohl *expliziten* als auch *impliziten* Gehalt hat.
Diese Begriffe werden nicht sehr genau verwendet, aber eine naheliegende Definition ist die folgende:

- Der explizite Gehalt einer Äußerung ist die vom geäußerten Satz unmittelbar ausgedrückte Proposition.
- Zum impliziten Gehalt einer Äußerung gehören alle Propositionen, die aus dem expliziten Gehalt folgen.

### 197. Explizit und implizit

Beispiel:
„John F. Kennedy wurde ermordet.“

Expliziter Gehalt dieses Satzes ist, dass John F. Kennedy ermordet wurde.

<!-- p. 74 | pdf 82 -->

Zum impliziten Gehalt gehört z.B., dass John F. Kennedy nicht mehr lebt.

> Die Definition von „implizit“ lässt aus philosophischer Sicht einiges zu wünschen übrig. Was bedeutet es, dass der implizite Gehalt aus dem expliziten „folgt“? Beachten Sie, dass damit nicht gemeint sein kann, dass er „logisch folgt“. Dies wäre eine zu enge Definition, in der etwa das obenstehende Beispiel schon nicht mehr erfasst wäre: Dass JFK nicht mehr lebt, folgt nicht *logisch* daraus, dass er erschossen wurde. „Folgen“ muss in diesem Zusammenhang so etwas bedeuten wie: „bei Heranziehung allgemein bekannter oder unmittelbar evidenter Prämissen logisch folgen“. (Im Beispiel wäre das etwa die Prämisse, dass kein Mensch, der einmal ermordet wurde, zu einem späteren Zeitpunkt noch lebt.)

### 198. Implikaturen

Der englische Philosoph Paul Grice hat noch einen weiteren Sinn identifiziert, in dem ein stillschweigender Gehalt in einer Äußerung enthalten ist:

Anton: „Kommst Du heute zur Party?“

Bert: „Ich habe noch sehr viel Arbeit zu erledigen.“

Aus Berts Antwort folgt nicht, dass er nicht zur Party kommen wird, trotzdem hat er dies irgendwie mitgeteilt.

- Eine Proposition ist eine *konversationale Implikatur* einer Äußerung, wenn man aus der Äußerung, dem Äußerungskontext und der Annahme, dass der Sprecher sich an übliche Regeln des Sprechverhaltens hält, schließen darf, dass der Sprecher sie für wahr hält.

Zu diesen „üblichen Regeln des Sprechverhaltens“ gehört im Allgemeinen:

- So informativ wie im Kontext erforderlich zu sein,
- nicht zu lügen,
- nur für den Kontext relevante Dinge zu sagen,
- sich klar auszudrücken.

> Bei Implikaturen hängt also alles vom Sprecher und der Äußerungssituation ab. Im Gegensatz zu den oben gegebenen Definitionen von explizitem und implizitem Gehalt geht es bei der Implikatur nicht darum, was ein Satz impliziert, sondern gewissermaßen darum, *was ein Sprecher impliziert*.

Dass Bert nicht zur Party kommen wird, ist insofern eine Implikatur seiner Äußerung, als wir dies aus der Äußerungssituation und der Annahme schließen dürfen, Bert habe eine im Hinblick auf Antons Frage *relevante* Antwort geben wollen.

### 199. Implikaturen

Weitere Beispiele für Äußerungen mit Implikaturen:

„Manche Politiker sind ehrlich.“

> Dass nicht alle Politiker ehrlich sind, folgt zwar nicht aus der hier geäußerten Prämisse, ist aber in den meisten Kontexten impliziert (im Sinne einer Implikatur). Wäre der Sprecher der Meinung, *alle* Politiker seien ehrlich, müsste er dies stattdessen sagen, da er sich sonst nicht an die allgemein übliche Regel hält, sich so informativ wie im Kontext erforderlich zu äußern.

<!-- p. 75 | pdf 83 -->

„Am Dienstag ist Herr Meier nüchtern bei der Arbeit erschienen und scheint auch den ganzen Tag nichts mehr getrunken zu haben.“

> In den meisten Kontexten hat diese Äußerung die Implikatur, dass Herr Meier bei der Arbeit nicht immer nüchtern ist. Beachten Sie, dass sich Kontexte denken lassen, in denen diese Implikatur nicht vorliegt: Z.B. eine Aussage in einem Gerichtsverfahren.

Anton: „Wo kann ich denn Benzin bekommen?“

Bert: „Hier rechts um die Ecke ist eine Tankstelle.“

### 200. Implizite Voraussetzungen als Implikaturen

Stillschweigende Prämissen von Argumenten gehören *nicht* im Allgemeinen in dem Sinne zum „impliziten Gehalt“ des vorgetragenen Arguments, dass sie aus den Prämissen (oder der Schlussfolgerung) folgen würden.

> Es *kann* vorkommen, dass eine sinnvollerweise zu unterstellende implizite Prämisse logisch aus expliziten Prämissen und Schlussfolgerung (zusammengenommen) folgt—siehe beispielsweise das obige Beispiel mit dem EM-Finale. Das muss aber nicht der Fall sein! Vgl. folgendes Beispiel:
>
> $$\begin{array}{l}
> \text{Peter ist Streifenpolizist in Berlin.} \\
> \hline
> \text{Also ist Peter ein Beamter.}
> \end{array}$$
>
> Eine sinnvolle implizite Prämisse ist, dass alle Berliner Streifenpolizisten Beamte sind. Dies können wir zwar mit den Mitteln der Aussagenlogik noch nicht formalisieren, aber schon intuitiv ist klar, dass die implizite Prämisse nicht aus den beiden explizit gegebenen Sätzen *folgt* (weder einzeln noch zusammengenommen). Aber es ist vernünftig, dem Sprecher, der das Argument vorbringt, zu unterstellen, dass er es für allgemein bekannt und wahr hält, dass alle Berliner Streifenpolizisten Beamte sind, wenn wir voraussetzen, dass er die explitzite<!-- sic --> Prämisse als relevante Stützung seiner Schlussfolgerung vorbringen wollte.

Aus der Annahme, dass die beiden Sätze als gültiges Argument gemeint sind, und dass sich der Sprecher an übliche Regeln des Sprechverhaltens hält, dürfen wir aber schließen, dass er noch eine weitere Prämisse für wahr hält.
In diesem Sinn sind stillschweigende Prämissen von Argumenten eine besondere Form von konversationalen Implikaturen.

### 201. Implizite Voraussetzungen identifizieren

Eine Grundschwierigkeit liegt darin, dass es im Allgemeinen *verschiedene mögliche Prämissen* gibt, die das Argument zu einem gültigen vervollständigen würden.

$$\begin{array}{l}
\text{Das nächste EM-Finale findet in Österreich oder in der Schweiz statt.} \\
\hline
\text{Also können wir zum nächsten EM-Finale hinfahren.}
\end{array}$$

Wenn das nächste EM-Finale in Österreich stattfindet, können wir hinfahren, und wenn es in der Schweiz stattfindet, können wir auch hinfahren.

Wenn das nächste EM-Finale auf unserem Planeten stattfindet, können wir hinfahren, und Österreich und die Schweiz befinden sich auf unserem Planeten.

<!-- p. 76 | pdf 84 -->

In Peru, Tibet, Österreich, Tansania, Neuseeland und der Schweiz gibt es überall Berge, die mehr als 3700 m hoch sind, und wenn das nächste EM-Finale in einem Land stattfindet, in dem es über 3700 m hohe Berge gibt, dann können wir dort hinfahren.

Mäuse regieren die Welt, und wenn Mäuse die Welt regieren, können wir zum nächsten WM-Finale fahren.

Wir können zum nächsten EM-Finale fahren.

Was genau sollen wir als implizite Prämisse annehmen?

### 202. Implizite Voraussetzungen identifizieren

△ **1. Regel: Wenn Sie ein Argument analysieren, das hinsichtlich der explizit ausgedrückten Prämissen ungültig ist, dann suchen Sie nach plausiblen impliziten *Voraussetzungen, bei deren Hinzunahme als Prämissen das Argument gültig würde*.**

△ **2. Regel: Wenn Sie ein Argument analysieren, unterstellen Sie solche impliziten Voraussetzungen, die aus der Perspektive des-/derjenigen, der/die das Argument vorgebracht hat, *möglichst gut begründbar* sind.**

Im Beispiel würde die 2. Regel die implizite Prämisse „Mäuse regieren die Welt, und wenn Mäuse die Welt regieren, können wir zum nächsten WM-Finale fahren“ (die die 1. Regel erfüllt) natürlich ausschließen.

△ **3. Regel: Ergänzen Sie implizite Prämissen so, dass die explizit gegebenen Prämissen informativ und relevant bleiben.**

Diese Regel schließt beispielsweise aus, einfach „Wir können zum nächsten EM-Finale fahren“ als implizite Prämisse zu ergänzen.

> Hier sei schon darauf hingewiesen, dass die erste und die zweite Regel in einem weniger unproblematischen Verhältnis zueinander stehen, wenn man auch induktive Argumente in Betracht zieht. Dann müsste man nämlich die erste Regel so formulieren: „Ergänzen Sie Voraussetzungen, so dass die Prämissen die Konklusion möglichst gut stützen.“ Es kann dann leicht vorkommen, dass Sie zwischen Voraussetzungen, die die Konklusion stärker stützen, und Voraussetzungen, die sich leichter begründen lassen, wählen müssen.

### 203. Logisch stärker – logisch schwächer

△ **Wenn B aus A folgt, A aber nicht aus B,**\
**$A \vDash B$ und $B \nvDash A$,**\
**dann nennt man**\
**A *logisch stärker* als B und**\
**B *logisch schwächer* als A**

Wenn Sie ein Argument rekonstruieren und die Wahl zwischen einer logisch schwächeren und einer logisch stärkeren Prämisse haben, dann wählen Sie im Allgemeinen die schwächere.

> Diese Maxime folgt aus der 2. Regel, weil logisch schwächere Aussagen leichter zu begründen sind als logisch stärkere.

<!-- p. 77 | pdf 85 -->

### 204. Die kritische Rolle von Voraussetzungen: Zirkularität

Ein Stierkämpfer sollte ein Mann sein. Deshalb sollten Frauen nicht am Stierkampf teilnehmen.

Dieses Argument sieht *gültig* aus. (Zumindest, wenn man die ziemlich plausible implizite Prämisse „Keine Frau ist ein Mann“ ergänzt.) Trotzdem scheint damit etwas nicht zu stimmen.
Das Problem dieses Arguments ist vielmehr seine Zirkularität.

### 205. Zirkularität (*petitio principii*)

△ **Ein Argument heißt *zirkulär*, wenn unter seinen Prämissen mindestens eine ist, die man nur dann für glaubhaft halten kann, wenn man (auch ohne Zurkenntnisnahme des Arguments) schon von der Schlussfolgerung überzeugt ist.**

△ **Von zirkulären Argumenten sagt man auch, sie begingen den Argumentationsfehler der *petitio principii* (oder kurz: *petitio*).**

> Manchmal wird gesagt, Zirkularität läge vor, wenn eine der Prämissen die Schlussfolgerung *voraussetzen* (oder gar „in irgendeiner Weise voraussetzen“) würde. Wenn das so wäre, könnte es keine nichtzirkulären gültigen Argumente mit nur einer Prämisse geben. Zum Beispiel wäre dann Descartes' Argument
>
> $$\begin{array}{l}
> \text{Ich denke} \\
> \hline
> \text{Also bin ich}
> \end{array}$$
>
> zirkulär, denn dass ich denke, setzt voraus, dass ich bin (sonst würde das Argument nicht funktionieren).
> Zirkularität ist also vielmehr wieder eine pragmatische Eigenschaft von Argumenten, wie oben definiert: Können solche Leute, die die Konklusion nicht ohnehin schon glauben, im gegebenen Kontext aus dem Argument eine unabhängige Begründung für die Schlussfolgerung erhalten?

### 206. Zirkularität (*petitio principii*): Beispiele

$$\begin{array}{l}
\text{Ein Stierkämpfer sollte ein Mann sein.} \\
\text{(Keine Frau ist ein Mann.)} \\
\hline
\text{Deshalb sollten Frauen nicht am Stierkampf teilnehmen.}
\end{array}$$

> Noch einmal: Das Problem bei der *petitio* ist nicht die Gültigkeit des Arguments, sondern die Tatsache, dass es ungeeignet ist, eine *Begründung* der Schlussfolgerung zu liefern, weil man die Schlussfolgerung schon akzeptieren muss, um die Prämissen für glaubhaft zu halten.

---

$$\begin{array}{l}
\text{Die Bibel ist Gottes Wort.} \\
\text{Gott ist allwissend und belügt die Menschen nicht.} \\
\text{Die Bibel sagt, dass Gott existiert.} \\
\hline
\text{Also existiert Gott.}
\end{array}$$

> Diese Petitio zeigt, dass es nicht weit genug reichen würde, wenn man Zirkularität nur auf Fälle beschränkt, bei denen die Konklusion identisch oder logisch äquivalent zu einer der Prämissen ist.

---

<!-- p. 78 | pdf 86 -->

$$\begin{array}{l}
\text{Guntram ist zutiefst überzeugt von den Gesetzen der Astrologie.} \\
\text{Guntram ist Widder.} \\
\text{Widder sind sehr gut darin, die Wahrheit zu erkennen.} \\
\hline
\text{Also treffen die Gesetze der Astrologie sehr wahrscheinlich zu.}
\end{array}$$

---

„Was auch immer existiert, muss eine Ursache oder einen Grund seiner Existenz haben, da es vollkommen unmöglich ist, dass etwas sich selbst hervorrufe oder Ursache seiner eigenen Existenz sei.“

David Hume, *Dialogues Concerning Natural Religion*, Teil IX

> Hier ist das Problem, dass *implizit* das Argument voraussetzt, dass irgendeine Ursache für die Existenz eines Dings vorhanden sein muss: Wenn es keine (von ihm selbst unterschiedene) Ursache gäbe, müsse es sich wohl selbst verursachen—was (angeblich) absurd sei. Das, was durch die Konklusion widerlegt werden soll (dass es nämlich sein könnte, dass weder das Ding selbst noch irgendetwas anderes Ursache seiner Existenz wäre, dass es also „einfach so“ existierte) wird implizit schon von vornherein ausgeschlossen.

---

„... nur dann, wenn man meint, dass ich hätte anders handeln können, werde ich für mein Tun moralisch verantwortlich gemacht. Man hält nämlich den Menschen nicht für moralisch verantwortlich für eine Handlung, die zu vermeiden nicht in seiner Macht stand.“

Alfred J. Ayer, „Freedom and Necessity“, Polemic Nr. 5

---

$$\begin{array}{l}
\text{Es ist erwiesen, dass Asbest eine karzinogene Substanz ist.} \\
\text{Alle karzinogenen Substanzen verursachen Krebs.} \\
\hline
\text{Also ist erwiesen, dass Asbest Krebs erzeugt.}
\end{array}$$

> Dies ist ein kniffliger Fall für unsere Definition: Wenn man z.B. nicht weiß, was „karzinogen“ bedeutet, könnte man ja durchaus die erste Prämisse für glaubhaft halten (z.B., wenn man sie von einem Experten gehört hat), ohne die Schlussfolgerung zu glauben. Aber das Argument ist in dem Sinn zirkulär, dass niemand Schlussfolgerung und Prämissen *vollständig verstehen* und die erste Prämisse für glaubhaft halten kann, ohne schon ohne Berücksichtigung des Arguments von der Schlussfolgerung überzeugt zu sein. (Die Frage, ob man solche Fälle in der Definition von Zirkularität berücksichtigen sollte, kann in dieser Vorlesung nicht erörtert werden.)

### 207. Präsumptive Fehlschlüsse

In der Rhetorik und Argumentationstheorie diskutiert man eine ganze Reihe von typischen Fehlschlüssen, die auf häufig verwendeten, aber *zweifelhaften impliziten Voraussetzungen* beruhen. Man könnte sie „präsumptive Fehlschlüsse“ nennen (das ist aber kein etablierter Fachterminus).

### 208. Falsche Dichotomie

Bei vielen Argumenten, in denen zwei Fälle betrachtet werden, beruht die Gültigkeit des Schlusses auf der impliziten Voraussetzung, dass diese zwei die einzigen möglichen oder die einzigen relevanten Fälle seien. Wo diese Voraussetzung zweifelhaft ist, spricht man von einer *falschen Dichotomie*, einem *falschen Dilemma* oder einer *Bifurkation*.

Beispiel:
Wirklich ehrgeizige Studenten studieren auch ohne drohende Prüfungen fleißig. Und Studenten, die überhaupt keinen Ehrgeiz haben, werden auch unter Prüfungsdruck keinen Fleiß entwickeln. Also sind Prüfungen nutzlos, um Studenten zu motivieren.

<!-- p. 79 | pdf 87 -->

> Um an einen zuvor schon eingeführten Begriff zu erinnern: Bifurkationen enthalten als implizite Voraussetzung die Annahme irgendeines kontradiktorischen Gegensatzes $A \leftrightarrow \neg B$.

### 209. Falsche Dichotomie: Beispiele

Man sieht, dass man durch noch so viel Übung nicht einfach ein großartiger Mathematiker werden kann. Herausragende mathematische Fähigkeiten sind also angeboren.

---

Wenn jemand mich und dich fragte: „Ihr beiden, Protagoras und Sokrates, sagt mir denn, ist dieses Etwas, dessen Namen Ihr gerade genannt habt, die Gerechtigkeit, ist dieses Etwas selbst gerecht oder ungerecht?“, würde ich ihm antworten: „Gerecht“. Und du, welches Urteil gäbest du ab?

Platon: *Protagoras*, 330c

### 210. Fehlschluss der Teilung

Manche Argumente beruhen auf der Voraussetzung, dass sich die Eigenschaften eines Ganzen auf seine Teile übertragen müssen. In vielen Fällen ist diese Voraussetzung aber unzutreffend. Dann spricht man von einer *fallacia a sensu composito ad sensum divisum*, die man auch als *Fehlschluss der Teilung* bezeichnen kann.

### 211. Fehlschluss der Teilung: Beispiele

Die Universität Heidelberg ist eine hervorragende Institution. Otto Horstkötter ist Professor dort. Also muss er ein hervorragender Gelehrter sein.

---

Salz ist nicht giftig, also können Natrium und Chlor, aus denen Salz ja besteht, auch nicht giftig sein.

### 212. Der Schluss vom Ganzen auf den Teil: Nicht immer ein Fehlschluss!

Wie bei vielen präsumptiven Fehlschlüssen muss man bei der *divisio* vorsichtig sein: Oft kann die implizite Voraussetzung, die Eigenschaften des Ganzen müssten auch in seinen Teilen vorzufinden sein, auch sachlich *richtig* sein.

Beispiele:
Dieser Koffer ist leichter als 10 kg, also muss auch das darin enthaltene Buch leichter als 10 kg sein.

Die ganze Arbeitsgruppe befindet sich zurzeit in Frankreich, also muss auch ihr Leiter, Prof. Horstkötter, in Frankreich sein.

### 213. Fehlschluss der Verbindung

Ein *Fehlschluss der Verbindung* (oder *fallacia a sensu diviso ad sensum compositum*) liegt vor, wenn einem Argument die implizite Voraussetzung, dass sich Eigenschaften von den Teilen aufs Ganze übertragen ließen, zugrunde liegt und diese nicht glaubhaft sein kann.

<!-- p. 80 | pdf 88 -->

Beispiel:
Die Materialisten sagen, dass Menschen nur aus Atomen bestehen würden. Atome haben aber kein Bewusstsein. Es würde also folgen, dass Menschen kein Bewusstsein hätten. Da dies offenbar falsch ist, können die Materialisten nicht Recht haben.

### 214. Fehlschluss der Verbindung: Beispiele

Die Nationalmannschaft besteht nur aus Top-Spielern. Es muss also eine gute Mannschaft sein.

---

Sollte nicht eher so, wie das Auge, die Hand, der Fuß und überhaupt jedes einzelne Körperglied seine besondere Funktion hat, auch der Mensch neben all dem seine besondere Funktion besitzen?

Aristoteles, *Nikomachische Ethik*, 1097 b 31 ff.

### 215. … auch nicht immer ein Fehlschluss

Natürlich kann auch der Schluss von den Teilen aufs Ganze oft angemessen und richtig sein:

Jeder der Bände wiegt schon mehr als 1 kg, also wiegt die ganze Enzyklopädie auch mehr als 1 kg.

Die Briefmarken sind alle Dr. Henkenjohanns Eigentum, also ist auch die Briefmarkensammlung als Ganzes sein Eigentum.

### 216. Teil und Ganzes

Über das Verhältnis der Eigenschaften eines Ganzen zu den Eigenschaften seiner Teile lässt sich nicht viel Allgemeingültiges sagen. Es kommt auf den Einzelfall an.

Es gibt

- Eigenschaften, die sich vom Ganzen auf alle Teile und umgekehrt übertragen: in Frankreich sein, vollständig aus Metall bestehen, Dr. Henkenjohanns Eigentum sein,
- Eigenschaften, die sich im Allgemeinen vom Ganzen auf alle Teile übertragen, aber nicht umgekehrt: leichter als 1 kg sein, in einen Schuhkarton passen,
- Eigenschaften, die sich im Allgemeinen von allen Teilen auf das Ganze übertragen, aber nicht umgekehrt: schwerer als 1 kg sein, sehr wertvoll sein, auf Wasser oben schwimmen, größtenteils aus Metall bestehen,
- Eigenschaften, die sich in keiner Richtung übertragen lassen: eine Masse von 327 g besitzen, das Becken genau ausfüllen.

### 217. Genetischer Fehlschluss

Wenn ein Argument die Herkunft oder *Genese einer Behauptung* oder Idee heranzieht, um zu einem Schluss darüber zu gelangen, wie wahr oder gut *begründet* diese Idee ist, spricht man oft von einem *genetischen Fehlschluss*.

<!-- p. 81 | pdf 89 -->

Beispiel:
Dass Autobahnen erforderlich für Deutschlands Infrastruktur sind, ist eine Idee, die von den Nazis stammt. Deshalb eignet sie sich nicht zum Bestandteil einer modernen Verkehrspolitik.

Auch genetische Fehlschlüsse gehören zu den präsumptiven Fehlschlüssen, weil sie auf zweifelhaften impliziten Voraussetzungen beruhen. (Im Beispiel ungefähr: „Jede Annahme, die auch irgendwann einmal von Nazi-Technokraten gemacht worden ist, muss falsch sein.“)

### 218. Genetischer Fehlschluss

Beispiel:
Johannes Kepler, der die „Naturgesetze“ formulierte, nach denen sich Planeten gemäß festgeschriebener Zahlverhältnisse auf Ellipsenbahnen bewegen, war bei seiner Erforschung des Planetensystems von religiös begründeten Vorstellungen über eine harmonische Anordnung des Weltganzen motiviert. Die sogenannten „Planetengesetze“ sind deshalb unwissenschaftlich und nicht besonders glaubwürdig.

Der genetische Fehlschluss in diesem Beispiel verkennt, dass es trotz der besonderen Motivation Keplers andere Umstände geben kann, derentwegen die Planetengesetze durchaus als gut begründet gelten dürfen (z.B. dass sie mit den zahlreichen, sehr genauen und schon vor Keplers Formulierung der Ellipsenhypothese von Tycho Brahe vorgenommenen Planetenbeobachtungen übereinstimmen).
In der Wissenschaftstheorie unterscheidet man zur Vermeidung von genetischen Fehlschlüssen zwischen

- *Entdeckungszusammenhang* (Umstände der Entstehung einer wissenschaftlichen Idee) und
- *Rechtfertigungszusammenhang* (Gesamtheit der Umstände, derentwegen die Idee für gut begründet gehalten wird).

### 219. Genetischer Fehlschluss

Es kann allerdings oft auch richtig und angemessen sein, in einem Argument auf die Genese einer Überzeugung zu verweisen:

Es ist sicher, dass genau 1001 Bücher im Regal stehen, denn diese Zahl stammt von Frau Grotendiek, die die Bücher mehrfach gründlich gezählt hat.

Man kann dieses Argument auf die folgende implizite Voraussetzung zurückführen:
Zahlenangaben, die durch mehrfaches Zählen von mittelgroßen, klar distinkten, unbeweglichen physischen Gegenständen durch vertrauenswürdige, zurechnungsfähige Personen ermittelt wurden, sind fast immer richtig.
Es kommt darauf an, ob die Genese sachlich etwas mit dem Geltungsanspruch der Behauptung zu tun hat. Dazu muss man sich im Einzelfall genau die impliziten Voraussetzungen des Arguments anschauen.

### 220. *Argumentum ad hominem*

Eine spezielle Form des genetischen Fehlschlusses liegt vor, wenn eine Behauptung kritisiert wird, indem Eigenschaften einer Person angegriffen werden, die diese Behauptung vorgebracht hat oder vertritt. Man spricht dann von einem *argumentum ad hominem*.

<!-- p. 82 | pdf 90 -->

Beispiel:
Diejenigen, die behaupten, ein Mindestlohn würde den Arbeitsmarkt wiederbeleben, sind in Wahrheit Kommunisten, die am liebsten wieder eine planwirtschaftliche Organisation des Wirtschaftslebens einführen würden. Deshalb ist ein Mindestlohn keine diskutierenswerte Maßnahme sein.

> Offenbar ist hier eine implizite Prämisse vorausgesetzt wie: „Alle wirtschaftspolitischen Ansichten von Kommunisten sind falsch.“

### 221. „*Ad hominem*“ in der Philosophie

In der Philosophie gibt es noch eine ganz andere Verwendungsweise des Ausdrucks: Dort spricht man gelegentlich von einem *argumentum ad hominem*, wenn man, anstatt die These eines Gegners in der Sache zu widerlegen, nur nachweist, dass sich diese These nicht mit anderen Thesen desselben Gegners verträgt.

### 222. *Argumentum ad hominem*: Immer ein Fehlschluss?

Beispiel:
Mein Gegenüber setzt sich vehement gegen die Jagd ein, weil er das Töten von Tieren für menschliche Zwecke für unmoralisch halte. Er ist aber offenbar kein Vegetarier und hat daher scheinbar nichts dagegen, wenn Tiere beim Schlachter für menschliche Zwecke getötet werden!

> Hier kommt es offenbar sehr darauf an, was die Konklusion des Arguments sein soll. Soll es zeigen, dass das Töten von Tieren bei der Jagd *nicht* unmoralisch sein kann, dann handelt es sich um einen Fehlschluss. Die implizite Voraussetzung wäre dann: „Moralische Behauptungen von inkonsequenten Personen sind immer falsch.“
>
> Wenn das Argumentationsziel aber ist, auf eine Inkonsistenz in der Begründung hinzuweisen und deutlich zu machen, dass es nicht überzeugend ist, das Töten von Tieren für menschliche Zwecke für unmoralisch zu halten, es sei denn, man lehnt auch den Verzehr von Fleisch aus Viehhaltung ab, dann kann es einen konstruktiven Diskussionsbeitrag darstellen.

Beispiel:
Prof. Zabludowski behauptet, sein Institut habe den neuen Wirkstoff gründlich geprüft und keine Anhaltspunkte für Nebenwirkungen gefunden. Er besitzt jedoch selbst ein großes Aktienpaket der Firma, der das Patent für den Wirkstoff gehört, und ist deshalb selbst dringend an einer schnellen Zulassung interessiert.

> Auf den ersten Blick geht es hier um die Genese einer Behauptung und nicht darum, wie gut sie begründet ist. Man könnte also geneigt sein, von einem genetischen Fehlschluss *ad hominem* zu sprechen. Jedoch ist in diesem Fall die Information über den Hauptvertreter der Ansicht, das neue Medikament habe keine Nebenwirkungen, tatsächlich relevant für die Glaubwürdigkeit der Studien, die die Ansicht angeblich begründen. Die Information stellt in Frage, ob diese Studien unvoreingenommen und unparteiisch durchgeführt wurden. Das Beispiel zeigt, dass es nicht möglich ist, Entdeckungs- und Rechtfertigungszusammenhang immer sauber zu trennen.

### 223. *Ipse dixit*

Große Mengen von Vitamin C helfen gegen Krebs. Diese Theorie ist unter anderem von Linus Pauling vehement verteidigt worden, und er ist ein Nobelpreisträger. Man darf daher davon ausgehen, dass die Theorie zutrifft.

Dieses Argument beruft sich auf die *Autorität* einer Person, um eine Auffassung zu begründen. Solche Argumente werden seit langem kritisiert. Gängige Bezeichnungen sind „*argumentum ad verecundiam*“ und „*ipse dixit*“.

> Lat. „verecundia“ = „Hochachtung“; „ipse dixit“ = „Er selbst hat es gesagt“.

<!-- p. 83 | pdf 91 -->

### 224. *Ipse dixit*: Beispiele

Die erste Proposition [dass die Sonne das Zentrum des Planetensystems ist] wurde einstimmig für philosophisch töricht und absurd und formal häretisch erklärt, insofern sie ausdrücklich den Lehren der Heiligen Schrift in mehreren Passagen widerspricht, sowohl ihrer buchstäblichen Bedeutung nach als auch gemäß der allgemeinen Auslegung durch die Kirchenväter und Gelehrten.

(Das Heilige Ofiizium<!-- sic --> in seinem ersten Urteil über Galileo Galilei)

---

Thomas von Aquin über die Frage: Gibt es (platonische) Ideen?

Einwand 1: Es scheint, dass es keine Ideen gibt. Denn Dionysius sagt (*Div. Nom.* vii), dass Gott die Dinge nicht durch Ideen kennt. Aber Ideen sind zu nichts gut als dass Dinge durch sie gekannt werden können. Also gibt es keine Ideen. […]

Entgegnung gegen Einwand 1: Gott versteht die Dinge nicht durch Ideen, die außerhalb seiner selbst existieren. So weist Aristoteles (*Metaph.* ix) die Auffassung Platons zurück, der meinte, dass Ideen selbständig existierten und nicht im Geiste.

*Summa Theologica*, I, q. 15, art. 1

> Dies ist ein schönes Beispiel scholastischen Argumentierens: Ein auf eine geringere Autorität gestützter Einwand wird durch eine mit höherer Autorität ausgestattete Erwiderung entkräftet. Beachten Sie aber, dass die Argumentation *auch* sachliche Argumente enthält. Die scholastische Praxis des Argumentierens wird oft karikierend als bloße Berufung auf Autoritäten dargestellt; dies ist jedoch eine Übertreibung.

### 225. Autorität und Expertise

Ich brauche vor meinem Urlaub keine Malaria-Prophylaxe vorzunehmen. Ich bin mir da ganz sicher, weil mir Prof. Horstkötter, der Tropenmediziner ist, dies versichert hat.

Auch das obige Argument beruft sich auf Autorität. Ist es ein schlechtes Argument?

Die Berufung auf Expertise ist in vielen Fällen nicht nur angemessen, sondern sogar unverzichtbar.

Wann ist also die Berufung auf Autorität statthaft, wann nicht?

### 226. Autorität und Expertise

Die Berufung auf Autorität stellt einen Argumentationsfehler dar,

- wenn die Person keine besondere Qualifikation besitzt, die in Rede stehende Auffassung besser zu beurteilen als jeder andere
- oder wenn in dem Kontext, in dem das Argument gegeben wird, ohne weiteres auch die *Gründe*, die die Autorität für ihr Urteil hat, selbst erwogen werden könnten, anstatt nur auf die Autorität zu verweisen.

<!-- p. 84 | pdf 92 -->

> Das folgende ist ein typisches Beispiel für den ersten Fall: „Die Aktien von *Air Cologne* sind bestimmt eine gute Anlage. Schließlich werden sie vom Fernsehmoderator Joachim Körner empfohlen.“ Auch das oben genannte Beispiel mit Linus Pauling ist ein typischer Fall: Pauling ist als Chemie-Nobelpreisträger noch nicht automatisch qualifiziert, über medizinische Dinge zu urteilen. Oft entsteht ein Fehlschluss *ad verecundiam*, wenn die Autorität, die jemand in einem bestimmten Bereich tatsächlich besitzt, unzulässigerweise auf einen anderen Bereich übertragen wird.
>
> Thomas von Aquins Berufung auf Aristoteles fällt allerdings nicht darunter, denn Aristoteles ist sicher hochqualifiziert, sich in philosophischen Fragen zu äußern. Das Beispiel fällt aber unter den zweiten genannten Fall.

### 227. Autorität und Expertise

> Das Beispiel der Berufung des Heiligen Offiziums auf die Bibel weist auf einen problematischen Umstand hin: Für einen strenggläubigen Christen ist die Bibel eine qualifizierte Quelle für Urteile über alle Dinge.

Wie kann man feststellen und / oder sich gegebenenfalls darauf einigen, wer ein Experte für eine gegebene Frage ist und wer nicht? Insbesondere, wenn man selbst kein Experte ist?

> Das Problem wird in der Philosophie schon seit Platon diskutiert, der bereits fragte: Kann man einen Arzt von einem Hochstapler unterscheiden? (*Charmides* 170 d-e).

Mögliche Grundlagen:

- Argumente von anderen Experten,
- Übereinstimmung (bzw. Dissens) zwischen Experten,
- Beurteilung der Expertise durch „Meta-Experten“ oder formale Ausweise der Expertise,
- Wissen über evtl. Interessen und Voreingenommenheit des Experten,
- Wissen über den vergangenen Erfolg des Experten.

> Vgl. Alvin Goldman: „Experts: Which Ones Should You Trust?“ *Philosophy and Phenomenological Research* 63 (2001).
>
> Diese Fragen (und viele andere, vergleichbare) sind Gegenstand der *sozialen Erkenntnistheorie*.

### 228. *Argumentum ad populum*

Überall und zu jeder Zeit haben die Menschen an die Existenz irgendeiner Art von Gottheit geglaubt. Daher muss ein übernatürliches Wesen existieren.

Bei einem Argument, das die Wahrheit einer bestimmten Proposition dadurch zu belegen sucht, dass es darauf verweist, dass viele, die meisten oder gar alle Menschen von ihrer Wahrheit überzeugt sind, spricht man von einem *argumentum ad populum*.

Da die implizite Prämisse, das, was viele, die meisten oder alle Menschen glauben, müsse wahr sein, in den meisten Fällen wenig Glaubwürdigkeit für sich beanspruchen kann, muss man auch hier in vielen Fällen von einem präsumptiven Fehlschluss ausgehen.

### 229. *Argumentum ad populum*: Beispiele

Dieters Buch muss gut sein, denn immerhin haben es schon mehrere Millionen Menschen gekauft.

---

Platon zur Frage, ob Gutsein lehrbar ist und ob es Experten dafür gibt:

<!-- p. 85 | pdf 93 -->

Ich behaupte, […] dass die Athener kluge Leute sind. Nun beobachte ich folgendes: Sooft wir zur Versammlung zusammengekommen sind, läßt man, wenn die Stadt auf dem Gebiet des Hausbaus etwas unternehmen muss, die Baumeister als Berater hinsichtlich der Bauten holen, wenn es um Schiffbau geht, die Schiffbauer, und in allen anderen Fällen entsprechend, bei denen sie glauben, dass es sich um lehr- und lernbare Sachverhalte handle. […] Sobald aber ein Beschluss gefasst werden muss über [allgemeine] Angelegenheiten der Staatsverwaltung, tritt ihnen darüber unterschiedslos auf, sei es Zimmermann, sei es Schmied, Schuster, Kaufmann, Schiffseigner, Reich, Arm, Hoch, Niedrig, und denen wirft niemand vor […], dass sie, ohne es irgendwoher gelernt zu haben […], dennoch versuchten zu raten. Denn offensichtlich halten sie das nicht für lehrbar.

*Protagoras* 319 b-d.

> Handelt es sich um einen Argumentationsfehler?
>
> Wichtig ist der allererste Satz: Das Argument sieht schlecht aus, wenn wir es einfach verstehen als: „Die Athener tun so, also muss es richtig sein.“ Aber man kann Platon auch so verstehen, dass er zeigen will, dass es offensichtlich vernünftig ist, wie sich die Athener verhalten. Die Tatsache, dass so ein Verhalten vernünftig ist, muss einen Grund haben: Nämlich, dass Gutsein ganz allgemein nicht lehrbar ist.

### 230. Die Berufung auf allgemein Bekanntes

In manchen Dingen haben Menschen im Allgemeinen ein ganz gutes Urteilsvermögen. In solchen Fällen kann die Berufung auf die Meinung der Mehrheit durchaus immerhin ein induktives Argument darstellen:

Es ist unvernünftig, zu glauben, Menschen bräuchten in Wirklichkeit keine Flüssigkeit zu sich zu nehmen. In allen Kulturen und zu allen Zeiten waren Menschen fest von dieser Notwendigkeit überzeugt, egal wie ihre Lebensumstände sonst waren. So viele Menschen können sich unmöglich geirrt haben.

Auch die Berufung auf weit verbreitete Ansichten muss also nicht unbedingt ein Argumentationsfehler sein.

Allerdings ist immer Vorsicht geboten: Auch sehr viele Menschen können sich in scheinbar offensichtlichen Dingen irren und unsere Ansichten darüber, in *welchen* Dingen Menschen im Allgemeinen ein ganz gutes Urteilsvermögen haben, sind einem Wandel unterworfen, wie diese Beispiele zeigen:

„Jeder Mensch weiß, dass die Erde sich nicht bewegt.“

„Jeder Mensch weiß, dass zwei Ereignisse objektiv entweder gleichzeitig oder ungleichzeitig stattfinden.“

> Im ersten Fall handelt es sich um eine Behauptung, bei der einmal angenommen wurde, man könne sie überall leicht durch *Beobachtung* feststellen, im zweiten Fall um eine Annahme, die (selbst nach der Formulierung der speziellen Relativitätstheorie noch) von vielen für *intuitiv* unbezweifelbar gehalten wurde. Beide sind inzwischen wissenschaftlich überholt.

### 231. *Argumentum ad ignorantiam*

Die sogenannten Wissenschaftler können nicht beweisen, dass es keine UFOs gibt. Das allein zeigt schon, dass es sie geben muss.

Aus dem Umstand, dass wir nicht wissen, dass P, die Schlussfolgerung zu ziehen, dass P nicht der Fall ist (oder wie im Beispiel aus dem Umstand, dass wir nicht wissen, dass $\neg P$, die Schlussfolgerung zu ziehen, dass P der Fall ist) nennt man ein *argumentum ad ignorantiam*. Es ist in vielen Fällen ein Trugschluss.

### 232. *Argumentum ad ignorantiam*: Beispiele

Ich habe letzte Nacht geträumt, dass mein alter Freund Otto, den ich seit Jahren nicht gesehen habe, einen Unfall gehabt hätte. Aber Träume sind ja nicht real. Also bin ich sicher, dass es Otto gut geht.

---

<!-- p. 86 | pdf 94 -->
1950 präsentierte Joe McCarthy dem amerikanischen Senat eine Liste von 81 Personen in der US-Regierung. Bei ihnen handele es sich um „cases in which it is clear there is a definite Communist connection…persons whom I consider to be Communists in the State Department.“ Zu Fall 40 erklärte er:

I do not have much information on this except the general statement of the agency…that there is nothing in the files to disprove his Communist connections.

> Richard H. Rovere, *Senator Joe McCarthy* (Methuen, 1960), S. 106-107.

### 233. Die Berufung auf das Nichtvorliegen von Beweisen

Es gibt auch bei der Berufung auf Unwissen Fälle, die nicht fehlschlüssig sind:

Die Staatsanwaltschaft hat mit Hilfe der besten Spezialisten und der modernsten Methoden jahrelang versucht, Marta eine Beteiligung am Verbrechen nachzuweisen. Mehrere Reporter haben ebenfalls intensiv und hartnäckig recherchiert. Trotzdem ist in all den Jahren nicht ein einziges Indiz für ihre Beteiligung an den Tag gekommen. Wir müssen also annehmen, dass sie unschuldig ist.

Zwar ist ein Argument vom Nichtwissen nie ein deduktiver Schluss, aber in manchen Fällen stellt der Umstand, dass trotz intensiver Suche keine Belege für *p* gefunden werden können, zumindest eine induktive Stützung der Annahme, dass nicht *p*, dar.

Offenbar kommt es für die Güte solcher Schlüsse darauf an,

- wie intensiv nach dem entsprechenden Wissen gesucht worden ist,
- wie schwierig solches Wissen zu finden gewesen sein müsste und
- wie hohe Standards an das (nichtvorhandene) Wissen angelegt werden.

> Zum zweiten Punkt: Dies ist z.B. das Problem beim UFO-Beispiel: Es ist generell schwierig, zu beweisen, dass etwas *nicht* existiert; im Falle von UFOs scheint das fast unmöglich. Dass so ein Beweis nicht gelungen ist, kann deshalb nicht den Rückschluss erlauben, dass sie tatsächlich existieren.
>
> Zum dritten Punkt: Es ist fast immer ein Fehlschluss, zu schließen: Es gibt keinen zweifelsfreien Beweis für ¬P, also P. Nur für ganz wenige Dinge (z.B. die Sätze der Mathematik) gibt es zweifelsfreie Beweise.

## 9: Prädikatenlogik: Syntax

### 234. Motivation der Prädikatenlogik

Es gibt in den natürlichen Sprachen Argumente, die unsere Definition der *deduktiven Gültigkeit* zu erfüllen scheinen, obwohl sie sich nicht mit Hilfe der Sprache AL als *aussagenlogisch gültig* formalisieren lassen.

> Zur Erinnerung: Das heißt, dass es so aussieht, als ob es eine ganze Klasse von formgleichen Argumenten gibt, für die gilt: Wenn die Prämissen wahr sind, ist die Konklusion wahr.

$$\begin{array}{l} \text{Alle Wale sind Säugetiere.} \\ \text{Alle Säugetiere sind Warmblüter.} \\ \hline \text{Alle Wale sind Warmblüter.} \end{array}$$

<!-- p. 87 | pdf 95 -->
$$\begin{array}{l} \text{Alfons Oestersoetebier ist Millionär.} \\ \text{Alfons Oestersoetebier wählt die Linkspartei.} \\ \hline \text{Es gibt einen Millionär, der die Linkspartei wählt.} \end{array}$$

Da die Aussagen, aus denen diese Argumente bestehen, nicht aus Teilaussagen zusammengesetzt sind, können wir sie nicht aussagenlogisch formalisieren.

> Genauer gesagt: wir können sie höchstens formalisieren als:
>
> $$\begin{array}{l} A \\ B \\ \hline C \end{array}$$
>
> und dabei tritt ihre deduktive Gültigkeit eben nicht zum Vorschein.

### 235. Binnenstruktur von Aussagen

Ein Problem scheint dabei zu sein, dass die Aussagenlogik nicht die Binnenstruktur von Aussagen erfassen kann.

$$\begin{array}{l} \text{Alfons Oestersoetebier ist Millionär.} \\ \text{Alfons Oestersoetebier wählt die Linkspartei.} \\ \hline \text{Es gibt einen Millionär, der die Linkspartei wählt.} \end{array}$$

Z.B. haben wir in AL keine Möglichkeit, auszudrücken, dass die erste und die zweite Prämisse von *derselben Person* handeln. Auch haben wir keine Möglichkeit, zu berücksichtigen, dass in der ersten Prämisse und der Konklusion, *derselbe Begriff* („Millionär“) verwendet wird.

Diese Umstände sind aber offenbar wesentlich für die Gültigkeit des Arguments.

### 236. Quantifizierte Aussagen

Außerdem kommen in den Beispielen die Ausdrücke „Es gibt ein …“ und „Alle …“ vor, die offenbar eine große Rolle für ihre deduktive Gültigkeit spielen.

$$\begin{array}{l@{\qquad}l}
\text{Alle Wale sind Säugetiere.} & \text{Alle Fische sind Reptilien.} \\
\text{Alle Säugetiere sind Warmblüter.} & \text{Es gibt einen Meeresbewohner, der kein Reptil ist.} \\
\hline
\text{Alle Wale sind Warmblüter.} & \text{Es gibt einen Meeresbewohner, der kein Fisch ist.}
\end{array}$$

Die Gültigkeit dieser Argumente ist ganz unabhängig von ihren spezifisch meeresbiologischen Inhalten. Die Gültigkeit erkennt man schon an ihrer Form:

$$\begin{array}{l@{\qquad}l}
\text{Alle X sind Y.} & \text{Alle A sind B.} \\
\text{Alle Y sind Z.} & \text{Es gibt ein C, das nicht B ist.} \\
\hline
\text{Alle X sind Z.} & \text{Es gibt ein C, das nicht A ist.}
\end{array}$$

Hieraus wird ersichtlich, dass „Alle …“ in der neuen formalen Sprache, die wir brauchen, die Rolle einer logischen Konstante wird spielen müssen. Das gleiche gilt für „Es gibt …“.

<!-- p. 88 | pdf 96 -->
### 237. Prädikatenlogik

Um Argumente wie die genannten zu formalisieren, brauchen wir also eine ausdrucksstärkere formale Sprache, die Sprache der Prädikatenlogik. Wir werden sie als eine Familie von einander ganz ähnlichen Sprachen ansehen, die wir PL-Sprachen nennen werden.

Diese Sprachen bilden so etwas wie *die* Grundsprache der Logik. Wenn Logiker von „elementaren Sprachen“ sprechen, meinen sie die PL-Sprachen. Mit der Sprache AL haben Sie sich aber nicht umsonst beschäftigt: Sie bildet in gewissem Sinne die Grundlage für die PL-Sprachen.

Die Prädikatenlogik wird manchmal auch als Quantorenlogik bezeichnet.

Bevor wir die PL-Sprachen formal einführen, sollen im Folgenden ihre Grundbegriffe schon einmal informell vorgestellt werden.

### 238. Begriff und Gegenstand

Im Allgemeinen geschieht immer zweierlei, wenn wir Sprache verwenden:

- Wir beziehen uns auf Gegenstände
- und wir wenden Begriffe an.

Beispiele:

„Der Eiffelturm ist ein beeindruckendes Gebäude.“
„Bielefeld ist kleiner als New York.“
„Beharrlichkeit ist eine Tugend.“

> In all diesen Sätzen kommen sowohl sprachliche Ausdrücke vor, die dazu dienen, sich auf Gegenstände zu beziehen, als auch solche, die dazu dienen, auf diese Gegenstände einen Begriff anzuwenden.

Unter einem Begriff versteht man in der Philosophie etwas, das man prinzipiell auf verschiedene Gegenstände anwenden kann oder könnte.

> In Kapitel 16 (Folien 394 ff.) werden wir genauer auf Begriffe zu sprechen kommen.

Daher drücken Eigennamen in diesem Sinn keine Begriffe aus. Sie können nur benutzt werden, um sich auf einen einzigen Gegenstand zu beziehen. Es gibt also Wörter, die keinen Begriff ausdrücken, sondern nur dazu benutzt werden können, sich auf Gegenstände zu beziehen.

$$\begin{array}{l} \text{Alfons Oestersoetebier ist Millionär.} \\ \text{Alfons Oestersoetebier wählt die Linkspartei.} \\ \hline \text{Es gibt einen Millionär, der die Linkspartei wählt.} \end{array}$$

Am Beispiel dieses Arguments haben wir gesehen, dass die Binnenstruktur von Aussagen, die durch Gegenstandsbezug und Begriffsanwendung gebildet wird, für die logische Form von Argumenten wichtig werden kann.

Wir müssen berücksichtigen, *über wen oder was* in einer Aussage etwas gesagt wird (Gegenstandsbezug) und *welche Eigenschaft, Tätigkeit usw.* in der Aussage zugeschrieben wird (Begriffsanwendung).

Diese Differenzierung bildet die Prädikatenlogik durch eine Unterscheidung zwischen logischem Subjekt und logischem Prädikat ab.

<!-- p. 89 | pdf 97 -->
### 239. Logische Subjekte, logische Prädikate

△ **Wenn in einer Aussage über ein bestimmtes einzelnes Individuum oder einen bestimmten einzelnen Gegenstand gesprochen wird, dann wird der Ausdruck, mit dem dieser Gegenstand im Satz bezeichnet wird, das *logische Subjekt* der Aussage genannt.**

> Logische Subjekte können Individuen und Gegenstände im weitesten Sinne bezeichnen. Jeder Ausdruck, der sich auf etwas Einzelnes bezieht, kann logisches Subjekt eines Satzes sein. Dazu gehören auch beispielsweise Vorgänge, Ereignisse und abstrakte Gegenstände. „Caesars Ermordung“, „der Eiffelturm“, „die Zahl 7“, „der 3. Januar 2007“, „Konrad Adenauer“ oder „das Universum“ kommen alle als logische Subjekte in Frage.

△ **Ausdrücke, die dazu verwendet werden, den durch die logischen Subjekte bezeichneten Gegenständen Eigenschaften, Tätigkeiten, Zustände etc. zuzuschreiben, nennt man *logische Prädikate*.**

### 240. Logische Subjekte, logische Prädikate

Alfons Oestersoetebier ist Millionär.

In diesem Satz ist beispielsweise „Alfons Oestersoetebier“ das logische Subjekt, „… ist Millionär“ ist das logische Prädikat.

In den formalen PL-Sprachen werden wir logische Prädikate mit Großbuchstaben wiedergeben und logische Subjekte mit Kleinbuchstaben. Wenn „a“ für Alfons Oestersoetebier steht und „M“ für die Eigenschaft, Millionär zu sein, dann formalisieren wir den Satz „Alfons Oestersoetebier ist Millionär“ durch

$$Ma$$

> D.h.: Das direkte Hintereinanderschreiben soll bedeuten, dass das logische Prädikat auf das vom logischen Subjekt bezeichnete Individuum zutrifft.

### 241. Mehrstellige Prädikate

Roderigo liebt Desdemona.

Wir werden auch die Möglichkeit berücksichtigen, dass eine einfache Aussage von mehreren Individuen handeln kann. Das logische Prädikat „… liebt ---“ braucht zwei Individuenausdrücke, um zu einer vollständigen Aussage zu werden. Solche Prädikate nennen wir *zweistellig*. Wenn wir mit „L“ das zweistellige Prädikat „… liebt ---“ formalisieren und „r“ für Roderigo und „d“ für Desdemona steht, lautet die prädikatenlogische Formalisierung des Beispielsatzes:

$$Lrd$$

Beachten Sie, dass die Reihenfolge von „r“ und „d“ eine entscheidende Rolle spielt. „Lrd“ ist nicht gleichbedeutend mit „Ldr“.

<!-- p. 90 | pdf 98 -->
### 242. Mehrstellige Prädikate

„… ist Millionär“ ist ein *einstelliges* Prädikat, „… liebt ---“ ein zweistelliges. Es gibt auch drei- und vierstellige Prädikate usw. Z.B. ist „… liegt zwischen ___ und ---“ ein dreistelliges Prädikat.

Bielfeld<!-- sic --> liegt zwischen Paderborn und Osnabrück.

Die mehr als einstelligen Prädikate heißen mehrstellig.

Was ist das logische Subjekt von „Roderigo liebt Desdemona“? Man könnte vielleicht sagen, dass sowohl „Roderigo“ als auch „Desdemona“ logische Subjekte des Satzes sind. Wir wollen aber genauer sein: Als logisches Subjekt des Satzes werden wir das *geordnete Paar* ⟨„Roderigo“, „Desdemona“⟩ ansehen. Ebenso ist das geordnete *Tripel* ⟨„Bielefeld“, „Paderborn“, „Osnabrück“⟩ das logische Subjekt des Satzes „Bielfeld<!-- sic --> liegt zwischen Paderborn und Osnabrück“.

Allgemein nennt man geordnete Zusammenfassungen von *n* Objekten *n*-Tupel.

> Beachten Sie, dass logisches Subjekt und grammatisches Subjekt unterschiedliche Dinge sind. Das grammatische Subjekt des Beispielsatzes ist eindeutig „Rodrigo“, „Desdemona“ dagegen ist Akkusativobjekt. Aber auf grammatische Kategorien kommt es hier nicht an. Dasselbe gilt für das logische Prädikat.

### 243. Logisches Subjekt und logisches Prädikat – Mehrdeutigkeiten

Es ist nicht immer eindeutig, wie eine natürlichsprachliche Aussage in logisches Subjekt und logisches Prädikat zu zerlegen ist.

Kassel liegt in der Mitte von Deutschland.

Hier könnte man sagen, dass das logische Subjekt ⟨„Kassel“, „Deutschland“⟩ ist und das logische Prädikat das zweistellige „… liegt in der Mitte von ---“.

Ebenso könnte man aber auch behaupten, dass nur „Kassel“ das logische Subjekt bildet und das logische Prädikat das einstellige „… liegt in der Mitte von Deutschland“.

Der Kontext muss jeweils entscheiden, wie man den Satz am besten analysiert.

> Im Allgemeinen wird auch in der Prädikatenlogik wieder gelten, dass man möglichst strukturreich zu analysieren hat. Die strukturreichere Alternative ist hier natürlich die zuerst genannte. Aber in manchen Kontexten, in denen man auch mit einer weniger strukturreichen Formalisierung auskommt, kann dies aus Gründen der Übersichtlichkeit praktischer sein.

### 244. Quantoren

Es gibt mindestens einen Millionär.

Was ist das logische Subjekt dieses Satzes? Nicht etwa „ein Millionär“, denn das logische Subjekt müsste ein Ausdruck sein, der sich auf einen bestimmten Gegenstand, ein bestimmtes Individuum bezieht. „Ein Millionär“ bezieht sich aber im Beispiel nicht auf irgendeinen bestimmten Millionär.

Die Prädikatenlogik analysiert den Satz deshalb anders: Dieser Satz hat gar kein logisches Subjekt. Stattdessen geht es darin sozusagen nur um ein logisches Prädikat, nämlich das Prädikat „… ist ein Millionär“. Der Satz sagt aus, dass es mindestens einen Gegenstand oder ein Individuum gibt, dem dieses Prädikat wahrheitsgemäß zugeschrieben werden kann. Halb-formal könnte man das so ausdrücken:

<!-- p. 91 | pdf 99 -->
Es gibt mindestens ein x, so dass gilt: x ist ein Millionär.

> Wenn ein Prädikat wahrheitsgemäß einem Gegenstand zugeschrieben werden kann, sagt man in der Logik auch, dass dieser Gegenstand unter das Prädikat fällt. In diesem Sinne besagt eine Aussage wie die vorliegende einfach, dass es mindestens einen Gegenstand gibt, der unter das Prädikat „… ist ein Millionär“ fällt.

In den PL-Sprachen werden wir für „Es gibt mindestens ein x, so dass gilt“ den Ausdruck „∃x“ verwenden, den man *Existenzquantor* nennt.

$$\exists x\, Mx$$

### 245. Quantoren

Ähnlich werden wir in der Prädikatenlogik auch den folgenden Satz analysieren:

Alles ist vergänglich.

Der Satz sagt nicht, dass etwas Bestimmtes vergänglich ist (nämlich alles), sondern er sagt, dass der Eiffelturm vergänglich ist, ich, Sie, der Kleingartenverein Ubbedissen, der Europäische Kontinent, einfach alles. In diesem Sinne hat auch dieser Satz kein logisches Subjekt, sondern ist eine Aussage über das Prädikat „… ist vergänglich“. Er sagt, dass jeder beliebige Gegenstand, jedes beliebige Individuum unter dieses Prädikat fällt.

Für alle x gilt: x ist vergänglich.

Für den Ausdruck „Für alle x gilt“ verwenden wir in den PL-Sprachen den sogenannten *Allquantor* „∀x“, so dass dieser Satz formalisiert so aussehen könnte:

$$\forall x\, Vx$$

Mit Hilfe des Allquantors werden wir auch den schon bekannten Beispielsatz „Alle Wale sind Säugetiere“ formalisieren können. Denn dieser bedeutet nichts anderes als:

Für alle x gilt: Wenn x ein Wal ist, dann ist x ein Säugetier.

Und dies können wir mit den uns bekannten logischen Mitteln schon ausdrücken.

$$\forall x\,(Wx \rightarrow Sx)$$

### 246. Variablen

Beachten Sie, dass auch in dem formalen Satz

$$\exists x\, Mx$$

das „x“ *nicht* etwa das logische Subjekt irgendeines Satzes oder Teilsatzes ist. Denn dazu müsste es sich auf *einen bestimmten* Gegenstand beziehen, was es nicht tut. Es vertritt sozusagen beliebige Gegenstände. Nur
<!-- p. 92 | pdf 100 -->
im Zusammenhang mit dem Quantor „∃x“ wird überhaupt klar, was die Bedeutung des Satzes sein soll. In der Terminologie der Prädikatenlogik ist „x“ damit eine *Variable*.

Damit funktioniert „x“ in diesem Beispiel völlig anders als z.B. „a“ in der Formalisierung

$$Ma$$

des Satzes „Alfons Oestersoetebier ist ein Millionär“. „a“ bezieht sich auf ein bestimmtes Individuum und zählt deshalb zu den *Individuenkonstanten*.

### 247. PL-Sprachen

Anders als bei der Aussagenlogik werden wir die formalen Sprachen der Prädikatenlogik nicht als eine einzige Sprache, sondern als eine Familie verschiedener formaler Sprachen ansehen, die alle nach denselben Prinzipien aufgebaut sind.

Diese Form der Darstellung ist nicht unbedingt nötig, scheint mir aber für die Prädikatenlogik die übersichtlichste zu sein.

> Eine Darstellung, nach der es stattdessen nur eine Sprache PL gibt, finden Sie in Beckermann 2003 (Teil III).

### 248. Die Syntax der PL-Sprachen: Deskriptive Grundzeichen

Jede PL-Sprache *L* ist aus *deskriptiven* und *logischen* Grundzeichen aufgebaut.

Ihre deskriptiven Grundzeichen sind die folgenden:

- *Eine bestimmte Menge von Individuenkonstanten.* Dies sind Kleinbuchstaben „a“, „b“, „c“, …, „v“ sowie nötigenfalls diese Kleinbuchstaben mit Numeralen als Indizes: „$a_1$“, „$a_2$“, usw., „$b_1$“, „$b_2$“ usw., …, „$v_1$“, „$v_2$“, usw.

  > Wohlgemerkt: Die vier letzten Buchstaben „w“, „x“, „y“, „z“ des Alphabets gehören nicht zu den Individuenkonstanten!

- *Eine bestimmte nichtleere Menge von Prädikatbuchstaben.* Dies sind Großbuchstaben „A“, „B“ „C“, usw. sowie nötigenfalls Großbuchstaben mit Numeralen als Indizes: „$A_1$“, „$A_2$“, usw., „$B_1$“, „$B_2$“ usw. … Jeder Prädikatbuchstabe besitzt innerhalb einer Sprache *L* eine ganz bestimmte *Stelligkeit*. (d.h. eine ihm zugewiesene Zahl *n*, die angibt, dass es sich bei ihm um ein *n*-stelliges Prädikat handelt).

In den deskriptiven Grundzeichen können sich die verschiedenen PL-Sprachen unterscheiden. Sie können verschiedene und verschieden große Mengen von Individuenkonstanten und Prädikatbuchstaben besitzen und ein Prädikatbuchstabe kann in der einen Sprache einstellig und in der nächsten mehrstellig sein.

> Wohlgemerkt: *Innerhalb* einer Sprache ist die Stelligkeit ein und desselben Prädikatbuchstabens ein und für alle mal festgelegt.

### 249. Die Syntax der PL-Sprachen: Logische Grundzeichen

Die logischen Grundzeichen sind für alle PL-Sprachen dieselben:

- *Junktoren.* Dies sind die Zeichen „∧“, „∨“, „¬“, „→“ und „↔“.
- *Quantorzeichen.* Dies sind die Zeichen „∃“ und „∀“.
<!-- p. 93 | pdf 101 -->
- *Variablen.* Dies sind die Kleinbuchstaben „w“, „x“, „y“, „z“ sowie diese Kleinbuchstaben mit Numeralen als Indizes: „$w_1$“, „$w_2$“, usw., „$x_1$“, „$x_2$“ usw., … .
- *Hilfszeichen.* Dies sind die Klammerzeichen „(“ und „)“.

### 250. Verschiedene PL-Sprachen

Die Unterschiede zwischen den PL-Sprachen erschöpfen sich also sozusagen im nichtlogischen Vokabular.

Eine bestimmte Sprache *L* ist ganz einfach dadurch zu definieren, dass wir angeben

- … welche Individuenkonstanten zu *L* gehören sollen,
- welche Prädikatbuchstaben zu *L* gehören sollen und
- welche Stelligkeit jeder dieser Prädikatbuchstaben innerhalb von *L* haben soll.

Z.B. können Sie die Sprache $L_1$ definieren, indem Sie sagen, dass sie nur die zwei Individuenkonstanten „a“ und „b“ und den zweistelligen Prädikatbuchstaben „P“ besitzen soll.

Die „bestimmten Mengen“ von Individuenkonstanten und Prädikatbuchstaben brauchen keineswegs endlich zu sein. Sie können z.B. die Sprache $L_2$ definieren, indem Sie festlegen, dass diese die Individuenkonstanten „$a_1$“, „$a_2$“, … und die sämtlich dreistelligen Prädikatbuchstaben „$Q_1$“, „$Q_2$“, … besitzen möge.

(In der Praxis verwenden wir in der Philosophie meist PL-Sprachen mit nur wenigen Individuenkonstanten und Prädikatbuchstaben, die wir im Kontext einer Formalisierung gleichzeitig mit einer bestimmten Interpretation definieren.)

### 251. Der syntaktische Aufbau von PL-Sprachen

Es sei im folgenden *L* eine beliebige PL-Sprache. Dann wird wie folgt definiert, welches die Sätze von *L* sind.

Wir definieren zunächst rekursiv, was ein *Ausdruck von* *L* ist.

a) Wenn Γ ein *n*-stelliger Prädikatbuchstabe von *L* ist und $\alpha_1, \ldots, \alpha_n$ Individuenkonstanten von *L* oder Variablen sind, dann ist $\Gamma\alpha_1 \ldots \alpha_n$ ein Ausdruck von *L*.

b) Wenn φ und ψ Ausdrücke von *L* sind, dann sind auch $\neg\varphi$, $(\varphi \wedge \psi)$, $(\varphi \vee \psi)$, $(\varphi \rightarrow \psi)$ und $(\varphi \leftrightarrow \psi)$ Ausdrücke von *L*.

c) Wenn φ ein Ausdruck von *L* und α eine Variable ist, dann sind auch $\forall\alpha\,\varphi$ und $\exists\alpha\,\varphi$ Ausdrücke von *L*.

d) Nur Ausdrücke, die durch endlich oftmaliges Anwenden von a) bis c) entstehen können, sind Ausdrücke von *L*.

Sehen wir uns diese Regeln einzeln an.

<!-- p. 94 | pdf 102 -->
### 252. Der syntaktische Aufbau von PL-Sprachen

a) Wenn Γ ein *n*-stelliger Prädikatbuchstabe von *L* ist und $\alpha_1, \ldots, \alpha_n$ Individuenkonstanten von *L* oder Variablen sind, dann ist $\Gamma\alpha_1 \ldots \alpha_n$ ein Ausdruck von *L*.

Nehmen wir im Folgenden zu Illustrationszwecken an, *L* besitze die Individuenkonstanten „a“, „b“, „c“ und die Prädikatbuchstaben „F“ (einstellig), „G“ (zweistellig) und „H“ (dreistellig).

Dann folgt aus a), dass die folgenden Zeichenketten Beispiele für Ausdrücke von *L* sind:

$$\begin{array}{l} Fa \\ Fx \\ Gaa \\ Gax \\ Hyyy \\ Hzbc \end{array}$$

### 253. Der syntaktische Aufbau von PL-Sprachen

b) Wenn φ und ψ Ausdrücke von *L* sind, dann sind auch $\neg\varphi$, $(\varphi \wedge \psi)$, $(\varphi \vee \psi)$, $(\varphi \rightarrow \psi)$ und $(\varphi \leftrightarrow \psi)$ Ausdrücke von *L*.

Aus b) folgt dann, dass auch mit Hilfe der aussagenlogischen Junktoren Ausdrücke von *L* gebildet werden dürfen.

$$\begin{array}{l} (Gaa \wedge Fb) \\ ((Gax \vee Hxyz) \rightarrow Habc) \\ (\neg(\neg Fw \vee Gxx) \wedge ((Fa \vee Fb) \vee Hxbx)) \end{array}$$

### 254. Der syntaktische Aufbau von PL-Sprachen

c) Wenn φ ein Ausdruck von *L* und α eine Variable ist, dann sind auch $\forall\alpha\,\varphi$ und $\exists\alpha\,\varphi$ Ausdrücke von *L*.

In diesem Fall nennt man φ den *Wirkungsbereich* des entsprechenden Quantors.

Ausdrücke, die durch Anwendung der Quantorenregel c) entstehen, nennt man *quantifizierte Ausdrücke*.

$$\begin{array}{l} \forall x\, Fx \\ \forall x\, Fy \\ \exists y\,(Gby \wedge Fb) \\ \exists w\,(\neg(\neg Fw \vee Gxx) \wedge ((Fa \vee Fb) \vee Hxbx)) \end{array}$$

<!-- p. 95 | pdf 103 -->
### 255. Der syntaktische Aufbau von PL-Sprachen

Da die Regeln oftmals und in verschiedenen Reihenfolgen angewendet werden können, gehen auch quantifizierte Ausdrücke wiederum in komplexere Ausdrücke ein.

$$\begin{array}{l} (\exists y\,(Gby \wedge Fb) \rightarrow \forall z\, Fz) \\ \exists x\, \forall y\,(Fx \vee Gxy) \\ \forall z\,(\exists x\, \forall y\,(Fx \vee Gxy) \rightarrow Haaz) \\ \exists z\,(\exists y\,(Gby \wedge Fz) \wedge \forall w\, Hwby) \end{array}$$

### 256. Der syntaktische Aufbau von PL-Sprachen: Wirkungsbereiche der Quantoren

Beachten Sie die unterschiedlichen Wirkungsbereiche der Quantoren.

$$(\exists y\,(Gby \wedge Fb) \rightarrow \forall z\, Fz)$$
<!-- Farbmarkierung: ∃y (blau) mit unterstrichenem Wirkungsbereich (Gby ∧ Fb) (blau); ∀z (rot) mit unterstrichenem Wirkungsbereich Fz (rot). -->

$$\exists x\, \forall y\,(Fx \vee Gxy)$$
<!-- Farbmarkierung: ∃x (blau) mit unterstrichenem Wirkungsbereich ∀y (Fx ∨ Gxy) (blau); ∀y (rot) mit unterstrichenem Wirkungsbereich (Fx ∨ Gxy) (rot). -->

$$\forall z\,(\exists x\, \forall y\,(Fx \vee Gxy) \rightarrow Haaz)$$
<!-- Farbmarkierung: ∀z (blau) mit unterstrichenem Wirkungsbereich (∃x ∀y (Fx ∨ Gxy) → Haaz) (blau); ∃x (rot) mit unterstrichenem Wirkungsbereich ∀y (Fx ∨ Gxy) (rot); ∀y (grün) mit unterstrichenem Wirkungsbereich (Fx ∨ Gxy) (grün). -->

$$\exists z\,(\exists y\,(Gby \wedge Fz) \wedge \forall w\, Hwby)$$
<!-- Farbmarkierung: ∃z (blau) mit unterstrichenem Wirkungsbereich (∃y (Gby ∧ Fz) ∧ ∀w Hwby) (blau); ∃y (rot) mit unterstrichenem Wirkungsbereich (Gby ∧ Fz) (rot); ∀w (grün) mit unterstrichenem Wirkungsbereich Hwby (grün). -->

### 257. Gebundene und freie Variablen

Nicht jeder Ausdruck von *L* ist auch ein Satz von *L*. Nach den Regeln a) bis d) lassen sich auch Ausdrücke bilden, in denen Variablen vorkommen, ohne dass ein entsprechender Quantor im Ausdruck auftritt:

$$\begin{array}{l} Fy \\ \exists x\, Fy \end{array}$$

Wie bereits angemerkt, ergeben Variablen jedoch nur gemeinsam mit einem entsprechenden Quantor einen Sinn.

„Es gibt mindestens ein y, so dass gilt: y ist ein Millionär“ ist eine Aussage.

„y ist ein Millionär“ dagegen ist überhaupt keine Aussage. (Wer ist y?)

> Bitte bedenken Sie: „y“ ist keine Individuenkonstante, kann nicht logisches Subjekt eines Satzes sein.

Ebensowenig:
„Es gibt mindestens ein x, so dass gilt: y ist ein Millionär.“ Wieder stellt sich die Frage: Was soll das „y“ hier?

### 258. Gebundene und freie Variablen

Um aus den Ausdrücken von *L* die (sinnvollen) Sätze herauszupicken, brauchen wir noch weitere Definitionen:

<!-- p. 96 | pdf 104 -->
Wenn beispielsweise die Variable „w“ in einem Ausdruck vorkommt und innerhalb des Wirkungsbereichs eines Quantors „∃w“ oder „∀w“ (also eines Quantors mit derselben Variablen) steht, dann sagen wir, sie sei durch den Quantor *gebunden*. Steht sie aber nicht innerhalb des Wirkungsbereichs eines solchen Quantors, dann kommt sie *frei* vor. Genauer und allgemein formuliert:

△ **Wenn φ ein Ausdruck der Sprache *L* und α eine Variable ist, und es ein Vorkommnis von α in φ gibt, das sich nicht innerhalb des Wirkungsbereichs eines Quantors ∃α oder ∀α befindet, dann *kommt α in φ frei vor*.**

### 259. Gebundene und freie Variablen

Z.B. sind die Vorkommnisse von „y“ in den folgenden Ausdrücken gebunden:

$$\begin{array}{l} \neg\exists y\, Gya \\ \forall y\,(Fa \wedge Gya) \end{array}$$

In den folgenden Ausdrücken kommt „y“ frei vor.

$$\begin{array}{l} \forall y\, Fa \wedge Gya \\ \neg\exists x\, Hxyb \end{array}$$

Im folgenden Ausdruck ist zwar *ein* Vorkommnis von „y“ gebunden, ein zweites aber nicht.

$$\exists z\,(\exists y\,(Gby \wedge Fz) \wedge \forall w\, Hwby)$$

Daher kommt „y“ auch hier frei vor.

### 260. Sätze von PL-Sprachen

Mit Hilfe dieser Begriffe können wir jetzt genau definieren, was ein Satz der Sprache *L* ist.

△ **Ein Satz der PL-Sprache *L* ist ein Ausdruck von *L*, in dem keine Variable frei vorkommt.**

### 261. Klammerersparnis in PL-Sprachen

In den PL-Sprachen gelten nur die Klammerersparnisregeln, die sie schon von der Sprache AL kennen.

1. Äußerste Klammern dürfen weggelassen werden.
   Z.B.: „$(Fa \wedge \exists x\, Gax) \vee \neg\forall y\, Fy$“ statt „$((Fa \wedge \exists x\, Gax) \vee \neg\forall y\, Fy)$“
2. „∧“ und „∨“ binden stärker als „→“ und „↔“.
   Z.B.: „$Fa \wedge \exists x\, Gax \rightarrow \forall y\, Fy$“ statt „$(Fa \wedge \exists x\, Gax) \rightarrow \forall y\, Fy$“,
   „$\forall x\, \forall y\,(Gxy \leftrightarrow Fx \vee Fy)$“ statt „$\forall x\, \forall y\,(Gxy \leftrightarrow (Fx \vee Fy))$“.

<!-- p. 97 | pdf 105 -->
3. Bei iterierten Konjunktionen, Adjunktionen und Bisubjunktionen dürfen die Klammern weggelassen werden.
   Z.B.: „$\forall x\, \forall y\,(Gxy \wedge Fx \wedge Fy)$“ statt „$\forall x\, \forall y\,((Gxy \wedge Fx) \wedge Fy)$“.
   „$Fa \leftrightarrow \exists x\, Habx \leftrightarrow Fb \leftrightarrow \forall y\, Gyb$“ statt „$((Fa \leftrightarrow \exists x\, Habx) \leftrightarrow Fb) \leftrightarrow \forall y\, Gyb$“.

### 262. Beispiele für fehlerhaft gebildete „Sätze“

a) $\forall x\, \forall y\,(x \rightarrow Fa)$

b) $\forall x\, Gxy$

c) $\forall z\, Gab \leftrightarrow Gzb$

d) $\neg\exists x\,(\forall y\, Fy \vee Gxy)$

e) $\exists z\,(Gaz \leftrightarrow Ga)$

f) $\forall x \wedge \forall y\, Gxy$

> Gründe der Fehlerhaftigkeit: a) „x“ ist kein Ausdruck; b) „y“ kommt frei vor; c) „z“ kommt frei vor; d) „y“ kommt frei vor (zweites Vorkommnis); e) uneinheitliche Stelligkeit von „G“; f) „∀x“ ist kein Ausdruck.

### 263. Alternative Notation

Prädikate werden in manchen Texten mit Klammern geschrieben, also „$F(x)$“ statt „$Fx$“, „$G(a, b)$“ statt „$Gab$“.

Häufige Notationen für Existenzsätze

$$\begin{array}{l} \exists x\, Fx \\ (Ex)\, Fx \\ \bigvee x\, Fx \end{array}$$

Häufige Notationen für Allsätze

$$\begin{array}{l} \forall x\, Fx \\ (x)\, Fx \\ \bigwedge x\, Fx \end{array}$$

### 264. E-Mail-Notation

Wegen der Nichtverfügbarkeit von Sonderzeichen hat sich für den E-Mail-Verkehr (und bei anderen Internetanwendungen) eine bestimmte Mischung aus verschiedenen traditionellen Notationen eingebürgert.

<!-- p. 98 | pdf 106 -->
| Notation in dieser Vorlesung | Gängige E-Mail-Notation |
|---|---|
| $\forall x\, Fx$ | `(x)Fx` |
| $\exists x\, Fx$ | `(Ex)Fx` |
| $Fa \rightarrow Ga$ | `Fa -> Ga` |
| $Pab \leftrightarrow Qba$ | `Pab <-> Qba` |
| $Fa \wedge Gb$ | `Fa & Gb` |
| $Fa \vee Gb$ | `Fa v Gb` |
| $\neg Fa$ | `~Fa` |

Beispiel:

| $\exists x\, Fx \vee \exists x\, Gx \leftrightarrow \neg\forall x\,(\neg Fx \wedge \neg Gx)$ | `(Ex)Fx v (Ex)Gx <-> ~(x)(~Fx & ~Gx)` |
|---|---|

## 10. Prädikatenlogik: Semantik

### 265. Interpretationen von PL-Sprachen

Wie bereits bei der Sprache AL erhalten auch in den PL-Sprachen die deskriptiven Zeichen erst dann eine Bedeutung, wenn wir eine Interpretation vornehmen.

Allerdings funktionieren die Quantoren der PL-Sprachen nicht wahrheitsfunktional. Die Prädikate, auf die sie wirken, haben ja für sich allein keine Wahrheitswerte („… ist ein Millionär“ hat für sich genommen keinen Wahrheitswert). Also kann der Wahrheitswert „$\exists x\, Mx$“ nicht etwa eine Funktion des Wahrheitswertes von „$Mx$“ sein.

D.h. aber auch, dass es bei der Semantik von PL-Sprachen nicht mehr nur um Wahrheitswerte gehen kann. Interpretationen von PL-Sprachen brauchen eine viel genauere Semantik.

### 266. Interpretationen von PL-Sprachen

Die Semantik von PL-Sprachen kann man sehr genau definieren, indem man mengentheoretische Begriffe zugrundelegt. Wir werden aber diese genaue Definition auslassen und stattdessen die Interpretationen und den Wahrheitsbegriff der PL-Sprachen auf informelle Weise einführen.

> Eine ausführliche Darstellung der formalen Semantik der Prädikatenlogik einschließlich der mengentheoretischen Hintergründe finden Sie in Ruppen 1997, IV. Teil.
>
> Auch ohne mengentheoretische Details lässt sich die formale Semantik der PL-Sprachen mit einiger Genauigkeit behandeln, siehe etwa Mates 1969, 4. Kapitel, oder Beckermann 2003, Kapitel 24.
>
> So oder so erfordert die formal korrekte Einführung der Semantik von PL-Sprachen einen formalen Aufwand, der in einer Pflichtveranstaltung für Philosophiestudierende besser zugunsten sinnvollerer Themen eingespart wird.

<!-- p. 99 | pdf 107 -->
### 267. Interpretationen von PL-Sprachen

△ **Jede Interpretation *I* einer PL-Sprache *L* erfordert drei Teile:**

**1) Die Angabe einer nichtleeren Grundmenge *D* von Gegenständen / Individuen (*D* nennt man manchmal auch den Wertebereich der Variablen, oder auch den Träger der Interpretation).**

**2) Die Zuweisung eines bestimmten Gegenstandes / Individuums aus *D* zu jeder Individuenkonstante von *L*.**

**3) Die Zuweisung einer bestimmten Eigenschaft bzw. einer bestimmten Relation zu jedem Prädikatbuchstaben von *L*.**

Schauen wir uns diese drei Teile einzeln an.

### 268. Interpretationen von PL-Sprachen

1) Die Angabe einer nichtleeren Grundmenge *D* von Gegenständen / Individuen (*D* nennt man manchmal auch den Wertebereich der Variablen, oder auch den Träger der Interpretation).

Diese Menge muss aus Gegenständen / Individuen in genau dem sehr weiten Sinne bestehen, wie Sie das bereits gewohnt sind. *D* kann die Menge aller Bundesbürger sein, die Menge der natürlichen Zahlen, die Menge {Eiffelturm, Brandenburger Tor, Tower Bridge} oder jede beliebige andere Menge.

2) Die Zuweisung eines bestimmten Gegenstandes / Individuums aus *D* zu jeder Individuenkonstante von *L*.

Jeder Individuenkonstante wird also genau ein Element aus *D* zugeordnet. Umgekehrt gilt *nicht*, dass jedes Element aus *D* einen Namen in der Sprache *L* besitzen muss. Außerdem können auch verschiedenen Individuenkonstanten dasselbe Element aus *D* zugeordnet werden.

Wir geben die Interpretation der Individuenkonstanten in ähnlicher Weise an, wie wir es von intensionalen Interpretationen von AL gewohnt sind.

- $a$: Angela Merkel
- $b$: Gregor Gysi
- $c$: Hans-Christian Ströbele
- $d$: Angela Merkel

3) Die Zuweisung einer bestimmten Eigenschaft bzw. einer bestimmten Relation zu jedem Prädikatbuchstaben von *L*.

Einstelligen Prädikatbuchstaben werden dabei Eigenschaften zugeordnet, zweistelligen Prädikatbuchstaben zweistellige Relationen (wie z.B. Vater-Sein-von, Größer-Sein), usw.

Relationen und Eigenschaften sind wieder im weitesten Sinne aufzufassen. Es kann sich dabei auch z.B. um Zustände oder Tätigkeiten (Rauchen) handeln. Entscheidend ist, dass es sich um Eigenschaften handelt, die jeder Gegenstand aus *D* eindeutig entweder besitzt oder nicht besitzt, bzw. um Relationen, die zwischen Gegenständen aus *D* eindeutig entweder bestehen oder nicht bestehen.

Man kann die Interpretation der Prädikate am besten mit Hilfe offener Sätze angeben.

<!-- p. 100 | pdf 108 -->
### 269. Interpretationen von PL-Sprachen: Offene Sätze

Als einen *offenen Satz* bezeichnet man in natürlichen wie in formalen Sprachen einen sprachlichen Ausdruck, der alleine keinen vollständigen Aussagesatz bildet, aber durch Hinzufügen eines oder mehrerer Individuenausdrücke zu einem solchen werden kann. „… ist ein Millionär“ ist z.B. ein offener Satz, ebenso wie „… liebt ---“. Gerade an mehreren Stellen offene Sätze kann man auch in natürlichen Sprachen oft gut mit Hilfe von Variablen angeben, z.B. als „x ist ein Millionär“ oder „x liebt y“.

Da man Eigenschaften und Relationen mit Hilfe offener Sätze bezeichnen kann, gehen wir genau so vor, wenn wir die Interpretationen der Prädikatbuchstaben angeben.

- $Vxy$: x ist der Vater von y.
- $Rx$: x raucht.
- $Gxy$: x ist größer als y.
- $Zxyz$: x liegt zwischen y und z.

### 270. Beispiel: die Sprache $L_L$

Als Beispiel betrachten wir die Sprache $L_L$. Sie soll

die Individuenkonstanten „$j_1$“, „$v$“, „$j_2$“, „$a$“, „$l$“ und „$r$“,

die einstelligen Prädikatbuchstaben „$D$“ und „$H$“

und den zweistelligen Prädikatbuchstaben „$K$“ besitzen.

### 271. Die Interpretation der Sprache $L_L$

Wir geben nun die Interpretation $I_L$ der Sprache $L_L$ an.

Die Grundmenge $D_L$ der Interpretation sei:

$$\{\text{Joe Dalton}, \text{William Dalton}, \text{Jack Dalton}, \text{Averell Dalton}, \text{Lucky Luke}, \text{Rantanplan}\}$$

> Wir werden dabei so tun, als ob die Elemente dieser Menge wirkliche Menschen bzw. ein wirklicher Hund wären.

Individuenkonstanten und Prädikatbuchstaben werden wie folgt interpretiert:

- $j_1$: Joe Dalton
- $v$: William Dalton
- $j_2$: Jack Dalton
- $a$: Averell Dalton
- $l$: Lucky Luke
- $r$: Rantanplan

- $Dx$: x ist ein Dalton.
- $Hx$: x ist ein Hund.
- $Kxy$: x ist kleiner als y.

> Erinnern Sie sich: In unserer Syntax für PL-Sprachen sind die Buchstaben „w“, „x“, „y“ und „z“ für Variablen reserviert. Deshalb habe ich für William Dalton die Individuenkonstante „v“ gewählt.

<!-- p. 101 | pdf 109 -->
### 272. Die Interpretation der Sprache $L_L$

> [Abbildung: Standbild im Comic-/Filmstil mit dem Titelschild „LUCKY LUKE und die Sprache $L_L$“. Vier Gestalten in schwarz-gelb quergestreiften Hemden, mit roten Banditentüchern vor dem Gesicht und Cowboyhüten stehen mit erhobenen Händen in einer Reihe vor einem Saloon; von links nach rechts beschriftet: $j_1$, $v$, $j_2$, $a$. Rechts daneben zielt ein Cowboy mit gezogenem Revolver auf sie; ein Pfeil von rechts zeigt auf ihn und ist mit $l$ beschriftet (Lucky Luke). Zu seinen Füßen kauert zusammengerollt ein Hund mit spitzem Haarschopf, geschlossenen Augen und großer schwarzer Nase neben einem hellbraunen, sackartigen Bündel; ein Pfeil zeigt auf ihn und ist mit $r$ beschriftet (Rantanplan).]

> Dieses Bild wird für weitere Beispiele unsere maßgebliche Auskunftsquelle über die Kleiner-als-Relation auf $D_L$ sein.

### 273. Wahrheit in PL-Sprachen

Für bestimmte Sätze von PL ist es sehr einfach, anzugeben, wann sie bzgl. der Interpretation *I* wahr sind:

△ **Wenn Γ ein n-stelliger Prädikatbuchstabe von *L* ist und $\alpha_1, \ldots, \alpha_n$ Individuenkonstanten von *L* sind, dann ist $\Gamma\alpha_1 \ldots \alpha_n$ genau dann bezüglich der Interpretation *I* wahr, wenn die Relation, die dem Prädikatbuchstaben Γ durch *I* zugeordnet wird, zwischen den Gegenständen, die den Individuenkonstanten $\alpha_1, \ldots, \alpha_n$ durch *I* zugeordnet werden, tatsächlich besteht (bzw., falls n = 1, wenn der $\alpha_1$ zugeordnete Gegenstand die Γ zugeordnete Eigenschaft tatsächlich besitzt).**

Auch in der Semantik der PL-Sprachen gilt das Prinzip der Zweiwertigkeit: Alle Sätze, die nicht wahr sind, sind falsch.

Z.B.: Der Satz „$Hr$“ von $L_L$ ist wahr im Hinblick auf die Interpretation $I_L$, weil der der Individuenkonstanten „r“ zugeordnete Gegenstand, Rantanplan, die dem Prädikatbuchstaben „H“ zugeordnete Eigenschaft, ein Hund zu sein, tatsächlich besitzt.

Ebenso ist „$Krj_1$“ wahr bezüglich $I_L$, weil Rantanplan tatsächlich kleiner als Joe Dalton ist.

„$Hv$“ ist falsch bezüglich $I_L$, weil William Dalton nicht die Eigenschaft besitzt, ein Hund zu sein.

### 274. Wahrheit in PL-Sprachen

Die Syntax der PL-Sprachen erlaubt aussagenlogische Verknüpfungen von Sätzen dieser Sprachen zu neuen Sätzen. Diese sollen natürlich wahrheitsfunktional funktionieren, genauso wie in AL.

△ **Seien φ und ψ Sätze der PL-Sprache *L* und *I* eine Interpretation dieser Sprache. Dann gilt:
$\varphi \wedge \psi$ ist wahr bzgl. *I* genau dann, wenn sowohl φ als auch ψ wahr bzgl. *I* sind,
$\varphi \vee \psi$ ist wahr bzgl. *I* genau dann, wenn mindestens einer der Sätze φ und ψ wahr bzgl. *I* ist,
$\varphi \rightarrow \psi$ ist wahr bzgl. *I* genau dann, wenn φ nicht wahr bzgl. *I* ist oder ψ wahr bzgl. *I* ist (oder beides),**
<!-- p. 102 | pdf 110 -->
**$\varphi \leftrightarrow \psi$ ist wahr bzgl. *I* genau dann, wenn φ und ψ bzgl. *I* dieselben Wahrheitswerte haben und
$\neg\varphi$ ist wahr bzgl. *I* genau dann, wenn φ nicht wahr bzgl. *I* ist.**

Z.B.: Der Satz „$Hj_1 \rightarrow Dj_1$“ ist wahr bzgl. $I_L$, weil „$Hj_1$“ nicht wahr ist bzgl. $I_L$.

Der Satz „$Kva \wedge Dr$“ ist nicht wahr bzgl. $I_L$, weil „$Dr$“ nicht wahr bzgl. $I_L$ ist.

### 275. Wahrheit in PL-Sprachen: Existenzsätze

Bleibt noch zu klären, wann quantifizierte Sätze wahr bezüglich einer Interpretation sind. Intuitiv dürfte dies schon ziemlich klar sein.

Z.B. soll „$\exists x\, Hx$“, wie wir gesehen haben, eine Formalisierung der Aussage sein, dass es mindestens einen Hund gibt.

Ebenso dürfte klar sein, dass „$\exists x\, Kxv$“ dafür stehen soll, dass es irgendjemanden oder irgendetwas gibt, das kleiner ist als William Dalton.

△ **Sei φ(α) ein Ausdruck einer PL-Sprache *L*, in der nur die Variable α frei vorkommt. Dann ist der Satz von *L* $\exists\alpha\,\varphi(\alpha)$ genau dann wahr in Bezug auf die Interpretation *I*, wenn es in deren Grundmenge *D* mindestens ein Element gibt, dem man die Eigenschaft, die durch den φ(α) entsprechenden offenen Satz ausgedrückt wird, wahrheitsgemäß zuschreiben kann.**

Angewandt auf das Beispiel des Satzes „$\exists x\, Kxv$“ unter der Interpretation $I_L$:

„$\exists x\, Kxv$“ ist genau dann wahr bzgl. $I_L$, wenn es mindestens ein Element in $D_L$ gibt, dem die durch „… ist kleiner als William Dalton“ ausgedrückte Eigenschaft wahrheitsgemäß zugeschrieben werden kann. So ein Element gibt es in $D_L$ (z.B. Joe Dalton).

> Offensichtlich ist der Begriff der Eigenschaft hier wirklich sehr weit zu fassen. Kleiner-Sein-als-William-Dalton ist unter vielerlei philosophischen Gesichtspunkten eine etwas seltsame Eigenschaft. Hier kommt es aber nur darauf an, dass unsere Definition verständlich und eindeutig ist. Eine philosophisch elegantere Definition lässt sich durch mengentheoretische Begriffe erreichen, aber diese ist nicht so leicht verständlich wie die vorliegende.

Weitere Beispiele:

„$\exists y\, \neg Kyl$“ ist wahr bzgl. $I_L$, weil es ein Element in $D_L$ gibt (nämlich Averell Dalton), dem die durch den folgenden offenen Satz ausgedrückte Eigenschaft wahrheitsgemäß zugeschrieben werden kann: „Es ist nicht der Fall, dass … kleiner ist als Lucky Luke“.

„$\exists x\,(Dx \wedge Hx)$“ ist falsch bzgl. $I_L$, weil es kein Element in $D_L$ gibt, dem wahrheitsgemäß die durch „x ist ein Dalton und x ist ein Hund“ ausgedrückte Eigenschaft zugeschrieben werden kann.

Bemerkung: Innerhalb der Wirkungsbereiche von Quantoren sollen natürlich für die aussagenlogischen Junktoren dieselben Regeln gelten, wie wir sie auch bei nicht-quantifizierten Sätzen längst kennen.

Das heißt zum Beispiel: Seien φ(x) und ψ(x) Sätze einer PL-Sprache, in denen nur die Variable „x“ frei vorkommt. Dann kann einem Gegenstand die durch $\varphi(x) \rightarrow \psi(x)$ ausgedrückte Eigenschaft genau dann wahrheitsgemäß zugeschrieben werden, wenn ihm die durch φ(x) ausgedrückte Eigenschaft *nicht* wahrheitsgemäß zugeschrieben werden kann oder ihm die durch ψ(x) ausgedrückte Eigenschaft wahrheitsgemäß zugeschrieben werden kann (oder beides).

Entsprechend für die anderen Junktoren.

<!-- p. 103 | pdf 111 -->
Beispiel: „$\exists x\,(Dx \rightarrow Hx)$“ ist wahr bzgl. $I_L$, weil es ein Element von $I_L$<!-- sic --> gibt (z.B. Lucky Luke), dem die durch den offenen Satz, der „$Dx$“ entspricht, ausgedrückte Eigenschaft nicht wahrheitsgemäß zugeschrieben werden kann.

### 276. Wahrheit in PL-Sprachen: Allsätze

Analog zum Existenzquantor werden wir jetzt auch die Wahrheitsbedingungen für allquantifizierte Aussagen angeben:

△ **Sei φ(α) ein Ausdruck einer PL-Sprache *L*, in der nur die Variable α frei vorkommt. Dann ist der Satz von *L* $\forall\alpha\,\varphi(\alpha)$ genau dann wahr in Bezug auf die Interpretation *I*, wenn man allen Elementen ihrer Grundmenge *D* die Eigenschaft, die durch den φ(α) entsprechenden offenen Satz ausgedrückt wird, wahrheitsgemäß zuschreiben kann.**

Z.B. ist „$\forall x\,(Hx \vee Krx)$“ wahr bzgl. $I_L$, weil man allen Elementen aus $D_L$ die durch den offenen Satz „x ist ein Hund oder Rantanplan ist kleiner als x“ ausgedrückte Eigenschaft wahrheitsgemäß zuschreiben kann.

„$\forall x\,(Dx \rightarrow \neg Kxr)$“ ist wahr bzgl. $I_L$, weil man allen Elementen aus $D_L$ die durch den offenen Satz „Wenn x ein Dalton ist, dann ist x nicht kleiner als Rantanplan“ ausgedrückte Eigenschaft wahrheitsgemäß zuschreiben kann.

„$\forall x\, Krx$“ ist falsch bzgl. $I_L$, weil die durch den entsprechenden offenen Satz ausgedrückte Eigenschaft nicht *allen* Elementen von $D_L$ wahrheitsgemäß zugeschrieben werden kann (nämlich nicht Rantanplan).

„$\forall x\,(Kxr \rightarrow Dx)$“ ist schon allein deshalb wahr bzgl. $I_L$, weil man keinem Element von $D_L$ die Eigenschaft, kleiner zu sein als Rantanplan wahrheitsgemäß zuschreiben kann.

Allgemein gilt übrigens:

In allen PL-Sprachen sind Sätze der Form $\forall x\,(\varphi(x) \rightarrow \psi(x))$ unter solchen Interpretationen, bei denen kein einziges Element der Grundmenge die φ(x) entsprechende Eigenschaft besitzt, immer wahr.

### 277. Wahrheit in PL-Sprachen: Verschränkte Quantifikation

Betrachten Sie nun den folgenden Satz von $L_L$:

$$\forall x\,(Dx \rightarrow \exists y\, Kyx)$$

Für die Wahrheitsbedingungen dieses Satzes unter der Interpretation $I_L$ gilt nichts grundsätzlich anderes, als was wir ganz allgemein über Allsätze gesagt haben: Er ist wahr bzgl. $I_L$, wenn die durch den dem Ausdruck „$Dx \rightarrow \exists y\, Kyx$“ entsprechenden offenen Satz ausgedrückte Eigenschaft allen Elementen von $D_L$ wahrheitsgemäß zugeschrieben werden kann.

Achtung: der dem Ausdruck „$Dx \rightarrow \exists y\, Kyx$“ entsprechende offene Satz ist natürlich nur an den Stellen offen, an denen hier das „x“ (ungebunden) vorkommt. Es ist also der Satz:

„Wenn x ein Dalton ist, dann gibt es etwas, das kleiner ist als x.“

Da dies auf alle Elemente von $D_L$ zutrifft, ist „$\forall x\,(Dx \rightarrow \exists y\, Kyx)$“ wahr bzgl. $I_L$.

$$\exists y\, \forall z\, \neg Kzy$$

Der vorstehende Satz ist wahr bzgl. $I_L$, wenn es in $D_L$ ein Element gibt, dem der offene Satz „Für alle Gegenstände/Individuen gilt, dass sie nicht kleiner als y sind“ wahrheitsgemäß zugeschrieben werden kann. Da es ein solches Individuum in $D_L$ gibt (nämlich Rantanplan) ist „$\exists y\, \forall z\, \neg Kzy$“ bzgl. $I_L$ wahr.

<!-- p. 104 | pdf 112 -->
### 278. Mögliche syntaktische Abwegigkeiten in den PL-Sprachen

Ein Hinweis: Die syntaktischen Regeln der Prädikatenlogik verbieten es nicht, quantifizierte Ausdrücke zu bilden, bei denen im Wirkungsbereich eines Quantors die entsprechende Variable überhaupt nicht vorkommt, z.B. „$\exists x\, Da$“. Es ergibt nicht besonders viel Sinn, solche Sätze zu bilden. Sie sind als gleichbedeutend mit den entsprechenden unquantifizierten Sätzen zu behandeln, im Beispiel also als gleichbedeutend mit „$Da$“.

### 279. Einige erste Beispiele für die Bedeutung quantifizierter Sätze

Im folgenden wollen wir noch einige Beispiele für quantifizierte Sätze aus PL-Sprachen betrachten. Die Semantik der PL-Sprachen, wie wir sie nun informell eingeführt haben, verleiht ihnen jeweils bestimmte Bedeutungen (bei bestimmten gegebenen Interpretationen).

Jedes Beispiel setzt eine bestimmte Sprache und eine bestimmte Interpretation voraus. Wir werden die jeweilige Sprache nicht gesondert angeben, da jeweils aus der Angabe der Interpretation hervorgeht, welche Individuenkonstanten und Prädikatbuchstaben die entsprechende Sprache besitzen muss.

### 280. Beispiel

$$\forall x\,(Fx \rightarrow \neg Gx)$$

*Interpretation*
- $D$: Menge aller Menschen.
- $Fx$: x ist ein katholischer Priester.
- $Gx$: x ist verheiratet.

> Der Satz bedeutet bei der gegebenen Interpretation in erster Näherung:
> Für alle x gilt: Wenn x katholischer Priester ist, dann ist x unverheiratet.
>
> Anders ausgedrückt:
> Alle katholischen Priester sind unverheiratet

### 281. Beispiel

$$\forall x\, Lxh$$

*Interpretation*
- $D$: Menge aller Menschen.
- $h$: Hans.
- $Lxy$: x liebt y.

> Der Satz bedeutet bei der gegebenen Interpretation in erster Näherung:
> Für alle x gilt: x liebt Hans.
>
> Anders ausgedrückt:
> Alle lieben Hans.

### 282. Beispiel

$$\exists x\, \forall y\, Lyx$$

*Interpretation*
- $D$: Menge aller Menschen.
- $Lxy$: x liebt y.

<!-- p. 105 | pdf 113 -->
> Der Satz bedeutet bei der gegebenen Interpretation in erster Näherung:
> Es gibt ein x, so dass alle dieses x lieben.
>
> Anders ausgedrückt:
> Es gibt einen Menschen, der von allen geliebt wird.

### 283. Beispiel

$$\forall x\, \exists y\, Lyx$$

*Interpretation*
- $D$: Menge aller Menschen.
- $Lxy$: x liebt y.

> Der Satz bedeutet bei der gegebenen Interpretation in erster Näherung:
> Für jedes x gibt es ein y, so dass y x liebt.
>
> Anders ausgedrückt:
> Jeder Mensch wird von jemandem geliebt.

### 284. Beispiel

$$\neg\exists x\, \forall y\, Kyx$$

*Interpretation*
- $D$: Menge $\mathbb{N}$ der natürlichen Zahlen.
- $Kxy$: x < y

> Unter dieser Interpretation bedeutet der Satz in erster Näherung: Es gibt kein x, so dass alle y kleiner sind als x.
>
> Anders ausgedrückt bedeutet der Satz also, dass es keine größte natürliche Zahl gibt.

### 285. Beispiel

$$\exists x\,(Gx \wedge Px)$$

*Interpretation*
- $D$: Menge $\mathbb{N}$ der natürlichen Zahlen.
- $Gx$: x ist eine gerade Zahl.
- $Px$: x ist eine Primzahl.

> Der Satz bedeutet bei der gegebenen Interpretation in erster Näherung:
> Es gibt ein x, so dass x gerade ist und x eine Primzahl ist.
>
> Anders ausgedrückt:
> Es gibt eine gerade Primzahl.

### 286. Beispiel

$$\exists x\, \exists y\,(Kxy \wedge Sxy)$$

*Interpretation*
- $D$: Menge aller Menschen.
- $Kxy$: x ist kleiner als y.
- $Sxy$: x ist stärker als y.

<!-- p. 106 | pdf 114 -->
> Der Satz bedeutet bei der gegebenen Interpretation in erster Näherung:
> Es gibt ein x, so dass es ein y gibt, so dass x kleiner ist als y und x stärker ist als y.
>
> Anders ausgedrückt:
> Es kommt vor, dass der/die Kleinere der/die Stärkere ist.

### 287. Beispiel

$$\forall x\, \forall y\, (Fy \wedge Kxy \rightarrow Lxy)$$

Interpretation
$D$: Menge aller Menschen und Bücher.
$Fx$: x ist ein Buch von Jonathan Safran Foer.
$Kxy$: x kennt y.
$Lxy$: x liebt y.

> Der Satz bedeutet bei der gegebenen Interpretation in erster Näherung:
> Für jedes x und für jedes y gilt: Wenn y ein Buch von JSF ist und x kennt y, dann liebt x y.
>
> Anders ausgedrückt:
> Jede/r liebt alle Bücher von Jonathan Safran Foer, die er/sie kennt.

## 11. Prädikatenlogik: Formalisierungen

### 288. Formalisierungen mit Hilfe von PL-Sprachen

Die Formalisierung eines umgangssprachlichen Satzes funktioniert im Grunde in der Prädikatenlogik nicht viel anders als in der Aussagenlogik.

Sie müssen eine passende PL-Sprache $L$ definieren, für diese eine Interpretation angeben und den Satz dann in der Sprache $L$ ausdrücken.

Beispiel:

Jeder Informatikstudent hat einen Computer.

Wir verwenden die Sprache $L_C$, die zwei einstellige Prädikatbuchstaben „I“ und „C“ besitzt. In $L_C$ lautet der Satz dann

$$\forall x\, (Ix \rightarrow Cx)$$

sofern man die folgende Interpretation $I_C$ zugrundelegt:

$D_C$: Menge aller Studenten
$Ix$: x ist ein Informatikstudent.
$Cx$: x hat einen Computer.

Sie sehen, dass man dem formalisierten Satz und der Interpretation ansehen kann, über welches deskriptive Vokabular die entsprechende Sprache verfügen muss. Wir werden deshalb von jetzt an die Sprache nicht mehr ausdrücklich angeben; das vereinfacht die Formalisierung.

<!-- p. 107 | pdf 115 -->
Jeder Informatikstudent hat einen Computer.

$$\forall x\, (Ix \rightarrow Cx)$$

$D$: Menge aller Studenten
$Ix$: x ist ein Informatikstudent.
$Cx$: x hat einen Computer.

Sie erkennen außerdem, dass man $D$, den Wertebereich der Variablen, ruhig größer hätte wählen können: Z.B. hätte man auch die Menge aller Menschen wählen können.

### 289. Der Standard-Träger $D_K$

Da dies bei den meisten Formalisierungen so ist, verabreden wir einen Standard-Träger $D_K$.

$D_K$ ist die Menge aller konkreten Gegenstände und Individuen. Sie soll alle und nur die Dinge umfassen, die raumzeitlich lokalisierbar sind: Physische Gegenstände, vergangene und gegenwärtige Vorgänge, Ereignisse, Menschen, Tiere, etc.

Nur abstrakte Gegenstände sind nicht in $D_K$ enthalten (z.B. Zahlen, Mengen, Formen).

Wir treffen die folgende Vereinbarung: Wenn bei einer Interpretation kein Träger angegeben wird, ist immer der Träger $D_K$ gemeint.

D.h.: Wenn wir Aussagen über abstrakte Gegenstände formalisieren wollen, müssen wir weiterhin ausdrücklich einen Träger der Interpretation angeben. Dasselbe werden wir auch tun, wenn wir uns nicht sicher sind, ob die Dinge, die zum Wertebereich gehören sollen, in $D_K$ sind.

> Diese Übereinkunft ist keineswegs eine Standardkonvention der Logik oder dergleichen. Sie gilt nur für diese Vorlesung (einschließlich der Übungen und Klausur).
>
> Warum vereinbaren wir nicht einfach, dass der Standard-Träger *alle* Gegenstände und Individuen überhaupt umfasst? Dies hat zwei Gründe: Erstens ist es bei der Formalisierung von Aussagen über abstrakte Gegenstände oft hilfreich, sich bewusst Gedanken darüber zu machen, was genau der Wertebereich der Quantoren sein soll. Zweitens kann es laut Mengentheorie eine solche Menge nicht geben.

### 290. Formalisierungen mit Hilfe von PL-Sprachen

Diese Konvention vereinfacht die Angabe einer Formalisierung weiter:

Jeder Informatikstudent hat einen Computer.

$$\forall x\, (Ix \rightarrow Cx)$$

$Ix$: x ist ein Informatikstudent.
$Cx$: x hat einen Computer.

Achtung! Manche gelungene Formalisierungen werden durch die Erweiterung des Trägers zerstört:

Alle Menschen sind sterblich.

$$\forall x\, Sx$$

$D$: Menge aller Menschen
$Sx$: x ist sterblich.

Dieselbe Aussage kann aber bei Zugrundelegung des Standard-Trägers $D_K$ formalisiert werden.

<!-- p. 108 | pdf 116 -->
Alle Menschen sind sterblich.

$$\forall x\, (Mx \rightarrow Sx)$$

$Mx$: x ist ein Mensch.
$Sx$: x ist sterblich.

### 291. Relativierte All- und Existenzaussagen

Sätze wie „$\forall x\, (Mx \rightarrow Sx)$“ nennt man relativierte Allaussagen. Sie sind in der Anwendung eher der Normalfall, da man selten behaupten will, dass ein Prädikat auf wirklich Alles zutrifft.

Auch Existenzsätze treten oft in relativierter Form auf, die jedoch ein bisschen anders aussieht:

Es gibt mindestens einen Menschen, der größer ist als 2m.

$$\exists x\, (Mx \wedge Zx)$$

$Mx$: x ist ein Mensch.
$Zx$: x ist größer als 2m.

Eine Relativierung muss aber nicht ausdrücklich angegeben werden, wenn sie schon im Prädikat enthalten ist:

Es gibt einen Ort, an dem sich der Gral befindet.

$$\exists x\, Ogx$$

$g$: der Gral
$Oxy$: x befindet sich am Ort y.

### 292. Formalisierung und argumentativer Kontext

Passen Sie Ihre Formalisierungen den Erfordernissen des argumentativen Kontexts an, d.h. achten Sie darauf, welche logischen Beziehungen durch ihre Formalisierung erfasst werden sollen. Wenn Sie z.B. den Schluss

$$\begin{array}{l} \text{Hans ist jetzt in Paris.} \\ \hline \text{Irgendjemand ist jetzt in Paris.} \end{array}$$

formalisieren möchten, genügt ein einstelliges Prädikat:

$$\begin{array}{l} Ph \\ \hline \exists x\, Px \end{array}$$

$h$: Hans
$Px$: x ist jetzt in Paris.

Geht es aber um den Schluss

<!-- p. 109 | pdf 117 -->
$$\begin{array}{l} \text{Hans ist jetzt in Paris.} \\ \text{Marie ist jetzt in Paris.} \\ \hline \text{Es gibt einen Ort, an dem sich jetzt sowohl Hans als auch Marie befinden.} \end{array}$$

so brauchen Sie ein zweistelliges Prädikat mit einer Personen- und einer Ortsstelle:

$$\begin{array}{l} Ohp \\ Omp \\ \hline \exists x\, (Ohx \wedge Omx) \end{array}$$

$h$: Hans
$m$: Marie
$p$: Paris
$Oxy$: x befindet sich am Ort y.

### 293. Formalisierung und argumentativer Kontext

Berücksichtigen Sie auch die Möglichkeit, dass sich in einem Prädikat der natürlichen Sprache schon ein quantifizierter Ausdruck verbergen kann:

$$\begin{array}{l} \text{Peter ist allbekannt.} \\ \hline \text{Hans kennt Peter.} \end{array}$$

Um die Logik hinter diesem Argument offen zu legen, genügt es sicher nicht, „allbekannt“ durch ein einstelliges Prädikat zu formalisieren. Fassen Sie „x ist allbekannt“ stattdessen als Kurzform von „jeder kennt Peter“ auf („jeder“ innerhalb einer durch den Kontext gegebenen Gemeinschaft):

$$\begin{array}{l} \forall x\, Kxp \\ \hline Khp \end{array}$$

$D$: Menge aller Menschen in der Region Hannover
$h$: Hans
$p$: Peter
$Kxy$: x kennt y.

### 294. Ein Prädikat oder mehrere?

Es muss zuweilen auch nach dem Kontext entschieden werden, ob man eine Aussage als Zuschreibung eines Prädikats oder mehrerer Prädikate auffassen will.

George ist ein reicher Millionärssohn.

$$Wg$$

$g$: George
$Wx$: x ist ein reicher Millionärssohn.

George ist ein reicher Millionärssohn.

$$Rg \wedge Mg$$

<!-- p. 110 | pdf 118 -->

$g$: George
$Rx$: x ist reich.
$Mx$: x ist ein Millionärssohn.

### 295. Ein Prädikat oder mehrere?

Konjunktionen von Prädikaten haben im Deutschen verschiedene Erscheinungsformen.

Ed ist ein Pferd, das sprechen kann.
Ed kann sprechen, obwohl er ein Pferd ist.
Ed ist ein sprechendes Pferd.

$$Pe \wedge Se$$

$e$: Ed
$Px$: x ist ein Pferd.
$Sx$: x kann sprechen.

### 296. Ein Prädikat oder mehrere?

Besonders häufig erscheinen Konjunktionen von Prädikaten als Relativsatzkonstruktionen („ein Pferd, das sprechen kann“) und als Kombinationen von Attribut und Prädikatsnomen („… ist ein berühmter Philosoph“ = „… ist berühmt und ist ein Philosoph“).

Aber Vorsicht! Nicht jede Kombination von Attribut und Prädikatsnomen drückt eine Konjunktion von Prädikaten aus:

Peter ist ein ehemaliger Schüler.

Dieser Satz bedeutet *nicht* einfach „Peter ist ehemalig und Peter ist ein Schüler“. Ein ehemaliger Schüler ist im Allgemeinen *kein* Schüler. Diesen Satz dürfen Sie deshalb nur mit *einem* Prädikat mit der Interpretation „… ist ein ehemaliger Schüler“ formalisieren.

Wenn Sie eine Aussage durch eine Konjunktion von Prädikaten wiedergeben, müssen Sie sich deshalb überlegen, ob wirklich jedes Prädikat auch einzeln Bestandteil der Aussage ist.

### 297. Ein Prädikat oder mehrere?

Ein ähnliches Beispiel ist:

Merkur ist ein kleiner Planet.

Dieser Satz ist *nicht* gelungen formalisiert durch

$$Km \wedge Pm$$

$m$: Merkur
$Kx$: x ist klein.
$Px$: x ist ein Planet.

Es ist nämlich etwas merkwürdig, über etwas, das mehr als 4800 km Durchmesser hat, zu sagen, es sei klein. Eine Möglichkeit für eine gelungene Formalisierung wäre:

<!-- p. 111 | pdf 119 -->
$$Km \wedge Pm$$

$m$: Merkur
$Px$: x ist ein Planet.
$Kx$: Für einen Planeten ist x vergleichsweise klein.

### 298. Quantifizierte Aussagen: „alle“, „jede(r)“

Die Ausdrücke „alle“, „jede(r)“ sind im Normalfall als Allaussagen zu formalisieren. Dabei folgt auf sie oft unmittelbar ein Ausdruck, der die Relativierung der Allaussage angibt. Wo dies nicht der Fall ist, ist fast immer eine Relativierung durch den Kontext impliziert, die bei der Formalisierung explizit gemacht werden muss.

Alle Städte sind Gemeinden.

$$\forall x\, (Sx \rightarrow Gx)$$

$Sx$: x ist eine Stadt.
$Gx$: x ist eine Gemeinde.

Jeder muss sich gegen Pocken impfen lassen.

$$\forall x\, (Mx \rightarrow Px)$$

$Mx$: x ist ein Mensch.
$Px$: x muss sich gegen Pocken impfen lassen.

### 299. Quantifizierte Aussagen: Allaussagen ohne quantifizierende Ausdrücke

In der deutschen Sprache können Allaussagen aber auch getroffen werden, ohne dass dies ausdrücklich durch quantifizierende Ausdrücke signalisiert wird, insbesondere durch Relativsätze.

Hunde, die bellen, beißen nicht.

$$\forall x\, (Hx \wedge Bx \rightarrow \neg Cx)$$

$Hx$: x ist ein Hund.
$Bx$: x bellt.
$Cx$: x beißt.

Wer ein Auto hat, braucht eine Versicherung.

$$\forall x\, (Ax \rightarrow Vx)$$

$Ax$: x hat ein Auto.
$Vx$: x braucht eine Versicherung.

### 300. Quantifizierte Aussagen: „Es gibt“, „existieren“

Vergessen Sie nicht, dass Existenzsätze in PL-Sprachen die Bedeutung „Es gibt mindestens ein …“ haben. Mit dieser Einschränkung können Sie Sätze mit „Es gibt …“ oder „existieren“ als Existenzsätze formalisieren.

<!-- p. 112 | pdf 120 -->
Säugetiere, die Eier legen, existieren tatsächlich.

$$\exists x\, (Sx \wedge Ex)$$

$Sx$: x ist ein Säugetier.
$Ex$: x legt Eier.

Es gibt einen Beamten, der für dieses Problem zuständig ist.

$$\exists x\, (Bx \wedge Zx)$$

$Bx$: x ist ein Beamter.
$Zx$: x ist für dieses Problem zuständig.

> Ob diese Formalisierungen genau den Gehalt der Ausgangsaussagen treffen, hängt davon ab, wie diese genau gemeint sind. Im ersten Fall ist es möglich, dass die Aussage so zu verstehen ist, dass die Existenz *mehrerer* solcher Tiere behauptet werden soll. Im zweiten Fall kann es sein, dass gesagt werden soll, es gebe *genau* einen Beamten, der für dieses Problem zuständig ist. In diesen Fällen würde die Bedeutung der vorliegenden Formalisierungen von der Bedeutung der natürlichsprachlichen Aussagen abweichen.

### 301. Quantifizierte Aussagen: „manche“, „einige“

Wenn man Aussagen, die die Ausdrücke „manche“ oder „einige“ verwenden, so versteht, dass sie das Vorliegen von mindestens einem so-und-so gearteten Fall behaupten, kann man Sie gelungen mit Hilfe des Existenzquantors formalisieren.

Der in solchen Aussagen meist zusätzlich enthaltene Gehalt, dass es *mehrere* so-und-so geartete Fälle gibt, geht bei einer solchen Formalisierung allerdings verloren.

Manche Katholiken wählen SPD.

$$\exists x\, (Kx \wedge Sx)$$

$Kx$: x ist katholisch.
$Sx$: x wählt SPD.

Einige Metallgegenstände schwimmen auf Wasser.

$$\exists x\, (Mx \wedge Wx)$$

$Mx$: x ist ein Metallgegenstand.
$Wx$: x schwimmt auf Wasser.

### 302. Quantifizierte Aussagen: „irgend…“

Zusammensetzungen mit „irgend…“ drücken im Allgemeinen Existenzsätze aus. Beachten Sie, dass z.B. „irgendjemand“ und „irgendwo“ zugleich eine bestimmte Relativierung beinhalten.

Irgendjemand war in meinem Büro.

$$\exists x\, (Mx \wedge Bx)$$

$Mx$: x ist ein Mensch.
$Bx$: x war in meinem Büro.

<!-- p. 113 | pdf 121 -->
Irgendwann wird Justus aufräumen.

$$\exists x\, (Zx \wedge Ajx)$$

$j$: Justus
$Zx$: x ist ein zukünftiger Zeitpunkt.
$Axy$: x räumt zum Zeitpunkt y auf.

> Im zweiten Beispiel ergibt sich die genaue Relativierung der Existenzaussage auf *zukünftige* Zeitpunkte natürlich nicht allein aus dem „irgendwann“, sondern auch aus der Zeitform des Verbs.

### 303. Quantifizierte Aussagen: „ein“

Beachten Sie, dass sehr oft auch der unbestimmte Artikel („ein[e]“) als Existenzquantifikation (also im Sinne von „irgendein[e]“) verstanden werden sollte:

Ein Journalist hat ein Buch geschrieben.

$$\exists x\, \exists y\, (Jx \wedge By \wedge Axy)$$

$Jx$: x ist ein Journalist.
$By$: y ist ein Buch.
$Axy$: x ist der Autor von y.

> Als Faustregel gilt: Ein Nomen, das in der natürlichen Sprache mit unbestimmtem Artikel vorkommt, ist *nicht* als Individuenkonstante zu übersetzen (sondern entweder als Existenzquantifikation wie im obenstehenden Beispiel oder als Bestandteil eines komplexen Prädikats, wie in „… hat ein Auto“).

### 304. Quantifizierte Aussagen: „irgend…“, „ein“

Achtung! Ausdrücke wie „irgendjemand“ und „ein(e)“ können im Deutschen *auch* verwendet werden, um Allaussagen zu machen (besonders im Zusammenhang von Bedingungssätzen).

Ein Hund, der bellt, beißt nicht.

$$\forall x\, (Hx \wedge Bx \rightarrow \neg Cx)$$

$Hx$: x ist ein Hund.
$Bx$: x bellt.
$Cx$: x beißt.

Wenn irgendeiner etwas Dummes sagt, kommt er in die Bildzeitung.

$$\forall x\, (Dx \rightarrow Bx)$$

$Dx$: x sagt etwas Dummes.
$Bx$: x kommt in die Bildzeitung.

### 305. Quantifizierte Aussagen: „kein“

Viele Aussagen mit „kein“ sind verneinte Existenzaussagen.

<!-- p. 114 | pdf 122 -->
Kein Mann kann schwanger werden.

$$\neg\exists x\, (Mx \wedge Sx)$$

$Mx$: x ist ein Mann.
$Sx$: x kann schwanger werden.

Dasselbe gilt für „niemand“, „nichts“, etc.

Niemand ist vollkommen.

$$\neg\exists x\, (Mx \wedge Vx)$$

$Mx$: x ist ein Mensch.
$Vx$: x ist vollkommen.

> Hier ist in dem Wort „niemand“ eine implizite Relativierung der Aussage auf Menschen enthalten.

### 306. Quantifizierte Bedingungssätze

Beachten Sie, dass die Wiedergabe von Bedingungssätzen durch die Subjunktion „→“, die in der Aussagenlogik etwas problematisch war, innerhalb von Allsätzen viel besser funktioniert.

Genauer gesagt: Sie ist meist ganz unproblematisch, wenn die gelungene Formalisierung eines Bedingungssatzes eine Subjunktion innerhalb des Quantors „$\forall x$“ beinhaltet, bei der sowohl im Antecedens als auch im Konsequens die Variable „x“ vorkommt.

Wenn ein Auto kein Benzin im Tank hat, dann fährt es nicht.

$$\forall x\, (Ax \wedge \neg Bx \rightarrow \neg Fx)$$

$Ax$: x ist ein Auto
$Bx$: x hat Benzin im Tank
$Fx$: x fährt.

Der Grund dafür ist, dass die Quantifikation sicherstellt, dass die Aussage eine ganze Klasse verschiedener Einzelfälle abdeckt. Es kann deshalb nicht wie bei der Aussagenlogik sein, dass die Kombination aus Antecedens und Konsequens nur „zufällig“ eine der zulässigen Kombinationen von Wahrheitswerten (w-w, f-w und f-f) besitzt. Da sich der Zusammenhang über den ganzen Wertebereich der Variablen „x“ erstreckt, ist er im Allgemeinen ein systematischer, der ein echtes Bedingungsverhältnis zwischen Antecedens und Konsequens widerspiegelt.

### 307. Quantifizierte Bedingungssätze

Viele Bedingungssätze lassen sich am besten so analysieren, dass sie eine implizite Quantifikation über (z.B. räumliche oder zeitliche) Gesamtheiten enthalten.

Wenn es eine Kirche am Ort gibt, dann gibt es auch eine Kneipe.

$Ox$: x ist eine Ortschaft.
$Kx$: In x gibt es eine Kirche.
$Lx$: In x gibt es eine Kneipe.

$$\forall x\, (Ox \wedge Kx \rightarrow Lx)$$

<!-- p. 115 | pdf 123 -->
Wenn es in Bielefeld regnet, dann sind wenig Menschen auf dem Jahnplatz.

$D_z$: Menge aller Zeitpunkte.
$Rx$: In Bielefeld regnet es zum Zeitpunkt x.
$Wx$: Zum Zeitpunkt x sind wenig Menschen auf dem Jahnplatz.

$$\forall x\, (Rx \rightarrow Wx)$$

### 308. Weitere Beispiele für prädikatenlogische Formalisierungen

In Ubbedissen kennt jeder jeden.

$Ux$: x wohnt in Ubbedissen.
$Kxy$: x kennt y.

$$\forall x\, \forall y\, (Ux \wedge Uy \rightarrow Kxy)$$

### 309. Weitere Beispiele für prädikatenlogische Formalisierungen

Jeder Philosoph kennt sich selbst.

$Px$: x ist ein Philosoph.
$Kxy$: x kennt y.

$$\forall x\, (Px \rightarrow Kxx)$$

### 310. Weitere Beispiele für prädikatenlogische Formalisierungen

Es gibt eine Philosophin, von der Peter alle Bücher gelesen hat.

$p$: Peter.
$Px$: x ist eine Philosophin.
$Bx$: x ist ein Buch.
$Axy$: x ist Autor/-in von y.
$Gxy$: x hat y gelesen.

$$\exists x\, (Px \wedge \forall y\, (By \wedge Axy \rightarrow Gpy))$$

### 311. Weitere Beispiele für prädikatenlogische Formalisierungen

Irgendjemandem wird Anke all ihre Besitztümer schenken.

$a$: Anke
$Bxy$: x besitzt y.
$Sxyz$: x wird y an z verschenken.

$$\exists x\, \forall y\, (Bay \rightarrow Sayx)$$

<!-- p. 116 | pdf 124 -->
Anke wird all ihre Besitztümer verschenken.

(Sprache und Interpretation wie oben.)

$$\forall x\, (Bax \rightarrow \exists y\, Saxy)$$

### 312. Weitere Beispiele für prädikatenlogische Formalisierungen

$$\begin{array}{l} \text{Roderigo liebt Desdemona, aber Desdemona liebt Roderigo nicht.} \\ \hline \text{Also wird Liebe nicht immer erwidert.} \end{array}$$

$Lxy$: x liebt y.
$r$: Roderigo.
$d$: Desdemona.

$$\begin{array}{l} Lrd \wedge \neg Ldr \\ \hline \neg \forall x\, \forall y\, (Lxy \rightarrow Lyx) \end{array}$$

### 313. Weitere Beispiele für prädikatenlogische Formalisierungen

$$\begin{array}{l} \text{Peter besitzt ein Auto.} \\ \hline \text{Es gibt etwas, das Peter besitzt.} \end{array}$$

$p$: Peter
$Ax$: x ist ein Auto.
$Bxy$: x besitzt y.

$$\begin{array}{l} \exists x\, (Ax \wedge Bpx) \\ \hline \exists x\, Bpx \end{array}$$

### 314. Weitere Beispiele für prädikatenlogische Formalisierungen

$$\begin{array}{l} \text{Alle Bürohäuser befinden sich in großen Städten.} \\ \hline \text{Alle Bürohäuser befinden sich in Städten.} \end{array}$$

$Bx$: x ist ein Bürohaus.
$Sx$: x ist eine Stadt.
$Gx$: x ist groß für eine Stadt.
$Oxy$: x befindet sich in y.

$$\begin{array}{l} \forall x\, (Bx \rightarrow \exists y\, (Sy \wedge Gy \wedge Oxy)) \\ \hline \forall x\, (Bx \rightarrow \exists y\, (Sy \wedge Oxy)) \end{array}$$

<!-- p. 117 | pdf 125 -->
## 12. Prädikatenlogik: Logik

### 315. Logische Wahrheit in PL-Sprachen

Die logische Wahrheit von Aussagen aus PL-Sprachen definieren wir wie folgt:

△ **Ist $L$ eine PL-Sprache und $\varphi$ ein Satz von $L$, dann ist $\varphi$ genau dann logisch wahr, wenn er bezüglich jeder Interpretation von $L$ wahr ist.**

> Natürlich ist „Interpretation“ in dem technischen Sinn zu verstehen, in dem wir diesen Begriff in Kapitel 10 eingeführt haben.

### 316. Logische Wahrheit in PL-Sprachen

Zur Erläuterung betrachten wir den folgenden Beispielsatz der einfachen PL-Sprache $L_{mini}$, die nur eine Individuenkonstante und einen einstelligen Prädikatbuchstaben besitzt:

$$Fa \rightarrow \exists x\, Fx$$

Jede Interpretation, bezüglich derer „Fa“ falsch ist, macht „$Fa \rightarrow \exists x\, Fx$“ wahr.

> Zur Erinnerung: Das liegt an der wahrheitsfunktionalen Definition von „→“: Wenn das Antecedens falsch ist, ist die Subjunktion als Ganzes wahr.

Bei jeder Interpretation, bezüglich derer „Fa“ wahr ist, muss es ein Element in $D$ geben, dem die dem Prädikatbuchstaben „F“ entsprechende Eigenschaft wahrheitsgemäß zugeschrieben werden kann. Jede solche Interpretation muss daher auch „$\exists x\, Fx$“ wahr machen und somit auch „$Fa \rightarrow \exists x\, Fx$“.

Insgesamt ist „$Fa \rightarrow \exists x\, Fx$“ also bezüglich jeder Interpretation überhaupt wahr. Also: „$Fa \rightarrow \exists x\, Fx$“ ist logisch wahr.

### 317. Logische Wahrheit in PL-Sprachen

Das bedeutet also: „$Fa \rightarrow \exists x\, Fx$“ ist wahr …

… bezüglich der Interpretation
$D$: Menge aller Städte
$a$: Paris
$Fx$: x liegt in Dänemark

… bezüglich der Interpretation
$D$: Menge $\mathbb{N}$ der natürlichen Zahlen
$a$: 2
$Fx$: x ist eine Primzahl

… und bezüglich *jeder* anderen Interpretation von $L_{mini}$.

<!-- p. 118 | pdf 126 -->

### 318. Logische Wahrheit in PL-Sprachen

Sie erkennen, dass es selbst für eine PL-Sprache mit wenig umfangreichem deskriptivem Vokabular unendlich viele verschiedene mögliche Interpretationen gibt.

Es gibt bei PL-Sprachen, anders als bei der Sprache AL, im Allgemeinen keine Möglichkeit, alle Interpretationen, oder auch nur alle für die Beurteilung eines bestimmten Satzes relevanten Interpretationen der Sprache aufzuzählen. (D.h. es gibt für PL-Sprachen kein Instrument, das Ähnliches für sie leisten könnte wie die Wahrheitstafeln für die Sprache AL.)

> Es gibt übrigens trotz dieser Schwierigkeit Verfahren, die in der Lage sind, alle logisch wahren Sätze einer gegebenen PL-Sprache $L$ zu erzeugen. In der Logik drückt man dies so aus: Die Menge der logisch wahren Sätze von $L$ ist *aufzählbar*.
>
> Allerdings gibt es *kein* Verfahren, das für PL-Sprachen nach endlich vielen Schritten entscheiden kann, ob ein gegebener Satz logisch wahr ist oder nicht. In der Terminologie der Logiker/innen: Die Menge der logisch wahren Sätze einer PL-Sprache $L$ ist *nicht entscheidbar*. (Vgl. Folie 358.)

Trotz dieser prinzipiellen Grenzen lässt sich jedoch viel über logische Wahrheit in PL-Sprachen herausfinden, wie wir sehen werden.

### 319. Deduktive Gültigkeit / logische Folgerung in PL-Sprachen

△ **Ein Argument in einer PL-Sprache $L$ heißt genau dann *deduktiv gültig*, wenn jede Interpretation von $L$, bezüglich derer alle Prämissen wahr sind, auch die Konklusion wahr macht.**

△ **Es seien $\varphi$ und $\psi$ Sätze der PL-Sprache $L$. Dann *folgt* $\psi$ genau dann *logisch* aus $\varphi$, wenn jede Interpretation von $L$, die $\varphi$ wahr macht, auch $\psi$ wahr macht.**

### 320. Das Symbol „⊨“:

Für die logische Wahrheit und die Beziehung der logischen Folgerung in PL-Sprachen benutzen wir dasselbe Symbol „⊨“, das Sie schon von der Sprache AL her kennen.

$$\vDash Fa \rightarrow \exists x\, Fx$$

… z.B. bedeutet, dass „$Fa \rightarrow \exists x\, Fx$“ logisch wahr ist.

Dagegen bedeutet

$$Fa \vDash \exists x\, Fx$$

dass „$\exists x\, Fx$“ aus „Fa“ logisch folgt.

### 321. Logische Wahrheit und logische Folgerung

Genau wie schon bei der Sprache AL gilt:

<!-- p. 119 | pdf 127 -->
Wenn $\varphi$ und $\psi$ Sätze einer PL-Sprache $L$ sind, gilt immer: Aus $\varphi$ folgt logisch $\psi$ genau dann, wenn $\varphi \rightarrow \psi$ ein logisch wahrer Satz ist.

Symbolisch: $\varphi \vDash \psi$ genau dann, wenn $\vDash \varphi \rightarrow \psi$.

> Der Beweis ist genau analog zu demjenigen des entsprechenden Satzes über die Sprache AL, vgl. Folie 104.

### 322. Inkonsistente Aussagen(mengen) in PL-Sprachen

△ **Ein Satz einer PL-Sprache $L$ heißt *inkonsistent*, wenn er bezüglich jeder Interpretation falsch ist.**

△ **Eine Menge $\Sigma$ von Sätzen einer PL-Sprache $L$ heißt *inkonsistent*, wenn bezüglich jeder Interpretation mindestens eine Aussage aus $\Sigma$ falsch ist.**

Z.B. ist die Menge {„$\exists x\, \neg Fx$“, „$\forall x\, Fx$“} von Sätzen von $L_{mini}$ inkonsistent.

> Denn bei jeder Interpretation, bezüglich derer „$\exists x\, \neg Fx$“ wahr ist, muss es ein Element in $D$ geben, von dem wahrheitsgemäß ausgesagt werden kann, dass es die Eigenschaft, die in dieser Interpretation „F“ entspricht, *nicht* besitzt. Bezüglich einer solchen Interpretation kann dann aber „$\forall x\, Fx$“ nicht mehr wahr sein.

### 323. Logisch wahre Konklusionen; inkonsistente Prämissen

Genau wie bei der Sprache AL gilt:

Ein logisch wahrer Satz folgt aus beliebigen Prämissen:

Wenn $\Sigma$ eine beliebige Menge von Sätzen einer PL-Sprache $L$ und $\varphi$ ein logisch wahrer Satz von $L$ ist, dann folgt $\varphi$ logisch aus $\Sigma$.

Aus einer Inkonsistenz folgt jeder beliebige Satz:

Wenn $\Sigma$ eine inkonsistente Menge von Sätzen einer PL-Sprache $L$ ist und $\varphi$ ein beliebiger Satz von $L$, dann folgt $\varphi$ logisch aus $\Sigma$.

> Die Beweise sind ganz analog zu den Beweisen für die Sprache AL, vgl. Folien 105 und 109.

### 324. Logische Äquivalenz in PL-Sprachen

Genau wie bei AL können wir zunächst vorläufig definieren:

△ **Wenn $\varphi$ und $\psi$ Sätze einer PL-Sprache $L$ sind und $\varphi \leftrightarrow \psi$ logisch wahr ist, dann heißen $\varphi$ und $\psi$ *logisch äquivalent*. Man schreibt dann auch $\varphi \equiv \psi$.**

Um logische Äquivalenzen bei PL-Sprachen optimal ausnutzen zu können, erweitern wir jedoch unseren Begriff der logischen Äquivalenz bei PL-Sprachen. Ziel dieser Erweiterung ist es, logische Äquivalenzen

<!-- p. 120 | pdf 128 -->
auch bei Ausdrücken anzuwenden, die noch freie Variablen enthalten und somit nicht als Sätze anzusehen sind. Z.B. ist intuitiv klar, dass „($Fx \wedge Gx$)“ auf eine gewisse Weise äquivalent zu „($Gx \wedge Fx$)“ ist, so dass

$$\forall x\, (Fx \wedge Gx) \equiv \forall x\, (Gx \wedge Fx).$$

### 325. Universaler Abschluss

Zunächst müssen wir definieren, was der universale Abschluss einer Aussage ist:

- Sei $\varphi$ ein Ausdruck der PL-Sprache $L$. Dann ist $\forall \alpha_1 \ldots \forall \alpha_n\, \varphi$ der *universale Abschluss* von $\varphi$, wobei $\alpha_1, \ldots, \alpha_n$ alle und nur die Variablen sind, die in $\varphi$ frei vorkommen.

Z.B.:

„Fx“ hat den universalen Abschluss „$\forall x\, Fx$“.
„Hxy“ hat den universalen Abschluss „$\forall x\, \forall y\, Hxy$“.
„Hay“ hat den universalen Abschluss „$\forall y\, Hay$“.
„$Fx \wedge \forall y\, Gyz$“ hat den universalen Abschluss „$\forall x\, \forall z\, (Fx \wedge \forall y\, Gyz)$“.
„Fa“ hat den universalen Abschluss „Fa“.

### 326. Logische Äquivalenz von Ausdrücken in PL-Sprachen

Jetzt können wir definieren:

△ **Wenn $\varphi$ und $\psi$ Ausdrücke einer PL-Sprache $L$ sind, dann heißen $\varphi$ und $\psi$ genau dann *logisch äquivalent*, wenn der universale Abschluss von $(\varphi \leftrightarrow \psi)$ logisch wahr ist.**

Da der universale Abschluss eines *Satzes* von $L$ einfach dieser Satz $L$ selbst ist, enthält diese Definition die vorhin gegebene vorläufige Definition der logischen Äquivalenz für Sätze als Sonderfall.

Beispiel: „$Fx \wedge Gx$“ und „$Gx \wedge Fx$“

Es ist intuitiv klar, dass unter jeder beliebigen Interpretation einem Element die Eigenschaft, die „$Fx \wedge Gx$“ entspricht, genau dann wahrheitsgemäß zugeschrieben werden kann, wenn ihm die Eigenschaft, die „$Gx \wedge Fx$“ entspricht, wahrheitsgemäß zugeschrieben werden kann. Das heißt aber, dass die Eigenschaft, die „$Fx \wedge Gx \leftrightarrow Gx \wedge Fx$“ entspricht, absolut jedem Element wahrheitsgemäß zugeschrieben werden kann.

Das heißt:

$$\vDash \forall x\, (Fx \wedge Gx \leftrightarrow Gx \wedge Fx)$$

Das bedeutet: Der universale Abschluss von „$Fx \wedge Gx \leftrightarrow Gx \wedge Fx$“ ist logisch wahr. „$Fx \wedge Gx$“ und „$Gx \wedge Fx$“ sind also logisch äquivalent.

<!-- p. 121 | pdf 129 -->

### 327. Ein prädikatenlogisches Substitutionstheorem für aussagenlogische Äquivalenzen

△ **Sei $\varphi \equiv \psi$ eine *aussagenlogische* Äquivalenz; $L$ sei eine PL-Sprache. Wenn dann $\varphi'$ und $\psi'$ aus $\varphi$ und $\psi$ dadurch hervorgehen, dass alle in $\varphi$ und $\psi$ auftretenden atomaren Sätze durch Ausdrücke von $L$ ersetzt werden, wobei verschiedene Vorkommnisse derselben atomaren Sätze jeweils durch dieselben Ausdrücke ersetzt werden, dann sind $\varphi'$ und $\psi'$ logisch äquivalent.**

> Informelle Begründung: Wenn es sich bei den eingesetzten Ausdrücken von $L$ um Sätze von $L$ handelt, ergibt sich dies unmittelbar aus der semantischen Regel, dass für aussagenlogische Verknüpfungen von Sätzen in PL-Sprachen dieselben Regeln gelten sollen wie in der Sprache AL (vgl. Folie 274). Wenn in den eingesetzten Ausdrücken noch freie Variablen vorkommen, betrifft die behauptete logische Äquivalenz den universalen Abschluss von $\varphi' \leftrightarrow \psi'$. Dann folgt die Gültigkeit des Theorems daraus, dass auch innerhalb von Quantoren für das wahrheitsgemäße Zuschreiben offener Sätze dieselben wahrheitsfunktionalen Regeln gelten sollen (vgl. Folie 275 unten).

Beispiele:

$$A \rightarrow B \equiv \neg B \rightarrow \neg A$$
Daher:
$$\forall x\, Hax \rightarrow Fb \equiv \neg Fb \rightarrow \neg \forall x\, Hax$$

$$\neg A \vee B \equiv A \rightarrow B$$
Daher:
$$\neg Kxy \vee Dy \equiv Kxy \rightarrow Dy$$

$$A \equiv A \wedge A$$
Daher:
$$Fx \rightarrow Kab \equiv (Fx \rightarrow Kab) \wedge (Fx \rightarrow Kab)$$

### 328. Einsetzungstheorem für die Prädikatenlogik

Der praktische Zweck der so definierten logisch äquivalenten Ausdrücke ergibt sich erst aus dem folgenden Einsetzungstheorem:

△ **Sei $\psi$ ein Satz der PL-Sprache $L$, $\varphi$ und $\chi$ seien zueinander logisch äquivalente Ausdrücke von $L$, und $\varphi$ komme in $\psi$ als echter Teilausdruck vor. Dann ist der Satz, der entsteht, indem man $\varphi$ innerhalb von $\psi$ durch $\chi$ ersetzt, logisch äquivalent zu $\psi$.**

Ein echter Teilausdruck zu sein, soll dabei bedeuten, dass $\varphi$ innerhalb von $\psi$ für sich allein und als Ganzes unter dem Einfluss eines Junktors steht, oder für sich allein und als ganzes den Wirkungsbereich eines Quantors bildet.

> Auch das Einsetzungstheorem werden wir nicht formal beweisen, sondern nur informell motivieren.
>
> Kommen in $\varphi$ und $\psi$ keine freien Variablen vor, dann ergibt sich die wechselseitige Austauschbarkeit von $\varphi$ und $\psi$ einfach dadurch, dass sie unter jeder Interpretation denselben Wahrheitswert besitzen. Denn Sätze, also Ausdrücke ohne freie Variablen, tragen auch in den PL-Sprachen nur ihren Wahrheitswert zum Wahrheitswert der Gesamtaussage bei.
>
> Unsere Definition der Äquivalenz von Ausdrücken *mit* freien Variablen bedeutet, dass unter jeder Interpretation der dem einen Ausdruck entsprechende Eigenschaft (bzw. Relation) einem beliebigen Element (bzw. n-Tupel von

<!-- p. 122 | pdf 130 -->
Elementen) aus $D$ genau dann wahrheitsgemäß zugeschrieben werden kann, wenn dies bei dem anderen so ist. Deshalb können sie innerhalb von Quantoren füreinander ausgetauscht werden.

Anwendungsbeispiele:

$$\exists y\, \neg Kyl \wedge Dj_{1} \wedge Hr \equiv \exists y\, \neg Kyl \wedge \neg(\neg Dj_{1} \vee \neg Hr)$$

$$\exists y\, \neg Kyl \wedge Dj_{1} \wedge Hr \equiv \neg(\neg \exists y\, \neg Kyl \vee \neg Dj_{1}) \wedge Hr$$

$$\forall x\, (Dx \rightarrow \exists y\, Kyx) \equiv \forall x\, (\neg Dx \vee \exists y\, Kyx)$$

$$\forall x\, (Dx \rightarrow \exists y\, Kyx) \equiv \forall x\, (\neg \exists y\, Kyx \rightarrow \neg Dx)$$

Bisher haben wir nur logische Äquivalenzen verwendet, die sich direkt aus aussagenlogischen Äquivalenzen auf die Prädikatenlogik übertragen lassen. Es gibt aber auch eigene, spezifisch prädikatenlogische Äquivalenzen.

### 329. Spezifisch prädikatenlogische Äquivalenzen

Alle hier folgenden prädikatenlogischen Äquivalenzen gelten für beliebige PL-Sprachen. Im Folgenden sind mit $\varphi$, $\chi$ und $\psi$ immer beliebige Ausdrücke derselben PL-Sprache gemeint und mit $\alpha$ und $\beta$ beliebige Variablen.

### 330. Die fundamentalen Quantorenäquivalenzen

$$\forall \alpha\, \neg\varphi \equiv \neg\exists \alpha\, \varphi$$
$$\exists \alpha\, \neg\varphi \equiv \neg\forall \alpha\, \varphi$$

Diese Äquivalenzen geben den Zusammenhang zwischen Existenz- und Allquantor an. Sie folgen auf unmittelbar ersichtliche Weise aus der Semantik der Quantoren, wie wir sie in Teil 6 eingeführt haben.

Beispiel:
$$\exists x\, \neg Vx \equiv \neg\forall x\, Vx$$
„Es gibt etwas, das nicht vergänglich ist.“ ≡ „Es ist nicht der Fall, dass alles vergänglich ist.“

Ableitbare Formen sind:

$$\forall \alpha\, \varphi \equiv \neg\exists \alpha\, \neg\varphi$$
$$\exists \alpha\, \varphi \equiv \neg\forall \alpha\, \neg\varphi$$

> Ableitbar sind diese Ausdrücke einfach durch Einsetzen von $\neg\varphi$ für $\varphi$ und Ausnutzung der aussagenlogischen Äquivalenz $\neg\neg\varphi \equiv \varphi$.

<!-- p. 123 | pdf 131 -->

### 331. Die fundamentalen Quantorenäquivalenzen (relativierte Formen)

Praktisch brauchen wir häufiger die folgenden relativierten Quantorenäquivalenzen:

$$\forall \alpha\, (\varphi \rightarrow \neg\psi) \equiv \neg\exists \alpha\, (\varphi \wedge \psi)$$
$$\exists \alpha\, (\varphi \wedge \neg\psi) \equiv \neg\forall \alpha\, (\varphi \rightarrow \psi)$$

> Die können wir schon sehr einfach mit Hilfe uns bereits bekannter Äquivalenzen herleiten:
>
> $$\forall \alpha\, (\varphi \rightarrow \neg\psi) \equiv \forall \alpha\, (\neg\varphi \vee \neg\psi)$$
> $$\equiv \forall \alpha\, \neg(\varphi \wedge \psi)$$
> $$\equiv \neg\exists \alpha\, (\varphi \wedge \psi)$$
>
> (Letzteres folgt aus der Äquivalenz der vorigen Folie.) Die zweite Äquivalenz funktioniert ganz ähnlich.

Beispiele:
$$\forall x\, (Hx \rightarrow \neg Bx) \equiv \neg\exists x\, (Hx \wedge Bx)$$
„Alle Hörsäle sind unbeheizt.“ ≡ „Es gibt keinen Hörsaal, der beheizt ist.“
$$\exists x\, (Hx \wedge \neg Bx) \equiv \neg\forall x\, (Hx \rightarrow Bx)$$
„Es gibt mindestens einen Hund, der nicht beißt.“ ≡ „Nicht alle Hunde beißen.“

### 332. Quantorenvertauschung

Gleichartige Quantoren sind vertauschbar.

$$\forall \alpha\, \forall \beta\, \varphi \equiv \forall \beta\, \forall \alpha\, \varphi$$
$$\exists \alpha\, \exists \beta\, \varphi \equiv \exists \beta\, \exists \alpha\, \varphi$$

Beispiele:
$$\forall x\, \forall y\, Kxy \equiv \forall y\, \forall x\, Kxy$$
„Jeder kennt jeden.“ ≡ „Jeder wird von jedem gekannt“.
$$\exists x\, \exists y\, Lxy \equiv \exists y\, \exists x\, Lxy$$
„Es gibt jemanden, der jemanden liebt.“ ≡ „Es gibt jemanden, der von jemandem geliebt wird.“

### 333. Quantorenvertauschung

Achtung! *Verschiedenartige* Quantoren sind *nicht* einfach vertauschbar! Es gilt nur *eine* Richtung:

$$\exists \alpha\, \forall \beta\, \varphi \vDash \forall \beta\, \exists \alpha\, \varphi$$

Der Übergang von $\exists\, \forall$ zu $\forall\, \exists$ ist erlaubt.

Beispiel:
$$\exists x\, \forall y\, Kyx \vDash \forall y\, \exists x\, Kyx$$
Aus „Es gibt mindestens einen, den jeder kennt“ folgt „Jeder kennt jemanden.“

Der Übergang von $\forall\, \exists$ zu $\exists\, \forall$ ist *kein* deduktiv gültiger Schluss, sondern ein häufig anzutreffender Fehlschluss!

$$\forall \alpha\, \exists \beta\, \varphi \vDash \exists \beta\, \forall \alpha\, \varphi$$
<!-- Markierung: Diese Zeile ist im Original vollständig rot durchgestrichen (waagerechte Linie durch die ganze Formel), um zu zeigen, dass dieser Übergang NICHT deduktiv gültig ist. -->

<!-- p. 124 | pdf 132 -->
Beispiel:
$$\forall x\, \exists y\, Lxy \nvDash \exists y\, \forall x\, Lxy$$
Aus „Jeder liebt jemanden“ folgt *nicht* „Es gibt mindestens einen, den alle lieben.“

### 334. Quantorenaufteilung / -zusammenführung

$$\forall \alpha\, (\varphi \wedge \psi) \equiv \forall \alpha\, \varphi \wedge \forall \alpha\, \psi$$

Beispiel:
$$\forall x\, (Vx \wedge Wx) \equiv \forall x\, Vx \wedge \forall x\, Wx$$
„Alles ist vergänglich und wunderschön.“ ≡ „Alles ist vergänglich und alles ist wunderschön.“

Auch hier gibt es eine nützliche relativierte Variante:

$$\forall \alpha\, (\chi \rightarrow \varphi \wedge \psi) \equiv \forall \alpha\, (\chi \rightarrow \varphi) \wedge \forall \alpha\, (\chi \rightarrow \psi)$$

Beispiel:
$$\forall x\, (Sx \rightarrow Kx \wedge Fx) \equiv \forall x\, (Sx \rightarrow Kx) \wedge \forall x\, (Sy \rightarrow Fx)$$
<!-- sic: im Original „Sy“ statt „Sx“ im letzten Konjunkt -->
„Alle Studierenden sind klug und fleißig.“ ≡ „Alle Studierenden sind klug und alle Studierenden sind fleißig.“

### 335. Quantorenaufteilung / -zusammenführung

$$\exists \alpha\, (\varphi \vee \psi) \equiv \exists \alpha\, \varphi \vee \exists \alpha\, \psi$$

Beispiel:
$$\exists x\, (Yx \vee Bx) \equiv \exists x\, Yx \vee \exists x\, Bx$$
„Es existiert etwas, das ein Yeti oder ein Bigfoot ist.“ ≡ „Es gibt einen Yeti oder es gibt einen Bigfoot.“

Relativierte Variante:

$$\exists \alpha\, (\chi \wedge (\varphi \vee \psi)) \equiv \exists \alpha\, (\chi \wedge \varphi) \vee \exists \alpha\, (\chi \wedge \psi)$$

Beispiel:
$$\exists x\, (Mx \wedge (Dx \vee Bx)) \equiv \exists x\, (Mx \wedge Dx) \vee \exists x\, (Mx \wedge Bx)$$
„Es gibt mindestens einen Microsquash-Programmierer, der dumm oder bösartig ist.“ ≡ „Es gibt mindestens einen Microsquash-Programmierer, der dumm ist, oder es gibt mindestens einen Microsquash-Programmierer, der bösartig ist.“

### 336. Quantorenaufteilung / -zusammenführung

Achtung! Quantorenaufteilung / -zusammenführung funktioniert nur bei den Kombinationen Allquantor-Konjunktion und Existenzquantor-Adjunktion.

> Das können Sie sich so merken: Ein Allsatz hat selbst große Ähnlichkeit mit einer gigantischen (unendlichen) Konjunktion: „Alles ist vergänglich“ z.B. bedeutet ja so viel wie: „Adam ist vergänglich und dieser Apfel ist vergänglich und der Eiffelturm ist vergänglich und …“
>
> Dagegen kann man einen Existenzsatz vielleicht als eine unendliche Adjunktion auffassen. Dann würde „Es gibt einen Yeti“ soviel bedeuten wie „Dieser Tisch ist ein Yeti oder ich bin ein Yeti oder Reinold Messner ist ein Yeti oder der Eiffelturm ist ein Yeti …“ Vorausgesetzt wäre natürlich jeweils, dass man wirklich alle Gegenstände und Individuen aufzählen und benennen kann. Da dies im Allgemeinen keine einlösbare Voraussetzung ist, sind Existenzsätze nicht wirklich Adjunktionen und Allsätze sind keine Konjunktionen. Aber

<!-- p. 125 | pdf 133 -->
> sie haben eine gewisse Affinität zu den entsprechenden Junktoren, die sich z.B. in der Aufteilbarkeit bzw. Zusammenführbarkeit äußert.

### 337. Quantorenaufteilung / -zusammenführung

Bei den umgekehrten Kombinationen gilt jeweils wieder *nur eine Richtung*:

$$\forall \alpha\, \varphi \vee \forall \alpha\, \psi \vDash \forall \alpha\, (\varphi \vee \psi)$$
Relativierte Form: $\forall \alpha\, (\chi \rightarrow \varphi) \vee \forall \alpha\, (\chi \rightarrow \psi) \vDash \forall \alpha\, (\chi \rightarrow \varphi \vee \psi)$

Beispiel:
$$\forall x\, (Rx \rightarrow Sx) \vee \forall x\, (Rx \rightarrow Bx) \vDash \forall x\, (Rx \rightarrow Sx \vee Bx)$$
Aus „Alle Raben sind schwarz oder alle Raben sind Blau“ folgt „Alle Raben sind schwarz oder blau.“

Aber *nicht* umgekehrt:
$$\forall x\, (Nx \rightarrow Gx \vee Ux) \nvDash \forall x\, (Nx \rightarrow Gx) \vee \forall x\, (Nx \rightarrow Ux)$$
Aus „Alle natürlichen Zahlen sind gerade oder ungerade“ folgt *nicht* „Alle natürlichen Zahlen sind gerade oder alle natürlichen Zahlen sind ungerade“.

### 338. Quantorenaufteilung / -zusammenführung

$$\exists \alpha\, (\varphi \wedge \psi) \vDash \exists \alpha\, \varphi \wedge \exists \alpha\, \psi$$
Relativierte Form: $\exists \alpha\, (\chi \wedge \varphi \wedge \psi) \vDash \exists \alpha\, (\chi \wedge \varphi) \wedge \exists \alpha\, (\chi \wedge \psi)$

Beispiel:
$$\exists x\, (Sx \wedge Ex) \vDash \exists x\, Sx \wedge \exists x\, Ex$$
Aus „Es gibt mindestens ein Säugetier, das Eier legt“ folgt „Es gibt mindestens ein Säugetier und es gibt irgendetwas, das Eier legt.“

Aber *nicht* umgekehrt:
$$\exists x\, Ex \wedge \exists x\, Mx \nvDash \exists x\, (Ex \wedge Mx)$$
Aus „Es gibt mindestens einen Elefanten und es gibt mindestens eine Maus“ folgt *nicht* „Es gibt mindestens einen Elefanten, der eine Maus ist“.

### 339. Weitere Äquivalenzen

Vielleicht ist Ihnen schon aufgegangen, dass Teilaussagen, die innerhalb des Wirkungsbereiches eines Quantors auftreten, ohne dass in ihnen die entsprechende Variable frei vorkommt, dort nicht allzu viel Sinn ergeben. Dies drückt sich in den folgenden vier Äquivalenzen aus.

**Die folgenden vier Äquivalenzen gelten unter der Voraussetzung, dass die Variable $\alpha$ in $\chi$ nicht frei vorkommt.**

$$\forall \alpha\, (\varphi \wedge \chi) \equiv \forall \alpha\, \varphi \wedge \chi$$
$$\forall \alpha\, (\varphi \vee \chi) \equiv \forall \alpha\, \varphi \vee \chi$$
$$\exists \alpha\, (\varphi \wedge \chi) \equiv \exists \alpha\, \varphi \wedge \chi$$
$$\exists \alpha\, (\varphi \vee \chi) \equiv \exists \alpha\, \varphi \vee \chi$$

<!-- p. 126 | pdf 134 -->
Beispiele:

$$\exists x\, (Dx \wedge \neg Hl) \equiv \exists x\, Dx \wedge \neg Hl$$
„Es gibt ein x, so dass x ein Dalton ist und Lucky Luke kein Hund ist“ ≡ „Es gibt einen Dalton und Lucky Luke ist kein Hund“.

$$\exists x\, (Mx \vee \forall y\, (Ky \rightarrow Ay)) \equiv \exists x\, Mx \vee \forall y\, (Ky \rightarrow Ay)$$
„Es gibt ein x, so dass x ein Millionär ist oder alle Katholiken arm sind“ ≡ „Es gibt einen Millionär oder alle Katholiken sind arm.“

### 340. Wichtige Äquivalenzen: Übersicht

$\varphi$, $\chi$ und $\psi$ seien Ausdrücke einer PL-Sprache, $\alpha$ und $\beta$ Variablen.

$$\varphi \wedge \varphi \equiv \varphi \qquad\qquad \varphi \vee \varphi \equiv \varphi \qquad\qquad \neg\neg\varphi \equiv \varphi$$
$$\varphi \wedge \psi \equiv \psi \wedge \varphi \qquad\qquad \varphi \vee \psi \equiv \psi \vee \varphi \qquad\qquad \varphi \leftrightarrow \psi \equiv \psi \leftrightarrow \varphi$$

$$(\varphi \wedge \psi) \wedge \chi \equiv \varphi \wedge (\psi \wedge \chi)$$
$$(\varphi \vee \psi) \vee \chi \equiv \varphi \vee (\psi \vee \chi)$$
$$(\varphi \leftrightarrow \psi) \leftrightarrow \chi \equiv \varphi \leftrightarrow (\psi \leftrightarrow \chi)$$

$$\varphi \wedge (\psi \vee \chi) \equiv (\varphi \wedge \psi) \vee (\varphi \wedge \chi)$$
$$\varphi \vee (\psi \wedge \chi) \equiv (\varphi \vee \psi) \wedge (\varphi \vee \chi)$$

$$\neg(\varphi \wedge \psi) \equiv \neg\varphi \vee \neg\psi$$
$$\neg(\varphi \vee \psi) \equiv \neg\varphi \wedge \neg\psi$$

$$\varphi \rightarrow \psi \equiv \neg\varphi \vee \psi \qquad\qquad \varphi \rightarrow \psi \equiv \neg(\varphi \wedge \neg\psi)$$
$$\varphi \rightarrow \psi \equiv \neg\psi \rightarrow \neg\varphi$$

$$\varphi \leftrightarrow \psi \equiv (\varphi \rightarrow \psi) \wedge (\psi \rightarrow \varphi)$$
$$\varphi \leftrightarrow \psi \equiv (\varphi \wedge \psi) \vee (\neg\varphi \wedge \neg\psi)$$

$$\forall \alpha\, \neg\varphi \equiv \neg\exists \alpha\, \varphi$$
$$\exists \alpha\, \neg\varphi \equiv \neg\forall \alpha\, \varphi$$
Relativierte Formen:
$$\forall \alpha\, (\varphi \rightarrow \neg\psi) \equiv \neg\exists \alpha\, (\varphi \wedge \psi)$$
$$\exists \alpha\, (\varphi \wedge \neg\psi) \equiv \neg\forall \alpha\, (\varphi \rightarrow \psi)$$

$$\forall \alpha\, \forall \beta\, \varphi \equiv \forall \beta\, \forall \alpha\, \varphi$$
$$\exists \alpha\, \exists \beta\, \varphi \equiv \exists \beta\, \exists \alpha\, \varphi$$

<!-- p. 127 | pdf 135 -->

$$\forall\alpha\,(\varphi \wedge \psi) \equiv \forall\alpha\,\varphi \wedge \forall\alpha\,\psi$$
$$\exists\alpha\,(\varphi \vee \psi) \equiv \exists\alpha\,\varphi \vee \exists\alpha\,\psi$$

Relativierte Formen:

$$\forall\alpha\,(\chi \rightarrow \varphi \wedge \psi) \equiv \forall\alpha\,(\chi \rightarrow \varphi) \wedge \forall\alpha\,(\chi \rightarrow \psi)$$
$$\exists\alpha\,(\chi \wedge (\varphi \vee \psi)) \equiv \exists\alpha\,(\chi \wedge \varphi) \vee \exists\alpha\,(\chi \wedge \psi)$$

Falls $\alpha$ in $\chi$ nicht frei vorkommt:

$$\forall\alpha\,(\varphi \wedge \chi) \equiv \forall\alpha\,\varphi \wedge \chi \qquad \forall\alpha\,(\varphi \vee \chi) \equiv \forall\alpha\,\varphi \vee \chi$$
$$\exists\alpha\,(\varphi \wedge \chi) \equiv \exists\alpha\,\varphi \wedge \chi \qquad \exists\alpha\,(\varphi \vee \chi) \equiv \exists\alpha\,\varphi \vee \chi$$

## 13. Das Wahrheitsbaumverfahren für die Prädikatenlogik

### 341. Erweiterung des Wahrheitsbaumverfahrens

Wir wollen nun das in Kapitel 5 für die Aussagenlogik eingeführte Wahrheitsbaumverfahren so erweitern, dass es für die Prädikatenlogik anwendbar ist. Dazu schauen wir uns, wie zuvor, zunächst einmal einen informellen Beweis an, der dem Prinzip des indirekten Beweises folgt.

Wir wollen die Gültigkeit der folgenden Argumentform,

$$\begin{array}{l@{\qquad}l} \forall x\,(Mx \rightarrow Px) & \text{Alle Münsteraner kennen den Prinzipalmarkt.} \\ \exists x\,(Sx \wedge Mx) & \text{Es gibt einen Susaphonspieler, der Münsteraner ist.} \\ \hline \exists x\,(Sx \wedge Px) & \text{Also gibt es einen Susaphonspieler, der den Prinzipalmarkt kennt.} \end{array}$$

informell und indirekt beweisen.

> Es handelt sich hierbei um einen sogenannten kategorischen Syllogismus (des Typs „Darii“), vgl. Kapitel 14.

Das tun wir, indem wir annehmen, es gebe eine Interpretation, unter der

1. $\forall x\,(Mx \rightarrow Px)$ **wahr**,
2. $\exists x\,(Sx \wedge Mx)$ **ebenfalls wahr**, aber
3. $\exists x\,(Sx \wedge Px)$ **falsch** sei.

Wenn es uns gelingt, dies zum Widerspruch zu führen, dann haben wir gezeigt, dass jede Interpretation, die „$\forall x\,(Mx \rightarrow Px)$“ und „$\exists x\,(Sx \wedge Mx)$“ wahr macht, auch „$\exists x\,(Sx \wedge Px)$“ wahr machen muss.

Da unsere Interpretation (2) wahr machen soll, muss es im Träger der Interpretation ein Element geben, dem die durch den „$Sx \wedge Mx$“ entsprechenden offenen Satz ausgedrückte Eigenschaft wahrheitsgemäß zugeschrieben werden kann. Nennen wir dieses Element einmal „a“. Dann muss also gelten

4. $Sa \wedge Ma$ **ist wahr**,

und daraus folgt unmittelbar

5. $Sa$ **ist wahr**    *und*    6. $Ma$ **ist wahr**.

Als prädikatenlogische Äquivalenz haben wir bereits kennengelernt, dass „$\exists x\,(Sx \wedge Px)$“ nur falsch sein kann, wie in (3) angenommen, wenn

<!-- p. 128 | pdf 136 -->

7. $\forall x\,\neg(Sx \wedge Px)$ **wahr ist**.

Da dies bedeutet, dass die in unserer Interpretation durch „$\neg(Sx \wedge Px)$“ ausgedrückte Eigenschaft allen Gegenständen zukommen muss, also auch dem mit „a“ benannten, gilt:

8. $\neg(Sa \wedge Pa)$ **ist wahr**.

Damit (8) gegeben sein kann muss in unserer Interpretation mindestens eine der folgenden Möglichkeiten realisiert sein:

9. $Sa$ **ist falsch**    *oder*    10. $Pa$ **ist falsch**.

Davon scheidet (9) wegen Widerspruchs mit (5) sofort aus, wir sind also auf Möglichkeit (10) angewiesen. Da auch „$Mx \rightarrow Px$“ laut (1) auf alle Gegenstände des Trägers zutreffen muss, ist verbindlich:

11. $Ma \rightarrow Pa$ **ist wahr**.

Das kann aber nur in einer Interpretation der Fall sein, in der mindestens eine der beiden folgenden Möglichkeiten vorliegt:

12. $Ma$ **ist falsch**    *oder*    13. $Pa$ **ist wahr**.

Beides befindet sich im Widerspruch zu Annahmen, die wir zuvor schon als verbindlich für unsere Interpretation anerkennen mussten: (12) widerspricht (6), (13) widerspricht (10). Eine widerspruchsfreie Interpretation von (1) – (3) ist also nicht möglich. Q.E.D.

### 342. Das Beispiel als Wahrheitsbaum

Diese Überlegungen kann man wie gewohnt in Baumform darstellen:

```text
1. ∀x (Mx → Px) ist wahr                    [Annahme]
2. ∃x (Sx ∧ Mx) ist wahr                    [Annahme]
3. ∃x (Sx ∧ Px) ist falsch                  [Annahme]
4. Sa ∧ Ma ist wahr                         [aus (2)]
5. Sa ist wahr                              [aus (4)]
6. Ma ist wahr                              [aus (4)]
7. ∀x ¬(Sx ∧ Px) ist wahr                   [aus (3)]
8. ¬(Sa ∧ Pa) ist wahr                      [aus (7)]
├─ 9. Sa ist falsch                         [aus (8)]   ↯ mit (5)
└─ 10. Pa ist falsch                        [aus (8)]
   11. Ma → Pa ist wahr                     [aus (1)]
   ├─ 12. Ma ist falsch                     [aus (11)]  ↯ mit (6)
   └─ 13. Pa ist wahr                       [aus (11)]  ↯ mit (10)
```

In der ebenfalls bereits gewohnten, vereinfachten Darstellung:

<!-- p. 129 | pdf 137 -->

```text
1. ∀x (Mx → Px)                             [A]
2. ∃x (Sx ∧ Mx)                             [A]
3. ¬∃x (Sx ∧ Px)                            [A]
4. Sa ∧ Ma                                  [(2)]
5. Sa                                       [(4)]
6. Ma                                       [(4)]
7. ∀x ¬(Sx ∧ Px)                            [(3)]
8. ¬(Sa ∧ Pa)                               [(7)]
├─ 9. ¬Sa                                   [(8)]   ↯
└─ 10. ¬Pa                                  [(8)]
   11. Ma → Pa                              [(1)]
   ├─ 12. ¬Ma                               [(11)]  ↯
   └─ 13. ¬Pa                               [(11)]  ↯
```

### 343. Neue Regeln

In diesem Beispiel haben wir mehrere neuartige Schritte ausgeführt, die zu Regeln für ein Wahrheitsbaumverfahren für die Prädikatenlogik verallgemeinert werden können.

Beim Übergang von (2) nach (4) sind wir nach dem folgenden Schema vorgegangen:

```text
∃ξ φ
φ(α/ξ)
```

wobei $\alpha$ für eine neu eingeführte Individuenkonstante steht und $\varphi(\alpha/\xi)$ der Ausdruck ist, der entsteht, wenn man im Ausdruck $\varphi$ jedes (freie) Vorkommnis der Variablen $\xi$ durch die Konstante $\alpha$ ersetzt.

Die Begründung für diese Regel ist die folgende: Wenn es eine Interpretation gibt, die $\exists \xi\,\varphi$ wahr macht, dann muss es in der Trägermenge $D$ der Interpretation irgendein Element geben, dem $\varphi$ wahrheitsgemäß zugeschrieben werden kann. Diesem Element geben wir bei dieser Regelanwendung sozusagen einfach einen Namen.

> Etwas technischer ausgedrückt: Wenn $\Gamma$ eine Menge von Ausdrücken der PL-Sprache $L$ ist, $\exists \xi\,\varphi$ in $\Gamma$ enthalten ist und $I$ eine Interpretation von $L$, hinsichtlich derer alle Elemente in $\Gamma$ wahr sind, dann gibt es auch eine Interpretation $I'$ von $L$, die von $I$ einzig darin abweicht, dass sie der in den Ausdrücken in $\Gamma$ nicht enthaltenen Individuenkonstanten $\alpha$ ein Element zuweist, dem die gemäß $I$ dem offenen Satz $\varphi$ entsprechende Eigenschaft wahrheitsgemäß zugeschrieben werden kann. $I'$ macht dann neben den Elementen aus $\Gamma$ auch $\varphi(\alpha/\xi)$ wahr. Es ist leicht einsehbar, dass sich diese Überlegung auch auf Fälle ausweiten lässt, in denen $I'$ die Interpretation einer um eine neue Individuenkonstante erweiterten Sprache $L'$ ist. $\alpha$ muss deshalb nicht ursprünglich zu $L$ gehört haben. Das ist wichtig, damit sich unser Wahrheitsbaumverfahren beispielsweise auch auf PL-Sprachen ohne Individuenkonstanten anwenden lässt.

Sehr wichtig ist bei der Anwendung dieser Regel, dass wir über das von uns sozusagen neu getaufte Element nichts weiter voraussetzen, als dass es dasjenige Element ist, auf das $\varphi$ zutrifft. Deshalb muss $\alpha$ eine *neu eingeführte* Individuenkonstante sein, über die nicht bereits in anderen Aussagen des

<!-- p. 130 | pdf 138 -->

Wahrheitsbaums schon irgendwelche einschränkenden Bedingungen gesetzt sind. Konkret bedeutet dies: **$\alpha$ darf auf demselben Ast noch in keinem einzigen Satz vorgekommen sein**.

Was passiert, wenn man diese Klausel missachtet, illustriert das folgende Beispiel. Wir „beweisen“ die angebliche Gültigkeit der folgenden, glorios fehlschlüssigen Argumentform:

$$\begin{array}{l@{\qquad}l} \exists x\,Ex & \text{Es gibt mindestens einen Elefanten.} \\ \hline Ma \rightarrow Ea & \text{Wenn Anton eine Maus ist, ist Anton ein Elefant.} \end{array}$$

```text
1. ∃x Ex                                    [A]
2. ¬(Ma → Ea)                               [A]
3. Ea                                       [Fehlanwendung der ∃-Regel auf (1)!]
4. Ma                                       [(2)]
5. ¬Ea                                      [(2)]   ↯
```

Anschaulich gesprochen, besteht der Fehler darin, dass wir in (3) zwar ein Recht haben, anzunehmen, dass es ein Element im Träger der Interpretation geben muss, dass die dem Prädikat „$Ex$“ zugeordnete Eigenschaft besitzt, und dass wir diesem Element einen Namen geben dürfen. Wir hätten aber nicht voraussetzen dürfen, dass es sich dabei um dasselbe Element handelt, von dem auch in Zeile (2) schon die Rede war.

### 344. Neue Regeln

Außer der neuen Regel für existenzquantifizierte Sätze haben wir im Beispiel auch eine für Allsätze angewandt, nämlich beim Übergang von (1) nach (11).

```text
∀ξ φ
φ(α/ξ)
```

Dabei darf $\alpha$ nunmehr irgendeine Individuenkonstante sein.

Der Grund dafür ist, dass hinsichtlich einer Interpretation, die $\forall \xi\,\varphi$ wahr macht, die durch $\varphi$ ausgedrückte Eigenschaft auf jedes beliebige Element der Trägermenge zutreffen muss. Deshalb dürfen wir bei *dieser* Regel auch Individuenkonstanten einsetzen, die schon früher im Baum vorgekommen sind.

Außerdem haben wir im Beispiel beim Schritt von (3) nach (7) eine uns bereits bekannte Äquivalenzumformung vorgenommen:

```text
¬∃ξ φ
∀ξ ¬φ
```

Analog (im Beispiel nicht auftauchend) darf man natürlich auch wie folgt umformen:

```text
¬∀ξ φ
∃ξ ¬φ
```

<!-- p. 131 | pdf 139 -->

### 345. Neue Regeln

Wie wir sehen werden, genügen diese vier neuen Regeln, um die uns bereits bekannten aussagenlogischen Regeln zu einem Wahrheitsbaumverfahren für die Prädikatenlogik auszubauen.

```text
∃ξ φ                                     ∀ξ φ
φ(α/ξ),                                  φ(α/ξ),
für eine Individuenkonstante α,          für eine beliebige Individuenkonstante α
die auf dem Ast neu ist

¬∃ξ φ                                    ¬∀ξ φ
∀ξ ¬φ                                    ∃ξ ¬φ
```

> Für eine Gesamtübersicht aller Regeln (einschließlich der aussagenlogischen) siehe unten Folie 393.

### 346. Anwendungsbeispiele

Zunächst einige Beispiele für die Anwendung des prädikatenlogischen Wahrheitsbaumverfahrens.

> Die Verwendungsweise des Verfahrens ist dabei natürlich prinzipiell dieselbe, die wir schon im Zusammenhang mit der Aussagenlogik kennengelernt haben:
>
> Um die *logische Wahrheit* eines Satzes $\varphi$ nachzuweisen, $\vDash \varphi$, entwickle aus der **Annahme** $\neg\varphi$ einen Wahrheitsbaum, dessen sämtliche Äste abgeschlossen sind.
>
> Um eine *logische Folgerung* nachzuweisen, $\Sigma \vDash \varphi$, entwickle aus den **Annahmen** $\Sigma, \neg\varphi$ einen Wahrheitsbaum, dessen sämtliche Äste abgeschlossen sind.

Gültigkeit der Argumentform

$$\begin{array}{l} \forall x\,(Sx \rightarrow Px) \\ Sa \\ \hline Pa \end{array}$$

> Dies ist die Argumentform des sogenannten „Quasi-Syllogismus“, vgl. Kap. 14.

```text
1. ∀x (Sx → Px)                             [A]
2. Sa                                       [A]
3. ¬Pa                                      [A]
4. Sa → Pa                                  [(1)]
├─ 5. ¬Sa                                   [(4)]   ↯
└─ 6. Pa                                    [(4)]   ↯
```

<!-- p. 132 | pdf 140 -->

### 347. Anwendungsbeispiele

Gültigkeit der Folgerung

$$\forall x\,Fx \vee \forall x\,Gx \vDash \forall x\,(Fx \vee Gx)$$

```text
1. ∀x Fx ∨ ∀x Gx                            [A]
2. ¬∀x (Fx ∨ Gx)                            [A]
3. ∃x ¬(Fx ∨ Gx)                            [(2)]
4. ¬(Fa ∨ Ga)                               [(3)]
5. ¬Fa                                      [(4)]
6. ¬Ga                                      [(4)]
├─ 7. ∀x Fx                                 [(1)]
│  9. Fa                                    [(7)]   ↯
└─ 8. ∀x Gx                                 [(1)]
   10. Ga                                   [(8)]   ↯
```

### 348. Anwendungsbeispiele

Logische Wahrheit von

$$\exists x\,\forall y\,Fxy \rightarrow \forall y\,\exists x\,Fxy$$

```text
1. ¬(∃x ∀y Fxy → ∀y ∃x Fxy)                 [A]
2. ∃x ∀y Fxy                                [(1)]
3. ¬∀y ∃x Fxy                               [(1)]
4. ∀y Fay                                   [(2)]
5. ∃y ¬∃x Fxy                               [(3)]
6. ¬∃x Fxb                                  [(5)]
7. ∀x ¬Fxb                                  [(6)]
8. ¬Fab                                     [(7)]
9. Fab                                      [(4)]   ↯
```

An diesem Beispiel kann man sehen: Es ist sehr wichtig, dass die Anwendung der Regeln für Allsätze (von (7) nach (8) und von (4) nach (9)) erst *nach* der Anwendung der Regeln für Existenzsätze geschehen ist.

<!-- p. 133 | pdf 141 -->

Nur so konnten die allquantifizierten Variablen in (4) und (7) durch dieselben Individuenkonstanten ersetzt werden, die vorher schon eingeführt worden waren, so dass ein Widerspruch entstehen konnte. Diese Beobachtung lässt sich verallgemeinern:

**Hinweis zur Verwendung der Regeln für Quantifizierte Formeln: Wenden Sie die Regel für Allsätze möglichst spät an, d.h. nachdem Sie die Anwendungsmöglichkeiten der Regel für Existenzsätze ausgeschöpft haben, und setzen Sie bei der Anwendung der Regel für Allsätze solche Individuenkonstanten ein, die Sie vorher bereits bei der Anwendung der Regel für Existenzsätze eingeführt haben.**

> Außerdem gelten weiterhin die Hinweise 3 u. 4, die wir beim aussagenlogischen Wahrheitsbaumverfahren zu beachten gelernt haben (vgl. Folien 149/150).

### 349. Anwendungsbeispiele

Im folgenden Beispiel wird die logische Wahrheit von

$$\exists x\,(\neg Fx \vee \forall y\,Fy)$$

nachgewiesen.

Es verdeutlicht eine **wichtige Besonderheit des Wahrheitsbaumverfahrens für die Prädikatenlogik**: Die Entwicklungsregel für Allsätze muss unter Umständen auf ein und denselben Ausgangssatz *mehrmals* angewendet werden, um einen Wahrheitsbaum abschließen zu können (wobei jedes Mal eine andere Individuenkonstante eingeführt wird)! Deshalb dürfen Sie einen Satz, den Sie bereits unter Anwendung dieser Regel entwickelt haben, trotzdem *nicht* mit einem Häkchen als „erledigt“ markieren.

```text
1. ¬∃x (¬Fx ∨ ∀y Fy)                        [A]
2. ∀x ¬(¬Fx ∨ ∀y Fy)                        [(1)]
3. ¬(¬Fa ∨ ∀y Fy)                           [(2)]
4. ¬¬Fa                                     [(3)]
5. ¬∀y Fy                                   [(3)]
6. ∃y ¬Fy                                   [(5)]
7. ¬Fb                                      [(6)]
8. ¬(¬Fb ∨ ∀y Fy)                           [(2)]
9. ¬¬Fb                                     [(8)]
10. ¬∀y Fy                                  [(8)]   ↯
```

### 350. Ein unabschließbarer Wahrheitsbaum

Auch beim prädikatenlogischen Wahrheitsbaumverfahren schauen wir uns einmal an, was passiert, wenn wir eine **unrichtige Behauptung** nachzuweisen versuchen:

$$\forall x\,(Fx \vee Gx) \vDash \forall x\,Fx \vee \forall x\,Gx$$

<!-- p. 134 | pdf 142 -->

> Die umgekehrte Richtung dieser Folgerungsbeziehung stimmt, wie wir oben (Folie 347) gezeigt haben, aber in dieser Richtung ist der Schluss nicht gültig.

```text
1. ∀x (Fx ∨ Gx)                             [A]
2. ¬(∀x Fx ∨ ∀x Gx)                         [A]
3. ¬∀x Fx                                   [(2)]
4. ¬∀x Gx                                   [(2)]
5. ∃x ¬Fx                                   [(3)]
6. ∃x ¬Gx                                   [(4)]
7. ¬Fa                                      [(5)]
8. ¬Gb                                      [(6)]
9. Fa ∨ Ga                                  [(1)]
├─ 10. Fa                                   [(9)]   ↯
└─ 11. Ga                                   [(9)]
   12. Fb ∨ Gb                              [(1)]
   ├─ 13. Fb                                [(12)]
   └─ 14. Gb                                [(12)]  ↯
```

Der in (13) endende Ast lässt sich offenbar nicht schließen – richtigerweise, denn die Sätze an der Wurzel des Baumes sind tatsächlich *nicht* inkonsistent. Allerdings wird hier erneut ein Unterschied zum Verfahren für AL deutlich: Den Zustand eines voll ausentwickelten Astes können wir im Beispiel nicht erreichen. Es gibt immer noch Möglichkeiten, durch Anwendung der Quantorenregeln neue Individuenkonstanten einzuführen und somit neue Sätze zu generieren (z.B.: „¬Fc“), die bisher noch nicht auf dem Ast stehen. Es ist allerdings klar, dass dies nur zu Wiederholungen der im Wahrheitsbaum schon vorhandenen Konstellationen mit anderen Individuenkonstanten führen wird und deshalb ebensowenig wie die bereits ausgeführte Entwicklung zum Abschluss aller Äste führen kann.

In diesem Fall hilft uns der Baum, wie er oben entwickelt ist, auch auf andere Weise, uns Gewissheit zu verschaffen, dass sich der letzte Ast auf keinen Fall wird abschließen lassen. Wir können nämlich vom nicht abgeschlossenen Ast ein *Gegenmodell* ablesen, d.h. eine Interpretation, die alle Sätze an der Wurzel des Baumes wahr macht. Im Ast finden wir die Sätze

$$Fb \qquad \neg Fa \qquad Ga \qquad \neg Gb$$

Mit Hilfe dieser Sätze können wir das folgende Modell konstruieren: Die Trägermenge besteht aus nur zwei Gegenständen, $A$ und $B$. Die durch „$Fx$“ ausgedrückte Eigenschaft kommt $B$ zu, nicht aber $A$; die durch „$Gx$“ ausgedrückte Eigenschaft kommt $A$ zu, nicht aber $B$. Hinsichtlich dieser Interpretation sind beide Sätze an der Wurzel des Wahrheitsbaums wahr. Die Sätze sind also ganz sicher nicht unvereinbar miteinander.

### 351. Weitere Beispiele für die Anwendung des Verfahrens

Im Allgemeinen ist der Schluss von $\forall x\,\exists y\,\varphi$ auf $\exists y\,\forall x\,\varphi$ nicht logisch gültig. Das folgende Beispiel zeigt, dass es aber bestimmte Sonderfälle gibt, für die daraus ein gültiger Schluss wird. Gezeigt wird

<!-- p. 135 | pdf 143 -->

$$\forall x\,\exists y\,(Fx \rightarrow Gy) \vDash \exists y\,\forall x\,(Fx \rightarrow Gy)$$

Das Beispiel ist außerdem eine neuerliche Illustration der Einsicht, dass die Entwicklungsregel für Allsätze zuweilen mehrfach auf ein und denselben Satz angewendet werden muss.

```text
∀x ∃y (Fx → Gy)                             [A]
¬∃y ∀x (Fx → Gy)                            [A]
∀y ¬∀x (Fx → Gy)
¬∀x (Fx → Ga)
∃x ¬(Fx → Ga)
¬(Fb → Ga)
Fb
¬Ga
∃y (Fb → Gy)
Fb → Gc
├─ ¬Fb                                      ↯
└─ Gc
   ¬∀x (Fx → Gc)
   ∃x ¬(Fx → Gc)
   ¬(Fd → Gc)
   Fd
   ¬Gc                                      ↯
```

### 352. Weitere Beispiele für die Anwendung des Verfahrens

Gezeigt wird die Gültigkeit des Schlusses

$$\begin{array}{l} \forall x\,\forall y\,\forall z\,(Rxy \wedge Ryz \rightarrow Rxz) \\ \forall x\,\forall y\,(Rxy \rightarrow Ryx) \\ \forall x\,\exists y\,(Rxy \vee Ryx) \\ \hline \forall x\,Rxx \end{array}$$

<!-- p. 136 | pdf 144 -->

```text
∀x ∀y ∀z (Rxy ∧ Ryz → Rxz)                  [A]
∀x ∀y (Rxy → Ryx)                           [A]
∀x ∃y (Rxy ∨ Ryx)                           [A]
¬∀x Rxx                                     [A]
∃x ¬Rxx
¬Raa
∃y (Ray ∨ Rya)
Rab ∨ Rba
∀y ∀z (Ray ∧ Ryz → Raz)
∀z (Rab ∧ Rbz → Raz)
Rab ∧ Rba → Raa
├─ ¬(Rab ∧ Rba)
│  ├─ ¬Rab
│  │  ├─ Rab                                ↯
│  │  └─ Rba
│  │     ∀y (Rby → Ryb)
│  │     Rba → Rab
│  │     ├─ ¬Rba                            ↯
│  │     └─ Rab                             ↯
│  └─ ¬Rba
│     ├─ Rba                                ↯
│     └─ Rab
│        ∀y (Ray → Rya)
│        Rab → Rba
│        ├─ ¬Rab                            ↯
│        └─ Rba                             ↯
└─ Raa                                      ↯
```

### 353. Korrektheit des prädikatenlogischen Wahrheitsbaumverfahrens

> Vgl. auch die Beweise der Korrektheit und Vollständigkeit des prädikatenlogischen Wahrheitsbaumverfahrens in Beckermann 2003, Abschnitt 27.2, Howson 1997, Kap. 8 und Bostock 1997, Abschnitte 4.5 u. 4.7.

△ **Korrektheit des Wahrheitsbaumverfahrens: Jede Menge von Sätzen einer PL-Sprache, aus denen sich ein Wahrheitsbaum entwickeln lässt, dessen sämtliche Äste geschlossen sind, ist inkonsistent.**

Beweis:

Der Beweis ist eine einfache Erweiterung des Beweises der Korrektheit des aussagenlogischen Wahrheitsbaumverfahrens (vgl. Folie 152). Zur Erinnerung: Dort hatten wir für

<!-- p. 137 | pdf 145 -->

```text
verzweigende Regeln          und          nichtverzweigende Regeln
Δ                             Δ
α                              α
├─ β                           β
└─ γ                           γ
```

die folgenden zwei Behauptungen gezeigt:

(V) Für alle verzweigenden Regeln gilt: Wenn $\Delta, \alpha$ konsistent ist, dann ist $\Delta, \alpha, \beta$ konsistent, *oder* es ist $\Delta, \alpha, \gamma$ konsistent.

(N) Für alle nichtverzweigenden Regeln gilt: Wenn $\Delta, \alpha$ konsistent ist, dann ist auch $\Delta, \alpha, \beta, \gamma$ konsistent.

Nun sind vier neue, nichtverzweigende Regeln hinzugekommen, für die wir (N) noch zeigen müssen.

Wenn $\Delta, \exists\xi\,\varphi$ konsistent ist, muss es eine Interpretation $I$ geben, hinsichtlich derer $\exists\xi\,\varphi$ und alle Sätze in $\Delta$ wahr sind. Wenn $\alpha$ eine Individuenkonstante ist, die in keinem der Sätze aus $\Delta, \exists\xi\,\varphi$ vorkommt, dann können wir $I$ so zu $I'$ abwandeln, dass $I'$ der Kostanten $\alpha$ ein Element zuordnet, so dass $\varphi(\alpha/\xi)$ wahr wird (ein solches Element muss es geben, da ja $\exists\xi\,\varphi$ bzgl. $I$ wahr ist) und in allen übrigen Punkten völlig mit $I$ übereinstimmt. Da die Umbewertung von $\alpha$ für die Wahrheitswerte der Sätze in $\Delta$ und für $\exists\xi\,\varphi$ keine Rolle spielen kann, macht $I'$ dann neben $\varphi(\alpha/\xi)$ auch $\exists\xi\,\varphi$ und alle Sätze in $\Delta$ wahr, somit ist $\Delta, \exists\xi\,\varphi, \varphi(\alpha/\xi)$ konsistent.

Wenn $\Delta, \forall\xi\,\varphi$ konsistent ist, muss es eine Interpretation $I$ geben, hinsichtlich derer $\forall\xi\,\varphi$ und alle Sätze in $\Delta$ wahr sind. Dieselbe Interpretation macht dann für eine beliebige Individuenkonstante $\alpha$ auch $\varphi(\alpha/\xi)$ wahr. Daher ist dann auch $\Delta, \forall\xi\,\varphi, \varphi(\alpha/\xi)$ konsistent.

> Für den Fall, dass $\alpha$ in der in Rede stehenden PL-Sprache bisher nicht vorkam und deshalb die Anwendung der Quantorenregeln hier eine Erweiterung der Sprache erforderlich macht, muss man auch im Fall der $\forall$-Regel über eine abgewandelte Interpretation $I'$ der neuen, erweiterten Sprache argumentieren, die in fast allen Punkten mit $I$ übereinstimmt und nur zusätzlich der neuen Individuenkonstante ein Element aus $D$ zuweist.

Wenn $\Delta, \neg\exists\xi\,\varphi$ konsistent ist, ist auch $\Delta, \neg\exists\xi\,\varphi, \forall\xi\,\neg\varphi$ konsistent, da $\neg\exists\xi\,\varphi \equiv \forall\xi\,\neg\varphi$.

Wenn $\Delta, \neg\forall\xi\,\varphi$ konsistent ist, ist auch $\Delta, \neg\forall\xi\,\varphi, \exists\xi\,\neg\varphi$ konsistent, da $\neg\forall\xi\,\varphi \equiv \exists\xi\,\neg\varphi$.

(V) und (N) gelten also auch für das prädikatenlogische Wahrheitsbaumverfahren, und das bedeutet auch hier: Wenn eine Menge von Aussagen an der Wurzel eines Wahrheitsbaumes konsistent ist, dann muss auch mindestens ein Ast des Baums (bzw. die Menge der auf ihm stehenden Sätze) konsistent sein.

Abermals folgt: Wenn in einem Wahrheitsbaum alle Äste geschlossen sind (also inkonsistente Satzmengen enthalten), muss die Menge von Sätzen an seiner Wurzel inkonsistent sein. Q.E.D.

### 354. Vollständigkeit des prädikatenlogischen Wahrheitsbaumverfahrens

△ **Vollständigkeit des Wahrheitsbaumverfahrens: Aus jeder endlichen inkonsistenten Menge von Sätzen einer PL-Sprache lässt sich ein Wahrheitsbaum entwickeln, dessen sämtliche Äste geschlossen sind.**

Beweis:

Wir zeigen (was äquivalent ist): *Jede nicht-abschließbare prädikatenlogische Wahrheitsbaum-Wurzel besteht aus einer konsistenten Menge von Sätzen.*

> Dieser Satz ist, genauer gesagt, äquivalent zur folgenden Behauptung: Jeder Wahrheitsbaum, der in einer inkonsistenten Menge wurzelt, ist abschließbar. Er ist also nur deshalb tatsächlich äquivalent zur Vollständigkeitsbehauptung, wie wir sie oben definiert haben, weil wir diese auf endliche Satzmengen beschränkt haben. (Denn in einer unendlichen inkonsistenten Satzmenge kann überhaupt kein Wahrheitsbaum wurzeln.)

<!-- p. 138 | pdf 146 -->

> Trotzdem lässt sich auch aus einer unendlichen inkonsistenten Satzmenge heraus immer ein abschließbarer Wahrheitsbaum entwickeln (der nämlich in einer Teilmenge der unendlichen inkonsistenten Menge wurzelt). Diesen, etwas aufwändigeren Beweis sparen wir hier jedoch aus. Siehe Bostock 1997, Abschnitte 4.6-4.7.

Sei $W$ eine solche nicht-abschließbare Wahrheitsbaum-Wurzel, das heißt eine Menge von Sätzen, bei der sich die Regeln des Wahrheitsbaumverfahrens auf keine wie auch immer geartete Weise so anwenden lassen, dass am Ende alle Äste des Baums geschlossen sind.

> Anders als bei den aussagenlogischen Wahrheitsbäumen können wir beim prädikatenlogischen Verfahren leider nicht von voll ausentwickelten Ästen und fertigen Bäumen sprechen, denn durch die Quantorenregeln lassen sich immer unendlich viele neue Sätze erzeugen. Stattdessen führen wir eine andere Konstruktion ein:

Auf diese Menge wenden wir nun eine ganz bestimmte, regelmäßige Art und Weise an, den Wahrheitsbaum zu entwickeln. Diese Methode nennen wir die *kanonische Entwicklung*. Da sich $W$ auf *keine* Weise in einen überall abgeschlossenen Wahrheitsbaum entwickeln lässt, muss auch bei dieser Methode immer mindestens ein Ast offen bleiben.

Die kanonische Entwicklung erfolgt in Zyklen, bei denen die Schritte (1)-(4) nacheinander und immer wieder von neuem bei (1) beginnend angewandt werden. (Zwischendurch werden natürlich abschließbare Äste geschlossen und nicht mehr weiter entwickelt.)

(1) Wende alle aussagenlogischen Regeln an, solange bis jeder Ast entweder abgeschlossen ist oder auf ihm mit Hilfe dieser Regeln keine Sätze mehr erzeugt werden können, die nicht bereits auf ihm stehen.

(2) Entwickle alle Sätze der Formen $\neg\exists\xi\,\varphi$ und $\neg\forall\xi\,\varphi$ mit Hilfe der entsprechenden Regeln (zu $\forall\xi\,\neg\varphi$ bzw. $\exists\xi\,\neg\varphi$).

(3) Wende die Regel für Existenzsätze unter Einführung neuer Individuenkonstanten an, und zwar so oft es geht, ohne die Regel mehr als einmal auf demselben Ast auf denselben Satz anzuwenden.

(4) Wende die Regel für Allsätze an, und zwar so oft es geht, ohne Individuenkonstanten einzuführen, die nicht schon im Baum vorkommen und ohne einen Satz auf einen Ast zu schreiben, der dort genau so schon steht. Ausnahme: Wenn bisher überhaupt noch keine Individuenkonstante im Baum vorkommt, darf in diesem Schritt eine einzige neue Konstante eingeführt werden.

> Um zu zeigen, dass die kanonische Entwicklung wohldefiniert ist, müssen wir sicherstellen, dass jede Phase dieses Zyklus immer in endlich vielen Schritten abschließbar ist. Da der Baum bei jedem einzelnen Entwicklungsschritt immer nur aus einer endlichen Zahl von Sätzen besteht (in denen nur endlich viele Individuenkonstanten vorkommen können), kann man sich dies durch Betrachtung der Anwendungsbedingungen der einzelnen Phasen klar machen.

Es kann sein, dass die kanonische Entwicklung auch bei einer nicht-abschließbaren Wurzel zu einem Halt kommt, weil keiner der Schritte mehr im Einklang mit den in (1)-(4) formulierten Bedingungen angewandt werden kann. (Folie 350 zeigt ein Beispiel für einen solchen Fall.) Es kann aber auch passieren, dass die kanonische Entwicklung sozusagen zu einem unendlich langen Ast führt, wie das folgende Beispiel zeigt:

```text
1. ∀x ∃y Fxy                                [A]
2. ∃y Fay                                   [(1)]
3. Fab                                      [(2)]
4. ∃y Fby                                   [(1)]
5. Fbc                                      [(2)]
6. ∃y Fcy                                   [(1)]
7. Fcd                                      [(2)]
   ⋮
```

<!-- p. 139 | pdf 147 -->

Die kanonische Entwicklung unserer Wurzel muss also zwar mindestens einen Ast besitzen, der nicht abgeschlossen ist, bei diesem kann es sich unter Umständen aber um einen unendlich langen Ast handeln.

Sei also $A$ ein nicht-abgeschlossener Ast der kanonischen Entwicklung von $W$. Dann konstruieren wir die *kanonische Interpretation* $I$ wie folgt: Der Träger $D$ von $I$ besteht aus so vielen Elementen, wie auf $A$ Individuenkonstanten vorkommen. Jeder Individuenkonstanten wird ein anderes Element des Trägers zugeordnet. Die Prädikatbuchstaben werden so interpretiert, dass die durch sie ausgedrückten Eigenschaften bzw. Relationen dann und nur dann bestehen, wenn der entsprechende atomare Satz ausdrücklich auf dem Ast $A$ steht.

> Mit einem „atomaren Satz“ ist hier natürlich ein Satz gemeint, der nur aus einem Prädikatbuchstaben in Anwendung auf eine oder mehrere Individuenkonstante besteht.

Die Behauptung ist nun: Hinsichtlich der kanonischen Interpretation sind *alle* Sätze auf $A$ wahr. Für die atomaren Sätze ist das unmittelbar offensichtlich. Die Erweiterung auf alle Sätze erreichen wir durch vollständige Induktion über die Länge des Satzes.

Induktionsannahme ist, dass für alle Sätze aus weniger als $n$ Zeichen gegeben ist, dass sie hinsichtlich $I$ wahr sind. Induktionsschritt: Sei $\chi$ ein Satz auf $A$ mit $n$ Zeichen. Zu zeigen: $\chi$ ist wahr hinsichtlich $I$. Wir müssen sechs verschiedene Möglichkeiten berücksichtigen (deren erste zwei uns zugleich den Induktionsanfang liefern werden, denn sie betreffen die kürzestmöglichen Sätze und wir beweisen sie ohne Rückgriff auf die Induktionsannahme). a) $\chi$ ist ein atomarer Satz. b) $\chi$ ist ein negierter atomarer Satz. c) $\chi$ ist eine andere aussagenlogische Verknüpfung oder negierte aussagenlogische Verknüpfung. d) $\chi$ ist ein Allsatz. e) $\chi$ ist ein Existenzsatz. f) $\chi$ ist ein negierter All- oder Existenzsatz.

a) Ist $\chi$ atomar, so ist $\chi$ offensichtlich wahr hinsichtlich $I$.

b) Hat $\chi$ die Form $\neg\varphi$ (mit $\varphi$ atomar), dann steht $\varphi$ nicht auf $A$ (da $A$ nicht abgeschlossen ist) und ist demzufolge durch $I$ als falsch interpretiert, $\neg\varphi$ demzufolge als wahr.

c) Ist $\chi$ eine andere aussagenlogische Verknüpfung (oder negierte aussagenlogische Verknüpfung), dann müssen auf $A$ auch ein oder zwei kürzere Sätze zu finden sein, die durch Anwendung einer der aussagenlogischen Entwicklungsregeln in Stufe (1) der kanonischen Entwicklung erzeugt worden sind. Wie wir bereits früher beobachtet haben (vgl. Sätze (V') und (N') in Folie 153), gilt für die aussagenlogischen Regeln: Für Regeln, bei denen auf $A$ zwei Sätze $\beta, \gamma$ erzeugt wurden, gilt $\beta \wedge \gamma \vDash \chi$; für Regeln bei denen auf $A$ ein Satz $\beta$ erzeugt wurde, gilt $\beta \vDash \chi$. Wenn die kürzeren Sätze hinsichtlich $I$ wahr sind (Induktionsannahme), ist es deshalb auch $\chi$.

d) Hat $\chi$ die Form $\forall\xi\,\varphi$, dann steht für jede im Ast $A$ überhaupt auftretende Individuenkonstante $\alpha$ irgendwo auf $A$ auch ein bei Ausführung von Stufe (4) der kanonischen Entwicklung generierter Satz der Form $\varphi(\alpha/\xi)$. Wenn diese kürzeren Sätze alle wahr bzgl. $I$ sind (Induktionsannahme), dann ist auch $\forall\xi\,\varphi$ wahr hinsichtlich $I$ (da ja im Träger $D$ von $I$ keine Elemente vorkommen, die nicht durch eine der Individuenkonstanten bezeichnet wären).

e) Hat $\chi$ die Form $\exists\xi\,\varphi$, dann steht irgendwo auf $A$ auch ein Satz der Form $\varphi(\alpha/\xi)$, der bei Stufe (3) der kanonischen Entwicklung entstanden sein muss. Wenn dieser kürzere Satz wahr hinsichtlich $I$ ist (Induktionsannahme), dann ist auch $\exists\xi\,\varphi$ wahr hinsichtlich $I$.

f) Hat $\chi$ die Form $\neg\exists\xi\,\varphi$, dann steht auf $A$ auch ein Satz selber Länge der Form $\forall\xi\,\neg\varphi$; dieser ist logisch äquivalent zu $\chi$ und muss, da er unter Fall d) fällt, wahr hinsichtlich $I$ sein.

Hat $\chi$ die Form $\neg\forall\xi\,\varphi$, dann steht auf $A$ auch ein Satz selber Länge der Form $\exists\xi\,\neg\varphi$; dieser ist logisch äquivalent zu $\chi$ und muss, da er unter Fall e) fällt, wahr hinsichtlich $I$ sein.

Zusammengenommen zeigen diese Überlegungen, dass alle Sätze auf $A$ hinsichtlich der kanonischen Interpretation $I$ wahr sind. Dies gilt auch für alle Sätze an der Wurzel des Baumes, die ja auch zu $A$ gehören. Also sind diese Sätze konsistent. Q.E.D.

<!-- p. 140 | pdf 148 -->

### 355. Der Satz von Löwenheim und Skolem

△ **Satz von Löwenheim und Skolem für endliche Satzmengen: Jede konsistente, endliche Menge von Sätzen einer PL-Sprache besitzt eine Interpretation, die auf einem Träger aus höchstens abzählbar unendlich vielen Elementen besteht.**

Eine unendliche Menge heißt *abzählbar*, wenn es eine Eins-zu-eins-Zuordnung zwischen ihren Elementen und den natürlichen Zahlen gibt. Es gibt durchaus unendliche Mengen, für die das nicht zutrifft, wie etwa die Menge der reellen Zahlen.

Diese eingeschränkte Variante des Satzes von Löwenheim und Skolem lässt sich unmittelbar aus unserem Beweis der Vollständigkeit des prädikatenlogischen Wahrheitsbaumverfahrens ablesen. Denn die dort eingeführte kanonische Interpretation beruht auf einer abzählbaren Menge.

> Thoralf Skolem hat diesen Satz 1920 bereits nicht nur für endliche Satzmengen, sondern gleich für abzählbar unendliche bewiesen. Er bildete damals in gewisser Weise den Anfang einer Reihe von metalogischen Ergebnissen, die die Grenzen der PL-Sprachen aufweisen. Denn interessanterweise bedeutet der Satz zum Beispiel, dass wir in einer PL-Sprache nicht eindeutig charakterisieren können, was wir mit einer überabzählbaren Menge meinen. Auch wenn wir etwa ein Axiomensystem für die reelle Analysis in einer PL-Sprache formulieren wollten, würde es immer auch eine abzählbar unendliche Menge von Gegenständen geben, die dieses Axiomensystem erfüllt.
>
> Nach Skolems Entdeckung kam es bald zu noch stärkeren Ergebnissen, die die Grenzen der PL-Sprachen betreffen. Diese können jedoch hier nicht behandelt werden.

### 356. Syntaktische Charakterisierbarkeit

Das Vollständigkeitsergebnis bedeutet, dass man im Prinzip die logischen Eigenschaften der PL-Sprachen (welche Sätze logisch wahr sind, welche Satzmengen konsistent sind, welcher Satz aus welchem folgt) vollständig angeben kann, indem man auf die Regeln des Wahrheitsbaumverfahrens verweist. Da sich diese Regeln in ihren Anwendungsbedingungen ausschließlich auf das äußere Erscheinungsbild der auftretenden Sätze beziehen, heißt das: Die Prädikatenlogik lässt sich im Prinzip allein auf der Grundlage *syntaktischer* Eigenschaften charakterisieren.

### 357. Nicht-Charakterisierbarkeit der Logik zweiter Stufe

Dass dies keine Selbstverständlichkeit ist, zeigt das Gegenbeispiel der sog. Prädikatenlogik zweiter Stufe. Was wir hier als Logik der PL-Sprachen bezeichnet haben, nennt man auch Prädikatenlogik erster Stufe. Damit ist gemeint, dass es in den PL-Sprachen nur Variablen und Quantoren für die Ebene der Individuen gibt.

Dagegen kann man prinzipiell auch auf der Ebene der Prädikate Variablen einführen. Manche intuitiv akzeptabeln Schlüsse scheinen das nahezulegen.

$$\begin{array}{l@{\qquad}l} \text{Gudrun ist mutig.} & Mg \\ \text{Ute ist mutig} & Mu \\ \hline \text{Es gibt etwas, das Gudrun und Ute beide sind.} & \exists X\,(Xg \wedge Xu) \end{array}$$

Das Studium formaler Sprachen, die diesen Schritt erlauben, nennt man Prädikatenlogik zweiter Stufe.

Es gilt aber: Es kann kein syntaktisches Verfahren für Sprachen zweiter Stufe geben, auf dessen Grundlage sich alle logisch inkonsistenten und nur die logisch inkonsistenten Mengen von Sätzen zweiter Stufe zu einem Widerspruch führen lassen.

<!-- p. 141 | pdf 149 -->

### 358. Unentscheidbarkeit der Prädikatenlogik

Zum Schluss sei noch ein wichtiges limitatives Ergebnis genannt, das auch für PL-Sprachen (Sprachen erster Stufe) Grenzen der Formalisierbarkeit aufzeigt: Die Logik der PL-Sprachen ist *nicht entscheidbar*.

△ **Es gibt kein Entscheidungsverfahren, das man für jede beliebige Aussage einer gegebenen PL-Sprache in endlich vielen Schritten abarbeiten kann, so dass man am Ende entscheiden kann, ob sie logisch wahr ist oder nicht.**

Es könnte vielleicht der Eindruck entstehen, dass das Wahrheitsbaumverfahren ein solches Verfahren sei. Das ist aber nicht der Fall. Wir können zwar zu einer *positiven* Entscheidung über die logische Wahrheit von $\varphi$ kommen, wenn wir für $\neg\varphi$ einen Wahrheitsbaum entwickeln und endlich alle Äste schließen können. Wenn aber $\varphi$ *nicht* logisch wahr ist, kann der Fall entstehen, dass wir dies allein aufgrund des Wahrheitsbaumverfahrens an keinem Punkt definitiv feststellen können. Wir wissen nicht, ob es noch mehr Schritte braucht, um alle Äste schließen zu können, oder ob dies nie passieren wird.

> Wohlgemerkt: Nicht nur ist das Wahrheitsbaumverfahren kein Entscheidungsverfahren für PL-Sprachen; es lässt sich mit Mitteln der mathematischen Logik beweisen, dass es ein solches Verfahren nicht geben kann.

Im Unterschied dazu ist die Logik der Sprache AL entscheidbar. Ein einfaches Entscheidungsverfahren bieten dort die Wahrheitstafeln. Aber auch das Wahrheitsbaumverfahren eignet sich in der Aussagenlogik als Entscheidungsverfahren. Im Gegensatz zur Prädikatenlogik kann man bei der Aussagenlogik immer den Punkt erreichen, an dem man einen fertigen Baum (vgl. Folie 153) entwickelt hat und somit wissen kann, dass $\neg\varphi$ keine widersprüchliche Annahme war (falls es im fertigen Baum noch mindestens einen offenen Satz gibt).

## 14. Typische prädikatenlogische Argumentformen und formale Fehlschlüsse

### 359. Extensionen von Prädikaten

Im Folgenden sollen einige typische prädikatenlogische Argumentformen betrachtet werden. Ihre Gültigkeit können wir nun jeweils ganz leicht mit Hilfe des Wahrheitsbaumverfahrens überprüfen. Dennoch wollen wir noch ein zusätzliches Hilfsmittel hinzuziehen, um uns klar zu machen, auf welche Weise die Prämissen jeweils die Konklusion stützen.

In der Prädikatenlogik hilft es insbesondere bei einstelligen Prädikaten oft, sich die *Extensionen* der Prädikate zu vergegenwärtigen. Unter der Extension eines Prädikats versteht man bei einer gegebenen Interpretation die Menge all derjenigen Elemente des Trägers, die unter das Prädikat fallen. Z.B. ist die Extension des Prädikats „Mx", das wir durch die Eigenschaft interpretieren, Millionär zu sein, die Menge aller Millionäre.

### 360. Euler-Venn-Diagramme

Mengen kann man zweidimensional darstellen, mit Hilfe sogenannter Euler-Venn-Diagramme. Dies wollen wir uns auch bei den Extensionen von Prädikaten zunutze machen.

<!-- p. 142 | pdf 150 -->
> [Abbildung: Ein Quadrat (die Trägermenge $D$) enthält drei sich paarweise überschneidende Kreise in Standard-Venn-Anordnung: „P" oben links, „S" oben rechts, „M" unten. Keine Schattierung, keine Markierungen — reine Diagrammgrundform.]

In einem solchen Diagramm stellen wir uns vor, die Trägermenge $D$ der Interpretation sei über die rechteckige Fläche verteilt. Es müssen nicht überall Elemente von $D$ liegen, manche Regionen des Diagramms können leer sein. Die drei Kreise bezeichnen die Extensionen dreier einstelliger Prädikate. Alle Elemente, die die zum Prädikat „Sx" gehörige Eigenschaft besitzen, liegen innerhalb des rechten oberen Kreises usw.

### 361. PL-Sätze in Euler-Venn-Diagrammen darstellen

Wir können den Inhalt mancher Sätze von PL-Sprachen in Euler-Venn-Diagrammen darstellen. Dazu vereinbaren wir: Wir *schraffieren* solche Regionen des Diagramms, die nach Aussage des betreffenden Satzes *leer* sein müssen.

> [Abbildung: Gleiches Drei-Kreis-Diagramm (P oben links, S oben rechts, M unten) im Quadrat $D$. Rot schraffiert ist die gesamte Fläche des Quadrats mit Ausnahme des Kreises „S" (einschließlich aller Überschneidungen von S mit P und M) — d.h. alles außerhalb von S, auch der Bereich außerhalb aller drei Kreise, ist schraffiert; der komplette Kreis S bleibt weiß/unschraffiert.]

Das nebenstehende Diagramm ist dann eine Darstellung des Satzes

$$\forall x\, Sx$$

### 362. PL-Sätze in Euler-Venn-Diagrammen darstellen

Nach demselben Prinzip ist das folgende Diagramm eine Darstellung von

$$\forall x\,(Sx \rightarrow Mx)$$

> [Abbildung: Drei-Kreis-Diagramm (P oben links, S oben rechts, M unten). Rot schraffiert ist der Teil von S, der außerhalb von M liegt: sowohl der reine S-Bereich (S ohne P und M) als auch der Überschneidungsbereich von P und S außerhalb M (P∩S∖M); die Schraffur reicht bis an den Rand von M heran, aber nicht darüber hinaus. S∩M, P∩S∩M, P∩M, M allein, P allein und der Bereich außerhalb aller Kreise bleiben weiß.]

Denn „$\forall x\,(Sx \rightarrow Mx)$" bedeutet, dass alle Elemente von $D$, die innerhalb der Extension von „S" liegen, auch innerhalb der Extension von „M" liegen.

<!-- p. 143 | pdf 151 -->
### 363. PL-Sätze in Euler-Venn-Diagrammen darstellen

Existenzaussagen drücken wir auf andere Weise aus:

Der *grüne Punkt* soll bedeuten, dass das von Linien umschlossene Feld, innerhalb dessen er sich befindet, *nicht leer* ist. Das nebenstehende Diagramm ist deshalb eine Darstellung von

$$\exists x\,(Px \wedge Sx \wedge Mx)$$

> [Abbildung: Drei-Kreis-Diagramm (P oben links, S oben rechts, M unten), unschraffiert. Ein grüner Punkt sitzt genau im mittleren Feld, der Schnittmenge aller drei Kreise (P∩S∩M).]

### 364. PL-Sätze in Euler-Venn-Diagrammen darstellen

Durch ein mit Linien verbundenes *Netz von grünen Punkten* drücken wir aus, dass *mindestens eines der betreffenden Felder nicht leer* ist.

Das nebenstehende Diagramm stellt daher den folgenden Satz dar:

$$\exists x\, Sx$$

> [Abbildung: Drei-Kreis-Diagramm (P oben links, S oben rechts, M unten), unschraffiert. Vier grüne Punkte, durch gestrichelte grüne Linien zu einem Viereck verbunden, liegen in den vier Teilregionen, aus denen sich der Kreis S zusammensetzt: ein Punkt im Bereich P∩S (ohne M), ein Punkt im Bereich S allein (nahe der Beschriftung „S"), ein Punkt im zentralen Feld P∩S∩M, ein Punkt im Bereich S∩M (ohne P). Auf jeder der vier Verbindungslinien zwischen benachbarten Punkten steht ein Fragezeichen „?". Darstellung von $\exists x\, Sx$ als Disjunktion der vier Teilregionen von S: mindestens eine ist nicht leer.]

### 365. PL-Sätze in Euler-Venn-Diagrammen darstellen

Dieses Beispiel ist eine Darstellung von

$$\neg\forall x\,(Sx \rightarrow Mx)$$

> [Abbildung: Drei-Kreis-Diagramm (P oben links, S oben rechts, M unten), unschraffiert. Zwei grüne Punkte, durch eine gestrichelte grüne Linie mit einem Fragezeichen „?" verbunden: ein Punkt im Bereich P∩S (ohne M), ein Punkt im Bereich S allein (ohne P und M). Beide Punkte liegen in S∖M.]

Denn „$\neg\forall x\,(Sx \rightarrow Mx)$" bedeutet, dass nicht alle Elemente, die zur Extension von „S" gehören, auch zur Extension von „M" gehören. D.h. es gibt mindestens ein Element, das innerhalb der Extension von „S" liegt, aber außerhalb der Extension von „M".

### 366. Kategorische Aussagen

Vor der Erfindung der Prädikatenlogik gab es in der traditionellen Logik bereits seit der Antike eine Theorie über Argumente, die aus einer ganz bestimmten Art von Aussagen aufgebaut sind, die wir heute als quantifizierte Aussagen verstehen würden. Es handelt sich dabei um die folgenden vier Typen.

<!-- p. 144 | pdf 152 -->
| | |
|---|---|
| **(A)** Alle S sind P. | **(E)** Kein S ist P. |
| **(I)** Einige S sind P. | **(O)** Einige S sind nicht P. |

Aussagen nach dem Muster dieser vier Typen werden manchmal kategorische Aussagen genannt. Gültige Argumente, die zwei solcher Aussagen als Prämissen und eine als Konklusion haben, heißen *kategorische Syllogismen*.

> Die Buchstaben „(A)", „(E)", „(I)", „(O)", mit denen die kategorischen Aussageformen bezeichnet sind, haben eine bloß traditionelle Bedeutung. Sie brauchen sie sich nicht zu merken. In der mittelalterlichen Logik wurden sie in einem raffinierten System verwendet, um mit Hilfe von Merkwörtern wie „**Barbara**" alle Kombinationen der Aussagen, die gültige Schlüsse ergeben, auswendig zu lernen. Die beiden Aussageformen in der linken Spalte sind bejahend, „(A)" und „(I)" stehen daher für lat. „**affirmo**", die beiden rechten Aussagen sind verneinend, „(E)" und „(O)" stehen für „**nego**".

### 367. Kategorische Aussagen

Die folgenden Formalisierungen geben die kategorischen Aussagen in einer PL-Sprache wieder.

| | |
|---|---|
| **(A)** Alle S sind P.<br>$\forall x\,(Sx \rightarrow Px)$ | **(E)** Kein S ist P.<br>$\neg\exists x\,(Sx \wedge Px)$ |
| **(I)** Einige S sind P.<br>$\exists x\,(Sx \wedge Px)$ | **(O)** Einige S sind nicht P.<br>$\exists x\,(Sx \wedge \neg Px)$ |

> Diese Formalisierungen entsprechen der modernen Auffassung der Logik. In der traditionellen Auffassung wurde eine Aussage der Form (A) so verstanden, dass sie auch impliziert, dass es mindestens einen Gegenstand gibt, der unter den Begriff S fällt. Wie Sie wissen, wird das in der Prädikatenlogik nicht vorausgesetzt: Die Extension von „Sx" kann auch leer sein. Von diesem Punkt abgesehen, gibt es sehr weitreichende Entsprechungen zwischen der traditionellen Syllogismenlehre und den hier dargestellten formalen Aussagen.

Im Folgenden werden wir uns einige kategorische Syllogismen anschauen und uns ihre Gültigkeit mit Hilfe von Euler-Venn-Diagrammen klar machen.

### 368. Kategorische Syllogismen (Beispiel: „Barbara")

$$\begin{array}{l@{\qquad}l}
\forall x\,(Mx \rightarrow Px) & \text{Alle Dozenten sind schusselig.} \\
\forall x\,(Sx \rightarrow Mx) & \text{Alle Professoren sind Dozenten.} \\
\hline
\forall x\,(Sx \rightarrow Px) & \text{Alle Professoren sind schusselig.}
\end{array}$$

<!-- p. 145 | pdf 153 -->
Erste Prämisse:

$\forall x\,(Mx \rightarrow Px)$
(Alle Dozenten sind schusselig.)

> [Abbildung: Drei-Kreis-Diagramm mit den Beschriftungen „[Schusselige] P" oben links, „S [Professoren]" oben rechts, „M [Dozenten]" unten. Rot schraffiert ist der Teil von M, der außerhalb von P liegt (M∖P): der Bereich M allein sowie der Überschneidungsbereich S∩M ohne P. Die Bereiche P∩M, P∩S∩M sowie alles außerhalb von M bleiben weiß.]

Hinzufügung der zweiten Prämisse:

$\forall x\,(Mx \rightarrow Px)$
$\forall x\,(Sx \rightarrow Mx)$
Alle Professoren sind Dozenten.

> [Abbildung: Gleiches Diagramm. Zusätzlich zur bereits schraffierten Fläche M∖P ist nun auch der Teil von S, der außerhalb von M liegt (S∖M), rot schraffiert — das schließt den Bereich S allein und den Überschneidungsbereich P∩S ohne M mit ein. Unschraffiert bleiben nur noch: P allein, P∩M ohne S, das zentrale Feld P∩S∩M, und der Bereich außerhalb aller Kreise.]

An der Darstellung der beiden Prämissen kann man ablesen, dass in einer Welt, in der „$\forall x\,(Mx \rightarrow Px)$" und „$\forall x\,(Sx \rightarrow Mx)$" gelten, alle Dinge, die in der Extension von „S" liegen, auch in „P" liegen. D.h. aber:

$\forall x\,(Sx \rightarrow Px)$
(Alle Professoren sind schusselig.)

### 369. Kategorische Syllogismen (Beispiel: „Camenes")

$$\begin{array}{l@{\qquad}l}
\forall x\,(Px \rightarrow Mx) & \text{Alle katholischen Priester sind Männer.} \\
\neg\exists x\,(Mx \wedge Sx) & \text{Kein Mann ist schwanger.} \\
\hline
\neg\exists x\,(Sx \wedge Px) & \text{Keine Schwangere ist katholischer Priester.}
\end{array}$$

Erste Prämisse:

$\forall x\,(Px \rightarrow Mx)$
(Alle katholischen Priester sind Männer.)

> [Abbildung: Drei-Kreis-Diagramm mit Beschriftungen „[katholische Priester] P" oben links, „S [Schwangere]" oben rechts, „M [Männer]" unten. Rot schraffiert ist der Teil von P, der außerhalb von M liegt (P∖M): der Bereich P allein sowie der Überschneidungsbereich P∩S ohne M.]

<!-- p. 146 | pdf 154 -->
Hinzufügung der zweiten Prämisse:

$\forall x\,(Px \rightarrow Mx)$
$\neg\exists x\,(Mx \wedge Sx)$
(Kein Mann ist schwanger.)

> [Abbildung: Gleiches Diagramm. Zusätzlich zur bereits schraffierten Fläche P∖M ist nun auch der gesamte Überschneidungsbereich von M und S (M∩S, einschließlich des zentralen Feldes P∩S∩M) rot schraffiert. Unschraffiert bleiben: S allein (ohne P und M), M allein (ohne P und S), P∩M ohne S, sowie der Bereich außerhalb aller Kreise.]

Es lässt sich erkennen, dass, wo „$\forall x\,(Px \rightarrow Mx)$" und „$\neg\exists x\,(Mx \wedge Sx)$" gelten, der Überschneidungsbereich der Extensionen von „S" und „P" leer sein muss. Das heißt aber:

$\neg\exists x\,(Sx \wedge Px)$
(Keine Schwangere ist katholischer Priester.)

### 370. Kategorische Syllogismen (Beispiel: „Darii")

$$\begin{array}{l@{\qquad}l}
\forall x\,(Mx \rightarrow Px) & \text{Alle Säugetiere sind Warmblüter.} \\
\exists x\,(Sx \wedge Mx) & \text{Einige Raubtiere sind Säugetiere.} \\
\hline
\exists x\,(Sx \wedge Px) & \text{Einige Raubtiere sind Warmblüter.}
\end{array}$$

Erste Prämisse:

$\forall x\,(Mx \rightarrow Px)$
(Alle Säugetiere sind Warmblüter.)

> [Abbildung: Drei-Kreis-Diagramm mit Beschriftungen „[Warmblüter] P" oben links, „S [Raubtiere]" oben rechts, „M [Säugetiere]" unten. Rot schraffiert ist der Teil von M außerhalb P (M∖P): M allein sowie S∩M ohne P.]

Hinzufügung der zweiten Prämisse:

$\forall x\,(Mx \rightarrow Px)$
$\exists x\,(Sx \wedge Mx)$
(Einige Raubtiere sind Säugetiere.)

> [Abbildung: Gleiches Diagramm, M∖P weiterhin rot schraffiert. Zusätzlich zwei grüne Punkte mit gestricheltem Verbindungsstrich und Fragezeichen „?": ein Punkt liegt im zentralen (unschraffierten) Feld P∩S∩M, der andere liegt im bereits rot schraffierten Bereich S∩M ohne P. Da Letzterer bereits als leer markiert ist, muss die durch die Punkte behauptete Existenzaussage im zentralen Feld zutreffen.]

Aus der Kombination der hier dargestellten Informationen ergibt sich, dass das zentrale Feld des Diagramms nicht leer sein kann. Das bedeutet aber, dass mindestens ein Element im Überschneidungsbereich der Extensionen von „S" und „P" liegt. D.h.:

$\exists x\,(Sx \wedge Px)$
(Einige Raubtiere sind Warmblüter.)

<!-- p. 147 | pdf 155 -->
### 371. Kategorische Syllogismen (Beispiel: „Baroco")

$$\begin{array}{l@{\qquad}l}
\forall x\,(Px \rightarrow Mx) & \text{Alle EU-Länder liegen in Europa.} \\
\exists x\,(Sx \wedge \neg Mx) & \text{Einige Natostaaten liegen nicht in Europa.} \\
\hline
\exists x\,(Sx \wedge \neg Px) & \text{Einige Natostaaten sind keine EU-Länder.}
\end{array}$$

Erste Prämisse:

$\forall x\,(Px \rightarrow Mx)$
(Alle EU-Länder liegen in Europa.)

> [Abbildung: Drei-Kreis-Diagramm mit Beschriftungen „[EU-Länder] P" oben links, „S [Natostaaten]" oben rechts, „M [Länder in Europa]" unten. Rot schraffiert ist der Teil von P außerhalb M (P∖M): P allein sowie P∩S ohne M.]

Hinzufügung der zweiten Prämisse:

$\forall x\,(Px \rightarrow Mx)$
$\exists x\,(Sx \wedge \neg Mx)$
(Einige Natostaaten liegen nicht in Europa.)

> [Abbildung: Gleiches Diagramm, P∖M weiterhin rot schraffiert. Zusätzlich zwei grüne Punkte mit gestricheltem Verbindungsstrich und Fragezeichen „?": ein Punkt liegt im bereits rot schraffierten Bereich P∩S ohne M, der andere liegt im unschraffierten äußeren Bereich von S (S allein, außerhalb von P und M). Da Ersterer bereits als leer markiert ist, muss die Existenzaussage im äußeren S-Bereich zutreffen.]

Aus der Kombination der in dem Diagramm enthaltenen Informationen lässt sich diesmal ablesen, dass der äußere Bereich der Extension von „S", der weder zur Extension von „P" noch zur Extension von „M" gehört, nicht leer sein kann.
Das bedeutet aber auch, dass es sozusagen ein S gibt, dass nicht P ist:

$\exists x\,(Sx \wedge \neg Px)$
(Einige Natostaaten sind keine EU-Länder.)

### 372. Kategorische Syllogismen (Beispiel: „Ferison")

Wie würden Sie den Syllogismus des Typs „Ferison" im Euler-Venn-Diagramm darstellen?

$$\begin{array}{l@{\qquad}l}
\neg\exists x\,(Mx \wedge Px) & \text{Kein BAföG-Empfänger ist reich.} \\
\exists x\,(Mx \wedge Sx) & \text{Einige BAföG-Empfänger sind Studenten.} \\
\hline
\exists x\,(Sx \wedge \neg Px) & \text{Einige Studenten sind nicht reich.}
\end{array}$$

<!-- p. 148 | pdf 156 -->
### 373. Quasi-Syllogismus

Nicht im strengen Sinne ein kategorischer Syllogismus ist die folgende Argumentform, die aber wegen ihre Ähnlichkeit zu den kategorischen Syllogismen manchmal *Quasi-Syllogismus* genannt wird.

$$\begin{array}{l@{\qquad}l}
\forall x\,(Mx \rightarrow Px) & \text{Alle Kommunisten befürworten ein staatliches Gesundheitssystem.} \\
Ma & \text{Hans Meier ist ein Kommunist.} \\
\hline
Pa & \text{Hans Meier befürwortet ein staatliches Gesundheitssystem.}
\end{array}$$

Ebenso gültig ist die folgende Argumentform, für die es allerdings keinen besonderen Namen gibt.

$$\begin{array}{l@{\qquad}l}
\forall x\,(Px \rightarrow Mx) & \text{Alle Kommunisten befürworten ein staatliches Gesundheitssystem} \\
\neg Ma & \text{Es ist nicht der Fall, dass Hans Meier ein staatliches Gesundheitssystem befürwortet.} \\
\hline
\neg Pa & \text{Hans Meier ist kein Kommunist.}
\end{array}$$

### 374. Viele gültige Argumentformen

Vergessen Sie nicht, dass es unendlich viele gültige Argumentformen gibt – mehr als wir mit Namen benennen können. Hier sind einige Beispiele für Schlüsse, die wir bereist als gültig erkannt haben, ohne dass es einen bestimmten traditionellen Namen für diese Argumentformen gäbe.

$$\begin{array}{l@{\qquad}l@{\qquad}l}
\exists x\,\forall y\, Fxy & \exists x\,(Fx \wedge Gx) & \forall x\, Fx \vee \forall x\, Gx \\
\hline
\forall y\,\exists x\, Fxy & \exists x\, Fx \wedge \exists x\, Gx & \forall x\,(Fx \vee Gx)
\end{array}$$

> Dies sind alles Beispiele für Schlüsse, die in dieser Richtung gültig sind, in der umgekehrten (von „unten" nach „oben" aber nicht!

Bedenken Sie außerdem, dass natürlich auch alle von uns erkannten prädikatenlogischen Äquivalenzen als Grundlage gültiger Argumentformen dienen können, z.B.

$$\begin{array}{l@{\qquad}l@{\qquad}l}
\forall x\, Fx & \exists x\,(Fx \vee Gx) & \forall x\,(Fx \rightarrow Gx) \wedge \forall x\,(Fx \rightarrow Hx) \\
\hline
\neg\exists x\,\neg Fx & \exists x\, Fx \vee \exists x\, Gx & \forall x\,(Fx \rightarrow Gx \wedge Hx)
\end{array}$$

> Bei diesen drei Beispielen würde der Schluss auch in umgekehrter Richtung gültig sein.

### 375. Formale Fehlschlüsse

Auch bei der Prädikatenlogik gibt es „Argumente", die gültigen prädikatenlogischen Argumentformen sehr ähnlich sehen, aber selbst nicht wirklich gültig sind

### 376. Bejahung des Konsequens (*fallacia consequentis*)

Die folgende Form kann man unter den Begriff der Bejahung des Konsequens oder *fallacia consequentis*
<!-- p. 149 | pdf 157 -->
fassen. (Sie unterscheidet sich von den in Kap. 7 so bezeichneten Fehlschlüssen nur dadurch, dass das Konditional quantifiziert ist.)

$$\begin{array}{l}
\text{Alle Kommunisten befürworten ein staatliches Gesundheitssystem.} \\
\text{Hans Meier befürwortet ein staatliches Gesundheitssystem.} \\
\hline
\text{.} \\
\text{Hans Meier ist ein Kommunist}
\end{array}$$
<!-- sic: im Original steht hier ein Punkt direkt hinter der Trennlinie statt am Ende des Schlusssatzes -->

$$\begin{array}{l@{\qquad}l}
\text{Alle A sind B.} & \forall x\,(Ax \rightarrow Bx) \\
\text{c ist B.} & Bc \\
\hline
\text{c ist A.} & Ac
\end{array}$$

### 377. Verneinung des Antecedens

Auch bei der Verneinung des Antecedens kann man die entsprechende quantifizierte Variante mit unter den bereits eingeführten Begriff fallen lassen:

$$\begin{array}{l}
\text{Alle Faulenzer fallen durchs Examen.} \\
\text{Fritz ist kein Faulenzer} \\
\hline
\text{Fritz fällt nicht durchs Examen.}
\end{array}$$

$$\begin{array}{l@{\qquad}l}
\text{Alle A sind B.} & \forall x\,(Ax \rightarrow Bx) \\
\text{c ist nicht A.} & \neg Ac \\
\hline
\text{c ist nicht B.} & \neg Bc
\end{array}$$

### 378. Quantorenschwindel

Ein häufiger und oft nicht leicht zu erkennender Fehlschluss ist der sogenannte Quantorenschwindel.

$$\begin{array}{l}
\text{Bei jeder Veränderung eines Gegenstandes muss es etwas geben, das unverändert bleibt.} \\
\hline
\text{Es muss an einem Gegenstand etwas geben, das bei jeder Veränderung unverändert bleibt.}
\end{array}$$

> Dies ist zugleich ein Beispiel dafür, dass man formale Fehlschlüsse auch in den Werken der klügsten Philosophen finden kann. Denn man findet eine dem obigen Beispiel entsprechende Argumentation in Kants *Kritik der reinen Vernunft* (B 230-231).

Ein leichter zu durchschauendes Beispiel:

$$\begin{array}{l}
\text{Jedes Klubmitglied fährt einen Sportwagen.} \\
\hline
\text{Es gibt einen Sportwagen, den alle Klubmitglieder fahren.}
\end{array}$$

<!-- p. 150 | pdf 158 -->
$$\begin{array}{l@{\qquad}l}
\text{Für alle x gilt, dass es ein y gibt, so dass } \Phi. & \forall x\,\exists y\, \Phi \\
\hline
\text{Es gibt ein y, so dass für alle x gilt, dass } \Phi. & \exists y\,\forall x\, \Phi
\end{array}$$

Während der umgekehrte Schluss (von $\exists y\,\forall x\, \Phi$ auf $\forall x\,\exists y\, \Phi$) gültig ist, ist der Quantorenschwindel ein Fehlschluss.

Welches der folgenden Beispiele besitzt eine gültige Argumentform, hinter welchem steckt ein formaler Fehlschluss?

### 379. Beispiel 1

Da nun der Krieg mit den Grenznachbarn ein Übel und der Krieg mit den Thebanern ein solcher gegen Grenznachbarn ist, so ist es offenbar ein Übel, mit den Thebanern zu kriegen.

(Aristoteles, *Erste Analytik*, 69a)

### 380. Beispiel 2

In Städten, in denen es viel Arbeitslosigkeit gibt, gibt es auch viel Kriminalität. In Rio gibt es viel Kriminalität, also gibt es dort auch viele Arbeitslose.

### 381. Beispiel 3

Etwas, dessen Nichtexistenz möglich ist, existiert auch zu irgendeiner Zeit nicht. Wenn es aber auf schlechthin alles zutreffen sollte, dass seine Nichtexistenz möglich ist, dann muss es eine Zeit gegeben haben, zu der tatsächlich nichts existierte.

(Thomas von Aquin, *Summa Theologica*, I, q. 2, art.3)

> Ausgedrückt durch die Prädikate
>
> Mx: Es ist möglich, dass x nicht existiert.
> Nxy: x existiert zum Zeitpunkt y nicht.
>
> lautet Thomas' Argument:
>
> $$\begin{array}{l}
> \forall x\,(Mx \rightarrow \exists y\, Nxy) \\
> \forall x\, Mx \\
> \hline
> \exists y\,\forall x\, Nxy
> \end{array}$$
>
> Zwar erlauben die ersten beiden Prämissen, auf „$\forall x\,\exists y\, Nxy$" zu schließen, aber indem Thomas daraus „$\exists y\,\forall x\, Nxy$" schließt, begeht er den Fehlschluss des Quantorenschwindels.

<!-- p. 151 | pdf 159 -->
### 382. Beispiel 4

Wenn was Lust ist, gut ist, dann ist das, was nicht gut ist, nicht lustvoll; nun aber nicht das Zweite – denn es ist nicht wahr, dass das, was nicht gut ist, nicht lustvoll ist –; also auch nicht das Erste – was gerade besagte, dass die Gattung zur Lust eben das Gute sei.

(Alexander von Aphrodisias, *In Aristotelis Topicorum libros octo commentaria*, p. 336, 13-20)

> Eine einfache Rekonstruktion der Argumentform könnte so aussehen:
>
> $$\begin{array}{l}
> \neg\forall x\,(\neg Gx \rightarrow \neg Lx) \\
> \hline
> \neg\forall x\,(Lx \rightarrow Gx)
> \end{array}$$
>
> Gx: x ist gut.
> Lx: x ist lustvoll.
>
> Diese Rekonstruktion unterschlägt freilich den ersten Satz des Zitats, den man entsprechend formalisieren könnte als „$\forall x\,(Lx \rightarrow Gx) \rightarrow \forall x\,(\neg Gx \rightarrow \neg Lx)$". Da dies eine logische Wahrheit ist, ist sie als Prämisse des Arguments nicht erforderlich.

### 383. Beispiel 5

Es scheint, dass Gott keine Barmherzigkeit zukommen kann. Denn Barmherzigkeit ist eine Art von Traurigkeit, wie Johannes von Damaskus sagt. Traurigkeit aber gibt es in Gott nicht, also auch keine Barmherzigkeit.

(Thomas von Aquin, *Summa Theologica*, I, q. 21, art.3)

> Hier gelingt die Formalisierung nur, wenn man die Aussage „Barmherzigkeit ist eine Art von Traurigkeit" interpretiert als „wenn etwas Barmherzigkeit zukommt, dann auch Traurigkeit".
>
> Bx: x kommt Barmherzigkeit zu.
> Tx: x kommt Traurigkeit zu.
> g: Gott.
>
> $$\begin{array}{l}
> \forall x\,(Bx \rightarrow Tx) \\
> \neg Tg \\
> \hline
> \neg Bg
> \end{array}$$

### 384. Beispiel 6

Wenn jemand in Megara ist, ist er nicht in Athen; nun ist ein Mensch in Megara; also ist in Athen nicht ein Mensch.

(Chrysippos, nach Diogenes Laërtius, *Leben und Meinungen berühmter Philosophen*, VII, 187)

> Der Schluss ist falsch, wenn die folgende logische Form gemeint ist:
>
> Mx: x ist in Megara.
> Ax: x ist in Athen.
>
> $$\begin{array}{l}
> \forall x\,(Mx \rightarrow \neg Ax) \\
> \exists x\, Mx \\
> \hline
> \neg\exists x\, Ax
> \end{array}$$
>
> Bei der folgenden Deutung, die die obige Formulierung möglicherweise auch zulässt, wäre der Schluss allerdings richtig:

<!-- p. 152 | pdf 160 -->
> $$\begin{array}{l}
> \forall x\,(Mx \rightarrow \neg Ax) \\
> \exists x\, Mx \\
> \hline
> \exists x\,\neg Ax
> \end{array}$$
>
> Dieser Sophismus des Chrysipp spielt also absichtlich mit der Mehrdeutigkeit der logischen Form in den natürlichen Sprachen (vgl. Kap. 16).

## 15. Prädikatenlogik mit Identität

### 385. Das Identitätsprädikat

Eine wichtige Erweiterung der PL-Sprachen ist es, als zusätzliche logische Konstante das Identitätsprädikat „$[x = y]$" einzuführen. Man spricht dann von Prädikatenlogik mit Identität.

Das Identitätsprädikat funktioniert syntaktisch wie ein Prädikat, darf aber nicht beliebig interpretiert werden. Stattdessen wird es standardmäßig so interpretiert, dass $[\alpha = \beta]$ dann und nur dann wahr ist, wenn $\alpha$ und $\beta$ sich auf dasselbe Element von $D$ beziehen.

Mit dem Identitätsprädikat identifizieren wir somit eine zusätzliche logische Konstante, die von den PL-Sprachen nicht erfasst wurde. Formale Sprachen, die ein so festgelegtes Identitätsprädikat enthalten und ansonsten wie PL-Sprachen aussehen, werden wir $\mathrm{PL}_{=}$-Sprachen nennen.

### 386. „Es gibt mehrere …"

Mit der so erweiterten Prädikatenlogik vergrößern sich die Ausdrucksmöglichkeiten beim Formalisieren. Z.B. kann man mit Hilfe der Identität die folgende Aussage formalisieren:

Es gibt mehr als einen Millionär.

Mx: x ist ein Millionär.

$$\exists x\,\exists y\,(Mx \wedge My \wedge \neg[x = y])$$

### 387. Eindeutige Existenzaussagen

Ebenso hilfreich sind $\mathrm{PL}_{=}$-Sprachen bei eindeutigen Existenzaussagen.

Es gibt genau einen Bundespräsidenten.

Bx: x ist Bundespräsident

$$\exists x\,(Bx \wedge \forall y\,(By \rightarrow [y = x]))$$

Als abkürzende Schreibweise für Aussagen genau dieser Form wird manchmal „$\exists! x\, Bx$" geschrieben. (Lies: „Es gibt genau ein x derart, dass …")

<!-- p. 153 | pdf 161 -->
> Statt „$\exists x\,(Bx \wedge \forall y\,(By \rightarrow [y = x]))$" kann man auch äquivalent und kürzer (aber weniger intuitiv verständlich) schreiben:
>
> $$\exists x\,\forall y\,(By \leftrightarrow [y = x])$$

### 388. Einzigkeit, Eindeutigkeit

Identität brauchen wir auch für andere Aussagen, in denen es um Einzigkeit oder Eindeutigkeit geht:

Nur Joachim Gauck ist Bundespräsident.

j: Joachim Gauck
Bx: x ist Bundespräsident.

$$Bj \wedge \forall x\,(Bx \rightarrow [x = j])$$

Wenn einer die Welt retten kann, dann ist es Gisbert Schlüter aus Ubbedissen.

g: Gisbert Schlüter aus Ubbedissen.
Wx: x kann die Welt retten.

$$\forall x\,(Wx \rightarrow [x = g])$$

### 389. Eindeutige und ein-eindeutige Relationen

Auch um die Eindeutigkeit von Relationen auszudrücken, braucht man die Prädikatenlogik mit Identität. Für eine zweistellige Relation, die *in einer Richtung eindeutig* ist, muss gelten:

$$\forall x\,\forall y\,\forall z\,(Rxz \wedge Ryz \rightarrow [x = y])$$
oder
$$\forall x\,\forall y\,\forall z\,(Rzx \wedge Rzy \rightarrow [x = y])$$

> Im ersten Fall ist die Relation sozusagen links-eindeutig, wie z.B. bei
>
> Rxy: x ist der Vater von y,
>
> im zweiten Fall rechts-eindeutig, wie bei
>
> Rxy: Der kleinste echte Primteiler von x ist y.

Wenn die Eindeutigkeit in beiden Richtungen gilt, sprechen wir auch von einer ein-eindeutigen Relation. Die Ein-Eindeutigkeit lässt sich in einer einzigen Bedingung zusammenfassen:

$$\forall w\,\forall x\,\forall y\,\forall z\,(Rwx \wedge Ryz \rightarrow ([w = y] \leftrightarrow [x = z]))$$

### 390. Numerische Quantoren

Schreiben wir einmal „$\exists_1 x$" statt „$\exists! x$" und definieren:

$$\exists_1 x\, Fx \equiv_{df} \exists x\,(Fx \wedge \forall y\,(Fy \rightarrow [y = x]))$$

Darauf aufbauend, definieren wir:

$$\exists_2 x\, Fx \equiv_{df} \exists x\,(Fx \wedge \exists_1 y\,(Fy \wedge \neg[y = x])).$$

<!-- p. 154 | pdf 162 -->
Und weiter:

$$\exists_3 x\, Fx \equiv_{df} \exists x\,(Fx \wedge \exists_2 y\,(Fy \wedge \neg[y = x])).$$

Statt der zweiten und dritten Definition können wir noch viel allgemeiner sagen:

$$\exists_{n+1} x\, Fx \equiv_{df} \exists x\,(Fx \wedge \exists_n y\,(Fy \wedge \neg[y = x])).$$

Sie sehen, dass wir mit Hilfe der $\mathrm{PL}_{=}$-Sprachen alle numerischen Aussagen der Form „Es gibt genau $n$ Gegenstände / Individuen, für die gilt …" formalisieren können. Die auf dieser Folie definierten Quantoren nennt man numerische Quantoren.

> Interessanterweise würde diese Definition auch funktionieren, wenn wir statt mit 1 mit 0 beginnen und stipulieren würden:
>
> $$\exists_0 x\, Fx \equiv_{df} \neg\exists x\, Fx$$
> $$\exists_{n+1} x\, Fx \equiv_{df} \exists x\,(Fx \wedge \exists_n y\,(Fy \wedge \neg[y = x]))$$

Mit Hilfe numerischer Quantoren kann man sogar gewisse (quasi-) arithmetische Erkenntnisse so formulieren, dass sie sich als logische Wahrheiten erweisen:

$$\exists_2 x\,(Px \wedge Qx) \wedge \exists_3 x\,(Px \wedge \neg Qx) \rightarrow \exists_5 x\, Px$$

> Die genaue Beziehung zwischen dieser logischen Wahrheit und der arithmetischen Wahrheit „2 + 3 = 5" ist allerdings eine schwierige Angelegenheit. Fest steht, dass nicht alle arithmetischen Wahrheiten auf diese Weise als logische Wahrheiten rekonstruiert werden können.

### 391. Kennzeichnungen

$\mathrm{PL}_{=}$-Sprachen erlauben auch eine bestimmte, von Bertrand Russell vorgeschlagene Analyse von Kennzeichnungen (*definite descriptions*). Dabei versteht man unter einer Kennzeichnung einen sprachlichen Ausdruck, der sich auf einen bestimmten Gegenstand bezieht, indem er ein Prädikat oder einen offenen Satz verwendet, der nur diesem einen Gegenstand wahrheitsgemäß zugeschrieben werden kann. Z.B.:

Der Millionär, der die Linkspartei wählt, wohnt im Zooviertel.

Laut Russells Analyse sind in dieser Aussage sozusagen zwei Teilaussagen versteckt:

Es gibt genau einen Millionär, der die Linkspartei wählt, und dieser wohnt im Zooviertel.

Entsprechend kann man dies so formalisieren:

$$\exists x\,(Mx \wedge Lx \wedge \forall y\,(My \wedge Ly \rightarrow [y = x]) \wedge Zx)$$

Mx: x ist ein Millionär.
Lx: x wählt die Linkspartei.
Zx: x wohnt im Zooviertel.

Russell hat für „dasjenige x, auf das der offene Satz $\Phi(x)$ zutrifft" die formale Schreibweise

$$\iota x\, \Phi(x)$$

eingeführt. Für jeden offenen Satz $\Psi(x)$, in dessen offener Stelle die Kennzeichnung $\iota x\, \Phi(x)$ eingesetzt wird, ist definiert:
<!-- p. 155 | pdf 163 -->

$$\Psi(\iota x\, \Phi(x)) \equiv_{df} \exists x\,(\Phi(x) \wedge \forall y\,(\Phi(y) \rightarrow [y = x]) \wedge \Psi(x))$$

(Grob gesprochen ist das eine Formalisierung von „Dasjenige eindeutig bestimmte Ding, das $\Phi$ ist, ist auch $\Psi$" oder kürzer: „Das $\Phi$ ist $\Psi$".)

Allerdings ist diese Analyse weniger eindeutig, als es auf den ersten Blick den Anschein haben mag. Was z.B. bedeutet „$\neg F(\iota x\, Gx)$"? Dies ist offenbar davon abhängig, ob man die Negation mit zum offenen Satz $\Psi$ zählt, in den die Kennzeichnung eingesetzt wird, oder ob man die ganze Aussage als Negation von „$F(\iota x\, Gx)$" ansieht. Im ersten Fall erhält man

$$\neg F(\iota x\, Gx) \equiv \exists x\,(Gx \wedge \forall y\,(Gy \rightarrow [y = x]) \wedge \neg Fx)$$

im zweiten

$$\neg F(\iota x\, Gx) \equiv \neg\exists x\,(Gx \wedge \forall y\,(Gy \rightarrow [y = x]) \wedge Fx)$$

Man hat dies so formuliert, dass Kennzeichnungen einen Skopus haben, der sozusagen weiter (wie im ersten Fall) oder weniger weit reichen kann (wie im zweiten Fall). Dies ist ein wichtiger logischer Unterschied zwischen Kennzeichnungen und Namen.

> Bei Namen (in der Prädikatenlogik repräsentiert durch Individuenkonstanten), macht es keinen Unterschied, ob wir „$\neg Fa$" so verstehen, dass wir zuerst „$F\_\_$" auf „$a$" anwenden und das Ergebnis negieren, oder so, dass sozusagen das negierte Prädikat „$\neg F\_\_$" auf „$a$" angewandt wird.

### 392. Das Wahrheitsbaumverfahren für die Prädikatenlogik mit Identität

Durch drei einfache Regeln lässt sich das Wahrheitsbaumverfahren auf $\mathrm{PL}_{=}$-Sprachen ausweiten.

```text
|
[α = α]
```

```text
[α = β]
φ(α)
|
φ(β/α)
```

```text
[α = β]
φ(β)
|
φ(α/β)
```

> Die erste Regel bedeutet, dass ein Satz der Form $[\alpha = \alpha]$ für beliebige Individuenkonstanten $\alpha$ an jeder Stelle im Wahrheitsbaum eingeführt werden darf. Die zweite Regel besagt, dass auf einem Ast, auf dem ein Satz vorkommt, in dem die Individuenkonstante $\alpha$ vorkommt, der gleiche Satz, in dem aber $\alpha$ durch $\beta$ ersetzt wurde, eingeführt werden darf, sofern auf demselben Ast auch bereits der Satz $[\alpha = \beta]$ steht. (Die dritte Regel besagt Entsprechendes.)

> Das so erweiterte Verfahren für die Prädikatenlogik mit Identität ist sowohl korrekt als auch vollständig. Den Beweis (siehe Bostock 1997, S. 325 f.) sparen wir uns hier.

<!-- p. 156 | pdf 164 -->
### 393. Gesamtübersicht der Regeln des Wahrheitsbaumverfahrens

**AL-Regeln:**

```text
¬¬φ                              φ
 |                                ¬φ
 φ                                ↯


φ∧ψ                              ¬(φ∧ψ)
 |                                ├─ ¬φ
 φ                                └─ ¬ψ
 ψ


φ∨ψ                              ¬(φ∨ψ)
 ├─ φ                             |
 └─ ψ                             ¬φ
                                   ¬ψ


φ→ψ                              ¬(φ→ψ)
 ├─ ¬φ                            |
 └─ ψ                             φ
                                   ¬ψ


φ↔ψ                              ¬(φ↔ψ)
 ├─ φ                             ├─ φ
 │  ψ                             │  ¬ψ
 └─ ¬φ                            └─ ¬φ
    ¬ψ                               ψ
```

**Zusätzliche Regeln für Quantoren (PL, umfasst zusätzlich die AL-Regeln oben):**

```text
∃ξφ                                        ∀ξφ
 |                                          |
 φ(α/ξ),                                    φ(α/ξ),
 für eine Individuenkonstante α,            für eine beliebige
 die auf dem Ast neu ist                    Individuenkonstante α


¬∃ξφ                                       ¬∀ξφ
 |                                          |
 ∀ξ¬φ                                       ∃ξ¬φ
```

**Zusätzliche Regeln für Identität ($\mathrm{PL}_{=}$, umfasst zusätzlich alle Regeln oben):**

```text
|                    [α = β]              [α = β]
[α = α]              φ(α)                 φ(β)
                      |                    |
                      φ(β/α)               φ(α/β)
```

<!-- Markierung: Im Original gruppieren geschweifte Klammern am rechten (bzw. für die AL-Regeln am linken) Rand die Regeln hierarchisch nach Regelsystem: „AL" umfasst die ersten fünf Regelpaare (¬¬φ bis φ↔ψ), „PL" umfasst zusätzlich die vier Quantorenregeln (∃ξφ bis ¬∀ξφ), „PL=" umfasst zusätzlich die drei Identitätsregeln ganz unten. -->

Um die Anwendung des Verfahrens in der Prädikatenlogik mit Identität zu illustrieren, erfolgt hier der Beweis der Äquivalenz zwischen der oben (s. Folie 387) behaupteten Äquivalenz zwischen „$\exists x\,\forall y\,(By \leftrightarrow [y = x])$" und „$\exists x\,(Bx \wedge \forall y\,(By \rightarrow [y = x]))$". Die Anwendungen der neuen Regeln sind eingekreist.

<!-- p. 157 | pdf 165 -->
Richtung →

```text
∃x ∀y (By ↔ [y = x])
¬∃x (Bx ∧ ∀y (By → [y = x]))
|
∀x ¬(Bx ∧ ∀y (By → [y = x]))
|
∀y (By ↔ [y = a])
|
¬(Ba ∧ ∀y (By → [y = a]))
├─ ¬Ba
│  |
│  Ba ↔ [a = a]
│  ├─ Ba
│  │  [a = a]
│  │  ↯
│  └─ ¬Ba
│     ¬[a = a]
│     |
│     [a = a]
│     ↯
└─ ¬∀y (By → [y = a])
   |
   ∃y ¬(By → [y = a])
   |
   ¬(Bb → [b = a])
   |
   Bb
   ¬[b = a]
   |
   Bb ↔ [b = a]
   ├─ Bb
   │  [b = a]
   │  ↯
   └─ ¬Bb
      ¬[b = a]
      ↯
```

<!-- Markierung: Im Original ist im Fließtext das Wort „eingekreist." mit einer grünen gestrichelten Ellipse hervorgehoben; im Baum ist die zweite Formel „[a = a]" (im rechten Teilast unter ¬Ba/¬[a=a], vor dem letzten ↯) ebenfalls grün gestrichelt eingekreist — sie markiert die einzige Anwendung einer neuen Identitätsregel (Einführung von [a=a]) in diesem Beweis. -->

<!-- p. 158 | pdf 166 -->
Richtung ←

```text
∃x (Bx ∧ ∀y (By → [y = x]))
¬∃x ∀y (By ↔ [y = x])
│
∀x ¬∀y (By ↔ [y = x])
│
Ba ∧ ∀y (By → [y = a])
│
Ba
∀y (By → [y = a])
│
¬∀y (By ↔ [y = a])
│
∃y ¬(By ↔ [y = x])
│
¬(Bb ↔ [b = a])
│
Bb → [b = a]
├─ Bb
│  ¬[b = a]
│  ├─ ¬Bb        ↯
│  └─ [b = a]     ↯
└─ ¬Bb
   [b = a]
   ¬Ba
   ↯
```
<!-- sic -->
<!-- Markierung: grün gestrichelte Ellipse im rechten Zweig um „¬Bb“, „[b = a]“, „¬Ba“ und „↯“ -->

## 16. Begriffe, Definitionen und Mehrdeutigkeit in Argumenten

### 394. Begriff und Gegenstand

Bereits in Kapitel 9 hatten wir festgestellt, dass im Allgemeinen immer zweierlei geschieht, wenn wir Sprache verwenden:

- Wir beziehen uns auf Gegenstände
- und wir wenden Begriffe an.

Beispiele:
„Der Tierpark Olderdissen ist schön.“
„Peter spinnt.“

<!-- p. 159 | pdf 167 -->
„Die Sieben ist eine Primzahl.“
„Hans ist der Vater von Sabine“.

Zur Erinnerung: Unter einem Begriff versteht man in der Philosophie etwas, das man prinzipiell auf verschiedene Gegenstände anwenden kann oder könnte.

> Das „kann oder könnte“ ist wichtig:
> „Europas nördlichste Stadt zu sein“ ist ein Begriff, obwohl er sich korrekterweise nur auf einen einzigen Gegenstand, nämlich die Stadt Hammerfest, anwenden lässt. Aber um wirklich über den Begriff zu verfügen, muss man verstehen, unter welchen Umständen er sich prinzipiell auch auf andere Städte anwenden lassen könnte.

Daher drücken Eigennamen in diesem Sinn keine Begriffe aus. Sie können nur benutzt werden, um sich auf einen einzigen Gegenstand zu beziehen. Es gibt also Wörter, die keinen Begriff ausdrücken, sondern nur dazu benutzt werden können, sich auf Gegenstände zu beziehen.
Umgekehrt ist es durchaus möglich, sich mit Hilfe von Wörtern, die Begriffe ausdrücken, auf einen Gegenstand zu beziehen:
„Der häufigste Gewinner der Tour der France ist Amerikaner.“

> Im vorigen Kapitel haben Sie eine Methode kennengelernt, wie man Ausdrücke dieser Art mit Hilfe der Prädikatenlogik mit Identität analysieren kann – Russells Theorie der Kennzeichnungen.

Deshalb kann man die Unterscheidung zwischen Gegenstandsbezug und Begriffsanwendung nicht ein-eindeutig auf die Ebene sprachlicher Ausdrücke abbilden.

### 395. Begriffe und Wörter

Wichtig ist es, zwischen Begriffen und sprachlichen Ausdrücken zu unterscheiden. Mit einem Begriff ist etwas Abstrakteres gemeint als eine Abfolge von Buchstaben oder Lauten.

So kann z.B. ein und dasselbe Wort („Bank“) benutzt werden, um verschiedene Begriffe auszudrücken.

Umgekehrt ist es auch möglich, dass die Ausdrücke

- „gleichseitiges Dreieck“,
- „Dreieck mit drei gleich langen Seiten“ und
- „equilateral triangle“

alle denselben Begriff ausdrücken.

> Die Frage, was genau ein Begriff ist, würde uns sehr weit in die Sprachphilosophie führen. Früher hat man darunter bestimmte mentale Gegenstände (Vorstellungen) verstanden, aber die heutige Verwendung des Begriffs „Begriff“ ist noch abstrakter geworden. Die generellste Antwort ist: Ein Begriff ist, was immer es ist, das durch einen prädizierbaren Ausdruck ausgedrückt wird.

Die Unterscheidung von Wörtern und Begriffen wird dadurch erschwert, dass man oft einen Begriff mit Hilfe von Anführungszeichen und einem Wort, das den Begriff ausdrückt, spezifiziert. Trotzdem gilt:
Der Begriff „rot“ ≠ das Wort „rot“

### 396. Sätze und Propositionen

<!-- p. 160 | pdf 168 -->
Eine parallele Unterscheidung zu derjenigen zwischen Wörtern und Begriffen trifft man oft auch auf der Ebene von Aussagesätzen. Man unterscheidet:

- Sätze (Abfolgen von Buchstaben oder Lauten) und
- Propositionen (das, was durch einen Satz ausgesagt wird).

Z.B. drücken die beiden Sätze
„La neige est blanche“ und
„Snow is white“
ein und dieselbe Proposition aus – nämlich, dass Schnee weiß ist.

> Hier erkennen Sie auch die im Deutschen mögliche Praxis, Propositionen mit Hilfe von Dass-Sätzen anzugeben.

### 397. Begriffsumfang und Begriffsinhalt

> Wir haben bereits in Kapitel 13 den Begriff der Extension eines Prädikats eingeführt und definieren jetzt ganz ähnlich den der Extension eines Begriffs:

△ **Unter dem *Begriffsumfang* oder der *Extension* eines Begriffes versteht man die Menge aller Gegenstände, die unter diesen Begriff fallen.**

△ **Unter dem *Begriffsinhalt* oder der *Intension* eines Begriffes versteht man das, was man meint, wenn man den Begriff gebraucht – den „Gedankeninhalt“ des Begriffes.**

> Diese Definition des Begriffsinhalts ist natürlich nicht so genau wie die obige Definition des Begriffsumfangs. Mit Rückgriff auf bestimmte Begriffstheorien kann man versuchen, den Begriffsinhalt genauer zu definieren, wie wir sehen werden.
>
> Die Begriffe „Intension“ und „Extension“ werden mit der Absicht eingeführt, die Redeweise von der „Bedeutung“ eines Ausdrucks zu differenzieren.

Zwei Begriffe, die dieselbe Intension haben, haben notwendigerweise auch dieselbe Extension:
Z.B. der Begriff „Erpel“ und der Begriff „männliche Ente“.

Umgekehrt gilt das nicht:
Der Begriff „Wirbeltier mit einem Herz“ hat dieselbe Extension wie der Begriff „Wirbeltier mit einer Leber“, aber nicht dieselbe Intension.

### 398. Klassische Begriffskonzeption

Es gibt eine klassische Konzeption, die bis auf Platon zurückgeht (*Menon* 71e-75a) und derzufolge der Begriffsinhalt *eine Gesamtheit von Begriffsmerkmalen* ist.
Diese Begriffsmerkmale sind selbst wiederum Begriffe und sind

- jedes für sich genommen notwendig
- und gemeinsam hinreichend

dafür, dass ein Gegenstand unter den Begriff fällt.

<!-- p. 161 | pdf 169 -->
Z.B. könnte man sagen, dass der Begriffsinhalt des Begriffs „Bankett“ durch die Gesamtheit der Begriffsmerkmale „Mahlzeit“, „groß“ und „festlich“ gegeben ist.

### 399. Weitere Beispiele

| Begriff | Begriffsmerkmale |
|---|---|
| „Lamm“ | „Schaf“, „jung“ |
| „jemands Sohn“ | „jemands direkter Nachkomme“, „männlich“, „Mensch“ |
| „Bach“ | „Wasserlauf“, „natürlich“, „klein“ |

### 400. Klassische Begriffskonzeption

Zur klassischen Begriffskonzeption gehört auch die Vorstellung, dass es *elementare Begriffe* gibt, deren Begriffsumfang sich selbst nicht wiederum als Kombination anderer Begriffe angeben lässt.
Alle anderen Begriffe sind dann *komplexe Begriffe*: Ihr Inhalt kann mit Hilfe anderer Begriffe angegeben werden.

### 401. Klassische Begriffskonzeption: Schwierigkeiten

Allerdings gibt es Zweifel daran, ob es überhaupt genau genommen möglich ist, den Inhalt eines Begriffes durch andere Begriffe anzugeben.

Selbst bei schein einfachen Fällen ergeben sich Schwierigkeiten, wenn man genau hinsieht:

Jemand ist Junggeselle genau dann, wenn er ein unverheirateter Mann im heiratsfähigen Alter ist, der noch niemals verheiratet war.

Betrachten Sie die folgenden Zweifelsfälle:

- Hans lebt in eingetragener Lebenspartnerschaft mit Otto. Ist Hans Junggeselle?
- Ist der Papst ein Junggeselle?
- Peter lebt seit 30 Jahren mit Sabine zusammen. Sie haben nie geheiratet, aber sich geschworen, immer beisammen zu bleiben. Ist Peter Junggeselle?

### 402. Die Familienähnlichkeits-Konzeption

Eine Alternative zur klassischen Begriffskonzeption ist die sogenannte Familienähnlichkeits-Konzeption, die auf Ludwig Wittgenstein zurückgeht. (*Philosophische Untersuchungen*, insb. §§67 f.)

<!-- p. 162 | pdf 170 -->
Wittgensteins Beispiel: der Begriff „Spiel“
Betrachten Sie:

Tennis
Schach
Patiencen
Werfen eines Balls gegen eine Mauer

Es gibt viele Ähnlichkeiten untereinander, aber *keine Gruppe von Begriffsmerkmalen, die für alle Spiele und nur für Spiele kennzeichnend ist.*

Z.B.:
Geht es überall um Gewinnen oder Verlieren?
Spielt überall Glück eine Rolle?
Spielt überall (in vergleichbarem Sinne) Geschick eine Rolle?
Sind alle (in vergleichbarem Sinne) unterhaltend?

### 403. Die Familienähnlichkeits-Konzeption

Wittgensteins Alternative:
Jeder Gegenstand, der unter den Begriff fällt, weist Eigenschaften auf, die er mit anderen Gegenständen teilt, die unter den Begriff fallen. Aber es gibt nicht die eine notwendige und hinreichende Gesamtheit von Begriffsmerkmalen, sondern stattdessen ein „Netz von Ähnlichkeiten, die einander übergreifen und kreuzen“.

Veranschaulichung:

| | | | | | | |
|---|---|---|---|---|---|---|
| a: | $Fa$ | $Ga$ | $Ha$ | $\neg Ia$ | $Ja$ | $Ka$ |
| b: | $Fb$ | $Gb$ | $\neg Hb$ | $Ib$ | $Jb$ | $\neg Kb$ |
| c: | $Fc$ | $\neg Gc$ | $Hc$ | $Ic$ | $Jc$ | $Kc$ |
| d: | $Fd$ | $Gd$ | $Hd$ | $Id$ | $\neg Jd$ | $Kd$ |
| e: | $Fe$ | $Ge$ | $He$ | $\neg Ie$ | $\neg Je$ | $Ke$ |

<!-- Markierung: die Einträge ¬Ia, ¬Hb, ¬Gc, ¬Jd, ¬Ie, ¬Je sind im Original rot hervorgehoben -->

> Wittgensteins Familienähnlichkeits-Konzeption ist mit erheblichen Schwierigkeiten befrachtet. Eine Begriffskonzeption sollte erklären, worin der Unterschied zwischen dem Fallen und dem Nicht-Fallen eines Begriffs unter einen Gegenstand liegt. Dies ist ein Problem für die Familienähnlichkeits-Konzeption, denn z.B. fallen längst nicht alle Gegenstände, deren Eigenschaften sich mit denen einiger Spiele "übergreifen und kreuzen" unter den Begriff des Spiels.
>
> Es gibt noch weitere wichtige Begriffskonzeption, wie etwa
>
> - die in der Psychologie sehr verbreitete Prototypen-Konzeption, derzufolge das Fallen eines Gegenstands unter einen Begriff davon abhängt, wie ähnlich er einem prototypischen Exemplar ist,
> - oder die holistische Konzeption, derzufolge Begriffe nur als Teile sehr umfassender Begriffssysteme und Theorien verständlich sind.
>
> Eine hervorragende knappe Übersicht bietet Peter Baumann: *Erkenntnistheorie*, Stuttgart etc.: Metzler 2002, Kap. III.1)

<!-- p. 163 | pdf 171 -->
### 404. Definitionen

Wenn man eine *Definition* gibt, zielt man darauf ab, klar zu machen, welchen Begriff man mit einem bestimmten Ausdruck ausdrücken möchte.

Die philosophischen Schwierigkeiten, zu beschreiben, was genau ein Begriffsinhalt ist, ändern nichts daran, dass Definitionen oft hilfreich für das Argumentieren sind.

### 405. Definitionen: verschiedene Funktionen

Definitionen können dabei verschiedene Funktionen erfüllen.

<u>1. Funktion: Einführung neuer Ausdrücke</u>

Ein/e Sprecher/in kann mit Hilfe einer Definition einen Ausdruck einführen, der seinem/ihrem Gegenüber noch nicht bekannt ist.
Beispiele dafür sind viele Definitionen dieser Vorlesung.
(Z.B.: „Unter dem Begriffsumfang oder der Extension eines Begriffes versteht man die Menge aller Gegenstände, die unter diesen Begriff fallen.“)

<u>2. Funktion: Beseitigung von Mehrdeutigkeit</u>

Oft dient ein und derselbe Ausdruck in einer Sprache dazu, verschiedene Begriffe auszudrücken. Um Missverständnisse zu vermeiden, kann man durch eine Definition versuchen, zumindest für einen bestimmten Kontext klarzustellen, welchen Begriff man anwenden möchte, wenn man ein bestimmtes Wort verwendet.

Beispiel:
Dora: „Die Globalisierung ist großartig, weil mehr globale Freizügigkeit bedeutet, dass die Menschen sich besser kennenlernen.“
Bella: „Die Globalisierung ist verheerend, weil weltweit produzierende Unternehmen hart erkämpfte Umwelt- und Sozialstandards unterminieren und dabei noch die örtlichen Wirtschaftsstrukturen in Schwellenländern zerstören.“
*Möglicherweise* haben Dora und Bella gar keinen sachlichen Konflikt, sondern verwenden nur das Wort „Globalisierung“ unterschiedlich und würden es unterschiedlich definieren.
Dora: „ ‚Globalisierung‘ bezeichnet den Prozess der zunehmenden internationalen Mobilität.“
Bella: „Unter ‚Globalisierung‘ versteht man den Prozess der globalen Öffnung der Märkte und die damit einhergehende Entstehung weltweit produzierender Wirtschaftsunternehmen.“

Das sind die beiden Hauptfunktionen von Definitionen.
Es kann noch weitere Funktionen von Definitionen geben: Z.B. die Bedeutung eines schon in Gebrauch befindlichen Begriffes auf neue Umstände zu erweitern.

> Beispiele dafür sind etwa die Definitionsbemühungen um den Begriff des Todes vor dem Hintergrund der modernen Apparatemedizin; oder die Anstrengungen der französischen Justiz, im Verfahren gegen Marschall Petain den Begriff des Hochverrats neu zu definieren.

<!-- p. 164 | pdf 172 -->
### 406. Verschiedene Arten von Definitionen: Stipulative Definitionen

Es gibt auch zwei wichtige *Arten* von Definitionen (und eine Zwischenart), die sorgfältig unterschieden werden müssen.

<u>1. Art: Stipulative Definitionen</u>

Es gibt Definitionen, die dazu gedacht sind, ein Wort neu zu definieren und eine Vereinbarung darüber zu treffen, welcher Begriff mit diesem Wort von jetzt an ausgedrückt werden soll. Man nennt sie *stipulative* (oder *synthetische*) Definitionen.

Stipulative Definitionen brauchen auf frühere Verwendungsweisen desselben Wortes keine Rücksicht zu nehmen.

Beispiele:

In der Mathematik gibt es viele stipulative Definitionen.
Z.B.: „Eine nichtleere Menge heißt genau dann <u>abzählbar</u>, wenn es eine Abbildung der natürlichen Zahlen auf diese Menge gibt, bei der jedes Element der Menge das Abbild mindestens einer natürlichen Zahl ist.“

Stipulative Definitionen kommen aber auch in der Philosophie vor.
Z.B. (Peter Singer, *Animal Liberation*): „<u>Speciesism</u> […] is a prejudice or attitude of bias in favor of the interests of members of one's own species and against those of members of other species.“

### 407. Verschiedene Arten von Definitionen: Analytische Definitionen

<u>2. Art: Analytische Definitionen</u>

Viele Definitionen dienen dazu, die Bedeutung eines Begriffs, der normalerweise oder in bestimmten Verwendungsweisen mit einem bestimmten Ausdruck gemeint ist, möglichst genau wiederzugeben.
Sie heißen analytische Definitionen.

> Diese Bezeichnung ist üblich und sinnvoll, wenn auch andere Bezeichnungen für analytische Definitionen vorkommen, wie „lexikalische“, „reduktive“ oder „reportive Definition“. Achtung: Es gibt auch eine altmodische Bedeutung des Ausdrucks „analytische Definition“, wonach darunter eine Definition eines Ganzen durch Angabe seiner Teile zu verstehen ist. (Z.B.: „Ein Kostüm besteht aus einer Jacke und einem Rock aus demselben Stoff.“)

Analytische Definitionen müssen sich daran messen lassen, wie gut sie die Bedeutung des gebräuchlichen Begriffs wiedergeben.

Beispiele:

„<u>Glückseligkeit</u> ist die Befriedigung aller unserer Neigungen […].“ (Kant, KrV B 834)

„Eine <u>Sachertorte</u> ist eine Schokoladentorte mit einer Schicht Aprikosenmarmelade in der Mitte und einer Schokoladenglasur.“

<!-- p. 165 | pdf 173 -->
### 408. Verschiedene Arten von Definitionen: Explikationen

In der neueren Philosophie gibt es auch eine Zwischenform zwischen analytischer und stipulativer Definition, die man als *Explikation* bezeichnet.
Eine Explikation soll zwar im Wesentlichen dem gewöhnlichen Gebrauch des explizierten Ausdrucks Rechnung tragen, aber der zugewiesene Begriffsinhalt soll zugleich der herkömmlichen Verwendung „in Klarheit und Exaktheit überlegen sein und sich vor allem besser in ein systematisches Begriffsgebäude einfügen“ (Rudolf Carnap).

> *Der logische Aufbau der Welt*, Hamburg 1998, S. XVII.

Viele wissenschaftliche Definitionen sind Beispiele für Explikationen.
Z.B.: „Eine Säure ist ein chemischer Stoff, der H⁺-Ionen an Reaktionspartner abgeben kann.“

Diese Explikation

- trägt dem Alltagsgebrauch von „Säure“ weitestgehend Rechnung, ist also keine bloß stipulative Definition,

  (d.h. die Menge der unter den so definierten Begriff fallenden Stoffe deckt sich *weitgehend* mit der Menge der Stoffe, die man normalerweise so bezeichnet)

- unterscheidet sich aber im Detail von der herkömmlichen Verwendung von „Säure“, ist also keine rein analytische Definition.

  (Z.B. Gibt es nach dieser Definition auch gasförmige und feste Säuren, während man in der vorwissenschaftlichen Verwendung nur Flüssigkeiten Säuren nennt. Außerdem bezeichnet man vorwissenschaftlich auch Lösungen von Säuren in Wasser selbst als Säuren und gelegentlich sogar mache Stoffe, die chemisch keine Säuren sind, wie z.B. Harnstoff oder Ammoniak.)

- Außerdem legt sie klar und präzise fest, was eine Säure ist und was nicht, und fügt sich gut in eine systematische Theorie chemischer Reaktionen ein.

### 409. Funktionen und Arten von Definitionen

Es ist sehr wichtig, die verschiedenen Arten von Definitionen auseinanderzuhalten:

- Stipulative Definition
- Analytische Definition
- Explikation

(Diese Arten unterscheiden sich in ihrem Verhältnis zu bereits etablierten Verwendungsweisen des definierten Ausdrucks. Dabei entsprechen diese Arten *nicht* eins zu eins den verschiedenen Funktionen von Definitionen, die eingangs erklärt wurden!)

> Einen seinem Gegenüber noch nicht bekannten Begriff einführen könnte man mit Definitionen aller dieser drei Typen. Vgl. Sie die Definitionsbeispiele für „Speziesismus“, „Sachertorte“ und „Säure“.
>
> Aber auch dem Zweck, Mehrdeutigkeiten zu beseitigen, können Definitionen aller der Arten dienen: Siehe „abzählbar“, „Glückseligkeit“, „Säure“.

### 410. Die Form von Definitionen: Definiendum und Definiens

Den Ausdruck, der in einer Definition definiert werden soll, nennt man *Definiendum*.

<!-- p. 166 | pdf 174 -->
Die Formulierung, durch die charakterisiert wird, welcher Begriff durch das Definiendum ausgedrückt werden soll, heißt *Definiens*.

$$\text{Eine } \underbrace{\text{Maisonette}}_{\text{Definiendum}} \text{ ist eine } \underbrace{\text{Wohnung, die sich über mehrere Stockwerke erstreckt}}_{\text{Definiens}}\text{.}$$

$$\text{„}\underbrace{\text{Prospektiv}}_{\text{Definiendum}}\text{“ bedeutet „}\underbrace{\text{der Aussicht oder Möglichkeit nach}}_{\text{Definiens}}\text{“.}$$

$$\text{Definition: Für natürliche Zahlen } n \text{ setzt man } \underbrace{n!}_{\text{Definiendum}} = \underbrace{1 \cdot 2 \cdot \ldots \cdot n}_{\text{Definiens}}\text{.}$$

> Bei Explikationen spricht man entsprechend auch von „Explikandum“ und „Explikans“.

### 411. Die Form von Definitionen (traditionell)

In der traditionellen Logik galt eine bestimmte Form von Definitionen als vorbildlich, nämlich die *definitio per genus proximum et differentiam specificam*. Dabei wird zur Angabe eines Begriffsinhalts der nächste umfassendere Begriff (Gattung) angegeben, sowie das Merkmal, durch den sich Gegenstände, die unter den zu definierenden Begriff fallen, von anderen Mitgliedern dieser Gattung unterscheiden (Differenz).
Beispiel:

$$\text{„Ein Schimmel ist ein } \underset{\substack{\uparrow\\ \text{Differenz}}}{\text{weißes}} \ \underset{\substack{\uparrow\\ \text{Gattung}}}{\text{Pferd}}\text{.“}$$

> Die *definitio per genus proximum et differentiam specificam* passt sehr gut zur klassischen Begriffskonzeption, weil Gattungs- und Differenzbegriffe als eine Gesamtheit von gemeinsam hinreichenden und für sich notwendigen Begriffsmerkmalen verstanden werden können.

### 412. Die Form von Definitionen (modern)

Aber viele Beispiele können zeigen, dass gute Definitionen nicht unbedingt diese Form haben müssen:

Jemandes Schwager ist der Bruder seines/ihres Ehepartners oder der Ehemann eines seiner/ihrer Geschwister.

Klar ist, dass für gute Definitionen Folgendes gelten muss:
*Alle* Gegenstände müssen *genau dann* unter das Definiendum fallen, *wenn* sie unter das Definiens fallen.
Deshalb ist die logische Form einer Definition im Allgemeinen die einer allquantifizierten Bisubjunktion:

$$\forall x\,(\Phi(x) \leftrightarrow \Psi(x))$$

> Dabei steht Φ(x) für das Definiendum und Ψ(x) für das Definiens. Das Definiens ist normalerweise in sich komplex, wie das folgende Beispiel zeigt.

<!-- p. 167 | pdf 175 -->
### 413. Die Form von Definitionen (modern)

Ist das Definiendum ein mehrstelliger Relationsbegriff, dann ist die logische Form der Definition eine mehrfach allquantifizierte Bisubjunktion, wie im Beispiel der Schwager-Definition:

$Sxy$: *x* ist *y*'s Schwager.
$Gxy$: *x* ist *y*'s Geschwister.
$Exy$: *x* ist *y*'s Ehepartner.
$Mx$: *x* ist männlich.

$$\forall x\,\forall y\,(Sxy \leftrightarrow (Mx \wedge (\exists z\,(Ezy \wedge Gxz) \vee \exists z\,(Gzy \wedge Exz))))$$

### 414. Die Korrektheit von Definitionen

△ **Wir bezeichnen eine Definition dann und nur dann als *korrekt*, wenn alle und nur die Gegenstände, die unter das Definiens fallen, auch unter das Definiendum fallen.**

Anders gesagt: Bei einer korrekten Definition müssen Definiens und Definiendum dieselbe Extension besitzen.

Es gibt zwei Möglichkeiten, wie Definitionen das Ziel der Korrektheit verfehlen können: Sie können zu weit oder zu eng sein.

△ **Eine Definition ist *zu eng*, wenn es Gegenstände gibt, die unter das Definiendum, nicht aber unter das Definiens fallen.**

Beispiele:

„Studierende sind junge Menschen, die sich zum Studium an der Universität eingeschrieben haben.“

> Gleich in mehrfacher Hinsicht zu eng: Nicht nur an Universitäten gibt es Studierende und nicht alle Studierenden sind jung.

„Wissenschaft ist die mathematische Beschreibung der Wirklichkeit.“

> Zu eng, weil es auch nicht-mathematisierte Wissenschaften gibt.

„Die politische Macht ist die organisierte Gewalt einer Klasse, um eine andere Klasse zu unterdrücken.“
(Karl Marx und Friedrich Engels: *Das kommunistische Manifest*)

> Zu eng, weil es auch andere Formen politischer Macht geben kann. Allerdings: Hier zeigt sich schon, dass es einen Unterschied macht, ob man Marx' und Engels' Definition als analytische oder als stipulative Definition verstehen will.

Dass eine Definition zu eng ist, wird oft auch so ausgedrückt:
Die durch das Definiens gesetzten Bedingungen sind für den definierten Begriff *nicht notwendig*.

△ ***Zu weit*** **ist eine Definition, wenn es Gegenstände gibt, die unter das Definiens, nicht aber unter das Definiendum fallen.**

<!-- p. 168 | pdf 176 -->
Beispiele:
„Ein Fisch ist ein im Wasser lebendes Tier.“

> Zu weit, weil z.B. Delfine und Wale keine Fische sind.

„ ‚Mord‘ bedeutet ‚Tötung eines Menschen‘.“

> Zu weit, weil Mord zumindest die absichtliche Tötung (und zusätzlich noch das Vorliegen von Mordmerkmalen) voraussetzt.

(Auf die Frage, was Wissen sei:)
„Wahrscheinlich ist Wissen wahre Meinung. Das soll meine Antwort sein.“
Platon: *Theaitetos* 187b

> Zu weit, weil damit auch Fälle von schlecht begründeter Überzeugung, die nur zufällig auch wahr ist, als Wissen qualifiziert werden. (Die Definition wird im *Theaitetos* genau in dieser Hinsicht kritisiert und später verbessert.)

Dass eine Definition zu weit ist, wird oft auch so ausgedrückt:
Die durch das Definiens gesetzten Bedingungen sind für den definierten Begriff *nicht hinreichend*.

### 415. Die Korrektheit von Definitionen: Bemerkungen

Noch drei Bemerkungen zur Korrektheit von Definitionen:

*1. Eine inkorrekte Definition kann auch zu eng und zu weit zugleich sein!*

Beispiel:
„Bücher sind diejenigen Medien, die in Bibliotheken gesammelt werden.“

> Die Definition ist zugleich zu eng (nicht alle Bücher werden in Bibliotheken gesammelt) und zu weit (in Bibliotheken werden z.B. auch DVDs gesammelt).

*2. Es ist oft eine nicht einfach zu entscheidende und umstrittene Frage, ob eine Definition korrekt oder nicht ist. (Besonders in der Philosophie.)*

Beispiel:
„Unter dem Gutem verstehe ich das, wovon wir sicher wissen, dass es uns nützlich ist.“
Spinoza, *Ethik* IV, Vorwort.

*3. Im strengen Sinn müssen sich <u>nur analytische Definitionen</u> nach dem Kriterium der Korrektheit beurteilen lassen.*

<!-- p. 169 | pdf 177 -->
*Stipulative Definitionen* sind automatisch korrekt, weil ja durch die Definition erst vereinbart wird, welche Gegenstände unter das Definiendum fallen sollen.

Bei *Explikationen* ist dies zwar prinzipiell ähnlich wie bei Stipulationen: Der Begriffsumfang soll neu festgelegt werden. Da eine Explikation aber normalerweise den Anspruch erhebt, sich extensional *weitestgehend* mit der bisherigen Verwendungsweise des explizierten Ausdrucks zu decken, kann auch sie in gewissem Sinne inkorrekt sein, falls dies misslingt.

### 416. Die Eignung von Definitionen

Nicht jede korrekte Definition ist auch eine gute Definition. Ihre Güte ist zusätzlich noch relativ zu dem Zweck, zu dem sie vorgenommen wird (z.B. einen neuen Ausdruck einführen oder Mehrdeutigkeiten beseitigen).

Wir wollen eine Definition als *geeignet* bezeichnen, wenn sie sich dazu eignet, den Zweck, zu dem sie vorgenommen wird, zu erfüllen.

Für die Eignung einer Definition ist es natürlich entscheidend, dass die Adressaten der Definition alle im Definiens verwendeten Ausdrücke verstehen können.

Beispiel:
„Als Rinderwahn bezeichnet man die bovine spongiforme Enzephalopathie.“

> Diese Definition wäre z.B. ungeeignet in einem Schulbuch. Es kann aber durchaus Kontexte geben, wo sie geeignet ist. (Stellen Sie sich z.B. vor, ein französischer Veterinär mit leidlichen, hauptsächlich auf das Fachvokabular beschränkten Deutschkenntnissen fragt einen Kollegen, was die Leute eigentlich meinten, wenn sie immer von „Rinderwahn“ sprächen.)

### 417. Zirkuläre Definitionen

Ein besonderer Problemfall tritt auf, wenn das Definiens das Definiendum selbst oder einen sehr nah verwandten Ausdruck enthält.

Beispiele:
„Eine Gefahr ist jede Art von gefährlicher Situation.“

„Eine Analyse bedeutet, dass die den Dingen innewohnenden Widersprüche analysiert werden.“
(Mao Tse-tung: *Worte des Vorsitzenden Mao Tse-tung*, Kap. 22)

Das Problem bei zirkulären Definitionen ist i.A. nicht, dass sie nicht korrekt wären, sondern dass sie nicht geeignet sind, d.h. ihren Zweck nicht erfüllen können.

- Sie sind ungeeignet, neue Ausdrücke einzuführen, weil jemand der das Definiendum noch nicht kennt, auch das Definiens nicht verstehen kann.
- Sie sind ungeeignet, Mehrdeutigkeiten zu beseitigen, weil der im Definiens verwendete Ausdruck genau denselben Mehrdeutigkeiten unterworfen ist, die im Definiendum beseitigt werden sollten.

In einer Argumentation kann eine solche Zirkularität auch über mehrere Definitionen verteilt sein. Z.B. könnten die folgenden zwei Definitionen in ein und demselben Text auftreten:

„Krieg ist jede Verletzung des Friedenszustandes.“

„Frieden ist die Abwesenheit von Krieg.“

Dies bezeichnet man auch als *verborgene Zirkularität*. Aus denselben eben genannten Gründen ist sind solche Definitionen für die meisten Zwecke ungeeignet.

<!-- p. 170 | pdf 178 -->
> Allerdings muss man den Beispielsätzen immerhin zuerkennen, dass sie geeignet sind, das Verhältnis von Krieg und Frieden *zueinander* zu erfassen. Gerade bei komplizierten Begriffssystemen kann so eine Klärung der wechselseitigen Begriffsbeziehungen an sich schon sehr nützlich sein. Man spricht dann oft davon, dass der Zirkel der Definitionen „groß genug“ ist, um erhellend Auskunft über das Begriffssystem zu geben.

### 418. Definitionen in der Philosophie: Begriffsanalyse

Bei der Überprüfung der *Korrektheit* von Definitionen haben wir oben nur auf die *Extensionen* von Definiens und Definiendum geachtet. Besonders in der Philosophie will man aber oft mehr als nur eine extensional korrekte und praktisch geeignete Definition geben: Die Definition soll erfassen, was wir mit einem bestimmten Begriff *meinen*. Dazu muss das Definiens auch *intensional* mit dem Definiendum übereinstimmen. Eine Definition, die dies versucht, bezeichnet man in der Philosophie oft als *Begriffsanalyse*.

> Traditionell hat man einmal zwischen *Realdefinitionen* und *Nominaldefinitionen* unterschieden. Dabei sind Realdefinitionen solche, die das Definiendum durch Angabe seiner *Wesensmerkmale* definieren, während Nominaldefinitionen sich auch unwesentlicher Merkmale bedienen.
>
> Klassisches Beispiel:
> Mensch = vernünftiges Lebewesen (Realdefinition)
> Mensch = federloser Zweibeiner (Nominaldefinition)
>
> Die Unterscheidung weist große Ähnlichkeit auf mit der Unterscheidung zwischen Begriffsanalyse und gewöhnlicher Definition. Allerdings muss man nicht an eine metaphysische Unterscheidung zwischen wesentlichen und unwesentlichen Merkmalen glauben, um Begriffsanalyse betreiben zu können.

### 419. *A priori*

Da bei einer erfolgreichen Begriffsanalyse die Begriffs*inhalte* von Definiens und Definiendum übereinstimmen sollen, meinen viele Verfechter der Begriffsanalyse, man müsse sie *a priori* betreiben können.

△ **Eine Proposition ist genau dann *a priori wissbar*, wenn jeder, der über alle darin vorkommenden Begriffe verfügt, ihre Wahrheit beurteilen kann, ohne bestimmte (Sinnes-) Erfahrungen machen oder gemacht haben zu müssen.**

Beispiele:
„Glückseligkeit ist die Befriedigung aller unserer Neigungen […].“ (Kant, KrV B 834)

> Ein guter Kandidat für eine a priori beurteilbare Begriffsanalyse.

„Green Rosellas sind diejenigen langschwänzigen Plattschweifsittiche, die nur in Tasmanien und auf den Inseln der Bass Strait vorkommen.“

> Dies kann keine Begriffsanalyse des Begriffs „Green Rosella“ sein, denn selbst Personen, die über alle erforderlichen ornithologischen und geographischen Begriffe verfügen, können die Übereinstimmung von Definiens und Definiendum nicht a priori entscheiden.

### 420. Begriffsanalyse und Notwendigkeit

Dass eine Begriffsanalyse einen a priori wissbaren Zusammenhang zwischen Begriffen wiedergibt, bedeutet auch, dass ihre Korrektheit unabhängig davon sein muss, wie die Welt empirisch beschaffen ist. Die Übereinstimmung zwischen Definiens und Definiendum muss sich auch auf mögliche Welten erstrecken.

<!-- p. 171 | pdf 179 -->
Man überprüft deshalb die Angemessenheit einer Begriffsanalyse oft, indem man überprüft, ob Definiens und Definiendum auch *notwendigerweise* denselben Begriffsumfang haben.
Symbolisch:

$$\Box\,\forall x\,(\Phi(x) \leftrightarrow \Psi(x))$$

> Zur Bedeutung des Symbols „□“ siehe Kapitel 21, Folien 508 ff.

### 421. Begriffsanalyse: Beispiel

Beispiel für eine putative Begriffsanalyse: *Personale Identität*

Was bedeutet es, dass ein Wesen zu einem bestimmten Zeitpunkt und ein Wesen zu einem anderen Zeitpunkt *dieselbe Person* sind?

Putative Analyse: *Die psychologische Analyse*
*x* und *y* sind genau dann dieselbe Person, wenn sie durch eine Kette psychologischer Verbindungen miteinander verbunden sind. Eine psychologische Verbindung besteht zwischen zwei Wesen genau dann, wenn die psychologischen Eigenschaften des späteren Wesens größtenteils ursächlich von den psychologischen Eigenschaften des früheren Wesens abhängen.

> Das ist eine vereinfachte Darstellung von Sidney Shoemakers Analyse der personalen Identität. („Personal Identity: A Materialist's Account“, in: *Personal Identity*, hrsg. v. Shoemaker & Swinburne, Oxford 1984.)

Die psychologische Analyse ist dafür kritisiert worden, dass sie in bestimmten Fällen von Aufspaltungen von psychologischen Wesen versagen würde:
(Z.B. wenn alle psychischen Eigenschaften eines Wesens auf ein zweites kopiert würden, oder wenn zwei Gehirnhälften erfolgreich getrennt werden könnten, so dass beide Hälften getrennt weiterleben könnten.)

> In einer solchen Welt könnte die psychologische Analyse nicht korrekt sein, weil sonst zwei gleichzeitig und getrennt voneinander lebende Wesen als ein und dieselbe Person gelten müssten.

D.h.: Die psychologische Analyse könnte zwar als korrekte Definition erfassen, wann in unserer Welt (in der es keine Aufspaltung gibt) *x* und *y* dieselbe Person sind. Sie kann aber keine angemessene Begriffsanalyse sein, weil sie nicht in allen möglichen Welten korrekt ist.

### 422. Definitionen in der Philosophie: Begriffsanalyse

Merke:

- In der Philosophie geht man üblicherweise davon aus, dass eine angemessene Begriffsanalyse *a priori* erkennbar und *notwendigerweise* korrekt sein muss.
- Nicht jede gute Definition muss eine Begriffsanalyse sein.

> Wenn die Kritik an der klassischen Begriffskonzeption zutrifft, die wir oben untersucht haben, dann ist Begriffsanalyse in diesem Sinn vielleicht gar nicht möglich, weil man den Begriffsinhalt eines Begriffs dann nicht durch eine Kombination anderer Begriffe genau wiedergeben kann.
>
> Beachten Sie, dass es auch eine andere Art und Weise gibt, den Begriff „Begriffsanalyse“ zu verwenden. Manche Autoren sprechen bereits von Begriffsanalyse, wenn man irgendeinen a priori erkennbaren logischen Zusammenhang zwischen Begriffen feststellt (z.B. dass notwendigerweise, wenn etwas unter den Begriff

<!-- p. 172 | pdf 180 -->
> „Junggeselle“ fällt, es auch unter den Begriff „unverheiratet“ fällt). In diesem Sinne muss Begriffsanalyse nichts mit Definitionen zu tun haben.

### 423. Mehrdeutigkeit in Argumenten

Beim Argumentieren ist es von größter Wichtigkeit, genau darauf zu achten, welcher Begriff jeweils verwendet wird. Die Feinheiten der philosophischen Begriffsanalyse sind aber meistens für die argumentative Praxis nicht entscheidend.
Wichtig ist, dass Ausdrücke, die mehrmals im Argument auftauchen, auch überall denselben Begriff ausdrücken.

Zur Illustration ein sehr schlichtes Beispiel:

$$\begin{array}{l}
\text{Opa sitzt auf einer Bank.} \\
\text{Eine Bank ist ein Geldinstitut.} \\
\hline
\text{Opa sitzt auf einem Geldinstitut.}
\end{array}$$

Die Form des Arguments scheint einwandfrei; das Problem liegt in der Mehrdeutigkeit des Wortes „Bank“.

### 424. Äquivokation

△ **Wenn ein für die Folgerichtigkeit einer Argumentation entscheidender Ausdruck so verwendet wird, dass er an verschiedenen Stellen unterschiedliche Bedeutungen hat, liegt ein Fehlschluss der *Äquivokation* vor.**

> Strenggenommen liegt natürlich nur dann ein Fehlschluss vor, wenn die Unterschiedlichkeit der Bedeutungen die formale Gültigkeit wirklich zunichte macht. Das ist mit der Formulierung „ein für die Folgerichtigkeit einer Argumentation *entscheidender* Ausdruck“ gemeint.
>
> Die Bezeichnung rührt daher, dass bei einer Äquivokation zwei eigentlich verschiedene Sachen gleich (*aequus*) genannt (*vocare*) werden.

Äquivokationen können versehentlich vorkommen. Oft geschehen sie aber auch absichtlich, wenn ein Sprecher eine *Mehrdeutigkeit ausnutzt*, um ein Scheinargument zu konstruieren.

In der Philosophie nennt man absichtlich gemachte Fehlschlüsse *Sophismen* und versehentlich begangene *Paralogismen*.

### 425. Äquivokation: Beispiele

$$\begin{array}{l}
\text{Macht verdirbt (Lord Acton).} \\
\text{Wissen ist Macht (Francis Bacon).} \\
\hline
\text{Wissen verdirbt.}
\end{array}$$

> Der Ausdruck „Macht“ wird in beiden Prämissen in unterschiedlicher Bedeutung gebraucht.
> Erste Prämisse: „Macht“ = „Herrschaft über Menschen“,
> zweite Prämisse: „Macht“ = „Kontrolle über Dinge“.

<!-- p. 173 | pdf 181 -->
### 426. Äquivokation: Beispiele

Harmonie besteht zwischen zwei Menschen, die dasselbe wollen. Marie und Peter, die sich gerade voneinander scheiden lassen, wollen beide dasselbe: das Haus für sich alleine behalten. Also herrscht zwischen Marie und Peter Harmonie.

> Hier wird „dasselbe wollen“ einmal in der Bedeutung „dieselben Sachverhalte herbeiwünschen“ und einmal in der Bedeutung „auf den Besitz desselben Objekts erpicht sein“ verwendet. Es handelt sich also um eine Äquivokation.

### 427. Äquivokation: Beispiele

Ein Beispiel des griechischen Philosophen Eubulides (4. Jh. v. Chr.):

Was du nicht verloren hast, das hast du noch. Hörner hast du nicht verloren. Daraus folgt: Du hast Hörner.

> Die erste Prämisse ist nur dann plausibel, wenn „Was du nicht verloren hast“ bedeutet: „Was du einmal hattest und seitdem nicht verloren hast“. Genau das kann derselbe Ausdruck aber in der zweiten Prämisse *nicht* bedeuten.

### 428. Äquivokation: Beispiele

Nochmals nach Eubulides:

Erkennst Du diesen Verhüllten? — Nein! — Es ist Dein Vater! Daraus folgt: Du erkennst Deinen Vater nicht.

> Gutes Beispiel dafür, dass Äquivokationen manchmal leichter zu erkennen als genau zu erklären sind. Das Problem ist hier, dass die Formulierung der Schlussfolgerung, die in einem bestimmten Sinn ja völlig zutreffend ist, einen anderen Sinn nahelegt: „Du erkennst Deinen Vater nicht, wenn Du (unter normalen Bedingungen) vor ihm stehst.“ Man kann also sagen, dass eine Äquivokation des Wortes „erkennen“ vorliegt: Einmal im Sinne von „in dieser spezifischen Situation erkennen“ und einmal im Sinne von „unter normalen Bedingungen erkennen“.

### 429. Äquivokation: Beispiele

Manchmal lässt sich eine Äquivokation nicht auf ein einzelnes Wort zurückführen, das in verschiedenen Bedeutungen verwendet wird:

Warum essen weiße Schafe mehr als schwarze Schafe?
Weil es mehr weiße als schwarze Schafe gibt!

Das Verwirrspiel in diesem Beispiel beruht darauf, dass der Satz
„Weiße Schafe essen mehr als schwarze Schafe“
verschiedene Propositionen ausdrücken kann, nämlich

- dass ein weißes Schaf typischerweise mehr isst als ein schwarzes, oder
- dass alle weißen Schafe zusammengenommen mehr essen als alle schwarzen.

> Das Beispiel zeigt: Manchmal sind Mehrdeutigkeiten nur auf Satzebene zu identifizieren.

<!-- p. 174 | pdf 182 -->
### 430. Äquivokation: Beispiele

John Locke gegen die Behauptung, es gebe bestimmte Propositionen, die den Menschen als Wissen angeboren seien:

[N]ämlich ist es offensichtlich, dass alle Kinder und Idioten nicht im Geringsten eine Vorstellung oder einen Gedanken von diesen Sätzen haben. […]
Wer […] von angeborenen, im Verstande vorhandenen Begriffen redet, kann (sofern er damit eine bestimmte Art von Wahrheiten bezeichnen will) damit nicht meinen, dass solche Wahrheiten im Verstand vorhanden seien, die er nie wahrgenommen hat und die ihm noch völlig unbekannt sind. Denn wenn die Worte „im Verstande sein“ [*to be in the understanding*] irgendeine Bedeutung haben, so besagen sie, dass etwas verstanden wurde [*they signify to be understood*]. Mithin wollen die Ausdrücke „im Verstand sein, aber nicht verstanden sein“, „im Geist sein, aber nie wahrgenommen sein“ genau dasselbe besagen wie: etwas ist und ist zugleich nicht im Geist oder im Verstand.

*An Essay Concerning Human Understanding* (1690), Bk. I, Ch. I, §5.

> Einerseits scheint Lockes Gleichsetzung von „im Verstand sein“ und „verstanden sein“ eine klare Äquivokation zu sein – zumindest für uns moderne Leser, die wir mit der Vorstellung unbewusster mentaler Gehalte vertraut sind. (Die Möglichkeit unbewusster mentaler Zustände wurde in der Philosophie allerdings schon seit Platon diskutiert.)
> Andererseits enthält Lockes Argumentation einen wertvollen Gedanken: Die Verfechter angeborener Begriffe/Wahrheiten müssen genauer sagen, was sie damit meinen, dass diese von Geburt an im menschlichen Verstand vorhanden sind. Sie können jedenfalls nicht meinen, dass sie dies im Sinne von bewussten Repräsentationen sind.

### 431. Äquivokation: Beispiele

The only proof capable of being given that an object is visible, is that people actually see it. The only proof that sound is audible, is that people hear it; and so of the other sources of our experience. In like manner, I apprehend, the sole evidence it is possible to produce that anything is desirable, is that people actually desire it.
John Stuart Mill, *Utilitarianism* (1863)

> Ein problematischer Zug an diesem Argument ist, dass es eine zweifelhaften Analogieschluss aufzubauen versucht. Aber deshalb steht es nicht als Beispiel hier. Hinzu kommt nämlich eine Äquivokation im Hinblick auf das Wort „desirable“. Entsprechend der Analogie mit „*visible*“ und „*audible*“ müsste es so etwas bedeuten wie „wünschbar“, also zum Ausdruck bringen, dass es *möglich* ist, sich so etwas zu wünschen. Aber die Bedeutung von „desirable“ ist „wünschenswert“ und meint daher, dass es *richtig oder angemessen* ist, das zu wünschen, was als „desirable“ bezeichnet wird.

### 432. *Quaternio terminorum*

$$\begin{array}{l}
\text{Nur Männer dienen in der Armee.} \\
\text{Kein Feigling ist ein Mann.} \\
\hline
\text{In der Armee gibt es keinen Feigling}
\end{array}$$

> Hier liegt eine Äquivokation im Hinblick auf das Wort „Mann“ vor, das einmal in der Bedeutung „erwachsene Person männlichen Geschlechts“ und einmal in der Bedeutung „Person mit als typisch männlich erachteten Tugenden“ (oder dgl.) verwendet wird.

Wäre nicht die Äquivokation, könnte man dieses Beispiel als kategorischen Syllogismus (Typ „Cesare“) auffassen:

<!-- p. 175 | pdf 183 -->
$Ax$: *x* ist Armeeangehöriger.
$Mx$: *x* ist ein Mann.
$Fx$: *x* ist ein Feigling.

$$\begin{array}{l@{\qquad}l}
\text{Alle A sind M.} & \forall x\,(Ax \rightarrow Mx) \\
\text{Kein F ist M.} & \neg\exists x\,(Fx \wedge Mx) \\
\hline
\text{Kein A ist F.} & \neg\exists x\,(Ax \wedge Fx)
\end{array}$$

- Ein Argument, das die Form eines kategorischen Syllogismus hat, aber bei dem der in beiden Prämissen vorkommende Begriff (der „Mittelbegriff“) in verschiedenen Bedeutungen auftritt, nennt man *quaternio terminorum*.

  > Diese spezielle Bezeichnung dieses Sonderfalls von Äquivokation rührt daher, dass bei einem kategorischen Syllogismus normalerweise nur drei Begriffe eine Rolle spielen. Liegt aber eine Äquivokation des Mittelbegriffs vor, so sind plötzlich tatsächlich vier statt drei Begriffen im Spiel.

### 433. Mehrdeutigkeiten der logischen Form

Eine Äquivokation kann auch ein und dasselbe Wort so verwenden, dass eine ganz andere logische Form vorliegt, als es für ein gültiges Argument der Fall sein müsste:

$$\begin{array}{l}
\text{Nichts ist schwerer als das schwerste Element.} \\
\text{Eine Feder ist schwerer als Nichts.} \\
\hline
\text{Eine Feder ist schwerer als das schwerste Element.}
\end{array}$$

> Für die Gültigkeit des Arguments wäre es erforderlich, dass „Nichts“ überall als ein Begriffswort fungieren würde und etwa „das Vakuum“ oder „die Abwesenheit jeden Stoffes“ bedeuten würde. Aber in der ersten Prämisse spielt „Nichts“ die Rolle einer logischen Konstante und bedeutet so viel wie „Es gibt keinen Stoff …“.
>
> Auch der Sophismus des Chrysippos auf Folie 385 lässt sich als Ausnutzung einer Mehrdeutigkeit der logischen Form verstehen.

### 434. Mehrdeutigkeiten der logischen Form

Mehrdeutigkeiten in der logischen Form sind häufig, besonders bei Sätzen, die eine Quantifikation andeuten, aber nicht genau spezifizieren.

Beispiele:
„Menschen sind dumm.“

> Was ist gemeint? „Alle Menschen sind dumm“, „Einige Menschen sind dumm“, „Die meisten Menschen sind dumm“?

„Weisheit geht mit Tapferkeit einher.“

> Ist gemeint, dass alle Weisen tapfer sind, dass alle Tapferen weise sind, oder beides? Oder dass dies meistens oder typischerweise so ist?

### 435. *Ignoratio elenchi*

Ein Sonderfall von Mehrdeutigkeit liegt vor, wenn als Schlussfolgerung eines Arguments eine Aussage

<!-- p. 176 | pdf 184 -->
auftritt, die zwar mit dem eigentlich zur Debatte stehenden Argumentationsziel verwechselt werden kann, aber tatsächlich eine andere Proposition ausdrückt.

Beispiel:
Oft wird behauptet, dass die Darstellung von Gewalt im Fernsehen das Verhalten jugendlicher Zuschauer nicht beeinflussen würde. Dabei sind viele Verhaltenseinflüsse doch ganz offensichtlich: Zuschauer zucken schreckhaft zusammen, wenden den Kopf ab, schlafen nachher schlechter. Der Einfluss von Gewaltdarstellung auf das Verhalten lässt sich also überhaupt nicht von der Hand weisen.

> In diesem Argument wird die eigentlich umstrittene Behauptung („Gewaltdarstellungen im Fernsehen beeinflussen die Gewaltbereitschaft und das *Gewalt*verhalten jugendlicher Zuschauer“) durch eine andere, schwächere und in der bekannten Diskussion nicht erkennbar relevante These ersetzt: „Gewaltdarstellungen im Fernsehen beeinflussen das Verhalten jugendlicher Zuschauer“.

### 436. *Ignoratio elenchi*

△ **Bei einem Argument, bei dem die Schlussfolgerung statt einer für den Argumentationskontext relevanten Proposition eine andere, ähnliche, aber mehr oder weniger irrelevante ausdrückt, spricht man von einer *ignoratio elenchi*.**

> Sie können sich als Bedeutung von „*ignoratio elenchi*“ also auch einfach „Thema verfehlt“ merken.
>
> Ob eine ignoratio elenchi vorliegt, kann man nicht am Argument alleine ablesen, sondern man braucht Anhaltspunkte, welche Proposition im jeweiligen Argumentations*kontext* jeweils zur Diskussion steht.

### 437. *Ignoratio elenchi*: Beispiele

Sie zweifeln daran, dass es ein universell gültiges moralisches Gesetz geben könnte? Nun, das Gravitationsgesetz ist universell gültig, die Gesetze der Mathematik sind universell gültig. Wie können Sie da an der Möglichkeit universell gültiger Gesetze zweifeln?

> Dieses „Argument“ (Wdh. v. Folie 5) ist ein Beispiel für eine Ignoratio elenchi, weil die implizite Schlussfolgerung „Universelle Gesetze sind möglich“ die Behauptung „Universelle moralische Gesetze sind möglich“, um die es eigentlich geht, verfehlt. Selbst wenn moralische Gesetze eine Unterklasse der Art von universellen Gesetzen wären, deren Möglichkeit durch Beispiele nachgewiesen wird, würde die Möglichkeit universeller Gesetze ganz allgemein noch nicht die Möglichkeit auch dieser speziellen Art implizieren.
>
> Zusätzlich ist es fraglich, ob moralische Gesetze, Naturgesetze und mathematische Gesetze alle „Gesetze“ im selben Sinne sind.

### 438. *Ignoratio elenchi*: Beispiele

Es ist ganz offenbar falsch, dass alle Menschen dieselben Rechte haben. Man muss nur einmal den Blick über den Tellerrand schweifen lassen, um zu erkennen, dass nicht in allen Teilen der Welt die Menschen genau die Rechte haben, die sich nun einmal zufälligerweise in der westlichen Tradition entwickelt haben. In anderen Ländern gelten andere Rechte, weshalb nicht alle Menschen dieselben Rechte haben.

> Hier nutzt die Argumentation eine Mehrdeutigkeit des Ausdrucks „ein Recht haben“ aus. In der Schlussfolgerung wird er in einem juristischen Sinn verwendet, in dem „ein Recht haben“ bedeutet, dass jemandem ein Recht tatsächlich gewährt wird. Eigentlich ging es aber um einen moralischen Sinn von „ein Recht haben“, bei dem dieser Ausdruck verwendet wird, um auszudrücken, dass jemandem ein Recht zusteht.
>
> Äquivokationen sind besonders schwer zu erkennen, wenn, wie in diesem Fall, die unterschiedlichen Bedeutungen

<!-- p. 177 | pdf 185 -->
> beide gebräuchlich sind und nahe beieinander liegen.

## 17. Formen induktiver Argumente

### 439. Induktive Argumente

$$\begin{array}{l}
\text{Niels Gunnarsson lebt in Trondheim.} \\
\text{Wer in Trondheim wohnt, besitzt mit großer Wahrscheinlichkeit ein Paar warme Socken.} \\
\hline
\text{Also wird Niels Gunnarsson ein Paar warme Socken besitzen.}
\end{array}$$

Erinnern Sie sich daran, was wir in der Einführung über dieses Argument gesagt haben:

- Wenn die Prämissen wahr sind, dann ist es vernünftig, auch die Wahrheit der Schlussfolgerung zu erwarten.
  (Das Argument ist *gültig*.)
- Aber es ist durchaus möglich, dass die Prämissen wahr sind und die Konklusion falsch.
  (Das Argument ist nicht *deduktiv gültig*.)

Wir haben das Beispielargument *induktiv gültig* genannt und dies (vorsichtig) wie folgt definiert:
Wenn alle Prämissen wahr sind, dann ist es wahrscheinlich, dass auch die Konklusion wahr ist.

Allgemein nennen wir alle Argumente, die nicht auf deduktive sondern auf induktive Gültigkeit abzielen, *induktive Argumente*.

### 440. Besonderheiten induktiver Argumente

△ <u>Erste Besonderheit induktiver Argumente:</u>
**Bei induktiven Argumenten kann es sein, dass alle Prämissen wahr sind und die Schlussfolgerung trotzdem falsch. Induktives Argumentieren beinhaltet deshalb immer ein epistemisches *Risiko*.**

Wir sind sehr häufig auf induktives Argumentieren angewiesen, weil unser Wissen über die Welt fast nie ausreicht, um die für uns relevanten Informationen ganz ohne Risiko zu erschließen.

### 441. Formen induktiver Argumente

Wie auch bei deduktiven Argumenten können induktive Argumente eine Vielzahl von Formen annehmen. Dennoch lassen sich einige typische *Formen* identifizieren.

### 442. Enumerative Induktion

$$\begin{array}{l}
\text{Der Kaffeeinspektor hat aus diesem Sack an 40 verschiedenen zufällig ausgewählten Stellen jeweils eine Bohne} \\
\text{entnommen und auf ihre Güteklasse hin untersucht.} \\
\text{Alle untersuchten Bohnen hatten die Güteklasse A.} \\
\hline
\text{Alle Kaffeebohnen in diesem Sack haben die Güteklasse A.}
\end{array}$$

<!-- p. 178 | pdf 186 -->
△ **Den Schluss von den Eigenschaften einer untersuchten Auswahl aus einer Gesamtheit auf die Gesamtheit überhaupt nennt man *enumerative Induktion* oder *induktive Verallgemeinerung*.**

Beachten Sie, dass bestimmte Voraussetzungen für die Überzeugungskraft des Arguments bedeutsam sind:

- Die Anzahl der untersuchten Bohnen und
- die Tatsache, dass die Bohnen zufällig aus verschiedenen Teilen des Sacks entnommen wurden.

Die Schlussfolgerung einer enumerativen Induktion kann auch in einer Häufigkeits- oder Wahrscheinlichkeitsaussage über die Gesamtheit bestehen:

$$\begin{array}{l}
\text{Der Kaffeeinspektor hat aus diesem Sack an 40 verschiedenen zufällig ausgewählten Stellen jeweils eine Bohne} \\
\text{entnommen und auf ihre Güteklasse hin untersucht.} \\
\text{Davon hatten 36 die Güteklasse A.} \\
\hline
\text{Etwa 90\% der Kaffeebohnen in diesem Sack haben die Güteklasse A.}
\end{array}$$

Als allgemeine Form der enumerativen Induktion kann man angeben:

$$\begin{array}{l}
X\,\% \text{ aller untersuchten/beobachteten } A\text{s sind } B\text{s.} \\
(\text{Es wurde eine große und repräsentative Auswahl von } A\text{s untersucht.}) \\
\hline
X\,\% \text{ aller } A\text{s sind } B\text{s.}
\end{array}$$

> Die zweite Prämisse wird oft nur implizit gegeben. Was „repräsentativ“ im Sinne der zweiten Prämisse bedeutet, können wir erst später genauer beurteilen.

Bei $X = 100$ oder $X = 0$ spricht man von einer *generellen Verallgemeinerung*,
bei $0 < X < 100$ von einer *statistischen Verallgemeinerung*.

### 443. Enumerative Induktion: Beispiele

$$\begin{array}{l}
\text{Das Meinungsforschungsinstitut Emsa hat 3000 zufällig ausgewählte Deutsche befragt, von denen 70\,\% } \\
\text{erklärten, sie glaubten nicht, dass die deutsche Fußball-Nationalmannschaft die Weltmeisterschaft gewinnt.} \\
\hline
\text{Etwa 70\,\% der Deutschen glauben nicht, dass die deutsche Fußball-Nationalmannschaft die Weltmeisterschaft} \\
\text{gewinnt.}
\end{array}$$

### 444. Enumerative Induktion: Beispiele

$$\begin{array}{l}
\text{Jedes Mal, wenn ich durstig war und Apfelschorle getrunken habe, hat die Apfelschorle meinen Durst gestillt.} \\
\hline
\text{Immer wenn ich durstig bin, kann Apfelschorle meinen Durst stillen.}
\end{array}$$

### 445. Statistischer Syllogismus

$$\begin{array}{l}
\text{Etwa 90\% der Kaffeebohnen in diesem Sack haben die Güteklasse A.} \\
\hline
\text{Die nächste Bohne, die ich an zufälliger Stelle diesem Sack entnehme, wird die Güteklasse A haben.}
\end{array}$$

<!-- p. 179 | pdf 187 -->
△ **Einen Schluss von einer Häufigkeits- oder Wahrscheinlichkeitsaussage über eine Gesamtheit auf einen Einzelfall innerhalb der Gesamtheit nennt man einen *statistischen Syllogismus*.**

> Auch hier ist intuitiv klar, dass die Zufälligkeit der Auswahl der nächsten Kaffeebohne eine Rolle spielen kann – wenn z.B. die 10 % der Kaffeebohnen, die nicht Güteklasse A besitzen, alle obenauf liegen.

Als allgemeine Form des statistischen Syllogismus können wir angeben:

$$\begin{array}{l}
X\,\% \text{ aller } A\text{s sind } B\text{s.} \\
c \text{ ist ein } A\text{.} \\
\hline
c \text{ ist ein } B\text{.}
\end{array}$$

Intuitiv ist klar, dass $X$ hoch sein muss, damit das Argument Überzeugungskraft besitzt. Die erste Prämisse kann in verschiedenen Formen auftreten:

Fast alle *A*s sind *B*s.
Die überwiegende Mehrzahl der *A*s sind *B*s.
Die meisten *A*s sind *B*s.
Ein hoher Prozentsatz der *A*s sind *B*s.
Die Wahrscheinlichkeit, dass ein *A* ein *B* ist, ist groß.

### 446. Statistischer Syllogismus: Beispiele

Statistische Syllogismen brauchen wir im Allgemeinen, um aus unseren induktiv entstandenen Überzeugungen über Häufigkeiten und Wahrscheinlichkeiten Schlussfolgerungen für den Einzelfall zu ziehen. Z.B.:

$$\begin{array}{l}
\text{90\,\% aller Regenvorhersagen für Bielefeld von Radio Wetterfrosch treffen zu.} \\
\text{Für morgen hat Radio Wetterfrosch für Bielefeld Regen vorhergesagt.} \\
\hline
\text{Morgen wird es in Bielefeld regnen.}
\end{array}$$

$$\begin{array}{l}
\text{Fast alle katholischen Priester sind kinderlos.} \\
\text{Heinz ist katholischer Priester.} \\
\hline
\text{Heinz ist kinderlos.}
\end{array}$$

### 447. Formen induktiver Argumente

Enumerative Induktion und statistischer Syllogismus stellen nur zwei besonders typische Hauptformen induktiven Schließens dar und erschöpfen die Bandbreite induktiver Argumente nicht.

Beispiele:

$$\begin{array}{l}
\text{Etwa 90\% der Kaffeebohnen in diesem Sack haben die Güteklasse A.} \\
\hline
\text{Ullas aus diesem Sack entnommene Dose Kaffeebohnen enthält zu etwa 90\,\% Bohnen der Güteklasse A.}
\end{array}$$

<!-- p. 180 | pdf 188 -->
> Dieser Schluss ist dem statistischen Syllogismus verwandt, es wird aber hier nicht auf Eigenschaften eines Einzelfalls geschlossen, sondern auf Häufigkeiten innerhalb einer (zufälligen) Auswahl aus einer Gesamtheit.

$$\begin{array}{l}
\text{Susi hat von Peters Stand vorhin sechs verbilligte Orangen gekauft, von denen fünf matschig waren und nur} \\
\text{eine gut.} \\
\hline
\text{Wenn sie jetzt noch einmal sechs Orangen vom selben Stand und vom selben Stapel kauft, werden wieder die} \\
\text{meisten matschig sein.}
\end{array}$$

> In diesem Argument ist die relevante Gesamtheit weder in der Prämisse noch in der Konklusion explizit erwähnt. Man kann den Schluss als eine Zusammensetzung einer induktiven Generalisierung und eines Schlusses von der Gesamtheit auf eine Auswahl wie im vorstehenden Beispiel betrachten.

### 448. Besonderheiten induktiver Argumente

$$\begin{array}{l}
\text{95\,\% aller Studenten mögen Pizza.} \\
\text{Sebastian ist Student.} \\
\hline
\text{Also wird Sebastian Pizza mögen.}
\end{array}$$

$$\begin{array}{l}
\text{85\,\% aller Studenten mögen Chili.} \\
\text{Guido ist Student.} \\
\hline
\text{Also wird Guido Chili mögen.}
\end{array}$$

Am Beispiel statistischer Syllogismen wird besonders klar, dass nicht alle induktiven Argumente ihre Schlussfolgerungen in gleichem Maße stützen.
Dies gilt für alle Arten von induktiven Argumenten: Sie können *unterschiedlich stark* sein.

△ <u>Zweite Besonderheit induktiver Argumente:</u>
**Anders als bei deduktiven Argumenten ist die Güte von induktiven Argumenten eine *graduelle* Angelegenheit: Die Stützung der Schlussfolgerung durch die Prämissen besitzt eine bestimmte *Stärke*, die von Argument zu Argument unterschiedlich sein kann.**

### 449. Besonderheiten induktiver Argumente

$$\begin{array}{l}
\text{95\,\% der männlichen, über 40jährigen Katholiken, die im Landkreis Haseland wohnen, sind verheiratet.} \\
\text{Hans ist ein 43jähriger Katholik und lebt im Landkreis Haseland.} \\
\hline
\text{Hans ist verheiratet.}
\end{array}$$

$$\begin{array}{l}
\text{95\,\% der männlichen, über 40jährigen Katholiken, die im Landkreis Haseland wohnen, sind verheiratet.} \\
\text{Hans ist ein 43jähriger Katholik und lebt im Landkreis Haseland.} \\
\text{Hans ist von Beruf Geistlicher.} \\
\hline
\text{Hans ist verheiratet.}
\end{array}$$

<!-- p. 181 | pdf 189 -->

Offenbar ist das zweite Beispiel ein weniger gutes Argument als das erste. Der Grund dafür ist, dass wir alle wissen, dass die meisten katholischen Berufsgeistlichen unverheiratet sind – vermutlich gilt das auch im Landkreis Haseland. Wenn Sie diese Information als implizite Prämisse zum zweiten Argument hinzunehmen, bricht die induktive Stützung der Schlussfolgerung durch die Prämissen ein.

△ **Dritte Besonderheit induktiver Argumente: Ein starkes induktives Argument kann durch das Hinzutreten zusätzlicher Prämissen schwächer werden.**

> Beachten Sie, dass dies bei deduktiven Argumenten unmöglich ist. Diese Besonderheit hängt natürlich eng mit der ersten Besonderheit zusammen.

### 450. Requirement of total evidence

In der Wissenschaftstheorie ist deshalb *für induktives Argumentieren* die Forderung aufgestellt worden, *immer alle relevanten Informationen über den Gegenstand des Arguments heranzuziehen und offenzulegen*.

Dies nennt man das *requirement of total evidence* (etwa: die Forderung nach der Vollständigkeit der Belege).

### 451. Wie funktionieren induktive Argumente?

$$\begin{array}{l}
\text{95 \% aller Studenten mögen Pizza.} \\
\text{Sebastian ist Student.} \\
\hline
\text{Also wird Sebastian Pizza mögen.}
\end{array}$$

Wir haben schon eine Art und Weise ins Auge gefasst, wie man das Funktionieren eines solchen induktiven Arguments verstehen kann: Im Lichte der Prämissen ist die Schlussfolgerung sehr *wahrscheinlich*. Aber was genau könnte das bedeuten? Schließlich mag Sebastian entweder Pizza oder er mag sie nicht, inwiefern ist das eine Frage der Wahrscheinlichkeit? Um dies zu verstehen, müssen wir uns mit den Begriffen der Wahrscheinlichkeitstheorie beschäftigen.

## 18. Wahrscheinlichkeit

### 452. Wahrscheinlichkeit: Zwei „Sprachen“

Die Statistik interessiert sich für die Wahrscheinlichkeit von *Ereignissen*.

In der induktiven Logik interessieren wir uns jedoch allgemeiner für die Wahrscheinlichkeit von *Propositionen*.

> Z.B. ist es kein Ereignis, dass Sebastian gerne Pizza ist. Für die Analyse von induktiven Argumenten müssen wir also offenbar auch solchen Propositionen Wahrscheinlichkeiten zuordnen, die nicht von Ereignissen handeln.

<!-- p. 182 | pdf 190 -->

### 453. Grundbegriffe der Wahrscheinlichkeitstheorie

△ **Die Wahrscheinlichkeit einer Proposition A gibt man mit einer reellen Zahl zwischen 0 und 1 an:**

$$0 \leq p(A) \leq 1.$$

Eine Proposition, die mit Sicherheit wahr ist, besitzt die Wahrscheinlichkeit 1.

$$p(\Omega) = 1.$$

> In der Statistik und Wahrscheinlichkeitstheorie bezeichnet man ein Ereignis, das mit Sicherheit passieren wird, oder eine Proposition, die mit Sicherheit wahr ist, oft mit dem griechischen Buchstaben „$\Omega$“.

### 454. Grundbegriffe der Wahrscheinlichkeitstheorie

△ **Die Wahrscheinlichkeit von A und die Wahrscheinlichkeit der Negation von A ergeben addiert immer 1:**

$$p(A) + p(\neg A) = 1$$
$$p(A) = 1 - p(\neg A).$$

Beispiel:

Angenommen, die Wahrscheinlichkeit, dass ich mit dem Würfel im nächsten Wurf eine Sechs würfele, ist 1/6. Dann ist die Wahrscheinlichkeit, dass dies *nicht* passiert

$$1 - 1/6 = 5/6.$$

### 455. Grundbegriffe der Wahrscheinlichkeitstheorie

Zwei Propositionen *schließen einander aus*, wenn sie nicht beide zugleich wahr sein können.

△ **Wenn A und B einander ausschließen, dann ist die Wahrscheinlichkeit ihrer Adjunktion die Summe der einzelnen Wahrscheinlichkeiten von A und B:**

$$p(A \vee B) = p(A) + p(B)$$

Beispiel:

Wir ziehen aus einem normalen Kartenspiel (52 Karten) eine Karte. Wie groß ist die Wahrscheinlichkeit, dass ein Bube oder ein König gezogen wird?

Antwort: $p(B \vee K) = p(B) + p(K) = 4/52 + 4/52 = 8/52 = 2/13.$

Achtung: Dass A und B einander ausschließen, ist Vorraussetzung<!-- sic --> dafür, dass man p(A) und p(B) einfach addieren darf!

Beispiel:

Wie vorhin, Frage jedoch: Wie groß ist die Wahrscheinlichkeit, dass ein Bube oder eine schwarze Karte gezogen wird?

<!-- p. 183 | pdf 191 -->

Hier darf man nicht addieren! B und S schließen einander nicht aus. (Würde man addieren, so würde man die schwarzen Buben sozusagen doppelt zählen.)

Allerdings gilt: $B \vee S \equiv (B \wedge \neg S) \vee S$,

$B \wedge \neg S$ einerseits und $S$ andererseits schließen einander aus, daher:

$$\begin{aligned}
p(B \vee S) &= p((B \wedge \neg S) \vee S) \\
&= p(B \wedge \neg S) + p(S) = 2/52 + 26/52 = 28/52 = 7/13.
\end{aligned}$$

### 456. Grundbegriffe der Wahrscheinlichkeitstheorie

Zwei Propositionen sind probabilistisch *unabhängig*, wenn das Zutreffen der einen die andere nicht mehr oder weniger wahrscheinlich macht.

△ **Wenn A und B unabhängig sind, dann ist die Wahrscheinlichkeit ihrer Konjunktion das Produkt der einzelnen Wahrscheinlichkeiten von A und B:**

$$p(A \wedge B) = p(A) \cdot p(B)$$

> In der Wahrscheinlichkeitstheorie geht man übrigens eigentlich umgekehrt vor und definiert: Zwei Propositionen A, B mit $p(A), p(B) \neq 0$ heißen genau dann unabhängig, wenn $p(A \wedge B) = p(A) \cdot p(B)$.

Beispiel: Wir ziehen wieder eine Karte aus dem Spiel. Wie groß ist die Wahrscheinlichkeit, dass sie Bube und Karo ist? Die beiden Einzelwahrscheinlichkeiten sind unabhängig! Denn die Wahrscheinlichkeit eines Buben ist beim Karo so groß wie bei jeder anderen Farbe (und umgekehrt ist die Wahrscheinlichkeit für Karo beim Buben ebenso groß wie die Wahrscheinlichkeit für Karo im ganzen Spiel).

$$p(B \wedge K) = p(B) \cdot p(K) = 4/52 \cdot 1/4 = 1/52.$$

Achtung: Dass A und B unabhängig sind, ist Vorraussetzung<!-- sic --> dafür, dass man p(A) und p(B) einfach multiplizieren darf!

Beispiele:

Wie groß ist die Wahrscheinlichkeit, dass eine zufällig gezogene Karte Karo und rot ist?

Hier darf man natürlich *nicht* $p(K \wedge R) = p(K) \cdot p(R)$ rechnen, da K und R *nicht* unabhängig sind: Für sich genommen, hat R die Wahrscheinlichkeit 1/2, aber wenn K zutrifft, dann ist R schon sicher. Deshalb ist $p(K \wedge R) = p(K) = 1/4$.

Etwa 1 % der deutschen Bevölkerung arbeitet in Führungspositionen, 51 % der deutschen Bevölkerung sind weiblich. Wie groß ist die Wahrscheinlichkeit, dass es sich bei einem zufällig ausgewählten Bundesbürger um eine weibliche Führungskraft handelt?

Hier darf man *nicht* $p(W \wedge F) = p(W) \cdot p(F)$ rechnen, denn der Frauenanteil bei Führungskräften liegt in Deutschland weit unter 51 %, also sind Geschlecht und das Ausfüllen von Führungspositionen (leider) nicht unabhängig voneinander.

### 457. Bedingte Wahrscheinlichkeit

Wir ziehen (ohne Zurückstecken) zwei Karten aus einem normalen Spiel.

Wie hoch ist die Wahrscheinlichkeit, dass die zweite Karte rot ist, *gegeben, dass schon die erste Karte rot war*?

Wie hoch ist die Wahrscheinlichkeit, dass die zweite Karte rot ist, *gegeben, dass die erste Karte schwarz war*?

<!-- p. 184 | pdf 192 -->

Wenn man wie in diesem Beispiel Wahrscheinlichkeiten unter einer bestimmten Voraussetzung sucht, spricht man von *bedingten Wahrscheinlichkeiten*. Die Wahrscheinlichkeit von A, gegeben B, schreibt man als $p(A/B)$.

Wenn die erste gezogene Karte rot war, sind nur noch 25 von 51 verbleibenden Karten rot. Daher

$$p(R_2/R_1) = 25/51.$$

War die erste Karte schwarz, sind noch 26 rote Karten im Spiel:

$$p(R_2/S_1) = 26/51.$$

Mathematisch lässt sich die bedingte Wahrscheinlichkeit genau definieren:

$$p(A/B) = p(A \wedge B) / p(B)$$

Die bedingte Wahrscheinlichkeit ist nur definiert, falls $p(B) > 0$.

> Diese Formel ist anschaulich sehr einleuchtend, wenn man die Wahrscheinlichkeiten als Angaben von relativen Häufigkeiten ansieht. Wie hoch ist die Wahrscheinlichkeit, dass es morgen gewittert, gegeben, dass es morgen regnet, $p(G/R)$?
>
> Nehmen wir an, es regnet an 40 von 100 Tagen. → $p(R) = 0{,}4$.
>
> Außerdem nehmen wir an, es gebe in diesen 100 Tagen zehn, an denen es regnet *und* gewittert. → $p(G \wedge R) = 0{,}1$.
>
> Dann ist die Wahrscheinlichkeit, dass es gewittert, gegeben dass es regnet, der Anteil aller R-Fälle, bei denen zusätzlich auch noch G zutrifft (d. h. bei denen $G \wedge R$ zutrifft) und das ist $10 / 40 = 0{,}1 / 0{,}4 = p(G \wedge R) / p(R) = 0{,}25$.

Aus der Definition der bedingten Wahrscheinlichkeit ergibt sich unmittelbar eine Regel für $p(A \wedge B)$:

$$p(A \wedge B) = p(A/B) \cdot p(B).$$

Da $A \wedge B \equiv B \wedge A$, gilt natürlich auch

$$p(A \wedge B) = p(B \wedge A) = p(B/A) \cdot p(A)$$

Diese Rechenregel für die Konjunktion gilt ohne weitere Voraussetzungen (außer dass die jeweiligen bedingten Wahrscheinlichkeiten wohldefiniert sind).

### 458. Übertragung der Regeln auf bedingte Wahrscheinlichkeiten

Für bedingte Wahrscheinlichkeiten gelten analoge Regeln wie für die unbedingten:

$$p(A/C) = 1 - p(\neg A/C)$$

$$p(A \wedge B/C) = p(A/B \wedge C) \cdot p(B/C).$$

Falls, gegeben C, A und B einander ausschließen, gilt auch

$$p(A \vee B/C) = p(A/C) + p(B/C)$$

<!-- p. 185 | pdf 193 -->

### 459. Bayessche Regel

Diese beiden Gleichungen für $p(A \wedge B)$ stellen zusammengenommen einen Zusammenhang zwischen $p(A/B)$ und der *umgekehrten* bedingten Wahrscheinlichkeit $p(B/A)$ her:

$$p(A \wedge B) = p(A/B) \cdot p(B) = p(B/A) \cdot p(A)$$

$$\Rightarrow \qquad p(A/B) = \frac{p(B/A) \cdot p(A)}{p(B)}.$$

Dies wird oft als *Bayessche Regel* bezeichnet.

### 460. Ein Rechenbeispiel

Die Firma Meyer bezieht ihre Schauben<!-- sic --> zur Hälfte von Anton und zur Hälfte von Bruns. Jetzt hat eine Materialprüfung ergeben, dass die Schrauben von Anton zu 60% schadhaft sind. Die Schrauben von Bruns sind nur zu 10 % schadhaft.

Im Lager befindet sich noch eine nicht gekennzeichnete Kiste Schrauben. Eine Schraube wird entnommen und geprüft. Sie ist schadhaft.

Wie wahrscheinlich ist es, dass die Kiste eine Lieferung von Anton ist?

E: Eine erste zufällig entnommene Schraube aus der Kiste ist schadhaft.

A: Die Kiste stammt von Anton.

Ohne Berücksichtigung der Schraubenprüfung ist die Wahrscheinlichkeit, dass die Kiste von Anton stammt,

$$p(A) = 0{,}5,$$

da Bruns und Anton gleich viel an Meyer liefern.

Aber wie groß ist die Wahrscheinlichkeit im Lichte der neuen Information E, d.h. wie groß ist $p(A/E)$?

Wir kennen $p(E/A) = 0{,}6$ (weil Antons Schrauben zu 60 % schadhaft sind), also liegt es nahe, eine Anwendung der Bayesschen Regel zu versuchen.

$$p(A/E) = \frac{p(E/A) \cdot p(A)}{p(E)}.$$

Jetzt fehlt uns noch eine Angabe über $p(E)$. Wie wahrscheinlich ist es schlechterdings, dass die Schraube schadhaft ist?

Dies kann über zwei Wege zustande kommen, über die wir genaueres Wissen: $A \wedge E$ (d.h. die Schraube ist eine von Antons vielen kaputten Schrauben) und $\neg A \wedge E$ (d.h. die Schraube ist eine von Bruns wenigen kaputten Schrauben).

<!-- p. 186 | pdf 194 -->

> [Abbildung: Wahrscheinlichkeitsbaum mit einem Verzweigungspunkt links, der sich mit Wahrscheinlichkeit 0,5 zum Ast „A: Kiste von Anton“ und mit Wahrscheinlichkeit 0,5 zum Ast „¬A: Kiste von Bruns“ öffnet. Vom Ast „A: Kiste von Anton“ führt ein grauer Pfeil mit Beschriftung 0,4 zu „Schraube heil“ (grau geschrieben) und ein schwarzer Pfeil mit Beschriftung 0,6 zu „Schraube kaputt“; dieser Zweig ist mit „} A ∧ E“ geklammert. Vom Ast „¬A: Kiste von Bruns“ führt ein schwarzer Pfeil mit Beschriftung 0,1 zu einem zweiten „Schraube kaputt“, geklammert mit „} ¬A ∧ E“, und ein grauer Pfeil mit Beschriftung 0,9 zu „Schraube heil“ (grau geschrieben). Die beiden mit A ∧ E bzw. ¬A ∧ E geklammerten „Schraube kaputt“-Zweige werden rechts durch eine weitere geschweifte Klammer zu E zusammengefasst.]

Es gilt: $(A \wedge E) \vee (\neg A \wedge E) \equiv (A \vee \neg A) \wedge E \equiv E$.

$$\begin{aligned}
\text{D.h.} \quad p(E) &= p((A \wedge E) \vee (\neg A \wedge E)) \\
&= p(A \wedge E) + p(\neg A \wedge E) \\
&\quad [\text{denn } A \wedge E \text{ und } \neg A \wedge E \text{ schließen einander aus}] \\
&= p(E/A) \cdot p(A) + p(E/\neg A) \cdot p(\neg A) \\
&= 0{,}6 \cdot 0{,}5 + 0{,}1 \cdot 0{,}5
\end{aligned}$$

Insgesamt ergibt sich

$$p(A/E) = \frac{p(E/A) \cdot p(A)}{p(E/A) \cdot p(A) + p(E/\neg A) \cdot p(\neg A)} = \frac{0{,}6 \cdot 0{,}5}{0{,}6 \cdot 0{,}5 + 0{,}1 \cdot 0{,}5} \approx 0{,}857.$$

### 461. Totale Wahrscheinlichkeit

Die vorhin verwendete Regel

$$p(B) = p(B/A) \cdot p(A) + p(B/\neg A) \cdot p(\neg A)$$

gilt ganz allgemein. Man nennt sie manchmal die Regel der *totalen Wahrscheinlichkeit*.

> Genauer gesagt: sie gilt für $0 < p(A) < 1$, weil sonst die auftretenden bedingten Wahrscheinlichkeiten nicht definiert sind.

Man kann daher die Bayessche Regel auch gleich so schreiben:

$$p(A/B) = \frac{p(B/A) \cdot p(A)}{p(B/A) \cdot p(A) + p(B/\neg A) \cdot p(\neg A)}.$$

### 462. Weiterführung des Beispiels

Es wird noch eine zweite Schraube geprüft, die wieder schadhaft ist. Wie groß ist jetzt die Wahrscheinlichkeit, dass die Kiste von Anton stammt?

E₁: Eine erste zufällig entnommene Schraube aus der Kiste ist schadhaft.

E₂: Eine zweite ebenfalls.

<!-- p. 187 | pdf 195 -->

Wir nehmen an, dass die Schadhaftigkeit der zweiten Schraube in jedem Fall unabhängig von derjenigen der ersten ist, d.h. dass $p(E_2/E_1 \wedge A)$ unverändert 0,6 und $p(E_2/E_1 \wedge \neg A)$ unverändert 0,1 beträgt.

$$p(A/E_1 \wedge E_2) = \frac{p(E_1 \wedge E_2/A) \cdot p(A)}{p(E_1 \wedge E_2/A) \cdot p(A) + p(E_1 \wedge E_2/\neg A) \cdot p(\neg A)}$$

$$= \frac{p(E_1/A) \cdot p(E_2/E_1 \wedge A) \cdot p(A)}{p(E_1/A) \cdot p(E_2/E_1 \wedge A) \cdot p(A) + p(E_1/\neg A) \cdot p(E_2/E_1 \wedge \neg A) \cdot p(\neg A)}$$

$$= \frac{0{,}6 \cdot 0{,}6 \cdot 0{,}5}{0{,}6 \cdot 0{,}6 \cdot 0{,}5 + 0{,}1 \cdot 0{,}1 \cdot 0{,}5} \approx 0{,}973.$$

Zum Vergleich: $p(A/E_1) = \dfrac{p(E_1/A) \cdot p(A)}{p(E_1/A) \cdot p(A) + p(E_1/\neg A) \cdot p(\neg A)} = \dfrac{0{,}6 \cdot 0{,}5}{0{,}6 \cdot 0{,}5 + 0{,}1 \cdot 0{,}5} \approx 0{,}857.$

### 463. Ein induktives Argument

$$\begin{array}{l}
\text{Die im Lager der Firma Meyer befindliche Kiste stammt entweder von Anton oder von Bruns.} \\
\text{Meyer bezieht die Schauben zur Hälfte von Anton und zur Hälfte von Bruns.} \\
\text{Schrauben von Anton sind zu 60\% schadhaft, Schrauben von Bruns nur zu 10 \%.} \\
\text{Zwei zufällig aus der Kiste entnommene Schrauben stellten sich als schadhaft heraus.} \\
\hline
\text{Also stammt die Kiste von Anton.}
\end{array}$$
<!-- sic: „Schauben“ in Zeile 2 wie gedruckt -->

Idee: Die Stärke dieses Arguments bemisst sich an der *bedingten Wahrscheinlichkeit* der Schlussfolgerung, gegeben die in den Prämissen angeführten Belege.

In diesem Fall: $p(A/E_1 \wedge E_2) \approx 0{,}973.$

Um diese Idee endlich weiter untersuchen zu können und zu verstehen, was Wahrscheinlichkeitstheorie mit induktivem Schließen zu tun hat, müssen wir uns überlegen, wie wir die mathematischen Regeln der Wahrscheinlichkeitstheorie eigentlich *interpretieren* sollen.

### 464. Verschiedenartige Interpretationen

Die vorgestellten Regeln erlauben uns, Propositionen Wahrscheinlichkeiten in Form von Zahlen zwischen 0 und 1 zuzuweisen und damit zu rechnen. Aber was sollen diese Zahlen eigentlich bedeuten?

Bei den verschiedenen Interpretationen der Wahrscheinlichkeitstheorie ist besonders eine Unterscheidung wichtig:

△ ***Objektive Interpretationen*** **der Wahrscheinlichkeitstheorie verstehen die Wahrscheinlichkeit als ein Maß für etwas, das unabhängig vom menschlichen Urteil ist.**

△ ***Subjektive Interpretationen*** **der Wahrscheinlichkeitstheorie sehen in der Wahrscheinlichkeit ein Maß für Überzeugtheit oder Zuversicht, das durchaus von Person zu Person verschieden sein kann.**

<!-- p. 188 | pdf 196 -->

### 465. Die klassische Interpretation

△ **Klassische Interpretation (objektiv): Wahrscheinlichkeit ist das Verhältnis der Anzahl verifizierender Fälle zur Gesamtzahl (gleichwahrscheinlicher) möglicher Fälle.**

Z.B.: Die Wahrscheinlichkeit, beim Würfeln mit zwei Würfeln eine 7 zu erzielen, ist 1/6, weil dieses Ergebnis in sechs von 36 möglichen Fällen eintritt.

| Würfel 1 \ Würfel 2 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **1** | 2 | 3 | 4 | 5 | 6 | 7 |
| **2** | 3 | 4 | 5 | 6 | 7 | 8 |
| **3** | 4 | 5 | 6 | 7 | 8 | 9 |
| **4** | 5 | 6 | 7 | 8 | 9 | 10 |
| **5** | 6 | 7 | 8 | 9 | 10 | 11 |
| **6** | 7 | 8 | 9 | 10 | 11 | 12 |

<!-- Markierung: die sechs Zellen mit Summe 7 (Würfel 1 = 1..6, Würfel 2 = 6..1, d.h. die Gegendiagonale) sind grün hervorgehoben. -->

### 466. Die klassische Interpretation

Probleme der klassischen Interpretation:

- Es wird angenommen, dass zu jeder Wahrscheinlichkeitsaussage eine bestimmte endliche Menge von Möglichkeiten existiert. Wie soll diese bei weniger abstrakten Anwendungen aussehen?

  > Bsp.: Die Wahrscheinlichkeit, dass es morgen regnet.

- Jede der Möglichkeiten wird als gleich wahrscheinlich angenommen. Was heißt das in diesem Kontext? Und wie können wir das wissen?
  - Entweder muss die Gleichwahrscheinlichkeit der elementaren Möglichkeiten auf einer anderen Konzeption der Wahrscheinlichkeit beruhen oder
  - sie muss selbst als fundamental und keiner weiteren Rechtfertigung fähig angesehen werden. Diese Möglichkeit wird als Anwendung des „Prinzips des unzureichenden Grundes“ bezeichnet. Die Elementaren Möglichkeiten müssen deshalb als gleich wahrscheinlich angesehen werden, weil wir keinen vernünftigen Grund dafür haben, eine ungleiche Wahrscheinlichkeitsverteilung anzusetzen.

    > Allerdings führt dieses Prinzip selbst wieder zu Schwierigkeiten, weil es oft verschiedene Möglichkeiten gibt, die Welt in elementare Möglichkeiten aufzuteilen.

### 467. Die Häufigkeits-Interpretation

Bei der Häufigkeits-Interpretation wird Wahrscheinlichkeit als *relative Häufigkeit* interpretiert.

Für die Häufigkeits-Interpretation wird Wahrscheinlichkeit primär Klassen (oder Arten, oder Eigenschaften) von Ereignissen zugeschrieben.

Außerdem sind für sie alle Wahrscheinlichkeiten implizit *bedingt*. D.h. es gibt immer eine Grundgesamtheit R, auf die alle Wahrscheinlichkeitsangaben bezogen sind:

$p_R(Q)$ = die Wahrscheinlichkeit, dass ein R ein Q ist.

$p_R(Q/S)$ = die Wahrscheinlichkeit, dass ein R ein Q ist, gegeben, dass es ein S ist.

<!-- p. 189 | pdf 197 -->

△ **Häufigkeits-Interpretation (objektiv): Wahrscheinlichkeit ist das Verhältnis zwischen Anzahlen von Ereignissen, die zu bestimmten Klassen gehören.**

$$p_R(Q) = \frac{\#(Q \cap R)}{\#R}, \quad p_R(Q/S) = \frac{\#(Q \cap S \cap R)}{\#(S \cap R)}.$$

> Die Buchstaben „$Q$“ usw. stehen hier für Klassen von Ereignissen, das Zeichen „$\#$“ bezeichnet die Anzahl der Elemente in der jeweiligen Klasse und „$Q \cap R$“ bedeutet die Schnittmenge der Klassen Q und R.

Beispiel: Die Wahrscheinlichkeit, dass ich mit einem Würfel eine Sechs würfle, ist das Verhältnis der Anzahl aller Sechserwürfe zur Anzahl aller Würfe mit diesem Würfel überhaupt.

Schwierigkeiten mit unbegrenzten / unendlichen Gesamtheiten führen dazu, dass oft die Wahrscheinlichkeit als *Grenzwert* der relativen Häufigkeit für eine ins unendliche wachsende Grundgesamtheit von Ereignissen definiert wird.

Beispiel: Dass die Wahrscheinlichkeit eines Sechserwurfes 1/6 ist, bedeutet, dass der Anteil der Sechserwürfe bei einer unendlichen Folge von Würfen gegen 1/6 konvergiert.

Dies nennt man den „*long-run frequency approach*“.

### 468. Die Häufigkeits-Interpretation: Schwierigkeiten

Probleme …

… des *long-run frequency approach*:

Es gibt keine Garantie, dass die Häufigkeit, die wir bisher beobachtet haben, der Konvergenz-Häufigkeit auf lange Sicht auch nur ähnelt.

… der Häufigkeits-Interpretation allgemein:

Es scheint keine Möglichkeit zu geben, Einzelereignissen oder gar Propositionen, die keine Ereignisse beschreiben, Wahrscheinlichkeiten zuzuordnen.

Z.B.:

die Wahrscheinlichkeit, dass Angela Merkel die nächste Bundestagswahl gewinnen wird,  
die Wahrscheinlichkeit, dass Sebastian gerne Pizza mag,  
die Wahrscheinlichkeit, dass Elektrosmog Krebs erzeugt.

### 469. Die Neigungs-Interpretation

△ **Neigungs-Interpretation (objektiv): Wahrscheinlichkeit ist eine Größe, die die Neigung eines Systems zu einem bestimmten Zustand oder Ereignis beschreibt und von den jeweils einschlägigen theoretischen Gesetzen vorhergesagt wird.**

Probleme:

Die Neigungs-Interpretation (*propensity interpretation*) ist praktisch nur sehr begrenzt anwendbar, weil wir in den meisten Fällen keine theoretischen Gesetze kennen, aus denen wir die Neigung eines Systems zu einem bestimmten Zustand ableiten können.

<!-- p. 190 | pdf 198 -->

> Z.B. Wahrscheinlichkeit in der Medizin.

Sie ist auch theoretisch auf viele Fälle prinzipiell nicht anwendbar.

> Z.B. Die Wahrscheinlichkeit, dass eine Kiste Schrauben von der Firma Anton produziert wurde, kann schlicht nicht als theoretisch bestimmte Neigung eines Systems verstanden werden.

### 470. Die subjektive Interpretation

△ **Subjektive Interpretation: Wahrscheinlichkeiten sind persönliche Glaubensgrade, messbar durch Wettbereitschaft.**

Beispiel:

Dass Peter glaubt, die Wahrscheinlichkeit, dass Merkel die nächste Bundestagswahl gewinnt, sei 0,5, bedeutet, dass er bereit ist, bis zu 10 € gegen die von Hans gesetzten 10 € darauf zu setzen, dass es der Fall ist.

### 471. Subjektive Wahrscheinlichkeit und Wettquote

Allgemeiner:

**Wettquote** = Einsatz : Ausschüttung

Die Ausschüttung ist der insgesamt an den Gewinner der Wette ausgeschüttete Nutzen.

Der Einsatz ist der zu bezahlende Nutzen, mit dem die Teilnahme an der Wette erkauft wird.

Beispiel:

Lisa hält es für 10% wahrscheinlich, das<!-- sic --> Frankreich die nächste Fußball-WM gewinnt.

Dann nimmt sie Wetten darauf mit einer Wettquote unter 1:10 gerne an.

> D.h. sie erkauft z.B. gerne die Teilnahme an einer Wette, die im Falle von Frankreichs Gewinn einen Preis im Wert von 100 € an sie ausschüttet, für *weniger* als 10€.

Wetten mit einer Wettquote über 1:10 lehnt sie ab.

> Dies beträfe dieselbe Wette, wenn sie *mehr* als 10 € kosten würde.

Gegenüber Wetten mit einer Wettquote von exakt 1:10 ist sie indifferent.

> Das wäre bei der genannten Wette der Fall, wenn sie genau 10 € kosten würde.

Die persönliche oder *subjektive Wahrscheinlichkeit* einer Person im Hinblick auf eine Proposition ist genau die *Wettquote*, bei der die Person gegenüber Wetten auf diese Proposition indifferent wird.

Die motivierende Idee hinter dieser Festlegung ist, dass mir eine *q*-prozentige Chance auf 100 € genau *q* € wert sein sollte.

### 472. Kurs und Wettquote

**Achtung**: Manchmal gibt man statt der Wettquote auch den *Kurs* einer Wette an. Darunter versteht man meist das Verhältnis

Einsatz : Profit,

wobei der Profit die Differenz zwischen Ausschüttung und Einsatz ist.

<!-- p. 191 | pdf 199 -->

Bei einer Wette, in der zwei Spieler jeweils Geld in einen Topf werfen, den einer von beiden ganz gewinnt, ist der *Profit* das, was jeweils der Gegenspieler in den Topf wirft. Die *Ausschüttung* ist der gesamte Topf.

Beispiel:

Lisa setzt 10 €, dass Frankreich die nächste Fußball-WM gewinnt; Hans setzt 90 € dagegen.

Der *Kurs* der Wette ist aus Lisas Sicht 1:9.

Die *Wettquote* ist aus Lisas Sicht 1:10.

### 473. Subjektive Wahrscheinlichkeit und Wahrscheinlichkeitstheorie

Warum gelten die Regeln der Wahrscheinlichkeitstheorie auch für subjektive Wahrscheinlichkeiten? Wenn subjektive Wahrscheinlichkeit von Person zu Person unterschiedlich sein kann, wie können dann überhaupt irgendwelche Regeln für sie gelten?

Diese Frage lässt sich mit Bezug auf ein interessantes mathematisches Ergebnis beantworten, das sogenannte **Dutch Book Theorem**:

*Gegen jeden, der inkohärente Glaubensgrade hat und in Übereinstimmung mit ihnen zu wetten bereit ist, lässt sich ein Dutch Book abschließen.*

*Inkohärente Glaubensgrade* sind dabei solche, die nicht mit den Regeln der Wahrscheinlichkeitstheorie übereinstimmen.

Ein *Dutch Book* ist eine Wette, bei der man auf jeden Fall verliert, egal was passiert.

> Das Dutch Book Theorem setzt voraus, dass ich bei einem Glaubensgrad von q im Hinblick auf eine Proposition X bereit bin, bei einer Quote von bis zu q : 1 auf X und bei einer Quote von bis zu (1 – q) : 1 gegen X zu wetten. Ein Dutch Book besteht normalerweise aus einer Kombination mehrerer Wetten.

1. Beispiel:

Otto hält es für **5 %** wahrscheinlich, dass **Togo** die nächste Fußball-WM gewinnt, und für **99 %** wahrscheinlich, dass **Togo** die nächste Fußball-WM **nicht** gewinnt.

Dann müsste er folgende Kombination von Wetten eingehen:

Wette I:

5 € darauf, dass Togo die nächste Fußball-WM gewinnt (Ausschüttung: 100 €)

Wette II:

99 € darauf, dass Togo die nächste Fußball-WM nicht gewinnt (Ausschüttung: 100 €)

| | Ausschüttung Wette I | Ausschüttung Wette II | Gesamtausschüttung der Kombination |
|---|---|---|---|
| Togo gewinnt die nächste WM | 100 € | 0 € | 100 € |
| Togo gewinnt die nächste WM nicht | 0 € | 100 € | 100 € |

Da Ottos Einsatz insgesamt 104 € beträgt und er insgesamt auf jeden Fall nur 100 € ausgeschüttet bekommt, ist dies ein Dutch Book.

<!-- p. 192 | pdf 200 -->

2. Beispiel:

Bettie hält es

für **20 %** wahrscheinlich, dass **Frankreich** die nächste Fußball-WM gewinnt,

für **20 %** wahrscheinlich, dass **Italien** die nächste Fußball-WM gewinnt, und

für **50 %** wahrscheinlich, dass **Frankreich oder Italien** die nächste Fußball-WM gewinnt.

Dann müsste sie folgende Kombination von Wetten eingehen:

Wette I:

80 € *dagegen*, dass F die nächste Fußball-WM gewinnt (Ausschüttung: 100 €)

Wette II:

80 € *dagegen*, dass I die nächste Fußball-WM gewinnt (Ausschüttung: 100 €)

Wette III:

50 € darauf, dass I oder F die nächste Fußball-WM gewinnt (Ausschüttung 100 €).

| | Ausschüttung Wette I | Ausschüttung Wette II | Ausschüttung Wette III | Gesamtausschüttung der Kombination |
|---|---|---|---|---|
| F gewinnt die WM | 0 € | 100 € | 100 € | 200 € |
| I gewinnt die WM | 100 € | 0 € | 100 € | 200 € |
| Weder I noch F | 100 € | 100 € | 0 € | 200 € |

Da Betties Einsatz insgesamt 210 € beträgt und sie insgesamt auf jeden Fall nur 200 € ausgeschüttet bekommt, ist dies ein Dutch Book.

### 474. Subjektive Wahrscheinlichkeit und Wahrscheinlichkeitstheorie

Insgesamt lässt sich mathematisch zeigen, dass eine Person genau dann vor Dutch Books gefeit ist, wenn ihre Wettbereitschaft, d.h. ihre subjektiven Wahrscheinlichkeiten, mit den Regeln der Wahrscheinlichkeitstheorie übereinstimmen.

In diesem Sinn können wir diese Regeln also als Regeln der Rationalität ansehen. Wir gehen schließlich ständig Risiken ein und möchten nicht, dass uns aus einer Kombination von Risiken ein sicherer Verlust entsteht.

## 19. Induktives Schließen, Wahrscheinlichkeit und das Induktionsproblem

### 475. Subjektive Wahrscheinlichkeit und induktive Argumente

Auf der Grundlage der subjektiven Wahrscheinlichkeit lässt sich nun eine Idee für das Verständnis induktiver Argumente formulieren:

<!-- p. 193 | pdf 201 -->

△ **Die *Stärke* eines induktiven Arguments ist die bedingte Wahrscheinlichkeit, dass die Schlussfolgerung wahr ist, gegeben die in den Prämissen angeführten Belege.**

Ein induktives Argument ist desto besser, je stärker es ist.

Das bedeutet, dass die Prämissen eines guten induktiven Arguments für die Schlussfolgerung S zweierlei Arten von Informationen beinhalten sollten:

- *Aussagen über das Vorliegen von Belegen* B, die für S probabilistisch relevant sind, d.h. $p(S/B) \neq p(S)$
- und *Informationen über Wahrscheinlichkeiten*, die es erlauben, auf die Größe von $p(S/B)$ zu schließen.

$p(S/B)$ ist dann die Stärke des Arguments.

### 476. Subjektive Wahrscheinlichkeit und induktive Argumente: Beispiele

$$\begin{array}{l}
\text{95 \% aller Studenten mögen Pizza.} \\
\text{Sebastian ist Student.} \\
\hline
\text{Also wird Sebastian Pizza mögen.}
\end{array}$$

Hier gilt:

- Die zweite Prämisse enthält eine Aussage über einen Beleg, der für die Schlussfolgerung probabilistisch relevant ist.
- Die erste Prämisse enthält eine Informationen, auf deren Grundlage sich veranschlagen lässt, dass $p(S/B) = 0{,}95$.

### 477. Subjektive Wahrscheinlichkeit und induktive Argumente: Beispiele

$$\begin{array}{l}
\text{Fast alle katholischen Priester sind kinderlos.} \\
\text{Heinz ist katholischer Priester.} \\
\hline
\text{Heinz ist kinderlos.}
\end{array}$$

Hier lässt die erste Prämisse zwar keinen Schluss auf die genaue Größe von $p(S/B)$ zu, aber in der ersten Prämisse sind Informationen enthalten, die implizieren, dass $p(S/B)$ sehr groß (nahe 1) ist.

Da wir häufig nicht ausdrücklich mit Zahlen argumentieren, spielen bei induktiven Argumenten solche Abschätzungen der Wahrscheinlichkeit $p(S/B)$ eine große Rolle.

### 478. Subjektive Wahrscheinlichkeit und induktive Argumente: Beispiele

$$\begin{array}{l}
\text{Etwa 90\% der Kaffeebohnen in diesem Sack haben die Güteklasse A.} \\
\hline
\text{Ullas aus diesem Sack entnommene Dose Kaffeebohnen enthält zu etwa 90 \% Bohnen der Güteklasse A.}
\end{array}$$

Dieses Argument enthält tatsächlich gute Informationen über die Größe von $p(S/B)$. (Allerdings reicht

<!-- p. 194 | pdf 202 -->

unser mathematischer Hintergrund nicht aus, um $p(S/B)$ auszurechnen.) Wie stark das Argument wirklich ist, hängt sehr davon ab, wie genau der Ausdruck „etwa 90 %“ in der Schlussfolgerung zu verstehen ist.

Wenn Ullas Dose $n = 1000$ Bohnen enthält und für jede dieser Bohnen die Wahrscheinlichkeit, von Güteklasse A zu sein, $p = 0{,}9$ beträgt, dann ist der wahrscheinlichste Anteil von Klasse-A-Bohnen $pn = 900$. Aber dass diese Zahl *genau* erreicht wird, ist sehr unwahrscheinlich.

In der Statistik löst man diese Aufgabe am elegantesten mit Hilfe der Standardabweichung

$$\sigma = \sqrt{p(1-p)n}.$$

Es gilt grundsätzlich für diese Art von Zufallsverteilungen: Eine Verteilung innerhalb des Intervalls

- $pn \pm \sigma$ ist zu etwa 0,68 wahrscheinlich,
- $pn \pm 2\sigma$ ist zu etwa 0,95 wahrscheinlich,
- $pn \pm 3\sigma$ ist zu etwa 0,99 wahrscheinlich.

Für die konkrete Aufgabe bedeutet das:

$$\sigma = \sqrt{0{,}9 \cdot 0{,}1 \cdot 1000} \approx 9{,}5.$$

D.h. es ist

- zu mehr als 2/3 wahrscheinlich, dass Ullas Dose zwischen 890 und 910 A-Klasse-Bohnen enthält,
- zu etwa 0,95 wahrscheinlich, dass sie zwischen 881 und 919 A-Klasse-Bohnen enthält
- und zu etwa 0,99 wahrscheinlich, dass sie zwischen 871 und 929 A-Klasse-Bohnen enthält.

> [Abbildung: Glockenkurve (Normalverteilung) über einer x-Achse mit den Beschriftungen 871, 881, 890, 900, 910, 919, 929 und einem kleinen Unterbrechungszeichen am linken Achsenanfang. Die Fläche unter der Kurve ist in symmetrische Bänder um den Mittelwert 900 eingefärbt: dunkelblau zwischen 890 und 910 (Bereich ± σ), bräunlich zwischen 881–890 und 910–919 (Ergänzung auf ± 2σ), grün zwischen 871–881 und 919–929 (Ergänzung auf ± 3σ); außerhalb von 871 und 929 bleibt die Fläche unter der Kurve weiß/ungefärbt.]

### 479. Subjektive Wahrscheinlichkeit und induktive Argumente: Beispiele

$$\begin{array}{l}
\text{Die im Lager der Firma Meyer befindliche Kiste stammt entweder von Anton oder von Bruns. Meyer bezieht} \\
\text{die Schauben zur Hälfte von Anton und zur Hälfte von Bruns. Schrauben von Anton sind zu 60\% schadhaft,} \\
\text{Schrauben von Bruns nur zu 10 \%. Zwei zufällig aus der Kiste entnommene Schrauben stellten sich als} \\
\text{schadhaft heraus.} \\
\hline
\text{Also stammt die Kiste von Anton.}
\end{array}$$
<!-- sic: „Schauben“ in Zeile 2 wie gedruckt -->

Auch dieses Argument enthält nicht ausdrücklich eine Information über die Größe von $p(S/B)$. Doch wie wir gesehen haben, lassen die Prämissen Schlüsse auf andere Wahrscheinlichkeiten zu, aus denen sich $p(S/B)$ errechnen lässt:

$$p(S/B) = p(A/E_1 \wedge E_2)$$

$$= \frac{p(E_1/A) \cdot p(E_2/E_1 \wedge A) \cdot p(A)}{p(E_1/A) \cdot p(E_2/E_1 \wedge A) \cdot p(A) + p(E_1/\neg A) \cdot p(E_2/E_1 \wedge \neg A) \cdot p(\neg A)}
$$

<!-- p. 195 | pdf 203 -->

$$= \frac{0,6 \cdot 0,6 \cdot 0,5}{0,6 \cdot 0,6 \cdot 0,5 + 0,1 \cdot 0,1 \cdot 0,5} \approx 0,973.$$

Beachten Sie:

Damit $p(E_1/A)$ wirklich plausiblerweise 0,6 ist, ist es wichtig, dass die erste Schraube zufällig aus der Kiste genommen wurde.

Damit $p(E_2/E_1 \wedge A)$ auch 0,6 ist, ist es wichtig, dass die Wahrscheinlichkeit, dass die zweite Schraube schadhaft ist, von der Schadhaftigkeit der ersten *unabhängig* ist. Dafür ist es möglicherweise z.B. wichtig, dass die zweite Schraube an einer anderen Stelle aus der Kiste entnommen wird.

### 480. Induktive Verallgemeinerungen und subjektive Wahrscheinlichkeit

$$\begin{array}{l} \text{Der Kaffeeinspektor hat aus diesem Sack an 40 verschiedenen zufällig ausgewählten Stellen jeweils eine Bohne entnommen und auf ihre Güteklasse hin untersucht.} \\ \text{Alle untersuchten Bohnen hatten die Güteklasse A.} \\ \hline \text{Alle Kaffeebohnen in diesem Sack haben die Güteklasse A.} \end{array}$$

Dieses Beispiel hat unverkennbare Ähnlichkeiten mit dem Schrauben-Beispiel. Vielleicht lassen sich induktive Verallgemeinerungen auch mit Hilfe der Bayesschen Regel erklären?

### 481. Induktive Verallgemeinerungen und subjektive Wahrscheinlichkeit

$S =$ Alle Kaffeebohnen im Sack haben die Güteklasse A.

$B =$ Von 40 untersuchten Bohnen hatten alle Güteklasse A.

Gesucht: $p(S/B)$

$$p(S/B) = \frac{p(B/S)p(S)}{p(B/S)p(S) + p(B/\neg S)p(\neg S)}.$$

Hier zeigt sich eine Schwierigkeit:

Um $p(S/B)$ errechnen (oder abschätzen) zu können, brauchen wir eine plausible Ausgangswahrscheinlichkeit für S (ohne Berücksichtigung der im Argument angegebenen Belege für S), d.h. einen plausiblen Wert für $p(S)$. Dies nennt man die *Priorwahrscheinlichkeit*.

> Im Beispiel gibt es noch eine weitere Wahrscheinlichkeit, die uns fehlt: Wir bräuchten plausible Annahmen darüber, was der Fall sein könnte, wenn *nicht* alle Bohnen im Sack Güteklasse A hätten. Sonst können wir kaum zu einer sinnvollen Abschätzung für $p(B/\neg S)$ kommen.

### 482. Grenzen der Analyse durch subjektive Wahrscheinlichkeiten

Die Analyse von induktiven Argumenten mit Hilfe subjektiver Wahrscheinlichkeiten erlaubt uns nur, sie als rationale *Anpassung* unserer Glaubensgrade an relevante Belege zu verstehen.

Sie erlaubt uns nicht, sozusagen aus dem Stand die „richtigen“ Glaubensgrade auszubilden, wenn wir vorher noch gar keine Glaubensgrade hatten.

Diese Einschränkung kann die Einschätzung der Stärke induktiver Argumente sehr erschweren, insbesondere bei induktiven Verallgemeinerungen (enumerativen Induktionen).

<!-- p. 196 | pdf 204 -->

### 483. Das Induktionsproblem

Die Frage, ob induktive Verallgemeinerungen überhaupt wirklich gute Argumente sein können, spielt in der Philosophie seit langem eine große Rolle.

Ausgangspunkt dieser Diskussion ist der schottische Philosoph *David Hume* und das von ihm formulierte „Induktionsproblem“.

> David Hume (1711-1776):
>
> *Treatise of Human Nature* 1739/40,
>
> *An Enquiry concerning Human Understanding* 1748.

Hume unterscheidet zwei Arten von Gegenständen des Denkens und Forschens:

1. Vorstellungsbeziehungen (*relations of ideas*)
2. Tatsachen (*matters of fact*).

> Unter „Vorstellungsbeziehungen“ fallen für Hume sowohl begriffliche Sachverhalte, (z.B. dass Junggesellen unverheiratet sind) als auch mathematische (z.B. dass die Winkelsumme im Dreieck 180° ist). Eine Tatsache dagegen ist etwas, das nicht durch reine Denktätigkeit zu entdecken ist.

Hume argumentiert: All unser Tatsachenwissen beruht auf induktiven Verallgemeinerungen.

Hume zufolge beruht unser Tatsachenwissen immer auf Urteilen über Ursache-Wirkung-Beziehungen.

Z.B.: Sie hören eine Stimme und schließen, dass jemand im Raum sein muss.

Sie sehen, dass die Sonne herauskommt, und schließen, dass es draußen jetzt warm ist.

Sie lesen den Brief eines Freundes, in dem er berichtet, er habe eine neue Arbeitsstelle, und schließen, dass er jetzt eine neue Arbeitsstelle hat.

Ein Urteil über eine Ursache-Wirkung-Beziehung ist nach Hume im Kern ein Urteil über eine *konstante Verbindung* zwischen Ursache und Wirkung – d.h. ein Urteil der Form, dass eine Ursache eines bestimmten Typs *immer* von einer Wirkung eines bestimmten Typs begleitet wird.

> (Hinzu muss für Hume noch kommen, dass die Ursache der Wirkung zeitlich vorausgeht und dass es eine raumzeitliche Kontinuität zwischen ihnen gibt.)

Diese Urteile über eine konstante Verbindung wiederum beruhen nach Hume immer auf induktiven Verallgemeinerungen:

$$\begin{array}{l} \text{In meiner Erfahrung ist das Herauskommen der Sonne immer von Wärme begleitet gewesen.} \\ \hline \text{Das Herauskommen der Sonne ist immer von Wärme begleitet.} \end{array}$$

Induktive Verallgemeinerungen spielen deshalb eine zentrale Rolle für alles Tatsachenwissen.

Hume fragt: Wie sind induktive Verallgemeinerungen eigentlich gerechtfertigt?

Hume: Induktiven Verallgemeinerungen liegt immer die Annahme zugrunde, dass die Zukunft der Vergangenheit ähnelt.

<!-- p. 197 | pdf 205 -->

Allgemeiner: Die Voraussetzung der Einheitlichkeit der Natur

(EN) Im Allgemeinen gilt: Wenn eine Regularität in meiner Erfahrung gültig ist, dann gilt sie in der Natur ganz allgemein.

Problem: Wie ist (EN) zu begründen?

- (EN) kann nicht durch reine Denktätigkeit begründet werden, denn es ist denkbar, dass der Lauf der Natur sich ändern und (EN) falsch sein könnte.
- Also ist (EN) ein Tatsachenurteil, und müsste, wenn überhaupt, dann *induktiv* begründet werden.
- Bei einer induktiven Begründung (etwa auf Grundlage der Erfahrung, dass induktive Verallgemeinerungen in der Vergangenheit zu richtigen Schlussfolgerungen geführt haben), wird aber selbst wieder (EN) implizit vorausgesetzt – d.h. so eine Begründung wäre *zirkulär* (beginge eine petitio principii).

> Gäbe es irgendeine Vermutung, dass der Lauf der Natur sich ändern und die Vergangenheit keine Regel für die Zukunft geben könnte, dann würde alle Erfahrung nutzlos und könnte keine Herleitung oder Schlussfolgerung veranlassen. Es ist daher unmöglich, dass irgendwelche Erfahrungsbeweise diese Ähnlichkeit der Vergangenheit mit der Zukunft erweisen können, da alle diese Argumente auf der Annahme dieser Ähnlichkeit gründen.
>
> David Hume: *An Enquiry concerning Human Understanding* (1748), Sect. VII, Part II.

→ Zusammengefasst kann man das Induktionsproblem formulieren:

Es gibt keine gute Begründung, warum es vernünftig sein sollte, sich auf induktive Verallgemeinerungen zu verlassen.

### 484. Das Induktionsproblem: Lösungen?

Einen klaren Konsens darüber, wie man dem Induktionsproblem begegnen kann, gibt es in der Philosophie nicht – wohl aber darüber, dass es sich um ein wichtiges Problem handelt.

Im Folgenden sollen nur kurz zwei der vielen vorgeschlagenen Lösungsideen skizziert werden.

### 485. Das Induktionsproblem: Lösungen?

Eine Möglichkeit ist, eine induktive Begründung der Verlässlichkeit induktiver Schlüsse etwa wie folgt gegen Humes Vorwurf der Zirkularität zu verteidigen:

$$\begin{array}{l} \text{Induktive Verallgemeinerungen auf der Grundlage einer großen Vielfalt von Beobachtungen haben in unserer Erfahrung meist zu wahren Schlussfolgerungen geführt.} \\ \hline \text{Induktive Verallgemeinerungen auf der Grundlage einer großen Vielfalt von Beobachtungen führen meist zu wahren Schlussfolgerungen.} \end{array}$$

Ein Schluss wie dieser ist nur in dem Sinne zirkulär, dass die Gültigkeit der Schlussregel, die er selbst anwendet, in seiner Schlussfolgerung gestützt werden soll. Diese Art von Zirkularität kann man *Regelzirkularität* nennen.

<!-- p. 198 | pdf 206 -->

*Regelzirkularität* ist etwas anderes als eine petitio principii, bei der die Schlussfolgerung als Prämisse in das Argument eingeht (*Prämissenzirkularität*).

Man kann nun argumentieren: Während *Prämissenzirkularität* ein Argumentationsfehler ist, ist *Regelzirkularität* dies nicht. Deshalb ist an der induktiven Begründung induktiver Schlussweisen nichts auszusetzen.

> Vgl. Richard B. Braithwaite, *Scientific Explanation*, Cambrige UP 1953, Kap. 8, David Papineau, *Philosophical Naturalism*, Oxford: Blackwell 1993, Kap. 5.
>
> Zusätzliche Stützung erhält diese Verteidigung, wenn man anerkennt, dass auch deduktive Schlussweisen nur gerechtfertigt werden können, wenn man in den rechtfertigenden Argumenten bereits deduktive Schlüsse anwendet. Dies hat schon 1895 Lewis Carroll gezeigt: „What the tortoise said to Achilles“, *Mind* 4, 278-80.

### 486. Das Induktionsproblem: Lösungen?

Eine radikalere Lösung hat 1935 der österreichische Wissenschaftstheoretiker Karl Popper vorgeschlagen.

Laut Popper sind induktive Schlüsse tatsächlich nicht zu rechtfertigen. Wir brauchen sie aber auch gar nicht.

Tatsächlich urteilen wir (am besten), indem wir

- Vermutungen bilden,
- aus ihnen (deduktiv) Schlussfolgerungen ableiten
- und sie so lange und nur so lange aufrechterhalten, wie die Schlussfolgerungen in keinem Widerspruch mit der Erfahrung stehen.
- Wenn ein solcher Widerspruch auftritt, lassen wir die Vermutung fallen und formulieren eine neue.

> Beachten Sie, dass demnach zu keinem Zeitpunkt eine Vermutung als durch die Erfahrung gestützt oder bestätigt anzusehen ist. Das wäre eine induktive Stützung von Thesen, die Popper strikt ablehnt. Er unterstreicht die Fehlbarkeit von Hypothesen, vor der wir nie gefeit sind. Vgl. Karl Popper: *Die Logik der Forschung*, 10. Aufl., Tübingen: Mohr 1994, Kap. 1.

### 487. Das Induktionsproblem: Lösungen?

Eine (auch nur mehr oder weniger) unumstrittene Lösung des Induktionsproblems gibt es nicht. Wir werden deshalb in dieser Vorlesung auch keine bestimmte Lösung voraussetzen.

Dennoch könnte es scheinen, dass unsere Behandlung von induktiven Argumenten mit Hilfe subjektiver Wahrscheinlichkeiten einen Weg weist. Dazu nochmals ein Beispiel.

### 488. Das Induktionsproblem und subjektive Wahrscheinlichkeit

$$\begin{array}{l} \text{Hilde hat einen Würfel gefunden und zehnmal mit ihm gewürfelt. Das Ergebnis war immer eine Sechs.} \\ \hline \text{Der Würfel ist gezinkt und Würfe mit ihm ergeben \textit{immer} eine Sechs.} \end{array}$$

Wie stark ist dieses Argument, d.h. wie hoch ist $p(S/B)$?

$$B \equiv W_1 \wedge W_2 \wedge \ldots \wedge W_{10}.$$

<!-- p. 199 | pdf 207 -->

$$p(S/B) = \frac{p(B/S)p(S)}{p(B/S)p(S) + p(B/\neg S)p(\neg S)} = \frac{1}{1 + \dfrac{p(B/\neg S)p(\neg S)}{p(B/S)p(S)}}.$$

Wenn die Schlussfolgerung wahr ist, dann mussten alle zehn Würfe eine Sechs ergeben, d.h. $p(B/S) = 1$.

Angenommen, wir erwägen als einzige Alternative, das der Würfel fair ist, dann wäre $p(W_1/\neg S) = 1/6$. Da bei einem fairen Würfel alle Würfe voneinander unabhängig sind, gilt $p(B/S) = (1/6)^{10} = 1/60466176$<!-- sic -->.

$$p(S/B) = \frac{1}{1 + \dfrac{p(\neg S)}{60466176 \cdot p(S)}}.$$

D.h.: Selbst, wenn wir die Priorwahrscheinlichkeit dafür, dass der Würfel fair ist, eine Million mal höher einschätzen als die Priorwahrscheinlichkeit dafür, dass er gezinkt ist, gilt noch

$$p(S/B) \approx \frac{1}{1 + \frac{1}{60}} \approx 0,984.$$

Die Theorie subjektiver Wahrscheinlichkeiten scheint uns also durchaus etwas über diese induktive Verallgemeinerung zu sagen.

Dieselbe Überlegung zeigt auch, dass das Argument je stärker wird, je mehr Sechserwürfe Hilde beobachtet hat.

Sei $B_n \equiv W_1 \wedge \ldots \wedge W_n$.

Bei einer Priorwahrscheinlichkeit von $p(S) = 10^{-6}$ ergibt sich folgendes Bild:

> [Abbildung: Balkendiagramm der Funktion $p(S/B_n)$ (y-Achse, 0 bis 1, mit Gitterlinien bei 0,2/0,4/0,6/0,8/1) über $n$ (x-Achse, beschriftet 1 bis 15). Die Balken für $n = 1, 2, 3$ sind nicht sichtbar (≈ 0); ab $n = 4$ erscheint ein winziger Balken; die Balken wachsen weiter über $n = 5$ (sehr klein), $n = 6$ (klein), $n = 7$ (≈ 0,22), $n = 8$ (≈ 0,63), $n = 9$ (≈ 0,91), $n = 10$ (≈ 0,98) bis $n = 11$–$15$ (praktisch bei 1, optisch nicht mehr unterscheidbar). Zwei gestrichelte senkrechte Hilfslinien führen von den Balken bei $n = 4$ und $n = 15$ hinunter zu den Beschriftungen $p(S/B_4) \approx 0,00129$ und $p(S/B_{15}) \approx 0,99999787$.]

<!-- p. 200 | pdf 208 -->

### 489. Das Induktionsproblem und subjektive Wahrscheinlichkeit

Doch bedenken Sie: Die Theorie subjektiver Wahrscheinlichkeiten sagt uns nur *unter gewissen Voraussetzungen*, dass wir $p(S/B_{10})$ sehr hoch (mit 0.984) veranschlagen müssen.

Insbesondere haben wir die folgenden zwei Voraussetzungen gemacht:

- Die Priorwahrscheinlichkeit ist $p(S) = 10^{-6}$.
- Die einzige Alternative zum gezinkten Würfel ist ein fairer Würfel.

Nehmen Sie z.B. an, es käme zusätzlich noch in Frage, dass der Würfel „halb gezinkt“ (H) wäre, mit $p(W_1/H) = 9/10$, und dass dies im Vorhinein ebenso unwahrscheinlich wäre wie ein komplett gezinkter Würfel (S) mit $p(W_1/S) = 1$.

$$p(H) = p(S) = 10^{-6}.$$

Außer H und S käme nur ein fairer Würfel (F) mit $p(W_1/F) = 1/6$ in Frage, $p(F) = 1 - 2 \cdot 10^{-6}$.

Dann wäre $p(S/B)$ nur

$$= \frac{1}{1 + \dfrac{p(B/H)p(H)}{p(B/S)p(S)} + \dfrac{p(B/F)p(F)}{p(B/S)p(S)}} = \frac{1}{1 + \dfrac{5^{10}}{6^{10}} + \dfrac{1 - 2 \cdot 10^{-6}}{6^{10} \cdot 10^{-6}}} \approx 0,849.$$

Das Beispiel zeigt also auch, dass unsere Einschätzung der Stärke einer induktiven Verallgemeinerung sehr von den Glaubensgradverteilungen über die verschiedenen möglichen Hypothesen abhängt, die wir hatten, bevor wir die neuen Belege berücksichtigt haben.

### 490. Das Induktionsproblem und subjektive Wahrscheinlichkeit

Subjektive Wahrscheinlichkeiten helfen uns nicht, allein angesichts einer Aufzählung von Belegen für eine bestimmte induktive Schlussfolgerung aus diesen Belegen anzugeben, in welchem Maß die Schlussfolgerung durch die Belege gestützt wird.

Allerdings zeigen uns subjektive Wahrscheinlichkeiten einen rationalen Weg, unsere bereits vorhandenen Glaubensgrade an neue Belege anzupassen.

In diesem Sinn bieten subjektive Wahrscheinlichkeiten zwar keine Lösung, aber gewissermaßen eine Umgehung des Induktionsproblems.

> Die Umgehung des Induktionsproblems besteht darin, induktives Urteilen als ein dynamisches Unterfangen auszuweisen, das sich immer nur in Bezug auf ein bereits bestehendes Überzeugungssystem verstehen lässt. Damit sind induktive Verallgemeinerungen nicht in jedem Fall gerechtfertigt, sondern nur von Fall zu Fall vor dem Hintergrund einer jeweiligen vorherigen Verteilung von Glaubensgraden als eine angemessene Anpassung an neue Belege ausgezeichnet.

<!-- p. 201 | pdf 209 -->

## 20. Fehlschlüsse beim induktiven Argumentieren

### 491. Voreilige Generalisierung

$$\begin{array}{l} \text{Mein Nachbar ist Isländer und ist kreativ.} \\ \text{Björk ist Isländerin und ist kreativ.} \\ \hline \text{Alle Isländer/-innen sind kreativ.} \end{array}$$

Eine induktive Verallgemeinerung vorzunehmen, noch ehe man genügend Belege hat, die diese Verallgemeinerung rechtfertigen, kann man als Fehlschluss der *voreiligen Generalisierung* bezeichnen.

Es wäre schön, wenn wir eine definitive Zahl von Belegen angeben könnten, von der an eine Generalisierung nicht mehr voreilig ist. Aber diese Zahl hängt sehr von den Umständen ab. Im Rahmen unserer Analyse zeigt sich dies in einer Abhängigkeit der Stärke des obigen Arguments, $p(S/B_1 \wedge B_2)$, von den Priorwahrscheinlichkeiten.

$$p(S/B_1 \wedge B_2) = \frac{p(B_1 \wedge B_2/S)p(S)}{p(B_1 \wedge B_2)} = \frac{p(S)}{p(B_1 \wedge B_2)},$$

denn $p(B_1 \wedge B_2/S) = 1$.

Die Stärke hängt also ganz davon ab, wie das Verhältnis zwischen

$p(S) =$ die Priorwahrscheinlichkeit dafür, dass alle Isländer kreativ sind (ohne Berücksichtigung der Belege)

und

$p(B_1 \wedge B_2) =$ die Priorwahrscheinlichkeit dafür, dass zwei zufällig ausgewählte Isländer kreativ sind (ohne Berücksichtigung der Hypothese, dass sie es alle sind).

veranschlagen.

Das heißt: Dieses Argument kann nur derjenige für sehr stark halten, der zuvor schon S für beinahe so wahrscheinlich gehalten hat wie $B_1 \wedge B_2$.

> Dabei beachten Sie: $B_1 \wedge B_2$, unabhängig von S betrachtet, ist einfach die Wahrscheinlichkeit, dass zwei zufällig ausgewählte Menschen kreativ sind – dass sie Isländer sind, spielt ja, wenn man die Frage unabhängig von S betrachtet, keine Rolle. Das Argument kann also nur jemand für stark halten, der glaubt, es sei fast so wahrscheinlich, dass alle 300 000 Isländer kreativ sind, wie dass irgend zwei zufällig ausgewählte Menschen kreativ sind.

In vielen Fällen erkennen wir voreilige Generalisierungen schon ohne eine solche Abschätzung ihrer Stärke mit Hilfe des gesunden Menschenverstands.

Voreilige Generalisierungen werden oft nicht in Form einer ausdrücklichen Verallgemeinerung ausformuliert, sondern implizit in einem unausgesprochenen Zwischenschritt vorgenommen.

Ich hatte einmal einen Rover. Er war häufiger in der Werkstatt als auf der Straße. Ich kann Dir also nur davon abraten, einen zu kaufen.

> Hier ist der unausgesprochene Zwischenschritt in etwa der folgende:
>
> $$\begin{array}{l} \text{Mein Rover war reparaturanfällig.} \\ \hline \text{Die meisten Rovers sind reparaturanfällig.} \end{array}$$

<!-- p. 202 | pdf 210 -->

### 492. Unausgewogene Statistik

$$\begin{array}{l} \text{Wir haben 1000 Menschen in der Bielefelder Fußgängerzone angesprochen und gefragt, ob sie gerne einkaufen gehen. 723 von ihnen bejahten.} \\ \hline \text{Die meisten Bielefelder gehen gerne Einkaufen.} \end{array}$$

Bei induktiven Verallgemeinerungen ist es wichtig, dass die Belege repräsentativ für die Gesamtheit sind, über die in der Schlussfolgerung eine Aussage gemacht wird. Insbesondere sollten die Belege nicht alle oder überwiegend aus einer Teilklasse stammen, innerhalb derer es sich mit der Schlussfolgerung anders verhält als in der Gesamtheit insgesamt. Andernfalls ist die Verallgemeinerung nicht gerechtfertigt und man kann von einer *unausgewogenen Statistik* sprechen.

> Dieses Problem äußert sich z.B. beim Design vieler Umfragen. Als 1936 eine Zeitung eine Umfrage zur Präsidentenwahl machte, erhielt sie ein völlig überhöhtes Ergebnis zu Gunsten des konservativen Kandidaten. Sie hatte die Adressen der Befragten aus Telefonbüchern und Kfz-Zulassungsverzeichnissen ermittelt – zu einer Zeit, als nur Begüterte Telefone und Autos besaßen.
> (Vgl. Wesley Salmon: *Logik*, Stuttgart: Reclam 1983, 174 f.)

### 493. Cicero über unausgewogene Statistik

Doch als einmal jener Diagoras, der Atheist genannt wird, nach Samothrake kam und ihm ein Freund sagte: „Du, der du meinst, dass die Götter die menschlichen Angelegenheiten vernachlässigen, siehst du nicht an so vielen Votivtafeln, wie viele Menschen dank einem Gelübde einem Sturme entronnen sind und heil in den Hafen gelangen konnten?“ – „Gewiss“, erwiderte jener, „es gibt eben keine Tafeln von denjenigen, die Schiffbruch erlitten haben und im Meere ertrunken sind.“

Marcus Tullius Cicero: *De natura deorum*, III, 89

### 494. Unausgewogene Statistik: Beispiel

Schau dir Joschka Fischer an, Günter Jauch, Friedrich Küppersbusch oder Wim Wenders. Wenn ich sehe, wie viele Menschen es ohne Studienabschluss zu etwas gebracht haben, dann fühle ich mich in meinem Entschluss, abzubrechen, bestätigt.

Oft treten unausgewogene Statistik und voreilige Generalisierung beide gleichzeitig auf.

> Im obigen Fall darf man davon ausgehen, dass ein unausgesprochener Zwischenschritt der folgenden Art zum Argument gehört:
>
> $$\begin{array}{l} \text{Joschka Fischer, Günter Jauch, Friedrich Küppersbusch und Wim Wenders haben es ohne Studienabschluss zu etwas gebracht.} \\ \hline \text{Im Allgemeinen kann man es auch ohne Studienabschluss zu etwas bringen.} \end{array}$$
>
> Der Schluss ist erstens voreilig, weil so wenige Fälle die Schlussfolgerung nicht stützen. Zweitens ist die Basis der Belege unausgewogen, weil es natürlich keine „Prominenten“ gibt, die es ohne Studienabschluss zu *nichts* gebracht haben.

<!-- p. 203 | pdf 211 -->

### 495. Der Basisraten-Fehlschluss

$$\begin{array}{l} \text{In dieser Stadt fahren 100 Taxis, 85 blaue und 15 grüne. Ein Zeuge hat einen Unfall beobachtet, in den ein Taxi verwickelt war. Er sagt, das Taxi sei grün gewesen. Tests ergaben, dass dieser Zeuge unter den gegebenen Sichtverhältnissen jede der beiden Farben in 80\% der Fälle richtig identifizierte, und in nur 20\% der Fälle mit der jeweils anderen Farbe verwechselte.} \\ \hline \text{Das Taxi war ein grünes Taxi.} \end{array}$$

Wie stark ist dieses Argument?

Die meisten Menschen schätzen die Stärke dieses Arguments als 0,8 ein. Schließlich haben die Tests ergeben, dass der Zeuge zu 80% zuverlässig ist.

> Das wurde in den frühen 1970er Jahren von den Psychologen David Kahnemann und Amos Tversky nachgewiesen.

$T \equiv$ Das Taxi war grün.

$Z \equiv$ Der Zeuge bezeugt, das Taxi sei grün gewesen.

$$p(T/Z) = \frac{p(Z/T)p(T)}{p(Z/T)p(T) + p(Z/\neg T)p(\neg T)}$$

$p(Z/T) = 0,8$ und $p(Z/\neg T) = 0,2$ — das ergibt sich aus den Tests.

$p(T) = 0,15$ und $p(\neg T) = 0,85$ — das ergibt sich aus den Grundhäufigkeiten der beiden Taxisorten.

$$p(T/Z) = \frac{0,8 \cdot 0,15}{0,8 \cdot 0,15 + 0,2 \cdot 0,85} \approx 0,414.$$

Das Argument ist also in Wirklichkeit sehr schwach!

### 496. Der Basisraten-Fehlschluss: Erläuterungen

Wer das Argument für stark hält, ignoriert, dass es zwei Möglichkeiten gibt, wie das Zeugnis zustande gekommen sein kann: Das Taxi kann grün gewesen sein und der Zeuge dies richtig erkannt haben, oder es kann blau gewesen sein und der Zeuge sich geirrt haben. Wegen der viel größeren Grundhäufigkeit der blauen Taxis (Basisrate) ist der zweite Fall insgesamt wahrscheinlicher als der erste!

> [Abbildung: Wahrscheinlichkeitsbaum. Von einem Startpunkt gehen zwei dicke Pfeile aus: ein grüner Pfeil (beschriftet „0,15“) zum Knoten „T: Taxi grün“, ein blauer Pfeil (beschriftet „0,85“) zum Knoten „¬T: Taxi blau“. Vom Knoten „T: Taxi grün“ gehen zwei Pfeile aus: ein dünner blauer Pfeil (beschriftet „0,2“) zu „Zeuge irrt sich“ (Beschriftung grau/blass gedruckt), und ein dicker grüner Pfeil (beschriftet „0,8“) zu „Zeuge erkennt richtig“ (Beschriftung schwarz hervorgehoben), mit der Zusatzbeschriftung „} $T \wedge Z$“. Vom Knoten „¬T: Taxi blau“ gehen zwei Pfeile aus: ein dünner grüner Pfeil (beschriftet „0,2“) zu „Zeuge irrt sich“ (schwarz hervorgehoben, Zusatzbeschriftung „} $\neg T \wedge Z$“), und ein dicker blauer Pfeil (beschriftet „0,8“) zu „Zeuge erkennt richtig“ (Beschriftung grau/blass gedruckt). Die beiden schwarz hervorgehobenen Zweige („Zeuge erkennt richtig“ unter $T \wedge Z$ und „Zeuge irrt sich“ unter $\neg T \wedge Z$) werden rechts durch eine geschweifte Klammer zusammengefasst und mit „Z“ beschriftet.]

<!-- p. 204 | pdf 212 -->

Stellen Sie sich vor, das gesamte Unfall- und Bezeugigungsszenario würde sich 1000-mal wiederholen:

> [Abbildung: Derselbe Wahrscheinlichkeitsbaum wie zuvor, jetzt mit absoluten Häufigkeiten statt Wahrscheinlichkeiten beschriftet. Vom Startpunkt: grüner Pfeil „150“ zu „T: Taxi grün“, blauer Pfeil „850“ zu „¬T: Taxi blau“. Von „T: Taxi grün“: dünner blauer Pfeil „30“ zu „Zeuge irrt sich“ (grau/blass), dicker grüner Pfeil „120“ zu „Zeuge erkennt richtig“ (schwarz hervorgehoben, „} $T \wedge Z$“). Von „¬T: Taxi blau“: dünner grüner Pfeil „170“ zu „Zeuge irrt sich“ (schwarz hervorgehoben, „} $\neg T \wedge Z$“), dicker blauer Pfeil „680“ zu „Zeuge erkennt richtig“ (grau/blass). Die beiden schwarz hervorgehobenen Zweige (120 und 170) werden rechts durch eine geschweifte Klammer zusammengefasst und mit „Z in 290 Fällen“ beschriftet.]

Dann würde der Zeuge in 290 Fällen behaupten, das Taxi sei grün gewesen. In nur 120 davon wäre es tatsächlich grün gewesen.

$$120 : 290 \approx 0,414.$$

### 497. Der Basisraten-Fehlschluss: Ein relevantes Problem

Der Basisraten-Fehlschluss droht bei vielen sehr relevanten Anwendungen:

Franz wird auf eine seltene schwere Krankheit hin getestet. Nur einer unter 1000 Menschen leidet an dieser Krankheit. Der Test ist zu 99% zuverlässig: Das heißt von 100 Tests an erkrankten Menschen gibt der Test nur einmal fälschlicherweise ein negatives Ergebnis und von 100 Tests an nicht erkrankten Menschen nur einmal fälschlicherweise ein positives.

Der Test fällt positiv aus.

Wie wahrscheinlich ist es, dass Franz tatsächlich an der seltenen Krankheit leidet?

$K \equiv$ Die Krankheit liegt tatsächlich vor.

$T \equiv$ Das Testergebnis ist positiv.

$$p(T/\neg K) = p(\neg T/K) = 0,01.$$

> $p(T/\neg K)$ nennt man auch das Risiko eines falsch-positiven Ergebnisses, $p(\neg T/K)$ das Risiko eines falsch-negativen Ergebnisses.

$$p(K) = 0,001.$$

Also ist

$$p(K/T) = \frac{p(T/K)p(K)}{p(T/K)p(K) + p(T/\neg K)p(\neg K)} = \frac{0,99 \cdot 0,001}{0,99 \cdot 0,001 + 0,01 \cdot 0,999} \approx 0,090.$$

In der geschilderten Situation beträgt also die Wahrscheinlichkeit, dass Peter<!-- sic --> tatsächlich an der Krankheit erkrankt ist, allein auf Grundlage des Testergebnisses nur rund 9%!

<!-- p. 205 | pdf 213 -->

### 498. Der Fehlschluss des Spielers

$$\begin{array}{l} \text{Bei diesem Roulettespiel ist nun schon zehnmal hintereinander Rot gefallen.} \\ \hline \text{Beim nächsten Dreh muss nun endlich Schwarz kommen.} \end{array}$$

Wenn Sie diesem Argument eine Stärke >0,5 zuweisen, begehen Sie den *Fehlschluss des Spielers*.

Sofern keine bisher unentdeckten Kausalkräfte zwischen den vergangenen und den zukünftigen Drehs wirken, ist die Wahrscheinlichkeit von Rot bei einem fairen Rouletterad bei jedem Dreh 0,5.

Der Fehlschluss des Spielers ist sehr weit verbreitet und beruht wahrscheinlich auf folgender Intuition:

Auf lange Sicht müssen 50 % aller Drehs Schwarz ergeben. Da dies nun schon so lange nicht passiert ist, muss jetzt endlich einmal Schwarz kommen, damit die Balance gewahrt bleibt.

Tatsächlich legt insbesondere die Häufigkeits-Interpretation (s. Folien 467-468) nahe, dass auf lange Sicht der Anteil von Schwarz gegen 50% gehen muss – aber selbst bei Zugrundelegung dieser Interpretation sagt uns die Wahrscheinlichkeitstheorie *nichts* darüber, wie lange dies dauert. Der „Ausgleich“ kann jetzt gleich oder in 100 Jahren beginnen.

Eine weitere Intuition, die beim Fehlschluss des Spielers eine Rolle spielt, ist die folgende:

Zehnmal Rot hintereinander,

> [Abbildung: Reihe von 10 roten Quadraten.]

ist schon ein sehr unwahrscheinliches Ereignis!

Elfmal Rot,

> [Abbildung: Reihe von 11 roten Quadraten.]

wäre ja *noch unwahrscheinlicher*!

Tatsächlich ist zehnmal Rot in einem gewissen Sinne sehr unwahrscheinlich. Es ist eine von $2^{10}$ Möglichkeiten, wie 10 Drehs hinsichtlich Schwarz und Rot ausgehen können und in dem Sinn beträgt seine Wahrscheinlichkeit nur $1 : 2^{10} = 1/1024$. Nur: Jede andere genaue Schwarz-Rot-Abfolge, z.B.

> [Abbildung: Reihe von 10 Quadraten, Farbfolge Rot, Schwarz, Schwarz, Rot, Schwarz, Rot, Rot, Schwarz, Rot, Schwarz.]

ist *genauso unwahrscheinlich*! Und elfmal Rot,

> [Abbildung: Reihe von 11 roten Quadraten.]

ist tatsächlich mit $1 : 2^{11} = 1/2048$ *insgesamt noch unwahrscheinlicher*, aber genauso unwahrscheinlich wie zehnmal Rot und dann einmal Schwarz:

> [Abbildung: Reihe von 11 Quadraten, die ersten 10 rot, das letzte schwarz.]

Dies alles gilt, sofern Sie die ganze Zeit über an der Hypothese festhalten, das Rouletterad sei fair. Wenn Sie nach hundertmal Rot von dieser Hypothese abrücken, kann dies tatsächlich ihre Erwartung hinsichtlich des nächsten Drehs auf rationale Weise beeinflussen – aber in die dem Fehlschluss des Spielers entgegengesetzte Richtung! D.h. Sie müssen dann Rot für wahrscheinlicher halten als Schwarz.

<!-- p. 206 | pdf 214 -->

### 499. Der Konjunktions-Fehlschluss

Ein weiteres häufig auftretendes Problem beim induktiven Schließen ist als „conjunction fallacy“ bekannt.

$$\begin{array}{l} \text{Pia ist eine 35jährige Frau, Single, klug und geradeheraus. Sie hat Philosophie studiert und zügig abgeschlossen. Als Studentin hat sie sich für die Integration von Migrantinnen eingesetzt, und sie hat vor einem Supermarkt demonstriert, weil die Supermarktkette keine Mutterschutzregelung für ihre Mitarbeiterinnen hatte.} \\ \hline \text{Pia ist heute Unternehmensberaterin.} \end{array}$$

$$\begin{array}{l} \text{Pia ist eine 35jährige Frau, Single, klug und geradeheraus. Sie hat Philosophie studiert und zügig abgeschlossen. Als Studentin hat sie sich für die Integration von Migrantinnen eingesetzt, und sie hat vor einem Supermarkt demonstriert, weil die Supermarktkette keine Mutterschutzregelung für ihre Mitarbeiterinnen hatte.} \\ \hline \text{Pia ist heute Unternehmensberaterin und aktive Feministin, die kostenlos Philosophiekurse für MigrantInnen anbietet.} \end{array}$$

Beide Schlüsse sind sicher sehr riskant. Aber auf jeden Fall ist $p(S/B)$ im zweiten Fall *geringer* als im ersten.

> Das liegt daran, dass die Wahrscheinlichkeit einer Konjunktion mit
>
> $$p(A \wedge B) = p(A) \cdot p(B/A)$$
>
> nur dann gleich groß sein kann wie die Wahrscheinlichkeit eines einzelnen Konjunktionsgliedes, $p(A)$, wenn $p(B/A) = 1$, also wenn B aus A folgt. In allen anderen Fällen gilt $p(B/A) < 1$ und somit, dass die Wahrscheinlichkeit der Konjunktion geringer ist als die der Konjunktionsglieder.

Viele Menschen gehen fälschlicherweise vom umgekehrten Verhältnis aus und halten den zweiten Schluss für stärker als den ersten.

> Auch dies wurde von Kahnemann und Tversky gezeigt.

### 500. Das Monty Hall Problem

Das sogenannte „Monty Hall Problem“ ist ein weiteres Beispiel dafür, dass unsere Intuitionen über Wahrscheinlichkeitsschlüsse sehr unsicher sind.

Die Ausgangssituation des Problems beruht auf der Fernsehshow „Let's Make a Deal“ mit dem Showmaster Monty Hall. (In Deutschland lief eine ähnliche Show unter dem Titel „Geh aufs Ganze“.)

- Es gibt drei verschlossene Tore; hinter einem ist das Auto, das Sie gewinnen wollen, hinter den anderen beiden nichts.

> [Abbildung: drei geschlossene graue Torbögen nebeneinander.]

- Erster Schritt: Sie wählen ein Tor aus.

> [Abbildung: dieselben drei geschlossenen Torbögen, darunter eine nach oben zeigende Hand, die auf das linke Tor zeigt.]

<!-- p. 207 | pdf 215 -->

- Zweiter Schritt: Der Showmaster öffnet eines der Tore, das Sie *nicht* gewählt haben und das leer ist.

> [Abbildung: linkes und rechtes Tor geschlossen (grau), mittleres Tor offen (weißer Innenraum sichtbar); darunter die zeigende Hand unter dem linken Tor.]

- Dritter Schritt: Sie müssen sich entscheiden, ob Sie bei Ihrer Wahl bleiben oder zum anderen noch verbliebenen Tor wechseln. Den Inhalt des Tores, für das Sie sich jetzt entscheiden, dürfen Sie behalten – was sollen Sie tun?

> [Abbildung: dieselbe Drei-Tore-Konfiguration (mittleres Tor offen), darunter die zeigende Hand unter dem linken Tor; zwischen linkem und rechtem Tor ein rotes Fragezeichen „?“ mit zwei roten Doppelpfeilen, die vom linken zum rechten Tor und zurück weisen.]

Nun gibt es drei Möglichkeiten:

- Es ist vernünftiger, das Tor noch einmal zu wechseln.
- Es ist vernünftiger, bei der ursprünglichen Wahl zu bleiben.
- Es ist beides gleich vernünftig.

### 501. Das Monty Hall Problem: Lösung

Die Lösung des Monty Hall Problems kommt den meisten Menschen sehr kontraintuitiv vor:

- Es ist vernünftiger, das Tor noch einmal zu wechseln!

Tatsächlich beträgt die Wahrscheinlichkeit, dass sich das Auto dann hinter dem von Ihnen gewählten Tor<!-- sic --> befindet, 2/3, wie im Folgenden gezeigt wird.

$W_1 \equiv$ Sie haben im ersten Schritt Tor 1 gewählt.

$S_2 \equiv$ Der Showmaster hat dann Tor 2 geöffnet.

$A_3 \equiv$ Das Auto befindet sich hinter Tor 3.

Gesucht: $p(A_3/W_1 \wedge S_2)$

$$p(A_3/W_1 \wedge S_2) = \frac{p(S_2/A_3 \wedge W_1)p(A_3 \wedge W_1)}{p(W_1 \wedge S_2)}$$

(Das ist eine Variante des Bayesschen Theorems, ableitbar aus:

$$p(A_3/W_1 \wedge S_2)p(W_1 \wedge S_2) = p(W_1 \wedge S_2 \wedge A_3) = p(S_2/A_3 \wedge W_1)p(A_3 \wedge W_1).)$$

Also gilt:

<!-- p. 208 | pdf 216 -->

$$p(A_3/W_1 \wedge S_2) = \frac{p(S_2/A_3 \wedge W_1)p(A_3 \wedge W_1)}{p(W_1)[p(S_2/W_1 \wedge A_1)p(A_1) + p(S_2/W_1 \wedge A_2)p(A_2) + p(S_2/W_1 \wedge A_3)p(A_3)]}$$

$$= \frac{1 \cdot \frac{1}{3} \cdot \frac{1}{3}}{\frac{1}{3} \cdot \left(\frac{1}{2} \cdot \frac{1}{3} + 0 \cdot \frac{1}{3} + 1 \cdot \frac{1}{3}\right)} = \frac{2}{3}.$$

Verdeutlichung dieser Formel:

<!-- Im Original sind die drei folgenden Formelzeilen durch geschweifte Unterklammern und gebogene Pfeile verbunden: der Nenner $p(W_1 \wedge S_2)$ der ersten Zeile wird durch einen Pfeil mit der zweiten Zeile $p(W_1 \wedge S_2) = p(W_1)p(S_2/W_1)$ verknüpft, und deren unterklammerter Term $p(S_2/W_1)$ wird durch einen weiteren Pfeil mit der dritten Zeile verknüpft, die ihn ausmultipliziert. -->

$$p(A_3/W_1 \wedge S_2) = \frac{p(S_2/A_3 \wedge W_1)p(A_3 \wedge W_1)}{p(W_1 \wedge S_2)}$$

$$p(W_1 \wedge S_2) = p(W_1)p(S_2/W_1)$$

$$p(S_2/W_1) = p(S_2/W_1 \wedge A_1)p(A_1) + p(S_2/W_1 \wedge A_2)p(A_2) + p(S_2/W_1 \wedge A_3)p(A_3)$$

### 502. Veranschaulichung der Lösung

Die Lösung lässt sich auch durch relative Häufigkeiten schematisch veranschaulichen:

> [Abbildung: Flussdiagramm aus Kästen und Pfeilen. Oben ein Kasten „Sie wählen ein Tor“, von dem drei Pfeile abwärts zu drei Kästen in einer Reihe führen: „Sie haben ein Tor ohne Auto gewählt“ (links), „Sie haben ein Tor ohne Auto gewählt“ (Mitte, gleicher Text wie links), „Sie haben ein Tor mit Auto gewählt“ (rechts). Von jedem dieser drei Kästen gehen je zwei Pfeile abwärts zu einem hellgrün hinterlegten Kasten „Sie wechseln“ und einem weißen Kasten „Sie bleiben dabei“. Von diesen sechs Kästen führt je ein Pfeil abwärts zu einem Ergebniskasten: links „Sie wechseln“ → grüner Kasten „Auto!“, „Sie bleiben dabei“ → roter Kasten „leer!“; Mitte „Sie wechseln“ → grüner Kasten „Auto!“, „Sie bleiben dabei“ → roter Kasten „leer!“; rechts „Sie wechseln“ → roter Kasten „leer!“, „Sie bleiben dabei“ → grüner Kasten „Auto!“.]

In zwei von drei Fällen, in denen Sie wechseln, gewinnen Sie am Ende das Auto.

> In Mark Haddons herrlichem Roman *The Curious Incident of the Dog in the Night-Time* (New York: Doubleday 2003) findet sich eine ganz ähnliche Erklärung des Monty Hall Problems. Das Problem spielt außerdem in *Sweet Tooth*, einem Roman von Ian McEwan (London: Jonathan Cape 2012), eine interessante Nebenrolle.

<!-- p. 209 | pdf 217 -->

## 21. Ausblick: Nichtstandardlogiken

### 503. Nichtstandardlogiken

Die im Verlauf dieser Vorlesung vorgestellten Grundsysteme der Logik können modifiziert und erweitert werden. Manchmal geschieht dies, um bestimmte philosophische Thesen oder Einsichten in eine exakte formale Form zu bringen. In diesem letzten Teil sollen einige solche philosophische Nichtstandardlogiken jeweils im Ansatz vorgestellt werden.

> Wenige Autoren von Logik-Einführungen berücksichtigen Nichtstandardlogiken. Eine Ausnahme bildet Copi 1998.

### 504. Mehrwertige Logiken: Motivation

In der klassischen Logik gilt das Prinzip der Bivalenz oder Zweiwertigkeit: Alle Aussagen sind entweder wahr oder falsch. Man kann aber aus verschiedenen Gründen dafürhalten, dass es auch sinnvolle Aussagen gibt, die weder wahr noch falsch sind:

- Kontingente Aussagen über die Zukunft:
  „Am 1.1.2010 wird es in Bielefeld schneien.“
- Aussagen, in denen Individuenausdrücke vorkommen, die sich auf nichts beziehen:
  „El Dorado ist ein Königreich.“
- Bestimmte Fälle von Vagheit:
  „TW ist rothaarig.“

(In all diesen Fällen ist es sehr umstritten, ob die Sätze wirklich in Wahrheitswert-Lücken fallen.)

### 505. Mehrwertige Logiken: Lukasiewicz’ System L₃

Auf diese Situation haben verschiedene Logiker reagiert, indem sie einen dritten Wahrheitswert eingeführt haben. Als erster tat dies der polnische Logiker Jan Lukasiewicz in den 1920er Jahren.

Zur Veranschaulichung folgen die Wahrheitstafeln aus seiner dreiwertigen Aussagenlogik L₃.

| A | ¬A |
|---|---|
| w | f |
| u | u |
| f | w |

| $A \wedge B$ | | B | |
|---|---|---|---|
| | w | u | f |
| A = w | w | u | f |
| A = u | u | u | f |
| A = f | f | f | f |

| $A \vee B$ | | B | |
|---|---|---|---|
| | w | u | f |
| A = w | w | w | w |
| A = u | w | u | u |
| A = f | w | u | f |

| $A \rightarrow B$ | | B | |
|---|---|---|---|
| | w | u | f |
| A = w | w | u | f |
| A = u | w | w | u |
| A = f | w | w | w |

| $A \leftrightarrow B$ | | B | |
|---|---|---|---|
| | w | u | f |
| A = w | w | u | f |
| A = u | u | w | u |
| A = f | f | u | w |

> Beachten Sie, dass diese dreiwertige Logik in einem gewissen Sinne eine „konservative Erweiterung“ der klassischen Logik ist: Für alle Eingangsaussagen, die die klassischen Wahrheitswerte w oder f besitzen, liefern Lukasiewicz’ Junktoren dieselben Resultate wie die klassische Logik.

<!-- p. 210 | pdf 218 -->

In Lukasiewicz’ Logik gelten bestimmte logische Einsichten aus der klassischen Logik nicht mehr. So ist beispielsweise die Allgemeingültigkeit von Sätzen der Form $\varphi \vee \neg\varphi$ nicht mehr gegeben:

| A | ¬A | $A \vee \neg A$ |
|---|---|---|
| w | f | w |
| u | u | u |
| f | w | w |

> Dies lässt u.a. Zweifel aufkommen, ob diese dreiwertige Logik eine angemessene Reaktion auf Sätze wie „Am 1.1.2050 wird es in Hannover schneien“ ist. Denn wenn auch dieser Satz weder wahr noch falsch sein mag, so scheint doch „Es wird am 1.1.2050 in Hannover schneien oder es wird am 1.1.2050 in Hannover nicht schneien“ nicht unbestimmt, sondern *wahr* zu sein.
>
> Auch für das Problem der Vagheit liefert eine dreiwertige Logik nur auf den ersten Blick eine Antwort. Zwar muss man nun nicht mehr annehmen, dass es auf der Skala der Farbschattierungen eine scharfe Grenze gäbe, so dass der Satz „TW ist rothaarig“ wahr ist, falls die Farbe von TWs Haaren auf der einen Seite dieser Grenze zu finden ist, und andernfalls falsch. Doch ergibt sich nunmehr das Problem, dass es analoge und nicht weniger „scharfe“ Grenzen auf der Skala der Farbschattierungen geben muss, die den Grenzen zwischen den Wahrheitswerten „wahr“ und „unbestimmt“ und „unbestimmt“ und „falsch“ entsprechen. Für die Lösung dieses Problems scheinen daher eher *unendlichwertige* Logiken geeignet, die z.B. erlauben, den Wahrheitswert eines Satzes durch eine reelle Zahl zwischen 1 (für „wahr“) und 0 (für „falsch“) anzugeben. Damit ließe sich die Existenz eines Übergangsbereichs behaupten, in dem der Satz „TW ist rothaarig“ sozusagen kontinuierlich desto wahrer wird, je roter TWs Haare sind.

### 506. Intuitionistische Logik

Ein weiteres nicht-klassisches System der Logik ist die sogenannte intuitionistische Logik. Vereinfacht gesagt, ist dieses System der Versuch, die Logik der *begründeten Behauptbarkeit* abzubilden.

Sei „$\mathfrak{B}$ …“ eine Abkürzung für „Wir haben gute Gründe, zu behaupten, dass …“

Dann ergeben sich die Bedeutungen der logischen Konstanten in der intuitionistischen Logik aus den folgenden Kontexten:

$\mathfrak{B} (A \wedge B)$ genau dann, wenn $\mathfrak{B} A$ und $\mathfrak{B} B$.

$\mathfrak{B} (A \vee B)$ genau dann, wenn $\mathfrak{B} A$ oder $\mathfrak{B} B$.

$\mathfrak{B} (A \rightarrow B)$ genau dann, wenn $\mathfrak{B}$ (Wenn $\mathfrak{B} A$, so $\mathfrak{B} B$).

$\mathfrak{B} \neg A$ genau dann, wenn $\mathfrak{B}$ nicht-$\mathfrak{B} A$.

$\mathfrak{B} \exists x\, Fx$ genau dann, wenn für mindestens einen Gegenstand $\xi$ gilt: $\mathfrak{B} (\xi \in D)$ und $\mathfrak{B} F\xi$.

$\mathfrak{B} \forall x\, Fx$ genau dann, wenn $\mathfrak{B}$ (Für alle Gegenstände $\xi$ gilt: Wenn $\mathfrak{B} (\xi \in D)$, so $\mathfrak{B} F\xi$).

Am Beispiel der intuitionistischen Subjunktion erkennt man leicht, dass die intuitionistische Logik nicht wahrheitsfunktional (und auch nicht „behauptbarkeitsfunktional“) ist:

$\mathfrak{B} (A \rightarrow B)$ genau dann, wenn $\mathfrak{B}$ (Wenn $\mathfrak{B} A$, so $\mathfrak{B} B$).

### 507. Intuitionistische Logik: Abweichungen

Die Tautologie

$$\vDash A \vee \neg A$$

gilt in der intuitionistischen Logik *nicht*, wie eine Betrachtung der intuitionistischen Bedeutungen von Adjunktion und Negation leicht erkennen lässt:

$\mathfrak{B} (A \vee B)$ genau dann, wenn $\mathfrak{B} A$ oder $\mathfrak{B} B$.

$\mathfrak{B} \neg A$ genau dann, wenn $\mathfrak{B}$ nicht-$\mathfrak{B} A$.

<!-- p. 211 | pdf 219 -->

Ebenso gilt beispielsweise *nicht*:

$$\neg\neg A \vDash A$$

Es bestehen zwischen den verschiedenen Junktoren und Quantoren in der intuitionistischen keine allgemeingültigen Äquivalenzen, die es erlauben würden, einen von ihnen durch eine Kombination der anderen zu definieren.

> Die intuitionistische Logik ist ein schwächeres logisches System als die klassische, d.h. aus einer gegebenen Aussage folgen intuitionistisch weniger Konsequenzen als klassisch. Sie spielt beispielsweise eine große Rolle für Philosophen, die behaupten, dass nichts als wahr gelten dürfe, das nicht prinzipiell rational behauptbar sein könnte (insb. Michael Dummett).

### 508. Modallogik

Eine andere Familie von Modifikationen der klassischen Logik sind die sogenannten Modallogiken. Sie fügen den PL-Sprachen bestimmte nicht-wahrheitsfunktionale Satzoperatoren hinzu, um die Logik von *Möglichkeit und Notwendigkeit* abzubilden. Dabei bedeutet

„$\Box A$“ soviel wie „Es ist notwendig, dass A“ und

„$\Diamond A$“ soviel wie „Es ist möglich, dass A“.

### 509. Modallogik: grundlegende Äquivalenzen

Grundlegend für alle Modallogiken ist die folgende Äquivalenz, die den Zusammenhang zwischen den beiden Operatoren ausdrückt:

$$\Diamond\varphi \equiv \neg\Box\neg\varphi$$

Entsprechend den (klassischen) Gesetzen der Negation gilt dann auch:

$$\neg\Diamond\varphi \equiv \Box\neg\varphi$$

$$\Diamond\neg\varphi \equiv \neg\Box\varphi$$

$$\neg\Diamond\neg\varphi \equiv \Box\varphi$$

### 510. Modallogik: Mögliche-Welten-Semantik

Als Semantik für die Modallogik hat sich die Mögliche-Welten-Semantik durchgesetzt, die auf Saul Kripke (1963) zurückgeht.

Am Beispiel der modalen *Aussagenlogik* bedeutet dies, dass jede Interpretation für mehrere verschiedene „Welten“ verschiedene Bewertungen aller atomaren Sätze vornimmt. Außerdem gibt es eine „Zugänglichkeitsrelation“, die sozusagen festlegt, wann eine Welt von einer anderen aus gesehen als möglich gilt.

<!-- p. 212 | pdf 220 -->

Beispiel für eine Interpretation in der Mögliche-Welten-Semantik:

> [Abbildung: Mögliche-Welten-Diagramm mit acht Kästchen (Welten) und Pfeilen für die Zugänglichkeitsrelation. Räumliche Anordnung: obere Reihe Welt w₁, Welt w₂, Welt w₃; mittlere Reihe Welt w₄, aktuale Welt, Welt w₆; untere Reihe Welt w₅, Welt w₇.
> Bewertungen der Welten:
> - Welt w₁: A, ¬B, ¬C, ¬D
> - Welt w₂: A, B, ¬C, ¬D
> - Welt w₃: A, ¬B, C, ¬D
> - Welt w₄: A, B, C, ¬D
> - aktuale Welt: A, B, C, ¬D
> - Welt w₆: A, B, C, ¬D
> - Welt w₅: A, ¬B, C, ¬D
> - Welt w₇: A, ¬B, ¬C, D
>
> Pfeile (Zugänglichkeitsrelation): Jede der sieben Welten w₁–w₇ hat einen Pfeil zu sich selbst (reflexiv, als Schleife über dem jeweiligen Kästchen gezeichnet); die aktuale Welt hat keine solche Schleife.
> Von der aktualen Welt geht je ein Pfeil zu jeder der sieben anderen Welten: aktuale Welt → w₁, aktuale Welt → w₂, aktuale Welt → w₃, aktuale Welt → w₄, aktuale Welt → w₅, aktuale Welt → w₆, aktuale Welt → w₇.
> Zusätzlich gibt es einen Pfeil von w₆ zu w₃ (w₆ → w₃, ein kurzer Bogen von der Oberseite von w₆ zur Unterseite von w₃, neben dem langen Bogen von der aktualen Welt zu w₃), sowie zwei einander kreuzende Bögen unterhalb von w₇, die w₅ und w₆ wechselseitig verbinden (w₅ → w₆ und w₆ → w₅).]

### 511. Modallogik: Mögliche-Welten-Semantik

Damit lässt sich die Semantik der Modaloperatoren etwa wie folgt definieren:

$\Box\varphi$ ist genau dann wahr, wenn in allen von der aktualen Welt aus möglichen Welten $\varphi$ gilt.

$\Diamond\varphi$ ist genau dann wahr, wenn in mindestens einer von der aktualen Welt aus möglichen Welten $\varphi$ gilt.

Diese Definitionen helfen, einfache modallogische Wahrheiten semantisch zu begründen. Z.B.:

„$\Box(P \wedge Q)$“ ist modallogisch äquivalent zu „$\Box P \wedge \Box Q$“.

„$\Diamond(P \wedge Q)$“ ist *nicht* modallogisch äquivalent zu „$\Diamond P \wedge \Diamond Q$“.

### 512. Modallogik

Für viele andere modallogische Aussagen muss man zusätzliche Annahmen über die Zugänglichkeitsrelation machen.

Wenn man z.B. annimmt, dass diese reflexiv ist (d.h. dass jede mögliche Welt von sich selbst aus zugänglich ist), dann kann man zeigen, dass „$\Box P \rightarrow P$“ modallogisch wahr ist.

Nimmt man an, dass die Zugänglichkeitsrelation transitiv ist, dann kann man beispielsweise „$\Box P \rightarrow \Box\Box P$“ zeigen.

Verschieden starke Annahmen über die Zugänglichkeitsrelation führen zu verschieden starken modallogischen Systemen, die für verschiedene Anwendungen geeignet sind.

Oft wird in der Modallogik noch ein spezieller zweistelliger Operator definiert, die sogenannte *strikte Implikation*:

$$A \mathrel{\unicode{x297D}} B :\equiv \Box(A \rightarrow B)$$

<!-- p. 213 | pdf 221 -->

### 513. Angewandte Modallogik: Deontische Logik

Ein Beispiel für eine philosophische Anwendung der Modallogik ist die sogenannte *deontische Logik*. In der deontischen Logik gibt es zwei Satzoperatoren, dabei bedeutet

„$\mathcal{O}A$“ soviel wie „Es ist geboten, dass A“ und

„$\mathcal{P}A$“ soviel wie „Es ist erlaubt, dass A“.

> D.h. „$\mathcal{O}$“ entspricht einer Art moralischer Notwendigkeit, „$\mathcal{P}$“ einer moralischen Möglichkeit.

Plausiblerweise gilt:

$$\mathcal{O}A \equiv \neg\mathcal{P}\neg A$$

$$\mathcal{P}A \equiv \neg\mathcal{O}\neg A$$

$$\neg\mathcal{O}A \equiv \mathcal{P}\neg A$$

$$\neg\mathcal{P}A \equiv \mathcal{O}\neg A$$

Sicher sollte in einer plausiblen deontischen Logik nicht

$$\mathcal{O}A \rightarrow A$$

allgemeingültig sein. Daraus ersieht man, dass man für die deontische Logik kein modallogisches System annehmen sollte, welches die Reflexivität der Zugänglichkeitsrelation voraussetzt.

> Man kann sich die Bedeutung der Zugänglichkeitsrelation in der deontischen Logik anschaulich so vorstellen: Als zugänglich gelten alle möglichen Welten, die von der unseren aus gesehen als im moralischen Sinn ideal angesehen werden können.

Unabhängig von der Zugänglichkeitsrelation gilt das schwächere Prinzip

$$\mathcal{O}A \rightarrow \mathcal{P}A.$$

### 514. Angewandte Modallogik: Temporale Logik

Ein weiteres Anwendungsbeispiel ist die temporale Logik. Als einfaches Grundsystem betrachten wir die zwei Operatoren

„$\mathcal{G}A$“ mit der Bedeutung „Es wird in der Zukunft immer der Fall sein, dass A“

„$\mathcal{F}A$“ mit der Bedeutung „Es wird in der Zukunft mindestens einmal der Fall sein, dass A“.

Wieder gilt:

$$\mathcal{G}A \equiv \neg\mathcal{F}\neg A$$

$$\mathcal{F}A \equiv \neg\mathcal{G}\neg A$$

$$\neg\mathcal{G}A \equiv \mathcal{F}\neg A$$

$$\neg\mathcal{F}A \equiv \mathcal{G}\neg A$$

<!-- p. 214 | pdf 222 -->

Wieder kann das Prinzip

$$\mathcal{G}A \rightarrow A$$

nicht vorausgesetzt werden. Dagegen gilt sicher

$$\mathcal{G}A \rightarrow \mathcal{G}\mathcal{G}A$$

was der Voraussetzung entspricht, dass die entsprechende Zugänglichkeitsrelation transitiv sein sollte.

Die temporale Logik wird erst interessant, wenn man ein weiteres Paar modaler Operatoren hinzufügt, das die Formulierung von Aussagen über die Vergangenheit erlaubt.

„$\mathcal{H}A$“ mit der Bedeutung „Es war in der Vergangenheit immer der Fall, dass A“

„$\mathcal{P}A$“ mit der Bedeutung „Es war in der Vergangenheit mindestens einmal der Fall, dass A“.

Übersicht über die temporalen Operatoren:

$\mathcal{F}$ – in der Zukunft (mindestens einmal)

$\mathcal{G}$ – in der Zukunft immer

$\mathcal{P}$ – in der Vergangenheit (mindestens einmal)

$\mathcal{H}$ – in der Vergangenheit immer

Unumstrittene Zusammenhänge zwischen den Vergangenheits- und Zukunftsoperatoren lassen sich durch die folgenden Aussagen formulieren:

$$\mathcal{P}\mathcal{G}A \rightarrow A$$

$$\mathcal{F}\mathcal{H}A \rightarrow A$$

In der temporalen Logik kann man die logischen Konsequenzen verschiedener Annahmen über die Zeit erforschen.

Welche Aussagen werden jeweils über die Zeit gemacht, wenn man von folgenden Prinzipien voraussetzt, dass sie für jede Aussage A gelten?

$$\mathcal{P}A \rightarrow \mathcal{F}A$$

$$A \rightarrow \mathcal{F}\mathcal{G}\neg A$$

$$\mathcal{F}A \rightarrow \mathcal{F}\mathcal{G}\neg A$$

$$\mathcal{P}A \rightarrow \mathcal{P}\mathcal{H}\neg A$$

> Eine gründliche Einführung in die Modallogik bieten G. E. Hughes und M. J. Cresswell, *Einführung in die Modallogik*, Berlin etc.: de Gruyter 1978. Ihre Grundzüge und die Grundzüge einiger wichtiger Anwendungen werden vorgestellt bei Rod Girle: *Modal Logics and Philosophy*, Montreal: McGill-Queen’s University Press 2000.

<!-- p. 215 | pdf 223 -->

## Anhang 1. Kausales Urteilen

### 515. Der Schluss auf eine Ursache

$$\begin{array}{l} \text{Immer wenn ich diesen Schalter betätige, geht das Licht im Hausflur an.} \\ \hline \text{Das Betätigen des Schalters verursacht das Angehen des Lichtes.} \end{array}$$

Dieses Argument scheint auf den ersten Blick Berechtigung zu haben.

Betrachten Sie die folgenden, analogen Beispiele.

$$\begin{array}{l} \text{Immer wenn Hans „Dinner for one“ im Fernsehen sieht, hat er am nächsten Tag einen Kater.} \\ \hline \text{Das Betrachten von „Dinner for one“ verursacht bei Hans einen Kater.} \end{array}$$

$$\begin{array}{l} \text{Immer wenn der Brotpreis in Belgien gestiegen ist, ist kurz darauf auch der Wasserspiegel in Venedig gestiegen.} \\ \hline \text{Das Steigen des Brotpreises in Belgien verursacht das Steigen des Wasserspiegels in Venedig.} \end{array}$$

Daraus, dass *B* (immer) eintritt, nachdem *A* eingetreten ist, kann man offenbar nicht schließen, dass *A* eine Ursache für *B* ist.

### 516. *Post hoc ergo propter hoc*

Den in den obigen Beispielen begangenen Fehlschluss bezeichnet man auch mit dem Ausdruck „*post hoc ergo propter hoc*“.

Dieser Fehlschluss wird oft auch bei Aussagen über Einzelereignisse begangen:

$$\begin{array}{l} \text{Gestern habe ich beim China-Imbiss gegessen und heute ist mir übel.} \\ \hline \text{Das gestrige Essen beim China-Imbiss verursachte meine Übelkeit.} \end{array}$$

### 517. A verursacht B – was ist gemeint?

Offenbar reicht es nicht, dass (so etwas wie) B (immer) passiert, wenn (so etwas wie) A passiert ist, um konstatieren zu können, dass A eine Ursache von B ist.

Was ist aber dann genau damit gemeint?

Fragen wir zunächst: Was bedeutet ein Satz der Form

„Ereignis A ist eine Ursache von Ereignis B“?

### 518. Die kontrafaktische Analyse

Ansatz zu einer Analyse:

<!-- p. 216 | pdf 224 -->

- Ereignis A ist eine Ursache von Ereignis B, wenn
  A stattgefunden hat und B stattgefunden hat *und*
  *B nicht stattgefunden hätte, wenn A nicht stattgefunden hätte.*

Sätze der Form: „Wenn A der Fall gewesen wäre, wäre B der Fall gewesen“, nennt man auch *kontrafaktische Konditionale*. Deshalb kann man den obigen Ansatz zur Analyse der Kausalrelation auch als den *kontrafaktischen Ansatz* bezeichnen.

> Die Analyse der Kausalrelation mit Hilfe kontrafaktischer Konditionale ist hauptsächlich vom amerikanischen Philosophen David Lewis ausgearbeitet worden.
>
> Kontrafaktische Konditionale sind in der Philosophie nicht nur bei der Diskussion der Kausalität sehr nützlich: Z.B. kann man mit ihrer Hilfe erklären, was Dispositionen sind (etwas ist wasserlöslich, wenn es sich auflösen würde, wenn man es ins Wasser gäbe).
>
> Sie spielen auch z.B. eine Rolle in der Diskussion darüber, was ein Naturgesetz ausmacht: Ein Naturgesetz ist eine Regularität, die nicht nur immer eingehalten wird, sondern auch kontrafaktische Konditionale stützt (z.B.: Wenn das Gas in diesem festen Behälter wärmer würde, würde auch der Druck steigen).

### 519. Kontrafaktische Konditionale

Allerdings ist die Semantik kontrafaktischer Konditionale nicht leicht durchschaubar. Zwar gibt es kontrafaktische Konditionale mit scheinbar leicht zu durchschauenden Wahrheitsbedingungen:

Wenn Bettie ihre Brille nicht verloren hätte, dann hätte sie mehr Freude am Kino gehabt.

Betrachten Sie jedoch die folgenden Beispiele:

Wenn Verdi ein Landsmann von Bizet gewesen wäre, wäre er Franzose gewesen.

Wenn Verdi ein Landsmann von Bizet gewesen wäre, wäre Bizet Italiener gewesen.

Wenn Napoleon eine Frau gewesen wäre, hätte sie bei Waterloo gesiegt.

Warum sind manche kontrafaktischen Konditionale leicht zu beurteilen, andere schwierig? Was macht ein kontrafaktisches Konditional wahr?

Die folgende Analyse kontrafaktischer Konditionale wurde von Robert Stalnaker und David Lewis entwickelt. Dabei steht „$A \,\Box\!\rightarrow\, B$“ für das kontrafaktische Konditional „Wenn A der Fall wäre, wäre B der Fall“.

- $A \,\Box\!\rightarrow\, B$ genau dann, wenn
  in derjenigen Welt (oder denjenigen Welten), die von allen, in denen A gilt, der aktualen Welt am ähnlichsten ist (bzw. sind), auch B gilt.

  > Dies ist eine sinnfällige Vereinfachung der Auffassung Lewis’. Die genaue Definition (die auch in Fällen anwendbar ist, in denen A unmöglich ist oder in denen es keine der aktualen Welt maximal ähnlichen A-Welten gibt) lautet: $A \,\Box\!\rightarrow\, B$ genau dann, wenn es entweder keine Welt gibt, in der A wahr ist oder es eine Welt gibt, in der sowohl A als auch B wahr sind und die der aktualen Welt ähnlicher ist als alle Welten, in denen A gilt, B aber nicht.
  >
  > Diese Analyse ist nicht die einzige Möglichkeit, kontrafaktische Konditionale zu verstehen. Eine Alternative besteht z.B. darin, die Bekräftigung eines kontrafaktischen Konditionals $A \,\Box\!\rightarrow\, B$ als die implizite Behauptung zu verstehen, dass es ein gültiges Argument gibt, das von A, impliziten Hintergrundannahmen und einschlägigen Naturgesetzen auf B zu schließen erlaubt. (Diese Analyse wurde insb. von Nelson Goodman entwickelt.)

<!-- p. 217 | pdf 225 -->

Die Analyse mit Hilfe möglicher Welten erlaubt es sowohl, die eindeutigen Fälle zu verstehen, als auch zu erklären, was an den schwierigen Fällen so schwierig ist.

Wenn Bettie ihre Brille nicht verloren hätte, dann hätte sie mehr Freude am Kino gehabt.

> Die nächstmögliche Welt, in der Bettie ihre Brille nicht verloren hat, ist eine, in der sich ansonsten möglichst alles so verhält wie in der aktualen Welt – d.h. alles, was mit dem Umstand, dass sie ihre Brille noch hat, vereinbar ist.

Wenn Verdi ein Landsmann von Bizet gewesen wäre, wäre er Franzose gewesen.

Wenn Verdi ein Landsmann von Bizet gewesen wäre, wäre Bizet Italiener gewesen.

> Es ist nicht entscheidbar, welche der beiden Möglichkeiten (Verdi und Bizet waren beide Italiener / Verdi und Bizet waren beide Franzosen) der aktualen Welt am ähnlichsten ist – deshalb können wir uns zu keiner Beurteilung der beiden Konditionale entschließen.

Wenn Napoleon eine Frau gewesen wäre, hätte sie bei Waterloo gesiegt.

> Wie die nächstmögliche Welt aussieht, in der Napoleon eine Frau gewesen wäre, ist unserem Wissen schwer zugänglich. Welche ist der aktualen Welt näher: Eine mögliche Welt, in der Napoleon als Frau niemals Einfluss auf die französische Politik gewonnen und Waterloo nie aus der Nähe gesehen hätte, oder die, in der er als Frau die französischen Truppen zum Sieg geführt hätte? Die Beurteilung dieser Fragen liegt so weit außerhalb unseres Wissens über die entsprechenden möglichen Welten, dass uns das Konditional absurd erscheint.

### 520. Die kontrafaktische Analyse

Damit können wir jetzt die kontrafaktische Analyse der Kausalbeziehung etwas genauer verstehen. Zunächst noch eine Verbesserung:

Dass am 15.11.1940 in Nordfrankreich Nebel auftrat, war eine Ursache dafür, dass Hans den Krieg überlebte; dies wiederum war eine Ursache dafür, dass seine Frau Jahre später Fritz gebar; dies war eine Ursache dafür, dass Fritz später in die SPD eintrat, was wiederum eine Ursache dafür ist, dass die letztjährige Mitgliederzählung der SPD eine ungerade Zahl ergab.

Wie beurteilen Sie vor dem Hintergrund dieser Geschichte die folgenden zwei Sätze:

Das Auftreten des Nebels am 15.11.1940 ist eine Ursache dafür, dass die letztjährige Mitgliederzählung der SPD eine ungerade Zahl ergab.

Wenn am 15.11.1940 in Nordfrankreich kein Nebel aufgetreten wäre, dann hätte die letztjährige Mitgliederzählung der SPD keine ungerade Zahl ergeben.

> Während der erste Satz unproblematisch ist, scheint das entsprechende kontrafaktische Konditional völlig unbestimmt.
>
> Man nimmt im Allgemeinen an, dass die Kausalrelation *transitiv* ist, d.h. wenn A eine Ursache von B ist und B eine Ursache von C, dann ist A auch eine Ursache von C. Kontrafaktische Konditionale sind aber nicht grundsätzlich transitiv. Deshalb geht die kontrafaktische Analyse in zwei Schritten vor.

### 521. Die kontrafaktische Analyse

- Ein Einzelereignis B heißt von einem Einzelereignis A „*kausal abhängig*“, wenn sowohl das Eintreten von B vom Eintreten von A kontrafaktisch abhängig ist als auch das Nichteintreten von B vom Nichteintreten von A:

$$(A \,\Box\!\rightarrow\, B) \wedge (\neg A \,\Box\!\rightarrow\, \neg B).$$

<!-- p. 218 | pdf 226 -->

- Ein Ereignis ist dann und nur dann eine *Ursache* eines anderen Ereignisses, wenn von ihm aus eine Kette von Ereignissen dorthin führt, in der jedes Ereignis von seinem Vorgänger kausal abhängig ist.

  > Natürlich soll diese Redeweise von einer Kette von Ereignissen auch den einfachen Fall einschließen, dass die Wirkung unmittelbar von der Ursache kontrafaktisch abhängig ist.

### 522. Schwierigkeiten der kontrafaktischen Analyse

▷ *Nicht-kausale kontrafaktische Abhängigkeiten:*

Wenn gestern nicht Mittwoch gewesen wäre, wäre heute nicht Donnerstag.

Dass gestern Mittwoch war, ist eine Ursache dafür, dass heute Donnerstag ist. (???) <!-- Satz rot im Original -->

Wenn es keine Gravitation gäbe, würde ich hier nicht stehen.

Dass es Gravitation gibt, ist eine Ursache dafür, dass ich hier stehe. (???) <!-- Satz rot im Original -->

Es gibt kontrafaktische Abhängigkeiten, bei denen wir uns schwer tun, sie als kausale Abhängigkeiten zu akzeptieren. Deshalb ist es wichtig, im Blick zu behalten, dass der kontrafaktischen Analyse zufolge Kausalität nur kontrafaktische Abhängigkeit *zwischen Ereignissen* ist.

▷ *Umkehrbarkeit der kontrafaktischen Abhängigkeit:*

Wenn den Problembären nicht die Kugel ins Herz getroffen hätte, wäre er nicht gestorben.

Dass den Problembären die Kugel ins Herz getroffen hat, ist eine Ursache dafür, dass er gestorben ist. <!-- Satz grün im Original -->

Wenn der Problembär nicht gestorben wäre, dann hätte ihn keine Kugel ins Herz getroffen.

Dass der Problembär gestorben ist, ist eine Ursache dafür, dass ihn eine Kugel ins Herz getroffen hat. (???) <!-- Satz rot im Original -->

Manche kontrafaktische Konditionale scheinen sich umkehren zu lassen, die Ursache-Wirkung-Relation jedoch nie!

Zwei Möglichkeiten, damit umzugehen:

- Eine zusätzliche zeitliche Bedingung in die Analyse einführen (eine Ursache muss ihrer Wirkung zeitlich vorausgehen).

  > Der Nachteil dabei: Ist es ausgeschlossen, dass eine Ursache eine Wirkung in der Vergangenheit haben könnte? Wenn das ausgeschlossen ist, dann scheint dies an den Naturgesetzen zu liegen, nicht am *Begriff* der Ursache. Eine gute Begriffsanalyse der Ursache sollte deshalb eigentlich die Möglichkeit einer Wirkung in der Vergangenheit zulassen.

- Leugnen, dass die betreffenden kontrafaktischen Konditionale wahr sind.

  > Diese Option wählte David Lewis selbst: Die mögliche Welt, in der den Problembären eine Kugel ins Herz getroffen hat und er trotzdem noch lebt, ist der aktualen Welt ähnlicher, als die mögliche Welt, in der ihn erst gar keine Kugel getroffen hätte. Hinter dieser Behauptung steht eine sehr komplizierte Theorie der Ähnlichkeit möglicher Welten, die wir hier nicht behandeln können.
  >
  > Vgl. David Lewis: “Causation” (1973) und “Postscripts to ‘Causation’” (1986), beide wiederabgedr. in: ders., *Philosophical Papers*, Vol. II, Oxford: Oxford University Press 1986, 159-212.

<!-- p. 219 | pdf 227 -->

▷ *Redundante Verursachung:*

Bill und Susi werfen je einen Stein auf ein geschlossenes Fenster. Susis Stein zertrümmert das Fensterglas Sekundenbruchteile bevor Bills Stein den entglasten Rahmen durchfliegt.

Susis Steinwurf war offenbar eine Ursache des Zerberstens des Fensters.

Doch das entsprechende kontrafaktische Konditional „Wenn Susi den Stein nicht geworfen hätte, wäre das Fenster nicht zerbrochen“ ist offenbar nicht wahr! <!-- Teilsatz „Wenn Susi den Stein nicht geworfen hätte, wäre das Fenster nicht zerbrochen“ rot im Original -->

Redundante Verursachung ist eines der schwerwiegendsten Probleme der kontrafaktischen Analyse. Es sind verschiedene Reaktionen versucht worden:

- Quasi-Abhängigkeit: Das Zerbersten der Scheibe ist von Susis Steinwurf quasi-abhängig. Quasi-abhängig sind zwei Ereignisse genau dann, wenn es nur an kontingenten Faktoren der Umgebung liegt, dass sie nicht kontrafaktisch abhängig voneinander sind.

  > Probleme dabei: Gilt nicht dasselbe für Bills Steinwurf? Und ist es immer plausibel, von der Umgebung zu abstrahieren?

- Fragile Ereignisse: Ein von Bills Steinwurf ausgelöste Zerbersten der Scheibe wäre nicht dasselbe Ereignis gewesen wie das von Susi ausgelöste. Deshalb ist das Konditional: „Wenn Susi den Stein nicht geworfen hätte, hätte das in Rede stehende Zerberst-Ereignis nicht stattgefunden“ entgegen dem Anschein doch wahr! <!-- Teilsatz „Wenn Susi den Stein nicht geworfen hätte, hätte das in Rede stehende Zerberst-Ereignis nicht stattgefunden“ grün im Original -->

  > Probleme dabei: Wenn man Identität bei Ereignissen sehr eng sieht, bekommt man eine große Zahl unerwünschter „Ursachen“. Z.B. wäre das Zerbersten der Scheibe nicht genau dasselbe Zerbersten gewesen, wenn ein Schmetterling in der Nähe nicht genau in diesem Moment mit dem Flügel geschlagen hätte – ist der Flügelschlag damit dann auch eine Ursache.

▷ *Transitivität?*

Dass Agnes sich an der Kreissäge den Zeigefinger absägte, war eine Ursache dafür, dass sie ins Krankenhaus eingeliefert wurde; dies wiederum ist eine Ursache dafür, dass sie mit ihrem Finger, der dort wieder angenäht wurde, heute wieder ganz normal Klavier spielen kann.

Dennoch sagen wir nicht, dass Agnes’ Unfall an der Kreissäge eine Ursache des heutigen normalen Einsatzes ihres Zeigefingers beim Klavierspiel ist.

Lewis zufolge sind wir nur inkonsequent und irregeleitet, wenn wir nicht zugeben, dass der Unfall eine Ursache des Klavierspiels ist. Aber ist die Ursache-Wirkung-Relation wirklich transitiv?

### 523. Andere Analysen

Wegen Schwierigkeiten der kontrafaktischen Analyse werden zahlreiche ganz unterschiedliche Alternativen diskutiert:

> Die folgende Aufstellung gibt jeweils nur ganz grob die Grundidee an.

- Physikalistische Analysen:
  Die Verbindung zwischen Ursache und Wirkung ist eine physikalische. Sie besteht darin, dass von der Ursache eine physikalische Erhaltungsgröße auf die Wirkung übertragen wird.
- Probabilistische Analysen:
  Die Relation zwischen Ursache und Wirkung lässt sich am besten als eine bestimmte Art von

<!-- p. 220 | pdf 228 -->

  statistischer Korrelation zwischen zwei Variablen verstehen (nämlich eine Art probabilistischer Abhängigkeit, die immer erhalten bleibt, egal welche anderen Variablen man mit ins Spiel bringt).
- Manipulative Analysen:
  Ursachen sind Umstände, in die man eingreifen kann, um die Wirkung zu manipulieren.

Einen Konsens darüber, welches die vielversprechendste Analyse der Kausalrelation ist, gibt es in der Philosophie zurzeit nicht.

Trotz aller Kritikwürdigkeit der kontrafaktischen Analyse gilt: In sehr vielen Fällen ist eine Aussage der Form „Ereignis A ist eine Ursache von Ereignis B“ genau dann wahr, wenn B von A kontrafaktisch abhängig ist.

### 524. Eine Ursache / die Ursache

Wir haben bisher über Aussagen der Form

„Ereignis A ist eine Ursache von Ereignis B“

gesprochen.

Oft sagt man auch:

„Ereignis A ist *die* Ursache von Ereignis B.“

Hier besteht offenbar ein Unterschied:

Der Zustrom frischer Luft war eine Ursache des Feuers, ebenso wie das Wegwerfen des brennenden Streichholzes eine Ursache war.

Welches war *die* Ursache des Feuers?

> Wir würden hier unter normalen Umständen dazu neigen, eher das Wegwerfen des brennenden Streichholzes als *die* Ursache zu betrachten.

Es gibt keine Gesetzmäßigkeit im Hinblick darauf, welche von mehreren Ursachen wir von Fall zu Fall als *die* Ursache eines Ereignisses bezeichnen. Im Allgemeinen ist es diejenige, die im jeweiligen Kontext am stärksten interessiert:

Z.B. die ungewöhnlichste,

diejenige, die am ehesten hätte vermieden werden können,

diejenige, die man am leichtesten erneut herbeiführen kann, oder

diejenige, die man auf der Suche nach Ursachen bisher vernachlässigt hat.

Bei der Rede von *der* Ursache ist deshalb Vorsicht geboten: Praktisch jedes Ereignis hat zahlreiche Ursachen.

### 525. Allgemeine Kausalaussagen

Joggen verursacht Rückenschäden.

In allen Gasen verursacht steigende Temperatur bei konstantem Volumen einen Anstieg des Drucks.

<!-- p. 221 | pdf 229 -->

*Allgemeine Kausalaussagen* bringen zum Ausdruck, dass Ereignisse eines bestimmten Typs immer oder meistens Ursachen von Ereignissen eines anderen Typs sind.

Allgemeine Kausalaussagen spielen eine große Rolle bei unserem Ausgangsproblem, dem Schließen auf ein Kausalurteil. Wann haben wir überhaupt gute Gründe, in einem Einzelfall anzunehmen, dass B nicht stattgefunden hätte, wenn A nicht stattgefunden hätte?

So etwas wissen wir nur dann, wenn wir von bestimmten *allgemeinen* Kausalaussagen ausgehen können (z.B. dass das Aufsetzen einer Brille bei bestimmten Menschen einen verbessertes Kinoerlebnis verursacht).

> Kurz gesagt: Unser einziger Zugriff auf kontrafaktische mögliche Welten funktioniert über kausale Gesetzmäßigkeiten.

### 526. Deterministische allgemeine Kausalaussagen: Mills Methoden

John Stuart Mill hat 1843 die Grundmethoden aufgestellt, mit deren Hilfe man zu begründeten Überzeugungen über allgemeine Kausalaussagen kommen kann.

Bei Mills Methoden geht es zunächst um die Auffindung *deterministischer* allgemeiner Kausalaussagen, also Aussagen dahingehend, dass Ereignisse eines bestimmten Typs *immer* Ursachen von Ereignissen eines anderen Typs sind.

Beachten Sie, dass wir allgemeine Kausalaussagen nur induktiv erschließen können. Auch Mills Methoden können also nicht ausschließen, dass wir uns irren.

### 527. Die Methode der Übereinstimmungen

△ **Wenn zwei oder mehr Fälle eines untersuchten Phänomens nur einen Umstand gemeinsam haben, dann ist dies ein guter Grund für die Annahme, dass dieser Umstand Ursache oder Wirkung dieses Phänomens ist.**

Beispiel: Stellen Sie sich vor, in einem Dorf treten gleichzeitig bei vielen Menschen eine Lebensmittelvergiftung auf. Die folgende Tabelle zeigt an, was die verschiedenen Betroffenen vorher unternommen haben:

| Umstände | | | | | | Phänomen |
|---|---|---|---|---|---|---|
| A | | C | D | | F | P |
| A | B | C | | E | F | P |
| | B | C | D | E | F | P |
| A | B | C | | E | | P |
| A | | C | D | E | F | P |

Wir haben Grund, anzunehmen, dass C (Currywurst bei Charlys Imbiss) eine Ursache von P ist.

<!-- p. 222 | pdf 230 -->

### 528. Die Methode der Differenzen

△ **Wenn ein Fall, in dem ein untersuchtes Phänomen auftritt, und ein Fall, in dem es nicht auftritt, in allen außer einem einzigen Umstand übereinstimmen, dann ist dies ein guter Grund für die Annahme, dass dieser Umstand Ursache oder Wirkung dieses Phänomens ist.**

Beispiel: Bob und Rob haben sich gleichzeitig zwei völlig baugleiche Computer gekauft, die sie seitdem immer gleichzeitig und auf die gleiche Weise verwenden. Nur Bob gestern Cola in die Tastatur gekippt (C) Seitdem hat die Leertaste einen Wackelkontakt (P).

| Umstände | | | | | | Phänomen |
|---|---|---|---|---|---|---|
| A | B | C | D | E | F | P |
| A | B | | D | E | F | |

Natürlich ist auch bei der Methode der Differenzen der Schluss bei einer größeren Anzahl von Fällen besser gestützt:

| Umstände | | | | | | Phänomen |
|---|---|---|---|---|---|---|
| A | B | C | D | E | F | P |
| A | B | C | D | E | F | P |
| A | B | C | D | E | F | P |
| A | B | | D | E | F | |
| A | B | | D | E | F | |
| A | B | | D | E | F | |

### 529. Die Methode der Übereinstimmungen und Differenzen

Am besten kombiniert man Mill zufolge die beiden Methoden:

△ **Wenn zwei oder mehr Fälle eines untersuchten Phänomens nur einen Umstand gemeinsam haben, während die Fälle, bei denen das Phänomen nicht auftritt, nur die Abwesenheit desselben Umstandes gemeinsam haben, dann ist dies ein guter Grund für die Annahme, dass dieser Umstand Ursache oder Wirkung dieses Phänomens ist.**

### 530. Die Methode der Übereinstimmungen und Differenzen

Betrachten wir als Beispiel diesmal *alle* 10 Bewohner des Dorfes mit der unbekömmlichen Currywurst:

| Umstände | | | | | | Phänomen |
|---|---|---|---|---|---|---|
| A | | C | D | | F | P |
| A | B | C | | E | F | P |
| | B | C | D | E | F | P |
| A | B | C | | E | | P |
| A | | C | D | E | F | P |
| A | | | D | | F | |
| | B | | | | F | |
| | B | | D | E | F | |
| A | B | | | E | F | |
| A | | | D | E | F | |

<!-- p. 223 | pdf 231 -->

### 531. Die Grenzen von Mills Methoden

Beachten Sie, dass Mills Methoden keinen *zweifelsfreien* Schluss auf ein Kausalurteil zulässt.

Stellen Sie sich vor, dass Sie mit Hilfe der Methode der Übereinstimmungen und Differenzen festgestellt haben, dass C immer dann und nur dann auftritt, wenn P auch auftritt. Das könnte noch immer verschiedene Gründe haben:

- C könnte P verursachen.

  $$C \rightsquigarrow P$$

  > Z.B.: Das Currywurst-Essen könnte eine Ursache der Vergiftungserscheinungen sein.

- P könnte C verursachen.

  $$P \rightsquigarrow C$$

  > Z.B.: Die Vergiftungserscheinungen könnten einen Heißhunger auf Currywurst auslösen.

- Es könnte einen verborgenen Faktor G geben, der sowohl P als auch C verursacht.

  > [Abbildung: „G“ mit zwei geschwungenen, wellenförmigen Pfeilen (⤳) nach rechts; der obere Pfeil zeigt zu „C“, der untere zu „P“ — G verursacht sowohl C als auch P.]

  > Z.B.: Die Vergiftungserscheinungen könnten Folge einer Virusinfektion sein, die zugleich Heißhunger auf Currywurst auslöst.
  >
  > Diese Möglichkeit weist auf einen wichtigen begrenzenden Faktor der Millschen Methoden hin: Die gesuchte Ursache muss zunächst einmal überhaupt zu den von uns in Betracht genommenen Umständen gehören.

- Es könnte sich (gerade bei einer geringen Zahl von Beobachtungen) um Zufall handeln.

### 532. Mills Methoden

Mill formuliert noch zwei weitere Methoden, die hier der Vollständigkeit halber genannt sein sollen:

Die Methode der Residuen:

Wenn ein Teil eines Phänomens durch einen Teil der bekannten Umstände kausal erklärt werden kann, dann ist dies ein guter Grund für die Annahme, dass unter den übrigen Aspekten die Ursachen für die übrigen Aspekte des Phänomens zu finden sind.

Die Methode der begleitenden Variation

Wenn die Ausprägung eines Phänomens mit der eines anderen wächst und abnimmt, dann ist dies ein guter Grund für die Annahme, dass eines der Phänomene Ursache des anderen ist.

Insgesamt zeigen die Millschen Methoden auch, warum die *Methode des Experiments* für die Suche nach Kausalbeziehungen so wichtig ist: Es ist wichtig, Phänomene unter vielen verschiedenen Kombinationen von Umständen zu beobachten.

<!-- p. 224 | pdf 232 -->

### 533. Kausalität und Statistik

Viele allgemeine Kausalaussagen sind nicht deterministischer, sondern *statistischer* Natur:

Rauchen verursacht Krebs.

Statistische Kausalaussagen lassen sich so verstehen, dass sie behaupten, ein bestimmter Typ von Ereignissen würde oft oder meistens bestimmte Wirkungen hervorrufen.

Zur Ermittlung statistischer Kausalaussagen sind die Millschen Methoden nur bedingt geeignet.

### 534. Korrelationen

Stattdessen muss man bei der Suche nach statistischen Kausalaussagen in möglichst großen und repräsentativen Beobachtungspopulationen nach statistischen *Korrelationen* suchen.

(Betrachten Sie im Folgenden die Wahrscheinlichkeitsangaben als Angaben relativer Häufigkeit.)

Dass zwei Merkmale A und B *korreliert* sind, soll heißen, dass

$$p(A/B) \neq p(A)$$

gilt.

Im Falle $p(A/B) > p(A)$ nennt man A und B auch positiv korreliert.

### 535. Korrelation und Kausalität

Dass A und B positiv korreliert sind, lässt allerdings noch nicht den Schluss zu, dass A (oft oder auch nur manchmal) B verursacht.

Es könnte auch sein

- dass B A verursacht
- oder dass ein weiterer Faktor sowohl A als auch B verursacht.

Die zeitliche Abfolge von Ursachen und Wirkungen ist in praktischen Kontexten oft (wenn auch nicht immer) hilfreich bei der Vermeidung des ersten Fehlers. Gegen den zweiten Fehler hilft ein statistischer Kniff.

### 536. Abschirmende Faktoren

Annahme:

A und B sind korreliert, $p(A/B) \neq p(A)$ – aber dies liegt nicht an einer kausalen Beeinflussung zwischen diesen beiden Faktoren, sondern an einem dritten Faktor X, der beide beeinflusst.

> Z.B.: A = Rauchen, B = Krebs, C = unbekanntes Gen, das sowohl Rauchen als auch Krebs begünstigt.

Dann müsste bei Berücksichtigung dieses Faktors die Korrelation verschwinden:

$$p(A/B \wedge X) = p(A/X).$$

<!-- p. 225 | pdf 233 -->

Definition: *X schirmt A gegen B ab* gdw.

$$p(A/B \wedge X) = p(A/X)$$

Bei der Untersuchung von statistischen Kausalaussagen muss man deshalb darauf achten, dass es keine Faktoren gibt, die die korrelierten Merkmale gegeneinander abschirmen.

> Dies wird manchmal als „No-screening-off-Bedingung“ bezeichnet und geht auf den Wissenschaftstheoretiker Hans Reichenbach zurück.

### 537. Korrelation und Abschirmung: Beispiel

Fiktives Beispiel zur Abschirmung:

Bei einer statistischen Untersuchung stellt sich heraus, dass Lungenkrebs unter Kaffeetrinkern häufiger auftritt als in der Gesamtbevölkerung:

$$p(L/K) > p(L).$$

Bedeutet das, dass Kaffeetrinken Lungenkrebs verursacht?

Nicht, wenn es einen dritten, „abschirmenden“ Faktor gibt. Im Beispiel sei dies das Rauchen:

$$p(L/K \wedge R) = p(L/R)$$

*Das Merkmal Rauchen schirmt das Merkmal Lungenkrebs gegen das Merkmal Kaffeetrinken ab.*

Anschaulich gesprochen bedeutet dies, dass innerhalb der Gruppen der Raucher und der Nichtraucher Kaffeetrinken und Lungenkrebs nicht korreliert sind. Dass es trotzdem zu der Korrelation in der Gesamtbevölkerung kommt, könnte z.B. einfach daran liegen, dass Raucher eher Kaffee trinken als Nichtraucher.

### 538. Kausalität und Statistik

Beachten Sie auch die folgenden Komplikationen:

- Selbst wenn Sie keinen abschirmenden Faktor gefunden haben, gibt es noch Irrtumsmöglichkeiten. Denn vielleicht findet sich der tatsächlich abschirmenden Faktor einfach nicht unter den Parametern, die Sie untersucht haben.

- Die Nichtabschirmungsbedingung alleine genügt nicht, kausale Beziehungen dort richtig zu unterscheiden, wo die *Abfolge der Faktoren* nicht schon aus anderen Sachverhalten klar wird.

  Z.B.: Gegeben

  > [Abbildung: Drei Punkte A — C — B, durch durchgezogene Linien verbunden (A–C und C–B); darunter, von A nach B, ein gestrichelter Bogen, der A direkt mit B verbindet, unter C hindurch. Legende daneben: durchgezogene Linie „—“ = unabgeschirmte Korrelation; gestrichelte Linie „- -“ = abgeschirmte Korrelation.]

  bestehen noch folgende Möglichkeiten:

  $$A \leftarrow C \rightarrow B \quad \text{oder} \quad A \rightarrow C \rightarrow B \quad \text{oder} \quad A \leftarrow C \leftarrow B$$

  > Statistiker versuchen, mit Hilfe zusätzlicher Bedingungen aus den probabilistischen Korrelationen kausale Strukturen herauszufiltern. Die Grundidee ist dabei immer, über z.B. A, B und C hinaus die gesamte weitere Struktur von Faktoren und deren Interdependenzen zu betrachten.

<!-- p. 226 | pdf 234 -->

## Anhang 2. Der Schluss auf die beste Erklärung

### 539. Einige Beispiele

$$\begin{array}{l} \text{Das Licht des Sterns X enthält Spektrallinien, die gegenüber den Spektrallinien von H und He ein wenig in} \\ \text{Richtung der längeren Wellenlängen verschoben sind.} \\ \text{Wenn Stern X sich von uns weg bewegt, würde dies die Verschiebung exakt erklären.} \\ \text{Keine andere Erklärung für die Verschiebung ist erkennbar.} \\ \hline \text{Stern X bewegt sich von uns weg.} \end{array}$$

$$\begin{array}{l} \text{Die Hypothese der natürlichen Selektion erklärt die Verteilung der verschiedenen Fossilien in den} \\ \text{verschiedenen Schichten und Regionen der Erde, die morphologischen Gemeinsamkeiten und Unterschiede} \\ \text{der Tiere und Pflanzen, die geographische Verteilung der Arten und ihre Angepasstheit an ihre jeweiligen} \\ \text{Umwelten.} \\ \text{Keine andere Hypothese kann all diese Dinge erklären.} \\ \hline \text{Die verschiedenen Arten sind durch natürliche Selektion entstanden.} \end{array}$$

$$\begin{array}{l} \text{Dass Moriarty der Mörder war, würde seine Fingerabdrücke auf der Tatwaffe und die Blutspuren des Opfers} \\ \text{auf seiner Jacke erklären.} \\ \text{Unter der Annahme, einer der anderen Tatverdächtigen hätte den Mord begangen, lassen sich diese Spuren} \\ \text{nicht erklären.} \\ \hline \text{Moriarty muss der Mörder gewesen sein.} \end{array}$$

### 540. Der Schluss auf die beste Erklärung

Alle drei Fälle sind Beispiele für Schlüsse auf die beste Erklärung.

(Charles Sanders Peirce: „Abduktion“.)

Zwei wichtige Punkte:

- Schluss auf die beste Erklärung ≠ Schluss auf irgendeine Erklärung! – Es ist wichtig, dass die Erklärung besser ist als jede andere verfügbare.

- Die Erklärung muss auch eine *gute* Erklärung sein. – Es genügt nicht, dass alle anderen verfügbaren Erklärungen (noch) schlechter sind.

  > Im Alltag finden wir viele Schlüsse, die wir als Schlüsse auf die beste Erklärung verstehen können. Z.B.:
  >
  > Wenn wir Kratzer und Löcher an den Fußleisten, kleine schwarze Hinterlassenschaften in der Zimmerecke und winzige Nagetierfußspuren in der Butter finden, dann schließen wir, dass eine Maus im Haus ist.
  >
  > Wenn in einem Zimmer (aber nicht im ganzen Haus) mehrere Lampen und Elektrogeräte auf einmal ausgehen, dann schließen wir, dass eine Sicherung durchgebrannt ist.

<!-- p. 227 | pdf 235 -->

### 541. Was ist eine gute Erklärung?

Möglichkeit:

„Beste Erklärung“ heißt einfach „wahrscheinlichste Erklärung“.

Dagegen:

- Wenn man schon wissen müsste, dass A die *wahrscheinlichste* Erklärung ist, wäre der Schluss auf die beste Erklärung kein interessantes Schlussprinzip mehr.

- Schluss auf die beste Erklärung scheint auch zu funktionieren, wo Wahrscheinlichkeitserwägungen im Hinblick auf konkurrierende Hypothesen kaum in Anschlag gebracht werden können (vgl. Darwin-Beispiel).

Daher:

Die beste Erklärung ist diejenige, die im größten Maße unser Verständnis des Phänomens fördert.

(Peter Lipton: „*inference to the loveliest explanation*“
statt „*inference to the liekeliest explanation*“<!-- sic -->)

### 542. Explanatorische Werte

Umfang

- Bessere Erklärungen erklären mehr verschiedene Typen von Phänomenen.

Präzision

- Bessere Erklärungen erklären genauer.

Kausaler Informationsgehalt

- Bessere Erklärungen liefern mehr Informationen über die kausalen Mechanismen, die einem Phänomen zugrunde liegen.

Vereinheitlichung

- Bessere Erklärungen fassen verschiedene Phänomene in ein einheitliches Prinzip zusammen.

Einfachheit

- Bessere Erklärungen bieten ein einfacheres Bild der Welt.

  > Diese Kriterien werden auch manchmal als „explanatory virtues“ („explanatorische Tugenden“) bezeichnet.

Bemerkungen:

- Bei *allen* diesen explanatorischen Werten hat sich gezeigt, dass es sehr schwierig ist, sie genau zu analysieren.
- In verschiedenen Kontexten kann es ganz unterschiedlich sein, welcher explanatorische Wert jeweils entscheidend dafür ist, was eine gute Erklärung ist.

<!-- p. 228 | pdf 236 -->

### 543. Schluss auf die beste Erklärung – ein legitimes Konzept? (1)

(1) Ist der Schluss auf die beste Erklärung wirklich ein *eigenständiges* Schlussprinzip?

Insbesondere: Läuft der Schluss auf die beste Erklärung nicht auf ein *diagnostisches induktives Argument* hinaus (d.h. eine Anwendung der Bayesschen Regel)?

Beispiel:

$$\begin{array}{l} \text{Dass Moriarty der Mörder war, würde seine Fingerabdrücke auf der Tatwaffe und die Blutspuren des Opfers} \\ \text{auf seiner Jacke erklären.} \\ \text{Unter der Annahme, einer der anderen Tatverdächtigen hätte den Mord begangen, lassen sich diese Spuren} \\ \text{nicht erklären.} \\ \hline \text{Moriarty muss der Mörder gewesen sein.} \end{array}$$

M ≡ Moriarty war's.

B ≡ Moriartys Fingerabdrücke sind auf der Tatwaffe und Blut des Opfers ist auf seiner Jacke.

$$p(M/B) = \dfrac{1}{1 + \dfrac{p(B/\neg M)\,p(\neg M)}{p(B/M)\,p(M)}}.$$

> Die Frage, ob sich jeder Schluss auf die beste Erklärung so auf Wahrscheinlichkeitserwägungen reduzieren lässt, läuft letztlich auf die Frage hinaus, in welchen Fällen solche Wahrscheinlichkeitserwägungen überhaupt einschlägig sind. Darüber herrscht in der Wissenschaftstheorie wenig Einigkeit. Bedenken Sie dazu nochmals die obigen Beispielargumente zur natürlichen Selektion und zur Rotverschiebung. Um diese Argumente als diagnostische induktive Argumente zu rekonstruieren, müsste man unterstellen, dass dabei u.a. die folgenden Wahrscheinlichkeiten berechnet werden:
>
> die unbedingte Wahrscheinlichkeit, dass sich der Stern von uns weg bewegt;
>
> die bedingte Wahrscheinlichkeit, dass die raumzeitliche Verteilung der Fossilien und der lebenden Arten, ihre morphologischen Gemeinsamkeiten und Unterschiede und ihre Angepasstheit an ihre jeweiligen Umwelten genau so sind, wie sie sind, gegeben, dass die Hypothese der natürlichen Selektion *nicht* zutrifft.
>
> Da die Frage (1) nicht klar beantwortet ist, lässt sich auch nicht klar entscheiden, ob der Schluss auf die beste Erklärung (wie Peirces Bezeichnung „Abduktion“ nahelegt) eine dritte Schlussweise neben Deduktion und Induktion ist, oder nur eine besondere Form von Induktion.

### 544. Schluss auf die beste Erklärung – ein legitimes Konzept? (2)

(2) Ist der Schluss auf die beste Erklärung ein *gutes* Schlussprinzip?

Warum sollten explanatorische Werte (Umfang, Präzision, kausaler Informationsgehalt, Vereinheitlichung, Einfachheit) auch für die Wahrheit der Schlussfolgerung sprechen?

Verteidiger des Schlusses auf die beste Erklärung führen in Hinblick auf (2) gerne die *Meta-Abduktion* an:

Dass Abduktion ein gültiges Schlussprinzip ist, ist die beste Erklärung für den großen Erfolg der abduktiv vorgehenden Wissenschaften.

<!-- p. 229 | pdf 237 -->

> Natürlich ist diese Verteidigung des abduktiven Schließens denselben Zirkularitätsvorwürfen ausgesetzt wie die induktive Begründung des induktiven Schließens. Man könnte allerdings diese Übereinstimmung umgekehrt zur Stützung des Schlusses auf die beste Erklärung wenden: Er ist auf die gleiche Weise und ebenso gut oder schlecht begründet wie die vertrauten Weisen des induktiven Schließens; und ebensowenig, wie uns das Induktionsproblem an der alltäglichen Zu(ver)lässigkeit und Unerlässlichkeit des induktiven Schließens zweifeln lässt, sollte es uns den Schluss auf die beste Erklärung in Frage stellen lassen. (Gilbert Harman ist sogar noch weiter gegangen und hat behauptet, dass auch gewöhnliche [enumerative] Induktionsschlüsse in Wirklichkeit Schlüsse auf die beste Erklärung sind.)
>
> Man kann auch ganz anders an die Sache herangehen und stattdessen mehr zu den einzelnen explanatorischen Werten zu sagen versuchen und erläutern, warum es tatsächlich die Wahrheit einer Schlussfolgerung stützt, wenn sie z.B. großen Umfang und große Präzision bei Erklärungen ermöglicht. Allerdings unterminieren solche Unterfangen, etwa wenn sie sich auf Wahrscheinlichkeitsüberlegungen stützen, wieder den Anspruch, dass der Schluss auf die beste Erklärung ein *eigenständiges* Schlussprinzip ist.
>
> Auch diese zweite Frage hinsichtlich des Status der Abduktion bleibt deshalb insgesamt sehr umstritten.

## Anhang 3. Der Sequenzkalkül

### 545. Formale Beweisbarkeit, Ableitbarkeit

In dieser Vorlesung ist mit dem Wahrheitsbaumverfahren bereits ein Verfahren behandelt worden, das es erlaubt, logische Wahrheiten und Folgerungsbeziehungen mit Hilfe eindeutiger Regeln nachzuweisen, für deren Anwendung ausschließlich die gestaltliche Erscheinungsform der betreffenden Sätze berücksichtigt werden muss.

Ein solches System von Regeln bezeichnet man allgemein als Ableitungssystem. Wenn sich die Folgerung $\varphi \vDash \psi$ (bzw. die logische Wahrheit $\vDash \chi$) mit Hilfe eines solchen Systems nachweisen lässt, sagt man auch dass $\psi$ aus $\varphi$ ableitbar ist (bzw. dass $\chi$ ableitbar ist). Formal schreibt man das: $\varphi \vdash \psi$ (bzw. $\vdash \chi$).

Z.B.:

$$A \wedge B \vDash A$$

… heißt: Aus „$A \wedge B$“ folgt logisch „$A$“. Das heißt: Jede Interpretation der nichtlogischen Zeichen, hinsichtlich derer „$A \wedge B$“ wahr ist, macht auch „$A$“ zu einem wahren Satz.

$$A \wedge B \vdash A$$

… heißt: Aus „$A \wedge B$“ ist „$A$“ ableitbar: Das heißt: Hinsichtlich eines bestimmten Systems von syntaktischen Beweisregeln lässt sich von „$A \wedge B$“ zu „$A$“ gelangen.

> Es gibt immer mehrere Möglichkeiten, die Logik einer Sprache mit Hilfe eines Kalküls zu formalisieren. Deshalb müsste man anstelle von „Ableitbarkeit“ strenggenommen immer „Ableitbarkeit im So-und-so-Kalkül“ sagen und anstelle von „$A \wedge A \vdash A$“ beispielsweise „$A \wedge A \vdash_{S} A$“. In diesem Anhang geht es im Folgenden nur um einen bestimmten Kalkül, weswegen wir das Subskript ohne Gefahr von Missverständnissen weglassen können.

Als Alternative zum Wahrheitsbaumverfahren wird auf den folgenden Seiten knapp ein formal sehr eleganter Kalkül eingeführt.

<!-- p. 230 | pdf 238 -->

### 546. Der Sequenzkalkül

Dieser Kalkül gilt für die Sprache AL ebenso wie für PL-Sprachen. Wir beschäftigen uns zunächst mit den aussagenlogischen Regeln und fügen später die prädikatenlogischen hinzu (mit denen man im Hinblick auf die Sprache AL noch nichts anfangen kann).

Unser Kalkül heißt *Sequenzkalkül*. Er ist sehr eng verwandt mit einem sehr traditionsreichen Ableitungssystem namens *Kalkül des natürlichen Schließens*. Dieses wiederum geht, ebenso wie das Wahrheitsbaumverfahren ursprünglich auf den Logiker Gerhard Gentzen zurück.

> Ich orientiere mich an der sehr übersichtlichen Darstellung des Sequenzkalküls bei Arnold Oberschelp 1997, §§ 23-27. Eine ausführliche (meta-)mathematische Behandlung findet er in Ebbinghaus u.a. 1996, insb. Kap. IV. Eine sehr gründliche Darstellung des natürlichen Schließens in der traditionellen Form des Kalküls des natürlichen Schließens gibt es bei Essler 1996, Kap. III. Zum genauen Verhältnis zwischen Sequenzkalkül, Kalkül des natürlichen Schließens und Wahrheitsbäumen siehe Bostock 1997, Kap. 6 und 7, insb. Abschnitte 7.2 u. 7.3.

### 547. Beweiszeilen

Jeder formale Beweis im Sequenzkalkül besteht aus einer bestimmten Abfolge von Beweiszeilen, die die folgende Form haben:

$$\Sigma \vdash \varphi$$

Dabei ist $\Sigma$ eine Menge von Sätzen (die „Annahmen“ der Beweiszeile) und $\varphi$ (die „Behauptung“ der Beweiszeile) ein einzelner Satz. Wir werden die Annahmemenge etwas lax als mit Kommata getrennte Aufzählung hinschreiben. Prinzipiell können im Sequenzkalkül auch Beweiszeilen auftreten, in denen $\Sigma$ leer ist. Die schreiben wir dann so:

$$\vdash \varphi$$

Einen Ausdruck der Form $\Sigma \vdash \varphi$ nennen wir dann und nur dann *beweisbar im Sequenzkalkül* oder kurz *beweisbar*, wenn es einen nach den Regeln des Sequenzkalküls aufgebauten Beweis gibt, der $\Sigma \vdash \varphi$ als letzte Beweiszeile enthält.

### 548. Axiome

*Axiome* nennen wir im Sequenzkalkül solche Regeln, die uns erlauben, bestimmte Beweiszeilen ohne jede weitere Voraussetzung (insbesondere ohne Rücksicht auf die vorhergehenden Beweiszeilen) in jedem Beweis hinzuschreiben.

> N.B.: Diese Verwendung des Wortes „Axiom“ weicht ein wenig von der Verwendung in der Mathematik und in andersgearteten logischen Kalkülen ab.

Das wichtigste Axiom ist das *Annahmenaxiom*. Es besagt, dass man in jedem Beweis an beliebiger Stelle eine Zeile aufnehmen darf, bei der die Annahmenmenge vor dem Ableitungszeichen einzig aus der Behauptung hinter dem Ableitungszeichen besteht.

Das Annahmenaxiom können wir auch kurz und übersichtlich so charakterisieren:

$$\text{A}\quad \dfrac{\cdot}{\varphi \vdash \varphi}$$

<!-- p. 231 | pdf 239 -->

> Dabei bedeutet der Punkt über dem Strich, dass es sich um eine Regel handelt, die keine bestimmten vorangehenden Beweiszeilen zur Voraussetzung hat, „A“ ist die Kurzbezeichnung für „Annahmenaxiom“, und $\varphi$ steht für einen beliebigen Satz.

### 549. Regeln mit Prämissenzeilen

Die meisten Regeln des Sequenzkalküls setzen aber für das Schreiben einer neuen Beweiszeile voraus, dass vorher bereits bestimmte Beweiszeilen (Prämissenzeilen) im Beweis enthalten sind.

Zum Beispiel werden wir die sogenannte „Konjunktions-Beseitigung“ anwenden, die besagt, dass man eine neue Zeile der Form

$$\Sigma \vdash \varphi$$

schreiben darf, wenn zuvor im Beweis bereits dieselbe Annahmenmenge $\Sigma$ und dieselbe Behauptung $\varphi$ in einer Zeile der Form

$$\Sigma \vdash \varphi \wedge \psi$$

aufgetreten ist. Diese Regel charakterisieren wir kurz so:

$$\text{KB}\quad \dfrac{\Sigma \vdash \varphi \wedge \psi}{\Sigma \vdash \varphi}$$

### 550. Beispiel: Konjunktionsbeseitigung

Anschaulich gesprochen bedeutet die Regel KB, dass, wenn

$$\Sigma \vdash \varphi \wedge \psi$$

schon bewiesen ist, auch

$$\Sigma \vdash \varphi$$

als bewiesen gelten darf.

Wir erweitern die Regel noch zu

$$\text{KB}\quad \dfrac{\Sigma \vdash \varphi \wedge \psi}{\Sigma \vdash \varphi} \quad \text{oder} \quad \dfrac{\Sigma \vdash \varphi \wedge \psi}{\Sigma \vdash \psi}$$

damit klar ist, dass das vordere oder das hintere Konjunktionsglied der Behauptung einer Beweiszeile in einer neuen Beweiszeile fallengelassen werden kann.

<!-- p. 232 | pdf 240 -->

### 551. Beweis: Beispiel

Mit den beiden uns bekannten Regeln bauen wir jetzt unseren ersten formalen Beweis auf. Wir beweisen:

$$A \wedge B \vdash A$$

Beweis:

$$A \wedge B \vdash A \wedge B$$

$$A \wedge B \vdash A$$

Die erste Beweiszeile dürfen wir nach dem Annahmenaxiom A hinschreiben. Die zweite Zeile dürfen wir nach der Regel KB hinschreiben, wobei uns die erste Zeile als Prämissenzeile dient. Wir werden unseren Beweisen zur Erläuterung Zeilennummern und die jeder Zeile zugrunde liegenden Regeln hinzufügen:

```text
1]   A ∧ B ⊢ A ∧ B          [A
2]   A ∧ B ⊢ A              [KB 1
```

> Dabei bedeutet die „1“ in der Angabe „KB 1“, dass die Zeile 1 es ist, die als Prämissenzeile die Anwendung der Regel KB mit dem Ergebnis $A \wedge B \vdash A$ erlaubt.

### 552. Korrektheit von Beweiszeilen und Regeln

Eine *Beweiszeile* $\Sigma \vdash \varphi$ heißt *korrekt*, wenn $\varphi$ aus $\Sigma$ logisch folgt, also wenn $\Sigma \vDash \varphi$.

Ein *Axiom* des Sequenzkalküls heißt *korrekt*, wenn es ausschließlich die Einführung korrekter Beweiszeilen erlaubt.

Eine *Regel mit Prämissenzeilen* des Sequenzkalküls heißt *korrekt*, wenn sie auf korrekte Prämissenzeilen angewendet ausschließlich korrekte neue Beweiszeilen liefert.

### 553. Korrektheit von Beweiszeilen und Regeln

Beispiel: Korrektheit der Regel KB

$$\text{KB}\quad \dfrac{\Sigma \vdash \varphi \wedge \psi}{\Sigma \vdash \varphi} \quad \text{oder} \quad \dfrac{\Sigma \vdash \varphi \wedge \psi}{\Sigma \vdash \psi}$$

Sei die Prämissenzeile $\Sigma \vdash \varphi \wedge \psi$ korrekt, d.h. $\Sigma \vDash \varphi \wedge \psi$. Dann ist hinsichtlich jeder Interpretation, hinsichtlich derer alle Sätze in $\Sigma$ wahr sind, auch $\varphi \wedge \psi$ wahr. Da $\varphi \wedge \psi$ nur wahr sein kann, wenn auch $\varphi$ und $\psi$ wahr sind, müssen auch diese beiden hinsichtlich jeder solchen Interpretation wahr sein. Es gilt deshalb sowohl $\Sigma \vDash \varphi$ als auch $\Sigma \vDash \psi$. Daher sind $\Sigma \vdash \varphi$ und $\Sigma \vdash \psi$ korrekte Beweiszeilen.

Das zeigt, dass KB von korrekten Prämissenzeilen immer zu korrekten neuen Beweiszeilen führen muss. Daher ist KB eine korrekte Regel.

> Natürlich sind alle Axiome und Regeln des Sequenzkalküls, wie wir sie hier einführen, korrekt, auch wenn wir dies im

<!-- p. 233 | pdf 241 -->

> Folgenden nicht mehr für jede einzelne Regel nachweisen werden. In Beweisen, die nach den Regeln des Sequenzkalküls aufgebaut sind, kommen deshalb nur korrekte Beweiszeilen vor.

### 554. Tautologieaxiom und Ex Contradictione Quodlibet

> Im Folgenden werden wir die übrigen aussagenlogischen Grundregeln des Sequenzkalküls nacheinander einführen (und anhand von Beispielen ihre Anwendung vorführen).

Tautologieaxiom

$$\text{TAU}\quad \dfrac{\cdot}{\vdash \varphi \vee \neg\varphi}$$

Ex Contradictione Quodlibet

$$\text{ECQ}\quad \dfrac{\cdot}{\varphi \wedge \neg\varphi \vdash \psi}$$

> Das Axiom ECQ besagt tatsächlich, dass man Beweiszeilen einführen darf, bei denen auf eine Annahme der Form $\varphi \wedge \neg\varphi$ eine beliebige Behauptung folgt. Auch dieses Axiom ist korrekt - Sie erinnern sich: Aus einem Widerspruch folgt jeder beliebige Satz.

### 555. Konjunktions-Einführung

Konjunktions-Einführung

$$\text{KE}\quad \dfrac{\begin{array}{c} \Sigma \vdash \varphi \\ \Pi \vdash \psi \end{array}}{\Sigma, \Pi \vdash \varphi \wedge \psi}$$

> Solche Schemata sind so zu verstehen, dass die Anwendung der Regel voraussetzt, dass *beide* Prämissenzeilen schon irgendwo an früherer Stelle im Beweis vorkommen müssen – *nicht* notwendigerweise in der angegebenen Reihenfolge.
>
> Zur Erläuterung / Erinnerung: „$\Sigma$“ und „$\Pi$“ können für beliebige Annahmenmengen stehen. Sie können also z.B. auch für dieselbe Annahmenmenge stehen. Eine oder beide Annahmenmengen können leer sein. Entscheidend ist: Die Annahmenmenge der neuen Beweiszeile beinhaltet die Annahmen der ersten *und* der zweiten Prämissenzeile zusammengenommen.

Anwendungsbeispiel: Beweis von

$$A \wedge B \vdash B \wedge A$$

```text
1]   A ∧ B ⊢ A ∧ B          [A
2]   A ∧ B ⊢ B              [KB 1
3]   A ∧ B ⊢ A              [KB 1
4]   A ∧ B ⊢ B ∧ A          [KE 2, 3
```

<!-- p. 234 | pdf 242 -->

### 556. Schnittregel

Eine sehr wichtige Regel ist die Schnittregel:

$$\text{S}\quad \dfrac{\begin{array}{c} \Sigma, \varphi \vdash \psi \\ \Pi \vdash \varphi \end{array}}{\Sigma, \Pi \vdash \psi}$$

Anwendungsbeispiel: Beweis von

$$A \wedge B, \neg A \vdash C$$

```text
1]   A ∧ B ⊢ A ∧ B              [A
2]   A ∧ B ⊢ A                  [KB 1
3]   ¬A ⊢ ¬A                    [A
4]   A ∧ B, ¬A ⊢ A ∧ ¬A         [KE 2, 3
5]   A ∧ ¬A ⊢ C                 [ECQ
6]   A ∧ B, ¬A ⊢ C              [S 4, 5
```

### 557. Vordere Adjunktions-Einführung

Vordere Adjunktions-Einführung

$$\text{VAE}\quad \dfrac{\begin{array}{c} \Sigma, \varphi \vdash \chi \\ \Pi, \psi \vdash \chi \end{array}}{\Sigma, \Pi, \varphi \vee \psi \vdash \chi}$$

Anwendungsbeispiel: Beweis von

$$(A \wedge B) \vee (A \wedge C) \vdash A$$

```text
1]   A ∧ B ⊢ A ∧ B              [A
2]   A ∧ B ⊢ A                  [KB 1
3]   A ∧ C ⊢ A ∧ C              [A
4]   A ∧ C ⊢ A                  [KB 3
5]   (A ∧ B) ∨ (A ∧ C) ⊢ A      [VAE 2, 4
```

### 558. Hintere Adjunktions-Einführung

Hintere Adjunktions-Einführung

<!-- p. 235 | pdf 243 -->

$$\text{HAE}\quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \varphi \vee \psi} \quad \text{oder} \quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \psi \vee \varphi}$$

Anwendungsbeispiel: Beweis von

$$A \wedge B \vdash A \vee B$$

```text
1]   A ∧ B ⊢ A ∧ B              [A
2]   A ∧ B ⊢ A                  [KB 1
3]   A ∧ B ⊢ A ∨ B              [HAE 2
```

### 559. Subjunktions-Einführung

Subjunktions-Einführung

$$\text{SE}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma \vdash \varphi \rightarrow \psi}$$

Anwendungsbeispiel: Beweis von

$$A \vdash B \rightarrow A$$

```text
1]   A ⊢ A                      [A
2]   B ⊢ B                      [B
3]   A, B ⊢ A ∧ B               [KE 1, 2
4]   A, B ⊢ A                   [KB 3
5]   A ⊢ B → A                  [SE 4
```
<!-- sic -->

### 560. Subjunktions-Beseitigung

Subjunktions-Beseitigung

$$\text{SB}\quad \dfrac{\Sigma \vdash \varphi \rightarrow \psi}{\Sigma, \varphi \vdash \psi}$$

Anwendungsbeispiel: Beweis von

$$A \rightarrow B, A \vdash B$$

```text
1]   A → B ⊢ A → B              [A
2]   A → B, A ⊢ B                [SB 1
```

<!-- p. 236 | pdf 244 -->

### 561. Bisubjunktions-Einführung

Bisubjunktions-Einführung

$$\text{BE}\quad \dfrac{\begin{array}{c} \Sigma, \varphi \vdash \psi \\ \Pi, \psi \vdash \varphi \end{array}}{\Sigma, \Pi \vdash \varphi \leftrightarrow \psi}$$

Anwendungsbeispiel: Beweis von

$$\vdash A \vee B \leftrightarrow B \vee A$$

```text
1]   A ⊢ A                          [A
2]   A ⊢ B ∨ A                      [HAE 1
3]   B ⊢ B                          [A
4]   B ⊢ B ∨ A                      [HAE 3
5]   A ∨ B ⊢ B ∨ A                  [VAE 2, 4
6]   A ⊢ A ∨ B                      [HAE 1
7]   B ⊢ A ∨ B                      [HAE 3
8]   B ∨ A ⊢ A ∨ B                  [VAE 6, 7
9]   ⊢ A ∨ B ↔ B ∨ A                [BE 5, 8
```

### 562. Bisubjunktions-Beseitigung

Bisubjunktions-Beseitigung

$$\text{BB}\quad \dfrac{\Sigma \vdash \varphi \leftrightarrow \psi}{\Sigma, \psi \vdash \varphi} \quad \text{oder} \quad \dfrac{\Sigma \vdash \varphi \leftrightarrow \psi}{\Sigma, \varphi \vdash \psi}$$

Anwendungsbeispiel: Beweis von

$$A \leftrightarrow B \vdash A \rightarrow B$$

```text
1]   A ↔ B ⊢ A ↔ B                  [A
2]   A ↔ B, A ⊢ B                   [BB 1
3]   A ↔ B ⊢ A → B                  [SE 2
```

### 563. Ableitbare Regeln

Die bis hierher eingeführten Regeln nennen wir die aussagenlogischen Grundregeln. Sie sind für aussagenlogische Beweise ausreichend. (Heißt: Jede aussagenlogische Folgerung ist mit Hilfe dieser Regeln beweisbar.)

<!-- p. 237 | pdf 245 -->

Aber das Beweisen mit Hilfe der Grundregeln kann sehr unpraktisch sein. Bestimmte umständliche Schrittfolgen muss man immer wieder ausführen. Zur Vereinfachung kann man deshalb ableitbare Regeln beweisen.

Ableitbare Regeln sind neue korrekte Regeln des Sequenzkalküls, deren Korrektheit sich allein mit Hilfe der Grundregeln beweisen lässt. Ableitbare Regeln fassen bestimmte Schrittfolgen von Grundregeln zusammen. Das bedeutet: Alles, was man mit ableitbaren Regeln beweisen kann, könnte man im Prinzip auch allein mit den Grundregeln beweisen.

Zur Unterscheidung von den Grundregeln bezeichnen wir ableitbare Regeln mit Kleinbuchstaben.

### 564. Fallunterscheidung

Fallunterscheidung

$$\text{fu}\quad \dfrac{\begin{array}{c} \Sigma, \varphi \vdash \psi \\ \Pi, \neg\varphi \vdash \psi \end{array}}{\Sigma, \Pi \vdash \psi}$$

Um eine ableitbare Regel zu beweisen, müssen wir zeigen:

Unter der Voraussetzung, dass die Prämissenzeilen bereits als korrekte Beweiszeilen feststehen, ist die neue Beweiszeile (in diesem Fall „$\Sigma, \Pi \vdash \psi$“) mit Hilfe von Grundregeln (und ggf. bereits bewiesenen ableitbaren Regeln) ableitbar.

Zu zeigen:

$$\text{fu}\quad \dfrac{\begin{array}{c} \Sigma, \varphi \vdash \psi \\ \Pi, \neg\varphi \vdash \psi \end{array}}{\Sigma, \Pi \vdash \psi}$$

Beweis:

```text
1]   Σ, φ ⊢ ψ               [nach Voraussetzung
2]   Π, ¬φ ⊢ ψ              [n.V.
3]   Σ, Π, φ ∨ ¬φ ⊢ ψ       [VAE 1, 2
4]   ⊢ φ ∨ ¬φ               [TAU
5]   Σ, Π ⊢ ψ               [S 3, 4
```

### 565. Fallunterscheidung: Anwendungsbeispiel

Zu zeigen:

$$A \rightarrow B, \neg A \rightarrow B \vdash B$$

Beweis:

```text
1]   A → B ⊢ A → B                    [A
2]   A → B, A ⊢ B                     [SB 1
3]   ¬A → B ⊢ ¬A → B                  [A
4]   ¬A → B, ¬A ⊢ B                   [SB 3
5]   A → B, ¬A → B ⊢ B                [fu 2, 4
```

<!-- p. 238 | pdf 246 -->

### 566. Widerspruchsregel

Widerspruchsregel

$$\text{wid}\quad \dfrac{\begin{array}{c} \Sigma \vdash \varphi \\ \Pi \vdash \neg\varphi \end{array}}{\Sigma, \Pi \vdash \psi}$$

Beweis:

```text
1]   Σ ⊢ φ                  [n.V.
2]   Π ⊢ ¬φ                 [n.V.
3]   Σ, Π ⊢ φ ∧ ¬φ          [KE 1, 2
4]   φ ∧ ¬φ ⊢ ψ             [ECQ
5]   Σ, Π ⊢ ψ               [S 3, 4
```

### 567. Kontrapositionsregeln

Kontrapositionsregeln

$$\text{kp}_{1}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma, \neg\psi \vdash \neg\varphi} \qquad \text{kp}_{2}\quad \dfrac{\Sigma, \neg\varphi \vdash \psi}{\Sigma, \neg\psi \vdash \varphi}$$

$$\text{kp}_{3}\quad \dfrac{\Sigma, \varphi \vdash \neg\psi}{\Sigma, \psi \vdash \neg\varphi} \qquad \text{kp}_{4}\quad \dfrac{\Sigma, \neg\varphi \vdash \neg\psi}{\Sigma, \psi \vdash \varphi}$$

Beim Beweis dieser ableitbaren Regeln werden wir uns die eben bewiesenen Widerspruchs- und Fallunterscheidungsregeln zunutze machen.

Zu zeigen:

$$\text{kp}_{1}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma, \neg\psi \vdash \neg\varphi}$$

```text
1]   Σ, φ ⊢ ψ                [n.V.
2]   ¬ψ ⊢ ¬ψ                 [A
3]   Σ, ¬ψ, φ ⊢ ¬φ           [wid 1, 2
4]   ¬φ ⊢ ¬φ                 [A
5]   Σ, ¬ψ ⊢ ¬φ              [fu 3, 4
```

<!-- p. 239 | pdf 247 -->

Zu zeigen:

$$\text{kp}_{2}\quad \dfrac{\Sigma, \neg\varphi \vdash \psi}{\Sigma, \neg\psi \vdash \varphi}$$

```text
1]   Σ, ¬φ ⊢ ψ                      [n.V.
2]   ¬ψ ⊢ ¬ψ                        [A
3]   Σ, ¬ψ, ¬φ ⊢ φ                  [wid 1, 2
4]   φ ⊢ φ                          [A
5]   Σ, ¬ψ ⊢ φ                      [fu 3, 4
```

> (Beweis von kp₃ und kp₄ als Übung.)

In der Anwendung brauchen wir uns die Nummern der vier Kontrapositionsregeln nicht zu merken; wir schreiben einfach „kp“, wenn wir eine der vier Regeln anwenden.

### 568. Kontrapositionsregeln: Anwendungsbeispiel

Zu zeigen:

$$\neg C \vee \neg D \vdash \neg(C \wedge D)$$

Beweis:

```text
1]   C ∧ D ⊢ C ∧ D                                  [A
2]   C ∧ D ⊢ C                                      [KB 1
3]   ¬C ⊢ ¬(C ∧ D)                                  [kp 2
4]   C ∧ D ⊢ D                                      [KB 1
5]   ¬D ⊢ ¬(C ∧ D)                                  [kp 4
6]   ¬C ∨ ¬D ⊢ ¬(C ∧ D)                             [VAE 3, 5
```

### 569. Annahmenverbindung

Annahmenverbindung

$$\text{av}\quad \dfrac{\Sigma, \varphi, \psi \vdash \chi}{\Sigma, \varphi \wedge \psi \vdash \chi}$$

Beweis:

<!-- p. 240 | pdf 248 -->

```text
1]   Σ, φ, ψ ⊢ χ                [n.V.
2]   φ ∧ ψ ⊢ φ ∧ ψ              [A
3]   φ ∧ ψ ⊢ φ                  [KB 2
4]   Σ, φ ∧ ψ, ψ ⊢ χ            [S 1, 3
5]   φ ∧ ψ ⊢ ψ                  [KB 2
4]   Σ, φ ∧ ψ ⊢ χ                [S 4, 5
```
<!-- sic -->

### 570. Annahmenzerlegung

Annahmenzerlegung

$$\text{az}\quad \dfrac{\Sigma, \varphi \wedge \psi \vdash \chi}{\Sigma, \varphi, \psi \vdash \chi}$$

Beweis:

```text
1]   Σ, φ ∧ ψ ⊢ χ               [n.V.
2]   φ ⊢ φ                       [A
3]   ψ ⊢ ψ                       [A
4]   φ, ψ ⊢ φ ∧ ψ                [KE 2, 3
5]   Σ, φ, ψ ⊢ χ                 [S
```
<!-- sic -->

### 571. Anwendungsbeispiel

Zu zeigen:

$$\neg B, A \vee B \vdash A$$

Beweis:

```text
1]   B ∧ ¬B ⊢ A                  [ECQ
2]   B, ¬B ⊢ A                   [az 1
3]   A ⊢ A                       [A
4]   ¬B, A ∨ B ⊢ A               [VAE 2, 3
```

### 572. Verdünnungsregel

Verdünnungsregel

$$\text{vd}\quad \dfrac{\Sigma \vdash \varphi}{\Pi \vdash \varphi}\ \text{, wenn } \Sigma \subseteq \Pi$$

<!-- p. 241 | pdf 249 -->

Die Regel besagt, dass man die Menge der Annahmen in einer Beweiszeile beliebig vergrößern darf. Wenn ein Satz $\varphi$ aus der Annahmenmenge $\Sigma$ ableitbar ist, dann ist er auch aus jeder größeren Menge ableitbar, die $\Sigma$ vollständig enthält.

Um die Korrektheit der Verdünnungsregel abzuleiten, zeigen wir, dass zu einer gegebenen Annahmenmenge ein beliebiger einzelner Satz hinzugefügt werden kann:

```text
1]   Σ ⊢ φ                   [n.V.
2]   χ ⊢ χ                   [A
3]   Σ, χ ⊢ φ ∧ χ            [KE 2
4]   Σ, χ ⊢ φ                [KB 3
```

Daraus, dass man diesen Vorgang beliebig oft wiederholen kann, ergibt sich die Korrektheit der Verdünnungsregel.

### 573. Modus Ponens

Modus Ponens

$$\text{mp}\quad \dfrac{\begin{array}{c} \Sigma \vdash \varphi \rightarrow \psi \\ \Pi \vdash \varphi \end{array}}{\Sigma, \Pi \vdash \psi}$$

Beweis:

```text
1]   Σ ⊢ φ → ψ                 [n.V.]
2]   Π ⊢ φ                     [n.V.]
3]   Σ, φ ⊢ ψ                  [SB 1
4]   Σ, Π ⊢ ψ                  [S 2, 3
```
<!-- sic -->

### 574. Modus Tollens

Modus Tollens

$$\text{mt}\quad \dfrac{\begin{array}{c} \Sigma \vdash \varphi \rightarrow \psi \\ \Pi \vdash \neg\psi \end{array}}{\Sigma, \Pi \vdash \neg\varphi}$$

Beweis:

```text
1]   Σ ⊢ φ → ψ                 [n.V.
2]   Π ⊢ ¬ψ                    [n.V.
3]   Σ, φ ⊢ ψ                  [SB 1
4]   Σ, ¬ψ ⊢ ¬φ                [kp 3
5]   Σ, Π ⊢ ¬φ                 [S 2, 4
```

<!-- p. 242 | pdf 250 -->

### 575. Kettenschluss

Kettenschluss

$$\text{ks}\quad \dfrac{\begin{array}{c} \Sigma \vdash \varphi \rightarrow \psi \\ \Pi \vdash \psi \rightarrow \chi \end{array}}{\Sigma, \Pi \vdash \varphi \rightarrow \chi}$$

Beweis:

```text
1]   Σ ⊢ φ → ψ               [n.V.
2]   Π ⊢ ψ → χ               [n.V.
3]   Σ, φ ⊢ ψ                [SB 1
4]   Π, ψ ⊢ χ                [SB 2
5]   Σ, Π, φ ⊢ χ              [S 3, 4
6]   Σ, Π ⊢ φ → χ             [SE 5
```

### 576. Anwendungsbeispiele

Zu zeigen:

$$\neg B, A \rightarrow B \vdash \neg A$$

Beweis:

```text
1]   ¬B ⊢ ¬B                 [A
2]   A → B ⊢ A → B            [A
3]   A → B, ¬B ⊢ ¬A           [mt
```

### 577. Anwendungsbeispiele

Zu zeigen:

$$A \rightarrow B \vdash \neg A \vee B$$

Beweis:

```text
1]   A ⊢ A                            [A
2]   A → B ⊢ A → B                    [A
3]   A → B, A ⊢ B                     [mp 1, 2
4]   A → B, A ⊢ ¬A ∨ B                [HAE 3
5]   ¬A ⊢ ¬A                          [A
6]   ¬A ⊢ ¬A ∨ B                      [HAE 5
7]   A → B ⊢ ¬A ∨ B                   [fu 4, 6
```

<!-- p. 243 | pdf 251 -->

### 578. Anwendungsbeispiele

Zu zeigen:

$$\neg(A \wedge B) \vdash \neg A \vee \neg B$$

Beweis:

```text
1]   A ⊢ A                       [A
2]   B ⊢ B                       [A
3]   A, B ⊢ A ∧ B                [KE 1, 2
4]   A, ¬(A ∧ B) ⊢ ¬B            [kp 3
5]   A, ¬(A ∧ B) ⊢ ¬A ∨ ¬B       [HAE 4
6]   ¬A ⊢ ¬A                     [A
7]   ¬A ⊢ ¬A ∨ ¬B                [HAE 6
8]   ¬(A ∧ B) ⊢ ¬A ∨ ¬B          [fu 5, 7
```

### 579. Anwendungsbeispiele

Zu zeigen:

$$\neg\neg A \vdash A$$

Beweis:

```text
1]   ¬A ∧ ¬¬A ⊢ A                [ECQ
2]   ¬A, ¬¬A ⊢ A                 [az 1
3]   A ⊢ A                       [A
4]   ¬¬A ⊢ A                     [fu 2, 3
```

### 580. Anwendungsbeispiele

Zu zeigen:

$$A \vdash \neg\neg A$$

Beweis:

```text
1]   A ∧ ¬A ⊢ ¬¬A                [ECQ
2]   A, ¬A ⊢ ¬¬A                 [az 1
3]   ¬¬A ⊢ ¬¬A                   [A
4]   A ⊢ ¬¬A                     [fu 2, 3
```

<!-- p. 244 | pdf 252 -->

### 581. Ableitungen in PL-Sprachen

Das im Sequenzkalkül erfasste Ableitungssystem kann auf die Prädikatenlogik erweitert werden. Die bisher eingeführten Regeln gelten weiter, es kommen aber noch Quantorenregeln dazu.

Außerdem ist zu beachten: Innerhalb eines prädikatenlogischen Beweises treten nur Ausdrücke *einer* bestimmten PL-Sprache auf. Wohlgemerkt: In den Beweiszeilen müssen als Annahmen und Behauptungen nicht unbedingt *Sätze* sein, es genügen bloße *Ausdrücke* (d.h. sie dürfen noch freie Variablen enthalten).

### 582. Korrektheit der prädikatenlogischen Beweiszeilen

Hier ergibt sich die Frage, was die Korrektheit einer Beweiszeile ausmachen soll, in der noch freie Variablen auftreten. Dazu brauchen wir eine Art erweiterten Interpretationsbegriff. Die Grundidee ist die folgende:

Eine Beweiszeile

$$\Sigma \vdash \varphi$$

ist genau dann korrekt, wenn bezüglich jeder *Interpretation mit Variablenbelegung*, hinsichtlich derer alle Ausdrücke aus Σ wahr sind, auch φ wahr ist.

Dabei ist eine Interpretation mit Variablenbelegung eine Interpretation, bei der nicht nur den Individuenkonstanten Gegenstände und den Prädikatbuchstaben Eigenschaften und Relationen zugeordnet werden, sondern bei der auch noch allen in Σ und φ auftretenden *freien Variablen* Gegenstände aus $D$ zugewiesen werden.

Beispielsweise ist

$$\neg(Fx \vee Gy) \vdash \neg Fx \wedge \neg Gy$$

eine korrekte Beweiszeile, weil jede Interpretation mit Variablenbelegung, die „$\neg(Fx \vee Gy)$“ wahr macht, auch „$\neg Fx \wedge \neg Gy$“ wahr macht.

> Man kann sich das am Besten so vorstellen: In Beweiszeilen, in denen freie Variablen vorkommen, werden diese praktisch wie Individuenkonstanten behandelt. Unter dieser Sichtweise ist so eine Beweiszeile wie gewohnt genau dann korrekt, wenn die Behauptung aus den Annahmen logisch folgt.

### 583. Vordere All-Einführung

Vordere All-Einführung

$$\text{V}\forall\text{E}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma, \forall\alpha\,\varphi \vdash \psi}$$

Diese Regel erlaubt es, eine beliebige Annahme durch einen Allquantor mit beliebiger Variable zu binden.

Anwendungsbeispiel: Vordere All-Einführung

Zu zeigen: $\forall x\,(Fx \wedge \neg Fx) \vdash Ga$

<!-- p. 245 | pdf 253 -->

Beweis:

```text
1]   Fx ∧ ¬Fx ⊢ Ga               [ECQ
2]   ∀x (Fx ∧ ¬Fx) ⊢ Ga          [V∀E 1
```

### 584. Hintere All-Einführung

Hintere All-Einführung

$$\text{H}\forall\text{E}\quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \forall\alpha\,\varphi}\quad\text{, wenn } \alpha \text{ in keinem Ausdruck aus } \Sigma \text{ frei vorkommt}$$

Dies ist die erste von zwei *kritischen* Quantorenregeln, bei deren Anwendung man eine Bedingung über das Vorkommen freier Variablen beachten muss.

Anwendungsbeispiel: Hintere All-Einführung

Zu zeigen: $\forall x\,(Fx \wedge Gx) \vdash \forall x\, Fx$

```text
1]   Fx ∧ Gx ⊢ Fx ∧ Gx           [A
2]   Fx ∧ Gx ⊢ Fx                [KB 1
3]   ∀x (Fx ∧ Gx) ⊢ Fx           [V∀E 2
4]   ∀x (Fx ∧ Gx) ⊢ ∀x Fx        [H∀E 3 !
```

Das Rufzeichen hinter der vierten Beweiszeile setzen wir als Erinnerung daran, dass es sich bei H∀E um eine kritische Quantorenregel handelt und zum Zeichen dafür, dass wir uns vergewissert haben, dass die Voraussetzung für ihre Anwendung erfüllt ist: Die Variable „x“ kommt in „$\forall x\,(Fx \wedge Gx)$“ nicht frei vor.

> Nota bene: die umgekehrte Reihenfolge der Anwendung von V∀E und H∀E wäre daher nicht statthaft gewesen.

### 585. Vordere Existenz-Einführung

Vordere Existenz-Einführung

$$\text{V}\exists\text{E}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma, \exists\alpha\,\varphi \vdash \psi}\quad\text{, wenn } \alpha \text{ in keinem Ausdruck aus } \Sigma \text{ und auch nicht in } \psi \text{ frei vorkommt}$$

Dies ist die zweite kritische Quantorenregel.

Anwendungsbeispiel: Vordere Existenz-Einführung

Zu zeigen: $\exists x\,\neg Fx \vdash \neg\forall x\, Fx$

<!-- p. 246 | pdf 254 -->

Beweis:

```text
1]   Fx ⊢ Fx                     [A
2]   ∀x Fx ⊢ Fx                  [V∀E 1
3]   ¬Fx ⊢ ¬∀x Fx                [kp 2
4]   ∃x ¬Fx ⊢ ¬∀x Fx             [V∃E 3 !
```

### 586. Beispiel: Fehlanwendung der kritischen Quantorenregeln

```text
1]   Fx ⊢ Fx                     [A
2]   Fx ⊢ ∀x Fx                  [H∀E 1 *** FALSCH! ***
3]   ∃x Fx ⊢ ∀x Fx               [V∃E 2
```
<!-- Markierung: Zeilen 2 und 3 sind im Original in roter Schrift gesetzt (fehlerhafte Anwendung der kritischen Quantorenregel und ihre Folge). -->

Die Regelanwendung in Zeile 2 ist nicht statthaft, da „x“ in der Annahme „Fx“ frei vorkommt. Die Beweiszeilen 2 und 3 sind deshalb nicht korrekt. Der „Beweis“ endet in einer „Ableitung“ eines eklatanten Fehlschlusses.

### 587. Beispiel: Fehlanwendung der kritischen Quantorenregeln

Auf dieselbe falsche Beweiszeile kann man auch durch Fehlanwendung der zweiten kritischen Quantorenregel kommen:

```text
1]   Fx ⊢ Fx                     [A
2]   ∃x Fx ⊢ Fx                  [V∃E 1 *** FALSCH! ***
3]   ∃x Fx ⊢ ∀x Fx               [H∀E 2
```
<!-- Markierung: Zeilen 2 und 3 sind im Original in roter Schrift gesetzt (fehlerhafte Anwendung der kritischen Quantorenregel und ihre Folge). -->

### 588. Hintere Existenz-Einführung

Hintere Existenz-Einführung

$$\text{H}\exists\text{E}\quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \exists\alpha\,\varphi}$$

Dies ist wieder eine unkritische Regel.

Anwendungsbeispiel: Hintere Existenz-Einführung

Zu zeigen: $\neg\forall x\, Fx \vdash \exists x\,\neg Fx$

Beweis:

```text
1]   ¬Fx ⊢ ¬Fx                   [A
2]   ¬Fx ⊢ ∃x ¬Fx                [H∃E 1
3]   ¬∃x ¬Fx ⊢ Fx                [kp 2
4]   ¬∃x ¬Fx ⊢ ∀x Fx             [H∀E 3 !
5]   ¬∀x Fx ⊢ ∃x ¬Fx             [kp 4
```

<!-- p. 247 | pdf 255 -->

### 589. Ableitbare Regel: Allbeseitigung

Eine nützliche ableitbare Regel ist die Allbeseitigungsregel:

$$\forall\text{b}\quad \dfrac{\Sigma \vdash \forall\alpha\,\varphi}{\Sigma \vdash \varphi}$$

Ihre Korrektheit lässt sich mit Hilfe der schon bekannten Regeln ableiten:

```text
1]   Σ ⊢ ∀α φ                    [n.V.
2]   φ ⊢ φ                       [A
3]   ∀α φ ⊢ φ                    [V∀E 2
4]   Σ ⊢ φ                       [S 1, 3
```

Anwendungsbeispiel: Allbeseitigung

Zu zeigen: $\forall x\, Fx \wedge \forall x\, Gx \vdash \forall x\,(Fx \wedge Gx)$

Beweis:

```text
1]   ∀x Fx ∧ ∀x Gx ⊢ ∀x Fx ∧ ∀x Gx    [A
2]   ∀x Fx ∧ ∀x Gx ⊢ ∀x Fx            [KB 1
3]   ∀x Fx ∧ ∀x Gx ⊢ Fx               [∀b 2
4]   ∀x Fx ∧ ∀x Gx ⊢ ∀x Gx            [KB 1
5]   ∀x Fx ∧ ∀x Gx ⊢ Gx               [∀b 4
6]   ∀x Fx ∧ ∀x Gx ⊢ Fx ∧ Gx          [KE 3, 5
7]   ∀x Fx ∧ ∀x Gx ⊢ ∀x (Fx ∧ Gx)     [H∀E 6 !
```

### 590. Anwendungsbeispiele

Zu zeigen: $\exists x\, Fx \vee \exists x\, Gx \vdash \exists x\,(Fx \vee Gx)$

```text
1]   Fx ⊢ Fx                              [A
2]   Fx ⊢ Fx ∨ Gx                         [HAE 1
3]   Fx ⊢ ∃x (Fx ∨ Gx)                    [H∃E 2
4]   ∃x Fx ⊢ ∃x (Fx ∨ Gx)                 [V∃E 3 !
5]   Gx ⊢ Gx                              [A
6]   Gx ⊢ Fx ∨ Gx                         [HAE 5
7]   Gx ⊢ ∃x (Fx ∨ Gx)                    [H∃E 6
8]   ∃x Gx ⊢ ∃x (Fx ∨ Gx)                 [V∃E 7 !
9]   ∃x Fx ∨ ∃x Gx ⊢ ∃x (Fx ∨ Gx)         [VAE 4, 8
```

<!-- p. 248 | pdf 256 -->

### 591. Anwendungsbeispiele

Zu zeigen: $\exists x\,\forall y\, Rxy \vdash \forall y\,\exists x\, Rxy$

```text
1]   Rxy ⊢ Rxy                            [A
2]   ∀y Rxy ⊢ Rxy                         [V∀E 1
3]   ∀y Rxy ⊢ ∃x Rxy                      [H∃E 2
4]   ∃x ∀y Rxy ⊢ ∃x Rxy                   [V∃E 3 !
5]   ∃x ∀y Rxy ⊢ ∀y ∃x Rxy                [H∀E 4 !
```

> Das Beispiel ist instruktiv, weil es die Bedeutung der kritischen Quantorenregeln vor Augen führt. Die *nicht korrekte* umgekehrte Beweisbehauptung
>
> $$\exists x\,\forall y\, Rxy \vdash \forall y\,\exists x\, Rxy$$
> <!-- sic -->
>
> wäre mit Hilfe des Kalküls *nicht* auf analoge Weise beweisbar. Denn dabei müssten, von innen nach außen arbeitend, zunächst eine hintere Existenz-Einführung und eine vordere All-Einführung vorgenommen werden. Dies sind jedoch eben die zwei kritischen Quantorenregeln, und für keine der beiden sind die Anwendungsvoraussetzungen bei „$Rxy \vdash Rxy$“ erfüllt.

### 592. Anwendungsbeispiel: Syllogismus „Barbara“

$$\begin{array}{l}
\forall x\,(Sx \rightarrow Mx) \\
\forall x\,(Mx \rightarrow Px) \\
\hline
\forall x\,(Sx \rightarrow Px)
\end{array}$$

```text
1]   Sx → Mx ⊢ Sx → Mx                                        [A
2]   Mx → Px ⊢ Mx → Px                                        [A
3]   Sx → Mx, Mx → Px ⊢ Sx → Px                               [ks 1, 2
4]   ∀x (Sx → Mx), Mx → Px ⊢ Sx → Px                          [V∀E 3
5]   ∀x (Sx → Mx), ∀x (Mx → Px) ⊢ Sx → Px                     [V∀E 4
6]   ∀x (Sx → Mx), ∀x (Mx → Px) ⊢ ∀x (Sx → Px)                [H∀E 5 !
```

### 593. Anwendungsbeispiel: Syllogismus „Darii“

$$\begin{array}{l}
\forall x\,(Mx \rightarrow Px) \\
\exists x\,(Sx \wedge Mx) \\
\hline
\exists x\,(Sx \wedge Px)
\end{array}$$

<!-- p. 249 | pdf 257 -->

```text
1]   Sx ∧ Mx ⊢ Sx ∧ Mx                                        [A
2]   Sx ∧ Mx ⊢ Mx                                             [KB 1
3]   Mx → Px ⊢ Mx → Px                                        [A
4]   Sx ∧ Mx, Mx → Px ⊢ Px                                    [mp 2, 3
5]   Sx ∧ Mx ⊢ Sx                                             [KB 1
6]   Sx ∧ Mx, Mx → Px ⊢ Sx ∧ Px                                [KE 4, 5
7]   Sx ∧ Mx, ∀x (Mx → Px) ⊢ Sx ∧ Px                          [V∀E 6
8]   Sx ∧ Mx, ∀x (Mx → Px) ⊢ ∃x (Sx ∧ Px)                     [H∃E 7
9]   ∃x (Sx ∧ Mx), ∀x (Mx → Px) ⊢ ∃x (Sx ∧ Px)                [V∃E 8 !
```

### 594. Variablensubstitution

Die bisherigen Regeln erlauben uns noch nicht, aus einer Annahme wie

$$\forall x\, Fx$$

auf

$$Fa$$

zu schließen. Dazu benötigen wir zunächst den Begriff der Variablensubstitution.

### 595. Variablensubstitution

△ **Es seien φ ein Satz der PL-Sprache *L*, α eine Variable und β eine Variable oder eine Individuenkonstante von *L*, dann ist ψ das Ergebnis einer *Variablensubstitution von β für α* genau dann, wenn ψ aus φ dadurch hervorgeht, dass**

△ **jedes freie Vorkommnis von α in φ durch β ersetzt wird und**

△ **dabei keine neuen Variablenbindungen erzeugt werden.**

**Symbolisch schreiben wir dafür:**

$$\psi = \text{Sub}_{\beta \text{ für } \alpha}(\varphi)$$

> Diese Schreibweise deutet an dass die Substitution als Funktion aufgefasst werden kann, die Ausdrücken andere Ausdrücke zuordnet. Allerdings ist zu beachten: Die „Funktion“ Sub$_{\beta \text{ für } \alpha}$ ist nicht für alle Ausdrücke definiert – nämlich *nicht* für solche Ausdrücke, in denen durch die Variablensubstitution von β für α eine neue Variablenbindung erzeugt würde.

### 596. Variablensubstitution: Beispiele

$$\text{„}\forall x\, Gxz\text{“} = \text{Sub}_{\text{„}z\text{“ für „}y\text{“}}(\text{„}\forall x\, Gxy\text{“})$$

> So müsste man das korrekterweise schreiben. Aus Bequemlichkeit lassen wir wieder im Folgenden die Anführungszeichen weg.

$$\forall x\, Gxa = \text{Sub}_{a \text{ für } y}(\forall x\, Gxy)$$

$$Fb \wedge \forall x\, Gxy = \text{Sub}_{b \text{ für } x}(Fx \wedge \forall x\, Gxy)$$

> Beachten Sie: Nur *freie* Vorkommnisse der substituierten Variablen dürfen ersetzt werden.

$$Fb = \text{Sub}_{x \text{ für } y}(Fb)$$

<!-- p. 250 | pdf 258 -->

### 597. Keine neuen Variablenbindungen erzeugen

Die Erzeugung neuer Variablenbindungen ist durch die Definition der Variablensubstitution ausgeschlossen. So darf man z.B. in dem Ausdruck

$$\forall x\, Gy$$

nicht die Variable „x“ für „y“ substituieren, weil in dem entstehenden Ausdruck „$\forall x\, Gx$“ an einer Stelle eine gebundene Variable auftreten würde, an der vorher eine freie Variable gestanden hatte.

Die Variablensubstitution Sub$_{x \text{ für } y}$ lässt sich auf „$\forall x\, Gy$“ ganz einfach nicht anwenden.

### 598. Variablensubstitution

Für Variablensubstitution merken:

- Alle und nur die freien Vorkommnisse einer Variablen ersetzen.
- Keine neuen Variablenbindungen erzeugen.

Nun kommen wir endlich zur entsprechenden Ableitungsregel: Solche Substitutionen dürfen wir von einer zur anderen Beweiszeile vornehmen, sofern wir sie durchgängig auf die Behauptung und alle Annahmen anwenden.

### 599. Substitutionsregel

Substitutionsregel

$$\text{SUB}\quad \dfrac{\varphi_1, \ldots, \varphi_n \vdash \psi}{\varphi_1', \ldots, \varphi_n' \vdash \psi'}\quad\text{, wenn } \varphi_1' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi_1) \text{ und } \ldots$$
$$\text{und } \varphi_n' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi_n)\text{, und } \psi' = \text{Sub}_{\beta \text{ für } \alpha}(\psi)$$

Substitutionsregel: Anwendungsbeispiel

Zu zeigen: $\forall x\, Fx \vdash \forall y\, Fy$

Beweis:

```text
1]   Fx ⊢ Fx                     [A
2]   ∀x Fx ⊢ Fx                  [V∀E 1
3]   ∀x Fx ⊢ Fy                  [SUBy für x 2
4]   ∀x Fx ⊢ ∀y Fy               [HAE 3 !
```

> Bei Anwendung der Substitutionsregel empfiehlt es sich, wie im Beispiel kenntlich zu machen, welche Substitution man vorgenommen hat.

<!-- p. 251 | pdf 259 -->

### 600. Spezialisierung und Partikularisierung

Mit dieser Regel können wir jetzt auch die sogenannten Spezialisierungs- und Partikularisierungsschlüsse in unserem Ableitbarkeitssystem erfassen. Beispiele:

Spezialisierung: Partikularisierung:

$$\begin{array}{l@{\qquad}l}
\forall x\, Fx & Fa \\
\hline
Fa & \exists x\, Fx
\end{array}$$

Wegen ihrer Bedeutung beweisen wir sie gleich in Form abgeleiteter Beweisregeln.

### 601. Spezialisierung

Spezialisierung

$$\text{spe}\quad \dfrac{\Sigma \vdash \forall\alpha\,\varphi}{\Sigma \vdash \varphi'}\quad\text{, wenn } \varphi' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi)$$

> Beachten Sie: Die Annahmen Σ dürfen bei Anwendung dieser Regel gleich bleiben.

Beweis der Korrektheit:

```text
1]   Σ ⊢ ∀α φ                    [n.V.
2]   φ ⊢ φ                       [A
3]   ∀α φ ⊢ φ                    [V∀E 2
4]   ∀α φ ⊢ φ'                   [SUBβ für α 3
5]   Σ ⊢ φ'                      [S 1, 4
```

### 602. Partikularisierung

Partikularisierung

$$\text{par}\quad \dfrac{\Sigma \vdash \varphi'}{\Sigma \vdash \exists\alpha\,\varphi}\quad\text{, wenn } \varphi' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi)$$

> Auch hier bleiben die Annahmen Σ unverändert.

Beweis der Korrektheit:

```text
1]   Σ ⊢ φ'                      [n.V.
2]   φ ⊢ φ                       [A
3]   φ ⊢ ∃α φ                    [H∃E 2
4]   φ' ⊢ ∃α φ                   [SUBβ für α 3
```

<!-- p. 252 | pdf 260 -->

```text
5]   Σ ⊢ ∃α φ                    [S 1, 4
```

### 603. Anwendungsbeispiel: „Quasi-Syllogismus“

$$\begin{array}{l}
\forall x\,(Sx \rightarrow Px) \\
Sa \\
\hline
Pa
\end{array}$$

```text
1]   ∀x (Sx → Px) ⊢ ∀x (Sx → Px)                 [A
2]   ∀x (Sx → Px) ⊢ Sa → Pa                      [spe 1
3]   ∀x (Sx → Px), Sa ⊢ Pa                       [SB 2
```

### 604. Anwendungsbeispiel

$$\begin{array}{l}
\neg\exists x\,(Fx \wedge Gx) \\
Fa \\
\hline
\neg Ga
\end{array}$$

Beweis:

```text
1]   Fa ∧ Ga ⊢ Fa ∧ Ga                           [A
2]   Fa ∧ Ga ⊢ ∃x (Fx ∧ Gx)                      [par 1
3]   Fa, Ga ⊢ ∃x (Fx ∧ Gx)                       [az
4]   ¬∃x (Fx ∧ Gx), Fa ⊢ ¬Ga                     [kp
```

### 605. Korrektheit und Vollständigkeit des Sequenzkalküls

Die Charakterisierung der formalen Ableitbarkeit für Aussagen- und Prädikatenlogik ist damit abgeschlossen.

> Sie lässt sich durch Hinzunahme einiger weniger einfacher Regeln auch auf $\mathrm{PL}_{=}$-Sprachen erweitern. Vgl. Oberschelp 1997, § 27.

Die angegebenen Regeln sind insgesamt *korrekt*. Das heißt: Alle Aussagen, die sich ableiten lassen, folgen auch tatsächlich logisch:

Wenn $\Sigma \vdash \varphi$, so $\Sigma \vDash \varphi$.

Außerdem gilt auch das Umgekehrte: Alle logischen Folgerungsbeziehungen zwischen Aussagen in PL-Sprachen lassen sich auch ableiten:

Wenn $\Sigma \vDash \varphi$, so $\Sigma \vdash \varphi$.

> Die Korrektheit des Kalküls ergibt sich leicht aus der Korrektheit der einzelnen Regeln. Zu Beweisen der Vollständigkeit siehe Oberschelp 1997, §29 und Ebbinghaus u.a. 1996, Kap. V.

<!-- p. 253 | pdf 261 -->

### 606. Übersicht der Regeln des Sequenzkalküls

#### Grundregeln (AL)

Annahmenaxiom

$$\text{A}\quad \dfrac{\cdot}{\varphi \vdash \varphi}$$

Schnittregel

$$\text{S}\quad \dfrac{\begin{array}{c}\Sigma, \varphi \vdash \psi \\ \Pi \vdash \varphi\end{array}}{\Sigma, \Pi \vdash \psi}$$

Tautologieaxiom

$$\text{TAU}\quad \dfrac{\cdot}{\vdash \varphi \vee \neg\varphi}$$

Ex Contradictione Quodlibet

$$\text{ECQ}\quad \dfrac{\cdot}{\varphi \wedge \neg\varphi \vdash \psi}$$

Konjunktions-Einführung

$$\text{KE}\quad \dfrac{\begin{array}{c}\Sigma \vdash \varphi \\ \Pi \vdash \psi\end{array}}{\Sigma, \Pi \vdash \varphi \wedge \psi}$$

Konjunktions-Beseitigung

$$\text{KB}\quad \dfrac{\Sigma \vdash \varphi \wedge \psi}{\Sigma \vdash \varphi}\quad\text{oder}\quad \dfrac{\Sigma \vdash \varphi \wedge \psi}{\Sigma \vdash \psi}$$

Vordere Adjunktions-Einführung

$$\text{VAE}\quad \dfrac{\begin{array}{c}\Sigma, \varphi \vdash \chi \\ \Pi, \psi \vdash \chi\end{array}}{\Sigma, \Pi, \varphi \vee \psi \vdash \chi}$$

Hintere Adjunktions-Einführung

$$\text{HAE}\quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \varphi \vee \psi}\quad\text{oder}\quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \psi \vee \varphi}$$

Subjunktions-Einführung

$$\text{SE}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma \vdash \varphi \rightarrow \psi}$$

Subjunktions-Beseitigung

$$\text{SB}\quad \dfrac{\Sigma \vdash \varphi \rightarrow \psi}{\Sigma, \varphi \vdash \psi}$$

Bisubjunktions-Einführung

$$\text{BE}\quad \dfrac{\begin{array}{c}\Sigma, \varphi \vdash \psi \\ \Pi, \psi \vdash \varphi\end{array}}{\Sigma, \Pi \vdash \varphi \leftrightarrow \psi}$$

Bisubjunktions-Beseitigung

$$\text{BB}\quad \dfrac{\Sigma \vdash \varphi \leftrightarrow \psi}{\Sigma, \psi \vdash \varphi}\quad\text{oder}\quad \dfrac{\Sigma \vdash \varphi \leftrightarrow \psi}{\Sigma, \varphi \vdash \psi}$$

<!-- p. 254 | pdf 262 -->

#### Wichtige ableitbare Regeln (AL)

Fallunterscheidung

$$\text{fu}\quad \dfrac{\begin{array}{c}\Sigma, \varphi \vdash \psi \\ \Pi, \neg\varphi \vdash \psi\end{array}}{\Sigma, \Pi \vdash \psi}$$

Widerspruchsregel

$$\text{wid}\quad \dfrac{\begin{array}{c}\Sigma \vdash \varphi \\ \Pi \vdash \neg\varphi\end{array}}{\Sigma, \Pi \vdash \psi}$$

Kontrapositionsregeln

$$\text{kp}_1\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma, \neg\psi \vdash \neg\varphi}\qquad\qquad \text{kp}_2\quad \dfrac{\Sigma, \neg\varphi \vdash \psi}{\Sigma, \neg\psi \vdash \varphi}$$

$$\text{kp}_3\quad \dfrac{\Sigma, \varphi \vdash \neg\psi}{\Sigma, \psi \vdash \neg\varphi}\qquad\qquad \text{kp}_4\quad \dfrac{\Sigma, \neg\varphi \vdash \neg\psi}{\Sigma, \psi \vdash \varphi}$$

Annahmenverbindung

$$\text{av}\quad \dfrac{\Sigma, \varphi, \psi \vdash \chi}{\Sigma, \varphi \wedge \psi \vdash \chi}$$

Annahmenzerlegung

$$\text{az}\quad \dfrac{\Sigma, \varphi \wedge \psi \vdash \chi}{\Sigma, \varphi, \psi \vdash \chi}$$

Verdünnungsregel

$$\text{vd}\quad \dfrac{\Sigma \vdash \varphi}{\Pi \vdash \varphi}\quad\text{, wenn } \Sigma \subseteq \Pi$$

Modus Ponens

$$\text{mp}\quad \dfrac{\begin{array}{c}\Sigma \vdash \varphi \rightarrow \psi \\ \Pi \vdash \varphi\end{array}}{\Sigma, \Pi \vdash \psi}$$

Modus Tollens

$$\text{mt}\quad \dfrac{\begin{array}{c}\Sigma \vdash \varphi \rightarrow \psi \\ \Pi \vdash \neg\psi\end{array}}{\Sigma, \Pi \vdash \neg\varphi}$$

Kettenschluss

$$\text{ks}\quad \dfrac{\begin{array}{c}\Sigma \vdash \varphi \rightarrow \psi \\ \Pi \vdash \psi \rightarrow \chi\end{array}}{\Sigma, \Pi \vdash \varphi \rightarrow \chi}$$

<!-- p. 255 | pdf 263 -->

#### Grundregeln (PL)

Vordere All-Einführung

$$\text{V}\forall\text{E}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma, \forall\alpha\,\varphi \vdash \psi}$$

Hintere All-Einführung

$$\text{H}\forall\text{E}\quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \forall\alpha\,\varphi}\quad\text{, wenn } \alpha \text{ in keinem Ausdruck aus } \Sigma \text{ frei vorkommt}$$

Vordere Existenz-Einführung

$$\text{V}\exists\text{E}\quad \dfrac{\Sigma, \varphi \vdash \psi}{\Sigma, \exists\alpha\,\varphi \vdash \psi}\quad\text{, wenn } \alpha \text{ in keinem Ausdruck aus } \Sigma \text{ und auch nicht in } \psi \text{ frei vorkommt}$$

Hintere Existenz-Einführung

$$\text{H}\exists\text{E}\quad \dfrac{\Sigma \vdash \varphi}{\Sigma \vdash \exists\alpha\,\varphi}$$

Substitutionsregel

$$\text{SUB}\quad \dfrac{\varphi_1, \ldots, \varphi_n \vdash \psi}{\varphi_1', \ldots, \varphi_n' \vdash \psi'}\quad\text{, wenn } \varphi_1' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi_1) \text{ und } \ldots$$
$$\text{und } \varphi_n' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi_n)\text{, und } \psi' = \text{Sub}_{\beta \text{ für } \alpha}(\psi)$$

#### Wichtige ableitbare Regeln (PL)

Allbeseitigung

$$\forall\text{b}\quad \dfrac{\Sigma \vdash \forall\alpha\,\varphi}{\Sigma \vdash \varphi}$$

Spezialisierung

$$\text{spe}\quad \dfrac{\Sigma \vdash \forall\alpha\,\varphi}{\Sigma \vdash \varphi'}\quad\text{, wenn } \varphi' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi)$$

Partikularisierung

$$\text{par}\quad \dfrac{\Sigma \vdash \varphi'}{\Sigma \vdash \exists\alpha\,\varphi}\quad\text{, wenn } \varphi' = \text{Sub}_{\beta \text{ für } \alpha}(\varphi)$$
