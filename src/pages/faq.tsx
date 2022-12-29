import React, { FC, useState } from 'react';
import { HeadFC, Link } from 'gatsby';
import * as styles from '../styles/help.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import HelpQuestion from '../components/help-question';
import emoji1f609 from '../images/emoji/1f609.svg';

const Faq: FC = () => { // array with all questions with answers, answers can be typed as string or html objects
  const [questions, setQuestions] = useState<
    { section: string; question: string; answer: React.ReactNode; isOpen: boolean }[]
  >([
    // General FAQ
    {
      section: 'general',
      question: 'What exactly is Memoriter?',
      answer: (
        <p>
          Memoriter is a note taking study tool. It was designed to store and study information in a
          clear and effective way. The application is still in a very early stage of development,
          but as the time progresses there will be more features added to make the studying
          experience with Memoriter even more comprehensive.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'general',
      question: 'Who created Memoriter?',
      answer: (
        <p>
          Memoriter is a tool for students by students. It was originally started as a school
          project by a small team of German students in 2021, but we moved on afterwards and are now
          a still small, but international organization. Head over to our{' '}
          <Link to='/about'>About page</Link> to find out more.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'general',
      question: 'Is Memoriter free?',
      answer: (
        <p>
          Yes! The application is completely free to use at the moment. Memoriter is currently a non
          profit project, we do not have an incentive to make money off of it. With the project
          beeing very small at the moment, our operative costs are little, so we are able to do so.
          If you still want to support us financially, please consider{' '}
          <Link to='/donate'>donating</Link>.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'general',
      question: 'Why is Memoriter structured in this way?',
      answer: (
        <p>
          There are already good note taking and study programs, but there isn't really a good tool
          which combines or provides both aspects in one app. Therefore we tried to provide multiple
          aspects of learning and use those scientific principles to create an all-in-one study
          experience.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'general',
      question: 'Why are there so many inconsistencies in the visual design?',
      answer: (
        <p>
          There are multiple reasons for this. Firstly we are mostly developers with little design
          experience and we hadn't a person creating a proper deisgn in the for a long time, but now
          the situation should get better. Secondly the beginning of development was very
          unorganized and everyone implemented their own ideas, leading to different design choices
          before we acquired a person doing all the visual stuff.
        </p>
      ),
      isOpen: false,
    },
    // Account
    {
      section: 'account',
      question: 'Can I delete my user data?',
      answer: (
        <p>
          All your folders and flashcards get removed if you delete your account. If you just want
          to clear your user data, you can then reopen an account with the same email address.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'account',
      question: 'Is it possible to reopen an account and restore my data?',
      answer: (
        <p>
          Sadly no. Once an account is closed, all corresponding user data is deleted. It is
          possible opening an account with the same email address though.
        </p>
      ),
      isOpen: false,
    },
    // Donating
    {
      section: 'donating',
      question: 'Can I cancel my monthly subscription?',
      answer: (
        <p>
          Yes, you can do it any time from the <Link to='/donate'>Donate page</Link> or by writing
          an email to <a href='mailto:contact@memoriter.de'>contact@memoriter.de</a>.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'donating',
      question: 'What is the money used for?',
      answer: (
        <p>
          We use the money to cover or operative costs and to expand the project. That means that we
          are using some of it to speed up development or for marketing reasons, but most of it will
          be used to cover cloud service and server costs. On the{' '}
          <Link to='/donate'>Donate page</Link> there is a more detailed report on that.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'donating',
      question: 'Are some features reserved for donors only?',
      answer: <p>No, All features are free!</p>,
      isOpen: false,
    },
    {
      section: 'donating',
      question: 'Are there other methods of donation?',
      answer: <p>At the moment it is only possible to donate via credit card or PayPal.</p>,
      isOpen: false,
    },
    // Open Source
    {
      section: 'open-source',
      question: 'Is Memoriter open source?',
      answer: (
        <p>
          Yes, it is! You can find our entire source code on{' '}
          <a href='https://github.com/MemoriterApp' target='_blank' rel='noreferrer'>
            GitHub
          </a>
          .
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'open-source',
      question: 'Can I contribute to the project?',
      answer: (
        <p>
          If you know a bit about HTML, CSS and JavaScript (React), that's awesome! Feel free to
          create a pull request with the changes you want to see implemented.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'open-source',
      question: 'Is there documentation of the source code?',
      answer: (
        <p>
          Sadly no, at least at the moment. The beginning of development were very unorganized, so
          no one really cared about documenting anything, and with our code beeing very chaotic
          (even the people who wrote it don't understand it{' '}
          <img className='emoji' src={emoji1f609} alt='😉' draggable='false' />
          ), nobody wanted to do this task for a long while. So be patient, we are trying to get it
          done.
        </p>
      ),
      isOpen: false,
    },
    {
      section: 'open-source',
      question: 'Can I build an own project based on Memoriter?',
      answer: (
        <p>
          Sure, you can use the source code of Memoriter for your own pupuses. That is one part of
          the aspects of open source. Please remember the code is licensed under the{' '}
          <a
            href='https://github.com/MemoriterApp/MemoriterWebsite/blob/main/LICENSE'
            target='_blank'
            rel='noreferrer'
          >
            GNU General Public License v3.0
          </a>
          . We would also appreciate attribution when using our work.
        </p>
      ),
      isOpen: false,
    },
    // Legal
    {
      section: 'legal',
      question: 'What is the current legal status of Memoriter?',
      answer: (
        <p>
          We are no formal organization yet. Currently the Project is represented by us individual
          people, but we might create one in the future.
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
        <h1>Frequently Asked Questions</h1>

        <h2 id='general'>General FAQ</h2>
        {/*displays a list for a section of questions*/}
        {questions
          .filter((question) => question.section === 'general')
          .map((question) => (
            <HelpQuestion
              styles={styles}
              key={question.question}
              question={question}
              onOpenQuestion={openQuestion}
            />
          ))}

        <h2 id='account'>Account</h2>
        {/*displays a list for a section of questions*/}
        {questions
          .filter((question) => question.section === 'account')
          .map((question) => (
            <HelpQuestion
              styles={styles}
              key={question.question}
              question={question}
              onOpenQuestion={openQuestion}
            />
          ))}

        <h2 id='donating'>Donating</h2>
        {/*displays a list for a section of questions*/}
        {questions
          .filter((question) => question.section === 'donating')
          .map((question) => (
            <HelpQuestion
              styles={styles}
              key={question.question}
              question={question}
              onOpenQuestion={openQuestion}
            />
          ))}

        <h2 id='open-source'>Open Source</h2>
        {/*displays a list for a section of questions*/}
        {questions
          .filter((question) => question.section === 'open-source')
          .map((question) => (
            <HelpQuestion
              styles={styles}
              key={question.question}
              question={question}
              onOpenQuestion={openQuestion}
            />
          ))}

        <h2 id='legal'>Legal</h2>
        {/*displays a list for a section of questions*/}
        {questions
          .filter((question) => question.section === 'legal')
          .map((question) => (
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