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
    // console.log(kind_entries);
    //return data in format conform for radarChart
    const temp_data_perform = data.data.map((item) => {
        for (let i = 0; i < kind_entries.length; i++) {
            if (item.kind === i + 1) {
                item.kind = kind_entries[i][1];
            }
        }
        return item;
    });
    console.log('temp_data_perform');
    console.log(temp_data_perform);
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
    console.log('*****************data_perform reverse');
    console.log(data_perform);

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
                    <PolarRadiusAxis
                        domain={[0, 'dataMax']}
                        stroke="none"
                        // tick={false}
                    />
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
export default ChartPerformance;
