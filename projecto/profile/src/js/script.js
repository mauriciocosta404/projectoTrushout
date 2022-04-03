let file=document.querySelector('#arquivo');

let src;

file.addEventListener("change",(event)=>{

    let reader=new FileReader();

    reader.onload=()=>{

       src=reader.result;
       getImage(src);
       setImage();
         
      }
reader.readAsDataURL(file.files[0]);
    
});
function getImage(src) {
    return src;
}
function setImage() {
    if(getImage(src)){
    document.querySelector('.profile-img img').src=getImage(src);}
    else{
        document.querySelector('.profile-img img').src=getImage("");
    }
}