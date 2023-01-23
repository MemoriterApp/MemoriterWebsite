import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/default-main.module.scss';
import DownloadMainFooter from './download-main-footer';

const DownloadMain: FC = () => {
  return (
    <section className={styles.default_main}>
      <h1 className={styles.default_main_title}>Download Memoriter</h1>
      <p className={styles.default_main_top_text}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <StaticImage
        className={styles.default_main_top_image}
        src='../../images/download/placeholder.jpg'
        alt='placeholder'
      />

      <article className={styles.default_main_container}>
        <StaticImage
          className={styles.default_main_container_sub_image}
          src='../../images/download/placeholder.jpg'
          alt='placeholder'
        />
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_left}
          animateOut={styles.default_main_animation_fade_out_left}
        >
          {/*AnimationOnScroll starts an animation when it enters the viewport*/}
          <h1 className={styles.default_main_heading}>Placeholder Heading</h1>
          <p className={styles.default_main_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </AnimationOnScroll>
      </article>

      <article className={styles.default_main_container}>
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_right}
          animateOut={styles.default_main_animation_fade_out_right}
        >
          {/*AnimationOnScroll starts an animation when it enters the viewport*/}
          <h1 className={styles.default_main_heading}>Placeholder Heading</h1>
          <p className={styles.default_main_text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_sub_image}
          src='../../images/download/placeholder.jpg'
          alt='placeholder'
        />
      </article>
      <DownloadMainFooter />
    </section>
  );
};
export default DownloadMain;
