# Verify angular-hello
Angular store tutorial app (getting-started: products, cart, shipping).
## Launch
npm install, then npx ng serve or npx ng build.
## Doctor
`python3 .cursor/skills/verify-angular-hello/verify.py`
## Drive
Builds with the Angular CLI and renders the built app in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-angular-hello/evidence.json`
## Cleanup
Static server terminated after the render.
## Known boundaries
Render smoke only; e2e suites (playwright/karma) not exercised here.
