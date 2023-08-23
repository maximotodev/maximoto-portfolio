import React from "react"
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import homeVideo from '../assets/home-video.mp4'
import heroImg from '../assets/hero-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faBitcoin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      <video autoPlay loop muted playsInline className='video'>
        <source src={homeVideo} type="video/mp4"/>
      </video>
      <div className="overlay"></div>
      <div className="hero-wrapper">
        <div className="social-bar">
          <Link className="social-icon" to='#'>
              <FontAwesomeIcon icon={faLinkedin}/>
          </Link>
          <Link className="social-icon" to='#'>
              <FontAwesomeIcon icon={faGithub}/>
          </Link>
          <Link className="social-icon" to='#'>
              <FontAwesomeIcon icon={faBitcoin}/>
          </Link>
          <Link className="social-icon" to='#'>
              <FontAwesomeIcon icon={faDiscord}/>
          </Link>
        </div>
        <img className="hero-img" src={heroImg} alt="Maximoto hero image" />
        {/* <h2>Hi, I am Maximoto 👋</h2>
        <p>I am a software developer, aspiring cypherpunk</p> */}
        <TypeAnimation
          wrapper='div'
          className="typing-animation"
          sequence={[
          // Same substring at the start will only be typed once, initially
          'Hi, I am Maximoto, a Frontend software developer',
          3000,
          'Hi, I am Maximoto, a bitcoin maxi',
          3000,
          'Hi, I am Maximoto, an aspiring cypherpunk',
          3000,
          'Hi, I am Maximoto, a professional mixologist',
          3000,
          ]}
          omitDeletionAnimation={true}
          speed={50}
          style={{ fontSize: '1rem', color: "black", fontFamily: "'Press Start 2P', cursive", textAlign: 'center', lineHeight: '1.5'}}
          repeat={Infinity}
        />
        <Link 
          className="circle-arrow-btn" to='portfolio'>
          <FontAwesomeIcon style={{fontSize: '3rem'}} icon={faCircleArrowRight}/>
          <p>Check out my work</p>
        </Link>
      </div>
    </div>
  )
};

export default Home;
