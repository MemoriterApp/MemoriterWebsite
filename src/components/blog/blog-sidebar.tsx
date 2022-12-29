import React, { FC } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/blog/blog-sidebar.module.scss';

interface Props { //type definitions of props
  topic: string;
}

const BlogSidebar: FC<Props> = ({ topic }: Props) => {
  return (
    <aside className={styles.blog_sidebar}>
      <h1 className={styles.blog_sidebar_heading}>Blog</h1>
      <p className={styles.blog_sidebar_description}>
        Thoughts, inspirations and stories by the people creating Memoriter.
      </p>
      <hr className={styles.blog_sidebar_divider} />

      {/*links to different sub topics*/}
      <ul className={styles.blog_sidebar_topics}>
        {/*the link for the current topic is highlighted*/}
        {topic === 'Latest' ? (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog'>
              <strong style={{ color: 'var(--color-font)' }}>Latest</strong>
            </Link>
          </li>
        ) : (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog'>
              Latest
            </Link>
          </li>
        )}
        {topic === 'Company' ? (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#company'>
              <strong style={{ color: 'var(--color-font)' }}>Company</strong>
            </Link>
          </li>
        ) : (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#company'>
              Company
            </Link>
          </li>
        )}
        {topic === 'Productivity' ? (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#productivity'>
              <strong style={{ color: 'var(--color-font)' }}>Productivity</strong>
            </Link>
          </li>
        ) : (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#productivity'>
              Productivity
            </Link>
          </li>
        )}
        {topic === 'Technology' ? (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#technology'>
              <strong style={{ color: 'var(--color-font)' }}>Technology</strong>
            </Link>
          </li>
        ) : (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#technology'>
              Technology
            </Link>
          </li>
        )}
        {topic === 'Miscellaneous' ? (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#miscellaneous'>
              <strong style={{ color: 'var(--color-font)' }}>Miscellaneous</strong>
            </Link>
          </li>
        ) : (
          <li>
            <Link className={styles.blog_sidebar_topics_link} to='/blog#miscellaneous'>
              Miscellaneous
            </Link>
          </li>
        )}
      </ul>
    </aside>
  );
};
export default BlogSidebar;