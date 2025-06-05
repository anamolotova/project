'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

//прокрутка
document.addEventListener('DOMContentLoaded', function() {
  const designList = document.querySelector('.design_list');
  const designItems = document.querySelectorAll('.design_item');
  const prevButton = document.querySelector('.design_prev');
  const nextButton = document.querySelector('.design_next');
  const itemWidth = designItems[0].offsetWidth; // Ширина одного элемента
  let currentIndex = 0;

  // Функция для прокрутки списка
  function scrollToItem(index) {
    const translateX = -index * itemWidth;
    designList.style.transform = `translateX(${translateX}px)`;
  }

  // Обработчик для кнопки "Следующий"
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % designItems.length;
    scrollToItem(currentIndex);
  });

  // Обработчик для кнопки "Предыдущий"
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + designItems.length) % designItems.length;
    scrollToItem(currentIndex);
  });

  // Инициализация: показываем первый элемент
  scrollToItem(0);
});


//прокрутка отзывов
document.addEventListener('DOMContentLoaded', function() {
  const reviewList = document.querySelector('.review__list');
  const reviewItems = document.querySelectorAll('.review__item');
  const prevButton = document.querySelector('.review_prev');
  const nextButton = document.querySelector('.review_next');
  let currentIndex = 0;

  if (!reviewList || !reviewItems || !prevButton || !nextButton) {
    console.error("Не удалось найти все необходимые элементы.");
    return;
  }

  function showReview(index) {
    reviewItems.forEach((item, i) => {
      item.style.display = (i === index) ? 'block' : 'none';
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviewItems.length) % reviewItems.length;
    showReview(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviewItems.length;
    showReview(currentIndex);
  });

  showReview(currentIndex); // Показываем первый отзыв при загрузке страницы
});



//для преподавателей
document.addEventListener('DOMContentLoaded', function() {
  const teacherItems = document.querySelectorAll('.teacher__item');

  teacherItems.forEach(item => {
    const image = item.querySelector('.teacher__image');
    const description = item.querySelector('.teacher__description');

    item.addEventListener('mouseenter', () => {
      image.style.opacity = 0;
      description.style.opacity = 1;
    });

    item.addEventListener('mouseleave', () => {
      image.style.opacity = 1;
      description.style.opacity = 0;
    });
  });
});

//фильтр карточек
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const cardItems = document.querySelectorAll('.card_item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter; // Получаем значение data-filter

      cardItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block'; // Показываем элемент
        } else {
          item.style.display = 'none';  // Скрываем элемент
        }
      });
    });
  });
});




//настройки
document.addEventListener('DOMContentLoaded', function() {
  const settingsOverlay = document.getElementById('settingsOverlay');
  const openSettingsButton = document.getElementById('openSettings');
  const closeSettingsButton = document.getElementById('closeSettings');
  const themeSelect = document.getElementById('themeSelect');
  const body = document.body; // Получаем элемент body

  // Функция для открытия настроек
  function openSettings() {
    settingsOverlay.classList.add('active');
  }

  // Функция для закрытия настроек
  function closeSettings() {
    settingsOverlay.classList.remove('active');
  }

  // Функция для смены темы
  function setTheme(theme) {
    // Удаляем классы тем, чтобы избежать конфликтов
    body.classList.remove('light-theme', 'dark-theme');

    // Добавляем класс выбранной темы
    body.classList.add(theme + '-theme'); // Добавляем light-theme или dark-theme

    localStorage.setItem('theme', theme); // Сохраняем выбранную тему в localStorage
  }

  // Проверяем, была ли тема сохранена ранее
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
    themeSelect.value = savedTheme; // Устанавливаем выбранное значение в select
  } else {
    // Если тема не сохранена, устанавливаем начальную тему
    setTheme('light'); // Или 'dark', если хотите темную тему по умолчанию
  }

  // Открываем настройки при нажатии на кнопку
  openSettingsButton.addEventListener('click', openSettings);

  // Закрываем настройки при нажатии на кнопку
  closeSettingsButton.addEventListener('click', closeSettings);

  // Меняем тему при выборе значения в select
  themeSelect.addEventListener('change', function() {
    setTheme(this.value);
  });
});



