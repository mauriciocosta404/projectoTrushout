'use strict'

let menuToggleButton=select('.menu-toggle-button');

let menu=select('.menu-toggle-container');

menuToggleButton.addEventListener('click',(event)=>{
    showMenu();
});

let containerMenu=select('.green');

function showMenu(){
    let showMenu=menu.classList.toggle('show_menu');
    if(showMenu){
        showMenubarItems();
    }
    else{
        hideMenubarItems();
    }
}

let showHome=select('.home');
showHome.addEventListener('click',(Event)=>{

    let firstView=document.querySelectorAll('.first-view');
  
    let showFirstView=firstView;
  
                showFirstView.forEach((view)=>{
                  view.style.display='block';
                });
                appChat.style.display='none';
                
    hideMenubarItems();
    appChat.style.display='none';
});

let showMessages=select('.messages');
showMessages.addEventListener('click',(Event)=>{

let showChatClick=showChat;

hideMenubarItems();

      let firstView=document.querySelectorAll('.first-view');

      let hideFirstView=firstView;

              hideFirstView.forEach((view)=>{
                view.style.display='none';
              });
              appChat.style.display='block';
  
});

function showMenubarItems() {
    containerMenu.classList.add('container-menu');
        containerMenu.style.display='flex';
}
function hideMenubarItems() {
    containerMenu.classList.remove('container-menu');
        containerMenu.style.display='none';
}