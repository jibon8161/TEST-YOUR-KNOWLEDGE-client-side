import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Statics from "../Components/Chart/Statics";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Quiz from "../Components/Quiz/Quiz";
import Details from "../Components/QuizDetails/Details";


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

                path: '/topics',
                element: <Quiz></Quiz>

            },
            {

                path: '//details:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)

            },

            {

                path: '/statics',
                element: <Statics></Statics>

            },
            {

                path: '/blog',
                element: <Blog></Blog>

            },






        ]

    }








])