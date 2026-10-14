# WISyE Type — starter website

An original, beginner-friendly personality quiz concept for the WISyE community. Built with plain HTML, CSS, and JavaScript.

## What's included

- `index.html` — page structure and accessible labels
- `styles.css` — responsive editorial magazine styling
- `script.js` — 10 questions, six archetypes, scoring, navigation, restart, share/copy actions, and PNG result-card download

## Preview locally

1. Download or unzip this folder.
2. Open `index.html` in a browser.
3. For a smoother development workflow, open the folder in VS Code and use a local preview extension such as Live Server.

## Publish with GitHub Pages

1. Create a **new repository** named `wisye-type` (or another name you prefer).
2. Upload `index.html`, `styles.css`, `script.js`, and this README to the repository's root.
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish the site. The public URL will appear in the Pages settings.

## How scoring works

Every selected answer adds one point to its assigned type. The type with the highest score is the result. If two or more types tie, the quiz uses the type selected most recently among the tied types. This simple rule always produces one result.

The quiz is for fun and community-building, not a validated psychological assessment.

## How to edit the quiz

Open `script.js`:

- Edit a question's `title`, `subtitle`, and answer `text` inside the `questions` array.
- Each answer's `type` must match one of these six keys: `social`, `mastermind`, `thinker`, `wildcard`, `lowkey`, `curator`.
- Edit names, descriptions, traits, hangout ideas, and community text inside the `types` object.
- If you add or remove questions, the progress indicator updates automatically.

## Privacy and group matching

This starter runs entirely in the visitor's browser. It does not submit answers, collect names, or create group assignments. Members can share their result themselves. If WISyE later wants to collect sign-ups or assign members to real groups, add a separate, opt-in form or a club-approved system and explain what information is collected and who can see it.

## Artwork and licensing

This starter uses original code and CSS illustrations/decorative shapes; it does not copy CosmosPersona's source code or artwork. The Google Fonts import loads DM Sans and Playfair Display from Google Fonts when online; you can replace these with system fonts if you prefer not to load an external service. Confirm WISyE's permission to use its name/logo and follow your organization's branding guidelines before publishing.
