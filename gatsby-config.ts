import type { GatsbyConfig } from 'gatsby';

// This file contains all plugins for Gatsby and how they relate to each other.

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Memoriter`,
        author: `Memoriter`,
        description: `Work with the effective memorizing tools of Memoriter to quickly achieve successful results. Find out about one of the most innovative study applications.`,
        keywords: `memoriter, learning, study, notes, school, spaced repetition`,
        siteUrl: `https://memoriter.de`,
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    placeholder: 'none',
                },
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon.ico',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown',
                path: './content/markdown/',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './content/images/',
            },
        },
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    placeholder: 'none',
                },
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1400,
                            backgroundColor: 'none',
                            tracedSVG: { color: '#00000000' },
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
    ],
};
export default config;
