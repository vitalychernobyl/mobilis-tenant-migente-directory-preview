# Mi Gente Directory Static Site MVP Release Evidence

Launch project: [Tenant Launch: Mi Gente DMV - Directory Static Site MVP](https://github.com/users/vitalychernobyl/projects/9)

Status: ready for external static preview; production custom domain not launched

## Evidence Summary

| Area | Status | Evidence |
|---|---|---|
| Prototype exists | Passed | [`prototypes/Static-studios-and-instructors`](../../../prototypes/Static-studios-and-instructors/) |
| Promotion review exists | Passed | [`prototypes/Static-studios-and-instructors/notes/promotion-review.md`](../../../prototypes/Static-studios-and-instructors/notes/promotion-review.md) |
| Canonical website draft exists | Passed | [`tenant/website/directory`](../../website/directory/) |
| Canonical data model draft exists | Passed | [`tenant/data/directory`](../../data/directory/) |
| Canonical docs draft exists | Passed | [`tenant/docs/directory`](../../docs/directory/) |
| Canonical scenario draft exists | Passed | [`tenant/scenarios/directory`](../../scenarios/directory/) |
| Real content source policy | Passed | [`tenant/docs/directory/source-and-display-policy.md`](../../docs/directory/source-and-display-policy.md) |
| Public display rules | Passed | [`tenant/docs/directory/source-and-display-policy.md`](../../docs/directory/source-and-display-policy.md) |
| Product/core ownership | Passed | [`tenant/architecture/directory-ownership-decision.md`](../../architecture/directory-ownership-decision.md) |
| Real record import | Passed | Reviewed sample package: [`tenant/data/directory/reviewed-records.yaml`](../../data/directory/reviewed-records.yaml) |
| Flow Studio implementation | Passed | [Mi Gente Directory Flow Studio](https://github.com/vitalychernobyl/mobilis-flow-studio/blob/main/src/pages/prototypes/migente-directory.jsx) and [Flow Studio PR #3](https://github.com/vitalychernobyl/mobilis-flow-studio/pull/3) |
| Rollback plan | Passed | [`tenant/launch/migente-directory-static-site-mvp/rollback-plan.md`](rollback-plan.md) |
| Walkthrough evidence template | Passed | [`tenant/launch/migente-directory-static-site-mvp/walkthrough-evidence-template.md`](walkthrough-evidence-template.md) |
| Static preview implementation | Passed | [`tenant/website/directory/preview/index.html`](../../website/directory/preview/index.html) |
| Static preview walkthrough | Passed | [`walkthrough-evidence.md`](walkthrough-evidence.md) |
| External preview repository | Passed | [mobilis-tenant-migente-directory-preview](https://github.com/vitalychernobyl/mobilis-tenant-migente-directory-preview) |
| External preview URL | Passed | [Mi Gente directory static preview](https://vitalychernobyl.github.io/mobilis-tenant-migente-directory-preview/) |
| Production custom domain | Deferred | Use the external preview URL until a production/custom domain is selected |

## Launch Work Items

- [Directory MVP: approve source policy and public display rules](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/10)
- [Directory MVP: prepare reviewed real record import](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/11)
- [Directory MVP: implement Flow Studio directory scenarios](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/12)
- [Directory MVP: decide marketplace and core ownership](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/13)
- [Directory MVP: complete launch readiness evidence](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/14)

## Validation Recorded So Far

- Prototype static site was smoke-tested locally during prototype creation.
- Tenant content validation passed during prototype PRs.
- Source and display policy is documented for MVP planning.
- Marketplace/core ownership decision is documented for MVP planning.
- Flow Studio directory scenario validation passed in [mobilis-flow-studio PR #3](https://github.com/vitalychernobyl/mobilis-flow-studio/pull/3): `npm test`, `npm run test:flow-studio`, `npm run test:tenant-emulators`, `git diff --check`, and markdown relative-link sweep.
- Reviewed real records sample import is documented in [`tenant/data/directory/reviewed-records.yaml`](../../data/directory/reviewed-records.yaml).
- Rollback plan is documented in [`rollback-plan.md`](rollback-plan.md).
- Desktop/mobile walkthrough evidence template is documented in [`walkthrough-evidence-template.md`](walkthrough-evidence-template.md).
- Static preview walkthrough evidence is documented in [`walkthrough-evidence.md`](walkthrough-evidence.md).
- External preview URL verified: [Mi Gente directory static preview](https://vitalychernobyl.github.io/mobilis-tenant-migente-directory-preview/).
- External preview repository verified: [mobilis-tenant-migente-directory-preview](https://github.com/vitalychernobyl/mobilis-tenant-migente-directory-preview).
- Hosted desktop and mobile screenshots are documented in [`walkthrough-evidence.md`](walkthrough-evidence.md).
- This launch pack authorizes external static preview review only. Production/custom-domain launch remains a separate decision.

## Required Release Evidence Later

- production/custom-domain URL, if this preview is promoted beyond the external static preview
