import React, { PureComponent } from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Legend,
} from 'recharts';

function ChartPerformance({ data }) {
    const kind_entries = Object.entries(data.kind);
    //return data in format conform for radarChart
    const data_perform = data.data.map((item) => {
        for (let i = 0; i < kind_entries.length; i++) {
            if (item.kind === i + 1) {
                item.kind = kind_entries[i][1];
            }
        }
        return item;
    });
    console.log(data_perform);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={data_perform}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis />
                    <Radar
                        dataKey="value"
                        stroke="#fff"
                        fill="#fff"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
}
export default ChartPerformance;
