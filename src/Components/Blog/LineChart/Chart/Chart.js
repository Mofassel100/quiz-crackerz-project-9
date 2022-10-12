import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis,YAxis } from 'recharts';
const Chart = ({chartData}) => {
    console.log(chartData)
    return (
        <div>
        <ResponsiveContainer width='90%' aspect={3}>
            <LineChart data={chartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis dataKey='total'></YAxis>
                <Line dataKey='total'>
                </Line>
            </LineChart>
        </ResponsiveContainer>  
        </div>
    );
};

export default Chart;