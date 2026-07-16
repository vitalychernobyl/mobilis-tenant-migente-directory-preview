# Mi Gente Directory Source and Display Policy

Status: approved for Static Site MVP planning; production records still require review

Launch project: [Tenant Launch: Mi Gente DMV - Directory Static Site MVP](https://github.com/users/vitalychernobyl/projects/9)

Related issue: [Directory MVP: approve source policy and public display rules](https://github.com/vitalychernobyl/mobilis-tenant-migente/issues/10)

## Purpose

This policy defines which sources Mi Gente can use for the first directory launch and which fields can be shown publicly. It applies to classes, studios, instructors, and directory taxonomy in [tenant/data/directory](https://github.com/Mobilis-Mobile/mobilis/tree/main/tenants/migente/tenant/data/directory).

The policy approves a review standard. It does not approve any specific class, studio, instructor, contact field, price, schedule, or venue address for publication.

## Approved Source Types

Mi Gente reviewers can use these source types for MVP records:

- official studio, instructor, organizer, or class website pages
- official public social profiles or public posts controlled by the studio, instructor, or organizer
- public event, class, ticketing, or registration pages controlled by the studio, instructor, organizer, or venue
- direct submission from the studio, instructor, organizer, or authorized Mi Gente partner
- Mi Gente manual admin entry when the reviewer records who provided the information and when it was checked

## Disallowed Source Types

Mi Gente reviewers must not publish records from these sources without a separate approval:

- private direct messages, private chat screenshots, or member-only group posts
- exported contact lists, paid lists, closed community rosters, or partner lists without explicit publication rights
- third-party directory pages unless the reviewer also confirms the original official source
- scraped personal contact details
- unverified community tips that do not include an official source or documented manual verification

## Source Review Requirements

Every public record must include:

- stable ID and slug
- source URL or documented manual source
- source note explaining what the source proves
- reviewer name or role
- `last_reviewed_at`
- `visibility`
- field-level public display decision for any contact, exact address, registration, price, or schedule claim

Reviewers should re-check records at least every 90 days. Stale records can remain visible only if the page clearly avoids current-status guarantees or routes the user to the official source for confirmation.

## Public Display Rules

| Field type | Public display rule |
|---|---|
| Studio, instructor, or class name | Display after the approved source confirms the name. |
| Summary | Display only as Mi Gente-written neutral copy or approved source summary. Do not imply endorsement. |
| Dance styles, class type, and level | Display after the source confirms the category or the reviewer records a manual classification. |
| City, state, and neighborhood | Display after source confirmation or manual reviewer confirmation. |
| Exact street address | Display only when the address is already public for the venue or studio and the reviewer records the source. |
| Schedule summary | Display only with source attribution and `last_reviewed_at`. Avoid guarantees that the schedule is current. |
| Price summary | Display only from an official source and link users to the source for current pricing. |
| Registration URL | Display only when the URL is official and currently public. |
| Studio public phone or contact URL | Display only when already public as a business contact and reviewer-approved. |
| Instructor phone or email | Hide by default. Display only with explicit public listing evidence or direct authorized submission. |
| Social profiles | Display only official public profiles controlled by the studio, instructor, or organizer. |
| Claim or correction link | Display only after the marketplace ownership decision and workflow are implemented. Manual correction intake can be documented as launch feedback. |

## Launch Copy Rules

Public website and FAQ copy must:

- state that users should confirm details with the official source before attending
- avoid claims that every local class, studio, or instructor is included
- avoid claims that Mi Gente endorses every listing
- avoid publishing direct personal contact information unless explicitly approved
- route correction and claim language through the approved marketplace ownership decision

## Launch Gate

The Static Site MVP can treat source policy and public display rules as decided once this document is referenced by:

- [tenant/capabilities/marketplace-app.yaml](https://github.com/Mobilis-Mobile/mobilis/blob/main/tenants/migente/tenant/capabilities/marketplace-app.yaml)
- [tenant/data/directory/README.md](https://github.com/Mobilis-Mobile/mobilis/blob/main/tenants/migente/tenant/data/directory/README.md)
- [tenant/docs/directory/README.md](https://github.com/Mobilis-Mobile/mobilis/blob/main/tenants/migente/tenant/docs/directory/README.md)
- [`release-evidence.md`](release-evidence.md)
