// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap carousel with custom settings
    var carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
        var carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000, // Change slides every 5 seconds
            wrap: true,     // Continuously cycle through slides
            pause: 'hover'  // Pause on mouse hover
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
