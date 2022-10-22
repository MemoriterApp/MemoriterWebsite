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

    const data: {value: number, color: string}[] = [ //data and configuration used by the pie chart
        {
            value: 200, //amount of money
            color: 'var(--color-highlight-gradient-blue)' //color of the data
        },
        {
            value: 120,
            color: 'var(--color-container-button)'
        },
        {
            value: 80,
            color: 'var(--color-container)'
        },
        {
            value: 150,
            color: 'var(--color-highlight-gradient-green)'
        }
    ];

    const dataSum = data.reduce((index: number, items: {value: number, color: string}) => index + items.value, 0); //sum of all data values

    const [onHover, setOnHover] = useState<number | null>(null); //state if a section of the chart is hovered over
    const [label, setLabel] = useState<React.ReactNode>( //state to set the current label
        <><h3>{dataSum}€</h3><p>Total Spending</p></>
    );
    const [contentSet, setContentSet] = useState<boolean>(true); //state to check if the content is set to prevent an infite loop

    //conditional statement to set the label based on the section hovered over
    if (onHover === 0 && ! contentSet) {
        setLabel(<><h3 style={{color : data[0].color}}>{data[0].value}€</h3><p>Spending</p></>);
        setContentSet(true);
    } else if (onHover === 1 && ! contentSet) {
        setLabel(<><h3 style={{color : data[1].color}}>{data[1].value}€</h3><p>Spending</p></>);
        setContentSet(true);
    } else if (onHover === 2 && ! contentSet) {
        setLabel(<><h3 style={{color : data[2].color}}>{data[2].value}€</h3><p>Spending</p></>);
        setContentSet(true);
    } else if (onHover === 3 && ! contentSet) {
        setLabel(<><h3 style={{color : data[3].color}}>{data[3].value}€</h3><p>Spending</p></>);
        setContentSet(true);
    } else if (!contentSet) {
        setLabel(<><h3>{dataSum}€</h3><p>Total Spending</p></>);
        setContentSet(true);
    };

    return (
        <section className='donate-statistics'>
            {/*interactive pie chart*/}
            <PieChart
                className='donate-statistics-chart'
                radius={50}
                lineWidth={28}
                segmentsStyle={(index: number) => (
                    index !== onHover && onHover !== null ? sectionStylesHover : sectionStyles
                )}
                paddingAngle={1.2}
                data={data}
                onMouseOver={(_: React.MouseEvent, index: number) => {
                    setOnHover(index);
                    setContentSet(false);
                }}
                onMouseOut={() => {
                    setOnHover(null);
                    setTimeout(() => {setContentSet(false)}, 50); //setTimeout is used to fix the short change between the gaps 
                }}
            />
            {/*chart label*/}
            <article className='donate-statistics-chart-label'>
                {label}
            </article>

            {/*content next to the chart*/}
            <article>
                <h2>LOL</h2>
                <p>LOL</p>
            </article>
            <article>
                <h2>LOL</h2>
                <p>LOL</p>
            </article>
        </section>
    );
}

export default DonateStatistics;