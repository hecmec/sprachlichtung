# Stick figure video tools

Goal: write a script myself, get back a short video with stick figures, narration and subtitles. Voice can stay optional, I can dub it later. Topics are basic critical thinking concepts, so the videos are didactic, not entertainment.

Ranked by how well each one fits that goal. Status column says whether I checked the vendor's own page (2026-09-24) or only saw it in search results.

## The shortlist

| #   | Tool                  | Own script kept | Stick figures   | Narration + subtitles | German voice | Cheapest usable plan | Status         |
| --- | --------------------- | --------------- | --------------- | --------------------- | ------------ | -------------------- | -------------- |
| 1   | StrokeVideo           | verbatim        | explicit mode   | yes, burn-in optional | yes          | free, 1/day          | page checked   |
| 2   | Crreo                 | yes, unconfirmed | one style of many | yes                 | likely       | $9/month             | page checked   |
| 3   | StickReel             | yes             | yes, the point  | yes, burn-in          | auto-detect  | $19/month, 16 videos | page checked   |
| 4   | simpleshow            | yes             | cut-out style   | yes                   | yes          | trial, then paid     | search results |
| 5   | Fliki                 | yes             | whiteboard      | yes                   | yes          | limited free         | search results |
| 6   | Atlabs                | yes             | unconfirmed     | yes                   | yes          | limited free         | search results |
| 7   | DIY (Remotion)        | it is the input | whatever I draw | yes                   | my choice    | free, my time        | my proposal    |
| 8   | Manim                 | code, not prose | no              | add separately        | my choice    | free, my time        | my proposal    |
| 9   | Mootion               | yes             | not native      | partial               | unclear      | watermarked free     | search results |
| 10  | FlexClip              | no, manual      | yes, per scene  | manual                | yes          | watermarked free     | search results |
| 11  | Meta AnimatedDrawings | no              | my own drawing  | no                    | n/a          | free, open source    | my proposal    |

## 1. StrokeVideo

The closest match. I paste my script and **the narration is synthesised from my text as written**, which is the whole point when I have written the script carefully. Each sentence gets its own illustrated board, drawn in sync with the narration. There is a director note field where "Stick figures only" is an explicit option. German is among the 14 supported languages, subtitles can be burned in.

The free tier is 1 video per day, up to 4 minutes, no watermark and no card required. Paid minutes never expire. Their own description of the style: "we draw it, we don't animate it", so expect a hand drawn whiteboard look rather than moving characters.

https://strokevideo.com/script-to-video/

## 2. Crreo

By far the best value, and the reason it lands this high. Crreo is a long-form script-to-video generator with stickman animation as one of its styles: paste the script, it produces visuals, voiceover and subtitles. 25+ languages and 200+ voices, so German is near certain, though the page never names it.

The pricing is what sets it apart. START is $9/month with 10-minute videos, 60 minutes of speech and no watermark, GROW $18 for 15 minutes and 120 minutes of speech, ULTRA $45 for 30 minutes. All paid tiers give full commercial ownership. At 30 seconds per video, 60 minutes of speech is roughly 120 short videos a month, which makes StickReel's $19 for 16 videos look expensive.

Two caveats. **The free plan is a trap for this project**: it is a one-time non-renewing allowance, personal and non-commercial use only, and it requires a visible credit to Crreo in the published video. On a public site that means paying from the start. Second, their marketing pages contradict each other, the stickman page claims plans start at $14 and a 5-minute free tier while the pricing page says $9 and a one-time allowance; I took the pricing page as authoritative.

The real open question is whether it narrates my script verbatim. The page says it "automatically generates customized visuals, voiceovers, subtitles", which hints at rewriting. Since the whole point is that I write the script, this needs testing before any subscription. Being a generalist tool where stickman is one style among many, character consistency across scenes is also less certain than with a dedicated stick tool.

https://www.crreo.ai/styles/stickman-animation-ai-video

## 3. StickReel

Built specifically for stick figure videos. I can paste my own script instead of letting it write one. It produces scenes, voiceover, subtitles and keeps the same character across scenes, then exports MP4 with commercial rights on every plan.

Pricing: Starter $19/month for 16 videos, Creator $39 for 40, Pro $99 for 120. Narration language auto-detects or can be set manually; German is not named explicitly on their page, worth testing with one German script before paying.

