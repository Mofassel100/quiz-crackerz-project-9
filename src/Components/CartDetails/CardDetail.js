import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QiestDetail from './QiestDetails/QiestDetail';

const CardDetail = () => {
    const loadData = useLoaderData()
    const allQiestionDataLoad = loadData.data;
    const { name, questions } = allQiestionDataLoad;
    return (
        <div>
            <div>
                <h1 className='text-5xl text-lime-500 '>{name}</h1>
                <div>
                    {questions.map(allQiestion => <QiestDetail key={allQiestion.id} allQiestion={allQiestion} name={name}></QiestDetail>)}
                </div>
            </div>
        </div>
    );
};

export default CardDetail;