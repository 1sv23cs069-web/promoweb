# Quick Start Guide - CSE Department Website

Welcome! This guide will help you get the website up and running in just a few minutes.

## ⚡ Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The website will automatically open at `http://localhost:5173`

## 🔧 First Steps After Installation

### Update Google Form Link
The most important step is to add your Google Form for admissions:

1. Open `src/constants/index.js`
2. Find the line: `export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';`
3. Replace `YOUR_FORM_ID` with your actual Google Form ID

**How to get your Form ID:**
- Open your Google Form
- Click on the link icon (⋮ → Edit)
- Copy the ID from the URL: `https://docs.google.com/forms/d/e/**FORM_ID**/viewform`

### Update Contact Information
1. Open `src/constants/index.js`
2. Update `CONTACT_INFO` object:
   ```javascript
   export const CONTACT_INFO = {
     address: 'Your Department Address',
     phone: '+91-Your Phone Number',
     email: 'your.email@example.com',
     admissions: '+91-Admissions Number',
     website: 'www.yourwebsite.com',
   };
   ```

### Update Faculty Information
1. Open `src/constants/index.js`
2. Update the `FACULTY` array with actual faculty details

### Update Placement Statistics
1. Open `src/constants/index.js`
2. Update `PLACEMENT_STATS` object

### Update Recruiter Companies
1. Open `src/constants/index.js`
2. Update `RECRUITERS` array with actual company names

## 📁 Project Structure at a Glance

```
src/
├── components/          ← Navigation, Footer, Buttons
├── pages/              ← Each page of the website
├── constants/          ← All data (faculty, events, stats, etc.)
├── utils/              ← Animations and helper functions
├── App.jsx             ← Page routing setup
├── main.jsx            ← Application entry point
└── index.css           ← Global styling
```

## 🎨 Customizing the Website

### Change Colors
Edit `tailwind.config.js` and update the colors section:
```javascript
colors: {
  'forest-green': '#0B8F43',      // Change this
  'academic-gold': '#B67A3C',     // Change this
}
```

### Change Font
Edit `tailwind.config.js` and update the fontFamily section:
```javascript
fontFamily: {
  'display': ['Your Font', 'serif'],
  'body': ['Your Font', 'sans-serif'],
}
```

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Copy structure from an existing page
3. Add import to `App.jsx`
4. Add route in App.jsx
5. Update navbar in `src/constants/index.js`

### Update Page Content
- Most content is in `src/constants/index.js`
- Page layouts are in `src/pages/*.jsx`
- Components are in `src/components/*.jsx`

## 🚀 Building & Deploying

### Build for Production
```bash
npm run build
```
Creates a `dist/` folder ready for deployment.

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

For detailed deployment instructions, see `DEPLOYMENT.md`

## 🎬 Working with Animations

The website uses Framer Motion for animations. Pre-built animation patterns are in `src/utils/animations.js`.

Common animations:
- `fadeUpVariants` - Elements fade in while moving up
- `cardHoverVariants` - Cards lift up on hover
- `staggerContainer` - Children animate with delay
- `scaleUpVariants` - Elements scale up while appearing

## 📱 Testing on Different Devices

### Test Responsiveness
1. Open dev tools (F12)
2. Click device toolbar icon
3. Test on Mobile (375px), Tablet (768px), Desktop (1024px+)

## ❓ Common Questions

### Q: How do I change the home page statistics?
**A:** Edit `STATS` in `src/constants/index.js`

### Q: How do I add new events?
**A:** Add to `EVENTS` array in `src/constants/index.js`

### Q: How do I change the header/navbar?
**A:** Edit `src/components/Navbar.jsx` and navbar items in `src/constants/index.js`

### Q: How do I update faculty photos?
**A:** Edit the `image` property in `FACULTY` array (currently using emojis, replace with image paths)

### Q: Is there a backend required?
**A:** No! The website is fully static. Admissions form uses Google Forms, contact form can be configured with a backend service.

### Q: How do I add a contact form backend?
**A:** For production, use services like:
- Formspree (easiest)
- SendGrid
- Firebase
- Custom Node.js backend

### Q: Can I change the color scheme?
**A:** Yes! Edit colors in `tailwind.config.js` and update CSS custom colors in `src/index.css`

## 🐛 Troubleshooting

### Website won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Changes not showing
- Refresh browser (Ctrl+R or Cmd+R)
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server (Ctrl+C then npm run dev)

### 404 errors when clicking links
- Make sure routes in `App.jsx` match constant names
- Check that page files exist in `src/pages/`

### Images not showing
- Currently uses emojis - replace with actual image paths
- Put images in `public/` folder
- Reference as `/image-name.jpg`

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Deployment guide for all platforms
- **.github/copilot-instructions.md** - Development guidelines
- **tailwind.config.js** - Design tokens and configuration

## 🆘 Need Help?

1. Check the FAQ section in this guide
2. Review README.md for detailed documentation
3. Check DEPLOYMENT.md for deployment help
4. Review the code comments in component files

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Updated Google Form URL
- [ ] Updated contact information
- [ ] Updated faculty details
- [ ] Updated placement statistics
- [ ] Updated company logos
- [ ] Tested on mobile devices
- [ ] Tested all links work
- [ ] Tested admissions button links to form
- [ ] Checked spelling and grammar
- [ ] Verified animations work smoothly
- [ ] Built project successfully (`npm run build`)
- [ ] Tested build preview (`npm run preview`)

## 🎉 You're Ready!

Your CSE Department website is now ready. Start customizing it with your department's information and launch it to impress prospective students!

---

**Need to make changes later?**
1. Edit files in `src/`
2. Refresh browser to see changes
3. When done, run `npm run build` and deploy

**Happy coding! 🚀**
