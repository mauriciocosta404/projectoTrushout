import styled from "styled-components";

export const RightSideBar=styled.div`
    flex-basis: 25%;
    position: sticky;
    top: 70px;
    align-self: flex-start;
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 4px;
    color: #626263;
    
.sidebar-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
}
.right-sidebar h4{
    font-weight: 600;
    font-size: 16px;
}
.sidebar-title a{
    text-decoration: none;
    color:var(--green);
    font-size: 12px;
}
.event{
    display: flex;
    font-size: 14px;
    margin-bottom: 20px;
}
.left-event{
    border-radius: 10px;
    width: 65px;
    height: 65px;
    margin-right: 15px;
    padding: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
.event p{
    font-size: 12px;
}
.event a{
    font-size: 12px;
    text-decoration: none;
    color: var(--green);
}
.left-event span{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color:var(--green);
    color: #ffffff;
    font-size: 10px;
    padding: 4px 0px;
}
.sidebar-ads{
    width: 100%;
    height: 200px;
    border-radius: 4px;
    margin-bottom: 20px;
}
.online-list{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    transition: 0.3s;
    cursor: pointer;
    position:relative;
}
.online-list:hover{
    background-color: #ccc;
}
.online-list .img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position:relative
}
.online{
        position: absolute;
        top:2px;
        width: .7rem;
        height: .7rem;
        border: 2px solid #ffffff;
        border-radius: 50%;
        background-color: #41db41;
        z-index: 3;
    }

`;