document.addEventListener('DOMContentLoaded', function () {

  let leftMenuSliderButtons = document.querySelectorAll(".left-menu__button")

  leftMenuSliderButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
      swiperCustom.slideTo(index)
    })
  })

  let sliderButtons = document.querySelectorAll(".custom-navigation__element")

  sliderButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
      sliderButtons.forEach((item, index) => { item.classList.remove("custom-navigation__element--active") })
      swiperCustom.slideTo(index)
      item.classList.add("custom-navigation__element--active")
    })
  })

  let sliderArrows = document.querySelectorAll(".swiper-button-next-main, .swiper-button-prev-main, .left-menu__button")

  let currentSlide = document.querySelectorAll('.main-slide')

  sliderArrows.forEach((item, index) => {
    item.addEventListener('click', () => {
      sliderButtons.forEach((item, index) => { item.classList.remove("custom-navigation__element--active") })
      currentSlide.forEach((item, index) => {

        if (item.classList.contains("swiper-slide-active")) {
          sliderButtons[index].classList.add("custom-navigation__element--active")
        }
      })
    })
  })

})

