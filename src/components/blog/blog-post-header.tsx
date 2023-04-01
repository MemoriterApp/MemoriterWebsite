import React, { FC } from 'react';
import { Link } from 'gatsby';
import { useSelector } from 'react-redux';
import * as styles from '../../styles/blog/blog-post-header.module.scss';
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
  date: string;
  author: string;
  topic: string;
  minutesRead: string;
}

const BlogPostHeader: FC<Props> = ({ title, date, author, topic, minutesRead }: Props) => {
  const themeIcons: string = useSelector((state: any) => state.theme.value); // current light or dark mode text based on theme

  return (
    <section className={styles.blog_post_header}>
      {/* header with date of publication and links back to the blog page, gets the data by the general blog post data variables as properties */}
      <Link className={styles.blog_post_header_all_posts} to='/blog'>
        🠔 All posts
      </Link>
      <div className={styles.blog_post_header_content}>
        <p className={styles.blog_post_header_data}>
          Published on{' '}
          {new Date(date).toLocaleString('en-us', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          })}{' '}
          in{' '}
          <Link
            className={styles.blog_post_header_data_link}
            to={`/blog#${topic.replace(/([A-Z])/g, '$1').toLowerCase()}`} // changes the first letter of the topic from capitalized to lower case letter
          >
            {topic}
          </Link>
        </p>
        <h1>{title}</h1> {/* heading with blog title */}
        <p className={styles.blog_post_header_author}>by {author}</p>{' '}
        {/* who has written the post */}
      </div>
      {/* average reading time (is calculated with the word count) */}
      <p className={styles.blog_post_header_reading_time}>
        {minutesRead} {minutesRead === '1' ? 'minute' : 'minutes'} read
      </p>
      {/* the condition checks if the singular or plural of minute needs to be displayed */}
      {/* share links, the links are using the title variable and the current url (window.location) */}
      <div className={styles.blog_post_header_share}>
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
          <img
            src={themeIcons === 'light' ? whatsappIconBlack : whatsappIconWhite}
            alt='WhatsApp'
          />
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
    </section>
  );
};
export default BlogPostHeader;
