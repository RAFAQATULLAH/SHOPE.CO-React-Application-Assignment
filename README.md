# React + Vite

## Deploying to Vercel

Import this repository into Vercel with the project root set to this folder. Vercel can use the existing `build` script; the output directory is `dist`.

Add `VITE_API_URL` in the Vercel project’s Environment Variables for Production (and Preview if needed). Set it to the deployed backend’s origin, without a trailing slash, for example `https://api.example.com`. Vite embeds `VITE_` variables in the client bundle, so this value must be a public API URL and must not contain secrets. Redeploy after changing it.

The `vercel.json` rewrite sends client-side routes to the Vite entry page, so routes such as `/cart` and `/product/:id` work when opened directly.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
