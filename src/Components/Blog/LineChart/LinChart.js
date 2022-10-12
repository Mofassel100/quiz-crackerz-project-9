import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart/Chart';
const LinChart = () => {
    const quizdata = useLoaderData()
    const chartData = quizdata.data;
    return (
        <div>
            <div>
                <div className='my-3'>
                    <h1 className='text-violet-700 text-3xl my-4'> Line Chart</h1>
                    {<Chart chartData={chartData} key='dd'></Chart>}</div>
            </div>
        </div>
    );
};

export default LinChart;