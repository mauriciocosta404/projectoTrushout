import styled from "styled-components";

export const MessageGroupSent=styled.div`
    
    width: 100%;
    margin-bottom: 20px;
    text-align: right;
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
`;