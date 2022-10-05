import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import coldarkDark from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-dark';
import coldarkCold from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-cold';

SyntaxHighlighter.registerLanguage('tsx', tsx);

interface props { //type definitions of props
    children: string[];
};

const BlogPostCodeBlock: FC<props> = ({ children }: props) => {

    const codeBlockStyles: React. CSSProperties = { //modifications to pre built syntax highlighter (from a library)
        fontSize: '1.2rem',
        lineHeight: '2rem',
        padding: '12px 16px 12px 16px',
        backgroundColor: 'var(--color-hover)',
        borderRadius: '10px'
    };

    const theme: string = useSelector((state: any) => state.theme.value); //current theme (dark or light mode)

    return ( //a library for syntax highlighting is used
        <>
            {theme === 'dark' && <SyntaxHighlighter language='tsx' style={coldarkDark} customStyle={codeBlockStyles} wrapLongLines={true}>
                {children.join('\n')} {/*children refers to the content inside the wrapper, .join('\n) creates line breaks, the content needs to be an array*/}
            </SyntaxHighlighter>}
            {theme === 'light' && <SyntaxHighlighter language='tsx' style={coldarkCold} customStyle={codeBlockStyles} wrapLongLines={true}>
                {children.join('\n')} {/*children refers to the content inside the wrapper, .join('\n) creates line breaks, the content needs to be an array*/}
            </SyntaxHighlighter>}
        </>
    );
}

export default BlogPostCodeBlock;