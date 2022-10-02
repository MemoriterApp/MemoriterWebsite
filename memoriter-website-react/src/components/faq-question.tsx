import React, { FC, useState, useEffect, useRef } from 'react';

interface props { //type definitions for props
    question: {question: string, answer: string, isOpen: boolean};
    onOpenQuestion: (openedQuestion: string) => void;
};

const FaqQuestion: FC<props> = ({ question, onOpenQuestion }: props) => {

    const questionText = useRef<any>(null); //reference to the question text
    const answerText = useRef<any>(null); //reference to the answer text

    const [questionHeight, setQuestionHeight] = useState<number>(32); //gets height of the question text
    const [answerHeight, setAnswerHeight] = useState<number>(0); //gets height of the answer text

    useEffect((): void => { //useEffect is needed to fix an issue where the value cannot is read before the component renderes, resulted in an error
        setQuestionHeight(questionText.current.clientHeight); //defines the question text height
        setAnswerHeight(answerText.current.clientHeight); //defines the answer text height
    }, []);

    const [open, setOpen] = useState<string>(`calc(${questionHeight}px - 12px)`); //height of container
    const [openAnimation, setOpenAnimation] = useState<string>(''); //transition for container height (fixes auto transition on page load)
    const [answerOpen, setAnswerOpen] = useState<string>('0'); //answer text vivibility
    const [arrowRotation, setarrowRotation] = useState<string>(''); //rotation of the arrow on the right
    const [arrowOpacity, setArrowOpacity] = useState<string>('1'); //opacity of the arrow on the right

    if (question.isOpen === true) { //if a question is opened the styles are changing
        if (open === `calc(${questionHeight}px - 12px)`) { //second condition prevents infinite loop
            setOpen(`calc(${questionHeight}px + ${answerHeight}px + 10px)`); //height depends on answer text length
            setOpenAnimation('height 400ms, background-color 200ms'); //adds height transition
            setAnswerOpen('1');

            setArrowOpacity('0');

            setTimeout(() => { //timeout used for animation, time in ms
                setarrowRotation('rotate(225deg)');
                setArrowOpacity('1');
            }, 400);
        };
    } else { //if a question is closed the styles are changing back
        if (open !== `calc(${questionHeight}px - 12px)`) { //second condition prevents infinite loop
            setOpen(`calc(${questionHeight}px - 12px)`); //sets back to default height
            setAnswerOpen('0');

            setArrowOpacity('0');

            setTimeout(() => { //timeout used for animation, time in ms
                setOpenAnimation(''); //removes height transition

                setarrowRotation('');
                setArrowOpacity('1');
            }, 400);
        };
    };

    return (
        <article className='faq-question' style={{height: open, transition: openAnimation}} onClick={() => onOpenQuestion(question.question)}>

            <h3 className='faq-question-question' ref={questionText}>{question.question}</h3>
            <p className='faq-question-answer' ref={answerText} style={{opacity: answerOpen}}>{question.answer}</p>

            <div className='faq-question-open' style={{transform: arrowRotation, opacity: arrowOpacity}}/> {/*arrow at the top right*/}

        </article>
    );
}

export default FaqQuestion;