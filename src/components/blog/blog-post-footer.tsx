import React, { FC } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useSelector } from 'react-redux';
import * as styles from '../../styles/blog/blog-post-footer.module.scss';
import twitterIconWhite from '../../images/icons/twitter-icon-white.svg';
import twitterIconBlack from '../../images/icons/twitter-icon-black.svg';
import facebookIconWhite from '../../images/icons/facebook-icon-white.svg';
import facebookIconBlack from '../../images/icons/facebook-icon-black.svg';
import whatsappIconWhite from '../../images/icons/whatsapp-icon-white.svg';
import whatsappIconBlack from '../../images/icons/whatsapp-icon-black.svg';
import emailIconWhite from '../../images/icons/email-icon-white.svg';
import emailIconBlack from '../../images/icons/email-icon-black.svg';

interface Props {
  title: string;
  linkedBlogs: string[];
  allBlogPosts: any;
}

const BlogPostFooter: FC<Props> = ({ title, linkedBlogs, allBlogPosts }: Props) => {
  const themeIcons: string = useSelector((state: any) => state.theme.value); // current light or dark mode text based on theme
  return (
    <section className={styles.blog_post_footer}>
      {/* share links, the links are using the title variable and the current url (window.location) */}
      <div className={styles.blog_post_footer_share}>
        <p>Share this post</p>
        <a
          href={
            typeof window !== 'undefined' && typeof location !== 'undefined'
              ? `https://twitter.com/intent/tweet?url=${window.location}/&text=${title}`
              : ''
          }
          target='_blank'
          rel='noreferrer'
        >
          <img src={themeIcons === 'light' ? twitterIconBlack : twitterIconWhite} alt='Twitter' />
        </a>
        <a
          href={
            typeof window !== 'undefined' && typeof location !== 'undefined'
              ? `https://www.facebook.com/sharer/sharer.php?u=${window.location}/`
              : ''
          }
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={themeIcons === 'light' ? facebookIconBlack : facebookIconWhite}
            alt='Facebook'
          />
        </a>
        <a
          href={
            typeof window !== 'undefined' && typeof location !== 'undefined'
              ? `https://api.whatsapp.com/send?text=${title}%0a${window.location}`
              : ''
          }
          target='_blank'
          rel='noreferrer'
        >
          <img src={themeIcons === 'light' ? whatsappIconBlack : whatsappIconWhite} alt='WhatApp' />
        </a>
        <a
          href={
            typeof window !== 'undefined' && typeof location !== 'undefined'
              ? `mailto:?subject=${title}&body=${title}%0A${window.location}`
              : ''
          }
          target='_blank'
          rel='noreferrer'
        >
          <img src={themeIcons === 'light' ? emailIconBlack : emailIconWhite} alt='Email' />
        </a>
      </div>
      <hr /> {/* small divider line */}
      <h2>Read More</h2>
      {/* link to all blog posts */}
      <Link className={styles.blog_post_footer_all_posts} to='/blog'>
        All posts &#129046; {/* &#129044; is a unicode arrow symbol */}
      </Link>
      <div>
        {/* it is checked if one of all blog posts matches the title of one of the linked blogs */}
        {allBlogPosts
          .filter(
            (blogPost: any) =>
              blogPost.frontmatter.link ===
              linkedBlogs.find((item) => item === blogPost.frontmatter.link)
          )
          .map((blogPost: any) => {
            const thumb: any = getImage(blogPost.frontmatter.thumb); // post thumbnail

            return (
              <Link
                className={styles.blog_post_footer_linked_blog}
                to={`/blog/${blogPost.frontmatter.link}`}
                key={blogPost.id}
              >
                <p className={styles.blog_post_footer_linked_blog_outside}>
                  {blogPost.frontmatter.topic}
                </p>
                <p
                  className={`${styles.blog_post_footer_linked_blog_date} ${styles.blog_post_footer_linked_blog_outside}`} // two classes
                >
                  {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>

                <div className={styles.blog_post_footer_linked_blog_flex}>
                  <div className={styles.blog_post_footer_linked_blog_box}>
                    <h3>{blogPost.frontmatter.title}</h3>
                    <p>{blogPost.frontmatter.description}</p>
                  </div>

                  <GatsbyImage
                    className={styles.blog_post_footer_linked_blog_box_image}
                    image={thumb}
                    alt={blogPost.frontmatter.title}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};
export default BlogPostFooter;
