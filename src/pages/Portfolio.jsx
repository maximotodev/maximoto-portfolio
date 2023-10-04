import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Portfolio.css'
import certificationImg from '../assets/frontend-scrimba.png'
import backendMeta from '../assets/backend-meta.png'
import artistWebsiteImg from '../assets/artist-img.png'
import quizzicalImg from '../assets/quizzical.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {

  const [project, setProject] = useState([{
    image: artistWebsiteImg,
    title: 'artist website',
    repo: 'https://github.com/maximotodev/website-artist',
    live: 'https://silver-vacherin-dd1af3.netlify.app/',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni expedita quae, ea vero illum odio et eveniet perferendis corporis vel sapiente! Iure assumenda enim voluptatum?'
  },
  {
    image: quizzicalImg,
    title: 'quizzical',
    repo: 'https://github.com/maximotodev/quizzical',
    live: 'https://maximotodev.github.io/quizzical/',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni expedita quae, ea vero illum odio et eveniet perferendis corporis vel sapiente! Iure assumenda enim voluptatum?'
  },])

  const cardEl = project.map((element) => <div key={element.title} className="projects-wrapper">
      <h2 className="project-title">{element.title}</h2>
      <img className='project-img' src={element.image} alt={element.title} />
      <div className="wrapper-links">
        <Link target='_blank' className="project-link"
        to={element.repo}>
          <FontAwesomeIcon icon={faGithub}/>
          </Link>
        <Link target='_blank' className="project-link"
        to={element.live}><FontAwesomeIcon icon={faCirclePlay}/></Link>
      </div>
      <p className="project-description">{element.description}</p>
  </div>)

  return (
    <div className="portfolio wrapper">
      <h1 className="portfolio-title">Proof of Work</h1>
      <p className="portfolio-description">👋 Hello, and thank you for visiting my portfolio! This is the place where I take you on a journey through my experiences, projects, and achievements in the exciting realms of technology, programming, and Bitcoin.</p>
      <h2 className="certifications-title">Certifications</h2>

      <div className="certifications-wrapper">
        <div className="certification-card">
          <h4 className="certification-title">The Frontend Developer Career Path</h4>
          <Link target="_blank"
            className="link-to-certificate"
            to='https://scrimba.com/certificate/uKLBwESL/gfrontend'>
          <img className="certification-img" src={certificationImg} alt="Scrimba Frontend Developer Course certification" />
          </Link>
          <p className="certification-description" >The program contains 12 modules. All modules are filled with interactive coding challenges to ensure that you don't fall off the wagon. You'll learn HTML, CSS, JavaScript, React, UI design, career strategy, and more.</p>
        </div>
        <div className="certification-card">
          <h4 className="certification-title">Introduction to Back-End Development</h4>
          <Link target="_blank"
            className="link-to-certificate"
            to='https://coursera.org/verify/CLX29DGQ9THH'>
          <img className="certification-img" src={backendMeta} alt="Introduction to Back-End Development Course Certification" />
          </Link>
          <p className="certification-description" >The program contains 12 modules. All modules are filled with interactive coding challenges to ensure that you don't fall off the wagon. You'll learn HTML, CSS, JavaScript, React, UI design, servers, back-end development, and more.</p>
        </div>
      </div>
      <h2 className="projects-title">Projects</h2>
      {cardEl}
    </div>
  )
};

export default Portfolio;
