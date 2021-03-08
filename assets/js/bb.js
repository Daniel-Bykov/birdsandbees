document.addEventListener('DOMContentLoaded', function () {

  let burger = document.querySelector(".left-menu-mobile-button");
  let close = document.querySelector("#close-menu");
  let lm = document.querySelector(".left-menu-mobile");

  console.log(burger, lm, close);

    burger.addEventListener('click', function () {
        lm.style.visibility = "visible";
        lm.style.display = "flex" });

        close.addEventListener('click', function () {
          lm.style.visibility = "hidden"
          lm.style.display = "none"   });
  
          
     

});



