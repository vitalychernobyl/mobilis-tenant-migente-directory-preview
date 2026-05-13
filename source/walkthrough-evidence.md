# Mi Gente Directory Walkthrough Evidence

Status: hosted static preview walkthrough passed; production custom-domain walkthrough not yet captured

Launch project: [Tenant Launch: Mi Gente DMV - Directory Static Site MVP](https://github.com/users/vitalychernobyl/projects/9)

Related issue: [Directory MVP: complete launch readiness evidence](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/14)

## Preview Inputs

- hosted preview URL: [https://vitalychernobyl.github.io/mobilis-tenant-migente-directory-preview/](https://vitalychernobyl.github.io/mobilis-tenant-migente-directory-preview/)
- hosted preview repository: [mobilis-tenant-migente-directory-preview](https://github.com/vitalychernobyl/mobilis-tenant-migente-directory-preview)
- local preview URL: `http://localhost:8765/tenant/website/directory/preview/index.html`
- static preview source: [`tenant/website/directory/preview/index.html`](../../website/directory/preview/index.html)
- records source: [`tenant/data/directory/reviewed-records.yaml`](../../data/directory/reviewed-records.yaml)
- source/display policy: [`tenant/docs/directory/source-and-display-policy.md`](../../docs/directory/source-and-display-policy.md)
- screenshot command: Google Chrome headless
- reviewer: codex
- review date: 2026-05-13

## Desktop Walkthrough

| Check | Status | Evidence |
|---|---|---|
| Directory landing loads | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Classes list loads | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Studios list loads | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Instructors list loads | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Filters render for dance style | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Filters render for city/neighborhood | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Reviewed source links are visible | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Hidden contact fields stay hidden | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Prototype demo records do not appear | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Correction/help copy does not imply automated claim workflow | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |

## Mobile Walkthrough

| Check | Status | Evidence |
|---|---|---|
| Directory landing fits mobile viewport | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Classes list is readable | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Studios list is readable | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Instructors list is readable | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Filters are usable on mobile | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Reviewed source links are reachable | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Hidden contact fields stay hidden | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| No text overlaps controls or cards | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Prototype demo records do not appear | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Help/correction copy is readable | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |

## Screenshot Paths

- desktop preview: [`evidence/screenshots/directory-preview-desktop.png`](evidence/screenshots/directory-preview-desktop.png)
- mobile preview: [`evidence/screenshots/directory-preview-mobile.png`](evidence/screenshots/directory-preview-mobile.png)
- hosted desktop preview: [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png)
- hosted mobile preview: [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png)

## Final Readiness Decision

- static preview decision: passed
- hosted external preview decision: passed
- production launch decision: production/custom-domain launch remains deferred until a custom domain is selected
- remaining blockers for issue #14: none
