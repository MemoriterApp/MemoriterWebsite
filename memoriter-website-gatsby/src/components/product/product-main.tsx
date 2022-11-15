import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/product/product-main.scss';
import lightBulbIconGradient from '../../images/product/light-bulb.svg';
import handShakeIcon from '../../images/product/handshake.png'
import remember from '../../images/product/remember.png'
import placeholderImage from '../../images/product/placeholder.jpg';

const ProductMain: FC = () => {
  return (
    <section className='product-main'>
      {/*three small overview items*/}
      <section className='product-main-overview'>
        <article>
          <img
            className='product-main-overview-image'
            src={lightBulbIconGradient}
            alt='light-bulb'
          />
          <p className='product-main-overview-text'>
            Accumulate knowledge faster with flashcards
          </p>
        </article>

        <article>
          <img className='product-main-overview-image' src={handShakeIcon} alt='placeholder' />
          <p className='product-main-overview-text'>
            Study with friends and share your knowledge
          </p>
        </article>

        <article>
          <img className='product-main-overview-image' src={remember} alt='placeholder' />
          <p className='product-main-overview-text'>
            Remeber everything with spaced repetition
          </p>
        </article>
      </section>

      {/*main parts with texts and images*/}
      <article className='product-main-container'>
        <div className='product-main-container-sub'>
          <AnimationOnScroll
            animateIn='product-main-animation-fade-in-right'
            animateOut='product-main-animation-fade-out-right'
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className='product-main-heading'>Accumalate knowledge faster</h1>
            <p className='product-main-text'>
            Flashcards have proven to be <span style={{fontWeight:'600'}}>150% more effective</span> if you want to accumalte knowledge faster. 
            Instead of memorizing your notes passively, save time using flashcards. When studying with flashcards 
            the algorithm will notice your mistakes and help you study more where your knowledge is lacking!
            </p>
          </AnimationOnScroll>
        </div>
        <div className='product-main-container-sub-image'>
          <StaticImage
            className='product-main-image'
            src='../../images/product/placeholder.jpg'
            alt='placeholder'
          />
        </div>
      </article>

      <article className='product-main-container'>
        <div className='product-main-container-sub-image'>
          <StaticImage
            className='product-main-image'
            src='../../images/product/placeholder.jpg'
            alt='placeholder'
          />
        </div>
        <div className='product-main-container-sub'>
          <AnimationOnScroll
            animateIn='product-main-animation-fade-in-left'
            animateOut='product-main-animation-fade-out-left'
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className='product-main-heading'>Study with friends</h1>
            <p className='product-main-text'>
            Study together and you will always find the motivation to suceed. 
            You can help each other out and share your notes, techniques and structure. 
            That way you will save time and hard work.
            </p>
          </AnimationOnScroll>
        </div>
      </article>

      <article className='product-main-container'>
        <div className='product-main-container-sub'>
          <AnimationOnScroll
            animateIn='product-main-animation-fade-in-right'
            animateOut='product-main-animation-fade-out-right'
          >
            {/*AnimationOnScroll starts an animation when it enters the viewport*/}
            <h1 className='product-main-heading'>Remember everything with spaced repetition</h1>
            <p className='product-main-text'>
              By using the scientic method of spaced repetition, we will remind you to regularly review important flashcards 
              that way you can remember thousands of flashcards with minimal effort.
            </p>
          </AnimationOnScroll>
        </div>
        <div className='product-main-container-sub-image'>
          <StaticImage
            className='product-main-image'
            src='../../images/product/placeholder.jpg'
            alt='placeholder'
          />
        </div>
      </article>
    </section>
  );
};
export default ProductMain;