import React from "react"
import homeVideo from '../assets/home-video.mp4'
import './Home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      <video autoPlay loop muted className='video'>
        <source src={homeVideo} type="video/mp4"/>
      </video>
      <div className="overlay"></div>
      <div className="hero-wrapper">
      <h2>Hi, I am Maximoto 👋</h2>
      <p>Frontend Developer</p>
      </div>
    </div>
  )
};

export default Home;
