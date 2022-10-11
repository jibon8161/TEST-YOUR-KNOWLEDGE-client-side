import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuestions = ({ question, correctBtn }) => {
    const correctAnsBtn = () => {



        toast.dark(question.correctAnswer)
    }

    return (
        <div className='border shadow-2xl lg:p-5 lg:m-5 lg:w-[1000px] lg:ml-48 '>
            <div className='lg:flex lg:justify-between lg:relative ' >
                <h1 className='bg-orange-400 lg:mt-5 lg:h-20 rounded-lg text-xl lg:w-full' >{question.question}</h1>
                <button onClick={correctAnsBtn} className='lg:absolute lg:top-[-3px] lg:left-[940px] hover:bg-red-600'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
                </button>
            </div>
            <div className='lg:grid lg:grid-cols-2 lg:h-32 lg:mt-2 '>
                <h2 className='bg-purple-100 rounded-full shadow-xl mb-2 text-lg hover:bg-purple-300' onClick={() => correctBtn(question?.options[0])}>  <input type="radio" value="Male" name="gender" /> {question?.options[0]}</h2>
                <h2 className='bg-purple-100 rounded-full shadow-xl mb-2 text-lg  hover:bg-purple-300' onClick={() => correctBtn(question?.options[1])}>  <input type="radio" value="Male" name="gender" /> {question?.options[1]}</h2>
                <h2 className='bg-purple-100 rounded-full shadow-xl text-lg  hover:bg-purple-300' onClick={() => correctBtn(question?.options[2])}>  <input type="radio" value="Male" name="gender" /> {question?.options[2]}</h2>
                <h2 className='bg-purple-100 rounded-full shadow-xl text-lg  hover:bg-purple-300' onClick={() => correctBtn(question?.options[3])}>  <input type="radio" value="Male" name="gender" /> {question?.options[3]}</h2>

            </div>
        </div >
    );
};

export default SingleQuestions;

