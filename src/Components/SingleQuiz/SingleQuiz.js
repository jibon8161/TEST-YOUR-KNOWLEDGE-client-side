import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleQuiz = ({ quiz }) => {

    const { name, logo, id, total } = quiz

    const navigate = useNavigate()
    const detailsBtn = () => {


        navigate(`/details${id}`)

    }
    return (
        <div>
            <div >


                < div className="card card-compact w-[300px]  shadow-xl bg-black mb-5">
                    <figure><img src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">{name}</h2>
                        <p className='text-white'> Total:{total}</p>
                        <div className="card-actions justify-end">
                            <button onClick={detailsBtn} className="btn btn-primary ">Start Quiz <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            </button>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default SingleQuiz;