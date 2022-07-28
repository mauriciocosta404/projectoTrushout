import * as C from './style';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import avatar from '../../../public/images/269796429_907875379913390_4775710928716066908_n.jpg';
import fileIcon from '../../../public/images/file.png';
import Posts from '../posts/Posts';
import {FaSortDown,FaPaperPlane, FaCamera, FaViadeo, FaVaadin, FaVideoSlash} from 'react-icons/fa'
import {FormEvent, useState} from 'react';
import { api } from '../../services/api';
import { userContext } from '../contexts/userContext';

interface UserProps{
    id:number,
    userName:string,
    userEmail:string,
    picture:string
}
const LeftSideBar=()=>{

    /*const user=useContext(userContext)*/
    const [user,setUser]=useState<UserProps>();
    const [posts,setPosts]=useState([]);
    const [text,setText]=useState("");
    const [image,setImage]=useState("");



    useEffect(()=>{
        api.get("/posts").
        then((data)=>setPosts(data.data.posts))

    },[])

    const textWrote=(event:string)=>{
        setText(event);
    }
    const fileSelectedHandler=(event: React.FormEvent<HTMLInputElement>)=>{
        const selectedFile=event.target?.files[0];
        const url=URL.createObjectURL(selectedFile); 
        setImage(url);
    }

    const createPost=()=>{
        const post={text,image}
        api.post('/posts',post);
        api.get('/posts').
        then((data)=>setPosts(data?.data.posts))
    }
    
    if(typeof window!= 'undefined'){
        const id=JSON.parse(localStorage.getItem('id') || '');
        api.get("/users").
        then((data)=>setUser(data.data.users.find((item:UserProps)=>item.id===id)))
    }

    return(
        <C.LeftSideBar className="leftSide">
            

            <div className="white-post-container first-view">

                <div className="user-profile">
                    <Image src={avatar} className="avatarImg" width={40} height={40} alt=""/>
                    <div className="desc">
                        <p>{user?.userName}</p>
                        <small>public <FaSortDown/></small>
                    </div>
                </div>

                <div className="post-user-container">
                    <textarea onChange={(event)=>{textWrote(event.target.value)}} name="" id="" placeholder="What you have, Mauricio"></textarea>

                    <div className="add-post-links">
                        <a href="#">
                            <FaVideoSlash/>Live
                        </a>
                        <a href="#">
                            <FaCamera/>Photo/video
                        </a>
    
                        <label htmlFor="arquivo">
                            <input  
                                name="arquivo" 
                                type="file" 
                                onChange={fileSelectedHandler} 
                                id="arquivo" 
                                multiple 
                                accept="image/*"
                                />
                            <Image className="img-file" src={fileIcon} width={15} height={15} alt=""/>
                            import
                        </label>

                        <button onClick={createPost}><FaPaperPlane/></button>
                    </div>
                </div>

            </div>
            {posts.map(({text,image},id)=>
            (
                <Posts key={id} src={image} text={text}/>
            )
            )}

             
          
        </C.LeftSideBar>
    )
}
export default LeftSideBar;