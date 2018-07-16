import React from 'react';
//import images
import Comp from '../images/comp1.jpg';
import Sushi from '../images/sushi2.png';
import Basket from '../images/basket3.jpg';

class Carousel extends React.Component{
    render(){
        return(
            <div className="w3-content" style={{maxWidth:'2000px', marginTop:'46px'}}>
                <div className="mySlides w3-display-container w3-center">
                    <img src={Comp} alt="computer background" style={{width:"100%"}}/>
                    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    </div>
                </div>
                <div className="mySlides w3-display-container w3-center">
                    <img src={Sushi} alt="sushi background" style={{width:'100%'}}/>
                    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    </div>
                </div>
                <div className="mySlides w3-display-container w3-center">
                    <img src={Basket} alt="basketball background" style={{width:'100%'}}/>
                    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    </div>
                </div>
            </div>
        )
    }
}
export default Carousel