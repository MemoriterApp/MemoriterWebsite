import React, { FC, useState } from 'react';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/help.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import HelpQuestion from '../components/help-question';

const Bugs: FC = () => {
  // array with all questions with answers, answers can be typed as string or html objects
  const [questions, setQuestions] = useState<
    { question: string; answer: React.ReactNode; isOpen: boolean }[]
  >([
    {
      question: 'Responsiveness and optimization issues on phones',
      answer: (
        <p>
          We are aware of those issues. The application wasn't tested properly for those issues for
          a long time, but now we are already trying to get rid of them to make a good experience on
          all devices possible.
        </p>
      ),
      isOpen: false,
    },
    {
      question: 'Error messages or page content not showing',
      answer: (
        <>
          <p>
            Please check your internet connection and if the URL of the page was etered correctly.
            Certain errors can also occur on the server side and might be resolved automatically
            after a short amount of time. When encountering error messages or not loading pages or
            content, checking the browser's developer tools (console) is always a good option.
          </p>
          <p>
            If you still want to report the issue, please look at the "I want to report a different
            bug" section. It is then useful to provide any unknown error codes to us.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      question: 'Security vulnerabilities',
      answer: (
        <>
          <p>
            Please report security issues to{' '}
            <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
          </p>
          <p>
            Fixing security vulnerabilities is very important, even if they cannot directly be
            exploited. Therefore we would appreciate security reviews for Memoriter. When searching
            for issues, please try to minimize negative side effects on other users like spam or
            network speed.
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      question: 'I want to report a different bug',
      answer: (
        <>
          <p>
            If you found a new issue, you may report it. Please make sure the issue is reproducible.
            There are multiple ways to report a bug:
          </p>
          <ul>
            <li>
              Report the bug directly to our <a href='https://docs.google.com/forms/d/e/1FAIpQLSdeAzvTo395mzFaHjii-hETrUf9VoRPSqe5u78NgJZueDveSA/viewform?usp=sf_link'>Bug Report Form</a>
            </li>
            <li>
              Discuss issues on{' '}
              <a
                href='https://github.com/MemoriterApp/Memoriter/issues'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
            </li>
            <li>
              Send us an email regarding the problem to{' '}
              <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>
            </li>
          </ul>
          <p>
            When reporting an issue, please make sure you describe it as accurate as possible, as
            well where and how the bug occurs. Please also provide steps to reproduce the issue and
            attach on wich web browser or device type (e.g. PC, smartphone etc.) the bug happens.
          </p>
        </>
      ),
      isOpen: false,
    },
  ]);

  // function is called when a question is clicked
  const openQuestion = (openedQuestion: string): void => {
    setQuestions((questions) =>
      questions.map(
        (
          question // question array is changed
        ) =>
          question.question === openedQuestion && !question.isOpen
            ? {
                ...question,
                isOpen: true, // clicked question opens if it is closed
              }
            : question.question === openedQuestion && question.isOpen
            ? {
                ...question,
                isOpen: false, // clicked question closes if it is open
              }
            : {
                ...question,
                isOpen: false, // all other questions are closing, only one can be opened at the same time
              }
      )
    );
  };

  return (
    <WebsiteLayout currentPage=''>
      {/* main body */}
      <section className={styles.help_main}>
        <h1>Bug Report</h1>

        {/* displays the list of questions */}
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
export default Bugs;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Bug Report'
      description='If you find any technical issues regarding Memoriter, you can report them here.'
      keywords='bugs, report, help'
      type='website'
    />
  );
};
