'use strict'

let likes=document.querySelectorAll('.like');

likes.forEach((item)=>{
    item.addEventListener('click',(event)=>{
        item.style.color='blue';
    });
});