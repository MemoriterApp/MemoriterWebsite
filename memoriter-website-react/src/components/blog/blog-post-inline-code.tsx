import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import coldarkDark from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-dark';
import coldarkCold from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-cold';

SyntaxHighlighter.registerLanguage('tsx', tsx);

interface props { //type definitions of props
    children: string;
};

const BlogPostInlineCode: FC<props> = ({ children }: props) => {

    const inlineCodeStyles: React. CSSProperties = { //modifications to pre built syntax highlighter (from a library)
        display: 'inline',
        fontSize: '1.2rem',
        padding: '4px 4px 4px 4px',
        backgroundColor: 'var(--color-hover)',
        borderRadius: '4px',
        fontFamily: 'var(--font-heading)'
    };

    const theme: string = useSelector((state: any) => state.theme.value); //current theme (dark or light mode)

    return ( //a library for syntax highlighting is used, children refers to the content inside the wrapper
        <> {/*the highlighting theme is dynamic (changes alongside global theme)*/}
            {theme === 'dark' && <SyntaxHighlighter language='tsx' style={coldarkDark} customStyle={inlineCodeStyles} wrapLongLines={true}>
                {children}
            </SyntaxHighlighter>}
            {theme === 'light' && <SyntaxHighlighter language='tsx' style={coldarkCold} customStyle={inlineCodeStyles} wrapLongLines={true}>
                {children}
            </SyntaxHighlighter>}
        </>
    );
}

export default BlogPostInlineCode;