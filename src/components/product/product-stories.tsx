import React, { FC, useState } from 'react';
import * as styles from '../../styles/product/product-stories.module.scss';

const ProductStories: FC = () => {
  // array with all story data
  const stories: { number: number; author: string; quote: string }[] = [
    {
      number: 0,
      author: 'Harry',
      quote:
        'I used to struggle a lot with latin in school. Every week our Teacher would give us a huge list of words to study. I would spend hours memorizing them, but when using memoriter I was able to learn them in a fraction of the time, thanks to the different learning methods.',
    },
    {
      number: 1,
      author: 'Hermoine',
      quote:
        'When studying in med. school it is imporant to remember everything over a longer period of time. Memoriter helped me to learn the most important things for my exams. I was able to learn everything in a short amount of time and to remember it for a long time by using spaced repetition.',
    },
    {
      number: 2,
      author: 'Ron',
      quote:
        'I often times studied in groups. Memoriter helped us to study together and to share our knowledge. We were able to create our own flashcards and to study them together. This way we were able to learn everything faster and to remember it for a longer time.',
    },
  ];

  const [number, setNumber] = useState<number>(Math.floor(Math.random() * stories.length)); // number of the currently shown story (position in the array), is random on page render

  const [textAreaAnimation, setTextAreaAnimation] = useState<string>('1'); // value used for the animation on next or previous story
  const [dotAnimation, setDotAnimation] = useState<string>('var(--color-highlight-gradient-green)');

  // function for switching to previous story
  const previousStory = (): void => {
    showAnimation(); // display animated transition
    setTimeout(() => {
      // timeout needed for correctly executed animation
      if (number === 0) {
        // if the first story is shown it switches to the last one
        setNumber(stories.length - 1);
      } else {
        // else it switches to the previous one
        setNumber(number - 1);
      }
    }, 400);
  };

  // function for switching to next story
  const nextStory = (): void => {
    showAnimation(); // display animated transition
    setTimeout(() => {
      // timeout needed for correctly executed animation
      if (number === stories.length - 1) {
        // if the first story is shown it switches to the last one
        setNumber(0);
      } else {
        // else it switches to the previous one
        setNumber(number + 1);
      }
    }, 400);
  };

  // function for switching to the story of the clicked dot
  const chosenStory = (story: { number: number }): void => {
    showAnimation(); // display animated transition
    setTimeout(() => {
      setNumber(story.number);
    }, 400); // timeout needed for correctly executed animation
  };

  // animated transition when the story changes
  const showAnimation = (): void => {
    setTextAreaAnimation('0'); // fade out effect
    setTimeout(() => {
      setTextAreaAnimation('1');
    }, 400); // fade in effect
    setDotAnimation('var(--color-hover)'); // dot fade out
    setTimeout(() => {
      setDotAnimation('var(--color-highlight-gradient-green)');
    }, 400); // dot fade in
  };

  return (
    <section className={styles.product_stories}>
      <figure className={styles.product_stories_textarea}>
        {/* the values from the array are used here, style used for animation */}
        <blockquote style={{ opacity: textAreaAnimation, transition: 'opacity 400ms' }}>
          {stories[number].quote}
        </blockquote>
        <figcaption style={{ opacity: textAreaAnimation, transition: 'opacity 400ms' }}>
          - {stories[number].author}
        </figcaption>
      </figure>

      {/* buttons for switching to next or previous */}
      <button className={styles.product_stories_arrow} onClick={() => previousStory()} />
      <button className={styles.product_stories_arrow} onClick={() => nextStory()} />

      {/* the bar of dots at the bottom for selecting a story */}
      <div className={styles.product_stories_dots}>
        {stories.map((story) =>
          story.number === number ? ( // dot for the current story is highlighted
            <div
              key={story.number}
              style={{ background: dotAnimation }}
            />
          ) : (
            <div
              key={story.number}
              onClick={() => chosenStory(story)}
            />
          )
        )}
      </div>
    </section>
  );
};
export default ProductStories;
