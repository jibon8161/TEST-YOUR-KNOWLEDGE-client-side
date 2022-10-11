import React from 'react';

import Quiz from '../Quiz/Quiz';




const Home = () => {



    return (
        <div>
            <div className='lg:flex justify-around lg:mt-5 border mt-16'>
                <div >
                    <img className='w-[600px] h-48 rounded-2xl shadow-2xl' src="https://img.lovepik.com/element/40133/8322.png_300.png" alt="" />

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