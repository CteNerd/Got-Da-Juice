import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './BlogList.css';
import OwnerProfile from '../../assets/images/AboutUsOwner.png'
import Logo from '../../assets/images/fulllogo.png'
import BDMLogo from '../../assets/images/BDM_Logo_Circle.png'

const blogPosts = [
    {
        image: BDMLogo,
        title: "New Jersey's Got Da Juice selected for Newchip startup accelerator program",
        description: "By Jordan Maxwell in Food & Beverage - Apr 27, 2023",
        link: '#',
    },
    {
        image: Logo,
        title: "Got Da Juice Chosen for Newchip’s Intensive Global Pre-Seed Accelerator Program",
        description: "A healthy lifestyle juice company...",
        link: '#',
    },
    {
        image: OwnerProfile,
        title: "Feed The Body Dat Good Stuff! - Got Da Juice",
        description: "Feed The Body Dat Good Stuff - Got Da Juice...",
        link: '#',
    },
    // Add more blog posts as needed
];

const BlogList = () => {
    return (
        <div className="blog-list">
            {blogPosts.map((post, index) => (
                <BlogCard
                    key={index}
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    link={post.link}
                />
            ))}
        </div>
    );
};

export default BlogList;