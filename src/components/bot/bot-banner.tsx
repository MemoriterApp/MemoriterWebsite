import React, { FC, useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../../styles/bot/bot-banner.module.scss';

const BotBanner: FC = () => {
  const [squareEffect, setSquareEffect] = useState<string>('0'); //variable for background animation when hovering on the download buttons
  const [squareTransition, setSquareTransition] = useState<string>('none'); //variable for background animation transition (this does not trigger when scrolling)

  const [scrollProgress, setScrollProgress] = useState<number>(0); //value for the scroll progress
  const onScroll = (): void => {
    //getting the scroll data
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

  const [onHover, setonHover] = useState<string>('brightness(1)'); //variable for the hover effect for the add to discord button

  return (
    <section className={styles.bot_banner}>
      {/*background circles*/}
      <div
        className={styles.bot_banner_square_top}
        style={{
          right: `calc(-1 * ${scrollProgress}vh - ${squareEffect}vh`,
          transition: squareTransition,
        }}
      />
      <div
        className={styles.bot_banner_square_bottom}
        style={{
          left: `calc(-1 * ${scrollProgress}vh - ${squareEffect}vh`,
          transition: squareTransition,
        }}
      />
      {/*the size of the circles changes a bit when you scroll down*/}

      <section className={styles.bot_banner_content}>
        <article>
          <h1 className={styles.bot_banner_heading}>Cheat-TP3</h1>
          <p className={styles.bot_banner_text}>Your personal AI tutor at your fingertips!</p>

          {/* add to discord button */}
          <button
            className={styles.bot_banner_button}
            onMouseEnter={() => {
              setonHover('brightness(0.75)');
              setSquareEffect('10');
              setSquareTransition('400ms');
            }}
            onMouseLeave={() => {
              setonHover('brightness(1)');
              setSquareEffect('0');
              setTimeout(() => {
                setSquareTransition('none');
              }, 400);
            }}
          >
            {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation*/}
            Add to Discord
            <div className={styles.bot_banner_button_background} style={{ filter: onHover }} />
          </button>
        </article>

        {/*download icon*/}
        <StaticImage
          className={styles.bot_banner_icon}
          src='../../images/bot/memoriter-icon.png'
          alt='memoriter icon'
        />
      </section>

      {/*transition shape at the bottom*/}
      <div className={styles.bot_banner_transition} />
      <div className={styles.bot_banner_transition_left} />
      <div className={styles.bot_banner_transition_right} />
    </section>
  );
};
export default BotBanner;
