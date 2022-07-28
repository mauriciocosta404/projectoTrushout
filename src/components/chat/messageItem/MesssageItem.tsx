 import * as C from './style';

 interface MessageProps{
    message:string
 }

 const MessageItem=({message}:MessageProps)=>{
    return (
        <>
           
            <div className="message-sent">
                <div className="message-sent-text">
                    {message}
                </div>
                               
                <div className="message-sent-status">
                </div>
           
            </div>     
                           
           
        </>
    )
}

export default MessageItem;