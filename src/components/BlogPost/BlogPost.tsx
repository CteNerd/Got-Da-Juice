import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import SectionTitle from "../SectionTitle/SectionTitle";
import Footer from "../Footer/Footer";

interface BlogPostProps {
  image: string;
  title: string;
  subtitle: string;
  body: string;
}

function BlogPost() {
  const location = useLocation();
  const { image, title, subtitle, body } = location.state as BlogPostProps;

  return (
    <div className="blog-post">
      <Header />
      <SectionTitle title={`Blog | ${title}`} />
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, "<br />") }}
      />
      <Footer />
    </div>
  );
}

export default BlogPost;
