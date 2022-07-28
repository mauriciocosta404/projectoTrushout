import * as C from './style';
import Image from 'next/image';
import RightSideBar from '../rightSideBar/RightSideBar';
import avatar from '../../../public/images/269796429_907875379913390_4775710928716066908_n.jpg'
import MainContent from '../mainContent/MainContent';
import { FaPaperPlane, FaPlusCircle, FaCamera, FaMicrophone, FaSmile } from 'react-icons/fa';
import { api } from '../../services/api';
import { useEffect,useState } from 'react';
import Header from '../header/Header';
import MessageItem from './messageItem/MesssageItem';

interface UserProps{
    id:number ,
    userName:string ,
    userEmail:string,
    picture:string
}
interface MessageProps{
    message:string,
}
const Chat=()=>{

    const [message,setMessage]=useState("");
    const [messages,setMessages]=useState<MessageProps[] | any>([]);

    const [user,setUser]=useState<UserProps>();
    if(typeof window!= 'undefined'){
        const id=JSON.parse(localStorage.getItem('id') || '');
        api.get("/users").
        then((data)=>setUser(data.data.users.find((item:UserProps)=>item.id===id)))
    }

    const createMessage=()=>{
        const allMessages=[...messages,message];
        setMessages(allMessages);
    }

    return(
        <>
        <Header id={user?.id} userName={user?.userName} userEmail={user?.userEmail} picture={user?.picture}/>
        <C.MainContainer>
            <div id="app">
                <div className="messages">
                    <div className="message-group-received">
                        <div>
                            <Image src={avatar} className="img" width={30} height={30}alt=""/>
                        </div>
                        <div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-group-sent">
                       
                        <div>
            
                            <div className="message-sent">
                                <div className="message-sent-text">
                                    hey man how are you??
                                </div>
                                
                                <div className="message-sent-status">
                                </div>
            
                            </div>
            
                            <div className="message-sent">
                                <div className="message-sent-text">
                                    hey man how are you??
                                </div>
            
                                <div className="message-sent-status">
            
                                </div>
            
                            </div>
            
                            <div className="message-sent">
                                <div className="message-sent-text">
                                    hey man how are you??
                                </div>
            
                                <div className="message-sent-status">
            
                                </div>
            
                            </div>
            
                        </div>
            
                    </div>
            
                    <div className="message-group-received">
                        <div>
                            <Image src={avatar} className="img" width={30} height={30}alt=""/>
                        </div>
                        <div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-group-sent">
                       
                        <div>
            
                            <div className="message-sent">
                                <div className="message-sent-text">
                                    hey man how are you??
                                </div>
                                
                                <div className="message-sent-status">
                                </div>
            
                            </div>
            
                            <div className="message-sent">
                                <div className="message-sent-text">
                                    hey man how are you??
                                </div>
            
                                <div className="message-sent-status">
            
                                </div>
            
                            </div>
            
                            <div className="message-sent">
                                <div className="message-sent-text">
                                    hey man how are you??
                                </div>
            
                                <div className="message-sent-status">
            
                                </div>
            
                            </div>
                            
                            
                        </div>
            
                    </div>
            
    
                    <div className="message-group-received">
                        <div>
                            <Image src={avatar} className="img" width={30} height={30}alt=""/>
                        </div>
                        <div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                            <div className="message-received">
                                <div className="message-received-text">
                                    hey man how are you??
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="message-group-sent">
                        {messages.map((message:string)=>(
                            <MessageItem message={message}/>))
                        }
                    </div>
                  
                
                </div>
                <div className="chat-footer">
                    <div className="buttom-icons">
                        <div><FaPlusCircle/></div>
                        <div><FaCamera/></div>
                        <div><FaMicrophone/></div>
                        <div><FaSmile/></div>
                    </div>
                    <div className="send">
                        <textarea
                            onChange={(event)=>setMessage(event.target.value)} 
                            name="" 
                            id="chatText" 
                            placeholder="write message...">

                            </textarea>
                        <div onClick={createMessage} className="button-send">
                            <FaPaperPlane/>
                        </div>
                    </div>
                </div>
        
            </div>
            <RightSideBar/>
        </C.MainContainer>
        </>
    )
}
export default Chat;