import React from 'react';

class Hackathons extends React.Component{
    render(){
        return(
            <div className="w3-black" id="hacks">
                <div className="w3-container w3-content w3-padding-64" style={{maxWidth:'800px'}}>
                    <h2 className="w3-wide w3-center">UPCOMING HACKATHONS</h2>
                    <p className="w3-opacity w3-center"><i>Remember to sign up on time!</i></p><br/>
        
                    <ul className="w3-ul w3-border w3-white w3-text-grey">
                        <li className="w3-padding">May <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
                        <li className="w3-padding">June <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
                        <li className="w3-padding">July <span className="w3-badge w3-right w3-margin-right">3</span></li>
                    </ul>
        
                    <div className="w3-row-padding w3-padding-32" style={{margin:'0 -16px'}}>
                        <div className="w3-third w3-margin-bottom">
                            {/* <img src="/w3images/newyork.jpg" alt="New York" style={{width:'100%'}} className="w3-hover-opacity"/> */}
                            <div className="w3-container w3-white">
                                <p><b>Los Angeles</b></p>
                                <p className="w3-opacity">Fri 27 May 2018</p>
                                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="w3-button w3-black w3-margin-bottom">Buy Tickets</button>
                            </div>
                        </div>
                        <div className="w3-third w3-margin-bottom">
                            {/* <img src="/w3images/paris.jpg" alt="Paris" style={{width:'100%'}} className="w3-hover-opacity"/> */}
                            <div className="w3-container w3-white">
                                <p><b>Los Angeles</b></p>
                                <p className="w3-opacity">Sat 28 June 2018</p>
                                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="w3-button w3-black w3-margin-bottom" >Buy Tickets</button>
                            </div>
                        </div>
                        <div className="w3-third w3-margin-bottom">
                            {/* <img src="/w3images/sanfran.jpg" alt="San Francisco" style={{width:'100%'}} className="w3-hover-opacity"/> */}
                            <div className="w3-container w3-white">
                                <p><b>Los Angeles</b></p>
                                <p className="w3-opacity">Sun 29 June 2018</p>
                                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="w3-button w3-black w3-margin-bottom">Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hackathons