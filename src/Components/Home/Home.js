import React, { useContext } from 'react';
import { QuizContext } from '../Main/Main';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const allQuiz = useContext(QuizContext)


    return (
        <div>
            <div className='flex justify-around mt-8 border'>
                <div >
                    <img className='w-[700px] h-48 rounded-2xl shadow-2xl' src="https://cdn.pixabay.com/photo/2017/03/12/17/54/quiz-2137664_960_720.jpg" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl mt-10 mr-5 font-bold'>ARE YOU READY <br /> FOR YOUR FIRST CHALLANGE  <span className='text-6xl text-red-700'>?</span></h1>
                </div>

            </div>
       

            <Quiz></Quiz>

        </div>
    );
};

export default Home;