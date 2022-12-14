import React, { FC, useState } from 'react';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/newsletter/newsletter.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import NewsletterSubscribe from '../components/newsletter/newsletter-subscribe';
import NewsletterUnsubscribe from '../components/newsletter/newsletter-unsubscribe';
import Backdrop from '../components/backdrop';

const Newsletter: FC = () => {
  const [unsubscribe, setUnsubscribe] = useState<boolean>(false); // opens or closes unsubscribe modal

  const [unsubscribeAnimation, setUnsubscribeAnimation] = useState<React.CSSProperties>({
    // animation when opening unsubscribe modal
    transform: 'translate(-50%, calc(-50% - 16px))',
    opacity: '0',
  }); // styles used for the unsubscribe fade in and out animation
  const [backdropAnimation, setBackdropAnimation] = useState<string>('0'); // backdrop opacity (used for fade in and out animation)

  const openUnsubscribe = (): void => {
    // function for opening the unsubscribe modal
    document.body.style.overflow = 'hidden'; // disables page scrolling
    setUnsubscribe(true);
    setTimeout(() => {
      setBackdropAnimation('1');
      setUnsubscribeAnimation({
        transform: 'translate(-50%, -50%)',
        opacity: '1',
      });
    }, 0);
    // setBackdropAnimation triggers a transition in the backdrop component creating the fade in effect, does not work without timeout
  };

  const closeUnsubscribe = (): void => {
    // function for closing the password reset modal
    document.body.style.overflow = 'auto'; // re-enables page scrolling
    setTimeout(() => {
      setUnsubscribe(false);
    }, 800); // timeout is needed for finishing the fade effect before closing everything
    setTimeout(() => {
      setBackdropAnimation('0');
      setUnsubscribeAnimation({
        transform: 'translate(-50%, calc(-50% - 16px))',
        opacity: '0',
      });
    }, 0);
    // setBackdropAnimation triggers a transition in the backdrop component creating the fade out effect, does not work without timeout
  };

  return (
    <WebsiteLayout currentPage=''>
      <section className={styles.newsletter_main}>
        <h1 className={styles.newsletter_main_title}>Sign Up to our Email Newsletter!</h1>

        <NewsletterSubscribe />

        <p className={styles.newsletter_main_description}>
          Subscribe and recieve new and exclusive news about the Memoriter project.
        </p>

        {/*button to unsubscribe from the newsletter*/}
        <p className={styles.newsletter_main_unsubscribe}>
          You do not want to recieve our email newsletter anymore?&nbsp;
          <span
            className={styles.newsletter_main_unsubscribe_link}
            onClick={openUnsubscribe}
          >Click here</span> to request a removal from our mailing list.
        </p>
      </section>

      {unsubscribe && (
        <>
          <NewsletterUnsubscribe
            onAnimation={unsubscribeAnimation}
            onCloseUnsubscribe={closeUnsubscribe}
          />
          <Backdrop onFade={backdropAnimation} onClick={closeUnsubscribe} />
        </>
      )}
    </WebsiteLayout>
  );
};
export default Newsletter;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Newsletter'
      description='Sign Up to our Email Newsletter!'
      keywords='newsletter, news, email, subscribe'
      type='website'
    />
  );
};