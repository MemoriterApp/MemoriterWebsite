import React, { FC } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/blog/blog-sidebar.module.scss';

interface Props {
  topic: string;
}

const BlogSidebar: FC<Props> = ({ topic }: Props) => {
  return (
    <aside className={styles.blog_sidebar}>
      <h1>Blog</h1>
      <p>Thoughts, inspirations and stories by the people creating Memoriter.</p>
      <hr />

      {/* links to different sub topics */}
      <ul>
        {/* the link for the current topic is highlighted */}

        <li>
          <Link
            to='/blog'
            style={topic === 'Latest' ? { fontWeight: 'bold', color: 'var(--color-font)' } : {}}
          >
            Latest
          </Link>
        </li>
        <li>
          <Link
            to='/blog#company'
            style={topic === 'Company' ? { fontWeight: 'bold', color: 'var(--color-font)' } : {}}
          >
            Company
          </Link>
        </li>
        <li>
          <Link
            to='/blog#productivity'
            style={
              topic === 'Productivity' ? { fontWeight: 'bold', color: 'var(--color-font)' } : {}
            }
          >
            Productivity
          </Link>
        </li>
        <li>
          <Link
            to='/blog#technology'
            style={topic === 'Technology' ? { fontWeight: 'bold', color: 'var(--color-font)' } : {}}
          >
            Technology
          </Link>
        </li>
        <li>
          <Link
            to='/blog#miscellaneous'
            style={
              topic === 'Miscellaneous' ? { fontWeight: 'bold', color: 'var(--color-font)' } : {}
            }
          >
            Miscellaneous
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default BlogSidebar;
