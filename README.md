# MUN AI

A local MUN command center for research, strategy, live committee support, position papers, speeches, resolutions, Niv AI and adversarial brainstorming.

## API keys — every user supplies their own

This repository does **not** contain developer API keys. Every user running MUN AI must create and enter their own keys during `setup.bat`.

### 1. Groq
Create a Groq API key here:

https://console.groq.com/keys

### 2. Mistral
Create a Mistral API key here:

https://console.mistral.ai/api-keys

Mistral's current documentation says the full key is shown only once, so store it securely and do not commit it to Git. See: https://docs.mistral.ai/admin/identity-access/api-keys

### 3. Unlimitless
Open the Unlimitless portal here:

https://unlimitless.ai/portal

Then open **Keys**, name a key and mint it. Unlimitless documents bearer-key authentication for its API here:

https://unlimitless.ai/developers

### Key safety

Never commit `.env.local`, paste API keys into source code, or put secrets in GitHub issues/screenshots. The repository includes `.gitignore` rules for `.env.local` and other local credentials.

Vireonix does not require a key and is used only as the final general-generation fallback.

## Setup

1. Install Node.js LTS.
2. Create your own Groq, Mistral and Unlimitless keys using the official links above.
3. Double-click `setup.bat` and enter all three keys locally.
4. Double-click `START-MUN-AI.bat`.
5. Open `http://localhost:3000` if the browser does not open automatically.

The application keeps MUN workspace data in browser localStorage. Do not clear the site's storage if you want to retain local MUN workspaces and saved documents.

## Features

### Research Intelligence
- Research is split into focused subtopics and displayed one subtopic at a time.
- Research More supports up to 10 persistent passes.
- Research More pass colors: green, blue, orange, pink, teal, red, violet, gold, cyan, purple.
- Each pass keeps its own research answer and source IDs and can feed Strategy, Speech and Resolution tools.
- Evidence mapping links research points to sources.

### Committee Room
- Live browser transcription.
- Groq Whisper fallback transcription for shorter recordings.
- Live web verification for meaningful speech claims.
- Source-backed factual findings.
- POO and POI suggestions with an evidence gate.
- Factual POO cards identify the claim, corrective information and supporting source.
- Conference rules can be stored and used as committee context.

### Niv AI
- Practical MUN guidance for chair questions, diplomacy, alliances, speeches, negotiation and room-side decisions.
- Workspace-local recent memory.
- Unlimitless settled-reasoning context when a user key is configured.
- Multiple perspectives including advisor, chair simulator, neutral delegate, hostile delegate, speech rehearsal and post-committee coaching.

### Brainstorm Arena
- Devil's advocate, neutral delegate, hostile delegate, chair, policy expert and allied perspectives.
- Finds minor errors, missing assumptions and alternative approaches.
- Uses Unlimitless reasoning context when available.
- Brainstorm history is kept per MUN workspace.

### Position Paper Studio
- Separate Position Paper tab.
- Structured country, committee, agenda, stance, evidence, priorities, policies, allies and red-line inputs.
- Draft → challenge → humanize → audit → final workflow.
- Evidence strictness controls.
- Side-by-side draft/final view.
- Version history and restore.
- Defense summary, likely attacks, responses and POI suggestions.
- Speech generation and Niv coaching from the paper.

### Command Center
- MUN readiness dashboard.
- Delegate tracker.
- Situation map.
- Delegate Intel and persuasion planning.
- One-click Preparation Center.
- Live Copilot / Emergency Niv.
- Resolution Attack mode.
- Speech Coach.
- Chair Simulator.
- Post-Committee Debrief.

### Other tools
- Strategy Lab.
- Speech Studio.
- Resolution Studio.
- Saved Documents with live editing.
- Multiple independent MUN workspaces.
- Research, position-paper and resolution source context.

## AI provider architecture

Ordinary text generation uses:

1. Groq — primary.
2. Mistral — second fallback.
3. Vireonix — final keyless fallback.

Unlimitless is **not** used as a fake drop-in chat model. Its current API is a reasoning/context service over settled user-authored decisions. MUN AI uses it for Niv AI and Brainstorm context.

Live fact verification in Committee Room remains separate from ordinary generation so a fallback model is not presented as proof of current facts.

## Public repository safety

This repository is prepared to be public:

- No `.env.local` is committed.
- `.env.example` contains blank placeholders only.
- Local credentials are ignored by Git.
- Users create and enter their own three API keys during setup.

## Windows launcher

`START-MUN-AI.bat` changes to its own project directory, checks Node.js and required files, runs setup when needed, and keeps the window open when startup or build fails.

## Notes about verification

The source has been statically checked and the packaged project has been archive-verified. A full `npm install` / production `next build` was not completed in the model build environment when dependencies timed out, so the repository should be treated as a source release that performs its own full dependency install/build on the user's machine through `setup.bat`.