//скролл
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Показываем кнопку, когда прокручиваем страницу вниз на определенное расстояние
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Прокручиваем страницу вверх при клике на кнопку
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Плавная прокрутка
    });
  });
});





//для карточек
document.addEventListener('DOMContentLoaded', function() {
  // Элементы основного окна
  const popupOverlay = document.getElementById('popupOverlay');
  const popupClose = document.getElementById('popupClose');
  const popupForm = document.getElementById('popupForm');
  const popupCourseTitle = document.getElementById('popupCourseTitle');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const signupButton = document.getElementById('signupButton');
  const consultationButton = document.getElementById('consultationButton');
  
  // Элементы окон успеха
  const successPopup = document.getElementById('successPopup');
  const successPopupClose = document.getElementById('successPopupClose');
  const consultationPopup = document.getElementById('successConsultationPopup');
  const consultationPopupClose = document.getElementById('successConsultationPopupClose');
  
  // Карточки курсов (должны быть в вашем HTML)
  const cardItems = document.querySelectorAll('.card_item');

  // ========================
  // ФУНКЦИИ УПРАВЛЕНИЯ ОКНАМИ
  // ========================
  
  // Открыть основное окно
  function openMainPopup(courseTitle) {
    popupCourseTitle.textContent = `Запись на курс: ${courseTitle}`;
    popupOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  }
  
  // Закрыть основное окно
  function closeMainPopup() {
    popupOverlay.style.display = 'none';
    document.body.style.overflow = ''; // Восстанавливаем скролл
    popupForm.reset(); // Очищаем форму
  }
  
  // Открыть окно успешной записи
  function openSignupSuccess() {
    successPopup.style.display = 'flex';
  }
  
  // Закрыть окно успешной записи
  function closeSignupSuccess() {
    successPopup.style.display = 'none';
  }
  
  // Открыть окно успешной консультации
  function openConsultationSuccess() {
    consultationPopup.style.display = 'flex';
  }
  
  // Закрыть окно успешной консультации
  function closeConsultationSuccess() {
    consultationPopup.style.display = 'none';
  }

  // Проверка заполнения полей формы
  function validateForm() {
    if (!nameInput.value.trim()) {
      alert('Пожалуйста, введите ваше имя');
      nameInput.focus();
      return false;
    }
    
    if (!emailInput.value.trim()) {
      alert('Пожалуйста, введите ваш email');
      emailInput.focus();
      return false;
    }
    
    // Простая валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Пожалуйста, введите корректный email');
      emailInput.focus();
      return false;
    }
    
    return true;
  }

  // =================
  // ОБРАБОТЧИКИ СОБЫТИ
  // =================
  
  // Открытие основного окна при клике на карточку курса
  if (cardItems.length > 0) {
    cardItems.forEach(item => {
      item.addEventListener('click', function() {
        const courseTitle = this.querySelector('.card_title').textContent;
        openMainPopup(courseTitle);
      });
    });
  }
  
  // Закрытие основного окна
  popupClose.addEventListener('click', closeMainPopup);
  
  // Закрытие окна успешной записи
  successPopupClose.addEventListener('click', closeSignupSuccess);
  
  // Закрытие окна успешной консультации
  consultationPopupClose.addEventListener('click', closeConsultationSuccess);
  
  // Обработка кнопки "Записаться на курс"
  signupButton.addEventListener('click', function() {
    if (validateForm()) {
      console.log('Запись на курс:', {
        name: nameInput.value,
        email: emailInput.value,
        course: popupCourseTitle.textContent
      });
      closeMainPopup();
      openSignupSuccess();
      
      // Здесь можно добавить отправку данных на сервер
      // sendDataToServer({...});
    }
  });
  
  // Обработка кнопки "Получить консультацию"
  consultationButton.addEventListener('click', function() {
    if (validateForm()) {
      console.log('Консультация:', {
        name: nameInput.value,
        email: emailInput.value,
        course: popupCourseTitle.textContent
      });
      closeMainPopup();
      openConsultationSuccess();
      
      // Здесь можно добавить отправку данных на сервер
      // sendDataToServer({...});
    }
  });
  
  // Закрытие окон при клике вне области содержимого
  const allPopups = [popupOverlay, successPopup, consultationPopup];
  
  allPopups.forEach(popup => {
    popup.addEventListener('click', function(event) {
      if (event.target === this) {
        if (popup === popupOverlay) closeMainPopup();
        else if (popup === successPopup) closeSignupSuccess();
        else if (popup === consultationPopup) closeConsultationSuccess();
      }
    });
  });
  
  // Закрытие по клавише Esc
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      if (popupOverlay.style.display === 'flex') closeMainPopup();
      else if (successPopup.style.display === 'flex') closeSignupSuccess();
      else if (consultationPopup.style.display === 'flex') closeConsultationSuccess();
    }
  });
});




