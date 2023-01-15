import React, { FC, useEffect, useState } from 'react';
import * as styles from '../../styles/about/about-banner.module.scss';

const AboutBanner: FC = () => {

    const [scrollProgress, setScrollProgress] = useState<number>(0); //value for the scroll progress
    const onScroll = (): void => { //getting the scroll data
        const scroll: number = document.documentElement.scrollTop;
        const height: number = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled: number = (scroll / height) * 100;

        setScrollProgress(scrolled);
    };

    useEffect((): any => { //the useEffect is important for getting the value if it is scrolling
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section className={styles.about_banner}>

            {/*background circles*/}
            <div
                className={styles.about_banner_circle_top}
                style={{left: `calc(-1 * ${scrollProgress}vh - 50vh`}}
            />
            <div
                className={styles.about_banner_circle_bottom}
                style={{right: `calc(-1 * ${scrollProgress}vh - 50vh`}}
            />
            {/*the size of the circles changes a bit when you scroll down*/}

            {/*content*/}
            <p className={styles.about_banner_content}>
                Find out more about <span>the best</span> team of developers and designers <span>in the world.</span>
            </p>

            {/*transition shape at the bottom*/}
            <div className={styles.about_banner_transition} />
            <div className={styles.about_banner_transition_left}/>
            <div className={styles.about_banner_transition_right}/>
            
        </section>
    );
}

export default AboutBanner;