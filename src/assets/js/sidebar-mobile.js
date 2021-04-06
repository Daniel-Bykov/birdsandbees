document.addEventListener('DOMContentLoaded', function () {

    // |Mobile sidebar ------------------------------------------------------

    document.querySelector('.mobile-menu-button-wrap').addEventListener('click', () => {


        document.querySelector('.left-menu-mobile-box').classList.toggle('left-menu-mobile-box--active')
        document.querySelector('.mobile-menu-button').classList.toggle('mobile-menu-button--active')
        document.querySelector('.left-menu-mobile-content ').classList.toggle('left-menu-mobile-content--active')
        document.body.classList.toggle("body--veil")


    });

    document.querySelector('.left-menu-mobile-box').addEventListener('click', function () {
        this.classList.remove('left-menu-mobile-box--active')
        document.querySelector('.mobile-menu-button').classList.toggle('mobile-menu-button--active')
        document.body.classList.toggle("body--veil")
    });

    document.querySelector('.left-menu-mobile-content').addEventListener('click', function (e) {
        e.stopPropagation();

    });

});

