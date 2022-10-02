import React, { FC } from 'react';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import BlogPostHeader from '../components/blog/blog-post-header';
import BlogPostFooter from '../components/blog/blog-post-footer';

interface props { //type definitions for props
    blog: {topic: string, date: string, author: string, title: string, description: string, content: React.ReactNode, linkedBlogs: string[]};
};

const BlogPost: FC<props> = ({ blog }: props) => {

    //general blog post data (used for the post header)
    const topic = blog.topic; //the topic/category for the filter option (Company, Productivity, Technology or Miscellaneous)
    const date = blog.date; //date of publication
    const author = blog.author; //the name of the author
    const title = blog.title; //blog title
    const description = blog.description; //small description, same as used for the overview page
    const content = blog.content; //main content text of the post
    const linkedBlogs = blog.linkedBlogs; //blog posts linked at the bottom of the text

    return (
        <WebsiteWrapper
            title={title}
            description={description}
            currentPage='blog'
        >

            <section className='blog-post-main'>

                {/*header/blog post data (like title, author, date of publication etc.), gets the data by the general blog post data variables*/}
                <BlogPostHeader title={title} date={date} author={author} topic={topic}/>

                {/*main part*/}
                {content}

            </section>

            {/*footer with the read more links, share options etc.*/}
            <BlogPostFooter title={title} linkedBlogs={linkedBlogs}/>

        </WebsiteWrapper>
    );
}

export default BlogPost;