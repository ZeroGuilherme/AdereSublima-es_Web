// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const floatingWhatsApp = document.getElementById('floatingWhatsApp');

// WhatsApp function
function openWhatsApp(source = 'general') {
    const message = `Olá! Vim através do site (${source}) e gostaria de fazer um orçamento.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.link/97omph?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    console.log(`WhatsApp opened via ${source}`);
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    // Close mobile menu if open
    closeMobileMenu();
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// Mobile menu functions
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuToggle.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close floating WhatsApp
function closeFloatingWhatsApp() {
    floatingWhatsApp.style.display = 'none';
    console.log('Floating WhatsApp closed');
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Initialize video autoplay for mobile
function initializeVideos() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            // Play video when it comes into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {
                            // Fallback if autoplay fails
                            console.log('Video autoplay failed, user interaction required');
                        });
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(video);
        }
    });
}

// Smooth reveal animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.pillar-card, .portfolio-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Handle portfolio item clicks (could be extended for lightbox)
function initializePortfolio() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            // Could add lightbox functionality here
            console.log('Portfolio item clicked');
        });
    });
}

// Accessibility improvements
function initializeAccessibility() {
    // Add keyboard navigation for custom buttons
    const customButtons = document.querySelectorAll('button');
    
    customButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });

    // Focus management for mobile menu
    mobileMenuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        // Observe images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initializeVideos();
    initializeAnimations();
    initializePortfolio();
    initializeAccessibility();
    initializeLazyLoading();
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });

    // Scroll event for navbar
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Handle initial scroll position
    handleNavbarScroll();
});

// Service Worker registration (optional, for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}