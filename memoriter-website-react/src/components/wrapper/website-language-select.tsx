import React, { FC } from 'react';

interface props { //type definitions for props
    onAnimation: React.CSSProperties;
    onCloseLanguageSelect: () => void;
};

const WebsiteLanguageSelect: FC<props> = ({ onAnimation, onCloseLanguageSelect }: props) => {

    const animationStyles: React.CSSProperties = onAnimation; //gets styles for animation from the parent component

    return (
        <section className='website-language-select' style={animationStyles}>

            <div className='website-language-select-close' onClick={() => onCloseLanguageSelect()}/>
            <p className='website-language-select-title'>Select Language</p>

            <ul className='website-language-select-languages'>
                <li>English</li>
                <li>Deutsch (Beta)</li>
            </ul>
            
        </section>
    );
}

export default WebsiteLanguageSelect;