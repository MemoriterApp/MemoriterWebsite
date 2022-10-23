import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import DonateMain from '../components/donate/donate-main';
import DonateDonate from '../components/donate/donate-donate';
import DonateStatistics from '../components/donate/donate-statistics';

const Donate: FC = () => {
    return (
        <WebsiteWrapper
            title='Donate'
            description='If you want to support our project, please consider donating.'
            currentPage='donate'
        >

        <section className='donate-main-container'>
            {/*main content and texts*/}
            <DonateMain/>

            {/*section for donating*/}
            <DonateDonate/>
        </section>

            {/*statistics where the money goes (for transparency reasons)*/}
            <DonateStatistics/>

        </WebsiteWrapper>
    );
}

export default Donate;

export const Head: HeadFC = () => <title>Memoriter | Donate</title>;