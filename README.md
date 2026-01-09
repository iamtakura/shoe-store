# Modern Shoe Store

A premium, responsive shoe store website built with React, Vite, and TypeScript.

## 🚀 Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Custom Variables)
- **Routing**: [React Router](https://reactrouter.com/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

## 🛠️ Setup & Installation

1. **Clone the repository** (if applicable) or navigate to the project folder.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build

To build the application for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

```bash
npm test
```

## 🌍 Deployment (GitHub Pages)

This project is configured for deployment on GitHub Pages.

### 1. Push to GitHub
If you haven't already:
1. The repository `shoe-store` already exists on your profile.
2. Run the following commands in your terminal:
   ```bash
   git remote add origin https://github.com/iamtakura/shoe-store.git
   git branch -M main
   git push -u origin main
   ```

### 2. Enable GitHub Pages
1. Go to your repository **Settings** > **Pages**.
2. Under "Build and deployment", select **Source** as `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/(root)`.

### 3. Access the Site
Your site will be live at:
> `https://iamtakura.github.io/shoe-store/`

*Note: The `base` path in `vite.config.ts` is set to `/shoe-store/`. If you deploy to a different path, update this value.*

## ✨ Key Features

- **Dynamic Cart**: Persistent shopping cart with real-time updates.
- **Checkout Flow**: Dedicated checkout page with form validation.
- **Premium UI**: Smooth animations, parallax effects, and toast notifications.
- **Responsive Design**: Optimized for all device sizes.
