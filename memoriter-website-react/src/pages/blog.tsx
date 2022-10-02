import React, { FC } from 'react';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import BlogSidebar from '../components/blog/blog-sidebar';
import BlogMain from '../components/blog/blog-main';

interface props { //type definitions for props
    topic: string;
};

const Blog: FC<props> = ({ topic }: props) => {

    const filter = topic; //variable for filtering the blog posts

    return (
        <WebsiteWrapper
            title='Blog'
            description='Thoughts, inspirations and stories by the people creating Memoriter.'
            currentPage='blog'
        >

            {/*style is needed for two column layout*/}
            <section className='blog-main-body'>

                {/*sidebar with filter options*/}
                <BlogSidebar topic={filter}/>

                {/*main part with blog posts*/}
                <BlogMain topic={filter}/>

            </section>
            
        </WebsiteWrapper>
    );
}

export default Blog;
