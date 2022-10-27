import React, { FC } from 'react';
import { HeadFC, graphql } from 'gatsby';
import WebsiteHead from '../components/website-head';
import BlogPostWrapper from '../components/blog/blog-post-wrapper';

interface Props {
  data: {markdownRemark: {
    html: string, frontmatter: {
    topic: string,
    date: string,
    author: string,
    title: string,
    description: string,
    linkedBlogs: string[],
  }, wordCount: {
    words: number;
  }}};
}

const BlogPost: FC<Props> = ({ data }: Props) => {
  
  // destructuring the query items
  const { html } = data.markdownRemark;
  const { topic, date, author, title, linkedBlogs } = data.markdownRemark.frontmatter;
  const { words } = data.markdownRemark.wordCount;

  return (
    <>
    <h1>HELLO, WORLD!</h1>
    <BlogPostWrapper
      topic={topic}
      date={date}
      author={author}
      title={title}
      linkedBlogs={linkedBlogs}
      wordCount={words}
    >
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </BlogPostWrapper>
    </>
  );
};
export default BlogPost;

export const Head: HeadFC<object> = ({ data }: any): React.ReactElement => {

  // destructuring the query items
  const { title, description } = data.markdownRemark.frontmatter;

  return (
    <WebsiteHead
      title={title}
      description={description}
      keywords='blog'
      type='article'
    />
  );
};

export const query = graphql`
  query BlogPostContentQuery($slug: String) {
    markdownRemark(frontmatter: {link: {eq: $slug}}) {
      html
      frontmatter {
        date
        author
        description
        linkedBlogs
        title
        topic
      }
      wordCount {
        words
      }
    }
  }
`