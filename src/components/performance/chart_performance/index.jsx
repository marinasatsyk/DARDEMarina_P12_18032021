//@ts-check
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Legend,
} from 'recharts';

/**
 * ChartPerformance builde  radarChart of performance
 * @param {Object} props
 * @returns {React.ReactElement}
 */

function ChartPerformance({ data }) {
    const kind_entries = Object.entries(data.kind);

    /**
     *   temp_data_perform returns data in format conform for radarChart
     * @type {Array}
     */
    const temp_data_perform = data.data.map((item) => {
        for (let i = 0; i < kind_entries.length; i++) {
            if (item.kind === i + 1) {
                item.kind = kind_entries[i][1];
            }
        }
        return item;
    });

    /**
     * reverse order and change language
     * @type {Array}
     */

    const data_perform = temp_data_perform
        .map((item) => {
            if (item.kind === 'cardio') {
                item.kind = 'Cardio';
            }
            if (item.kind === 'energy') {
                item.kind = 'Energie';
            }
            if (item.kind === 'endurance') {
                item.kind = 'Endurance';
            }
            if (item.kind === 'strength') {
                item.kind = 'Force';
            }

            if (item.kind === 'speed') {
                item.kind = 'Vitesse';
            }
            if (item.kind === 'intensity') {
                item.kind = 'Intensité';
            }
            return item;
        })
        .reverse();

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={data_perform}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{
                            fontSize: '12px',
                        }}
                        stroke="#fff"
                        tickLine={false}
                        axisLine={false}
                    />
                    <PolarRadiusAxis domain={[0, 'dataMax']} stroke="none" />
                    <Radar
                        dataKey="value"
                        stroke="none"
                        fill="#E60000"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
}

ChartPerformance.propTypes = {
    data: PropTypes.object.isRequired,
};
export default ChartPerformance;
