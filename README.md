# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Environment & Deployment 🚀

This project reads the API base URL from an environment variable named `VITE_API_URL` (see `src/components/Content.jsx`).

- During development you can set it in the root `.env` file (already present) or create a `.env.local`.
- When running `npm run build` Vite will inline the value from the corresponding env file (`.env.production` if it exists, otherwise `.env`).
- For example, to point at your recently deployed backend update `.env` to:
  ```env
  VITE_API_URL=https://backend-1-xo59.onrender.com
  ```
  and commit the change (keep secret keys out of version control!).

### Deployment Tips

1. **Build**
   ```bash
   npm install
   npm run build
   ```
   This creates a `dist/` folder containing static assets.

2. **Host**
   Any static host that serves the contents of `dist/` will work (Netlify, Vercel, Render, GitHub Pages, etc.).
   - If you use a service like Vercel/Netlify/Render, configure `VITE_API_URL` in their environment settings instead of committing it.
   - Ensure CORS is enabled on your backend so the frontend can fetch data from `https://backend-1-xo59.onrender.com`.

3. **Routing**
   - If you deploy under a subpath, set `base` in `vite.config.js` accordingly or use the `--base` flag with the build script.

4. **Local development**
   Start the dev server with `npm run dev`. You can switch between backends by editing the env file or overriding `VITE_API_URL` when starting:
   ```bash
   VITE_API_URL=http://localhost:5000 npm run dev
   ```

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
