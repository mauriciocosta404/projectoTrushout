'use strict'

let showChat=document.querySelectorAll('.online-list');

let appChat=select('#app');

let showChatClick=showChat;
showChatClick.forEach((element)=>{

    element.addEventListener('click',(event)=>{

      let firstView=document.querySelectorAll('.first-view');

      let hideFirstView=firstView;

              hideFirstView.forEach((view)=>{
                view.style.display='none';
              });
              appChat.style.display='block';
    });
});

let home=select('#home');

home.addEventListener('click',(event)=>{

  let firstView=document.querySelectorAll('.first-view');

  let showFirstView=firstView;

              showFirstView.forEach((view)=>{
                view.style.display='block';
              });
              appChat.style.display='none';
});
//--------------------write-message----------

let buttonSend=select('.button-send');

let messageClone=select('.message-group-sent').cloneNode(true);

buttonSend.addEventListener('click',(event)=>{
  let chatTextValue;
  chatTextValue=select('#chatText').value;
  setText(chatTextValue);
  select('#chatText').value="";
});

function setText(chatTextValue) {
  let messageTextItem=takeText(chatTextValue);
  if(messageTextItem){
    messageClone.querySelector('div').innerHTML+=messageTextItem;
    appChat.querySelector('.messages').append(messageClone);
  }
}

function takeText(chatTextValue){
  if(chatTextValue && chatTextValue.length>2 && chatTextValue.trim()!=''){
    let messageTextItem=
    `<div class="message-sent">
        <div class="message-sent-text">
          ${chatTextValue}
        </div>
        <div class="message-sent-status">
        </div>
      </div>`;
  return messageTextItem;
  }
  return false;
}

function cleanTextArea() {
  select('#chatText').value="";
}
