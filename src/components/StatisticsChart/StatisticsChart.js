import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const StatisticsChart = () => {
    const statistics = useLoaderData()
    console.log(statistics.data);
    return (
        <div>
            {
                statistics.data.map(statistic => <Chart key={statistic.id} statistic={ statistic}></Chart>)
            }
        </div>
    );
};

export default StatisticsChart;
