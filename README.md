## Venus Labs Website

Modern website built with Next.js App Router, TypeScript, Tailwind CSS.

### What’s included
- App Router (`src/app`)
- TypeScript + ESLint (Next config)
- Tailwind CSS
- Responsive, accessible landing page

### Deploying
- Recommended: connect this repo to Vercel and import the project.
- On every push to `main`, Vercel will build and deploy automatically.

### Domain
- After the project is on Vercel, add domain `venuslabs.net` in Vercel → Domains.
- In Squarespace domain settings, update DNS to the Vercel records shown.
- Transfer the domain later if desired.

### Customize
- Edit `src/app/page.tsx` for content.
- Update metadata in `src/app/layout.tsx`.
- Update colors/typography in `src/app/globals.css` or add components.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
