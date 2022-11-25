import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/download/download-mobile.module.scss';
import phone from '../../images/download/phone.png';
import phoneContent from '../../images/download/phone-content.jpg';
import googlePlayButton from '../../images/download/google-play-button.svg';
import appStoreButton from '../../images/download/app-store-button.svg';

const DownloadMobile: FC = () => {
  return (
    <section className={styles.download_mobile}>
      <h1 className={styles.download_mobile_heading_alt}>Mobile App</h1> {/*alternative section heading for small screens*/}
      
      {/*mobile phone image with content*/}
      <div className={styles.download_mobile_phone_image}>
        <img className={styles.download_mobile_phone_image_outside} src={phone} alt='mobile-phone' />
        <img
          className={styles.download_mobile_phone_image_content}
          src={phoneContent}
          alt='mobile-phone-content'
        />
      </div>
      {/*content text*/}
      <AnimationOnScroll
        animateIn={styles.download_mobile_animation_fade_in_down}
        animateOut={styles.download_mobile_animation_fade_out_down}
      >
        <article className={styles.download_mobile_content}>
          <h2 className={styles.download_mobile_heading}>Mobile App</h2>
          <h3 className={styles.download_mobile_content_heading}>
            Experience the efficiency and flexibility of Memoriter &#8212; to go
          </h3> {/*&#8212; is a unicode dash symbol*/}
          <div className={styles.download_mobile_content_text}>
            <p>The Memoriter mobile app brings all web and desktop features to the phone.</p>
            <ul>
              <li>Phone and tablet support</li>
              <li>Data synced to web and desktop app</li>
              <li>Notes, study mode and all other tools you need</li>
            </ul>
          </div>
          {/*play store and app store links*/}
          <div className={styles.download_mobile_buttons}>
            <a href='https://play.google.com/store/' target='_blank' rel='noreferrer'>
              <img src={googlePlayButton} alt='google-play-button' />
            </a>
            <a href='https://www.apple.com/app-store/' target='_blank' rel='noreferrer'>
              <img src={appStoreButton} alt='app-store-button' />
            </a>
          </div>
        </article>
      </AnimationOnScroll>
    </section>
  );
};
export default DownloadMobile;