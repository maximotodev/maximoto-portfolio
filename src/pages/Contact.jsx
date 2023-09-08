import React from "react"
import heroImg from '../assets/hero-linkedin-img.jpeg'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact wrapper">
      <img className="hero-img" src={heroImg} alt="Maximoto hero image" />
      <h2>maximoto</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt ex, sed harum explicabo natus? Accusantium autem eos rem earum, veritatis doloremque expedita eligendi quam praesentium minus, iste ex inventore.</p>
    </div>
  )
};

export default Contact;
