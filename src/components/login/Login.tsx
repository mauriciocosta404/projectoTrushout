import * as C from './style';
import {FaFacebook, FaGoogle, FaGooglePlus, FaLinkedinIn} from 'react-icons/fa';
import { useEffect, useState, FormEvent, useContext } from 'react';
import { api } from '../../services/api';
import { userContext } from '../contexts/userContext';

interface item{
    password:string,
    userEmail:string,
    id:number,
    userName:string,
    picture:string,
}

const Login=()=>{

    useEffect(()=>{
        api.get("/users").
        then((data)=>console.log(data))
    },[])

    const user=useContext(userContext);
    const [email,setEmail]=useState("");
    const [userPassword,setPassword]=useState("");
    const [id,setId]=useState(-1);
    const [userName,setUserName]=useState("");
    const [picture,setPicture]=useState("");

    const check=(event:FormEvent)=>{
        event.preventDefault();
        api.get('/users').
        then((data)=>{
            data.data.users.map(({userEmail,password,id,userName,picture}:item)=>{
                if(userEmail===email && password===userPassword){
                    localStorage.setItem('email',userEmail);
                    localStorage.setItem('id',JSON.stringify(id)); 
                    localStorage.setItem('name',userName)
                    localStorage.setItem('picture',picture)
                    window.location.replace(`/InitialPage`)
                }
           })
    });
    }
    return(
        <C.Container className="content first-content">

            <div className="content second-content">
                    <div className="first-column">
                        <h2 className="title title-primary">hello friend!</h2>
                        <p className="description description-primary">Enter your personal details</p>
                        <p className="description description-primary">and start your journey with us</p>
                        <button id="signUp" className="btn btn-primary">
                            <a href="/cadastro">sign up</a>
                        </button>
                    </div>
                    <div className="second-column">
                        <h2 className="title title-second">sign in to developer</h2>
                        <div className="social-media">
                            <ul className="list-social-media">
                            <a className="link-social-media" href="#"><li className="item-social-media"><FaGoogle/></li></a>
                            <a className="link-social-media" href="#"><li className="item-social-media"><FaFacebook/></li></a>
                            <a className="link-social-media" href="#"><li className="item-social-media"><FaLinkedinIn/></li></a>
                            </ul>
                        </div>
                        <p className="description description-second">or use your email for resistration:</p>
                        <form className="form" method="get" action="../index.html">
                            <label className="label-input" >
                            <i className="far fa-envelope icon-modify"></i>
                                <input onChange={(event)=>setEmail(event.target.value)} className="sign-in-email" type="email" placeholder="email"/>
                            </label>    
                            <label className="label-input">
                                <i className="fas fa-lock icon-modify"></i>
                                <input onChange={(event)=>setPassword(event.target.value)} className="sign-in-password" type="password" placeholder="password"/>
                            </label>    
                            <a forgot-password href="#">forgot your password?</a>
                            <button onClick={check} className="btn btn-second sign-in">sign in</button>
                        </form>
                    </div>
                </div>
        </C.Container>
    )
}
export default Login;