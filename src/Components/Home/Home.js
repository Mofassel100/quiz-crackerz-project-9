import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart/Cart';

const Home = ({allData}) => {
    
    const DataLoad = useLoaderData()
    
  
    const QuizData = DataLoad.data;
  
    return (
        <div className='grid grid-cols-1'>
            
                <div className="card card-side bg-violet-500 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/photos/cropped-view-of-group-of-teenagers-taking-a-test-picture-id535847793?s=612x612" alt="Movie" /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Discussion on educational topics</h2>
                        <p>This page is about some quizzes . So we try to learn it.</p>

                    </div>
                    <div>
                     

                    </div>
                </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {QuizData.map(learningData=> <Cart  key={learningData.id} learningData={learningData}></Cart>)}
            </div>

        </div>
    );
};

export default Home;