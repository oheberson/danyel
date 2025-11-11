# N.O.T.A. Landing Page

A beautiful, modern landing page for the N.O.T.A. acoustic guitar method, featuring smooth animations and a minimal SaaS-style design.

## Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS** - Styling
- **GSAP** - Scroll animations
- **Framer Motion** - Element animations
- **Inter Font** - Modern typography

## Design System

- **Colors**: Soft pastels, beige tones, white and black
- **Style**: Minimal, rounded corners, aerial feel
- **Animations**: Smooth fade-ins, scroll-triggered reveals, hover effects

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
danyel/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.js        # Root layout
│   └── page.js          # Main page with GSAP setup
├── components/
│   ├── Hero.js          # Hero section with N.O.T.A. animation
│   ├── MethodSection.js # N.O.T.A. method breakdown
│   ├── FeaturesSection.js # Why N.O.T.A. works
│   └── CTASection.js    # Call-to-action section
└── public/              # Static assets
```

## Features

- ✨ Animated hero section with N.O.T.A. acronym
- 🎯 Scroll-triggered animations using GSAP
- 🎨 Smooth element animations with Framer Motion
- 📱 Fully responsive design
- 🎸 Minimal, modern SaaS aesthetic

## Next Steps

- Add ebook download functionality
- Integrate consultation booking system
- Add more interactive elements
- Optimize animations for performance

