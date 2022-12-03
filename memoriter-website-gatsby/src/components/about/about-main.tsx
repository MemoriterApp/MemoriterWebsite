import React, { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/about/about-main.module.scss';
import placeholderImage from '../../images/about/placeholder.jpg';

const AboutMain: FC = () => {
    return (
        <section className={styles.about_main}> {/*main parts with texts and images*/}

            <article className={styles.about_main_container} style={{marginTop: '160px'}}>
                <div className={styles.about_main_container_sub}>
                    <AnimationOnScroll 
                    animateIn={styles.about_main_animation_fade_in_right} 
                    animateOut={styles.about_main_animation_fade_out_right}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <h1 className={styles.about_main_heading}>Our Vision</h1>
                        <p className={styles.about_main_text}>
                        We have experienced a lot of students spending more time studying then necessary 
                        because of ineffcient methods. We wanted to solve this problem with 
                        Memoriter as an all-in-one-learning-environment that is also free and accessible for everyone.</p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.about_main_container_sub_image}>
                    <img className={styles.about_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
            </article>
            <article className={styles.about_main_container}>
                <div className={styles.about_main_container_sub}>
                    <AnimationOnScroll 
                    animateIn={styles.about_main_animation_fade_in_right} 
                    animateOut={styles.about_main_animation_fade_out_right}>
                    {/*AnimationOnScroll starts an animation when it enters the viewport*/}
                        <h1 className={styles.about_main_heading}>Our Story</h1>
                        <p className={styles.about_main_text}>
                           We started Memoriter as a hobby project in highschool. We kept going and now we are a team of 6 students from Germany and Sweden. We are still in school and we are working on Memoriter in our free time.
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className={styles.about_main_container_sub_image}>
                    <img className={styles.about_main_image} src={placeholderImage} alt='placeholder'/>
                </div>
            </article>

            <section>
                <h1 className={styles.about_main_title}>The Team</h1>
                <article>
                    <div className={styles.about_main_grid_container}>
                        <div className={styles.about_main_grid_item} style={{ gridColumn: '1/1', gridRow: '1/1' }}>
                            <h1 className={styles.about_main_grid_item_heading}> Simon H.</h1>
                            <article>
                                <p className={styles.about_main_grid_item_text}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                </p>
                                <img className={styles.about_main_grid_item_image} src={placeholderImage} alt='placeholder' />
                            </article>
                        </div>
                        <div className={styles.about_main_grid_item} style={{ gridColumn: '2/2', gridRow: '1/1' }}>
                            <h1 className={styles.about_main_grid_item_heading}> Johan T.</h1>
                            <article>
                                <p className={styles.about_main_grid_item_text}>
                                    Hello, I am leading the development of Memoriter. I make sure that we stay on track and move toward our goals and creative vision.
                                    I also help with the development of the website and the app. 

                                </p>
                                <img className={styles.about_main_grid_item_image} src={placeholderImage} alt='placeholder' />
                            </article>
                        </div>
                        <div className={styles.about_main_grid_item} style={{}}>
                            <h1 className={styles.about_main_grid_item_heading}> Alexander I.</h1>
                            <article>
                                <p className={styles.about_main_grid_item_text}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                </p>
                                <img className={styles.about_main_grid_item_image} src={placeholderImage} alt='placeholder' />
                            </article>
                        </div>
                        <div className={styles.about_main_grid_item} style={{}}>
                            <h1 className={styles.about_main_grid_item_heading}> Ale F.</h1>
                            <article>
                                <p className={styles.about_main_grid_item_text}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                </p>
                                <img className={styles.about_main_grid_item_image} src={placeholderImage} alt='placeholder' />
                            </article>
                        </div>
                        <div className={styles.about_main_grid_item} style={{}}>
                            <h1 className={styles.about_main_grid_item_heading}> Saga B.</h1>
                            <article>
                                <p className={styles.about_main_grid_item_text}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                </p>
                                <img className={styles.about_main_grid_item_image} src={placeholderImage} alt='placeholder' />
                            </article>
                        </div>
                        <div className={styles.about_main_grid_item} style={{}}>
                            <h1 className={styles.about_main_grid_item_heading}> Simon K.</h1>
                            <article>
                                <p className={styles.about_main_grid_item_text}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                </p>
                                <img className={styles.about_main_grid_item_image} src={placeholderImage} alt='placeholder' />
                            </article>
                        </div>
                    </div>
                </article>
            </section>

            <AnimationOnScroll animateIn={styles.about_main_animation_fade_in_down} animateOut={styles.about_main_animation_fade_out_down}>
                <p className={styles.about_main_bottom}>
                    By <span>Students</span> for <span>Students</span>.
                </p>
            </AnimationOnScroll>

        </section>
    );
}

export default AboutMain;