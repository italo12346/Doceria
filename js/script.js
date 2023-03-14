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

document.querySelector(".btn-submit").addEventListener('click',()=>{
    window.alert("obrigado pelo contato")
})
