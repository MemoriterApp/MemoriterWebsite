import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/default-main.module.scss';
import AboutTeam from './about-team';
import placeholderImage from '../../images/about/placeholder.jpg';
import stressed from '../../images/about/stressed.png';
import school from '../../images/about/bvs.png';

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
                        Our vision at Memoriter is to revolutionize the way students learn by providing an efficient and accessible all-in-one learning environment. <br/>
                        We saw a need to address the problem of students spending excessive amounts of time studying due to inefficient methods. 
                        <br/>By making Memoriter open-source and free, we aim to make it accessible to as many people as possible. 
                        <br/>Our goal is not to profit off of this project, but to create a tool that can truly benefit students in their academic journey.
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.default_main_container_sub_image}>
                    <img className={styles.default_main_image} src={stressed} alt='placeholder'/>
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
                           We started Memoriter as a hobby project in highschool. We kept going and now we are a team of 7 students from Germany and Sweden. 
                           We are still in school and we are working on Memoriter in our free time. <br/>
                           We encountered the problems of inefficient studying methods and we wanted to create a solution that is accessible to everyone. <br/> 
                           Wanted to offer a cheap, open-source and overal better alternative to the existing learning platforms.
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.default_main_container_sub_image}>
                    <img className={styles.default_main_image} src={school} alt='placeholder'/>
                </div>
            </article>

            {/* our team section */}
            <AboutTeam/>

            <AnimationOnScroll animateIn={styles.default_main_animation_fade_in_down} animateOut={styles.default_main_animation_fade_out_down}>
                <p className={styles.default_main_bottom}>
                    By <span>Students</span> for <span>Students</span>.
                </p>
            </AnimationOnScroll>

        </section>
    );
}

export default AboutMain;