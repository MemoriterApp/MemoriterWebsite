import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/default-main.module.scss';
import DownloadMainFooter from './download-main-footer';
import placeholderImage from '../../images/download/placeholder.jpg';

const DownloadMain: FC = () => {

  return (
    <section className={styles.default_main}>
      <h1 className={styles.default_main_title}>Download Memoriter</h1>
      <p className={styles.default_main_top_text}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <img className={styles.default_main_top_image} src={placeholderImage} alt='placeholder' />

      <article className={styles.default_main_container}>
        <div className={styles.default_main_container_sub_image}>
          <img className={styles.default_main_image} src={placeholderImage} alt='placeholder' />
        </div>
        <div className={styles.default_main_container_sub}>
          <AnimationOnScroll
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
        </div>
      </article>

      <article className={styles.default_main_container}>
        <div className={styles.default_main_container_sub}>
          <AnimationOnScroll
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
        </div>
        <div className={styles.default_main_container_sub_image}>
          <img className={styles.default_main_image} src={placeholderImage} alt='placeholder' />
        </div>
      </article>
      <DownloadMainFooter/>
    </section>
  );
};
export default DownloadMain;