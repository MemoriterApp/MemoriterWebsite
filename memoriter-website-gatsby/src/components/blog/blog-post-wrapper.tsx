import React, { FC, useEffect, useRef, useState } from 'react';
import '../../styles/blog/blog-post-main.scss';
import WebsiteWrapper from '../wrapper/website-wrapper';
import BlogPostHeader from '../blog/blog-post-header';
import BlogPostFooter from '../blog/blog-post-footer';

interface props { //type definitions for props
    topic: string;
    date: string;
    author: string;
    title: string;
    linkedBlogs: string[];
    wordCount: number;
    allBlogPosts: any;
    children: React.ReactNode;
};

const BlogPost: FC<props> = ({ topic, date, author, title, linkedBlogs, wordCount, allBlogPosts, children }: props) => {

    const minutesRead = (wordCount / 250).toFixed() //(slightly inaccurate) number of words, 250 is an estimation for average words read per minute

    return (
        <WebsiteWrapper currentPage='blog'>

            <section className='blog-post-main'>

                {/*header/blog post data (like title, author, date of publication etc.), gets the data by the general blog post data variables*/}
                <BlogPostHeader title={title} date={date} author={author} topic={topic} minutesRead={minutesRead}/>

                {/*main part*/}
                <article>{children}</article> {/*children is all content inside the wrapper*/}

            </section>

            {/*footer with the read more links, share options etc.*/}
            <BlogPostFooter title={title} linkedBlogs={linkedBlogs} allBlogPosts={allBlogPosts}/>

        </WebsiteWrapper>
    );
};
export default BlogPost;