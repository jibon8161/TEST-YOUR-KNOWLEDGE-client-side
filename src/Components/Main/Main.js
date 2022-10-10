import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Nav } from '../Navbar/Nav';

export const QuizContext = createContext()


const Main = () => {
    const allQuiz = useLoaderData()
    return (
        <QuizContext.Provider value={allQuiz} >
            <div>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
        </QuizContext.Provider>
    );
};

export default Main;