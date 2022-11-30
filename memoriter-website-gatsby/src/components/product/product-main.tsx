import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../../styles/product/product-main.module.scss';
import lightBulbIconGradient from '../../images/product/light-bulb.svg';
import handShakeIcon from '../../images/product/handshake.svg';
import remember from '../../images/product/remember.svg';
import free from '../../images/product/free.svg';

const ProductMain: FC = () => {
  return (
    <section className={styles.product_main}>
      {/*three small overview items*/}
      <section className={styles.product_main_overview}>
        <article>
          <img
            className={styles.product_main_overview_image}
            src={lightBulbIconGradient}
            alt='Light bulb'
          />
          <p className={styles.product_main_overview_text}>
            Accumulate knowledge faster with flashcards
          </p>
        </article>

        <article>
          <img className={styles.product_main_overview_image} src={handShakeIcon} alt='placeholder' />
          <p className={styles.product_main_overview_text}>
            Study with friends and share your knowledge
          </p>
        </article>

        <article>
          <img className={styles.product_main_overview_image} src={remember} alt='placeholder' />
          <p className={styles.product_main_overview_text}>
            Remeber everything with spaced repetition
          </p>
        </article>

        <article>
          <img className={styles.product_main_overview_image} src={free} alt='placeholder' />
          <p className={styles.product_main_overview_text}>
            The best part: It's only free.99
          </p>
        </article>
      </section>

      {/*main parts with texts and images*/}
      <article className={styles.product_main_container}>
        <div className={styles.product_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.product_main_animation_fade_in_right}
            animateOut={styles.product_main_animation_fade_out_right}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.product_main_heading}>Accumalate knowledge faster</h1>
            <p className={styles.product_main_text}>
            Flashcards have proven to be <strong >150% more effective</strong> if you want to accumalte knowledge faster. 
            Instead of memorizing your notes passively, save time using flashcards. When studying with flashcards 
            the algorithm will notice your mistakes and help you study more where your knowledge is lacking!
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.product_main_container_sub_image}>
          <StaticImage
            className={styles.product_main_image}
            src='../../images/product/placeholder.jpg'
            alt='placeholder'
          />
        </div>
      </article>

      <article className={styles.product_main_container}>
        <div className={styles.product_main_container_sub_image}>
          <StaticImage
            className={styles.product_main_image}
            src='../../images/product/placeholder.jpg'
            alt='placeholder'
          />
        </div>
        <div className={styles.product_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.product_main_animation_fade_in_left}
            animateOut={styles.product_main_animation_fade_out_left}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.product_main_heading}>Study with friends</h1>
            <p className={styles.product_main_text}>
            Study together and you will always find the motivation to suceed. 
            You can help each other out and share your notes, techniques and structure. 
            That way you will save time and hard work.
            </p>
          </AnimationOnScroll>
        </div>
      </article>

      <article className={styles.product_main_container}>
        <div className={styles.product_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.product_main_animation_fade_in_right}
            animateOut={styles.product_main_animation_fade_out_right}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.product_main_heading}>Remember everything with spaced repetition</h1>
            <p className={styles.product_main_text}>
              By using the scientic method of spaced repetition, we will remind you to regularly review important flashcards 
              that way you can remember thousands of flashcards with minimal effort.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.product_main_container_sub_image}>
          <StaticImage
            className={styles.product_main_image}
            src='../../images/product/placeholder.jpg'
            alt='placeholder'
          />
        </div>
      </article>

      <article className={styles.product_main_container}>
        <div className={styles.product_main_container_sub_image}>
          <StaticImage
            className={styles.product_main_image}
            src='../../images/product/placeholder.jpg'
            alt='placeholder'
          />
        </div>
        <div className={styles.product_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.product_main_animation_fade_in_left}
            animateOut={styles.product_main_animation_fade_out_left}
          >
            <h1 className={styles.product_main_heading}>It's only free.99 </h1>
            <p className={styles.product_main_text}>
              Food is always beetter when it's free, same goes for software. We strictly believe in the idea that education
              and the things around it should be made affordable. That's why we decided to make Memoriter free.99.
            </p>
          </AnimationOnScroll>
        </div>
      </article>
    </section>
  );
};
export default ProductMain;