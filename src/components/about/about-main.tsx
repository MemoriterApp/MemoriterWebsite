import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/default-main.module.scss';
import AboutTeam from './about-team';
import placeholderImage from '../../images/about/placeholder.jpg';

const AboutMain: FC = () => {
    return (
        <section className={styles.default_main}> {/*main parts with texts and images*/}

            <article className={styles.default_main_container} style={{marginTop: '160px'}}>
                <div className={styles.default_main_container_sub}>
                    <AnimationOnScroll 
                    animateIn={styles.default_main_animation_fade_in_right} 
                    animateOut={styles.default_main_animation_fade_out_right}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <h1 className={styles.default_main_heading}>Our Vision</h1>
                        <p className={styles.default_main_text}>
                        We have experienced a lot of students spending more time studying then necessary 
                        because of ineffcient methods. We wanted to solve this problem with 
                        Memoriter as an all-in-one-learning-environment that is also free and accessible for everyone.</p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.default_main_container_sub_image}>
                    <img className={styles.default_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
            </article>
            <article className={styles.default_main_container}>
                <div className={styles.default_main_container_sub}>
                    <AnimationOnScroll 
                    animateIn={styles.default_main_animation_fade_in_right} 
                    animateOut={styles.default_main_animation_fade_out_right}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <h1 className={styles.default_main_heading}>Our Story</h1>
                        <p className={styles.default_main_text}>
                           We started Memoriter as a hobby project in highschool. We kept going and now we are a team of 6 students from Germany and Sweden. We are still in school and we are working on Memoriter in our free time.
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.default_main_container_sub_image}>
                    <img className={styles.default_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
            </article>

            {/* our team section */}
            <AboutTeam/>

        </section>
    );
}

export default AboutMain;