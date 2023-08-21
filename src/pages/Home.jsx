import React from "react"
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
        <h2>Hi, I am Maximoto 👋</h2>
        <p>I am a software developer, aspiring cypherpunk</p>
      </div>
    </div>
  )
};

export default Home;
