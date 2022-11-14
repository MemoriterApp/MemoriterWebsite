import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/about/about-main.module.scss';
import placeholderImage from '../../images/about/placeholder.jpg';

const AboutMain: FC = () => {
    return (
        <section className={styles.about_main}> {/*main parts with texts and images*/}

            <article className={styles.about_main_container} style={{marginTop: '160px'}}>
                <div className={styles.about_main_container_sub}>
                    <AnimationOnScroll animateIn={styles.about_main_animation_fade_in_right} animateOut={styles.about_main_animation_fade_out_right}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <h1 className={styles.about_main_heading}>Who we are.</h1>
                        <p className={styles.about_main_text}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.about_main_container_sub_image}>
                    <img className={styles.about_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
            </article>
            <article className={styles.about_main_container}>
                <div className={styles.about_main_container_sub}>
                    <AnimationOnScroll animateIn={styles.about_main_animation_fade_in_right} animateOut={styles.about_main_animation_fade_out_right}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <p className={styles.about_main_text}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.about_main_container_sub_image}>
                    <img className={styles.about_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
            </article>

            <article className={styles.about_main_container} style={{marginTop: '240px'}}>
                <div className={styles.about_main_container_sub}>
                    <img className={styles.about_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
                <div className={styles.about_main_container_sub}>
                    <AnimationOnScroll animateIn={styles.about_main_animation_fade_in_left} animateOut={styles.about_main_animation_fade_out_left}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <h1 className={styles.about_main_heading}>Placeholder Heading</h1>
                        <p className={styles.about_main_text}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </AnimationOnScroll>
                </div>
            </article>
            <article className={styles.about_main_container}>
                <div className={styles.about_main_container_sub}>
                    <img className={styles.about_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
                <div className={styles.about_main_container_sub}>
                    <AnimationOnScroll animateIn={styles.about_main_animation_fade_in_left} animateOut={styles.about_main_animation_fade_out_left}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <p className={styles.about_main_text}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </AnimationOnScroll>
                </div>
            </article>

            <AnimationOnScroll animateIn={styles.about_main_animation_fade_in_down} animateOut={styles.about_main_animation_fade_out_down}>
                <p className={styles.about_main_bottom}>
                    Lorem <span>ipsum</span> dolor sit amet, consetetur <span>sadipscing</span> elitr.
                </p>
            </AnimationOnScroll>

        </section>
    );
}

export default AboutMain;