# Mi Gente Directory Static Preview Release Evidence Snapshot

Status: ready for external static preview; production custom domain not launched

Hosted preview: [Mi Gente directory static preview](https://vitalychernobyl.github.io/mobilis-tenant-migente-directory-preview/)

Canonical tenant source:

- Tenant repository: [mobilis-tenant-migente](https://github.com/vitalychernobyl/mobilis-tenant-migente)
- Static preview source: [tenant/website/directory/preview](https://github.com/vitalychernobyl/mobilis-tenant-migente/tree/main/tenant/website/directory/preview)
- Launch evidence folder: [tenant/launch/migente-directory-static-site-mvp](https://github.com/vitalychernobyl/mobilis-tenant-migente/tree/main/tenant/launch/migente-directory-static-site-mvp)
- Launch issue: [Directory MVP: complete launch readiness evidence](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/14)

## Evidence Included In This Preview Repo

| Area | Status | Evidence |
|---|---|---|
| External preview URL | Passed | [Mi Gente directory static preview](https://vitalychernobyl.github.io/mobilis-tenant-migente-directory-preview/) |
| Reviewed records snapshot | Passed | [`reviewed-records.yaml`](reviewed-records.yaml) |
| Source/display policy snapshot | Passed | [`source-and-display-policy.md`](source-and-display-policy.md) |
| Hosted walkthrough snapshot | Passed | [`walkthrough-evidence.md`](walkthrough-evidence.md) |
| Hosted desktop screenshot | Passed | [`evidence/screenshots/directory-preview-hosted-desktop.png`](evidence/screenshots/directory-preview-hosted-desktop.png) |
| Hosted mobile screenshot | Passed | [`evidence/screenshots/directory-preview-hosted-mobile.png`](evidence/screenshots/directory-preview-hosted-mobile.png) |

## Validation Snapshot

- Pages build completed.
- Hosted preview returned HTTP 200.
- Hosted JavaScript asset returned HTTP 200.
- Hosted reviewed records and policy snapshots returned HTTP 200.
- Headless browser DOM check found reviewed records and official source links.
- Desktop screenshot captured at 1440 by 5000.
- Mobile screenshot captured at 500 by 8000.
- Prototype demo-name scan found no old prototype records in the public preview files.

## Launch Boundary

This public repo is an external static preview for review. Canonical source changes must happen in [mobilis-tenant-migente](https://github.com/vitalychernobyl/mobilis-tenant-migente), then be copied here when the preview needs a refreshed public URL.
