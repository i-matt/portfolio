import React, { Component } from 'react';
//import css
import './App.css';
//import components
import Navbar from './components/navbar.js';
// import Carousel from './components/carousel.js';
import Intro from './components/intro.js';
import Skills from './components/skills.js';
import Hackathons from './components/hackathons.js';
import Contact from './components/contact.js'
import Footer from './components/footer.js';

class App extends Component {
  componentDidMount(){
    console.log("Welcome to my site. You must be super curious if you're checking the code here. Here are some more things about me:");
    console.log("My favorite sports are football and basketball. I root for the Baltimore Ravens and the Oklahoma City Thunder. Neither of which are doing too well right now...");
    console.log("I love Italian food, but Japanese food is a close second; close enough that they sometimes switch positions.");
    console.log("If you want to talk more, feel free to send me a message. Thanks for visiting!");
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* <Carousel/> */}
        <Intro/>
        <Skills/>
        <Hackathons/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;