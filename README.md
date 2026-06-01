# portfolio

welcome to my digital workspace. this isn't just a cv; it's a living playground where i test ideas, archive my work, and open a secure line of communication.

## the sectors

### / identity
my professional footprint. where i've been, what i've done (lead forensics, etc.), and my philosophy on systems engineering. includes my linkedin and contact details.

### / capabilities
the technical breakdown. this page visualizes my skill clusters—from identity & security (microsoft purview, pki) to development (python, react) and automation (powershell, rag pipelines).

### / workspace (tools)
a public-facing set of functional tools.
- **intercepted comms**: a guestbook/journal where you can leave a mark.
- **file drop**: a secure way to upload artifacts (files) to my server.

### / admin (restricted)
a secure area for my eyes only. protected by a gatekeeper code, this is where i view the journal entries and files submitted via the workspace.

## tech stack

- **frontend**: react 19, typescript, tailwind css, framer-motion (for the springy animations).
- **backend**: simple node.js/express server.
- **deployment**: hosted on render using a persistent disk to keep your uploads safe from the digital void.

## deployment notes

this runs on a single hybrid service (frontend + backend). the server handles the api *and* serves the static React files. environment variables manage the security codes and storage paths.
