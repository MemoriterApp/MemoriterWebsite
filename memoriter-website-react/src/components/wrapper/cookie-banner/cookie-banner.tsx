import React, { FC, useState } from 'react';
import cookies from '../../../utils/cookies';

interface props { //type definitions for props
    onOpenCookieSettings: () => void;
};

const CookieBanner: FC<props> = ({ onOpenCookieSettings }: props) => {

    const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the accept button
    
    const accepted: string = cookies.getCookie('accepted-cookies'); //used for if the banner is first dieplayed or not

    const [display, setDisplay] = useState<string>('-180px'); //variable for showing the cookie banner and the move animation
    if (accepted) { //if else is for only displaying it before accepting cookies
        if (display === '0') {
            setDisplay('-180px'); //if accepted, the banner is hidden
        }
    } else {
        setTimeout(() => {setDisplay('0'); }, 600); //executing move animation
    };

    const acceptCookies = (): void => { //item is set in local storage for cookie banner not showng again if accepted
        //variable stored as a cookie for saving the accepted cookie types for later
        const acceptedAllCookies: {necessary: boolean, functional: boolean, analytics: boolean, advertising: boolean} = {
            necessary: true,
            functional: true,
            analytics: true,
            advertising: true
        };
        
        const expires: Date = new Date(); //cookie expiration date
        expires.setTime(+ expires + (365 * 43200000)); //sets expiration date (in six months)
        cookies.setCookie('accepted-cookies', JSON.stringify(acceptedAllCookies), expires) //sets cookie
    };

    return (
        <section className='cookie-banner' style={{bottom: display}}>
            {/*style is for if the banner is shown or not*/}

            {/*cookie banner text*/}
            <p className='cookie-banner-text'>This website uses cookies for making the site work and to enhance your experience.</p>

            {/*accept and more information buttons*/}
            <div className='cookie-banner-more-information' onClick={() => onOpenCookieSettings()}>More Information</div>
            <div className='cookie-banner-accept'
                onMouseEnter={() => setOnHover('brightness(0.75)')}
                onMouseLeave={() => setOnHover('brightness(1)')}
                onClick={acceptCookies}>
                {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css, the onClick accepts all cookies and closes the banner*/}
                <div className='cookie-banner-accept-background' style={{filter: onHover}}/>
                <span className='cookie-banner-accept-text'>Accept</span>
            </div>

        </section>
    );
}

export default CookieBanner;
