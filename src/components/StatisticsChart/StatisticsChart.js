import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsChart = () => {
    const statistics = useLoaderData().data
    //console.log(statistics.data);
    return (
        <div>
            <LineChart width={500} height={400} data={statistics}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                  <XAxis dataKey="name" />
                    <YAxis />
            </LineChart>
        </div>
    );
};

export default StatisticsChart;
