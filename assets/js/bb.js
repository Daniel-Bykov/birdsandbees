document.addEventListener('DOMContentLoaded', function () {

// Мобильное меню ------------------------------------------------------

document.querySelector('#mobile-menu-active').addEventListener('click', () => {
	document.querySelector('.left-menu-mobile-box').classList.add('left-menu-mobile-box--active')
    document.body.classList.add("body--veil")
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.body.classList.remove("body--veil")
	document.querySelector('.left-menu-mobile-box').classList.remove('left-menu-mobile-box--active');
});

document.querySelector('.left-menu-mobile-box').addEventListener('click', function() {
    document.body.classList.remove("body--veil")
	document.querySelector('.left-menu-mobile-box').classList.remove('left-menu-mobile-box--active');
});

document.querySelector('.left-menu-mobile-content').addEventListener('click', function(e) {
	e.stopPropagation();
});

// Табы для галереи помещений -------------------------------------------------------


    let tabs = (function () {
        let tabsControl = document.querySelectorAll('.tab-control'),
            tabsContent = document.querySelectorAll('.tab-content'),
            activeTab = tabsControl[0],
            activeIndex = 0,
            carret = document.querySelector('.tab-controls__carret'),

            init = () => {
                activeTab.classList.add('tab-control--active');
                tabsContent[activeIndex].classList.add('tab-content--show');

                setTimeout(() => {
                    setCarret();
                    carret.classList.add('tab-controls__carret--ready')
                }, 200)

                tabsControl.forEach((item, index) => {
                    item.addEventListener('click', () => {
                        showTab(index);
                    })
                });
            },

            setCarret = () => {
                carret.style.width = activeTab.offsetWidth + 'px';

                let offset = 0;

                [...tabsControl].slice(0, activeIndex).forEach(i => {
                    offset += i.offsetWidth + +window.getComputedStyle(i).marginRight.match(/\d/g).join('')
                })

                carret.style.transform = `translate(${offset}px)`
            },

            showTab = (i) => {
                activeIndex = i;
                activeTab = tabsControl[activeIndex];

                setCarret();

                [...tabsControl, ...tabsContent].forEach(i => {
                    i.classList.remove('tab-control--active', 'tab-content--show');
                });

                activeTab.classList.add('tab-control--active');
                tabsContent[activeIndex].classList.add('tab-content--show');
            };

        return {
            init
        }
    })();

    tabs.init();


// Слайдер в шапке сайта ------------------------------------------------------

    let maskWidth = 0,
        mask = document.querySelector('.slider__mask'),
        slides = document.querySelectorAll('.slider__slide'),
        slider = document.querySelector('.slider'),
        category = document.querySelector('.place-category__slider'),
        slidesCount = slides.length;

    document.querySelectorAll('.slider__slide').forEach(slide => {
        maskWidth += slide.offsetWidth;
    });

    mask.style.width = maskWidth + 'px';

    document.querySelectorAll('.bt-slider, .bt-slider-navi, .bt-slider__active-category ').forEach(item => {

        item.addEventListener('click', function () {

            let direction = this.id,
                activeSlide = document.querySelector('.slider__slide--active'),
                activeBackGround = document.querySelector('.section-container-main'),
                activeCategory = document.querySelector('.bt-slider__active-category'),
                activeIndex = Array.from(mask.children).indexOf(activeSlide);

            if (direction == "left" || direction == "right") {
                console.log(activeIndex)
                if (direction === "right") {

                    activeIndex += 1;

                    if (activeIndex > (slidesCount - 1)) {
                        activeIndex = 0;
                    }
                }

                else if (direction === "left") {
                    activeIndex -= 1;

                    if (activeIndex < 0) {
                        activeIndex = 5;
                    }

                }

            }
            else activeIndex = direction;

            activeBackGround.style.backgroundImage = window.getComputedStyle(mask.children[activeIndex].firstElementChild).getPropertyValue("background-image");

            console.log(mask.children[activeIndex]);
            if (activeIndex < 0) {
                activeIndex = slidesCount - 1
            } else if (activeIndex >= slidesCount) {
                activeIndex = 0
            }

            activeSlide.classList.remove('slider__slide--active')
            mask.children[activeIndex].classList.add('slider__slide--active');


            document.querySelectorAll('.bt-slider, .bt-slider__active-category').forEach((item, index) => {
                if ((index) == Array.from(mask.children).indexOf(activeSlide)) {
                    activeCategory.classList.remove('bt-slider__active-category')
                    category.children[activeIndex].classList.add('bt-slider__active-category');
                }
                else if ((index + 1) == Array.from(mask.children).indexOf(activeSlide)) {
                    activeCategory.classList.remove('bt-slider__active-category')
                    category.children[activeIndex].classList.add('bt-slider__active-category');
                }
            })

            let maskOffset = 0;

            slides.forEach((slide, index) => {
                if (index < activeIndex) {
                    maskOffset += slide.offsetWidth;
                }
            });

            mask.style.left = maskOffset * -1 + 'px';

        });

    });
  //-----------------------------------------------------------------
});
