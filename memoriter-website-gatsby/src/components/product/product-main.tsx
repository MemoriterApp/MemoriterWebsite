import React, { FC } from 'react';
import { Link } from 'gatsby';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../../styles/product/product-main.module.scss';
import emoji1f4a1 from '../../images/emoji/1f4a1.svg';
import emoji1f9e0 from '../../images/emoji/1f9e0.svg';
import emoji1f465 from '../../images/emoji/1f465.svg';
import emoji1f310 from '../../images/emoji/1f310.svg';
import emoji1f4bb from '../../images/emoji/1f4bb.svg';
import emoji1f916 from '../../images/emoji/1f916.svg';

const ProductMain: FC = () => {
  return (
    <section className={styles.product_main}>
      {/*main parts with texts and images*/}
      <article className={styles.product_main_container}>
        <div className={styles.product_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.product_main_animation_fade_in_right}
            animateOut={styles.product_main_animation_fade_out_right}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.product_main_heading}>Placeholder Heading</h1>
            <p className={styles.product_main_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis possimus nemo
              tenetur blanditiis, vitae non rem sint optio, molestias accusamus iure expedita sequi.
              Hic ipsum cumque rerum laborum recusandae?
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

      {/*three small overview items*/}
      <h1 className={styles.product_main_overview_heading}>Placeholder Heading</h1>
      <article className={styles.product_main_overview}>

        <div>
          <img className={styles.product_main_overview_image} src={emoji1f4a1} alt='Light bulb' />
          <p className={styles.product_main_overview_text}>
            Accumulate knowledge faster with flashcards
          </p>
          <p className={styles.product_main_overview_link_container}>
            <Link className={styles.product_main_overview_link} to=''>
              Find out more
            </Link>
          </p>
        </div>

        <div>
          <img className={styles.product_main_overview_image} src={emoji1f9e0} alt='Brain' />
          <p className={styles.product_main_overview_text}>
            Remember everything with spaced repetition
          </p>
          <p className={styles.product_main_overview_link_container}>
            <Link className={styles.product_main_overview_link} to=''>
              Discover how
            </Link>
          </p>
        </div>

        <div>
          <img className={styles.product_main_overview_image} src={emoji1f465} alt='Friends' />
          <p className={styles.product_main_overview_text}>
            Study with friends and share your knowledge
          </p>
          <p className={styles.product_main_overview_link_container}>
            <Link className={styles.product_main_overview_link} to=''>
              Connect now
            </Link>
          </p>
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
            <h1 className={styles.product_main_heading}>Accumalate knowledge faster</h1>
            <p className={styles.product_main_text}>
              Flashcards have proven to be <strong>150% more effective</strong> if you want to
              accumalte knowledge faster. Instead of memorizing your notes passively, save time
              using flashcards. When studying with flashcards the algorithm will notice your
              mistakes and help you study more where your knowledge is lacking!
            </p>
          </AnimationOnScroll>
        </div>
      </article>

      <article className={styles.product_main_container}>
        <div className={styles.product_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.product_main_animation_fade_in_left}
            animateOut={styles.product_main_animation_fade_out_left}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.product_main_heading}>Study with friends</h1>
            <p className={styles.product_main_text}>
              Study together and you will always find the motivation to suceed. You can help each
              other out and share your notes, techniques and structure. That way you will save time
              and hard work.
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

      {/*three small overview items*/}
      <h1 className={styles.product_main_overview_heading}>Apps and Tools</h1>
      <article className={styles.product_main_overview}>

        <div>
          <img className={styles.product_main_overview_image} src={emoji1f310} alt='Global communication' />
          <p className={styles.product_main_overview_text}>
            Access Memoriter anytime with our web application
          </p>
          <p className={styles.product_main_overview_link_container}>
            <a className={styles.product_main_overview_link} href='https://app.memoriter.de/signup'>
              Sign up
            </a>
          </p>
        </div>

        <div>
          <img className={styles.product_main_overview_image} src={emoji1f4bb} alt='Personal computer' />
          <p className={styles.product_main_overview_text}>
            Desktop and mobile apps for most devices
          </p>
          <p className={styles.product_main_overview_link_container}>
            <Link className={styles.product_main_overview_link} to='/download'>
              Download now
            </Link>
          </p>
        </div>

        <div>
          <img className={styles.product_main_overview_image} src={emoji1f916} alt='Robot' />
          <p className={styles.product_main_overview_text}>
            Study more efficient using the Memoriter Bot
          </p>
          <p className={styles.product_main_overview_link_container}>
            <Link className={styles.product_main_overview_link} to=''>
              Find out more
            </Link>
          </p>
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
            animateIn={styles.product_main_animation_fade_in_right}
            animateOut={styles.product_main_animation_fade_out_right}
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className={styles.product_main_heading}>
              Remember everything with spaced repetition
            </h1>
            <p className={styles.product_main_text}>
              By using the scientic method of spaced repetition, we will remind you to regularly
              review important flashcards that way you can remember thousands of flashcards with
              minimal effort.
            </p>
          </AnimationOnScroll>
        </div>
      </article>

      <article className={styles.product_main_container}>
        <div className={styles.product_main_container_sub}>
          <AnimationOnScroll
            animateIn={styles.product_main_animation_fade_in_left}
            animateOut={styles.product_main_animation_fade_out_left}
          >
            <h1 className={styles.product_main_heading}>It's only free.99 </h1>
            <p className={styles.product_main_text}>
              Food is always beetter when it's free, same goes for software. We strictly believe in
              the idea that education and the things around it should be made affordable. That's why
              we decided to make Memoriter free.99.
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
    </section>
  );
};
export default ProductMain;