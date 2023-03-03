import React, { FC } from 'react';
import { Link } from 'gatsby';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../../styles/default-main.module.scss';
import ProductStories from './product-stories';
import emoji1f4a1 from '../../images/emoji/1f4a1.svg'; // light bulb
import emoji1f9e0 from '../../images/emoji/1f9e0.svg'; // brain
import emoji1f465 from '../../images/emoji/1f465.svg'; // two faces
import emoji1f4ac from '../../images/emoji/1f4ac.svg'; // memo
import emoji1f5c2 from '../../images/emoji/1f5c2.svg'; // index card box
import emoji1f3c1 from '../../images/emoji/1f3c1.svg'; // question and exclamation mark
import emoji1f4dd from '../../images/emoji/1f4dd.svg'; // speech bubble
import emoji1f5c3 from '../../images/emoji/1f5c3.svg'; // card file box
import emoji2049 from '../../images/emoji/2049.svg'; // finish flag
import emoji1f310 from '../../images/emoji/1f310.svg'; // globe with meridians
import emoji1f4bb from '../../images/emoji/1f4bb.svg'; // personal computer
import emoji1f916 from '../../images/emoji/1f916.svg'; // robot

const ProductMain: FC = () => {
  return (
    <section className={styles.default_main}>
      {/* main parts with texts and images */}
      <article className={styles.default_main_container}>
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_right}
          animateOut={styles.default_main_animation_fade_out_right}
        >
          {/* AnimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>Discover Memoriter</h1>
          <p className={styles.default_main_text}>
            Unlock your full potential with Memoriter. Combining the information storage of a
            note-taking tool and the efficiency of flashcard learning, Memoriter is the ultimate
            all-in-one study app to help you ace your exams and reach your goals.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/product/study-laptop.png'
          alt='Studying with book and laptop'
        />
      </article>

      {/* -UNUSED- <h1 className={styles.default_main_overview_heading}>See Memoriter in Action</h1>
      <p className={styles.default_main_top_text}>
        Watch our video about the Memoriter project, tools and features and what you can use the
        application for.
      </p>
      <iframe
        className={styles.default_main_top_video}
        src='https://www.youtube-nocookie.com/embed/WXuK6gekU1Y'
        allowFullScreen
      /> */}

      {/* three small overview items */}
      {/* -UNUSED- <h1 className={styles.default_main_overview_heading}>Explore our Tools and Features</h1>
      <article className={styles.default_main_overview}>
        <div>
          <img className={styles.default_main_overview_image} src={emoji1f4a1} alt='Light bulb' />
          <p className={styles.default_main_overview_text}>
            Accumulate knowledge faster with flashcards
          </p>
          <p className={styles.default_main_overview_link_container}>
            <Link className={styles.default_main_overview_link} to=''>
              Find out more
            </Link>
          </p>
        </div>

        <div>
          <img className={styles.default_main_overview_image} src={emoji1f9e0} alt='Brain' />
          <p className={styles.default_main_overview_text}>
            Remember everything with spaced repetition
          </p>
          <p className={styles.default_main_overview_link_container}>
            <Link className={styles.default_main_overview_link} to=''>
              Discover how
            </Link>
          </p>
        </div>

        <div>
          <img className={styles.default_main_overview_image} src={emoji1f465} alt='Friends' />
          <p className={styles.default_main_overview_text}>
            Study with friends and share your knowledge
          </p>
          <p className={styles.default_main_overview_link_container}>
            <Link className={styles.default_main_overview_link} to=''>
              Connect now
            </Link>
          </p>
        </div>
      </article> */}

      <article className={styles.default_main_container}>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/product/more-effective.png'
          alt='Effective studying'
        />
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_left}
          animateOut={styles.default_main_animation_fade_out_left}
        >
          {/* AnimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>Accumalate Knowledge Faster</h1>
          <p className={styles.default_main_text}>
            Unlock the power of faster learning with flashcards. Studies have shown that
            flashcard-based studying is 150% more effective than passive note-taking. Save time and
            focus on your areas of improvement with our algorithm that detects and targets your weak
            points. Enhance your knowledge retention with flashcards.
          </p>
        </AnimationOnScroll>
      </article>

      <article className={styles.default_main_container}>
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_right}
          animateOut={styles.default_main_animation_fade_out_right}
        >
          {/* AnimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>Study in a Feature Rich Environment</h1>
          <p className={styles.default_main_text}>
            Memoriter provides a wide range of all tools you need to achieve great studying results.
          </p>
          <ul className={styles.default_main_list}>
            <li>
              <img src={emoji1f4dd} alt='Notes' draggable='false' />
              <div>
                <h3>Notes</h3>
                <p>Take notes and store all your knowledge in one place.</p>
              </div>
            </li>
            <li>
              <img src={emoji1f5c3} alt='Flashcard box' draggable='false' />
              <div>
                <h3>Flashcards</h3>
                <p>Organize your notes into small, easy to remember pieces of knowledge.</p>
              </div>
            </li>
            <li>
              <img src={emoji2049} alt='Study' draggable='false' />
              <div>
                <h3>Study Mode</h3>
                <p>
                  Repeat your flashcards using spaced repetition to remember the maximum of your
                  notes and flashcards.
                </p>
              </div>
            </li>
          </ul>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/product/toolbox.png'
          alt='Toolbox'
        />
      </article>

      <article className={styles.default_main_container}>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/product/ai-brain.png'
          alt='Artifical intelligence'
        />
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_left}
          animateOut={styles.default_main_animation_fade_out_left}
        >
          {/* AnimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>Integrated AI Tools</h1>
          <p className={styles.default_main_text}>
            Get access to exclusive AI powered features improving your studying experience.
          </p>
          <ul className={styles.default_main_list}>
            <li>
              <img src={emoji1f4ac} alt='Speach bubble' draggable='false' />
              <div>
                <h3>Memoriter Bot</h3>
                <p>Study faster using a personal AI tutor.</p>
              </div>
            </li>
            <li>
              <img src={emoji1f5c2} alt='Flashcards' draggable='false' />
              <div>
                <h3>Flashcard Generation</h3>
                <p>
                  Get suggestions of flashcards from the content of your note pages, making it
                  easier to break down knowledge into smaller pieces.
                </p>
              </div>
            </li>
            <li>
              <img src={emoji1f3c1} alt='Study' draggable='false' />
              <div>
                <h3>Flashcard Autocompletion</h3>
                <p>Automatically generate answers for your flashcard questions.</p>
              </div>
            </li>
          </ul>
        </AnimationOnScroll>
      </article>

      <article className={styles.default_main_container}>
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_right}
          animateOut={styles.default_main_animation_fade_out_right}
        >
          {/* AnimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>
            Remember Everything with Spaced Repetition
          </h1>
          <p className={styles.default_main_text}>
            Achieve maximum retention with minimal effort through our scientifically-proven spaced
            repetition method. Our app will regularly remind you to review important flashcards,
            allowing you to effortlessly remember thousands of flashcards with ease.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/product/memory-graph.png'
          alt='Figure representing spaced repetition'
        />
      </article>

      {/* three small overview items */}
      {/* -UNUSED- <h1 className={styles.default_main_overview_heading}>Study Anytime and Everywhere</h1>
      <article className={styles.default_main_overview}>
        <div>
          <img
            className={styles.default_main_overview_image}
            src={emoji1f310}
            alt='Global communication'
          />
          <p className={styles.default_main_overview_text}>
            Access Memoriter anytime with our web application
          </p>
          <p className={styles.default_main_overview_link_container}>
            <a className={styles.default_main_overview_link} href='https://app.memoriter.de/signup'>
              Sign up
            </a>
          </p>
        </div>

        <div>
          <img
            className={styles.default_main_overview_image}
            src={emoji1f4bb}
            alt='Personal computer'
          />
          <p className={styles.default_main_overview_text}>
            Desktop and mobile apps for most devices
          </p>
          <p className={styles.default_main_overview_link_container}>
            <Link className={styles.default_main_overview_link} to='/download'>
              Download now
            </Link>
          </p>
        </div>

        <div>
          <img className={styles.default_main_overview_image} src={emoji1f916} alt='Robot' />
          <p className={styles.default_main_overview_text}>
            Study more efficient using the Memoriter Bot
          </p>
          <p className={styles.default_main_overview_link_container}>
            <Link className={styles.default_main_overview_link} to='/bot'>
              Find out more
            </Link>
          </p>
        </div>
      </article> */}

      <article className={styles.default_main_container}>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/product/study-together.png'
          alt='Students working together'
        />
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_left}
          animateOut={styles.default_main_animation_fade_out_left}
        >
          {/* AnimationOnScroll starts an animation when it enters the viewport */}
          <h1 className={styles.default_main_heading}>Study with Friends</h1>
          <p className={styles.default_main_text}>
            Easily share your notes and flashcards with friends or classmates to elevate your
            studying experience. By working together, you'll not only find motivation and support to
            succeed, but you'll also save time because you can start studying earlier.
          </p>
        </AnimationOnScroll>
      </article>

      {/* slider with customer stories */}
      {/* -UNUSED- <ProductStories /> */}

      <article className={styles.default_main_container}>
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_right}
          animateOut={styles.default_main_animation_fade_out_right}
        >
          <h1 className={styles.default_main_heading}>Nonprofit and Open Source</h1>
          <p className={styles.default_main_text}>
            Education should be accessible to all, which is why Memoriter is a non-profit,
            open-source project. Just as free food tastes better, we believe that free software can
            have a greater impact on education. By making our project open-source, anyone can
            contribute to making Memoriter an even better tool for learning. Join us in our mission
            to make education more affordable for all.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/product/github.png'
          alt='Open source repository'
        />
      </article>
    </section>
  );
};
export default ProductMain;
