import React, { FC, useState } from 'react';
import { HeadFC, Link } from 'gatsby';
import * as styles from '../styles/help.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import HelpQuestion from '../components/help-question';

const Support: FC = () => {
  
  //array with all questions with answers, answers can be typed as string or html objects
  const [questions, setQuestions] = useState<
    { question: string; answer: React.ReactNode; isOpen: boolean }[]
  >([
    {
      question: 'I need account support',
      answer: (
        <>
          <p>
            You can change most of your account data or delete your account on the profile page. If
            you forgot your password, you can request a password reset link from the sign in page
            (just click on 'Forgot password?' for further instructions).
          </p>
          <p>
            If you can't sign in it might be a server side issue, waiting a few hours would be the
            best option. You might encounter any error codes or use your browser's developer tools
            (console) to identify the error source.
          </p>
          <p>
            If none of these steps solves the problem, please send an email to{' '}
            <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>. Please provide all error
            codes (if there are any).
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      question: 'I want to cancel my monthly donation subscription',
      answer: (
        <p>
          Please use the <Link to='/donate'>Donate page</Link> to cancel the subscription or send us
          an email to <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
        </p>
      ),
      isOpen: false,
    },
    {
      question: 'I want to unsubscribe from the newsletter',
      answer: (
        <p>
          You can use the link at the bottom of each newsletter email to do so. As an alternative
          you can use the link at the bottom of the <Link to='/newsletter'>Newsletter page</Link>.
        </p>
      ),
      isOpen: false,
    },
    {
      question: 'Collaboration and legal issues',
      answer: (
        <p>
          If you want to collaborate with us in any way or address any legal issues, please write an
          email to <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
        </p>
      ),
      isOpen: false,
    },
    {
      question: 'I want to report a bug',
      answer: (
        <p>
          If you found an issue you want to report, please check out our{' '}
          <Link to='/bugs'>bug report</Link> page for further information on how and where to report
          them.
        </p>
      ),
      isOpen: false,
    },
    {
      question: 'I need different help',
      answer: (
        <p>
          Please check out the <Link to='/faq'>frequently asked questions</Link> or send an email to{' '}
          <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
        </p>
      ),
      isOpen: false,
    },
  ]);

  //function is called when a question is clicked
  const openQuestion = (openedQuestion: string): void => {
    setQuestions((questions) =>
      questions.map(
        (
          question //question array is changed
        ) =>
          question.question === openedQuestion && !question.isOpen
            ? {
                ...question,
                isOpen: true, //clicked question opens if it is closed
              }
            : question.question === openedQuestion && question.isOpen
            ? {
                ...question,
                isOpen: false, //clicked question closes if it is open
              }
            : {
                ...question,
                isOpen: false, //all other questions are closing, only one can be opened at the same time
              }
      )
    );
  };

  return (
    <WebsiteLayout currentPage=''>
      {/*main body*/}
      <section className={styles.help_main}>
        <h1>Support</h1>
        <hr/>

        {/*displays the list of questions*/}
        {questions.map((question) => (
          <HelpQuestion
            styles={styles}
            key={question.question}
            question={question}
            onOpenQuestion={openQuestion}
          />
        ))}
      </section>
    </WebsiteLayout>
  );
};
export default Support;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='FAQ'
      description='Here you can find more information if you need help.'
      keywords='support, help'
      type='website'
    />
  );
};