import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QiestDetail from './QiestDetails/QiestDetail';

const CardDetail = () => {
    const loadData =useLoaderData()
    const allQiestionDataLoad =loadData.data;
    const {name,logo,questions}=allQiestionDataLoad; 
    console.log(allQiestionDataLoad)
    return (
        <div>
            <div>

            <h1 className='text-4xl text-emerald-600'>{name}</h1>
            <div>
                {questions.map(allQiestion=> <QiestDetail key={allQiestion.id} allQiestion={allQiestion}></QiestDetail>)}
            </div>
            </div>
        </div>
    );
};

export default CardDetail;