import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import ghcolors from 'react-syntax-highlighter/dist/cjs/styles/prism/ghcolors';

SyntaxHighlighter.registerLanguage('tsx', tsx); //adding programming language for syntax highlighting

interface props { //type definitions of props
    children: string[];
};

const BlogPostCodeBlock: FC<props> = ({ children }: props) => {

    const codeBlockStylesDark: React.CSSProperties = { //modifications to pre built syntax highlighter (from a library), used for the dark theme
        fontSize: '1.2rem',
        lineHeight: '2rem',
        padding: '12px 16px 12px 16px',
        marginBottom: '20px',
        backgroundColor: 'var(--color-hover)',
        borderRadius: '10px'
    };

    const codeBlockStylesLight: React.CSSProperties = { //modifications to pre built syntax highlighter (from a library), used for the light theme
        fontSize: '1.325rem',
        lineHeight: '2rem',
        padding: '12px 16px 12px 16px',
        marginBottom: '20px',
        backgroundColor: 'var(--color-hover)',
        borderRadius: '10px'
    };

    const theme: string = useSelector((state: any) => state.theme.value); //current theme (dark or light mode)

    return ( //a library for syntax highlighting is used
        <>
            {theme === 'dark' && <SyntaxHighlighter language='tsx' style={dracula} customStyle={codeBlockStylesDark} wrapLongLines={true}>
                {children.join('\n')} {/*children refers to the content inside the wrapper, .join('\n) creates line breaks, the content needs to be an array*/}
            </SyntaxHighlighter>}
            {theme === 'light' && <SyntaxHighlighter language='tsx' style={ghcolors} customStyle={codeBlockStylesLight} wrapLongLines={true}>
                {children.join('\n')} {/*children refers to the content inside the wrapper, .join('\n) creates line breaks, the content needs to be an array*/}
            </SyntaxHighlighter>}
        </>
    );
}

export default BlogPostCodeBlock;