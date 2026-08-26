# Friendly

A contact-management SPA (add/search/edit/delete "friends", each with a name and photo). Pure frontend — talks to a separate `friendly-api` backend over REST/`multipart/form-data`; that backend's code is not in this repo.

## Stack

- React 19, Vite 8 (`@vitejs/plugin-react`)
- react-bootstrap 2 + Bootstrap 5 (SCSS)
- Formik 2 + Yup 1 for forms/validation
- Font Awesome 7 (`@fortawesome/*`)
- axios for HTTP
- Vitest + Testing Library for tests, Storybook 10 (Vite builder) for component development
- ESLint 9 (flat config) + Prettier 3, enforced pre-commit via husky + lint-staged

## Commands

```
npm install       # install deps (Node 24.15+ required, see Notes)
npm run dev        # start dev server (Vite, default port 5173)
npm run build       # production build -> dist/
npm run preview       # serve the production build locally
npm run test         # run vitest once
npm run test:watch      # vitest watch mode
npm run lint / lint:fix    # eslint
npm run format         # prettier --write
npm run storybook       # storybook dev server, port 6006
npm run build-storybook    # static storybook build -> storybook-static/
```

## Architecture

```
src/
  main.jsx              entry point (ReactDOM.createRoot)
  App.jsx                root component: providers + layout
  fontawesome.js            icon library registration
  screens/Home.jsx             top-level screen
  components/
    Friend/                domain components: List, Tile, Delete (List is the
                              container: owns data fetching + the friend CRUD handlers)
    UI/                    generic, non-domain components: ActionBar, Form,
                              ImgUpload, Modal, NoContent, SearchInput
  services/
    api/                  axios calls to the backend (getFriends/addFriend/updateFriend/deleteFriend)
    store/                 useReducer-based state (useStore) + action creators
    providers/               React Context providers: FilterContext (search/pagination),
                              ModalContext (drives the single global Modal)
```

Data flow: `Friend/List` is the only component that talks to `services/api`. It
owns a `useStore` reducer and dispatches `services/store` actions. Editing/adding/deleting
a friend opens `components/UI/Modal` (driven by `ModalContext`, mounted once in
`services/providers/Modal.jsx`) with a `Form` or `Delete` component as content.

There is no router — this is a single screen (`Home`).

## Conventions

- No semicolons, single quotes, trailing commas — enforced by Prettier (`.prettierrc`); do not hand-format.
- Components that only render JSX + hooks use the automatic JSX runtime — do **not** add `import React from 'react'` unless `React.*` is referenced directly (e.g. `React.StrictMode`).
- Internal imports use bare specifiers (`services/api`, `components/Friend`, `screens/Home`, `fontawesome`) resolved via aliases in `vite.config.js` (`resolve.alias`) — mirrored in `jsconfig.json` for editor IntelliSense. Keep both in sync if you add a new top-level alias.
- Files containing JSX use the `.jsx` extension; plain modules (`services/api`, `services/store`, `fontawesome.js`) stay `.js`.
- Bootstrap 5 utility classes (`me-*`/`ms-*`/`text-end`/`float-end`, not the old `mr-*`/`ml-*`/`text-right`/`float-right`).
- `services/api/index.js` reads the API base URL from `import.meta.env.VITE_API_URL` (see `.env.example`, `.env.production`) — don't hardcode hosts.

## Notes

- Requires Node 24.15+ — `jsdom`/`vitest`'s transitive deps enforce this via `engines`, and it's also what fixed a real `npm install`/`npm ci` mismatch: npm <10.9.8 has an arborist bug that crashes resolving this dependency tree, and older npm's `--legacy-peer-deps` handling of optional peers (e.g. `@storybook/react-vite`'s optional `typescript` peer) isn't stable across npm patch versions — it produced a lockfile that `npm ci` then rejected in Docker. Don't reach for `--legacy-peer-deps` again if `npm install` complains; upgrade npm instead.
- The backend (`friendly-api`) is not part of this repo; `npm run dev` against it locally expects it on `http://localhost:4040` by default (`.env.example`).
- No router is wired up; if a second screen is ever added, `react-router-dom` was deliberately removed as dead weight and would need to be reintroduced.
