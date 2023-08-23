import React from "react"
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import homeVideo from '../assets/home-video.mp4'
import heroImg from '../assets/hero-linkedin-img.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faBitcoin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Slide, Fade } from "react-awesome-reveal";
import './Home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      <video autoPlay loop muted playsInline className='video'>
        <source src={homeVideo} type="video/mp4"/>
      </video>
      <div className="overlay"></div>
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
      <div className="hero-wrapper">
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
          'Hi, I am Maximoto, a bitcoiner',
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
      </div>
      <Slide delay={3500}>
          <Link 
            className="circle-arrow-wrapper" to='portfolio'>
            <FontAwesomeIcon className="cta-btn" icon={faCircleArrowRight}/>
            <Fade delay={4500}>
              <p className="cta-text">Check out my work</p>
            </Fade>
          </Link>
        </Slide>
    </div>
  )
};

export default Home;
