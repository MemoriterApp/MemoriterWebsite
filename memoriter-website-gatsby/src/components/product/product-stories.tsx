import React, { FC, useState } from 'react';
import * as styles from '../../styles/product/product-stories.module.scss';

const ProductStories: FC = () => {

  const stories: { number: number; author: string; quote: string }[] = [ // array with all story data
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

  const previousStory = (): void => { // function for switching to previous story
    setTextAreaAnimation('0'); // fade out effect
    setTimeout(() => {
      setTextAreaAnimation('1');
    }, 400); // fade in effect

    setDotAnimation('var(--color-hover)'); // dot fade out
    setTimeout(() => {
      setDotAnimation('var(--color-highlight-gradient-green)');
    }, 400); // dot fade in

    setTimeout(() => { // timeout needed for correctly executed animation
      if (number === 0) { // if the first story is shown it switches to the last one
        setNumber(stories.length - 1);
      } else { // else it switches to the previous one
        setNumber(number - 1);
      }
    }, 400);
  };

  const nextStory = (): void => { // function for switching to next story
    setTextAreaAnimation('0'); // fade out effect
    setTimeout(() => {
      setTextAreaAnimation('1');
    }, 400); // fade in effect

    setDotAnimation('var(--color-hover)'); // dot fade out
    setTimeout(() => {
      setDotAnimation('var(--color-highlight-gradient-green)');
    }, 400); // dot fade in

    setTimeout(() => { // timeout needed for correctly executed animation
      if (number === stories.length - 1) { // if the first story is shown it switches to the last one
        setNumber(0);
      } else { // else it switches to the previous one
        setNumber(number + 1);
      }
    }, 400);
  };

  const chosenStory = (story: { number: number }): void => { // function for switching to the story of the clicked dot
    setTextAreaAnimation('0'); // fade out effect
    setTimeout(() => {
      setTextAreaAnimation('1');
    }, 400); // fade in effect

    setDotAnimation('var(--color-hover)'); // dot fade out
    setTimeout(() => {
      setDotAnimation('var(--color-highlight-gradient-green)');
    }, 400); // dot fade in

    setTimeout(() => {
      setNumber(story.number);
    }, 400); // timeout needed for correctly executed animation
  };

  return (
    <section className={styles.product_stories}>
      <div className={styles.product_stories_textarea}>
        {/*the values from the array are used here*/}
        <article style={{ opacity: textAreaAnimation, transition: 'opacity 400ms' }}>
          {/*style used for animation*/}
          <p className={styles.product_stories_textarea_quote}>{stories[number].quote}</p>
          <p className={styles.product_stories_textarea_author}>- {stories[number].author}</p>
        </article>
      </div>

      {/*buttons for switching to next or previous*/}
      <button className={styles.product_stories_arrow_left} onClick={previousStory} />
      <button className={styles.product_stories_arrow_right} onClick={nextStory} />

      {/*the bar of dots at the bottom for selecting a story*/}
      <div className={styles.product_stories_dots}>
        {stories.map((story) =>
          story.number === number ? ( // dot for the current story is highlighted
            <div
              className={styles.product_stories_dot}
              key={story.number}
              style={{ background: dotAnimation }}
            />
          ) : (
            <div
              className={styles.product_stories_dot}
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