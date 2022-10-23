import React, { FC, useState } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteWrapper from '../../components/wrapper/website-wrapper';
import BlogSidebar from '../../components/blog/blog-sidebar';
import BlogMain from '../../components/blog/blog-main';

const Blog: FC = () => {

    const [topic, setTopic] = useState<string>(''); //currently selected topic filter

    //checks selected topic based on the url hash
    if(location.hash === '#company' && topic !== 'Company') {
        setTopic('Company');
    } else if (location.hash === '#productivity' && topic !== 'Productivity') {
        setTopic('Productivity');
    } else if (location.hash === '#technology' && topic !== 'Technology') {
        setTopic('Technology');
    } else if (location.hash === '#miscellaneous' && topic !== 'Miscellaneous') {
        setTopic('Miscellaneous');
    } else if (!location.hash && topic !== 'Latest') {
        setTopic('Latest');
    };

    return (
        <WebsiteWrapper
            title='Blog'
            description='Thoughts, inspirations and stories by the people creating Memoriter.'
            currentPage='blog'
        >

            {/*style is needed for two column layout*/}
            <section className='blog-main-body'>

                {/*sidebar with filter options*/}
                <BlogSidebar topic={topic}/>

                {/*main part with blog posts*/}
                <BlogMain topic={topic}/>

            </section>
            
        </WebsiteWrapper>
    );
}

export default Blog;

export const Head: HeadFC = () => <title>Memoriter | Blog</title>;