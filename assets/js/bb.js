document.addEventListener('DOMContentLoaded', function () {

  let burger = document.querySelector(".left-menu-mobile-button");
  let close = document.querySelector("#close-menu");
  let lm = document.querySelector(".left-menu-mobile");

  console.log(burger, lm, close);

  burger.addEventListener('click', function () {
    lm.style.visibility = "visible";
    lm.style.display = "flex"
  });

  close.addEventListener('click', function () {
    lm.style.visibility = "hidden"
    lm.style.display = "none"
  });
});


let tab; 
let tabContent; 


window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

document.getElementById('tabs').addEventListener('click', function (event)  {
    let target=event.target;
    if (target.className=='tab') {
       for (let i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
});

function hideTabsContent(a) {
    for (let i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

