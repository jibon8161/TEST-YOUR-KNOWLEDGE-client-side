import React from 'react';

import Quiz from '../Quiz/Quiz';




const Home = () => {



    return (
        <div>
            <div className='lg:mt-5 mt-16  '>
                <div >
                    <img className=' ml-20 w-52 lg:w-[800px] md:w-[300px] lg:h-full rounded-2xl shadow-2xl md:ml-56 lg:mx-auto' src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/11/23171530/Competitive-Exams-after-12th-800x500.png" alt="" />

                </div>
                <div>
                    <h1 className='lg:text-2xl mt-10 lg:mr-5 font-bold lg:ml-5 mx-auto md:mr-10 '>ARE YOU READY <br /> FOR YOUR FIRST CHALLANGE  <span className='lg:text-4xl text-red-700'>?</span></h1>
                </div>

            </div>


            <Quiz></Quiz>

        </div>
    );
};

export default Home;