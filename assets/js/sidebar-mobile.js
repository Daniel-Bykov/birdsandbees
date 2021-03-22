document.addEventListener('DOMContentLoaded', function () {

    // |Mobile sidebar ------------------------------------------------------

    document.querySelector('#mobile-menu-active').addEventListener('click', () => {
        
        document.querySelector('.left-menu-mobile-box').classList.add('left-menu-mobile-box--active')
        document.querySelector('.mobile-menu-button').classList.add('mobile-menu-button--active')
        document.body.classList.add("body--veil")


        let activeSideBar = document.querySelector('.mobile-menu-button--active');

        if(activeSideBar){
            console.log("hola!")
            document.querySelector('.mobile-menu-button--active').addEventListener('click', function () {
                
            document.body.classList.remove("body--veil")
            document.querySelector('.left-menu-mobile-box').classList.remove('left-menu-mobile-box--active');
        });
        }

        

    document.querySelector('.left-menu-mobile-content').addEventListener('click', function (e) {
        e.stopPropagation();
    });
    });


});
