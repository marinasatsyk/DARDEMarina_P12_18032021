//@ts-check

import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * ChartSessions returns Linechart of sessions
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function ChartSessions({ data }) {
    function CustomToolTip({ active, payload }) {
        if (active) {
            return (
                <div
                    style={{
                        padding: '3px 5px',
                        borderRadius: '2px',
                        background: '#FFF',
                        margin: 'auto',
                    }}
                >
                    <p style={{ fontSize: '10px' }}>{payload[0].value} min</p>
                </div>
            );
        }
        return null;
    }

    const renderLegend = () => {
        return (
            <div
                style={{
                    color: '#FFF',
                    padding: '0 5%',
                    opacity: '0.5',
                }}
            >
                <p style={{ fontSize: '.9rem', fontWeight: 'bolder' }}>
                    Durée moyenne des sessions
                </p>
            </div>
        );
    };

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    // @ts-ignore
                    onMouseMove={(e) => {
                        if (e.isTooltipActive === true) {
                            let div = document.querySelector('.wrap_sessions');
                            //@ts-ignore
                            let windowWidth = div.clientWidth;
                            let mouseXpercentage = Math.round(
                                //@ts-ignore
                                (e.activeCoordinate.x / windowWidth) * 100
                            );
                            // @ts-ignore
                            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                        }
                    }}
                >
                    <defs>
                        <linearGradient
                            id="colorLine"
                            x1="0%"
                            y1="0"
                            x2="100%"
                            y2="0"
                        >
                            <stop offset="0%" stopColor="#FFF" />
                            <stop offset={`${0}%`} stopColor="red" />
                            <stop offset={`${100}%`} stopColor="#FFF" />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        height={30}
                        tick={{ fill: '#FFF', opacity: 0.5 }}
                        tickSize={12}
                        padding={{ left: 10, right: 10 }}
                        tickFormatter={(day) => {
                            const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
                            return `${weekday[day - 1]}`;
                        }}
                        allowDataOverflow={false}
                    />
                    <Tooltip
                        content={<CustomToolTip active={true} payload={data} />}
                        cursor={false}
                    />
                    <Legend
                        verticalAlign="top"
                        align="left"
                        content={renderLegend}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        dot={false}
                        activeDot={{ fill: '#FFF' }}
                        strokeWidth={2}
                        stroke="url(#colorLine)"
                        overflow="hidden"
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

ChartSessions.propTypes = {
    data: PropTypes.array.isRequired,
};
export default ChartSessions;
