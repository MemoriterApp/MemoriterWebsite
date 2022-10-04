import React, { FC } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const DonateStatistics: FC = () => {

    const data: {title: string, value: number, color: string}[] = [ //data and configuration used by the pie chart
        {
            title: '', //data name
            value: 35, //portion in percent
            color: 'var(--color-highlight-gradient-blue)' //color of the data
        },
        {
            title: '',
            value: 30,
            color: 'var(--color-container-button)'
        },
        {
            title: '',
            value: 20,
            color: 'var(--color-container)'
        },
        {
            title: '',
            value: 15,
            color: 'var(--color-highlight-gradient-green)'
        }
    ];

    return (
        <section>
            <PieChart
                radius={20}
                lineWidth={30}
                data={data}
            />
        </section>
    );
}

export default DonateStatistics;