import styled from 'styled-components';

export const Container=styled.header`
    position: fixed;
    top: 0;left:0;right:0;
    background-color: #fff;
    padding: .5rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow:var(--box-shadow);
`;

export const Logo=styled.a`
    display:flex;
    align-items: center;
    color:var(--black);
    font-size: 2rem;
    font-weight: bolder;
`;

export const NavBar=styled.nav`
    a{ 
        font-size: 1.3rem;
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        color: var(--light-color);
        margin:.2rem;
    }
    a.active,a:hover{
        color:#fff;
        background-color: var(--green);
    }
`;

export const IconsContainer=styled.div`
    display: flex;
    align-items: center;
    button{
        margin: .5rem 1rem;
        font-size: 1.7rem;
        border:none;
        padding: .7rem .8rem;
        background-color:#eee;
        border-radius: 50%;
        font-size: 1.2rem;
    :hover{
        color:#fff;
        background-color:var(--green);
        transform: rotate(360deg);
    }
    a{
        color: #000;
        :hover{
        color:#fff;
        background-color:var(--green);
    }
    }

    }
  
`;

export const NavRight=styled.div`
    font-size: 25px;
    display: flex;
    align-items: center;
    button{
        border:none;
        font-size: 1rem;
        padding-top: .4rem;
    }
    .seach-box{
        background-color: #efefef;
        width: 300px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        font-size: 18px;
        color: var(--search-color);
    }
    .seach-box input{
        width: 100%;
        background-color: transparent;
        padding: 10px;    
        outline: none;
        border: none;
    }

    .bars{
        font-size: 1.5rem;
        background-color: transparent;
    }
    .bars{
        display: none;
    }
`;

export const Avatar=styled.div`
    
    margin-left: 30px;
    margin-right: 30px;
    img{
        border-radius: 50%;
        cursor: pointer;
        position: relative;
    }
    .online{
        position: absolute;
        width: .7rem;
        height: .7rem;
        border: 2px solid #ffffff;
        border-radius: 50%;
        background-color: #41db41;
        z-index: 3;
    }

`;

interface SettingsProps{ 
    isAvatarCliked:boolean;
}
export const SettingsMenu=styled.div`

    position: absolute;
    width: 90%;
    max-width: 350px;
    background-color: var(--bg-color);
    box-shadow: 0 0 10px rgba(0,0,0,0.4) ;
    border-radius: 4px;
    overflow: hidden;
    top: 108%;
    right: 5%;    
    max-height: ${({isAvatarCliked}:SettingsProps)=>isAvatarCliked?"30rem":"0"};
    transition: max-height 0.3s;

.settings-menu-height{
    max-height: 450px;
}
.settings-menu hr{
    border: 0;
    height: 1px;
    background-color: #9a9a9a;
    margin: 15px 0;
}
.user-profile{
    display: flex;
    gap: 1rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
}
.user-profile a{
    font-size: 12px;
    color: var(--green);
    text-decoration: none;
}
.settings-menu-inner{
    padding: 20px;
}

.settings-links{
    display: flex;
    align-items: center;
    margin: 15px 0;
    gap: 1rem;
}
.settings-icon{
    margin-right:10px;
    border-radius:50%;
}
.settings-links a{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #626262;

}


#dark-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #999;
    width: 45px;
    border-radius: 15px;
    padding: 2px 3px;
    cursor: pointer;
    display: flex;
    transition:padding-left 0.5s,  background 0.5s;
}
#dark-btn span{
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius:50% ;
    display: inline-block;
}
#dark-btn.dark-btn-on{
     padding-left: 23px;
     background:#0a0a0a ;
}
.green{
    font-size: 20px;
    z-index: 3;
}

`;