import React, { FC, useState } from 'react';
import * as styles from '../../styles/button-footer.module.scss';
import windowsIcon from '../../images/icons/windows-icon.svg';
import appleIcon from '../../images/icons/apple-icon.svg';

const DownloadMainFooter: FC = () => {
  const [onHoverWindows, setOnHoverWindows] = useState<string>('brightness(1)'); //variable for the hover effect for the download for windows button
  const [onHoverMac, setOnHoverMac] = useState<string>('brightness(1)'); //variable for the hover effect for the download for mac button

  return (
    <>
      <article className={styles.button_footer}>
        <p className={styles.button_footer_text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        {/*download button for windows*/}
        <button
          className={`${styles.button_footer_download} ${styles.button_footer_download_windows}`} //two classes
          onMouseEnter={() => setOnHoverWindows('brightness(0.75)')}
          onMouseLeave={() => setOnHoverWindows('brightness(1)')}
        >
          {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
          <div
            className={styles.button_footer_download_background}
            style={{ filter: onHoverWindows }}
          />
          <img
            className={styles.button_footer_download_icon}
            src={windowsIcon}
            alt='windows-icon'
            style={{ height: '36px' }}
          />
          <span className={styles.button_footer_download_text}>Download</span>
          <span className={styles.button_footer_download_text_os}>for Windows</span>
        </button>

        {/*download button for mac*/}
        <button
          className={`${styles.button_footer_download} ${styles.button_footer_download_mac}`} //two classes
          onMouseEnter={() => setOnHoverMac('brightness(0.75)')}
          onMouseLeave={() => setOnHoverMac('brightness(1)')}
        >
          {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
          <div className={styles.button_footer_download_background} style={{ filter: onHoverMac }} />
          <img
            className={styles.button_footer_download_icon}
            src={appleIcon}
            alt='mac-icon'
            style={{ height: '42px' }}
          />
          <span className={styles.button_footer_download_text}>Download</span>
          <span className={styles.button_footer_download_text_os}>for Mac</span>
        </button>
      </article>

      <hr className={styles.button_footer_divider} />
    </>
  );
};
export default DownloadMainFooter;
