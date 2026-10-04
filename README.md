# 🏥 Jagbasrai — Official Website

> A modern, multilingual, AI-assisted website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Designed to go fully paperless with digital, AI-powered protocols that boost efficiency and improve accuracy.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-goautomatemd.com-success?style=flat-square)](https://goautomatemd.com)
[![Preview](https://img.shields.io/badge/🔗%20Preview-clientproject--ten.vercel.app-blue?style=flat-square&logo=vercel)](https://clientproject-ten.vercel.app)

---

## 🌐 Live URLs

| Environment        | URL                                                                 |
|--------------------|---------------------------------------------------------------------|
| 🚀 **Production**  | [https://goautomatemd.com](https://goautomatemd.com)               |
| 🔗 **Preview**     | [https://clientproject-ten.vercel.app](https://clientproject-ten.vercel.app) |

---

## ✨ Features

- ⚡ **Next.js 16** with App Router & Turbopack for blazing-fast development
- 🎨 **Tailwind CSS v4** — utility-first styling with zero-config setup
- 🌍 **Internationalisation (i18n)** powered by `next-intl`
- 🔐 **Authentication** via `next-auth`
- 📋 **Form handling** with `react-hook-form` + `zod` schema validation
- 🤖 **Google reCAPTCHA v2** integration
- 🗺️ **Auto-generated sitemap** using `next-sitemap`
- 📊 **Charts & Data Visualisation** with `recharts`
- 🎞️ **Smooth animations** via `framer-motion`
- 🛒 **State management** with Redux Toolkit + Redux Persist
- 🍪 **Cookie banner & GA4 consent** management
- 📱 **Fully responsive** layout across all devices
- 🧩 **Radix UI** component primitives for accessibility-first design
- 🔗 **SEO-optimised** with custom `<Seo />` component & metadata API

---

## 🗂️ Project Structure

```
jagbasrai/
├── app/                   # Next.js App Router
│   ├── (home)/            # Route group: home, about, news, privacy
│   ├── api/               # API route handlers
│   ├── metadata/          # Shared metadata configuration
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── home/              # Homepage sections
│   ├── about/             # About page components
│   ├── news/              # News & blog section
│   ├── blog/              # Blog components
│   ├── common/            # Shared layout (Header, Footer, etc.)
│   ├── reuseable/         # Generic reusable elements
│   ├── ui/                # Radix-based shadcn/ui primitives
│   ├── CookieBanner.tsx   # Cookie consent banner
│   ├── GA4Consent.tsx     # Google Analytics 4 consent
│   ├── Seo.tsx            # SEO meta component
│   └── ToastProvider.tsx  # React-Toastify provider
├── lib/                   # Utilities, helpers, API clients
├── public/                # Static assets (images, icons, fonts, videos)
├── help/                  # Internal docs / content helpers
├── next.config.ts         # Next.js configuration
├── next-sitemap.config.js # Sitemap configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment settings
```

---

## 🛠️ Tech Stack

| Category          | Technology                                      |
|------------------|-------------------------------------------------|
| Framework         | [Next.js 16](https://nextjs.org/)              |
| Language          | TypeScript 5                                   |
| Styling           | Tailwind CSS v4                                |
| UI Primitives     | Radix UI + shadcn/ui                           |
| State Management  | Redux Toolkit + Redux Persist                  |
| Forms             | React Hook Form + Zod                          |
| Auth              | NextAuth.js                                    |
| i18n              | next-intl                                      |
| Animations        | Framer Motion                                  |
| Charts            | Recharts                                       |
| Carousels         | Swiper, Embla Carousel, React Slick            |
| Deployment        | Vercel                                         |

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or `yarn` / `pnpm` / `bun`)

### 1. Clone the repository

```bash
git clone https://github.com/Ramjanict/jagbasrai.git
cd jagbasrai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key
NEXT_PUBLIC_GA_ID=your_ga4_measurement_id
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🚀

---

## 📦 Available Scripts

| Command           | Description                              |
|------------------|------------------------------------------|
| `npm run dev`    | Start dev server with Turbopack          |
| `npm run build`  | Production build + generate sitemap      |
| `npm run start`  | Start production server                  |
| `npm run lint`   | Run ESLint checks                        |

---

## 🚢 Deployment

This project is optimised for **[Vercel](https://vercel.com)**. Push to `main` and Vercel will auto-deploy.

| Environment        | URL                                                                                   |
|--------------------|---------------------------------------------------------------------------------------|
| 🚀 **Production**  | [https://goautomatemd.com](https://goautomatemd.com)                                 |
| 🔗 **Preview**     | [https://clientproject-ten.vercel.app](https://clientproject-ten.vercel.app)         |

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ramjanict/jagbasrai)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is proprietary. All rights reserved © Jagbasrai.

---

<p align="center">Built with ❤️ using Next.js & Tailwind CSS</p>
