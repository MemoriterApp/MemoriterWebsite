import React, { FC, useState } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import HelpQuestion from '../components/help-question';

const Faq: FC = () => {

    //array with all questions with answers, answers can be typed as string or html objects
    const [questions, setQuestions] = useState<{question: string, answer: string, isOpen: boolean}[]>([
        //Sub Heading
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
        //Sub Heading
        {
            question: 'Question 4',
            answer: 'Answer 4',
            isOpen: false
        },
        {
            question: 'Question 5',
            answer: 'Answer 5',
            isOpen: false
        },
        {
            question: 'Question 6',
            answer: 'Answer 6',
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
            title='FAQ'
            description='Frequently asked questions about the Memoriter app.'
            currentPage=''
        >

            {/*main body*/}
            <section className='help-main'>

                <h1 className='help-main-heading'>Frequently Asked Questions</h1>

                <h2 className='help-main-sub-heading'>Sub Heading</h2>
                {/*displays a list for a section of questions*/}
                {questions.slice(0, 3).map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

                <h2 className='help-main-sub-heading'>Sub Heading</h2>
                {/*displays a list for a section of questions*/}
                {questions.slice(3, 6).map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

            </section>
            
        </WebsiteWrapper>
    );
}

export default Faq;

export const Head: HeadFC = () => <title>Memoriter | FAQ</title>;