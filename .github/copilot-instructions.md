# Copilot Instructions for CSE Department Website

This file contains development guidelines for working with this project using GitHub Copilot.

## Project Overview

This is a modern, premium, responsive multi-page website for the CSE Department at Shridevi Institute of Engineering & Technology, built with:

- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Architecture**: Component-based with lazy loading
- **Pages**: 7 pages (Home, About, Faculty, Placements, Achievements, Events, Contact)

## Code Conventions

### Component Structure

All components follow this structure:

```jsx
import React from 'react';
import { motion } from 'framer-motion';
// ... other imports

export default function ComponentName() {
  // State and logic
  const [state, setState] = React.useState(initial);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
    >
      {/* JSX content */}
    </motion.div>
  );
}
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Hero`, `FacultyCard`)
- **Functions**: camelCase (e.g., `handleClick`, `useCountUp`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `GOOGLE_FORM_URL`)
- **CSS Classes**: kebab-case (e.g., `btn-primary`, `text-center`)

### Color Usage

Always use Tailwind classes with custom color palette:

- **Primary**: `bg-forest-green`, `text-forest-green`
- **Accent**: `bg-academic-gold`, `text-academic-gold`
- **Dark**: `bg-dark-charcoal`, `text-dark-charcoal`

Never hardcode colors - use the custom colors defined in `tailwind.config.js`.

## Animation Patterns

### Recommended Animation Variants

```javascript
// Use these pre-defined animations from src/utils/animations.js
import { 
  fadeUpVariants, 
  staggerContainer, 
  cardHoverVariants 
} from '@/utils/animations';

// Apply to components
<motion.div variants={fadeUpVariants} initial="hidden" animate="visible">
  {/* content */}
</motion.div>

// For hover effects
<motion.div variants={cardHoverVariants} whileHover="hover">
  {/* content */}
</motion.div>
```

### Custom Animation Guidelines

- Keep animations subtle and premium
- Avoid excessive bouncing or flashy effects
- Use 0.3-0.6s duration for most animations
- Always set `once: true` on scroll-triggered animations to avoid repeated animations

## Data Management

### Constants

All app data lives in `src/constants/index.js`:

```javascript
export const STATS = [
  { number: 450, label: 'Students', icon: 'Users' },
  // ... more stats
];

export const FACULTY = [
  { id: 1, name: 'Dr. Name', ... },
  // ... more faculty
];
```

**When adding new data:**
1. Add to `src/constants/index.js`
2. Import with: `import { CONSTANT_NAME } from '../constants'`
3. Map through the data in components

## Component Guidelines

### Page Components (in `src/pages/`)

- Use lazy loading in `App.jsx`
- Include Hero section with consistent styling
- Use `motion` from framer-motion for all animated sections
- Include CTA buttons where appropriate

### Reusable Components (in `src/components/`)

- Keep components small and focused
- Accept props for flexibility
- Export as default
- Use TypeScript-style prop documentation in comments

## SEO & Performance

### SEO Best Practices

- Use semantic HTML (h1, h2, section, article, etc.)
- Include meta descriptions
- Use proper heading hierarchy
- Add alt text to images (using emojis for now)

### Performance

- Use lazy loading for pages
- Use `whileInView` for animations on scroll
- Split large components into smaller ones
- Avoid inline functions in render

## Routing

Routes are defined in `App.jsx`:

```javascript
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
// ... more routes

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

**Adding new pages:**
1. Create file in `src/pages/PageName.jsx`
2. Lazy import in `App.jsx`
3. Add route in Routes

## Styling Guidelines

### Tailwind Classes

Use utility-first approach:

```jsx
// ✅ Good
<div className="px-4 py-6 bg-white rounded-lg shadow-lg">

// ❌ Avoid custom CSS
<div style={{ padding: '24px', background: 'white' }}>
```

### Custom Classes

Defined in `src/index.css`:

```css
@layer components {
  .btn-primary {
    @apply px-8 py-3 bg-forest-green text-white font-semibold rounded-lg;
  }
}
```

Use these custom classes for common patterns (buttons, cards, sections).

## Environment Variables

Sensitive data uses `.env` files:

```
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
```

Access with: `import.meta.env.VITE_GOOGLE_FORM_URL`

## Common Tasks

### Adding a New Page

1. Create `src/pages/NewPage.jsx`
2. Add to `App.jsx` lazy imports
3. Add route in Routes
4. Add to navbar items in `src/constants/index.js`

### Adding New Data

1. Add to `src/constants/index.js`
2. Import in component
3. Map and render

### Creating Animated Component

```jsx
import { motion } from 'framer-motion';
import { fadeUpVariants, cardHoverVariants } from '@/utils/animations';

export default function NewCard({ item, index }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg card-hover"
    >
      {/* content */}
    </motion.div>
  );
}
```

## Testing Checklist

Before committing:

- [ ] Component renders without errors
- [ ] All links work correctly
- [ ] Animations are smooth
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Form submissions work
- [ ] External links open in new tabs
- [ ] No console errors
- [ ] Colors follow brand palette

## File Locations

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── constants/          # App constants and data
├── utils/              # Helper functions and hooks
├── App.jsx             # Main app routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Key Files to Know

- `src/constants/index.js` - All app data
- `src/utils/animations.js` - Reusable animations
- `src/App.jsx` - Routing configuration
- `tailwind.config.js` - Design tokens and colors
- `vite.config.js` - Build configuration

## Deployment

- Build: `npm run build`
- Deploy: Use Vercel (recommended) or Netlify
- See `DEPLOYMENT.md` for detailed instructions

---

**Last Updated**: June 2024
**Maintained By**: CSE Department Website Team
