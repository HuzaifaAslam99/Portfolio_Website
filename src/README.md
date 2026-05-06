# Huzaifa Aslam — Portfolio

## Project Structure

```
src/
├── App.jsx                  ← Root layout + scroll navigation
├── main.jsx                 ← React entry point
├── index.css                ← Global styles & keyframes
├── assets/
│   ├── images/              ← Your existing images folder (copy as-is)
│   │   ├── profilepicUpdate.png
│   │   ├── html.png
│   │   ├── css.png
│   │   ├── tailwind.png
│   │   ├── js.png
│   │   ├── react.png
│   │   ├── nodejs.png
│   │   ├── express.png
│   │   ├── mongoDB.png
│   │   ├── foodcart.png
│   │   └── AiOrthoScanner.png
│   └── svg/                 ← Your existing SVG folder (copy as-is)
│       ├── github.svg
│       ├── instagram.svg
│       └── xContact.svg
├── components/
│   └── Navbar.jsx
└── pages/
    ├── Home.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    └── Contact.jsx
```

## Setup

```bash
# 1. Install dependencies (if not already)
npm install

# 2. Run dev server
npm run dev
```

## Tailwind CSS Setup

In your `vite.config.js` (or `tailwind.config.js`), make sure Tailwind is configured:

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

And in `index.css` (already included):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Image Notes

- **Solidity, Hardhat, Blockchain** — currently using CDN icons in `Skills.jsx`.
  If you add `solidity.png`, `hardhat.png`, `blockchain.png` to `assets/images/`,
  replace the CDN URLs with local imports at the top of `Skills.jsx`.

- **LinkedIn SVG** — You don't have a `linkedin.svg` in your svg folder.
  Add one or use the inline SVG already in `Contact.jsx` (it's hardcoded there).

- **Profile photo** — Uses `profilepicUpdate.png` from your images folder.

## To Add More Projects

In `Projects.jsx`, add a new entry to the `PROJECTS` array:

```js
{
  title: "Your Project",
  image: yourProjectImg,   // import at top
  description: "...",
  tagIcons: [htmlIcon, reactIcon],
  tagNames: ["HTML", "React"],
  github: "https://github.com/yourrepo",
}
```
