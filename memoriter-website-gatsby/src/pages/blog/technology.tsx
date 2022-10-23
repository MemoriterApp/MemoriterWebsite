import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteWrapper from '../../components/wrapper/website-wrapper';
import BlogSidebar from '../../components/blog/blog-sidebar';
import BlogMain from '../../components/blog/blog-main';

const BlogTechnology: FC = () => {

    return (
        <WebsiteWrapper
            title='Blog'
            description='Thoughts, inspirations and stories by the people creating Memoriter.'
            currentPage='blog'
        >

            {/*style is needed for two column layout*/}
            <section className='blog-main-body'>

                {/*sidebar with filter options*/}
                <BlogSidebar topic='Technology'/>

                {/*main part with blog posts*/}
                <BlogMain topic='Technology'/>

            </section>
            
        </WebsiteWrapper>
    );
}

export default BlogTechnology;

export const Head: HeadFC = () => <title>Memoriter | Blog</title>;