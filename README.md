# Simple Todo App (React + TypeScript + Vite)

A minimal, opinionated Todo application built with React, TypeScript, and Vite — intended as a small starter project and learning reference.

Features
- Create, edit, complete, and delete todos
- Type-safe components and state with TypeScript
- Fast development experience with Vite (HMR)
- ESLint configuration for consistent code quality

Tech stack
- React
- TypeScript
- Vite
- ESLint (configurable)

Prerequisites
- Node.js 16+ or newer
- npm, yarn, or pnpm

Get started (npm)
1. Install dependencies
   npm install

2. Run the development server
   npm run dev

3. Build for production
   npm run build

4. Preview production build locally
   npm run preview

If you prefer yarn:
- yarn
- yarn dev
- yarn build
- yarn preview

Project structure (high level)
- src/ — application source (components, pages, styles, types)
- public/ — static assets
- index.html — Vite entry
- tsconfig.*.json — TypeScript configuration
- eslint.config.js — ESLint configuration

ESLint and formatting
- Lint:
  npm run lint
- Fix lint issues automatically:
  npm run lint -- --fix
- If Prettier or other formatters are configured, run their commands as needed.

Customizing
- Update TypeScript or ESLint settings in the corresponding config files.
- Add persistence (localStorage or API) by editing todo state logic in src.

Testing
- This starter does not include tests by default. Consider adding a test runner (Vitest, Jest) and writing unit/component tests under src/__tests__.

Contributing
- Fork the repo, create a branch, and open a pull request.
- Keep changes small and focused; add or update tests when applicable.
- Follow the existing TypeScript and linting conventions.

License
- MIT License

Contact
- Maintainer: Shahriyar-Rahim
- File issues or PRs on this repository for bugs, improvements, or questions.

Enjoy building — tell me if you want a README variant with badges, setup for CI, or an expanded development guide.
