import {  faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ learningData }) => {
    const { logo, name, id } = learningData;
    return (
        <div className='grid gap-3 mx-auto my-2'>
            <div className="card w-96 bg-emerald-500 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl my-3 text-white">{name}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary text-xl"><Link to={`/cart/${id}`}
                        >Practice Details <FontAwesomeIcon className='text-white text-2xl ml-2' icon={faTerminal}></FontAwesomeIcon></Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;