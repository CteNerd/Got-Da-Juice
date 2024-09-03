import React from 'react';
import './BlogCard.css'

function BlogCard ({ image = '', title = '', description = '', link = '' }) {
    return (
        <div className="blog-card">
            <img src={image} alt={title} className="blog-card-image" />
            <div className="blog-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} className="read-more">Read more</a>
            </div>
        </div>
    )
}

export default BlogCard;