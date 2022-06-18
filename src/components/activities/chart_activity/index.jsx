import { func } from 'prop-types';
import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.div``;

const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #757575;
    margin-left: 10px;
`;

const Dot = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    align-self: center;
    margin-left: 30px;
`;

function ChartActivity({ data }) {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            getNameOfPage(payload);

            return (
                <div
                    className="tooltip_activitys"
                    style={{
                        backgroundColor: 'red',
                        color: '#fff',
                        width: '100%',
                        height: '100%',
                        fontSize: '7px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        padding: '10px 5px',
                    }}
                >
                    {payload.map((item) => (
                        <p
                            key={`${item.value}${item.name}`}
                        >{`${item.value}${item.name}`}</p>
                    ))}
                </div>
            );
        }
        return null;
    };

    const getNameOfPage = (payload) => {
        payload.map((item) => {
            if (item.name === 'kilogram') {
                item.name = 'kg';
            }
            if (item.name === 'calories') {
                item.name = 'Kcal';
            }
            return { item };
        });
    };

    const renderLegend = (props) => {
        const { payload } = props;

        // const legendPayload = payload.map((item) => {
        //     if (item.value === 'kilogram') item.value = 'Poids (kg)';
        //     if (item.value === 'calories')
        //         item.value = 'Calories brûlées (kCal)';
        //     return item;
        // });
        return (
            <div
                className="customLegend_wrap"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    className="title_activity"
                    style={{ fontSize: '15px', fontWeight: 'bold' }}
                >
                    Activité quotidienne
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Dot color="#202020" />
                        <Text>Poids (kg)</Text>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Dot color="#E00000" />
                        <Text>Calories brûlées (kCal)</Text>
                    </div>
                </div>
            </div>

            // <div
            //     className="customLegend_wrap"
            //     style={{
            //         display: 'flex',
            //         flexDirection: 'row',
            //         justifyContent: 'space-between',
            //     }}
            // >
            //     <div
            //         className="title_activity"
            //         style={{ fontSize: '15px', fontWeight: 'bold' }}
            //     >
            //         Activité quotidienne
            //     </div>
            //     <ul
            //         style={{
            //             display: 'flex',
            //             flexDirection: 'row',
            //             justifyContent: 'space-evenly',
            //         }}
            //     >
            //         <Dot color="#202020" />
            //         <Text>Poids (kg)</Text>
            //         <Dot color="#E00000" />
            //         <Text>Calories brulées</Text>
            //         {legendPayload.map((entry, index) => (
            //             <li
            //                 key={`item-${index}`}
            //                 style={{
            //                     marginLeft: '32px',
            //                     fontSize: '14px',
            //                     color: '#74798C',
            //                 }}
            //             >
            //                 <Dot color={entry.color} />
            //                 <Text>{entry.value}</Text>
            //                 {/* {entry.value} */}
            //             </li>
            //         ))}
            //     </ul>
            // </div>
        );
    };

    return (
        <Container>
            <ResponsiveContainer
                width="100%"
                aspect={3}
                // minWidth="undefined"
                // minHeight="undefined"
            >
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barCategoryGap="35%"
                >
                    <CartesianGrid vertical={false} strokeDasharray="4 1" />

                    <XAxis
                        dataKey="day"
                        stroke="#DEDEDE"
                        tick={{
                            stroke: '#9B9EAC',
                            fontSize: '14px',
                            fontWeight: '300',
                        }}
                        dy={15}
                        tickLine={false}
                    />
                    <YAxis yAxisId="left" orientation="left" stroke="none" />

                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="none"
                        tick={{
                            stroke: '#9B9EAC',
                            fontSize: '14px',
                            fontWeight: '300',
                            fontStyle: 'normal',
                        }}
                        type="number"
                        domain={['dataMin-2', 'dataMax+2']}
                        tickCount={5}
                        dx={44}
                    />

                    <Legend
                        verticalAlign="top"
                        height={64}
                        iconType="circle"
                        iconSize="12"
                        content={renderLegend}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    <Bar
                        yAxisId="right"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[3.5, 3.5, 0, 0]}
                        maxBarSize={7}
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[3.5, 3.5, 0, 0]}
                        maxBarSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
}

export default ChartActivity;
