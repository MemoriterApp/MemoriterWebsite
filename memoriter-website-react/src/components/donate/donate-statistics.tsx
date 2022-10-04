import React, { FC } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const DonateStatistics: FC = () => {
    return (
        <section>
            <PieChart
                radius={20}
                lineWidth={30}
                data={[
                    { title: 'One', value: 35, color: 'var(--color-highlight-gradient-green)' },
                    { title: 'Four', value: 30, color: 'var(--color-container-button)' },
                    { title: 'Three', value: 20, color: 'var(--color-container)' },
                    { title: 'Two', value: 15, color: 'var(--color-highlight-gradient-blue)' }
                ]}
            />
        </section>
    );
}

export default DonateStatistics;