Caveat: it targets Shorts, TikTok and Reels, so the default is vertical. For embedding next to text in the docs I would want 16:9, and I have not confirmed it offers that.

https://stickreel.com/

## 4. simpleshow video maker

Not stick figures strictly speaking, it uses the hand drawn cut-out figures that got the company known, but the spirit is identical and the tool is script-first: write the script, it picks the visuals. Made for education, with dedicated classroom plans and one-click translation into 20 languages. German is well supported, which matters since the site is German and the French and English versions come later.

This is the one whose look matches an explainer series best, and translating the same video into three languages is a real advantage here.

https://simpleshow.com/plans/educational/

## 5. Fliki

Generalist script-to-video with a whiteboard animation mode. Its strength is the voice library, which covers German well and would save the separate dubbing step. Less stick-figure-specific than 1 and 3, so the visual identity across a series will be weaker.

https://fliki.ai/features/whiteboard-animation-maker

## 6. Atlabs

Script-to-video with a large style library, including whiteboard and motion graphics. **The "Stick Style" mode from my earlier note could not be confirmed**; their own pages list Realistic, 3D Cartoon, Anime, Flat 2D Modern and similar, with no stick style named. Might still exist under another name, would need an account to check.

https://www.atlabs.ai/script-to-video

## 7. Build it myself with Remotion

My own proposal, and the one I would bet on for a long series. Remotion renders video from React components, so a video becomes source code:

- the script lives in the repo as markdown, next to the doc page it illustrates
- stick figures are SVG, the same way `syllogismus-barbara-venn.svg` already is
- narration via a TTS step (Piper runs locally and free, or Azure/ElevenLabs for quality)
- subtitles from Whisper on the generated audio, which gives word-level timing for free
- `ffmpeg` muxes it, output is deterministic and diffable

Upside: no per-video cost, no subscription, full control of the look, and the same visual language as the diagrams already on the site. Rerendering all videos after fixing one wording is a single command. Downside: a real build effort before the first video, probably a weekend, and animation quality depends on how much I invest in the figure rig.

Worth considering only if this becomes a series of 20+ videos rather than a handful.

## 8. Manim

Not for stick figures, but the right tool for the diagram-heavy half of critical thinking: Venn diagrams filling in step by step, a syllogism assembling itself, a truth table lighting up row by row. Python, free, made for exactly this kind of mathematical explainer. Could be combined with any of the tools above: stick figures for the story, Manim for the formal parts.

## 9. Mootion

General prompt-to-animation. Stick figures are not a native style, only something to ask for, so consistency across a series is doubtful. Watermark-free output needs a subscription. Low priority for this use case.

## 10. FlexClip

Scene-by-scene and manual: upload a stick figure image, give an animation prompt, assemble the clips. More control per shot, far more work per video. Only interesting if nothing else gives an acceptable look.

## 11. Meta AnimatedDrawings

Open source, takes a drawing of a figure and animates it with prepared motion capture. Not a script-to-video tool at all, so it cannot do the job on its own. Interesting for one thing: giving the series a recurring hand drawn mascot that could be reused in the Remotion route.

https://github.com/facebookresearch/AnimatedDrawings

## Dropped

**TenStick**: my earlier note called it "probably the closest match", but it does not appear to exist. No website, no mention anywhere in search. It looks like an invented name, and the description attached to it was a generic mix of the others. Ignore it.

## What I would actually try first

1. One German test script through **StrokeVideo**, since it is free, needs no card and keeps my wording exactly. That alone answers whether the whiteboard look works for the material.
2. The same script through **Crreo**'s one-time free allowance, with one question in mind: does the narration match my text word for word, or does it rewrite me? If it stays verbatim, it is the cheapest way to run a long series by a wide margin.
3. **StickReel**'s trial only if the first two disappoint on the stick figure look, checking whether 16:9 is possible.
4. If all three look wrong, **simpleshow**, which is the safest didactic look and the best multilingual path.
5. Revisit the **Remotion** route once it is clear the format works and how many videos there will be.

Open question for the test: how long should one video be? The earlier note assumed about 30 seconds and roughly 2 videos per day, which drives the pricing comparison. Both numbers need confirming against what the pages actually need.
