import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';



const Chart = ({chartData}) => {
    
    
    
    return (
        <div>
        <ResponsiveContainer width='90%' aspect={3}>
            <LineChart data={chartData}>
                <XAxis dataKey='name'></XAxis>
                <Line dataKey='total'>

                </Line>

            </LineChart>
            

        </ResponsiveContainer>
            
        </div>
    );
};

export default Chart;