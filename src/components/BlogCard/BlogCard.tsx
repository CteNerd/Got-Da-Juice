import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
  body: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  subtitle,
  link,
  body,
}) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Link to={link} state={{ image, title, subtitle, body }}>
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
