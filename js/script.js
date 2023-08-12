var btnMenu = document.querySelector(".btn-menu");
var menuClick = document.querySelector(".menu");
let cont = 0

btnMenu.addEventListener("click", function () {
    
    if(cont==0){
        document.querySelector(".sideBar-active").setAttribute('class', 'sideBar-show')
        btnMenu.setAttribute('class', 'btn-menuON')
        cont++
        console.log(cont);
    }else{
        document.querySelector("#sideBar-disable").setAttribute('class', 'sideBar-active')
        btnMenu.setAttribute('class', 'btn-menu')
        cont=0
        console.log(cont);
    }
       
});


/* CARROUSEL */


const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
