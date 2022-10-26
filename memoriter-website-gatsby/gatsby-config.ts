import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Memoriter`,
    author: `Memoriter`,
    description: `Discover Memoriter and find out how it will give you a better experience in learning something in school or just to take notes in a different creative way not seen anywhere else on the web.`,
    keywords: `memoriter, learning, study, notes, school, spaced repetition`,
    siteUrl: `https://www.memoriter.de`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: './src/markdown/blog-posts'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'releases',
        path: './src/markdown/releases'
      },
    }
  ]
};

export default config;
