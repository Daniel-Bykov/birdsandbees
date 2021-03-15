document.addEventListener('DOMContentLoaded', function () {

    let maskWidth = 0,
    mask = document.querySelector('.slider-events__mask'),
    slides = document.querySelectorAll('.slider-events__slide'),
    slider = document.querySelector('.slider-events'),
    slidesCount = slides.length;


  document.querySelectorAll('.slider-events__slide').forEach(slide => {
    maskWidth += slide.offsetWidth;
  });

  mask.style.width = maskWidth + 'px';

  document.querySelectorAll('.bt-slider-navi--events').forEach(item => {

    item.addEventListener('click', function () {

        let direction = this.id,
        activeSlide = document.querySelector('.slider-events__slide--active'),
        activeIndex = Array.from(mask.children).indexOf(activeSlide);

        activeIndex = direction === "right"? activeIndex+=1 : activeIndex -=1;

        if (activeIndex < 0) {
        activeIndex = slidesCount - 1
      } else if (activeIndex >= slidesCount) {
        activeIndex = 0
      }

      activeSlide.classList.remove('slider-events__slide--active')
      mask.children[activeIndex].classList.add('slider-events__slide--active');

      let maskOffset = 0;

      slides.forEach((slide, index) => {
        if (index < activeIndex) {
          maskOffset += slide.offsetWidth + +window.getComputedStyle(slide).marginRight.match(/\d/g).join('');
        }
      });
      mask.style.left = maskOffset * -1 + 'px';
    });
  });
});