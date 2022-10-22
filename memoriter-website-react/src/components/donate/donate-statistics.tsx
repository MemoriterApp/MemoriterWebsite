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
            value: 4, //amount of money (in €)
            color: 'var(--color-highlight-gradient-green)' //color of the data
        },
        {
            value: 3,
            color: 'var(--color-highlight-gradient-blue)'
        },
        {
            value: 2,
            color: 'var(--color-container-button)'
        },
        {
            value: 1,
            color: 'var(--color-container)'
        }
    ];

    const dataSum = data.reduce((index: number, items: {value: number, color: string}) => index + items.value, 0); //sum of all data values

    const [onHover, setOnHover] = useState<number | null>(null); //state if a section of the chart is hovered over
    const [changeContent, setChangeContent] = useState<number | null>(null); //state to set the current label and content section
    const [contentSet, setContentSet] = useState<boolean>(true); //state to check if the content is set to prevent an infite loop

    //conditional statement to set the label and section based on the section hovered over
    if (onHover !== null && !contentSet) {
        setChangeContent(onHover);
        setContentSet(true);
    } else if (!contentSet) {
        setChangeContent(null);
        setContentSet(true);
    };

    return (
        <section className='donate-statistics'>
            {/*interactive pie chart*/}
            <PieChart
                className='donate-statistics-chart'
                startAngle={-90}
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
                {changeContent === 0 ? (<>
                    <h3 style={{color : data[0].color}}>{data[0].value}€</h3><p>Spending</p>
                </>) : changeContent === 1 ? (<>
                    <h3 style={{color : data[1].color}}>{data[1].value}€</h3><p>Spending</p>
                </>) : changeContent === 2 ? (<>
                    <h3 style={{color : data[2].color}}>{data[2].value}€</h3><p>Spending</p>
                </>) : changeContent === 3 ? (<>
                    <h3 style={{color : data[3].color}}>{data[3].value}€</h3><p>Spending</p>
                </>) : (<>
                    <h3>{dataSum}€</h3><p>Total Spending</p>
                </>)}
            </article>

            {/*content next to the chart*/}
            <article className='donate-statistics-section'>
                {changeContent === 0 ? (<>
                
                </>) : changeContent === 1 ? (<>
                    
                </>) : changeContent === 2 ? (<>
                    
                </>) : changeContent === 3 ? (<>
                    
                </>) : (<>
                    <h2>Placehloder</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit:
                    </p>
                    <ul>
                        <li className='donate-statistics-section-0'>
                            Category 0: <b>{data[0].value}€</b>
                        </li>
                        <li className='donate-statistics-section-1'>
                            Category 1: <b>{data[1].value}€</b>
                        </li>
                        <li className='donate-statistics-section-2'>
                            Category 2: <b>{data[2].value}€</b>
                        </li>
                        <li className='donate-statistics-section-3'>
                            Category 3: <b>{data[3].value}€</b>
                        </li>
                    </ul>
                </>)}
            </article>
            <article className='donate-statistics-section'>
                <h2>Placeholder</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, voluptas at sint necessitatibus non sed rem doloribus praesentium laboriosam iste fugit impedit, nam commodi dolorem dignissimos obcaecati quae. Neque, libero.
                </p>
            </article>
        </section>
    );
}

export default DonateStatistics;