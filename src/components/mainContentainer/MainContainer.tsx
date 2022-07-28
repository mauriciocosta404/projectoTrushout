import { PropsWithChildren, ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";


const MainContainer=({children}:PropsWithChildren)=>{
    return(
        <main>
                {children}
            
        </main>
    )
}
export default MainContainer;