import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';
import Particles from 'react-particles-js';


const particlesOptions ={
                particles: {
                  number:{
                    value: 80,
                    density: {
                      enable: true,
                      value_area: 400
                    }
                  }
              },
              "interactivity": {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                    enable: true,
                    mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                      },
                    resize: true
                  },
              }
            }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
                <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
