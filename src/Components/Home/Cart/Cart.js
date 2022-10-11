import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Cart = ({ learningData }) => {
    const data = useLoaderData()
    // console.log(data)
    // console.log(learningData)
    const { logo, name, id, total } = learningData;
    return (
        <div>
            


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>

                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`cartdetails/${id}`} aria-labal='View Item'>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;