import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart/Chart';

const LinChart = () => {
    const quizdata= useLoaderData()
    const chartData = quizdata.data;
    console.log(chartData)
    return (
        <div>
            <div>
                <h>AMi chart mama</h>
                <div>{<Chart chartData={chartData}></Chart>}</div>
                {/* {chartData.map(linchart =><Chart key={linchart.id} linchart={linchart}></Chart>)} */}
            </div>
            
        </div>
    );
};

export default LinChart;