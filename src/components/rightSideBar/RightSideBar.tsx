import Image from 'next/image';
import avatar from '../../../public/images/eu e crianças.jpg';
import * as C from './style';

const RightSideBar=()=>{

    
 
    return(
        <C.RightSideBar className="rightSide">

            <div className="sidebar-title">
                <h4>Events</h4>
                <a href="#">See all</a>
            </div>

            <div className="event">
                <div className="left-event">
                    <h3>18</h3>
                    <span>March</span>
                </div>
                <div className="right-event">
                    <h4>Social Media</h4>
                    <p>
                        <i className="fas fa-map-marker-alt">
                        </i>
                        Willson Tech Park
                    </p>
                    <a href="#">More Info</a>
                </div>
            </div>

            <div className="event">
                <div className="left-event">
                    <h3>29</h3>
                    <span>June</span>
                </div>
                <div className="right-event">
                    <h4>Mobile marketing</h4>
                    <p>
                        <i className="fas fa-map-marker-alt">
                        </i>
                        Willson Tech Park
                    </p>
                    <a href="#">More Info</a>
                </div>
            </div>

            <div className="sidebar-title">
                <h4>Advertments</h4>
                <a href="#">Close</a>
            </div>

            <Image src={avatar} alt="" className="sidebar-ads" width={300} height={160}/>

            <div className="sidebar-title">
                <h4>Conversation</h4>
                <a href="#">Hide chat</a>
            </div>


            <div className="online-list">
                <div className="online">
                </div> 
                    <Image src={avatar} className="img" width={40} height={40} alt=""/>
                
                <p>Fábio Junik</p>
            </div>
            <div className="online-list">
                <div className="online">
                </div> 
                    <Image src={avatar} className="img" width={40} height={40} alt=""/>
                
                <p>Pedro Muteka</p>
            </div>
            <div className="online-list">
                <div className="online">
                </div> 
                    <Image src={avatar} className="img" width={40} height={40} alt=""/>
                
                <p>Maurício QL</p>
            </div>
        </C.RightSideBar>
    )
}
export default RightSideBar;