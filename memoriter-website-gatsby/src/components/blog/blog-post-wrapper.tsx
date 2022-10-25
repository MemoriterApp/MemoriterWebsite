import React, { FC, useEffect, useRef, useState } from 'react';
import '../../styles/blog/blog-post-main.css';
import WebsiteWrapper from '../wrapper/website-wrapper';
import BlogPostHeader from '../blog/blog-post-header';
import BlogPostFooter from '../blog/blog-post-footer';

interface props { //type definitions for props
    blog: {topic: string, date: string, author: string, title: string, description: string, linkedBlogs: string[]};
    children: React.ReactNode;
};

const BlogPost: FC<props> = ({ blog, children }: props) => {

    //general blog post data (used for the post header)
    const topic = blog.topic; //the topic/category for the filter option (Company, Productivity, Technology or Miscellaneous)
    const date = blog.date; //date of publication
    const author = blog.author; //the name of the author
    const title = blog.title; //blog title
    const linkedBlogs = blog.linkedBlogs; //blog posts linked at the bottom of the text

    const blogPostMain = useRef<any>(null); //reference to the content

    const [postContent, setPostContent] = useState<string>(''); //gets the text of the post

    useEffect(() => { //useEffect is needed to fix an issue where the value cannot is read before the component renderes, resulted in an error
        setPostContent(blogPostMain.current.innerText); //counts the words of the text (every word in the <article/> tag)
    }, [postContent]);

    const minutesRead = (postContent.split(' ').length / 250).toFixed() //(slightly inaccurate) number of words, 250 is an estimation for average words read per minute

    return (
        <WebsiteWrapper currentPage='blog'>

            <section className='blog-post-main'>

                {/*header/blog post data (like title, author, date of publication etc.), gets the data by the general blog post data variables*/}
                <BlogPostHeader title={title} date={date} author={author} topic={topic} minutesRead={minutesRead}/>

                {/*main part*/}
                <article ref={blogPostMain}>{children}</article> {/*children is all content inside the wrapper*/}

            </section>

            {/*footer with the read more links, share options etc.*/}
            <BlogPostFooter title={title} linkedBlogs={linkedBlogs}/>

        </WebsiteWrapper>
    );
}

export default BlogPost;