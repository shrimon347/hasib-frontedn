# Modern Portfolio Website

![Portfolio Preview](public/preview.png)

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI. Features smooth animations, dynamic content loading, and a sleek design focused on showcasing professional work.

## ✨ Features

-   🎨 Modern UI with Tailwind CSS and Shadcn UI
-   🔄 Smooth animations using Framer Motion
-   📱 Fully responsive design
-   🚀 Built with Next.js 14 and TypeScript
-   🎯 SEO optimized
-   ⚡ Optimized performance
-   🖱️ Custom cursor effects
-   🔄 Dynamic content loading
-   📝 Contact form with validation

## 🛠️ Tech Stack

-   **Framework:** Next.js 14
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** Shadcn UI
-   **Animations:** Framer Motion
-   **Smooth Scroll:** Lenis
-   **Form Handling:** React Hook Form
-   **Toast Notifications:** Sonner
-   **Icons:** Lucide Icons

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. **Install dependencies**

```bash
cd portfolio
npm install
```

3. **Run the development server**

```bash
npm run dev
```

## 📂 Project Structure

```plaintext
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── layout/        # Layout components
│   ├── sections/      # Page sections
│   ├── shared/        # Shared components
│   └── ui/            # UI components
├── hooks/             # Custom React hooks
├── lib/              # Utility functions
├── public/           # Static assets
└── utils/            # Helper functions
```

## 🎯 Key Components

-   **Hero Section**: Dynamic hero section with typing animation
-   **About Section**: Professional introduction with animated elements
-   **Portfolio**: Showcase of projects with case studies
-   **Experience**: Timeline of work history
-   **Services**: Service offerings with interactive cards
-   **Contact**: Contact form with validation
-   **Custom Cursor**: Interactive cursor effects
-   **Testimonials**: Client testimonials slider

## 🔧 Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAIL_SERVICE=your_email_service
NEXT_PUBLIC_EMAIL_TEMPLATE=your_template_id
NEXT_PUBLIC_EMAIL_USER=your_user_id
```

Customize the theme in `tailwind.config.ts`:

```typescript
theme: {
    extend: {
        colors: {
            // Your custom colors
        }
    }
}
```

## 📱 Responsive Design

-   Mobile-first approach
-   Breakpoints:
    -   sm: 640px
    -   md: 768px
    -   lg: 1024px
    -   xl: 1280px
    -   2xl: 1536px

## 🚀 Deployment

1. **Build the project**

```bash
npm run build
```

1. **Start production server**

```bash
npm start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

-   [Shadcn UI](https://ui.shadcn.com) for the amazing component library
-   [Framer Motion](https://www.framer.com/motion/) for smooth animations
-   [Studio Freight](https://github.com/studio-freight/lenis) for the Lenis smooth scroll

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
