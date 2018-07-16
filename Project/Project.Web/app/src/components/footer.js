import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
                    <a href="https://www.linkedin.com/in/matt-ipavec/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin w3-hover-opacity w3-padding"></i></a>
                    <a href="https://github.com/i-matt" target="_blank" rel="noopener noreferrer"><i className="fa fa-github w3-hover-opacity w3-hide-small w3-padding"></i></a>
                    <p className="w3-medium">© Copyright 2018 Matt Ipavec</p>
                </footer>
            </div>
        )
    }
}

export default Footer