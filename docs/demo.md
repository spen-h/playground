# Component reference

Filter the cards, then click one for detail.

<div class="mui-filters">
  <button class="mui-chip is-active" data-filter="all" aria-pressed="true">All</button>
  <button class="mui-chip" data-filter="engineering" aria-pressed="false">Engineering</button>
  <button class="mui-chip" data-filter="people" aria-pressed="false">People</button>
  <button class="mui-chip" data-filter="security" aria-pressed="false">Security</button>
</div>

<div class="mui-grid" markdown>

<div class="mui-card" data-category="engineering" markdown>

### Deployment runbook

How a change gets from a branch to production.

<div class="mui-card-detail" markdown>

#### Deployment runbook

1. Open a pull request against `main`
2. Wait for CI to pass
3. Get one approval from a code owner
4. Merge — the pipeline deploys automatically

!!! warning "Out of hours"
    Deployments after 4pm Friday need a second approver.

</div>
</div>

<div class="mui-card" data-category="people" markdown>

### First week

Laptop, accounts and introductions.

<div class="mui-card-detail" markdown>

#### First week

- **Day 1** — hardware collection, SSO enrolment
- **Day 2** — team introductions, systems walkthrough
- **Day 3** — first ticket, paired with a buddy

</div>
</div>

<div class="mui-card" data-category="security" markdown>

### Reporting an incident

Who to contact and what to include.

<div class="mui-card-detail" markdown>

#### Reporting an incident

Contact the security team immediately. Include:

- What you observed, and when
- Systems or accounts involved
- Any action already taken

Do not attempt remediation on production systems yourself.

</div>
</div>

<div class="mui-card" data-category="engineering" markdown>

### Environments

What each environment is for.

<div class="mui-card-detail" markdown>

#### Environments

| Name | Purpose | Data |
|---|---|---|
| Dev | Feature work | Synthetic |
| Staging | Pre-release testing | Anonymised |
| Prod | Live | Real |

</div>
</div>

</div>
