import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import { PieChart } from 'react-minimal-pie-chart';
import * as styles from '../../styles/donate/donate-statistics.module.scss';

const DonateStatistics: FC = () => {
  const sectionStyles: React.CSSProperties = { //custom styles for the sections of the chart
    cursor: 'pointer',
    transition: 'opacity 400ms',
  };
  const sectionStylesHover: React.CSSProperties = { //styles for the opacity effect on hover
    opacity: '0.5',
    cursor: 'pointer',
    transition: 'opacity 400ms',
  };

  const data: { value: number; color: string }[] = [ //data and configuration used by the pie chart
    {
      value: 4, //amount of money (in €)
      color: 'var(--color-highlight-gradient-green)', //color of the data
    },
    {
      value: 3,
      color: 'var(--color-highlight-gradient-blue)',
    },
    {
      value: 2,
      color: 'var(--color-container-button)',
    },
    {
      value: 1,
      color: 'var(--color-container)',
    },
  ];

  const dataSum = data.reduce(
    (index: number, items: { value: number; color: string }) => index + items.value,
    0
  ); //sum of all data values

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
  }

  return (
    <section className={styles.donate_statistics}>
      {/*interactive pie chart*/}
      <PieChart
        className={styles.donate_statistics_chart}
        startAngle={-90}
        radius={50}
        lineWidth={28}
        segmentsStyle={(index: number) =>
          index !== onHover && onHover !== null ? sectionStylesHover : sectionStyles
        }
        paddingAngle={1.2}
        data={data}
        onMouseOver={(_: React.MouseEvent, index: number) => {
          setOnHover(index);
          setContentSet(false);
        }}
        onMouseOut={() => {
          setOnHover(null);
          setTimeout(() => {
            setContentSet(false);
          }, 50); //setTimeout is used to fix the short change between the gaps
        }}
      />
      {/*chart label*/}
      <article className={styles.donate_statistics_chart_label}>
        {changeContent === 0 ? (
          <>
            <h3 style={{ color: data[0].color }}>{data[0].value}€</h3>
            <p>Spending</p>
          </>
        ) : changeContent === 1 ? (
          <>
            <h3 style={{ color: data[1].color }}>{data[1].value}€</h3>
            <p>Spending</p>
          </>
        ) : changeContent === 2 ? (
          <>
            <h3 style={{ color: data[2].color }}>{data[2].value}€</h3>
            <p>Spending</p>
          </>
        ) : changeContent === 3 ? (
          <>
            <h3 style={{ color: data[3].color }}>{data[3].value}€</h3>
            <p>Spending</p>
          </>
        ) : (
          <>
            <h3>{dataSum}€</h3>
            <p>Total Spending</p>
          </>
        )}
      </article>

      {/*variable content next to the chart*/}
      <article className={styles.donate_statistics_section}>
        {changeContent === 0 ? (
          <>
            <h2 style={{ color: data[0].color }}>Product Development</h2>
            <p>Sometimes we need ressources or help from external people for example:</p>
            <ul>
              <li className={styles.donate_statistics_section_default}>Small design tasks</li>
              <li className={styles.donate_statistics_section_default}>Computer Science Books</li>
              <li className={styles.donate_statistics_section_default}>Licenses</li>
            </ul>
          </>
        ) : changeContent === 1 ? (
          <>
            <h2 style={{ color: data[1].color }}>Server costs</h2>
            <p>It costs money to keep the servers running.</p>
            <ul>
              <li className={styles.donate_statistics_section_default}>Firebase costs</li>
              <li className={styles.donate_statistics_section_default}>Open.ai API</li>
              <li className={styles.donate_statistics_section_default}>Google cloud functions</li>
            </ul>
          </>
        ) : changeContent === 2 ? (
          <>
            <h2 style={{ color: data[2].color }}>Marketing</h2>
            <p>To make memoriter accessible to more people we need money.</p>
            <ul>
              <li className={styles.donate_statistics_section_default}>Creating ads</li>
              <li className={styles.donate_statistics_section_default}>Renting ad</li>
            </ul>
          </>
        ) : changeContent === 3 ? (
          <>
            <h2 style={{ color: data[3].color }}>Others</h2>
            <p>Sometimes costs come up in unpredicted places</p>
            
          </>
        ) : (
          <>
            <h2>Spending Overview</h2>
            <p>How we spend your money:</p>
            <ul>
              <li className={styles.donate_statistics_section_0}>
                Product Development: <b>{data[0].value}€</b>
              </li>
              <li className={styles.donate_statistics_section_1}>
                Server costs: <b>{data[1].value}€</b>
              </li>
              <li className={styles.donate_statistics_section_2}>
                Marketing: <b>{data[2].value}€</b>
              </li>
              <li className={styles.donate_statistics_section_3}>
                Others: <b>{data[3].value}€</b>
              </li>
            </ul>
            <p style={{ color: 'var(--color-font-gray)' }}>
              Hover over the chart for more details.
            </p>
          </>
        )}
      </article>

      {/*fixed description*/}
      <article className={styles.donate_statistics_section}>
        <h2>Key principles</h2>
        <div className={styles.donate_statistics_section_box}>
          We can assure you, that we will probably not spend your money on cocain and hookers. 
        </div>
        <p>
          All of the money earned will be reinvested into the project. Memoriter acts as a non-profit. 
          All of us work for free and will use the money only for absolutely necessary things.
        </p>
      </article>

      {/*text at the bottom*/}
      <article className={styles.donate_statistics_section_bottom_text}>
        <p>
          <Link to='/faq#donating'>Please check out the FAQ</Link>.
        </p>
      </article>
    </section>
  );
};
export default DonateStatistics;