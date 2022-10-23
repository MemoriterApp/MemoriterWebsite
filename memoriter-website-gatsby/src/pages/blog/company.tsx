import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteWrapper from '../../components/wrapper/website-wrapper';
import BlogSidebar from '../../components/blog/blog-sidebar';
import BlogMain from '../../components/blog/blog-main';

const BlogCompany: FC = () => {

    return (
        <WebsiteWrapper
            title='Blog'
            description='Thoughts, inspirations and stories by the people creating Memoriter.'
            currentPage='blog'
        >

            {/*style is needed for two column layout*/}
            <section className='blog-main-body'>

                {/*sidebar with filter options*/}
                <BlogSidebar topic='Company'/>

                {/*main part with blog posts*/}
                <BlogMain topic='Company'/>

            </section>
            
        </WebsiteWrapper>
    );
}

export default BlogCompany;

export const Head: HeadFC = () => <title>Memoriter | Blog</title>;