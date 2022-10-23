import React, { useState } from 'react'
import { Link, HeadFC } from 'gatsby';
import '../styles/404.css';
import memoriterLogo from '../images/memoriter-logo.svg';

const PageNotFound = () => {

    const PageNotFoundBottomSpace: React.CSSProperties = { //styles for extra space at the bottom on page scroll
        position: 'absolute',
        left: '0',
        top: '42px',
        width: '100%',
        height: '40px'
    }

    const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the get started button

    return (
        <>
           

            {/*container with content*/}
            <main className='page-not-found'>

                <section className='page-not-found-question-mark'>?</section> {/*large question mark next to the text*/}

                <section> {/*extra div is important for layout*/}

                    {/*logo above the content*/}
                    <img className='page-not-found-logo' src={memoriterLogo} alt='memoriter-logo'/>

                    {/*text*/}
                    <h1 className='page-not-found-heading'>Page Not Found!</h1>
                    <p className='page-not-found-text'>This URL does not match any page. Please use another link or go back to an existing page.</p>

                    {/*button redirects to product page*/}
                    <Link
                        className='page-not-found-button' to='/'
                        onMouseEnter={() => setOnHover('brightness(0.75)')} onMouseLeave={() => setOnHover('brightness(1)')}>
                        {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css*/}
                        <div className='page-not-found-button-background' style={{filter: onHover}}/>
                        <span className='page-not-found-button-text'>Return to Website!</span>
                        <div style={PageNotFoundBottomSpace}/> {/*space at the bottom on page scroll*/}
                    </Link>

                </section>

           </main>
        
        </>
    );
}

export default PageNotFound;

export const Head: HeadFC = () => <title>Not found</title>