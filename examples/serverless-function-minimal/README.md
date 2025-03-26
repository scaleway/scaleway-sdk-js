# Function example

We assume that you have the dependency [serverless](https://www.serverless.com/) installed on your computer.

## A. How to run

⚠️ **Important:** this example creates your Scaleway profile (required by the Javascript client) using environment variables: please rename `.env.template` to `.env` (git ignored) and update the variables.

- Note: by design, Serverless framework overrides environment variables already defined in your Scaleway account.

**Steps:**

1. Install dependencies: `pnpm install`.
2. Build the project: `pnpm run build`.
3. Deploy in production: `SCW_DEFAULT_PROJECT_ID= SCW_SECRET_KEY= serverless deploy`

- Or just `serverless deploy` if you already defined `SCW_DEFAULT_PROJECT_ID` and `SCW_SECRET_KEY` in your bash profile.
