import * as C from './style';
import LeftSideBar from '../leftSideBar/LeftSideBar';
import RightSideBar from '../rightSideBar/RightSideBar';
import Header from '../header/Header';
import { UserProvider } from '../contexts/userContext';
import { useState } from 'react';
import { api } from '../../services/api';

interface UserProps{
    id:number ,
    userName:string ,
    userEmail:string,
    picture:string
}

const MainContent=()=>{
    const [user,setUser]=useState<UserProps>();
    if(typeof window!= 'undefined'){
        const id=JSON.parse(localStorage.getItem('id') || '');
        api.get("/users").
        then((data)=>setUser(data.data.users.find((item:UserProps)=>item.id===id)))
    }

    return(
        <UserProvider>
            <C.MainContainer className="mainContainer">
                <Header id={user?.id} userName={user?.userName} userEmail={user?.userEmail} picture={user?.picture}/>
                <LeftSideBar/>
                <RightSideBar/>
            </C.MainContainer>
        </UserProvider>
    )
}
export default MainContent;