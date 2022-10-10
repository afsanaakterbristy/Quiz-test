import React from 'react';

const Chart = ({ statistic }) => {
    const { total } = statistic;
    const data = total;
    console.log(data)
    return (
        <div>
            <h2>{ total}</h2>
        </div>
    );
};

export default Chart;