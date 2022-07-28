import { FaBars, FaSearch, FaEnvelope, FaBell,FaPersonBooth,FaHome } from 'react-icons/fa';
import * as C from './style';
import avatar from '../../../public/images/269796429_907875379913390_4775710928716066908_n.jpg'
import logoVerde from '../../../public/images/recycling-1341372_1920.png';
import { useState } from 'react';
import Image from 'next/image';

interface UserProps{
    id?:number,
    userName?:string,
    userEmail?:string,
    picture?:string
}


const Header=({id,userName,userEmail,picture}:UserProps)=>{
    const [isAvatarCliked,setIsAvatarClicked]=useState(false);
    const [search,setSearch]=useState("");

    const showSettings=()=>{
        isAvatarCliked?setIsAvatarClicked(false):setIsAvatarClicked(true);
    }   

    return(
        <C.Container>
            
            <C.Logo><Image src={logoVerde} width={30} height={30}/>TrushOut</C.Logo>
            
            <C.IconsContainer>
                <button><a href="/InitialPage"><FaHome/></a></button>
                <button><a href="/chatPage"><FaEnvelope/></a></button>
                <button><FaBell/></button>
                <button><FaPersonBooth/></button>
            </C.IconsContainer>
            
            <C.NavRight>

                <div className="seach-box">
                    <button><FaSearch/></button>
                    <input id="search-value" type="text" placeholder="search" />
                </div>
                <C.Avatar onClick={showSettings}>
                    <div className="online"></div>
                    <Image src={avatar} className="avatar" width={40} height={40} alt=""/>
                </C.Avatar>

                <div className="menu_toggle">
                    <div className="menu-toggle-button">
                        <button className="bars"><FaBars/></button>
                    </div>
                    <div className="menu-toggle-container">
                    
                    </div>
                </div>
            </C.NavRight>

            
            <C.SettingsMenu isAvatarCliked={isAvatarCliked} className="settings-menu">
                
                <div id="dark-btn">
                    <span></span>
                </div>

                <div className="settings-menu-inner">

                    <div className="user-profile">
                        <Image className="settings-icon" src={avatar} width={40} height={40} alt=""/>
                        <div>
                            <p>{userName}</p>
                            <a href="#" className="show-profile">See your profile</a>
                        </div>
                    </div>
                    <hr/>

                    <div className="user-profile">
                        <Image className="settings-icon" src={avatar} width={40} height={40} alt=""/>
                        <div>
                            <p>Give feedback</p>
                            <a href="">Help to improve TrushOut</a>
                        </div>
                    </div>
                    <hr/>

                    <div className="settings-links">
                        <Image src={avatar} width={40} height={40} alt="" className="settings-icon"/>
                        <a href="#">Settings & privacity <i className="fas fa-arrow"></i></a>
                    </div>

                    <div className="settings-links">
                        <Image src={avatar} width={40} height={40} alt="" className="settings-icon"/>
                        <a href="#">Help & support<i className="fas fa-arrow"></i></a>
                    </div>

                    <div className="settings-links">
                        <Image src={avatar} width={40} height={40} alt="" className="settings-icon"/>
                        <a href="/">Sair<i className="fas fa-arrow"></i></a>
                    </div>
                </div>
            </C.SettingsMenu>    

        </C.Container>
    )
}
export default Header;