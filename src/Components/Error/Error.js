import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    const btnBack =()=>{

navigate('/topics')


    }

    return (
        <div className='flex justify-around'>
            <div>
                <img className='w-[600px] ' src="https://img.freepik.com/premium-vector/sad-woman-working-laptop-from-home-error-message-vector-cartoon-character_499739-840.jpg?w=2000" alt="" />
            </div>
            <div>
                <h1 className='mt-32 text-9xl text-red-600'>{error.status}</h1>
                <h1 className='text-9xl text-red-600'>{error.statusText}</h1>
                <button onClick={btnBack} className="btn btn-accent mt-5 w-32">Back to Quiz</button>
            </div>
        </div>
    );
};

export default Error;