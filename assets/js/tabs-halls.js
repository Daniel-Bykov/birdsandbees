document.addEventListener('DOMContentLoaded', function () {

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

});