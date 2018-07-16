import React from 'react';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state ={
            clicked: ""
        }
    }

    componentDidMount =() =>{
		document.addEventListener('click', this.handleOutsideClick, false);
	}

    handleClick = (e) =>{
        if(this.state.clicked === " w3-show")
        {
            this.setState({clicked: " w3-hide"})
        }
        else{
            this.setState({
            clicked: " w3-show"
        });
        }
    }

    handleOutsideClick = (e) => {
		if (!this.refs.menu.contains(e.target)) {
            this.setState({
				clicked: ""
			});
		} 
  }

    render(){
        return(
           <div>
                {/*  Navbar  */}
                <div className="w3-top">
                    <div className="w3-bar w3-black w3-card" ref="menu">
                        <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" onClick={this.handleClick.bind(this)}
                            title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
                        <a href="#home" className="w3-bar-item w3-button w3-padding-large">HOME</a>
                        <a href="#skills" className="w3-bar-item w3-button w3-padding-large w3-hide-small">SKILLS</a>
                        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
                        <a href="#blogs" className="w3-bar-item w3-button w3-padding-large w3-hide-small">BLOGS</a>
                        <a href="https://github.com/i-matt" target="_blank" rel="noopener noreferrer"><i className="fa fa-github w3-hover-opacity w3-padding-large w3-hover-red w3-hide-small w3-right"></i></a>
                        <a href="https://www.linkedin.com/in/matt-ipavec/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin w3-hover-opacity w3-padding-large w3-hover-red w3-hide-small w3-right"></i></a>
                    </div>
                </div>

                {/*  Navbar on small screens  */}
                <div id="navDemo" className={"w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" + this.state.clicked} style={{marginTop: '46px'}}>
                    <a href="#skills" className="w3-bar-item w3-button w3-padding-large">SKILLS</a>
                    <a href="#contact" className="w3-bar-item w3-button w3-padding-large">CONTACT</a>
                    <a href="#blogs" className="w3-bar-item w3-button w3-padding-large">BLOGS</a>
                </div>
            </div> 
        )
    }
}

export default Navbar