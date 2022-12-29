import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/newsletter/newsletter-subscribe.module.scss';

const NewsletterSubscribe: FC = () => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the subscribe button

  const [email, setEmail] = useState<string>(''); //entered email address
  const [acceptedPrivacy, setAcceptedPrivacy] = useState<boolean>(false); //value if the privacy policy is accepted

  return (
    <section>
      <form
        className={styles.newsletter_subscribe}
        onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
      >
        <p className={styles.newsletter_subscribe_label}>Enter your Email Address</p>

        <input
          className={styles.newsletter_subscribe_input}
          id='email'
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        />

        {/*button for subscribing to newsletter*/}
        <label>
          <input type='submit' style={{ display: 'none' }} />{' '}
          {/*style hides the default submit button*/}
          <div
            className={styles.newsletter_subscribe_button}
            onMouseEnter={() => setOnHover('brightness(0.75)')}
            onMouseLeave={() => setOnHover('brightness(1)')}
          >
            {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css*/}
            <div className={styles.newsletter_subscribe_button_background} style={{ filter: onHover }} />
            <span className={styles.newsletter_subscribe_button_text}>Subscribe</span>
          </div>
        </label>

        {/*agree to privacy policy checkbox*/}
        <div>
          <p className={styles.newsletter_subscribe_checkbox_label}>
            I have read and understood the{' '}
            <Link
              className={styles.newsletter_subscribe_checkbox_label_link}
              to='/privacy'
              target='_blank'
            >
              privacy policy
            </Link>
            .
          </p>
          <label className={styles.newsletter_subscribe_checkbox}>
            <input type='checkbox' onChange={() => setAcceptedPrivacy(!acceptedPrivacy)} />
            <div className={styles.newsletter_subscribe_checkbox_style} />
          </label>
        </div>
      </form>

      <p className={styles.newsletter_subscribe_verify}>
        We will send you a confirmation email to verify your email address.
      </p>
    </section>
  );
};
export default NewsletterSubscribe;