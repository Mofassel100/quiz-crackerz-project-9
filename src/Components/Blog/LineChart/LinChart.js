import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart/Chart';

const LinChart = () => {
    const quizdata= useLoaderData()
    const chartData = quizdata.data;
    return (
        <div>
            <div>
               
                <div>
                    <h1> ami</h1>
                    {<Chart chartData={chartData} key='dd'></Chart>}</div>
               
            </div>
            
        </div>
    );
};

export default LinChart;