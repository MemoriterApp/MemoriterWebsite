import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'gatsby';
import '../../styles/newsletter/newsletter-subscribe.css';

const NewsletterSubscribe: FC = () => {

    const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the subscribe button

    const [email, setEmail] = useState<string>(''); //entered email address
    const [acceptedPrivacy, setAcceptedPrivacy] = useState<boolean>(false); //value if the privacy policy is accepted

    return (
        <section>
            <form className='newsletter-subscribe' onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}>
                <p className='newsletter-subscribe-label'>Enter your Email Address</p>

                <input className='newsletter-subscribe-input' id='email' type='email' placeholder='Email Address'
                    value={email} onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>

                {/*button for subscribing to newsletter*/}
                <label>
                    <input type='submit' style={{display: 'none'}}/> {/*style hides the default submit button*/}
                    <div className='newsletter-subscribe-button'
                        onMouseEnter={() => setOnHover('brightness(0.75)')} onMouseLeave={() => setOnHover('brightness(1)')}>
                        {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css*/}
                        <div className='newsletter-subscribe-button-background' style={{filter: onHover}}/>
                        <span className='newsletter-subscribe-button-text'>Subscribe</span>
                    </div>
                </label>

                {/*agree to privacy policy checkbox*/}
                <div>
                    <p className='newsletter-subscribe-checkbox-label'>
                        I have read and understood the <Link
                            className='newsletter-subscribe-checkbox-label-link' to='/privacy' target='_blank'
                        >privacy policy</Link>.
                    </p>
                    <label className='newsletter-subscribe-checkbox'>
                        <input type='checkbox' onChange={() => setAcceptedPrivacy(!acceptedPrivacy)}/>
                        <div className='newsletter-subscribe-checkbox-style'/>
                    </label>
                </div>
            </form>

            <p className='newsletter-subscribe-verify'>
                We will send you a confirmation email to verify your email address.
            </p>
        </section>
    );
}

export default NewsletterSubscribe;