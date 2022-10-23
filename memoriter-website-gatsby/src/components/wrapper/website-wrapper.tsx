//This wrapper component simplifies many pages by combining all functions and components used on any of these pages

import React, { FC, useState } from 'react';
//import WebsiteHead from './website-head';
import WebsiteHeader from './website-header';
import WebsiteFooter from './website-footer';
import WebsiteLanguageSelect from './website-language-select';
import CookieBanner from './cookie-banner/cookie-banner';
import CookieSettings from './cookie-banner/cookie-settings';
import WindowSizeAlert from './window-size-alert';
import Backdrop from '../backdrop';

interface props { //type definitions for props
    children: React.ReactNode;
    title: string;
    description: string;
    currentPage: string;
};

const WebsiteWrapper: FC<props> = ({ children, title, description, currentPage }: props) => {

    const [languageSelect, setLanguageSelect] = useState<boolean>(false); //opens or closes language select modal

    const [cookieSettings, setCookieSettings] = useState<boolean>(false); //opens or closes cookie settings

    const [modalAnimation, setModalAnimation] = useState<React.CSSProperties>({ //animation when opening cookie settings modal
        transform: 'translate(-50%, calc(-50% - 16px))',
        opacity: '0',
    }); //styles used for the cookie settings fade in and out animation
    const [backdropAnimation, setBackdropAnimation] = useState<string>('0'); //backdrop opacity (used for fade in and out animation)
    
    const openLanguageSelect = (): void => { //function for opening the language select modal
        document.body.style.overflow = 'hidden'; //disables page scrolling
        setLanguageSelect(true);
        setTimeout(() => {
            setBackdropAnimation('1');
            setModalAnimation({
                transform: 'translate(-50%, -50%)',
                opacity: '1'
            });
        }, 0);
        //setBackdropAnimation triggers a transition in the backdrop component creating the fade in effect, does not work without timeout
    };

    const closeLanguageSelect = (): void => { //function for closing the language select modal
        document.body.style.overflow = 'auto'; //re-enables page scrolling
        setTimeout(() => {setLanguageSelect(false);}, 800); //timeout is needed for finishing the fade effect before closing everything
        setTimeout(() => {
            setBackdropAnimation('0');
            setModalAnimation({
                transform: 'translate(-50%, calc(-50% - 16px))',
                opacity: '0'
            });
        }, 0);
        //setBackdropAnimation triggers a transition in the backdrop component creating the fade out effect, does not work without timeout
    };

    const openCookieSettings = (): void => { //function for opening the cookie settings
        document.body.style.overflow = 'hidden'; //disables page scrolling
        setCookieSettings(true);
        setTimeout(() => {
            setBackdropAnimation('1');
            setModalAnimation({
                transform: 'translate(-50%, -50%)',
                opacity: '1'
            });
        }, 0);
        //setBackdropAnimation triggers a transition in the backdrop component creating the fade in effect, does not work without timeout
    };

    const closeCookieSettings = (): void => { //function for closing the cookie settings
        document.body.style.overflow = 'auto'; //re-enables page scrolling
        setTimeout(() => {setCookieSettings(false);}, 800); //timeout is needed for finishing the fade effect before closing everything
        setTimeout(() => {
            setBackdropAnimation('0');
            setModalAnimation({
                transform: 'translate(-50%, calc(-50% - 16px))',
                opacity: '0'
            });
        }, 0);
        //setBackdropAnimation triggers a transition in the backdrop component creating the fade out effect, does not work without timeout
    };

    return (
        <>

            {/*head*/}
            {/*<WebsiteHead title={title} description={description}/>*/}
            {/*title property is for displaying a custom page title, description is for a custom meta description*/}

            {/*header*/}
            <WebsiteHeader currentPage={currentPage} onOpenLanguageSelect={openLanguageSelect}/>
            {/*The currentPage property defines the highlighted quicklink ath the navigation bar.*/}

            {/*main part, children refers to the content inside the wrapper (the main part content)*/}
            <main style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>{children}</main>
            {/*style is needed for aligning the items correctly, children are all other components inside the wrapper*/}

            {/*footer*/}
            <WebsiteFooter onOpenLanguageSelect={openLanguageSelect} onOpenCookieSettings={openCookieSettings}/>

            {/*language select modal*/}
            {languageSelect && <>
                <WebsiteLanguageSelect onAnimation={modalAnimation} onCloseLanguageSelect={closeLanguageSelect}/>
                <Backdrop onFade={backdropAnimation} onClick={closeLanguageSelect}/>
            </>}

            {/*cookie banner*/}
            <CookieBanner onOpenCookieSettings={openCookieSettings}/>

            {/*cookie settings modal*/}
            {cookieSettings && <>
                <CookieSettings onAnimation={modalAnimation} onCloseCookieSettings={closeCookieSettings}/>
                <Backdrop onFade={backdropAnimation} onClick={closeCookieSettings}/>
            </>}

            {/*alert for too small screens*/}
            <WindowSizeAlert/>
            
        </>
    );
};

export default WebsiteWrapper;