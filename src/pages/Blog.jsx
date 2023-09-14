import React, { useState } from "react"
import { Link } from "react-router-dom";
import './Blog.css'

const Blog = () => {

  const entries = [
    {
    title: 'The Fascinating World of Bitcoin Mining',
    picture: 'https://images.pexels.com/photos/8919566/pexels-photo-8919566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'In the realm of cryptocurrencies, Bitcoin has undoubtedly taken the spotlight. As the pioneer and most widely recognized digital currency, it has revolutionized the way we think about money and finance...'}, 
    {
    title: 'Exploring React: A Comprehensive Guide',
    picture: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    description: 'React, a JavaScript library developed and maintained by Facebook, has revolutionized the way developers build user interfaces for web applications. With its component-based architecture and virtual DOM, React has become the go-to choice for building interactive and responsive web applications...'}]

  const [blogEntries, setBlogEntries] = useState(entries)


  const entriesElement = blogEntries.map(entry => (<Link key={entry.title} to='#' className="blog-entry">
  <h4 className="blog-entry-title">{entry.title}</h4>
  <img className='blog-entry-img' src={entry.picture} alt={entry.title} />
  <p className="blog-entry-description">{entry.description}</p>
</Link>))

  return (
    <div className="blog wrapper">
      <div className="blog-intro">
      <h3 className="blog-title">Welcome to my blog</h3>
      <p className="blog-description">🚀 Welcome, tech enthusiasts, coding aficionados, and crypto enthusiasts! I am thrilled to have you here.</p>
      <p className="blog-description">This is your one-stop destination for the latest breakthroughs and insights in the ever-evolving worlds of technology, programming, and Bitcoin.</p>
      <p className="blog-description">Whether you're a seasoned developer, a curious newcomer to the coding world, or simply someone intrigued by the possibilities of Bitcoin and cryptocurrency, you'll find valuable content here that's tailored just for you.</p>
      </div>
      <div className="entries-wrapper">
        <h3 className="entries-title">Latest posts</h3>
        {entriesElement}
      </div>
    </div>
  )
};

export default Blog;
