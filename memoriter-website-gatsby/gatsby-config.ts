import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Memoriter`,
    author: `Memoriter`,
    description: `Discover Memoriter and find out how it will give you a better experience in learning something in school or just to take notes in a different creative way not seen anywhere else on the web.`,
    keywords: `memoriter, learning, study, notes, school, spaced repetition`,
    siteUrl: `https://www.memoriter.de`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, "gatsby-plugin-sass"]
};

export default config;
