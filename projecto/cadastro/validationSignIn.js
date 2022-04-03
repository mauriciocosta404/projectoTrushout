'use strict'

let signInButton=document.querySelector('.sign-in');

signInButton.addEventListener('click',(event)=>{
    event.preventDefault();

    let email=document.querySelector('.sign-in-email').value;

    let password=document.querySelector('.sign-in-password').value;

    testAllSignInData(email,password);
    
});

function validateEmail(email){
    let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const testEmail=emailRegex.test(email);

    if(testEmail){
        return true;
    }
    return false;
}

function validatePassword(password) {
    let passwordRegex= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;

    const testPassword=passwordRegex.test(password);

    if(testPassword){
        return true;
    }
    return false;
}
function testAllSignInData(email,password) {
    if(password && email){

        if(validateEmail(email)){
            alert("email aceite");
        }else{
            alert("este email está errado");
        }

        if(validatePassword(password)){
            alert("palavra-passe aceite");
           //window.location.replace('../index.html');
           window.location.href='../index.html';
        }else{
            alert("a tua palavra passe tem de ter no minimo um numero,pelo menos 8 caracteres,pelo menos uma letra menuscula e uma maiuscula e caracteres se a à z e de 1 à 9");
        }
    }else{
        alert("preencha todos os formularios");
    }
}

