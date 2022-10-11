import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestions from '../SingleQuestions/SingleQuestions';

const Details = () => {
    const details = useLoaderData()

    const { name, questions } = details.data

    // let correct = []
    // console.log(questions)


    const [answer, setAnswer] = useState([])
    const correctBtn = (ans) => {
        setAnswer(ans)
        console.log(ans)





        if (ans === questions[0]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[1]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[2]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[3]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[4]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[5]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[6]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[7]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[8]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[9]?.correctAnswer) {

            alert('correct')

        }
        else if (ans === questions?.[10]?.correctAnswer) {

            alert('correct')

        }
    
        else {

            alert('false')
        }

    }



    return (
        <div>
            <div>
                <h1 className='text-4xl mt-5 text-purple-700 font-bold'>Questions about {name} </h1>
            
                <div>
                    {

                        questions.map(ques => <SingleQuestions key={ques.id} question={ques} correctBtn={correctBtn}></SingleQuestions>)


                    }
                </div>


            </div>
        </div>
    );
};

export default Details;