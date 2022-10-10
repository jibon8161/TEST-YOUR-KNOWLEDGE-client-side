import React, { useContext } from 'react';
import { QuizContext } from '../Main/Main';
import SingleQuiz from '../SingleQuiz/SingleQuiz';


const Quiz = () => {

    const allQuiz = useContext(QuizContext)


    return (
        <div className='lg:grid grid-cols-3 ml-44 gap-5 mt-5 shadow-2xl'>
            {

                allQuiz.data.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>)

            }
        </div>
    );
};

export default Quiz;