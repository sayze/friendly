# Friendly

A simple and lightweight contact management application to store friends.

This is the frontend only — it talks to a separate `friendly-api` backend over
HTTP. Set `VITE_API_URL` (see [Environment variables](#environment-variables))
to point it at your backend.

## Prerequisites

* Node.js 24.15+ (LTS)
* npm 11+

## Install

```
npm install
```

## Environment variables

| Variable       | Default                 | Purpose                     |
| -------------- | ------------------------ | ---------------------------- |
| `VITE_API_URL` | `http://localhost:4040` (dev) | Base URL of the `friendly-api` backend |

Copy `.env.example` to `.env.local` and adjust as needed for local development.
`.env.production` sets the production API URL used by `npm run build`.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot module reloading.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Serves the production build from `dist` locally, for a final sanity check.

### `npm run test`

Runs the test suite once with Vitest. Use `npm run test:watch` for watch mode.

### `npm run lint` / `npm run lint:fix`

Lints `src` with ESLint; `lint:fix` also applies safe fixes.

### `npm run format`

Formats the project with Prettier.

### `npm run storybook`

Starts Storybook on the host machine at port 6006.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run build-storybook`

Builds a static Storybook site to `storybook-static`.

## Docker

```
docker build -t friendly-ui .
docker run -p 8080:80 friendly-ui
```

Builds the app and serves the static output with nginx.

## Deployment

The `.github/workflows/publish.yml` workflow builds and pushes the Docker
image to Docker Hub (`sayze/friendly-ui`) on every push to `master`. It only
publishes the image — deploying it to an environment is a separate, manual
step (see `charts/` for the Helm chart used in production).
