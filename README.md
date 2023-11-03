# `sandbox-next-ci`

Tag-based build and deployment of a Next.js application to:

- Vercel
- ~~Cloudflare~~: deploying to Cloudflare requires us to integrate their SDK in our code, oh the coupling

## Vercel

> The cleanest way to get an integration with Vercel.

- https://vercel.com/guides/can-you-deploy-based-on-tags-releases-on-vercel

Secrets required:

- `VERCEL_ORG_ID`
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

1. create a new repository

On Vercel:

1. create a new project and link to the github repository
   - set framework to `next.js`
   - ignore that the deployment failed
1. disconnect project from git
   - `project → settings → git`
1. collect secrets and import to github at a repository level
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
1. set up `production`, `preview` and `development` environment variables

On local:

1. push to deploy
   - `git push && git push --tags`

