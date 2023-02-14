import React, { FC } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from '../../styles/blog/blog-post-footer.module.scss';
import twitterIcon from '../../images/icons/twitter-icon.svg';
import facebookIcon from '../../images/icons/facebook-icon.svg';
import whatsappIcon from '../../images/icons/whatsapp-icon.svg';
import emailIcon from '../../images/icons/email-icon.svg';

interface Props {
  title: string;
  linkedBlogs: string[];
  allBlogPosts: any;
}

const BlogPostFooter: FC<Props> = ({ title, linkedBlogs, allBlogPosts }: Props) => {
  return (
    <section className={styles.blog_post_footer}>
      {/*share links, the links are using the title variable and the current url (window.location)*/}
      <div className={styles.blog_post_footer_share}>
        <p>Share this post</p>
        <a
          className={styles.blog_post_footer_share_circle}
          style={{ left: '0' }}
          href={`https://twitter.com/intent/tweet?url=${window.location}/&text=${title}`}
          target='_blank'
          rel='noreferrer'
        >
          <img className={styles.blog_post_footer_share_icon} src={twitterIcon} alt='Twitter' />
        </a>
        <a
          className={styles.blog_post_footer_share_circle}
          style={{ left: '45px' }}
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}/`}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className={styles.blog_post_footer_share_icon}
            style={{ marginTop: '-1px' }}
            src={facebookIcon}
            alt='Facebook'
          />
        </a>
        <a
          className={styles.blog_post_footer_share_circle}
          style={{ left: '90px' }}
          href={`https://api.whatsapp.com/send?text=${title}%0a${window.location}`}
          target='_blank'
          rel='noreferrer'
        >
          <img className={styles.blog_post_footer_share_icon} src={whatsappIcon} alt='WhatApp' />
        </a>
        <a
          className={styles.blog_post_footer_share_circle}
          style={{ left: '135px' }}
          href={`mailto:?subject=${title}&body=${title}%0A${window.location}`}
          target='_blank'
          rel='noreferrer'
        >
          <img className={styles.blog_post_footer_share_icon} src={emailIcon} alt='Email' />
        </a>
      </div>

      <hr className={styles.blog_post_footer_divider} /> {/*small divider line*/}
      
      <h2 className={styles.blog_post_footer_read_more}>Read More</h2>
      {/*link to all blog posts*/}
      <Link className={styles.blog_post_footer_all_posts} to='/blog'>
        All posts &#129046; {/*&#129044; is a unicode arrow symbol*/}
      </Link>
      <div>
        {/*it is checked if one of all blog posts matches the title of one of the linked blogs*/}
        {allBlogPosts
          .filter(
            (blogPost: any) =>
              blogPost.frontmatter.link === linkedBlogs.find((item) => item === blogPost.frontmatter.link)
          )
          .map((blogPost: any) => {
            const thumb: any = getImage(blogPost.frontmatter.thumb); // post thumbnail

            return (
              <Link
              className={styles.blog_post_footer_linked_blog}
                to={`/blog/${blogPost.frontmatter.link}`}
                key={blogPost.id}
              >
                <p className={styles.blog_post_footer_linked_blog_outside}>{blogPost.frontmatter.topic}</p>
                <p
                  className={`${styles.blog_post_footer_linked_blog_date} ${styles.blog_post_footer_linked_blog_outside}`}
                  style={{ lineHeight: '1rem' }}
                >
                  {/*two classes*/}
                  {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className={styles.blog_post_footer_linked_blog_box}>
                    <h3>{blogPost.frontmatter.title}</h3>
                    <p>{blogPost.frontmatter.description}</p>
                  </div>

                  <GatsbyImage
                    className={styles.blog_post_footer_linked_blog_image}
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