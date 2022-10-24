import React, { FC, useState } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import HelpQuestion from '../components/help-question';

const Bugs: FC = () => {

    //array with all questions with answers, answers can be typed as string or html objects
    const [questions, setQuestions] = useState<{question: string, answer: string | React.ReactNode, isOpen: boolean}[]>([
        {
            question: 'Question 1',
            answer: 'Answer 1',
            isOpen: false
        },
        {
            question: 'Question 2',
            answer: 'Answer 2',
            isOpen: false
        },
        {
            question: 'Question 3',
            answer: 'Answer 3',
            isOpen: false
        },
        {
            question: 'I want to report a security vulnerability',
            answer:
                <>
                    <p>
                        Please report security issues to <a className='help-question-answer-link' href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
                    </p>
                    <p>
                        Fixing security vulnerabilities is very important, even if they cannot directly be exploited.
                        Therefore we would appreciate security reviews for Memoriter.
                        When searching for issues, please try to minimize negative side effects on other users like spam or network speed.
                    </p>
                </>,
            isOpen: false
        },
        {
            question: 'I want to report a different bug',
            answer:
                <>
                    <p>
                        If you found a new issue, you may report it. Please make sure the issue is reproducible. There are multiple ways to report a bug:
                    </p>
                    <ul>
                        <li>
                            Report a web application issue on <a href='https://github.com/MemoriterApp/Memoriter/issues' target='_blank' rel='noreferrer'>GitHub</a>
                        </li>
                        <li>
                            Discuss issues on our GitHub <a href='https://github.com/MemoriterApp/Memoriter/discussions/categories/general' target='_blank' rel='noreferrer'>discussion forum</a>
                        </li>
                        <li>
                            Send us an email regarding the problem to <a className='help-question-answer-link' href='mailto:contact@memoriter.de'>contact@memoriter.de</a>
                        </li>
                    </ul>
                    <p>
                        When reporting an issue, please make sure you describe it as accurate as possible, as well where and how the bug occurs.
                        Please also provide steps to reproduce the issue and attach on wich web browser or device type (e.g. PC, smartphone etc.) the bug happens.
                    </p>
                </>,
            isOpen: false
        }
    ]);

    const openQuestion = (openedQuestion: string): void => { //function is called when a question is clicked
        setQuestions((questions) => questions.map((question) => //question array is changed
            question.question === openedQuestion && !question.isOpen ? { 
                ...question, isOpen: true //clicked question opens if it is closed
            } : question.question === openedQuestion && question.isOpen ? {
                ...question, isOpen: false //clicked question closes if it is open
            } : {
                ...question, isOpen: false //all other questions are closing, only one can be opened at the same time
            }
        ))
    };

    return (
        <WebsiteWrapper currentPage=''>

            {/*main body*/}
            <section className='help-main'>

                <h1 className='help-main-heading'>Bug Report</h1>
                <hr className='help-main-heading-bottom-space'/>

                {/*displays the list of questions*/}
                {questions.map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

            </section>

        </WebsiteWrapper>
    );
}

export default Bugs;

export const Head: HeadFC = (): React.ReactElement => {
    return (
        <WebsiteHead
            title='Bug Report'
            description='If you find any technical issues, you can report them here.'
            keywords='bugs, report, help'
            type='website'
        />
    );
};