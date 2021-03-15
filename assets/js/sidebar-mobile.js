document.addEventListener('DOMContentLoaded', function () {

// Мобильное меню ------------------------------------------------------

document.querySelector('#mobile-menu-active').addEventListener('click', () => {
	document.querySelector('.left-menu-mobile-box').classList.add('left-menu-mobile-box--active')
    document.querySelector('.left-menu-mobile-box--active').style.transition = "1s linear";
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


  //-----------------------------------------------------------------
});
