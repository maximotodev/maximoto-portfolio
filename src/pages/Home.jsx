import React from "react"
import { TypeAnimation } from 'react-type-animation';
import homeVideo from '../assets/home-video.mp4'
import heroImg from '../assets/hero-img.png'
import heroImg2 from '../assets/hero-img2.png'
import './Home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      <video autoPlay loop muted playsInline className='video'>
        <source src={homeVideo} type="video/mp4"/>
      </video>
      <div className="overlay"></div>
      <div className="hero-wrapper">
        <img className="hero-img" src={heroImg} alt="Maximoto hero image" />
        {/* <h2>Hi, I am Maximoto 👋</h2>
        <p>I am a software developer, aspiring cypherpunk</p> */}
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Hi, I am Maximoto, a software developer_',
    2000,
    'Hi, I am Maximoto, a bitcoiner_',
    2000,
    'Hi, I am Maximoto, an aspiring cypherpunk_',
    2000,
    'Hi, I am Maximoto, a professional mixologist_',
    2000,
  ]}
  speed={50}
  style={{ fontSize: '1.5rem', fontFamily: "'Press Start 2P', cursive", textAlign: 'center'}}
  repeat={Infinity}
/>
      </div>
    </div>
  )
};

export default Home;
