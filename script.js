// JavaScript для эффекта параллакса в секции hero
window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero-background');
    const scrollPosition = window.scrollY;

    
    heroBackground.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px) translateZ(0)';
});



document.addEventListener('DOMContentLoaded', function() {
    
    const readMoreAboutButton = document.getElementById('read-more-about-button');
    
    const hiddenAboutText = document.getElementById('hidden-about-text');

    
    if (readMoreAboutButton && hiddenAboutText) {
        
        readMoreAboutButton.addEventListener('click', function() {
            
            if (hiddenAboutText.style.display === 'none' || hiddenAboutText.style.display === '') {
                
                hiddenAboutText.style.display = 'block'; 
                
                readMoreAboutButton.textContent = 'Свернуть';
            } else {
                
                hiddenAboutText.style.display = 'none';
               
                readMoreAboutButton.textContent = 'Подробнее';
            }
        });
    } else {
        
        console.error("Кнопка 'Подробнее' или скрытый текст для раздела 'О музее' не найдены.");
    }
});