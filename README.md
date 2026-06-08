# Sam's Portfolio — React (Vite) Migration Guide

## File Structure

Copy these into your existing Vite project:

```
your-vite-project/
├── index.html                  ← replace the existing one
└── src/
    ├── main.jsx                ← replace the existing one
    ├── index.css               ← replace the existing one
    ├── App.jsx
    ├── assets/                 ← PUT ALL YOUR IMAGES/GIFS HERE
    │   ├── sammy1.jpg
    │   ├── sleepy.gif
    │   ├── idle1.gif
    │   ├── witchy.gif
    │   ├── UNITY.png
    │   ├── gamevid.mp4
    │   ├── CALCU.png           ← add when ready
    │   ├── C++.png             ← add when ready
    │   └── SNAKE.png           ← add when ready
    ├── hooks/
    │   ├── useTypewriter.js
    │   └── useScrollReveal.js
    └── components/
        ├── Cursor.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── About.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Steps

1. Copy all files from this output into your Vite project.
2. Move your image/gif/video assets into `src/assets/`.
3. In `Projects.jsx`, uncomment the import lines for CALCU.png, C++.png, SNAKE.png
   once you add those files to `src/assets/`.
4. Run `npm run dev` — it should work immediately.

## Adding Missing Images

In `Projects.jsx`, find these lines and uncomment them:
```js
// import calcuImg from '../assets/CALCU.png';
// import cppImg from '../assets/C++.png';
// import snakeImg from '../assets/SNAKE.png';
```
Then update the `src: null` entries in the `projects` array to use those imports.
