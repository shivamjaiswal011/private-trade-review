# Private Trade Review

The website for Private Trade Review: a private, descriptive review of a trader's own trade history. It has two pages:

- `/`: the landing page (`src/pages/index.astro`)
- `/sample`: Case 001, a real review published with the trader's permission (`src/pages/sample.astro`)

The design pack is in [docs/](docs/README.md).

## Setup

You need Node.js 22.12 or later (tested on 24.19.0) and npm.

| OS | Install Node.js |
|---|---|
| macOS | `brew install node@24` |
| Linux | `curl -fsSL https://deb.nodesource.com/setup_24.x \| sudo -E bash - && sudo apt-get install -y nodejs` (Debian/Ubuntu) |
| Windows | `winget install OpenJS.NodeJS.LTS` |

Then, on every OS, from the repo root:

```sh
npm ci
```

`npm ci` installs exactly the versions in `package-lock.json`. To add a dependency, use `npm install --save-exact <package>@<version>`.

## Run

| What | Command | Result |
|---|---|---|
| Dev server | `npm run dev` | http://localhost:4321, reloads on save |
| Build | `npm run build` | static site in `dist/` |
| Preview the build | `npm run preview` | serves `dist/` locally |

The commands are the same on macOS, Linux and Windows.

## Secrets

None yet. Payment keys (Razorpay) will be listed here by name when payments are added. See [docs/README.md](docs/README.md#questions-for-the-review).
