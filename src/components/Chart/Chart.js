import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ statistic }) => {   

    const { total } = statistic;
    const data = {
        total
       
    };
    
    console.log(data)
    return (
        <div>
            {/* <h2>{total}</h2> */}
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                  <XAxis dataKey="name" />
                    <YAxis />
            </LineChart>
        </div>
    );
};

export default Chart;