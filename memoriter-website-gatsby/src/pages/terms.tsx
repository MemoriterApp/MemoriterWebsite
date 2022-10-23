import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import '../styles/legal.css';
import WebsiteWrapper from '../components/wrapper/website-wrapper';

const Terms: FC = () => {
    return (
        <WebsiteWrapper
            title='Terms of Use'
            description='This page contains information about the legal agreement between Memoriter and customers.'
            currentPage=''
        >

            {/*main body with text*/}
            <article className='legal-main'>

                <h1>Memoriter Terms of Use</h1>

                <p><strong>Last Updated: July 25th, 2022</strong></p>

                <p>
                    Work in Progress.
                </p>

            </article>
            
        </WebsiteWrapper>
    );
}

export default Terms;

export const Head: HeadFC = () => <title>Memoriter | Terms of use</title>;