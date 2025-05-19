document.addEventListener('DOMContentLoaded', function () {
    const designSection = document.querySelector('.design_section');
    const designContainer = document.querySelector('.design_container');
    const prevBtn = document.querySelector('.design_prev');
    const nextBtn = document.querySelector('.design_next');
  
    if (!designSection || !designContainer || !prevBtn || !nextBtn) {
      console.error('Необходимые элементы не найдены');
      return;
    }
  
    let currentTranslateX = 0;
    const itemWidth = designSection.offsetWidth; // Ширина видимой части секции
    const maxTranslateX = designContainer.offsetWidth - itemWidth;
  
    prevBtn.addEventListener('click', () => {
      currentTranslateX -= itemWidth;
      if (currentTranslateX < 0) {
        currentTranslateX = 0;
      }
      designContainer.style.transform = `translateX(-${currentTranslateX}px)`;
    });
  
    nextBtn.addEventListener('click', () => {
      currentTranslateX += itemWidth;
      if (currentTranslateX > maxTranslateX) {
        currentTranslateX = maxTranslateX;
      }
      designContainer.style.transform = `translateX(-${currentTranslateX}px)`;
    });
  });