# GitHub Pages Deployment Guide

This guide will help you deploy your ZMT vendor booking website to GitHub Pages.

## 🚀 Quick Deployment Steps

### 1. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Vendor booking website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/ZMT.git

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/ZMT`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically when you push to the main branch

### 3. Monitor Deployment

1. Go to **Actions** tab in your repository
2. You'll see a workflow called "Deploy to GitHub Pages"
3. Click on it to monitor the build progress
4. Once completed, you'll see a green checkmark

### 4. Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/ZMT/
```

## 🔧 Configuration Details

### Repository Name
- The website is configured for a repository named `ZMT`
- If you use a different name, update `vite.config.ts`:
  ```typescript
  base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
  ```

### Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file in the `public/` folder with your domain
2. Update your domain's DNS settings
3. Configure the custom domain in GitHub Pages settings

## 📁 Build Output

The build process creates:
- `dist/index.html` - Main HTML file
- `dist/assets/` - Compiled CSS and JavaScript
- `dist/assets/index-*.css` - Styles (3.92 kB gzipped)
- `dist/assets/index-*.js` - JavaScript (248.48 kB gzipped)

## 🔄 Automatic Deployment

Every time you push to the `main` branch:
1. GitHub Actions automatically triggers a build
2. The React app is compiled and optimized
3. Assets are deployed to GitHub Pages
4. Your website is updated within minutes

## 🐛 Troubleshooting

### Build Failures
- Check the **Actions** tab for error details
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### Styling Issues
- The website uses custom CSS classes instead of Tailwind utilities
- All styles are defined in `src/index.css`
- Check browser console for any CSS loading errors

### Routing Issues
- The app uses React Router with browser history
- GitHub Pages serves static files, so client-side routing works
- All routes are handled by the React app

## 📱 Features After Deployment

✅ **Responsive Design**: Works on all devices
✅ **Fast Loading**: Optimized assets and compression
✅ **SEO Ready**: Proper meta tags and structure
✅ **Modern UI**: Airbnb-inspired design
✅ **20 Vendors**: Complete vendor showcase
✅ **Interactive**: Hover effects and animations

## 🔗 Useful Links

- **Repository**: `https://github.com/YOUR_USERNAME/ZMT`
- **Live Site**: `https://YOUR_USERNAME.github.io/ZMT/`
- **Actions**: `https://github.com/YOUR_USERNAME/ZMT/actions`

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure the base URL matches your repository name
4. Test the build locally with `npm run build` 