//загрузчик экрана
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader');

  // Function to fade out and remove preloader
  function fadeOutPreloader() {
    preloader.style.opacity = '0'; // Fade out
    setTimeout(() => {
      preloader.style.display = 'none'; // Hide after fade
      document.body.classList.remove('loading'); // Remove loading class
    }, 500); // Wait for opacity transition (0.5s)
  }

  // Make sure everything is loaded before fading
  window.addEventListener('load', () => {
    fadeOutPreloader();
  });

  // Add loading class to body on page load
  document.body.classList.add('loading');
});



//для поиска карточек
document.addEventListener('DOMContentLoaded', function() {
  // Получаем элементы
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Поиск курсов...');
  searchInput.classList.add('search-box');
  searchInput.id = 'searchInput';
  
  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fas', 'fa-search', 'search-icon');
  
  const searchContainer = document.querySelector('.search');
  searchContainer.innerHTML = '';
  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(searchInput);
  
  const filterButtons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.card_item');
  const cardList = document.querySelector('.card_list');
  
  // Создаём контейнер для "не найдено"
  const noResults = document.createElement('div');
  noResults.className = 'no-results';
  noResults.innerHTML = `
    <i class="fas fa-search"></i>
    <h3>Ничего не найдено</h3>
    <p>Попробуйте другие ключевые слова или измените фильтр</p>
  `;
  cardList.parentNode.insertBefore(noResults, cardList.nextSibling);
  
  // Состояние фильтрации
  let activeCategory = 'all';
  let searchTerm = '';
  
  // Помечаем активную кнопку фильтра
  document.querySelector('.filter-button[data-filter="all"]').classList.add('active');
  
  // Функция фильтрации карточек
  function filterAndSearch() {
    let visibleCards = 0;
    
    cards.forEach(card => {
      const category = card.dataset.category;
      const title = card.querySelector('.card_title').textContent.toLowerCase();
      const description = card.querySelector('.card_description').textContent.toLowerCase();
      
      // Проверяем соответствие фильтру и поиску
      const categoryMatch = activeCategory === 'all' || category === activeCategory;
      const searchMatch = !searchTerm || 
                         title.includes(searchTerm) || 
                         description.includes(searchTerm);
      
      // Показываем/скрываем карточку
      if (categoryMatch && searchMatch) {
        card.style.display = 'block';
        visibleCards++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Показываем сообщение, если ничего не найдено
    if (visibleCards === 0) {
      noResults.classList.add('active');
    } else {
      noResults.classList.remove('active');
    }
  }
  
  // Фильтрация при изменении категории
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Снимаем активный класс со всех кнопок
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Добавляем активный класс текущей кнопке
      this.classList.add('active');
      
      // Устанавливаем выбранную категорию
      activeCategory = this.dataset.filter;
      
      // Фильтруем карточки
      filterAndSearch();
    });
  });
  
  // Обработка поиска
  searchInput.addEventListener('input', function() {
    // Получаем введенный текст и приводим к нижнему регистру
    searchTerm = this.value.trim().toLowerCase();
    
    // Вызываем фильтрацию с небольшой задержкой
    clearTimeout(this.timeout);
    this.timeout = setTimeout(filterAndSearch, 300);
  });
  
  // Дополнительные функции для удобства
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      filterAndSearch();
    }
  });
  
  searchInput.addEventListener('focus', function() {
    this.parentElement.style.transform = 'scale(1.02)';
  });
  
  searchInput.addEventListener('blur', function() {
    this.parentElement.style.transform = 'scale(1)';
  });
  
  // Инициализация
  filterAndSearch();
});