import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title  text-3xl text-red-800 font-bold">
                    What is the purpose of react router?(click here)
                </div>
                <div className="collapse-content text-xl font-medium">
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Without router, either the root component or state would be messy and hard to maintain.React Router provides three different kinds of routers: Memory Router. Browser Router. Hash Router.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title  text-3xl text-red-800 font-bold">
                    How does context api works?(click here)
                </div>
                <div className="collapse-content text-xl font-medium">
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title  text-3xl text-red-800 font-bold">
                    what is useref hook in react?(click here)
                </div>
                <div className="collapse-content text-xl font-medium">
                    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;