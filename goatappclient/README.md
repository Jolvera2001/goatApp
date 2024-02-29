# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Goat App
## Current State
- server and client now talk to each other **(npm run build goes into server static files)**
- any merges or commits to main branch will automatically redeploy updated server code **(CI/CD)**
- Still sticking with Material UI for development
- npm start does the dev server for debugging

## Next Steps
- Figure out react routing properly
- set up layout for *home* page whenever user logs in
- Continue landing page development
- get client logic first then work out MongoDB on Ktor later
