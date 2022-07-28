import { createContext,ReactNode,useState } from "react";

export const userContext=createContext({});

interface User{
    id:number,
    userName:string,
    userEmail:string,
    avatar:string
}
interface UserChildren{
    children:ReactNode,
}

export const UserProvider=({children}:UserChildren)=>{
    const [user,setUser]=useState<User>({id:-1,userName:"",userEmail:"",avatar:""});
    return(
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}


