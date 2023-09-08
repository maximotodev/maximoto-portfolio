import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Portfolio.css'
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

  const cardEl = project.map((element) => <div key={element.title} className="project-wrapper">
      <img className='project-img' width={125} src={element.image} alt={element.title} />
      <h1 className="project-title">{element.title}</h1>
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
      <h2 className="portfolio-title">Proof of Work</h2>
        {cardEl}
    </div>
  )
};

export default Portfolio;
