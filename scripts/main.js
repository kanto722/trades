document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.querySelector('.show-more');
    const leaderboardRows = document.querySelectorAll('.leaderboard-row');
  
    if (showMoreButton) {
      showMoreButton.addEventListener('click', function() {
        const leaderboardRows = document.querySelectorAll('.leaderboard-row');
        leaderboardRows.forEach(row => {
          row.classList.remove('hidden');
        });
        showMoreButton.style.display = 'none';
      });
    }
  
    function checkWindowSize() {
      if (window.innerWidth <= 768) {
        leaderboardRows.forEach((row, index) => {
          if (index >= 5) {
            row.classList.add('hidden');
          }
        });
        showMoreButton.style.display = 'flex';
      } else {
        leaderboardRows.forEach(row => {
          row.classList.remove('hidden');
        });
        showMoreButton.style.display = 'none';
      }
    }
  
    checkWindowSize();
  
    window.addEventListener('resize', checkWindowSize);
      
    const langSwitch = document.querySelector('.lang-switch');
  
    langSwitch.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  
    document.addEventListener('click', function(event) {
      if (!langSwitch.contains(event.target)) {
        langSwitch.classList.remove('active');
      }
    });
  
    // Smooth scroll functionality
    const links = document.querySelectorAll('a[href^="#"]');
  
    for (const link of links) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  
    const videoPlug = document.querySelector('.video-plug');
    const iframe = document.querySelector('iframe');
  
    videoPlug.addEventListener('click', function() {
      videoPlug.style.display = 'none';
      iframe.style.display = 'block';
      // Запуск видео
      iframe.src += "&autoplay=1";
    });
  
    const popup = document.getElementById('popup');
    const popupContainer = document.querySelector('.popup-container');
    const popupClose = document.querySelector('.popup-close');
    const triggerElement = document.getElementById('plans');
    let popupShown = false;
  
    // Показать popup при прокрутке до определенного элемента
    window.addEventListener('scroll', function() {
      if (!popupShown && isElementInViewport(triggerElement)) {
        popup.style.display = 'flex';
        popupShown = true;
      }
    });
  
    // Закрыть popup при клике на кнопку закрытия
    popupClose.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    // Закрыть popup при клике вне его области
    window.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  
    // Проверка, находится ли элемент в видимой области
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    const priceItems = document.querySelectorAll('.price-item');
    let activeItem = document.querySelector('.focus-item');
    const mainButton = document.querySelector('.price-item_button.button-desktop');
  
    // Устанавливаем дефолтную ссылку и активный элемент
    mainButton.setAttribute('href', 'https://sabiotrade.com/checkout?id=6');
    if (!activeItem) {
      activeItem = priceItems[0];
      activeItem.classList.add('focus-item');
      const focusBtn = activeItem.querySelector('.price-item_button');
      if (focusBtn) {
        focusBtn.classList.add('focus-btn');
      }
    }
  
    priceItems.forEach(item => {
      item.addEventListener('click', function() {
        // Убираем фокусные классы с предыдущего активного элемента
        if (activeItem) {
          activeItem.classList.remove('focus-item');
          const focusBtn = activeItem.querySelector('.focus-btn');
          if (focusBtn) {
            focusBtn.classList.remove('focus-btn');
          }
        }
  
        // Добавляем фокусные классы к текущему активному элементу
        item.classList.add('focus-item');
        const btn = item.querySelector('.price-item_button');
        if (btn) {
          btn.classList.add('focus-btn');
        }
  
        // Обновляем активный элемент
        activeItem = item;
  
        // Если мобильная версия, обновляем основную кнопку ссылкой текущей карточки
        if (window.innerWidth <= 992) {
          const cardButton = item.querySelector('.price-item_button.button-media');
          const cardLink = cardButton.getAttribute('href');
          mainButton.setAttribute('href', cardLink);
        }
      });
    });
  
    function hideCardButtonsOnMobile() {
      priceItems.forEach(item => {
        const cardButton = item.querySelector('.price-item_button.button-media');
        if (window.innerWidth < 992) {
          cardButton.style.display = 'none';
        } else {
          cardButton.style.display = 'inline-block';
        }
      });
    }
  
    hideCardButtonsOnMobile();
    window.addEventListener('resize', hideCardButtonsOnMobile);
  
  });
  