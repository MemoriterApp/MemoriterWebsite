import React, { FC, useState } from 'react';
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
            question: 'I want to report a security vulnerability.',
            answer: 'Answer 4',
            isOpen: false
        },
        {
            question: 'I want to report a different bug.',
            answer: 'Answer 5',
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
            title='Bug Report'
            description='If you find any technical issues, you can report them here.'
            currentPage=''
        >

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