'use strict';

let search=select('#search-value');

let getAllPosts=document.querySelectorAll('.post-container');

search.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
        let searchValue=search.value;
        
    }
});
/*
getAllPosts.forEach((item)=>{
    let c=select('.post-container').innerHTML=item.innerHTML;
    select('.main-content').innerHTML+=c;
    console.log(item.getAttribute('name'));
    console.log(c);
});*/