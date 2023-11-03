# `sandbox-next-ci`

Tag-based build and deployment of a Next.js application to:

- Vercel
- ~~Cloudflare~~: deploying to Cloudflare requires us to integrate their SDK in our code, oh the coupling

## Vercel

- https://vercel.com/guides/can-you-deploy-based-on-tags-releases-on-vercel

Secrets required:

- `VERCEL_ORGANIZATION_ID`
  - `account → settings → general`
- `VERCEL_PROJECT_ID`
  - `project → settings → general → project id`
- `VERCEL_TOKEN`
  - `account → settings → token`

On local:

1. create git repository
1. create `vercel.json`
   - `{ "git": { deploymentEnabled: false } }`

On Github:

1. setup `production` and `staging` environments (Github’s environment)
   - `repository → settings → environments`
1. setup any environment secrets and variables

On Vercel:

1. create project
1. collect secrets and import to github at a repository level
   - `VERCEL_ORGANIZATION_ID`
   - `VERCEL_PROJECT_ID`
   - `VERCEL_TOKEN`
1. disconnect project from git

