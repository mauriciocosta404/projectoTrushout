import * as C from './style';
import Image from 'next/image';
import HomeImage from '../../../public/images/4433.jpg';
const House=()=>{
    return(
        <C.SectionContainer>
            <C.HomeSlider>
                <C.Slide>
                    <C.Content>
                        <span>tornando o mundo limpo</span>
                        <h3>trushOut</h3>
                        <p>o trashOut é uma aplicaçao web q</p>
                            <a href="#" className="btn">Cadastrar</a>
                    </C.Content>
                    <C.ImageContainer>
                        <Image src={HomeImage} width={500} height={400} alt=""/>
                    </C.ImageContainer>
                </C.Slide>
            </C.HomeSlider>
        </C.SectionContainer>
    )
}
export default House;