'use strict'

let textArea=select('.post-user-container textarea');
let mainContent=select('.main-content');
let file=document.querySelector('#arquivo');

let src;

file.addEventListener("change",(event)=>{

    let reader=new FileReader();

    reader.onload=()=>{

       src=reader.result;
       getImage(src);
         
      }
reader.readAsDataURL(file.files[0]);
    
});

textArea.addEventListener('keypress', (event)=>{

    let postContainer=select('.post-container').cloneNode(true);

    let textAreaValue=select('.post-user-container textarea').value;


    if(event.key==='Enter'){
        setDate(textAreaValue,postContainer);
        mainContent.appendChild(postContainer);
        cleanTextArea();
    }
})

function setDate(textAreaValue,postContainer) {
    
    date(postContainer);
    
    const textPosted=postContainer.querySelector(".post-text");
    
    textPosted.innerText=textAreaValue;

    setImage(postContainer);

}

function getImage(src) {
    return src;
}

function setImage(postContainer) {
    if(getImage(src)){
    postContainer.querySelector(".post-container > img").src=getImage(src);}
    else{
        postContainer.querySelector(".post-container > img").src=getImage("");
    }
}

function date(postContainer) {
    let date=new Date();

    let day=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();
    let hour=date.getHours();
    let minutes=date.getMinutes();

    postContainer.querySelector('.user-profile span').innerHTML=`${day} ${month} ${year},${hour}:${minutes}`;
}

function cleanTextArea() {
    select('.post-user-container textarea').value="";
    file.value="";
}