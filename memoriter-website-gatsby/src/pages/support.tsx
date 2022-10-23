import React, { FC, useState } from 'react';
import { HeadFC, Link } from 'gatsby';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import HelpQuestion from '../components/help-question';

const Support: FC = () => {

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
            question: 'I want to report a bug',
            answer:
                <p>
                    If you found an issue you want to report, please check out our <Link className='help-question-answer-link' to='/bugs'>bug report</Link> page for further information on how and where to report them.
                </p>,
            isOpen: false
        },
        {
            question: 'I need different help',
            answer: <p>Please check out the <Link className='help-question-answer-link' to='/faq'>frequently asked questions</Link>.</p>,
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
        <WebsiteWrapper
            title='Support'
            description='Here you can find more information if you need help.'
            currentPage=''
        >

            {/*main body*/}
            <section className='help-main'>

                <h1 className='help-main-heading'>Support</h1>
                <hr className='help-main-heading-bottom-space'/>

                {/*displays the list of questions*/}
                {questions.map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

            </section>

        </WebsiteWrapper>
    );
}

export default Support;

export const Head: HeadFC = () => <title>Memoriter | Support</title>;