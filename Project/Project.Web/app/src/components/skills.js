import React from 'react';

class Skills extends React.Component{
    render(){
        return(
            <div className="w3-wide" id="skills">
                <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id="skills-container">
                    <h2 className="w3-wide w3-center">SKILLS</h2>
                    <p className="w3-opacity w3-center"><i>and Technologies</i></p><br/>
                    {/* <!-- Row 1 of skills --> */}
                    <div className="w3-row-padding">
                        <div className="w3-col s6 m3">
                            <i className="devicon-dot-net-plain-wordmark colored skills"></i>
                            <p>.Net/Core</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-csharp-plain colored skills"></i>
                            <p>C#</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-amazonwebservices-original colored skills"></i>
                            <p>AWS</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <img className="img-to-icon" src="https://www.freeiconspng.com/uploads/sql-server-icon-8.png" alt="ms sql server" />
                            <p>SQL Server</p><br/>
                        </div>
                    </div>
                    {/* <!-- Row 2 of skills--> */}
                    <div className="w3-row-padding">
                        <div className="w3-col s6 m3">
                            <i className="devicon-javascript-plain colored skills"></i>
                            <p>Javascript</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-react-plain colored skills"></i>
                            <p>React</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-angularjs-plain colored skills"></i>
                            <p>Angular</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-jquery-plain colored skills"></i>
                            <p>jQuery</p>
                        </div>
                    </div>
                    {/* <!-- Row 3 of skills --> */}
                    <div className="w3-row-padding">
                        <div className="w3-col s6 m3">
                            <i className="devicon-html5-plain-wordmark colored skills"></i>
                            <p>HTML</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-css3-plain-wordmark colored skills"></i>
                            <p>CSS</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-bootstrap-plain colored skills"></i>
                            <p>Bootstrap</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-git-plain colored skills"></i>
                            <p>Git</p>
                        </div>
                    </div>
                    {/* <!-- Row 4 of skills --> */}
                    <div className="w3-row-padding">
                        <div className="w3-col s6 m3">
                            <i className="devicon-github-plain colored skills"></i>
                            <p>Github</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-trello-plain colored skills"></i>
                            <p>Trello</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-slack-plain colored skills"></i>
                            <p>Slack</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i className="devicon-visualstudio-plain colored skills"></i>
                            <p>Visual Studio</p>
                        </div>
                    </div>
                    {/* <!-- Row 5 of skills --> */}
                    <div className="w3-row-padding">
                        <div className="w3-col s6 m3">
                            <i class="devicon-wordpress-plain-wordmark"></i>
                            <p>Wordpress</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i class="devicon-wordpress-plain-wordmark"></i>
                            <p>Wordpress</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i class="devicon-wordpress-plain-wordmark"></i>
                            <p>Wordpress</p>
                        </div>
                        <div className="w3-col s6 m3">
                            <i class="devicon-wordpress-plain-wordmark"></i>
                            <p>Wordpress</p>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <h2 className="w3-wide w3-center">*FUTURE TOPICS OF INTEREST</h2>
                        <p className="w3-opacity w3-center"><i>Docker, NodeJs, Swift</i></p><br/>
                        <i className="devicon-docker-plain colored future-skills"></i>
                        <i className="devicon-nodejs-plain-wordmark colored future-skills"></i>
                        <i className="devicon-swift-plain colored future-skills"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills