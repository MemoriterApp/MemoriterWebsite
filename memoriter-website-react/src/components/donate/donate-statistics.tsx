import React, { FC, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const DonateStatistics: FC = () => {

    const sectionStyles: React.CSSProperties = { //custom styles for the sections of the chart
        cursor: 'pointer',
        transition: 'opacity 400ms'
    };
    const sectionStylesHover: React.CSSProperties = { //styles for the opacity effect on hover
        opacity: '0.5',
        cursor: 'pointer',
        transition: 'opacity 400ms'
    };

    const data: {title: string, value: number, color: string}[] = [ //data and configuration used by the pie chart
        {
            title: '', //data name
            value: 35, //amount of money
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

    const [onHover, setOnHover] = useState<number | null>(null); //state if a section of the chart is hovered

    return (
        <section>
            <PieChart
                className='donate-statistics-chart'
                radius={50}
                lineWidth={25}
                segmentsStyle={(index: number) => (
                    index !== onHover && onHover !== null ? sectionStylesHover : sectionStyles
                )}
                paddingAngle={1.2}
                data={data}
                onMouseOver={(_: React.MouseEvent, index: number) => {
                    setOnHover(index);
                }}
                onMouseOut={() => {
                    setOnHover(null);
                }}
            />
        </section>
    );
}

export default DonateStatistics;