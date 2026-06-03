# Deployment Guide

This guide covers deploying the CSE Department website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the optimal choice for React + Vite applications with zero configuration.

### Steps:

1. **Push to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/cse-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a React + Vite project
   - Click "Deploy"

3. **Add Environment Variables (if needed)**
   - Go to Project Settings → Environment Variables
   - Add `VITE_GOOGLE_FORM_URL` if using environment variables

4. **Custom Domain**
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records as per Vercel instructions

---

## 📦 Deploy to Netlify

### Steps:

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy Option A: Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/` folder
   - Done! Your site is live

3. **Deploy Option B: GitHub Integration**
   - Connect GitHub account
   - Select repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click Deploy

4. **Custom Domain**
   - Go to Domain settings
   - Add your custom domain
   - Update DNS records

---

## 🐙 Deploy to GitHub Pages

### Steps:

1. **Update vite.config.js**
   ```javascript
   export default {
     base: '/cse-website/', // Change to your repo name if not using custom domain
     // ... rest of config
   }
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **Enable Pages in Repository**
   - Go to Settings → Pages
   - Set source to "main" branch
   - Select `/root` folder
   - Save

4. **Access your site**
   - Free URL: `https://yourusername.github.io/cse-website`
   - Or use custom domain in Pages settings

---

## 🏢 Traditional Hosting (cPanel, Shared Hosting)

### Steps:

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload to server**
   - Use FTP/SFTP to upload `dist/` folder contents to `public_html/`
   - Or use File Manager in cPanel

3. **Configure .htaccess** (for React Router)
   - Create `.htaccess` file in `public_html/`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Set Up SSL Certificate**
   - Go to AutoSSL or Let's Encrypt in cPanel
   - Install SSL certificate
   - Redirect HTTP to HTTPS

---

## 🚀 Deploy to AWS Amplify

### Steps:

1. **Connect GitHub Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Select GitHub
   - Authorize and select repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Base directory: `dist`
   - Click "Save and Deploy"

3. **Custom Domain**
   - Go to App settings → Domain management
   - Add custom domain
   - Update Route 53 DNS records

---

## 🐳 Docker Deployment (Advanced)

### Steps:

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM node:18-alpine
   RUN npm install -g serve
   COPY --from=builder /app/dist /app/dist
   WORKDIR /app
   EXPOSE 3000
   CMD ["serve", "-s", "dist", "-l", "3000"]
   ```

2. **Build and Run**
   ```bash
   docker build -t cse-website .
   docker run -p 3000:3000 cse-website
   ```

3. **Deploy to Container Service**
   - Push to Docker Hub
   - Deploy to AWS ECS, Google Cloud Run, or similar

---

## ✅ Pre-Deployment Checklist

- [ ] Update `GOOGLE_FORM_URL` in `src/constants/index.js` with actual form
- [ ] Update contact information and address
- [ ] Replace faculty photos/emojis with actual images
- [ ] Update company logos for recruiters
- [ ] Test all links and forms
- [ ] Test on mobile devices
- [ ] Verify social media links
- [ ] Add Google Analytics (optional)
- [ ] Set up SSL certificate
- [ ] Configure custom domain DNS
- [ ] Test page speed with Lighthouse
- [ ] Verify all images load correctly
- [ ] Check for broken links

---

## 🔒 Security Recommendations

1. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.example` for reference
   - Keep sensitive data on backend

2. **Headers**
   - Set security headers in deployment
   - Enable HTTPS/SSL

3. **Contact Form**
   - For production, use backend service or third-party like Formspree
   - Current form requires manual implementation

4. **Rate Limiting**
   - Consider adding rate limiting for form submissions

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use WebP format where possible
   - Compress images before upload
   - Use lazy loading

2. **Caching**
   - Enable browser caching
   - Set appropriate cache headers

3. **CDN**
   - Use Cloudflare for faster global delivery
   - Included with Vercel by default

4. **Monitoring**
   - Set up Sentry for error tracking
   - Monitor Core Web Vitals

---

## 🆘 Troubleshooting

### 404 Errors on Page Refresh
- Ensure your server rewrites all routes to `index.html`
- Check `.htaccess` configuration (cPanel)
- Verify routing configuration on Vercel/Netlify

### Form Not Submitting
- Check Google Form URL is correct
- Verify form has required fields
- Check browser console for errors

### Images Not Loading
- Verify image paths are correct
- Check CORS settings if images are external
- Ensure images are in `public/` folder

### Slow Loading
- Run `npm run build` and check bundle size
- Use Lighthouse to identify bottlenecks
- Enable minification and compression

---

## 📝 Support

For issues or questions:
- Check the README.md
- Review the deployment guide for your platform
- Check platform documentation

---

**Recommended Platform**: Vercel (best for React + Vite)
**Difficulty Level**: Easy
**Cost**: Free tier available on all platforms
