# Timothy Kipngeno Bett - Portfolio Website

A modern, responsive portfolio website showcasing dual expertise in **Quantity Surveying** and **Web Development**. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://github.com/timothybett/portfolio-website/raw/main/preview.png)

## Features

### Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport intro with animated name, dual identity display, and CTA buttons |
| **Dual Identity** | Side-by-side cards showcasing QS and Web Dev skills with a connecting "bridge" element |
| **Projects** | Tabbed interface filtering projects by QS + Tech, Quantity Survey, or Web Development |
| **Skills Matrix** | Dark-themed technical arsenal displaying skills across both domains with bridge technologies |
| **Contact** | Contact information and a functional form with project type selection |
| **Navigation** | Auto-hiding navbar that appears on scroll with smooth section navigation |
| **Footer** | Social links and copyright |

### Key Features
- **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- **Smooth Animations** - Scroll-triggered animations powered by Framer Motion
- **Tabbed Projects** - Filter projects by category (QS + Tech / QS / Dev)
- **Interactive Contact Form** - With project type dropdown and validation
- **Modern Design** - Clean, professional aesthetic with the signature teal (#2d4a5c) and gold (#c9a55c) color palette

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/timothybett/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Build Output
The production build will be in the `dist/` folder, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

```
portfolio-website/
├── src/
│   ├── sections/
│   │   ├── Navigation.tsx       # Fixed navbar with scroll behavior
│   │   ├── HeroSection.tsx      # Full-viewport hero with CTAs
│   │   ├── DualIdentitySection.tsx  # QS + Dev cards with bridge
│   │   ├── ProjectsSection.tsx  # Tabbed project showcase
│   │   ├── SkillsMatrix.tsx     # Dark skills visualization
│   │   ├── ContactSection.tsx   # Contact info + form
│   │   └── Footer.tsx           # Footer with social links
│   ├── pages/
│   │   └── Home.tsx             # Main page composing all sections
│   ├── components/
│   │   └── ui/                  # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── App.tsx                  # Root component with routing
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Teal | `#2d4a5c` | Hero, Contact, dark backgrounds |
| Accent Gold | `#c9a55c` | CTAs, highlights, accent text |
| Dark Navy | `#1e333f` | Skills matrix background |
| Darker Navy | `#1a2d38` | Footer background |

## Customization

### Updating Personal Information
Edit the section components in `src/sections/` to update:
- Name, title, and tagline (HeroSection.tsx)
- Skills and expertise (DualIdentitySection.tsx, SkillsMatrix.tsx)
- Projects (ProjectsSection.tsx)
- Contact details (ContactSection.tsx)

### Adding Projects
In `src/sections/ProjectsSection.tsx`, add new project objects to the `projects` array:

```typescript
{
  id: 7,
  title: "Your New Project",
  description: "Project description here.",
  category: "QS + Tech",
  tags: ["Tag"],
  tech: ["Tech1", "Tech2"],
  type: "qs-tech",
  icon: <BarChart3 className="w-16 h-16 text-white/80" />,
}
```

## Deployment

### Deploy to GitHub Pages
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Deploy to Netlify/Vercel
Simply connect your GitHub repository to Netlify or Vercel for automatic deployments on every push.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built by Timothy Kipngeno Bett** - Quantity Surveyor & Web Developer
