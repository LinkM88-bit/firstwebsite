// Evolution interactive section
let currentStage = 0;

const evolutionStages = [
    {
        stage: 1,
        label: "Stage 1: T-Rex (Late Cretaceous)",
        emoji: "🦖"
    },
    {
        stage: 2,
        label: "Stage 2: Velociraptor with Feathers (Cretaceous)",
        emoji: "🦅"
    },
    {
        stage: 3,
        label: "Stage 3: Archaeopteryx - The Transitional Fossil (Jurassic/Cretaceous)",
        emoji: "🐦"
    },
    {
        stage: 4,
        label: "Stage 4: Early Bird - Confuciusornis (Early Cretaceous)",
        emoji: "🕊️"
    },
    {
        stage: 5,
        label: "Stage 5: Modern Bird - Eagle (Present Day)",
        emoji: "🦅"
    }
];

function evolve() {
    if (currentStage < evolutionStages.length - 1) {
        currentStage++;
    } else {
        currentStage = 0;
    }
    
    const current = evolutionStages[currentStage];
    document.getElementById('evolutionEmoji').textContent = current.emoji;
    document.getElementById('stage').textContent = current.stage;
    document.getElementById('stageLabel').textContent = current.label;
}

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
