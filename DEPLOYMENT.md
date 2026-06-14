# Deployment Guide - Basant Mehto Portfolio

Complete guide to deploy your portfolio to GitHub and other platforms.

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and create a free account.

### Step 2: Create a New Repository

1. Click the "+" icon in the top right
2. Select "New repository"
3. Name your repository: `basant-mehto-portfolio` (or any name you prefer)
4. Add description: "Professional graphic design portfolio"
5. Choose "Public" (so it's accessible online)
6. Click "Create repository"

### Step 3: Upload Files to GitHub

#### Option A: Using Git CLI (Recommended)

```bash
# Navigate to your portfolio folder
cd /path/to/portfolio

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio upload"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/basant-mehto-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click "File" → "Clone repository"
4. Paste your repository URL
5. Drag and drop your portfolio files into the cloned folder
6. Commit and push in GitHub Desktop

#### Option C: Direct Upload (Web Interface)

1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Drag and drop all portfolio files
4. Add commit message: "Add portfolio files"
5. Click "Commit changes"

### Step 4: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Under "Source", select `main` branch
4. Click "Save"
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://YOUR_USERNAME.github.io/basant-mehto-portfolio`

### Step 5: Custom Domain (Optional)

To use a custom domain like `basantmehto.com`:

1. In repository settings, find "GitHub Pages"
2. Under "Custom domain", enter your domain
3. Update DNS settings with your domain provider:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   CNAME: YOUR_USERNAME.github.io
   ```
4. Enable "Enforce HTTPS" once DNS is verified

## 🌐 Deploy to Netlify

### Step 1: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → Choose "GitHub"
3. Authorize Netlify with your GitHub account
4. Click "New site from Git"
5. Select your repository
6. Keep default settings and click "Deploy site"

### Step 2: Configure Netlify Settings

1. Go to "Site settings"
2. Under "Build & deploy", verify:
   - Build command: (leave empty)
   - Publish directory: ./
3. Click "Save"

### Step 3: Custom Domain

1. In site settings, go to "Domain management"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS setup instructions
5. Enable HTTPS (automatic with Netlify)

## 📦 Deploy to Vercel

### Step 1: Import from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your GitHub repository
5. Click "Import"

### Step 2: Configure & Deploy

1. Select framework preset: "Other"
2. Leave build settings empty
3. Click "Deploy"
4. Wait for deployment to complete

### Step 3: Custom Domain

1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records with Vercel's nameservers
5. HTTPS is automatic

## 🔥 Deploy to Firebase Hosting

### Step 1: Setup Firebase

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init hosting
```

### Step 2: Configure firebase.json

```json
{
  "hosting": {
    "public": "./",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "cleanUrls": true,
    "trailingSlash": false
  }
}
```

### Step 3: Deploy

```bash
firebase deploy
```

## 💻 Deploy to Traditional Web Host (cPanel, etc.)

### Step 1: Download Files

1. Download all portfolio files to your computer
2. Ensure videos folder is included

### Step 2: Upload via FTP

1. Open FTP client (FileZilla, WinSCP, etc.)
2. Connect to your web host
3. Navigate to `public_html` or `www` folder
4. Upload all files maintaining folder structure

### Step 3: Access Your Site

Your portfolio will be available at: `https://yourdomain.com`

## 🖥️ Deploy Locally for Development

### Using Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Visit: `http://localhost:8000`

### Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Run from portfolio directory
http-server

# Or use npx
npx http-server
```

### Using PHP

```bash
# PHP 7.0+
php -S localhost:8000

# Older PHP versions
php -S localhost:8000 -t .
```

Visit: `http://localhost:8000`

## 📋 Pre-Deployment Checklist

- [ ] All files present (HTML, CSS, JS, videos)
- [ ] Video paths are correct
- [ ] Navigation links work
- [ ] Responsive design tested on mobile
- [ ] All images/placeholders display correctly
- [ ] Performance is acceptable
- [ ] No console errors in browser
- [ ] SEO meta tags are set
- [ ] Social links are updated
- [ ] Contact information is current

## 🔍 Post-Deployment Testing

1. **Test in Multiple Browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Test on Mobile**
   - iPhone/iPad (iOS)
   - Android devices
   - Tablet devices

3. **Test Features**
   - Navigation links
   - Scroll animations
   - Video playback
   - Button clicks
   - Hover effects

4. **Performance Check**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Check loading times
   - Monitor video load time

5. **SEO Validation**
   - Check [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpombljlkpstvnztVTNyZA)
   - Verify meta tags
   - Test with search console

## 🚨 Troubleshooting

### Videos Not Playing
- Check video file paths are correct
- Ensure videos are in `videos/` folder
- Check video format is MP4
- Try in different browser

### Slow Loading
- Optimize video compression
- Use CDN for video delivery
- Enable caching in server settings
- Minify CSS/JS if needed

### Navigation Not Working
- Clear browser cache
- Check JavaScript console for errors
- Verify section IDs match navigation links
- Test in different browser

### Mobile Layout Broken
- Check viewport meta tag
- Verify media queries in CSS
- Test with Chrome DevTools device emulation
- Check touch event listeners

### HTTPS Issues
- GitHub Pages: Automatic
- Netlify: Automatic
- Vercel: Automatic
- Others: Get SSL certificate

## 📊 Monitoring & Analytics

### Add Google Analytics

Add this to `<head>` in index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

## 🔐 Security Best Practices

- [ ] Enable HTTPS on all platforms
- [ ] Keep libraries and dependencies updated
- [ ] Use strong repository passwords
- [ ] Enable two-factor authentication on GitHub
- [ ] Review GitHub Actions logs
- [ ] Monitor for security alerts
- [ ] Don't commit sensitive files
- [ ] Use .gitignore properly

## 🎯 Next Steps After Deployment

1. Share portfolio link with potential clients
2. Add to social media profiles
3. Update email signature with portfolio link
4. Submit to design portfolios (Behance, Dribbble)
5. Request feedback and iterate
6. Monitor analytics for traffic insights
7. Keep content updated with new work
8. Optimize based on visitor behavior

---

**Happy Deploying! 🚀**

For more help, check the main README.md file.
