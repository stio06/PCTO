// Funzioni per migliorare l'interattività del sito

document.addEventListener('DOMContentLoaded', function() {
    // Animazione smooth scroll per i link di navigazione
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    
    // Solo per link interni con ID (es. "#ringraziamenti")
    if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
});

    
    // Evidenziazione della sezione attiva durante lo scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // Animazione per le experience cards al caricamento
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
});
