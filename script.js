// JavaScript для эффекта параллакса в секции hero
window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero-background');
    const scrollPosition = window.scrollY;

    
    heroBackground.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px) translateZ(0)';
});

