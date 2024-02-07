import React from "react"
import { Link } from "react-router-dom";
import heroImg from '../assets/hero-linkedin-img.jpeg'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact wrapper">
      <img className="hero-img" src={heroImg} alt="Maximoto hero image" />
      <h2>@maximotodev</h2>
      <div className="social-bar">
          <Link className="social-icon" to='https://www.linkedin.com/in/diego-aguero-90101322a/'>
              <FontAwesomeIcon icon={faLinkedin}/>
          </Link>
          <Link className="social-icon" to='https://github.com/maximotodev'>
              <FontAwesomeIcon icon={faGithub}/>
          </Link>
          <Link className="social-icon" to='https://snort.social/p/npub165ka9706vpl8phnw0w5wh89za8nnl56dajz92h6e2m9uxxvkz6wszt0gn5'>
              nostr
          </Link>
          <Link onClick={() => window.location = 'mailto:maximotodev@proton.me'} className="social-icon" to='#'>
              <FontAwesomeIcon icon={faAt}/>
          </Link>
        </div>
      <p className="contact-description">I am a software developer with an insatiable passion for all things tech and a particular fascination with the world of Bitcoin.</p>
      <p className="contact-description">When I am not crafting innovative applications for software challenges, I unleash my inner warrior through the ancient art of Thai boxing. The discipline, focus, and determination required in the martial arts world resonate with the precision and attention to detail I bring to my coding endeavors.</p>
      <code>-The LORD is King-</code>
    </div>
  )
};

export default Contact;
