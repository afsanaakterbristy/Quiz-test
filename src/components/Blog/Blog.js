import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
             <div className='blog'>
            <h3>1.what is the perpose of react router?</h3>
            <p>Ans:React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different route s as it changes, and it also gives you tools to update the location using link s and the history API.</p>
            <h3>2.How dose context api work?</h3>
            <p>Ans:Context provides a way to pass data through the component tree without having to pass props down manually at every level.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management</p>
            <h3>3.How does useref work in react?</h3>
            <p>Ans:The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
        </div>
        </div>
    );
};

export default Blog;