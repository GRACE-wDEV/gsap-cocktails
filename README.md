
# React + Vite

## Deployment Notes

- All static assets (images, fonts, videos) should be placed in the `public` folder and referenced with `/images/...`, `/fonts/...`, `/videos/...`.
- The Vite config sets `base: './'` for correct asset resolution in most static deployments (Netlify, Vercel, GitHub Pages, etc).
- If deploying to a custom subfolder, update the `base` option in `vite.config.js` accordingly.
- If you use GSAP SplitText, ensure your deployment environment supports it (SplitText is a paid plugin).
- For best results, run:
	```sh
	npm install
	npm run build
	# Deploy the contents of the dist/ folder
	```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
