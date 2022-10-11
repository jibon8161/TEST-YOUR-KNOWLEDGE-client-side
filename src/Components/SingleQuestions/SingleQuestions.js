import React from 'react';

const SingleQuestions = ({ question, correctBtn }) => {


    return (
        <div className='border '>
            <h1 className='bg-green-400'>{question.question}</h1>
            <h2 onClick={() => correctBtn(question?.options[0])}>  {question?.options[0]}</h2>
            <h2 onClick={() => correctBtn(question?.options[1])}> {question?.options[1]}</h2>
            <h2 onClick={() => correctBtn(question?.options[2])}> {question?.options[2]}</h2>
            <h2 onClick={() => correctBtn(question?.options[3])}> {question?.options[3]}</h2>
        </div >
    );
};

export default SingleQuestions;

{/* <br /> <button className='mt-5 grid grid-cols-8 gap-5' onClick={() => correctBtn(question.correctAnswer)}> {question.options}</button> */ }