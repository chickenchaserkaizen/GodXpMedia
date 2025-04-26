document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopButton = document.getElementById('backToTop');
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            document.body.style.overflow = 'auto';
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Change header style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.service-item, .about-content, .contact-content');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }
    
    // Add fade-in animation class
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on initial load
    
    // Preload hero image for better performance
    const heroImage = new Image();
    heroImage.src = 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a';
});
