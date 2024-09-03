import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Header from '../../components/Header/Header';
import BlogList from '../../components/BlogList/BlogList';
import Footer from '../../components/Footer/Footer';

function Blog () {
    return(
        <div>
            <Header / >
            <SectionTitle title={'Blog'}/ >
            <div className="blog-content">
                <BlogList />
            </div>
            <Footer />
        </div>
    )
}

export default Blog;