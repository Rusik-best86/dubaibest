
// .............................КНОПКА НАВЕРХ САЙТА.................................................

$('.back-to-top').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
   let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

   if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('back');
   } else {
      $('.back-to-top').removeClass('back');
   }
});

// замедленный скролл

$(document).ready(function () {
   $('.sub-menu__link').on('click', function (event) {
      if ($(this).attr('hash') !== "") {
         event.preventDefault();
         let hash = $(this).prop('hash');
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
         });
      }
   });
});

// burger & menu
const link = document.querySelector('.menu__link-sub');
const list = document.querySelector('.sub-menu__list');
const arrow = document.querySelector('.menu__arrow');
const body = document.body;
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', function (event) {
   burger.classList.toggle('open-menu');
   headerMenu.classList.toggle('open-menu');
   body.classList.toggle('lock');
})

document.addEventListener('click', mainMenu);
function mainMenu(event) {
   if (event.target.closest('.menu__link-sub')) {
      list.classList.toggle('_active');
      arrow.classList.toggle('_active');
      link.classList.toggle('_active');
      body.classList.add('lock');
      burger.classList.add('open-menu');
   }
   if (!event.target.closest('.menu__item-sub')) {
      list.classList.remove('_active');
      arrow.classList.remove('_active');
      link.classList.remove('_active');
      link.style.transition = '0.3s';
   }
   if (event.target.closest('.sub-menu__link')) {
      headerMenu.classList.remove('open-menu');
      body.classList.remove('lock');
      burger.classList.remove('open-menu');
      list.classList.remove('_active');
   }

}
// ............................sliders...........................

new Swiper('.header__slider', {
   slidesPerView: 1,
   autowidth: true,
   navigation: {
      nextEl: '.header__slider__next',
      prevEl: '.header__slider__prev'
   },
   nested: true,
   speed: 800,

});

new Swiper('.projects__slider', {
   spaceBetween: 30,
   // slidesPerView: 4,
   autowidth: true,
   nested: true,
   speed: 600,
   // loop: true,
   pagination: {
      el: '.projects__slider-pagination',
      clickable: true,
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      // when window width is >= 640px

      1199: {
         slidesPerView: 4,
         spaceBetween: 30
      }
   }
});

new Swiper('.articles__slider', {
   spaceBetween: 50,
   slidesPerView: 3,
   autowidth: true,
   nested: true,
   speed: 600,
   // loop: true,
   pagination: {
      el: '.articles__slider-pagination',
      clickable: true,
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 10
      },
      // when window width is >= 480px
      550: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      991: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      // when window width is >= 640px
   }
});

// ...........................tabs.................................................

$(document).ready(function () {
   $('.header-tabs-link').click(function (e) {
      e.preventDefault();
      $('.header-tabs-link').removeClass('header-tabs-link--active');
      $('.header-tabs-block').removeClass('header-tabs-block--active');
      $(this).addClass('header-tabs-link--active');
      $($(this).attr('href')).addClass('header-tabs-block--active')

   });
   $('.header-tabs-link:first').click();
});
// ......................project
$(document).ready(function () {
   $('.projects__tabs_link').click(function (e) {
      e.preventDefault();
      $('.projects__tabs_link').removeClass('projects__tabs_link--active1');
      $('.projects__tabs_block').removeClass('projects__tabs_block--active1');
      $(this).addClass('projects__tabs_link--active1');
      $($(this).attr('href')).addClass('projects__tabs_block--active1')

   });
   $('.projects__tabs_link:first').click();
});



const headerSubtitle = document.querySelector('.header-slide__subtitle');
const headerSubtitleTwo = document.querySelector('#sub2');
const headerSubtitleThree = document.querySelector('#sub3');
const headerButton = document.querySelector('#popup__open');
const headerButtonHid = document.querySelector('.header__button-hid');
const myPopup = document.querySelector('.my__popup');
const close = document.querySelector('.popup__close');
const closeArea = document.querySelector('.popup__area');
const wrapper = document.querySelector('.wrapper');
const menuList = document.querySelector('#list');

headerSubtitle.addEventListener('click', OpenPopup);
headerSubtitleTwo.addEventListener('click', OpenPopup);
headerSubtitleThree.addEventListener('click', OpenPopup);
headerButton.addEventListener('click', OpenPopup);
function OpenPopup(event) {
   myPopup.classList.toggle('open');
   wrapper.classList.toggle('dark');
}

close.addEventListener('click', closePopup);
closeArea.addEventListener('click', closePopup);
function closePopup(event) {
   myPopup.classList.remove('open');
   wrapper.classList.remove('dark');
   menuList.classList.remove('dark');
}

headerButtonHid.addEventListener('click', function (event) {
   myPopup.classList.toggle('open');
   menuList.classList.add('dark');

})


// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.spoiler-faq__link').click(function (event) {
      // общий класс спойлера
      if ($('.faq__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.spoiler-faq__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.spoiler-faq__block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(400);
   });
});

// footer-spoiler
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.top-spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.footer-spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.top-spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.footer-spoiler__block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(400);
   });
});



