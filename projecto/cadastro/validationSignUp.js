'use strict'

let signUpButton=document.querySelector('.btn-second');

signUpButton.addEventListener('click',(event)=>{
    event.preventDefault();

    let email=document.querySelector('.sign-up-email').value;

    let password=document.querySelector('.sign-up-password').value;

    let name=document.querySelector('.sign-up-name').value;

    testAllSignUnData(name,email,password);
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

    function validateName(name) {
        let nameRegex=/^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/;

        const testName=nameRegex.test(name);

        if(testName){
            return true;
        }
        return false;

    }
    function testAllSignUnData(name,email,password) {
        console.log(validateEmail(email));
        if(password && email && name){
  
            if(validateName(name)){
                alert("nome aceite");
            }else{
                alert("nome não aceite");
            }
            
            if(validateEmail(email)){
                alert("email aceite");
            }else{
                alert("este email está errado");
            }
            console.log(validateName(name));
            if(validatePassword(password)){
                alert("palavra-passe aceite");
            }else{
                alert("a tua palavra passe tem de ter no minimo um numero,pelo menos 8 caracteres,pelo menos uma letra menuscula e uma maiuscula e caracteres se a à z e de 1 à 9");
            }
        }else{
            alert("preencha todos os formularios");
        }
    }
