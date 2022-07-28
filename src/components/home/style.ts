import styled from "styled-components";

export const SectionContainer=styled.section`
    padding:2rem 4%;
`;
export const HomeSlider=styled.section`

`;
export const Slide=styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:1.5rem;
    padding-top:9rem;
    flex-wrap:wrap;
    
`;
export const Content=styled.section`
    flex:1 1 45rem;
    span{
        color:var(--green);
        font-size:3rem;
    }
    h3{
        color:var(--black);
        font-size:6rem;
    }
    p{
        color:var(--light-color);
        padding:2rem 0;
        font-size:1.7rem;
        line-height:1.5;
    }
    .btn{
        margin-top: .5rem;
        display:inline-block;
        font-size:1.4rem;
        color:#fff;
        background-color: var(--black);
        border-radius: .5rem;
        cursor:pointer;
        padding:.8rem 3rem;
    }
    .btn:hover{
        background-color: var(--green);
        letter-spacing: .1rem;
    }
`;
export const ImageContainer=styled.div`
    flex:1 1 45rem;
    img{
        width:100%;
    }
`;