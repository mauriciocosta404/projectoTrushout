import * as C from './style';
import { Container } from './style';
import { FaLinkedinIn, FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState, FormEvent, useEffect } from 'react';
import { api } from '../../services/api';

interface userProps{
    name:string,
    email:string,
    password:string,
} 

const Cadastro=()=>{

    useEffect(()=>{
        fetch('https://localhost:3000/api/users').
        then((data)=>console.log(data));
    },[]);

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    function validateEmail(email:string){
        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const testEmail=emailRegex.test(email);

        return testEmail?true:false;
    }

    function validatePassword(password:string) {
        let passwordRegex= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
        const testPassword=passwordRegex.test(password);

        return testPassword?true:false;
    }

    function validateName(name:string) {
        let nameRegex=/^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/;
        const testName=nameRegex.test(name);

        return testName?true:false;

    }
    function testAllSignUpData(name:string,email:string,password:string, event:FormEvent) {
        event.preventDefault();
        if(password && email && name){
  
            if(validateName(name) && validateEmail(email) && validatePassword(password)){
                const data={name,email,password};
                api.post('/users',data);
                alert("cadastro feito com sucesso");
                window.location.replace('/InitialPage');
            }

        }else{
            alert("preencha todos os formularios");
        }
    }


    return(

        <>
            <C.Container className="container">
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">Welcome back!</h2>
                        <p className="description description-primary">To keep conect us</p>
                        <p className="description description-primary">please login with your personal info</p>
                        <button id="signIn" className="btn btn-primary"><a href="/login"> sign in</a></button>
                    </div>
                    <div className="second-column">
                        <h2 className="title title-second">create account</h2>
                        <div className="social-media">
                            <ul className="list-social-media">
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <FaGoogle/>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <FaFacebook/>
                                </li>
                            </a>
                            <a className="link-social-media" href="#">
                                <li className="item-social-media">
                                    <FaLinkedinIn/>
                                </li>
                            </a>
                            </ul>
                        </div>
                        <p className="description description-second">or use your email for resistration:</p>
                        <form className="form">
                            <label className="label-input" htmlFor="">
                                <i className="far fa-user icon-modify"></i>
                                    <C.Input onChange={(event)=>setName(event.target.value)} nameColor={validateName(name)} className="sign-up-name" type="text" placeholder="Name"/>
                            </label>
                            <label className="label-input" htmlFor="">
                                <i className="far fa-envelope icon-modify"></i>
                                    <C.Input onChange={(event)=>setEmail(event.target.value)} nameColor={validateEmail(email)} className="sign-up-email" type="email" placeholder="email"/>
                                </label>    
                                <label className="label-input" >
                                    <i className="fas fa-lock icon-modify"></i>
                                    <C.Input onChange={(event)=>setPassword(event.target.value)} nameColor={validatePassword(password)} className="sign-up-password" type="password" placeholder="password"/>
                                </label>    
                                <button onClick={(event)=>testAllSignUpData(name,email,password,event)} className="btn btn-second">sign up</button>
                        </form>
                    </div>
                </div>

                
            </C.Container>
        </>
        )
}
export default Cadastro;