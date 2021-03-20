
// -----------------------Swiper for Events 

const swiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  watchOverflow: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// -----------------------Swiper for Events (mobile-view)


const swiperMobile = new Swiper('.swiper-container-mobile', {

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  width:359,
  slidesPerView: 1.4,
  spaceBetween: 20,
  watchOverflow: true,

  navigation: {
    nextEl: '.swiper-button-next-mobile',
    prevEl: '.swiper-button-prev-mobile',
  },

});


// -----------------------Swiper for Header

var swiperCustom = new Swiper('.swiper-container-main', {
   
  pagination: {
    el: '.swiper-pagination-main',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + 'background-bullet background-bullet' + (index + 1) + ' ' + className + '">' + '</div>';
    },
  },

  slidesPerView: 1,
  watchOverflow: true,

  navigation: {
    nextEl: '.swiper-button-next-main',
    prevEl: '.swiper-button-prev-main',
  },

  allowTouchMove:false,
});





