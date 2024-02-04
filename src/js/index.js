import './import/modules';
import './import/components';
// ФУНКЦИОНАЛ HAMBURGER

let menu = document.querySelector('.header__menu');
document
  .querySelector('.header__hamburger')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });
// ФУНКЦИОНАЛ ПРОКРУТКИ ВВЕРХ
// const goTopBtns = document.querySelectorAll('.go-top');
// goTopBtns.forEach((btn) => {
//   btn.addEventListener('click', goTop);
// });

// function trackScroll() {
//   const scrolled = window.scrollY;
//   const coords = document.documentElement.clientHeight;
//   if (scrolled > coords) {
//     goTopBtn.classList.add('go-top--show');
//   } else {
//     goTopBtn.classList.remove('go-top--show');
//   }
// }

// function goTop() {
//   if (window.scrollY > 0) {
//     window.scrollBy(0, -55);
//     setTimeout(goTop, 0);
//   }
// }

// ФУНКЦИОНАЛ КНОПОК ПЛЮС И МИНУС ДЛЯ РАЗРЕШЕНИЯ 375PX
// Находим все блоки с классом "button-container"
let buttonContainers = document.getElementsByClassName('button-container');

// Перебираем блоки и добавляем обработчики событий
for (let i = 0; i < buttonContainers.length; i++) {
  let buttonContainer = buttonContainers[i];

  // Находим кнопки в текущем блоке
  let buttonPlus = buttonContainer.querySelector('.plusM');
  let buttonMinus = buttonContainer.querySelector('.minusM');

  // Находим изображения в текущем блоке
  let imgPlusMobile = buttonContainer.querySelector('.img_plus_mobile');
  let imgMinusMobile = buttonContainer.querySelector('.img_minus_mobile');

  // Добавляем обработчики событий
  buttonPlus.addEventListener('click', function () {
    buttonPlus.classList.remove('active');
    buttonMinus.classList.add('active');
    imgPlusMobile.style.display = 'none';
    imgMinusMobile.style.display = 'block';
  });

  buttonMinus.addEventListener('click', function () {
    buttonMinus.classList.remove('active');
    buttonPlus.classList.add('active');
    imgMinusMobile.style.display = 'none';
    imgPlusMobile.style.display = 'block';
  });
}

// ФУНКЦИОНАЛ СКРЫВАЕМОГО ТЕКСТА
// Находим все блоки с классом "article__container"
let textContainers = document.getElementsByClassName('article__container');
// Перебираем блоки и добавляем обработчики событий
for (let i = 0; i < textContainers.length; i++) {
  let textContainer = textContainers[i];
  // Находим кнопки в текущем блоке
  let buttonShow = textContainer.querySelector('.show');
  let buttonHide = textContainer.querySelector('.hide');
  // Находим текст в текущем блоке
  let minText = textContainer.querySelector('.minText');
  let maxText = textContainer.querySelector('.maxText');
  // Добавляем обработчики событий
  buttonShow.addEventListener('click', function () {
    buttonShow.classList.remove('active');
    buttonHide.classList.add('active');
    minText.style.display = 'none';
    maxText.style.display = 'block';
  });
  buttonHide.addEventListener('click', function () {
    buttonHide.classList.remove('active');
    buttonShow.classList.add('active');
    minText.style.display = 'block';
    maxText.style.display = 'none';
  });
}
