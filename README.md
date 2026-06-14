# Basant Mehto - Graphic Design Portfolio

A modern, creative portfolio website showcasing professional graphic design work across multiple categories including packaging, branding, and AI-generated creative content.

## 🎨 Features

- **Responsive Design** - Mobile-friendly layout that works on all devices
- **Smooth Animations** - Elegant fade-in effects and interactive elements
- **Organized Categories** - Work organized by product type:
  - Sanbag Collection
  - Health & Wellness Products
  - Tech & Accessories
  - Fashion & Fitness
  - Other Notable Works
  - AI Creative Videos Section

- **Modern UI/UX** - Clean, professional design with gradient accents
- **Video Integration** - AI-generated creative content embedded
- **Interactive Navigation** - Smooth scrolling and active link indicators
- **Performance Optimized** - Lazy loading for videos and images

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # Interactive JavaScript
├── videos/
│   ├── Nivea_Soft.mp4
│   ├── Preety_Women.mp4
│   ├── Preety_Women_2.mp4
│   └── Water_Girl.mp4
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies or build tools required
- Pure HTML, CSS, and JavaScript

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/basant-mehto-portfolio.git
cd basant-mehto-portfolio
```

2. Open the portfolio:
```bash
# Simply open index.html in your browser
open index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Design Sections

### Sanbag Collection
Premium packaging designs for Sanbag products with professional catalog layouts.

### Health & Wellness
Organic and health product designs including:
- Kapiva (Ayurvedic wellness)
- Green Moong Dal
- Masoor Dal
- Organic Brown Basmati Rice
- Organic Urad Dal

### Tech & Accessories
Modern consumer electronics design:
- M8 Tech Gadget
- Ear Bud Audio Accessories
- Sound Master
- Shoe/Footwear
- Mobile Applications

### Fashion & Fitness
Active lifestyle products:
- Endurance Performance Gear
- Gym Branding
- Excaliber Premium Brand

### AI Creative Section
Innovative AI-generated video content showcasing creative possibilities.

## 🎨 Color Scheme

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#f59e0b` (Amber)
- **Dark Background**: `#0f172a`
- **Light Background**: `#f8fafc`

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (1200px+)
- **Tablet**: 768px
- **Mobile**: 480px

## ✨ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - No frameworks, pure JS for interactivity
- **CSS Grid & Flexbox** - Responsive layouts
- **Intersection Observer API** - Efficient animation triggering

## 🎬 Animation Details

- **Hero Section**: Floating circles with continuous pulse animation
- **Gallery Items**: Staggered fade-in on scroll with hover lift effect
- **Navigation**: Smooth underline animation on hover
- **Buttons**: Ripple effect on click
- **Parallax**: Hero section parallax on scroll

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #f59e0b;
}
```

### Adding New Sections
1. Add new section in HTML with unique `id`
2. Add `<a>` tag in navigation menu
3. Style with existing category-section class

### Modifying Gallery Items
Edit the `.gallery-grid` and `.gallery-item` styles in `styles.css`

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Deploy to GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Choose `main` branch as source
4. Site will be available at `https://yourusername.github.io/repository-name`

### Deploy to Other Platforms
- **Netlify**: Drag and drop folder
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **Any Web Server**: Upload files via FTP/SSH

## 📝 File Sizes

- HTML: ~8 KB
- CSS: ~15 KB
- JavaScript: ~5 KB
- Videos: ~19.7 MB (Nivea: 9.4MB, Preety: 3.6MB each, Water: 3.1MB)

## ⚡ Performance Tips

- Videos are lazy-loaded
- CSS is optimized and minified
- JavaScript has no external dependencies
- Images use CSS gradients instead of image files
- Smooth scrolling behavior optimized

## 🎯 SEO Optimized

- Semantic HTML tags
- Meta viewport for mobile
- Clear heading hierarchy
- Descriptive alt text (implicit in design)

## 📧 Contact & Social

Links available in footer section. Customize with your actual contact information.

## 📄 License

This portfolio is created by Basant Mehto. Feel free to use as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio. For usage or modification requests, please contact the designer.

## 📞 Support

For issues or questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include screenshots if applicable

## 🔄 Updates & Versions

- **Version 1.0** (2024)
  - Initial portfolio launch
  - 5 main categories
  - AI creative section
  - Full responsive design
  - Modern animations

## 💡 Future Enhancements

- [ ] Dark mode toggle
- [ ] Filter/search functionality
- [ ] Lightbox gallery view
- [ ] Contact form integration
- [ ] Blog section
- [ ] Client testimonials
- [ ] Project case studies
- [ ] Download portfolio PDF

## 🙏 Acknowledgments

Built with modern web technologies focusing on user experience and visual design excellence.

---

**Last Updated**: June 2024  
**Designer**: Basant Mehto  
**Portfolio Version**: 1.0
