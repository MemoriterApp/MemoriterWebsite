import React, { FC } from 'react';
import githubIcon from '../images/icons/github-icon.svg';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import BugsForm from '../components/bugs-form';

const Bugs: FC = () => {
    return (
        <WebsiteWrapper
            title='Bug Report'
            description='If you find any technical issues, you can report them here.'
            currentPage=''
        >

            <h1>Bug Report</h1>
            
            {/*bug report form*/}
            <BugsForm/>

            {/*links at the bottom*/}
            <section>
                <p>
                    If you find any issues or technical problems, please report them to us.
                </p>
                <p>
                    You can also send us an email regarding the problem to <a href='mailto:'>bugs@memoriter.de</a>.
                </p>
                <p>
                    If you are fimiliar with the platform, you can also open an issue on <a href='https://github.com/MemoriterApp/Memoriter/issues' target='_blank' rel='noreferrer'>
                    <img src={githubIcon} alt='github-icon'/>GitHub</a>.
                </p>
            </section>

        </WebsiteWrapper>
    );
}

export default Bugs;