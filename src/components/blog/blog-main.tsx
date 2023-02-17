import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from '../../styles/blog/blog-main.module.scss';

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          link: string;
          topic: string;
          thumb: object;
          date: string;
          author: string;
          title: string;
          description: string;
          linkedBlogs: string[];
        };
        id: string;
      }[];
    };
  };
  topic: string;
}

type BlogPost = {
  id: string;
  frontmatter: {
    link: string;
    topic: string;
    thumb: object;
    date: string;
    author: string;
    title: string;
    description: string;
    linkedBlogs: string[];
  };
};

const BlogMain: FC<Props> = ({ topic, data }: Props) => {
  const blogPosts = data.allMarkdownRemark.nodes; // list of all blog posts

  const [loadedBlogPosts, setLoadedBlogPosts] = useState(8); // number of blog posts shown before clicking on the load more button

  return (
    <section className={styles.blog_main}>
      {/* four newest blog posts, divided in to two parts for the layout */}
      <div className={styles.blog_main_new_blog_container}>
        {blogPosts
          .filter((blogPost: BlogPost) =>
            topic !== 'Latest'
              ? blogPost.frontmatter.topic === topic
              : blogPost.frontmatter.topic !== topic
          )
          .slice(0, 2)
          .map((blogPost: BlogPost) => {
            //gets the first two objects from the blogs array, is filtered when a topic (e.g. 'company') is set
            const thumb: any = getImage(blogPost.frontmatter.thumb); // post thumbnail

            return (
              <Link
                className={styles.blog_main_new_blog}
                key={blogPost.id}
                to={`/blog/${blogPost.frontmatter.link}`}
              >
                <p style={{ lineHeight: '1rem' }}>{blogPost.frontmatter.topic}</p>
                <p className={styles.blog_main_blog_date} style={{ lineHeight: '1rem' }}>
                  {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>

                <GatsbyImage
                  className={styles.blog_main_new_blog_image}
                  image={thumb}
                  alt={blogPost.frontmatter.title}
                />

                <h2>{blogPost.frontmatter.title}</h2>
                <p>{blogPost.frontmatter.description}</p>
              </Link>
            );
          })}
      </div>

      <div className={styles.blog_main_new_blog_container}>
        {blogPosts
          .filter((blogPost: BlogPost) =>
            topic !== 'Latest'
              ? blogPost.frontmatter.topic === topic
              : blogPost.frontmatter.topic !== topic
          )
          .slice(2, 4)
          .map((blogPost: BlogPost) => {
            // gets the first two objects from the blogs array, is filtered when a topic (e.g. 'company') is set
            const thumb: any = getImage(blogPost.frontmatter.thumb); // post thumbnail

            return (
              <Link
                className={styles.blog_main_new_blog}
                key={blogPost.id}
                to={`/blog/${blogPost.frontmatter.link}`}
              >
                <p style={{ lineHeight: '1rem' }}>{blogPost.frontmatter.topic}</p>
                <p className={styles.blog_main_blog_date} style={{ lineHeight: '1rem' }}>
                  {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>

                <GatsbyImage
                  className={styles.blog_main_new_blog_image}
                  image={thumb}
                  alt={blogPost.frontmatter.title}
                />

                <h2>{blogPost.frontmatter.title}</h2>
                <p>{blogPost.frontmatter.description}</p>
              </Link>
            );
          })}
      </div>

      {/* older blog posts (different, more compact style) */}
      <div>
        {blogPosts
          .filter((blogPost: BlogPost) =>
            topic !== 'Latest'
              ? blogPost.frontmatter.topic === topic
              : blogPost.frontmatter.topic !== topic
          )
          .slice(4, loadedBlogPosts)
          .map((blogPost: BlogPost) => {
            // gets more objects from the blogs array, is filtered when a topic (e.g. 'company') is set
            const thumb: any = getImage(blogPost.frontmatter.thumb); // post thumbnail

            return (
              <Link
                className={styles.blog_main_old_blog}
                key={blogPost.id}
                to={`/blog/${blogPost.frontmatter.link}`}
              >
                <p className={styles.blog_main_old_blog_outside}>{blogPost.frontmatter.topic}</p>
                <p
                  className={`${styles.blog_main_blog_date} ${styles.blog_main_old_blog_outside}`}
                  style={{ lineHeight: '1rem' }}
                >
                  {' '}
                  {/* two classes */}
                  {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className={styles.blog_main_old_blog_box}>
                    <h2>{blogPost.frontmatter.title}</h2>
                    <p>{blogPost.frontmatter.description}</p>
                  </div>

                  <GatsbyImage
                    className={styles.blog_main_old_blog_image}
                    image={thumb}
                    alt={blogPost.frontmatter.title}
                  />
                </div>
              </Link>
            );
          })}
      </div>

      {/* load more button, onClick just adds eight to the number of the maximum of shown blogs. The button is just shown if necessary. */}
      {loadedBlogPosts <=
      blogPosts.filter((blogPost: any) =>
        topic !== 'Latest' ? blogPost.topic === topic : blogPost.topic !== topic
      ).length -
        1 ? (
        <button
          className={styles.blog_main_button}
          onClick={() => setLoadedBlogPosts(loadedBlogPosts + 8)}
        >
          Load More...
        </button>
      ) : (
        <div />
      )}
    </section>
  );
};
export default BlogMain;
