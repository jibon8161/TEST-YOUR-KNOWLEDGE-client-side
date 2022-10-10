import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Quiz from "../Components/Quiz/Quiz";


export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <h1>error ok</h1>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [

            {

                path: '/',
                element: <Home></Home>

            },
            {

                path: '/home',
                element: <Home></Home>

            },
            {

                path: '/quiz',
                element: <Quiz></Quiz>

            },






        ]

    }








])