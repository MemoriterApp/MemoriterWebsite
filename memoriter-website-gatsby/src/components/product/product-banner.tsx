import React, { FC, useEffect, useState } from 'react';
import '../../styles/product/product-banner.scss';

const ProductBanner: FC = () => {

    const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the get started button
    const [triangleEffect, setTriangleEffect] = useState<string>('0'); //variable for background animation when hovering on the gat started button
    const [triangleTransition, setTriangleTransition] = useState<string>('none'); //variable for background animation transition (this does not trigger when scrolling)

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
        <section className='product-banner'>

            {/*background triangles*/}
            <div
                className='product-banner-background-triangle-top'
                style={{right: `calc(-1 * ${scrollProgress}vh - ${triangleEffect}vh`, transition: triangleTransition}}
            />
            <div
                className='product-banner-background-triangle-bottom'
                style={{left: `calc(-1 * ${scrollProgress}vh - ${triangleEffect}vh`, transition: triangleTransition}}
            />
            {/*the size of the triangles changes a bit when you scroll down and when hovering over the get started button*/}

            {/*content*/}
            <article className='product-banner-content'>
                {/*slogan*/}
                <p className='product-banner-text'>Study better faster smarter - study with Memoriter</p>
                <p className='product-main-overview-text' style={{width:'100%', marginBottom:'75px'}}>Work with Memoriter effective memorizing, tools to quickly achieve successful results. </p>

                {/*get started button for redirecting to register page*/}
                <a
                    className='product-banner-get-started' href='https://app.memoriter.de/signup'
                    onMouseEnter={() => {setOnHover('brightness(0.75)'); setTriangleEffect('10'); setTriangleTransition('400ms');}}
                    onMouseLeave={() => {setOnHover('brightness(1)'); setTriangleEffect('0'); setTimeout(() => {setTriangleTransition('none')}, 400);}}
                >
                    Get Started <div className='product-banner-get-started-background' style={{filter: onHover}}/>
                </a>
            </article>

            {/*transition shape at the bottom*/}
            <div className='product-banner-bottom-transition'/>
            <div className='product-banner-bottom-transition-shape-left'/>
            <div className='product-banner-bottom-transition-shape-right'/>

        </section>
    );
};

export default ProductBanner;