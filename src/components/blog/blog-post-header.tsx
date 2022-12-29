import React, { FC } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/blog/blog-post-header.module.scss';
import twitterIcon from '../../images/icons/twitter-icon.svg';
import facebookIcon from '../../images/icons/facebook-icon.svg';
import whatsappIcon from '../../images/icons/whatsapp-icon.svg';
import emailIcon from '../../images/icons/email-icon.svg';

interface Props {
  //type definitions of props
  title: string;
  date: string;
  author: string;
  topic: string;
  minutesRead: string;
}

const BlogPostHeader: FC<Props> = ({ title, date, author, topic, minutesRead }: Props) => {
  return (
    <section>
      {/*header with date of publication and links back to the blog page, gets the data by the general blog post data variables as properties*/}
      <Link className={styles.blog_post_header_all_posts} to='/blog'>
        &#129044; All posts {/*&#129044; is a unicode arrow symbol*/}
      </Link>
      <div className={styles.blog_post_header_content}>
        <p className={styles.blog_post_header_data}>
          Published on&nbsp; 
          {new Date(date).toLocaleString('en-us', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          })}
          &nbsp;in {/* &nbsp; are a unicode spaces */}
          <Link
            className={styles.blog_post_header_data_link}
            to={`/blog#${topic.replace(/([A-Z])/g, '$1').toLowerCase()}`}
            // .replace(/([A-Z])/g, '$1').toLowerCase() changes the first letter of the topic from capitalized to lower case letter
          >
            {topic}
          </Link>
        </p>
        <h1 className={styles.blog_post_header_title}>{title}</h1> {/*heading with blog title*/}
        <p className={styles.blog_post_header_author}>by {author}</p> {/*who has written the post*/}
      </div>
      {/*average reading time (*is calculated with the word count)*/}
      <p className={styles.blog_post_header_reading_time}>
        {minutesRead} {minutesRead === '1' ? 'minute' : 'minutes'} read
      </p>
      {/*the condition checks if the singular or plural of minute needs to be displayed*/}
      {/*share links, the links are using the title variable and the current url (window.location)*/}
      <div className={styles.blog_post_header_share}>
        <p>Share this post</p>
        <a
          className={styles.blog_post_header_share_circle}
          style={{ left: '0' }}
          href={`https://twitter.com/intent/tweet?url=${window.location}/&text=${title}`}
          target='_blank'
          rel='noreferrer'
        >
          <img className={styles.blog_post_header_share_icon} src={twitterIcon} alt='Twitter' />
        </a>
        <a
          className={styles.blog_post_header_share_circle}
          style={{ left: '45px' }}
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}/`}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className={styles.blog_post_header_share_icon}
            style={{ marginTop: '-1px' }}
            src={facebookIcon}
            alt='Facebook'
          />
        </a>
        <a
          className={styles.blog_post_header_share_circle}
          style={{ left: '90px' }}
          href={`https://api.whatsapp.com/send?text=${title}%0a${window.location}`}
          target='_blank'
          rel='noreferrer'
        >
          <img className={styles.blog_post_header_share_icon} src={whatsappIcon} alt='WhatsApp' />
        </a>
        <a
          className={styles.blog_post_header_share_circle}
          style={{ left: '135px' }}
          href={`mailto:?subject=${title}&body=${title}%0A${window.location}`}
          target='_blank'
          rel='noreferrer'
        >
          <img className={styles.blog_post_header_share_icon} src={emailIcon} alt='Email' />
        </a>
      </div>
    </section>
  );
};
export default BlogPostHeader;