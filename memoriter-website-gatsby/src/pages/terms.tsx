import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import '../styles/legal.scss';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';

const Terms: FC = () => {
    return (
        <WebsiteWrapper currentPage=''>

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

export const Head: HeadFC = (): React.ReactElement => {
    return (
        <WebsiteHead
            title='Terms of Use'
            description='This page contains information about the legal agreement between Memoriter and customers.'
            keywords='terms, conditions, legal'
            type='website'
        />
    );
};