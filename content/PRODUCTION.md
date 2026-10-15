# Research Paper Cuts publishing standard

Each numbered folder is a publishing package with a stable identifier, not
the current release order. Follow `RECORDING-QUEUE.md` for the approved lineup.
Unless explicitly marked published, these are editorial drafts.

## Required package

- `article.md`: independent, conversational paper explanation, normally 1,500-2,500 words. Explain the problem with a running example, describe the actual mechanism, report grounded findings, and give honest limitations. No "in this video" framing. Link the video only after its real public URL exists.
- `video-script.md`: recordable narration, normally 60-120 seconds including the outro. Target 170-250 spoken words and verify the count at 140 words per minute; don't include production directions in the spoken text. An explicitly approved expanded script may run longer; CaMeL is that exception.
- `storyboard.md`: timed cartoon beats tied to narration, recurring cast, captions, actual paper screenshot once, and a weakness beat. Include 1080x1920 mobile safe zones and image ideas for the article.
- `sources.md`: exact title, author/lab attribution verified from the source, date/version, canonical paper URL, directly read sections/tables supporting claims, and limitations of the evidence.
- `metadata.json`: post order, slug, category, title, paper URL, affiliations, paper version/date, draft status, and estimated script runtime.
- `assets/`: paper-specific illustrations or existing reusable article images. Never fake an experimental chart.

## Shared voice and ending

Use familiar words, connected paragraphs, concrete examples, and varied sentence lengths. Avoid slogans, inflated claims, repetitive rhetorical contrasts, excessive bolding, and invented personal experiences. Give the reader enough detail to understand the mechanism, not just the metaphor. Separate the authors' findings from our engineering interpretation.

End every video narration verbatim:

> I break down the top papers in AI research. Follow for more.

Use the approved 3-second opening and 4-second closing from
`docs/07-bookends.md`, with narration and captions continuing underneath.
The closing uses the waving host, logo, "Follow for more.", and website.
Always label the robot's role ("AI AGENT", or "AI PLANNER"/"AI READER" when
those roles matter). The detective specifically represents CausalArmor;
don't mislabel it as every method's mechanism. Reuse other cast roles appropriately.

Articles end with the paper citation, series attribution, and a related-video link only when a real URL is available. Do not use a fabricated link or imply that an unpublished article/video is live.

## Accuracy

Read primary-source full text, not only abstracts or search summaries. Record exact benchmark, backbone, attack regime, denominator/metric, table, and version for numbers. Don't compare percentages from different settings as if they were one experiment. Distinguish stated limitations, inferences, and untested questions. Research is an editorial selection, not an objective ranking of "top" papers.

The requested deliverable is ten article and recording/animation packages. New narrated videos require the creator's recordings; don't claim rendered videos exist or fabricate their voice.
