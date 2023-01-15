import React, { FC, useState } from 'react';
import * as styles from '../../styles/product/product-stories.module.scss';

const ProductStories: FC = () => {

  const stories: { number: number; author: string; quote: string }[] = [ // array with all story data
    {
      number: 0,
      author: 'Harry',
      quote:
        `Latin was always a challenge for me in school. My teacher would give us a long list of words to memorize each week and I would spend hours trying to commit them to memory. 
        But with Memoriter, I was able to learn them quickly and easily, thanks to its various learning methods. 
        Memoriter not only saved me time but also made learning more efficient and effective. It was a game changer for my Latin studies.`,
    },
    {
      number: 1,
      author: 'Hermoine',
      quote:
        `As a medical student, long-term retention is crucial for success. 
        That's where Memoriter comes in. It helped me to focus on the most important information for my exams and to retain it over time. 
        The spaced repetition feature was particularly helpful in allowing me to learn and retain a large amount of information in a short amount of time. 
        Memoriter was a powerful tool in my medical school studies.`
    },
    {
      number: 2,
      author: 'Ron',
      quote:
        `Studying in groups has always been a great way for me to stay motivated and on track. 
        With Memoriter, we were able to take our group study sessions to the next level. 
        Its ability to share and collaborate on flashcards with my peers made it easy for us to pool our knowledge and learn from each other. 
        We could create our own flashcards and study them together which helped us to learn faster and retain the information for a longer period of time. 
        Memoriter was a valuable tool for our group study sessions.`,
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