# 云飞扬社团官网 (Yun Fei Yang Official Site)

> "We Code the Future" - Great ideas start with a single line of code.

![Preview](https://yunfeiyang.club/og-image.png)

## 🚀 Project Overview

This is the official website for **Yun Fei Yang (YFY)**, a student technology community established in 2014. The site showcases our projects, achievements, and technical culture.

Built with **Nuxt 3**, aimed at Awwwards-level aesthetics and performance.

### ✨ Key Features (v3.0)

- **🎨 Dual Theme System**: Seamless Dark/Light mode switching with persisted state (`useTheme`).
- **🏆 Infinite Certificate Wall**: High-performance, velocity-responsive marquee for displaying awards.
- **✨ Motion Design**:
  - Scroll-driven reveal animations.
  - Interactive hover effects.
  - Smooth backdrop-filter navigation.
- **📝 Join Application**: Integrated application form with validation and resilient fallback strategies.
- **📊 Analytics & SEO**:
  - GA4 integration (`gtag.client.ts`).
  - Full SEO optimization with JSON-LD Schema and Open Graph tags.

## 🛠 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com) (Vue 3, Nitro)
- **Styling**: Vanilla CSS (CSS Variables, Modern Layouts)
- **Language**: TypeScript
- **Deployment**: Static / Serverless compatible

## 📦 Setup & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

## 🏗 Build & Deploy

```bash
# Build for production
npm run build

# Preview locally
npm run preview
```

## 📁 Project Structure

- `app/components`: Reusable UI components (Hero, Nav, CertificateWall, etc.)
- `app/composables`: Shared logic (`useTheme`, `useScrollReveal`)
- `app/assets/css`: Global styles and variables (`main.css`)
- `content`: Static data sources (JSON)

## 📄 License

MIT License © 2024 Yun Fei Yang Club
