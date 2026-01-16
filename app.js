// Smooth scroll function for the CTA button
function scrollToDinosaurs() {
    const dinosaursSection = document.getElementById('dinosaurs');
    dinosaursSection.scrollIntoView({ behavior: 'smooth' });
}

// Add click event listeners to dinosaur cards for interactivity
document.addEventListener('DOMContentLoaded', function() {
    const dinoCards = document.querySelectorAll('.dino-card');
    
    dinoCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('You clicked on: ' + this.querySelector('h3').textContent);
        });
    });

    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
