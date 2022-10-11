import React from 'react';

const SingleQuestions = ({ question, correctBtn }) => {


    return (
        <div className='border shadow-2xl p-5 m-5 '>
            <h1 className='bg-orange-400 mt-5 lg:h-20 rounded-lg text-xl' >{question.question}</h1>
            <div className='lg:grid grid-cols-2 lg:h-32 lg:mt-2 '>
                <h2 className='bg-purple-100 rounded-full shadow-xl mb-2 text-lg  ' onClick={() => correctBtn(question?.options[0])}>  <input type="radio" value="Male" name="gender" /> {question?.options[0]}</h2>
                <h2 className='bg-purple-100 rounded-full shadow-xl mb-2 text-lg' onClick={() => correctBtn(question?.options[1])}>  <input type="radio" value="Male" name="gender" /> {question?.options[1]}</h2>
                <h2 className='bg-purple-100 rounded-full shadow-xl text-lg' onClick={() => correctBtn(question?.options[2])}>  <input type="radio" value="Male" name="gender" /> {question?.options[2]}</h2>
                <h2 className='bg-purple-100 rounded-full shadow-xl text-lg' onClick={() => correctBtn(question?.options[3])}>  <input type="radio" value="Male" name="gender" /> {question?.options[3]}</h2>

            </div>
        </div >
    );
};

export default SingleQuestions;

