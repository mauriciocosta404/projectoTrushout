'use strict'

let select=(element)=>document.querySelector(element);

let btnSignIn=select('#signIn');
let btnSignUp=select('#signUp');

let body=select('body');

btnSignIn.addEventListener('click',(event)=>{
    body.className='sign-in-js';
});

btnSignUp.addEventListener('click',(event)=>{
    body.className='sign-up-js';
});
