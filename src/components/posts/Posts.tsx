import Image from 'next/image';
import avatar from '../../../public/images/269796429_907875379913390_4775710928716066908_n.jpg';
import trash1 from '../../../public/images/lcd.jpg';
import {FaSortDown,FaPaperPlane, FaThumbsUp, FaComments, FaShare} from 'react-icons/fa'
import * as C from './style';
import { useEffect } from 'react';
import { api } from '../../services/api';

interface PostsProps{
    src:string,
    text:string
}

const Posts=({src,text}:PostsProps)=>{

    return(
        <C.Container>
             <div className="post-container first-view">
                <div className="post-row">
                     <div className="user-profile">
                        <Image src={avatar} className="avatarImg" width={40} height={40}alt=""/>
                        <div>
                            <p>Pedro Fullstack</p>
                            <span>29 June 2022,    13:40</span>
                        </div>
                    </div>
                    <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                </div>
                
                <p className="post-text">{text}</p>

                {src && <Image 
                    src={src} 
                    width={600} 
                    height={500}
                    alt="" 
                    className="post-img"
                    />}

                <div className="post-row">
                    <div className="activity-icons like">
                        <div>
                            <FaThumbsUp/>567
                        </div>
                    </div>
                    <div className="activity-icons">
                        <div>
                            <FaComments/>
                            67
                        </div>
                    </div>
                    <div className="activity-icons">
                        <div>
                            <FaShare/>
                            127
                        </div>
                    </div>
                    <div className="post-profile-icon">
                        <Image src={avatar} width={15} height={15} alt=""/>
                        <FaSortDown/>
                    </div>
                </div>

            </div>
        </C.Container>
    )
}
export default Posts;