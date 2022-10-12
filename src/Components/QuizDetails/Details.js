import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestions from '../SingleQuestions/SingleQuestions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
    const details = useLoaderData()

    const { name, questions } = details.data

    // let correct = []
    // console.log(questions)


    const [answer, setAnswer] = useState([])
    const correctBtn = (ans) => {
        setAnswer(ans)
      





        if (ans === questions[0]?.correctAnswer) {

           
            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[1]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[2]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[3]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[4]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[5]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[6]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[7]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[8]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[9]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }
        else if (ans === questions?.[10]?.correctAnswer) {

            toast.dark('Your Answer is Correct')

        }

        else {

            toast.dark('Your Answer is Wrong')
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