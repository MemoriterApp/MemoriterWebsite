import React, { FC, ChangeEvent, useState } from 'react';
import * as styles from '../../styles/newsletter/newsletter-unsubscribe.module.scss';

interface props {
  //type definitions for props
  onAnimation: React.CSSProperties;
  onCloseUnsubscribe: () => void;
}

const NewsletterUnsubscribe: FC<props> = ({ onAnimation, onCloseUnsubscribe }: props) => {
  const animationStyles: React.CSSProperties = onAnimation; //preset for fade in and out animation

  const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the create account button

  const [email, setEmail] = useState<string>(''); //email input value

  const [errorMessage, setErrorMessage] = useState<string>(''); //error message if unsubscribe fails

  const displayError = (errorMessage: string): void => {
    //function for displaying the error popup when unsubscribe fails
    setErrorMessage(errorMessage); //configures message

    setEmail(''); //clears email input field
  };

  const unsubscribe = (event: { preventDefault: () => void }) => {
    //function for sending password reset email
    event.preventDefault(); //removes the default html submit

    displayError('Functionality not implemented yet!');
  };

  return (
    <section className={styles.newsletter_unsubscribe} style={animationStyles}>
      <div className={styles.newsletter_unsubscribe_close} onClick={() => onCloseUnsubscribe()} />
      <p className={styles.newsletter_unsubscribe_title}>Unsubscribe</p>

      {/*popup for password reset errors*/}
      {errorMessage && (
        <div className={styles.newsletter_unsubscribe_error}>
          <span>{errorMessage}</span> {/*error message*/}
          <span
            className={styles.newsletter_unsubscribe_error_close}
            onClick={() => setErrorMessage('')}
          >
            &#215;
          </span>
          {/*close popup button*/}
        </div>
      )}

      <p className={styles.newsletter_unsubscribe_text}>
        Do you want to unsubscribe from our email newsletter?
      </p>

      <form onSubmit={unsubscribe}>
        {/*email input*/}
        <p className={styles.newsletter_unsubscribe_enter_email}>Please enter your email address:</p>
        <input
          className={styles.newsletter_unsubscribe_input}
          id='email'
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        />
        <p className={styles.newsletter_unsubscribe_text}>
          We will send you a confirmation email to the given email address.
        </p>

        {/*send email button*/}
        <label>
          <input type='submit' style={{ display: 'none' }} />
          {/*style hides the default submit button*/}
          <div
            className={styles.newsletter_unsubscribe_button}
            onMouseEnter={() => setOnHover('brightness(0.75)')}
            onMouseLeave={() => setOnHover('brightness(1)')}
          >
            {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation.*/}
            <div className={styles.newsletter_unsubscribe_button_background} style={{ filter: onHover }} />
            <span className={styles.newsletter_unsubscribe_button_text}>Send Unsubscribe Email</span>
          </div>
        </label>
      </form>
    </section>
  );
};
export default NewsletterUnsubscribe;