import React, { FC } from 'react';
import * as styles from '../../styles/blog/blog-post-main.module.scss';
import WebsiteLayout from '../layout/website-layout';
import BlogPostHeader from './blog-post-header';
import BlogPostFooter from './blog-post-footer';

interface Props { // type definitions for props
  topic: string;
  date: string;
  author: string;
  title: string;
  linkedBlogs: string[];
  wordCount: number;
  allBlogPosts: any;
  children: React.ReactNode;
};

const BlogPost: FC<Props> = ({ topic, date, author, title, linkedBlogs, wordCount, allBlogPosts, children }: Props) => {

  const minutesRead = (wordCount / 250).toFixed() // (slightly inaccurate) number of words, 250 is an estimation for average words read per minute

  return (
    <WebsiteLayout currentPage='blog'>

      <section className={styles.blog_post_main}>

        {/*header/blog post data (like title, author, date of publication etc.), gets the data by the general blog post data variables*/}
        <BlogPostHeader title={title} date={date} author={author} topic={topic} minutesRead={minutesRead}/>

        {/*main part*/}
        <article>{children}</article> {/*children is all content inside the wrapper*/}

      </section>

      {/*footer with the read more links, share options etc.*/}
      <BlogPostFooter title={title} linkedBlogs={linkedBlogs} allBlogPosts={allBlogPosts}/>

    </WebsiteLayout>
  );
};
export default BlogPost;