import styled from "styled-components";

export const Container=styled.div`
     .post-container{
        width: 100%;
        background-color: var(--bg-color);
        border-radius: 6px;
        padding: 20px;
        color: #c2c2c2;
        margin: 20px 0;
    }
    .user-profile span{
        font-size: 13px;
        color: #9a9a9a;
    }
    .post-text{
        color: #9a9a9a;
        margin: 15px 5px;
        font-size: 15px;
        word-wrap: break-word;
    }

    .post-text span{
        color: #626262;
        font-weight: 500;
    }
    .post-text a{
        color: var(--green);
        text-decoration: none;
    }
    .post-img{
        width: 100%;
        border-radius: 4px;
        margin-bottom: 5px;
        max-height: 600px;
    }
    .post-row{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .activity-icons .size-icon-post{
        font-size: 20px;
        margin-right: 10px;
    }
    .activity-icons div{
        display: inline-flex;
        align-items: center;
        margin-right: 30px;
        cursor: pointer;
    }
    .post-profile-icon{
        display: flex;
        align-items: center;
    }
    .post-profile-icon img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .load-more-btn{
        display: block;
        margin: auto;
        cursor: pointer;
        padding: 5px 10px;
        border: 1px solid #9a9a9a;
        color: #626262;
        background-color: transparent;
        border-radius: 4px;    
    }
`;