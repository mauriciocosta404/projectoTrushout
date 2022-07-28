import styled from "styled-components";

export const MainContainer=styled.div`
     margin-top: 5.5rem;
    display: flex;
    justify-content: center;
    padding: 13px 5%;

    h1{
    text-align: center;
}
#app{
    display: inline-block;
    max-width: 800px;
    width: 37rem;
    margin: 0 1rem;
    color: white;
    background-color: var(--bg-color);
}
.message-group-received{
    display: flex;
    width: 100%;
    margin-bottom: 20px;
}
.message-group-received > div:first-child{
    margin-top: auto;
    margin-right: 5px;
}
.img{
    border-radius: 50%;
}
.message-received{
    max-width: 75%;
    margin: 2px 0;
    display: flex;
}
.message-received:first-child .message-received-text{
    border-top-left-radius: 20px;
}
.message-received:last-child .message-received-text{
    border-bottom-left-radius: 20px;
}
.message-received-text{
    padding: 10px;
    min-height: 20px;
    background-color: #373737;
    border-radius: 4px 20px 20px 4px;
}
/*-------------------------------------------*/
.message-group-sent{
    
    width: 100%;
    margin-bottom: 20px;
    text-align: right;
    
}
.message-sent{
    display: flex;
    justify-content: flex-end;
    margin: 2px 0 2px auto;
}
.message-sent-text{
    width: 150px;
    background-color:var(--green);
    border-radius: 20px 4px 4px 20px;
    min-height: 20px;
    padding: 10px;
    word-wrap: break-word;
}
.message-sent:first-child > .message-sent-text{
    border-top-right-radius: 20px;
}
.message-sent:last-child > .message-sent-text{
    border-bottom-right-radius: 20px;
}
.message-sent-status{
    width: 15px;
    display: flex;
    margin-left: 5px;
    font-size: 15px;
    color: rgba(134, 142,142, 0.5);
}
/*--------------chat-footer------------------*/

.chat-footer{
    position: sticky;
    bottom:0px;
    width: 100%;
    height: 20px;
    background-color: var(--green);
    color: var(--nav-color);
    box-shadow: 3px 3px rgba(0,0,0,0.1);
    height: 60px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.send{
    height: 35px;
    border-radius: 50px;
    padding-right: 15px;
    background-color: white;
    display: flex;
    align-items: center;
}
.chat-footer textarea{
    height: 35px;
    border-radius: 50px;
    border: none;
    resize: none;
    outline: none;
    padding: 10px;
    width: 250px;
    overflow-y: hidden;
}
.buttom-icons{

    display: flex;
    div{
        margin: 0 .4rem;
        
    }
}
.button-send{
    cursor: pointer;
    color: (--button-send-color);
    }
`;
