import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteWrapper from '../../components/wrapper/website-wrapper';
import BlogSidebar from '../../components/blog/blog-sidebar';
import BlogMain from '../../components/blog/blog-main';

const Blog: FC = () => {

    return (
        <WebsiteWrapper
            title='Blog'
            description='Thoughts, inspirations and stories by the people creating Memoriter.'
            currentPage='blog'
        >

            {/*style is needed for two column layout*/}
            <section className='blog-main-body'>

                {/*sidebar with filter options*/}
                <BlogSidebar topic='Latest'/>

                {/*main part with blog posts*/}
                <BlogMain topic='Latest'/>

            </section>
            
        </WebsiteWrapper>
    );
}

export default Blog;

export const Head: HeadFC = () => <title>Memoriter | Blog</title>;