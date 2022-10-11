import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart/Cart';

const Home = () => {
    const DataLoad = useLoaderData()
    const QuizData = DataLoad.data;
  
    return (
        <div className='grid grid-cols-1'>
            <div className='container m-5'>
                <div className="card card-side bg-violet-500 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/photos/cropped-view-of-group-of-teenagers-taking-a-test-picture-id535847793?s=612x612" alt="Movie" /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Discussion on educational topics</h2>
                        <p>This page is about some quizzes . So we try to learn it.</p>

                    </div>
                    <div>
                        {/* btn one */}
                        
                        {/* cart two
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        */}
                       

                    </div>
                </div>

            </div>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {QuizData.map(learningData=> <Cart  key={learningData.id} learningData={learningData}></Cart>)}
            </div>

        </div>
    );
};

export default Home;