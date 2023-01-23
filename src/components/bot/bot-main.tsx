import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/default-main.module.scss';
import BotMainFooter from './bot-main-footer';

const BotMain: FC = () => {
  return (
    <section className={styles.default_main}>
      {/* main parts with texts and images */}
      <article className={styles.default_main_container}>
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_right}
          animateOut={styles.default_main_animation_fade_out_right}
        >
          {/* nimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>Get All your Answers Now!</h1>
          <p className={styles.default_main_text}>
            Save time and effort with CheatTP-3! This Discord bot helps you get quick and accurate
            information on any topic. Simply type '/study' followed by your question, and the AI
            will write a small essay on the topic. Try CheatTP-3 today and experience the power of
            artificial intelligence in your school work.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_sub_image}
          src='../../images/bot/placeholder.jpg'
          alt='placeholder'
        />
      </article>

      <article className={styles.default_main_container}>
        <StaticImage
          className={styles.default_main_container_sub_image}
          src='../../images/bot/placeholder.jpg'
          alt='placeholder'
        />
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_left}
          animateOut={styles.default_main_animation_fade_out_left}
        >
          {/* AnimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>How it Works</h1>
          <p className={styles.default_main_text}>
            Get accurate and reliable answers to your questions with our advanced technology and
            artificial intelligence powered by the OpenAI API and GTP-3. Our AI-generated responses
            are delivered directly to you in Discord chat, ensuring you get the best answers
            possible. As a testament to the capabilities of our AI, all the text on this site was
            written by GTP-3. To learn more about our AI-powered services, check out our FAQ or join
            our Discord server.
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
          <h1 className={styles.default_main_heading}>What is the pricing?</h1>
          <p className={styles.default_main_text}>
            To continue providing high-quality answers powered by AI technology, we must charge a
            small fee for access to CheatTP-3. With our subscription plan, you'll get X free
            questions to try out the service. After that, it's just $0.99 per month to continue
            using GTP-3 and getting reliable answers to your questions. We understand that every
            question costs us money, but with your support, we can continue to offer this valuable
            service at a low price.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_sub_image}
          src='../../images/bot/placeholder.jpg'
          alt='placeholder'
        />
      </article>

      {/* footer with add to discord button */}
      <BotMainFooter />
    </section>
  );
};

export default BotMain;
