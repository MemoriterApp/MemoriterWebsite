import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import ghcolors from 'react-syntax-highlighter/dist/cjs/styles/prism/ghcolors';

SyntaxHighlighter.registerLanguage('tsx', tsx); //adding programming language for syntax highlighting

interface props { //type definitions of props
    children: string;
};

const BlogPostInlineCode: FC<props> = ({ children }: props) => {

    const inlineCodeStylesDark: React. CSSProperties = { //modifications to pre built syntax highlighter (from a library), used for the dark theme
        display: 'inline',
        fontSize: '1.2rem',
        padding: '4px 4px 4px 4px',
        backgroundColor: 'var(--color-hover)',
        borderRadius: '4px'
    };

    const inlineCodeStylesLight: React. CSSProperties = { //modifications to pre built syntax highlighter (from a library), used for the light theme
        display: 'inline',
        fontSize: '1.325rem',
        padding: '4px 4px 4px 4px',
        backgroundColor: 'var(--color-hover)',
        borderRadius: '4px'
    };

    const theme: string = useSelector((state: any) => state.theme.value); //current theme (dark or light mode)

    return ( //a library for syntax highlighting is used, children refers to the content inside the wrapper
        <> {/*the highlighting theme is dynamic (changes alongside global theme)*/}
            {theme === 'dark' && <SyntaxHighlighter language='tsx' style={dracula} customStyle={inlineCodeStylesDark} wrapLongLines={true}>
                {children}
            </SyntaxHighlighter>}
            {theme === 'light' && <SyntaxHighlighter language='tsx' style={ghcolors} customStyle={inlineCodeStylesLight} wrapLongLines={true}>
                {children}
            </SyntaxHighlighter>}
        </>
    );
}

export default BlogPostInlineCode;