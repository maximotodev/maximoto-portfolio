import React from "react"
import { Link } from "react-router-dom";
import './Blog.css'

const Blog = () => {
  return (
    <div className="blog wrapper">
      <h3 className="blog-title">Welcome to my blog</h3>
      <p>🚀 Welcome, tech enthusiasts, coding aficionados, and crypto enthusiasts! I am thrilled to have you here. This is your one-stop destination for the latest breakthroughs and insights in the ever-evolving worlds of technology, programming, and Bitcoin. Whether you're a seasoned developer, a curious newcomer to the coding world, or simply someone intrigued by the possibilities of Bitcoin and cryptocurrency, you'll find valuable content here that's tailored just for you.</p>
      <Link to='#' className="blog-entry">
        <h4 className="blog-entry-title">The Fascinating World of Bitcoin Mining</h4>
        <img className='blog-entry-img' src="https://images.pexels.com/photos/8919566/pexels-photo-8919566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Bitcoin mining" />
        <p className="blog-entry-description">In the realm of cryptocurrencies, Bitcoin has undoubtedly taken the spotlight. As the pioneer and most widely recognized digital currency, it has revolutionized the way we think about money and finance. Behind the scenes of this groundbreaking technology lies an intricate and essential process known as Bitcoin mining. In this entry, we will delve into the fascinating world of Bitcoin mining, exploring its mechanisms, significance, and its impact on the global financial landscape.</p>

      </Link>
    </div>
  )
};

export default Blog;
