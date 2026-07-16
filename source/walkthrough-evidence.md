# Mi Gente Directory Hosted Walkthrough Evidence Snapshot

Status: hosted static preview walkthrough passed; production custom-domain walkthrough not captured

Hosted preview: [Mi Gente directory static preview](https://mobilis-mobile.github.io/mobilis-tenant-migente-directory-preview/)

Canonical tenant source:

- Static preview source: [tenant/website/directory/preview](https://github.com/Mobilis-Mobile/mobilis/tree/main/tenants/migente/tenant/website/directory/preview)
- Reviewed records source: [tenant/data/directory/reviewed-records.yaml](https://github.com/Mobilis-Mobile/mobilis/blob/main/tenants/migente/tenant/data/directory/reviewed-records.yaml)
- Source/display policy: [tenant/docs/directory/source-and-display-policy.md](https://github.com/Mobilis-Mobile/mobilis/blob/main/tenants/migente/tenant/docs/directory/source-and-display-policy.md)
- Launch issue: [Directory MVP: complete launch readiness evidence](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/14)

## Hosted Checks

| Check | Status | Evidence |
|---|---|---|
| Hosted preview returns HTTP 200 | Passed | [Mi Gente directory static preview](https://mobilis-mobile.github.io/mobilis-tenant-migente-directory-preview/) |
| Reviewed records render after JavaScript loads | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Official source links render | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Hidden contact fields stay hidden | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Mobile layout is readable | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |
| Prototype demo records do not appear | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |

## Screenshots

- Hosted desktop preview: [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png)
- Hosted mobile preview: [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png)

## Final Readiness Decision

- Hosted external preview decision: passed
- Remaining blockers for tenant launch issue #14: none
- Production/custom-domain launch remains a separate later decision
