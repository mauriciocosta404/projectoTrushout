import styled from "styled-components";

export const Container=styled.div`


 .container{
     display: flex;
     justify-content: center;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     align-items: center;
     height: 100vh;
     background-color: #ecf0f1;
     background-image: linear-gradient(45deg,green, #16c623);
 }
 .content{
     background-color: white;
    border-radius: 10;  
    width: 960px;
    height: 50%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
 }
 .content::before{
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);;
    width: 40%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    left: 0%;
 }
 .title{
     
     font-size: 28px;
     font-weight: bold;
     text-transform: capitalize;
 }
 .title-primary{
     color: #fff;
 }
 .title-second{
     color: green;
 }
 .description{
     font-size: 14px;
     font-weight: 300;
     line-height: 30px;
 }
 .description-primary{
    color: #fff;
 }
 .description-second{
     color: green;
 }
 .btn{
     border-radius: 15px;
     text-transform: uppercase;
     color: #fff;
     font-size: 10px;
     padding: 10px 50px;
     cursor: pointer;
     font-weight: bold;
     width: 150px;
     align-self: center;
     margin-top:0.5rem;
 }
 .btn-primary{
      background-color: transparent;
      border: 1px solid #fff;
      a{
        color: #fff;
      }
 }
 .btn-primary:hover{
     background-color: #fff;
     color: green;
     a{
        color:green;
     }
 }
 .btn-second{
     background-color:green;
     border: 1px solid green;
     transition:background-color 1s ;
 }
 .btn-second:hover{
     background-color: #fff;
     border: 1px solid  green;
     color: green;
 }
 .first-content{
    display: flex;
 }

 .first-column{
    text-align: center;
    width: 40%;
    z-index: 10;
 }
 .second-column{
     width: 60%;
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 .list-social-media{
     display: flex;
     list-style-type: none;
 }
 .list-social-media a{
     color: #bdc3c7;
     text-decoration: none;
 }
 .social-media{
     margin: 0.5rem 0;
 }
 .link-social-media .item-social-media:hover{
    background-color: green;
    color: #fff;
}
 .link-social-media:not(:first-child){
    margin-left: 10px;
 }

 .item-social-media{
     border: 1px solid #bdc3c7;
     border-radius: 50%;
     width: 35px;
     height: 35px;
     text-align: center;
     line-height: 35px;
     color: #95a5a6;
 }
 
 form{
     display: flex;
     flex-direction: column;
     width: 55%;
     text-align: center;
 }
 
 .label-input{
     background-color:#ecf0f1 ;
     display: flex;
     align-items: center;
     margin: 8px;
 }

 .second-content{
     position: absolute;
     display: flex;
 }
 .second-content .first-column{
     order: 2;
     z-index: -1;
 }
 .second-content .second-column{
     order: 1;
     z-index: -1;
 }
 .forgot-password{
     color: #34496e;
     font-size: 14px;
     margin: 15px 0;
 }
 .forgot-password::first-letter{
     text-transform: capitalize;
 }
 
`;

interface InputProps{
    nameColor:boolean,
}

export const Input=styled.input`
     height: 45px;
     border: none;
     background-color:#ecf0f1;
     border-bottom:1px solid ${({nameColor}:InputProps)=>nameColor?'green':'red'} ;
     width: 100%;
     outline: none;
     padding-left: 5%;
`;