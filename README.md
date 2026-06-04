# CSE Department Website - Shridevi Institute of Engineering & Technology

A modern, premium, responsive multi-page website built with React, Vite, Tailwind CSS, and Framer Motion. Designed for admissions and department promotion with beautiful animations and excellent user experience.

## 🎯 Features

### Pages
- **Home** - Hero section with announcement bar, statistics, placement highlights, and featured content
- **About** - Department overview, vision, mission, PEOs, and timeline
- **Faculty** - Professional faculty directory with search and filter capabilities
- **Placements** - Placement statistics, recruiters, student success stories, and placement process
- **Achievements** - Student and faculty achievements with interactive cards
- **Events** - Event showcase, calendar, and highlights
- **Contact** - Contact information, contact form, location map, and FAQs

### Key Features
- ✅ Sticky navbar with admission button
- ✅ Floating admission button on all pages
- ✅ Premium announcement bar at top of homepage
- ✅ Animated statistics counters
- ✅ Smooth scroll-triggered animations
- ✅ Responsive design (mobile-first)
- ✅ Fast loading with Vite
- ✅ SEO optimized
- ✅ Google Forms integration
- ✅ Framer Motion animations

## 🎨 Design System

### Color Palette
- **Forest Green**: #0B8F43 (Primary)
- **Academic Gold**: #B67A3C (Accent)
- **Dark Charcoal**: #1E1E1E (Text)
- **White**: #FFFFFF (Background)

### Typography
- **Headings**: Playfair Display / Merriweather
- **Body**: Inter / Poppins

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd PromotionWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Google Form URL**
   - Update the `GOOGLE_FORM_URL` in `src/constants/index.js` with your actual Google Form link
   - Replace `YOUR_FORM_ID` with your actual Google Form ID

4. **Start development server**
   ```bash
   npm run dev
   ```
   - Opens automatically at `http://localhost:5173`

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```
- Creates optimized build in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

**Alternative deployment options:**
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Push to GitHub and enable Pages
- **Traditional Hosting**: Upload `dist/` folder via FTP


## 🔧 Customization

### Update Content
Edit `src/constants/index.js` to update:
- Statistics
- Faculty data
- Placements information
- Events list
- Facilities
- Contact information
- Recruiter logos
- Achievement data

### Update Styles
- Modify Tailwind config in `tailwind.config.js`
- Update colors and fonts
- Adjust animations

### Update Forms
- Replace Google Form URL in `src/constants/index.js`
- Update form fields in `Contact` page component

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## ⚡ Performance

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimization Features
- Code splitting with lazy loading
- Image optimization
- CSS minification
- JavaScript minification
- Efficient animations using Framer Motion
- Smooth scrolling behavior

## 🎬 Animation Styles

- **Fade-up reveals**: Staggered entry animations
- **Hover effects**: Subtle card elevation
- **Number counters**: Animated stat counters
- **Scroll-triggered**: Reveal animations on scroll
- **Parallax**: Subtle background parallax
- **Pulse animations**: Floating button pulse effect
- **Smooth transitions**: All interactions are smooth

## 🔒 SEO & Accessibility

- Meta tags optimization
- Google Font integration
- Semantic HTML structure
- ARIA labels on interactive elements
- High contrast colors
- Keyboard navigation support

## 📞 Support for Custom Features

To add custom features:

1. **New Pages**: Create new `.jsx` file in `src/pages/`
2. **New Components**: Add to `src/components/`
3. **New Constants**: Update `src/constants/index.js`
4. **New Animations**: Add to `src/utils/animations.js`
5. **New Hooks**: Add to `src/utils/hooks.js`

## 🤝 Credits

Built with:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

## 📄 License

This project is created for Shridevi Institute of Engineering & Technology.

## 🎓 Department Information

**Department of Computer Science & Engineering**
Shridevi Institute of Engineering & Technology
Sira Road, Tumkur, Karnataka 572106

**Contact**: cse@shridevi.edu.in

---

Made with ❤️ for the CSE Department
