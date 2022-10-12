import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-full bg-neutral text-neutral-content m-4 mr-5">

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl"> What is the purpose of the react router ?</h2>
                    <p><span className='text-green-500 text-3xl'>Ans :</span>React router discussion start now. ReactJS Router is mainly used for developing Single Page Web Applications.React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl">How does context api works ?
                    </h2>
                    <p><span className='text-green-500 text-3xl'>Ans :</span>The Context API gives you a dependency injection system based on your component tree. This wasn’t possible in React before and it also integrates very well with function components and hooks. As we saw above it was easy to implement encapsulated logic for the translated options with react-intl, which also uses context internally. In situations where you have logic and configuration that needs to be accessed by multiple components but doesn’t interact with or depend on external modules, writing your own contexts can be beneficial.</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl">How does useRef works in React ?</h2>
                    <p><span className='text-green-500 text-3xl'>Ans :</span> It can be used to access a DOM element directly.UseRef returns a mutable ref object whose current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;