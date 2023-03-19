import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from '../../styles/blog/blog-main.module.scss';
import emoji_1f3Af from '../../images/emoji/1f3Af.svg'; // bullseye for project
import emoji_1f52C from '../../images/emoji/1f52C.svg'; // microscope for productivity
import emoji_1f6f0 from '../../images/emoji/1f6f0.svg'; // satellite for technology
import emoji_1f4a5 from '../../images/emoji/1f4a5.svg'; // explosion for miscellaneous

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
      {/* text and image describing the current topic */}
      {topic === 'Project' ? (
        <>
          <img className={styles.blog_main_topic} src={emoji_1f3Af} alt='Project' />
          <p className={styles.blog_main_topic}>
            <strong>Project — </strong>How Memoriter is developing and progressing.
          </p>
        </>
      ) : topic === 'Productivity' ? (
        <>
          <img className={styles.blog_main_topic} src={emoji_1f52C} alt='Productivity' />
          <p className={styles.blog_main_topic}>
            <strong>Productivity — </strong>Tips and tricks how to use Memoriter.
          </p>
        </>
      ) : topic === 'Technology' ? (
        <>
          <img className={styles.blog_main_topic} src={emoji_1f6f0} alt='Technology' />
          <p className={styles.blog_main_topic}>
            <strong>Technology — </strong> How Memoriter is made.
          </p>
        </>
      ) : topic === 'Miscellaneous' ? (
        <>
          <img className={styles.blog_main_topic} src={emoji_1f4a5} alt='Miscellaneous' />
          <p className={styles.blog_main_topic}>
            <strong>Miscellaneous — </strong> Everything not fitting into other topics.
          </p>
        </>
      ) : (
        <div className={styles.blog_main_topic} />
      )}

      {/* four newest blog posts, divided in to two parts for the layout */}
      <div className={styles.blog_main_new_blog_container}>
        {blogPosts
          .filter((blogPost: BlogPost) =>
            topic !== 'Latest'
              ? blogPost.frontmatter.topic === topic
              : blogPost.frontmatter.topic !== topic
          )
          .slice(0, 4) // gets the first four objects from the blogs array, is filtered when a topic (e.g. 'company') is set
          .map((blogPost: BlogPost) => {
            const thumb: any = getImage(blogPost.frontmatter.thumb); // post thumbnail

            return (
              <Link
                className={styles.blog_main_new_blog}
                key={blogPost.id}
                to={`/blog/${blogPost.frontmatter.link}`}
              >
                <p>{blogPost.frontmatter.topic}</p>
                <p className={styles.blog_main_blog_date}>
                  {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>

                <GatsbyImage image={thumb} alt={blogPost.frontmatter.title} />

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
          .slice(4, loadedBlogPosts) // gets more objects from the blogs array, is filtered when a topic (e.g. 'company') is set
          .map((blogPost: BlogPost) => {
            const thumb: any = getImage(blogPost.frontmatter.thumb); // post thumbnail

            return (
              <Link
                className={styles.blog_main_old_blog}
                key={blogPost.id}
                to={`/blog/${blogPost.frontmatter.link}`}
              >
                <p className={styles.blog_main_old_blog_outside}>{blogPost.frontmatter.topic}</p>
                <p
                  className={`${styles.blog_main_blog_date} ${styles.blog_main_old_blog_outside}`} // two classes
                >
                  {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>

                <div className={styles.blog_main_old_blog_flex}>
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
        <button onClick={() => setLoadedBlogPosts(loadedBlogPosts + 8)}>Load More...</button>
      ) : (
        <div />
      )}
    </section>
  );
};
export default BlogMain;
