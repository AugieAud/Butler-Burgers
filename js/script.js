// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Auto-close navbar when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const collapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            collapse.hide();
        });
    });

    // Initialize Bootstrap carousel with custom settings
    var carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
        var carouselInstance = new bootstrap.Carousel(carousel, {
            interval: false, // Disable automatic transitions
            wrap: true,     // Continuously cycle through slides
            keyboard: true  // Allow keyboard navigation
        });
        
        // Apply consistent transition to all slides
        carousel.addEventListener('slide.bs.carousel', function(e) {
            const slides = carousel.querySelectorAll('.carousel-item');
            
            // Apply the same transition to all slides for consistency
            slides.forEach(slide => {
                slide.style.transition = 'transform 0.8s ease-in-out';
            });
            
            // Ensure the current and next slides have the same transition
            slides[e.from].style.transition = 'transform 0.8s ease-in-out';
            slides[e.to].style.transition = 'transform 0.8s ease-in-out';
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    // Call animation function on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Call it once on load to check for elements already in view
    animateOnScroll();
});
