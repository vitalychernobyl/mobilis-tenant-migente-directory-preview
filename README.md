# Mi Gente Directory Static Preview

This repository hosts the public static preview for the Mi Gente DMV directory launch evidence.

Canonical tenant source:

- Tenant repository: [mobilis-tenant-migente](https://github.com/vitalychernobyl/mobilis-tenant-migente)
- Static preview source: [tenant/website/directory/preview](https://github.com/vitalychernobyl/mobilis-tenant-migente/tree/main/tenant/website/directory/preview)
- Launch evidence: [tenant/launch/migente-directory-static-site-mvp](https://github.com/vitalychernobyl/mobilis-tenant-migente/tree/main/tenant/launch/migente-directory-static-site-mvp)
- Launch issue: [Directory MVP: complete launch readiness evidence](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/14)

The preview publishes reviewed public-source sample records only. Direct phone, email, and unapproved contact fields are not included in the public page.

## Published URL

The verified GitHub Pages preview is available at:

```text
https://vitalychernobyl.github.io/mobilis-tenant-migente-directory-preview/
```

## Contents

- [`index.html`](index.html): static preview page
- [`assets/styles.css`](assets/styles.css): preview styling
- [`assets/directory.js`](assets/directory.js): reviewed record rendering and filters
- [`source/reviewed-records.yaml`](source/reviewed-records.yaml): copied reviewed records package
- [`source/source-and-display-policy.md`](source/source-and-display-policy.md): copied source/display policy
- [`source/release-evidence.md`](source/release-evidence.md): copied launch evidence snapshot
- [`source/walkthrough-evidence.md`](source/walkthrough-evidence.md): copied hosted walkthrough evidence snapshot

## Update Rule

Treat this repository as a generated external preview. Make canonical content changes in [mobilis-tenant-migente](https://github.com/vitalychernobyl/mobilis-tenant-migente), then copy the reviewed preview artifact here when the launch evidence needs a public URL.
