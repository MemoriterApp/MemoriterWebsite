import React, { FC, useEffect, useState } from 'react';
import * as styles from '../../styles/download/download-banner.module.scss';
import windowsIcon from '../../images/icons/windows-icon.svg';
import appleIcon from '../../images/icons/apple-icon.svg';
import downloadIcon from '../../images/download/download.svg';
import downloadIconBackground from '../../images/download/download-background.svg';

const DownloadBanner: FC = () => {
  const [squareEffect, setSquareEffect] = useState<string>('0'); //variable for background animation when hovering on the download buttons
  const [squareTransition, setSquareTransition] = useState<string>('none'); //variable for background animation transition (this does not trigger when scrolling)

  const [scrollProgress, setScrollProgress] = useState<number>(0); //value for the scroll progress
  const onScroll = (): void => { //getting the scroll data
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled: number = (scroll / height) * 100;

    setScrollProgress(scrolled);
  };

  // the useEffect is important for getting the value if it is scrolling
  useEffect((): any => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [onHoverWindows, setOnHoverWindows] = useState<string>('brightness(1)'); //variable for the hover effect for the download for windows button
  const [onHoverMac, setOnHoverMac] = useState<string>('brightness(1)'); //variable for the hover effect for the download for mac button

  return (
    <section className={styles.download_banner}>
      {/*background circles*/}
      <div
        className={styles.download_banner_square_top}
        style={{
          right: `calc(-1 * ${scrollProgress}vh - ${squareEffect}vh`,
          transition: squareTransition,
        }}
      />
      <div
        className={styles.download_banner_square_bottom}
        style={{
          left: `calc(-1 * ${scrollProgress}vh - ${squareEffect}vh`,
          transition: squareTransition,
        }}
      />
      {/*the size of the circles changes a bit when you scroll down*/}

      <section className={styles.download_banner_content}>
        <article>
          <p className={styles.download_banner_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>

          {/*download button for windows*/}
          <button
            className={`${styles.download_banner_download} ${styles.download_banner_download_windows}`} //two classes
            onMouseEnter={() => {
              setOnHoverWindows('brightness(0.75)');
              setSquareEffect('10');
              setSquareTransition('400ms');
            }}
            onMouseLeave={() => {
              setOnHoverWindows('brightness(1)');
              setSquareEffect('0');
              setTimeout(() => {
                setSquareTransition('none');
              }, 400);
            }}
          >
            {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
            <div
              className={styles.download_banner_download_background}
              style={{ filter: onHoverWindows }}
            />
            <img
              className={styles.download_banner_download_icon}
              src={windowsIcon}
              alt='windows-icon'
              style={{ height: '36px' }}
            />
            <span className={styles.download_banner_download_text}>Download</span>
            <span className={styles.download_banner_download_text_os}>for Windows</span>
          </button>

          {/*download button for mac*/}
          <button
            className={`${styles.download_banner_download} ${styles.download_banner_download_mac}`} //two classes
            onMouseEnter={() => {
              setOnHoverMac('brightness(0.75)');
              setSquareEffect('10');
              setSquareTransition('400ms');
            }}
            onMouseLeave={() => {
              setOnHoverMac('brightness(1)');
              setSquareEffect('0');
              setTimeout(() => {
                setSquareTransition('none');
              }, 400);
            }}
          >
            {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
            <div className={styles.download_banner_download_background} style={{ filter: onHoverMac }} />
            <img
              className={styles.download_banner_download_icon}
              src={appleIcon}
              alt='mac-icon'
              style={{ height: '42px' }}
            />
            <span className={styles.download_banner_download_text}>Download</span>
            <span className={styles.download_banner_download_text_os}>for Mac</span>
          </button>
        </article>

        {/*download icon*/}
        <div className={styles.download_banner_icon}>
          <img
            className={styles.download_banner_icon_background}
            src={downloadIconBackground}
            alt='download-icon-background'
          />
          <img className={styles.download_banner_icon_symbol} src={downloadIcon} alt='download-icon' />
        </div>
      </section>

      {/*transition shape at the bottom*/}
      <div className={styles.download_banner_transition} />
      <div className={styles.download_banner_transition_left} />
      <div className={styles.download_banner_transition_right} />
    </section>
  );
};
export default DownloadBanner;