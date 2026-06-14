// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation active link update
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('[id]');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for all anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });

    // Observe AI video items
    document.querySelectorAll('.ai-video-item').forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add stagger animation to gallery items
    const allGalleryItems = document.querySelectorAll('.gallery-item, .ai-video-item');
    allGalleryItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.1) + 's';
    });
});

// Parallax effect on hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Preload images for smooth loading
function preloadImages() {
    const images = document.querySelectorAll('.image-placeholder');
    images.forEach(img => {
        img.style.transition = 'all 0.3s ease';
    });
}

window.addEventListener('load', preloadImages);

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    const navLinks = document.querySelectorAll('.nav-link');
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        const activeLink = document.querySelector('.nav-link.active');
        const nextLink = activeLink?.nextElementSibling?.querySelector('.nav-link');
        if (nextLink) {
            nextLink.click();
        }
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        const activeLink = document.querySelector('.nav-link.active');
        const prevLink = activeLink?.previousElementSibling?.querySelector('.nav-link');
        if (prevLink) {
            prevLink.click();
        }
    }
});

// Video lazy loading
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    if ('loading' in video) {
        video.loading = 'lazy';
    }
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mobile menu handling (if needed in future)
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth <= 768) {
        navMenu.style.gap = '10px';
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// Add page load animation
window.addEventListener('load', function() {
    document.body.style.animation = 'pageLoad 0.5s ease-out';
});

const pageLoadStyle = document.createElement('style');
pageLoadStyle.innerHTML = `
    @keyframes pageLoad {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(pageLoadStyle);

// Console message
console.log('%c🎨 Welcome to Basant Mehto\'s Design Portfolio', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cExplore amazing design work across multiple categories!', 'color: #ec4899; font-size: 12px;');
