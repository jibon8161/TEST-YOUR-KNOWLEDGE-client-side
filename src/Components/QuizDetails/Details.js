import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    console.log(details)
    const { name, questions } = details.data



    return (
        <div>
            <div>

                <h1 className='text-4xl mt-5 text-purple-700 font-bold'>Questions about {name} </h1>
                <div className='flex '>

                    <div >
                        {
                            questions.map(question =>

                                (<h1 className='mt-5'>Quiz 1:{question.question}</h1>))

                        }

                    </div>
                    <div>
                        <button className='ml-5 mt-5'>de</button>
                    </div>

                </div>
                {/* <div className=''>


                    <input type="checkbox" id={questions?.[0]?.id} name="0" value="0"></input>
                    <label for="0"> {questions?.[0]?.options?.[0]}</label><br></br>

                    <input type="checkbox" id={questions?.[1]?.id} name="0" value="0"></input>
                    <label for="0"> {questions?.[0]?.options?.[1]}</label><br></br>

                    <input type="checkbox" id={questions?.[2]?.id} name="0" value="0"></input>
                    <label for="0"> {questions?.[0]?.options?.[2]}</label><br></br>

                    <input type="checkbox" id={questions?.[3]?.id} name="0" value="0"></input>
                    <label for="0"> {questions?.[0]?.options?.[3]}</label><br></br>

                </div> */}

            </div>
        </div>
    );
};

export default Details;