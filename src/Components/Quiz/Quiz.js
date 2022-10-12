import React, { useContext } from 'react';
import { QuizContext } from '../Main/Main';
import SingleQuiz from '../SingleQuiz/SingleQuiz';


const Quiz = () => {

    const allQuiz = useContext(QuizContext)


    return (
        <div className='lg:grid grid-cols-3  lg:ml-52 gap-5 lg:mt-5 shadow-2xl lg:w-[1100px] ml-12 mt-5 md:ml-52  '>
            {

                allQuiz.data.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>)

            }
        </div>
    );
};

export default Quiz;