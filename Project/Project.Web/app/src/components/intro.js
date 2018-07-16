import React from 'react';
//import images
import Profile from'../images/profile.jpg';


class Intro extends React.Component{
    render(){
        return(
            <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth: '800px'}}>
                <img className="profilePic" src={Profile} alt="profile pic" />
                <h3 className="w3-wide">Matt Ipavec</h3>
                <p className="w3-opacity">Software Developer</p>
                <p className="w3-justify"><strong>Hi, I'm Matt! </strong> I’m a self-taught Software Developer currently studying to become an AWS Certified
                    Developer – Associate. I love programming, and I don’t let my non-traditional coding background stand in
                    the way of learning different technologies. I studied Business in college, but have a real passion for solving
                    complex engineering problems. I want to experience programming to the fullest, and use the tool that’s best
                    for a specific task. I never want to become too comfortable with one technology that I limit myself from
                    exploring others. I’m constantly looking to improve my skills, and I know that new opportunities and challenges
                    will lead me to growth. Follow me on my journey as I blog about tech events I attend, and share parts of
                    my every day life. If you are interested in learning more about me, feel free to get in touch.</p>
            </div>
        )
    }
}

export default Intro