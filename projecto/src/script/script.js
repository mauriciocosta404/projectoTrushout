'use strict'

let select=(element)=>document.querySelector(element);

let settingsMenu=select('.settings-menu');

const settingesMenuToggle=select('.nav-user-icon');

settingesMenuToggle.addEventListener('click',(event)=>{
    settingsMenu.classList.toggle('settings-menu-height');
})

//---------------------dark-mode--------------

let modeBtn=select('#dark-btn');

modeBtn.addEventListener('click',(event)=>{
    modeBtn.classList.toggle('dark-btn-on');
    let dark=document.body.classList.toggle('dark-theme');

    if(dark){
        logoDark();
    }else{
        logoLight();
    }

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

})

function logoDark(){
    select('.logo img').src='src/image/recycling-1341372_1920.png';
}
function logoLight() {
    select('.logo img').src='src/image/black-and-white-1297353_1280.png';
}

//Problema, Palavras tecnicas, admin da escola

//-----------------localStorage-for-mode----------------

if(localStorage.getItem("theme")=="light"){
    modeBtn.classList.remove("dark-btn-on");

    let dark=document.body.classList.remove('dark-theme');

}else if(localStorage.getItem("theme")=="dark"){
    modeBtn.classList.add("dark-btn-on");

    let dark=document.body.classList.add('dark-theme');

    logoDark()

}else{
    localStorage.setItem("theme","light");
}

localStorage.getItem("dark");
