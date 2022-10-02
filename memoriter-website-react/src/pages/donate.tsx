import React, { FC } from 'react';
import WebsiteWrapper from '../components/wrapper/website-wrapper';

const Donate: FC = () => {
    return (
        <WebsiteWrapper
            title='Donate'
            description='If you want to support our project, please consider donating.'
            currentPage='donate'
        >

        </WebsiteWrapper>
    );
}

export default Donate;