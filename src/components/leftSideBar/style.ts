import styled from "styled-components";

export const LeftSideBar=styled.div`
    flex-basis: 47%;
    margin-right: 10px;

    .white-post-container{
        width: 100%;
        background-color: var(--bg-color);
        border-radius: 6px;
        padding: 20px;
        color: #626262;
    }
    .user-profile{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .avatarImg{
        border-radius: 50%;
    }
    .user-profile p{
        margin-bottom: -5px;
        font-weight: 600;
        color: #626262;
    }
    .user-profile small{
        font-size: 12px;
    }
    .post-user-container{
        padding-left: 55px;
        padding-top: 20px;
    }
    .post-user-container textarea{
        width: 100%;
        height: 2rem;
        border: 0;
        outline: none;
        border-bottom: 1px solid #ccc;
        background-color: transparent;
        resize: none;
        color: var(--nav-color);
    }
    .img-file{
        width: 25px;
        cursor: pointer;
        position: relative;
        left: 100%;
    }
    input[type='file']{
        display: none;
        cursor: pointer;
    }
    .add-post-links{
        display: flex;
        margin-top: 10px;
    
    }
    .add-post-links button{
        background-color:transparent;
        margin-left: 1rem;
        border:none;
    }
    .add-post-links a{
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #626262;
        margin-right: 30px;
        font-size: 13px;
    }
    .add-post-links a .icon-font{
        font-size: 20px;
        margin-right: 10px;
    }
   
`;