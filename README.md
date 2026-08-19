# WhatToGit

Contributing to Git seems hard to start. The codebase is huge, there's no obvious place to begin,
and as I like to say:

`One doesn't know what it lacks until one knows what it has`

This repo aims to shorten that gap for Git newcomers.

## What's here now

**[WhatToGit.md](WhatToGit.md)**: every `NEEDSWORK`, `TODO`, `FIXME`, and `XXX` comment in the Git
source tree, grouped by directory, with the author and date of the last change to that line and a
link straight to it on GitHub.

**[leftoverbits.md](leftoverbits.md)**: every message on the Git mailing list tagged
`#leftoverbit`, the marker it is used for a loose end worth fixing but out of scope at the
time. Split into *clean* (no later message quotes that message ID) and *dirty* (someone has
referenced it since).

The idea came out of a discussion about what would actually help new contributors: a bug tracker of
small, real, named tasks. Git doesn't have one, but the codebase is full of notes left behind. Part
of the motivation is seeing people not knowing how to help.

The report is regenerated automatically, so it doesn't go stale.

## Reading the report

A few things worth knowing before you pick something off the list:

- **Dates are the last time the line was touched, not when the marker was added.** A `NEEDSWORK`
  from 2011 sitting on a line that was reindented in 2024 will show 2024.
- **A marker is not a ticket.** Some are notes-to-self, some are already obsolete, and some are
  hard. Read the surrounding code and the commit that introduced the line before assuming it's a
  task.
- **Check the mailing list first.** Search [lore.kernel.org/git](https://lore.kernel.org/git/) for
  the filename and the topic. Someone may have discussed it years ago, decided against it, or be
  working on it right now. You don't need to subscribe to search. It's public, and reading it is how
  you find out whether a thing is worth doing. Additionally, to contribute to Git, you will have to
  deal with the mailing list.

## Running it yourself

You can read [WhatToGit.md](WhatToGit.md) directly. Running it yourself is intended more for the
development of the tool.

Start by cloning Git, and then:

```sh
deno run dev <path_to_git>
```

A shallow clone will not work. `git blame` needs history; without it, every line is attributed to
the most recent commit and all the dates come out wrong.

## Roadmap

Rough, in no particular order, and open to change:

- Small tutorials, in the spirit of `Documentation/MyFirstContribution.txt`
- A GSoC/Outreachy guide: writing a proposal, what a draft cycle looks like, what reviewers are
  actually reading for.
- Change CD to update the repo on "What's cooking" events.
