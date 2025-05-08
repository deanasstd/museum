
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

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('exhibitionModal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-button');
  
    document.querySelectorAll('.exhibition-item a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const item = e.target.closest('.exhibition-item');
  
        const title = item.querySelector('h3').innerText;
        const description = item.querySelector('p').innerText;
        const imgSrc = item.querySelector('img').getAttribute('src');
        const imgAlt = item.querySelector('img').getAttribute('alt');

        const extraDiv = item.querySelector('.additional-info');
        const extraHTML = extraDiv ? extraDiv.innerHTML : '';
        
        modalTitle.innerText = title;
        modalImage.setAttribute('src', imgSrc);
        modalImage.setAttribute('alt', imgAlt);
        modalDescription.innerText = description;

        document.getElementById('modal-extra').innerHTML = extraHTML;

        modal.style.display = 'block';
      });
    });
  
    
    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };
  
    
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  });