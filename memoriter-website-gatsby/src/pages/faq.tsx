import React, { FC, useState } from 'react';
import { HeadFC, Link } from 'gatsby';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import HelpQuestion from '../components/help-question';

const Faq: FC = () => {

    // array with all questions with answers, answers can be typed as string or html objects
    const [questions, setQuestions] = useState<{section: string, question: string, answer: React.ReactNode, isOpen: boolean}[]>([
        // General FAQ
        {
            section: 'general',
            question: 'What exactly is Memoriter?',
            answer: 
                <p>
                    Memoriter is a note taking study tool. 
                    It was designed to store and study information in a clear and effective way.
                    The application is still in a very early stage of development,
                    but as the time progresses there will be more features added to make the studying experience with Memoriter even more comprehensive.
                </p>,
            isOpen: false
        },
        {
            section: 'general',
            question: 'Who created Memoriter?',
            answer:
                <p>
                    Memoriter is a tool for students by students.
                    It was originally started as a school project by a small team of German students in 2021,
                    but we moved on afterwards and are now a still small, but international organization.
                    Head over to our <Link className='help-question-answer-link' to='/about'>About page</Link> to find out more.
                </p>,
            isOpen: false
        },
        {
            section: 'general',
            question: 'Is Memoriter free?',
            answer: 
                <p>
                    Yes! The application is completely free to use at the moment.
                    Memoriter is currently a non profit project, we do not have an incentive to make money off of it.
                    With the project beeing very small at the moment, our operative costs are little, so we are able to do so.
                    If you still want to support us financially, please consider <Link className='help-question-answer-link' to='/donate'>donating</Link>.
                </p>,
            isOpen: false
        },
        // Account
        {
            section: 'account',
            question: 'Question 4',
            answer: 'Answer 4',
            isOpen: false
        },
        // Donating
        {
            section: 'donating',
            question: 'Question 5',
            answer: 'Answer 5',
            isOpen: false
        },
        {
            section: 'donating',
            question: 'Question 6',
            answer: 'Answer 6',
            isOpen: false
        },
        {
            section: 'donating',
            question: 'Question 7',
            answer: 'Answer 7',
            isOpen: false
        },
        // Open Source
        {
            section: 'open-source',
            question: 'Is Memoriter open source?',
            answer:
                <p>
                    Yes, it is! You can find our entire source code on <a href='https://github.com/MemoriterApp' target='_blank' rel='noreferrer'>GitHub</a>.
                </p>,
            isOpen: false
        },
        {
            section: 'open-source',
            question: 'Can I contribute to the project?',
            answer: 
                <p>
                    If you know a bit about HTML, CSS and JavaScript (React), that's awesome!
                    Feel free to create a pull request with the changes you want to see implemented.
                </p>,
            isOpen: false
        },
        {
            section: 'open-source',
            question: 'Is there documentation of the source code?',
            answer:
                <p>
                    Sadly no, at least at the moment.
                    The beginning of development were very unorganized, so no one really cared about documenting anything,
                    and with our code beeing very chaotic (even the people who wrote it don't understand it &#128521;),
                    nobody wanted to do this task for a long while. So be patient, we are trying to get it done.
                </p>,
            isOpen: false
        },
        // Legal
        {
            section: 'legal',
            question: 'What is the current legal status of Memoriter?',
            answer: 'There is no. The Project is represented by us individual people.',
            isOpen: false
        },
        {
            section: 'legal',
            question: 'Question 13',
            answer: 'Answer 13',
            isOpen: false
        },
        {
            section: 'legal',
            question: 'Question 14',
            answer: 'Answer 14',
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

                <h1 className='help-main-heading'>Frequently Asked Questions</h1>

                <h2 className='help-main-sub-heading' id='general'>General FAQ</h2>
                {/*displays a list for a section of questions*/}
                {questions.filter((question) => question.section === 'general').map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

                <h2 className='help-main-sub-heading' id='account'>Account</h2>
                {/*displays a list for a section of questions*/}
                {questions.filter((question) => question.section === 'account').map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

                <h2 className='help-main-sub-heading' id='donating'>Donating</h2>
                {/*displays a list for a section of questions*/}
                {questions.filter((question) => question.section === 'donating').map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

                <h2 className='help-main-sub-heading' id='open-source'>Open Source</h2>
                {/*displays a list for a section of questions*/}
                {questions.filter((question) => question.section === 'open-source').map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

                <h2 className='help-main-sub-heading' id='legal'>Legal</h2>
                {/*displays a list for a section of questions*/}
                {questions.filter((question) => question.section === 'legal').map((question) => (
                    <HelpQuestion key={question.question} question={question} onOpenQuestion={openQuestion}/>
                ))}

            </section>
            
        </WebsiteWrapper>
    );
}

export default Faq;

export const Head: HeadFC = (): React.ReactElement => {
    return (
        <WebsiteHead
            title='FAQ'
            description='Frequently asked questions about the Memoriter project.'
            keywords='faq, help'
            type='website'
        />
    );
};