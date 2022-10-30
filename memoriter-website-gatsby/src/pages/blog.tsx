import React, { FC, useState } from 'react';
import { HeadFC, graphql } from 'gatsby';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import BlogSidebar from '../components/blog/blog-sidebar';
import BlogMain from '../components/blog/blog-main';

interface Props {
  //type definitions of props
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
}

const Blog: FC<Props> = ({ data }: Props) => {
  const [topic, setTopic] = useState<string>(''); //currently selected topic filter

  //checks selected topic based on the url hash
  if (location.hash === '#company' && topic !== 'Company') {
    setTopic('Company');
  } else if (location.hash === '#productivity' && topic !== 'Productivity') {
    setTopic('Productivity');
  } else if (location.hash === '#technology' && topic !== 'Technology') {
    setTopic('Technology');
  } else if (location.hash === '#miscellaneous' && topic !== 'Miscellaneous') {
    setTopic('Miscellaneous');
  } else if (!location.hash && topic !== 'Latest') {
    setTopic('Latest');
  }

  return (
    <WebsiteWrapper currentPage='blog'>
      {/*style is needed for two column layout*/}
      <section className='blog-main-body'>
        {/*sidebar with filter options*/}
        <BlogSidebar topic={topic} />

        {/*main part with blog posts*/}
        <BlogMain topic={topic} data={data} />
      </section>
    </WebsiteWrapper>
  );
};
export default Blog;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Blog'
      description='Thoughts, inspirations and stories by the people creating Memoriter.'
      keywords='blog'
      type='website'
    />
  );
};

export const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/(blog-posts)/"}}
    ) {
      nodes {
        frontmatter {
          date
          description
          link
          title
          topic
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;