import React, { FC, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/download/download-main.module.scss';
import windowsIcon from '../../images/icons/windows-icon.svg';
import appleIcon from '../../images/icons/apple-icon.svg';
import placeholderImage from '../../images/download/placeholder.jpg';

const DownloadMain: FC = () => {

  const [onHoverWindows, setOnHoverWindows] = useState<string>('brightness(1)'); //variable for the hover effect for the download for windows button
  const [onHoverMac, setOnHoverMac] = useState<string>('brightness(1)'); //variable for the hover effect for the download for mac button

  return (
    <section className={styles.download_main}>
      <h1 className={styles.download_main_title}>Download Memoriter</h1>
      <p className={styles.download_main_top_text}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <img className={styles.download_main_top_image} src={placeholderImage} alt='placeholder' />

      <article className={styles.download_main_container} style={{ marginTop: '300px' }}>
        <div className={styles.download_main_container_sub_image}>
          <img className={styles.download_main_image} src={placeholderImage} alt='placeholder' />
        </div>
        <div className={styles.download_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.download_main_animation_fade_in_left}
            animateOut={styles.download_main_animation_fade_out_left}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.download_main_heading}>Placeholder Heading</h1>
            <p className={styles.download_main_text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </AnimationOnScroll>
        </div>
      </article>

      <article className={styles.download_main_container}>
        <div className={styles.download_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.download_main_animation_fade_in_right}
            animateOut={styles.download_main_animation_fade_out_right}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.download_main_heading}>Placeholder Heading</h1>
            <p className={styles.download_main_text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.download_main_container_sub_image}>
          <img className={styles.download_main_image} src={placeholderImage} alt='placeholder' />
        </div>
      </article>

      <article className={styles.download_main_footer}>
        <p className={styles.download_main_footer_text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        {/*download button for windows*/}
        <button
          className={`${styles.download_main_download} ${styles.download_main_download_windows}`} //two classes
          onMouseEnter={() => setOnHoverWindows('brightness(0.75)')}
          onMouseLeave={() => setOnHoverWindows('brightness(1)')}
        >
          {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
          <div className={styles.download_main_download_background} style={{ filter: onHoverWindows }} />
          <img
            className={styles.download_main_download_icon}
            src={windowsIcon}
            alt='windows-icon'
            style={{ height: '36px' }}
          />
          <span className={styles.download_main_download_text}>Download</span>
          <span className={styles.download_main_download_text_os}>for Windows</span>
        </button>

        {/*download button for mac*/}
        <button
          className={`${styles.download_main_download} ${styles.download_main_download_mac}`} //two classes
          onMouseEnter={() => setOnHoverMac('brightness(0.75)')}
          onMouseLeave={() => setOnHoverMac('brightness(1)')}
        >
          {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
          <div className={styles.download_main_download_background} style={{ filter: onHoverMac }} />
          <img
            className={styles.download_main_download_icon}
            src={appleIcon}
            alt='mac-icon'
            style={{ height: '42px' }}
          />
          <span className={styles.download_main_download_text}>Download</span>
          <span className={styles.download_main_download_text_os}>for Mac</span>
        </button>
      </article>

      <hr className={styles.download_main_divider} />
    </section>
  );
};
export default DownloadMain;