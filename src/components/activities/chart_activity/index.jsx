//@ts-check
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
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

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

/**
 *Average Activity function with BarChart
 * @param {Object} props
 * @returns {React.ReactElement}
 */
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
                    Activit?? quotidienne
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
                        <Text>Calories br??l??es (kCal)</Text>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Container>
            <ResponsiveContainer width="100%" aspect={3}>
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
                        dataKey="day_d"
                        stroke="#9B9EAC"
                        tick={{
                            fontSize: '14px',
                            fontWeight: '300',
                        }}
                        dy={10}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis yAxisId="left" orientation="left" stroke="none" />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#9B9EAC"
                        tick={{
                            fontSize: '14px',
                            fontWeight: '300',
                            fontStyle: 'normal',
                        }}
                        type="number"
                        domain={['dataMin-2', 'dataMax+2']}
                        tickCount={5}
                        dx={44}
                        tickLine={false}
                        axisLine={false}
                    />

                    <Legend
                        verticalAlign="top"
                        height={64}
                        iconType="circle"
                        //@ts-ignore
                        iconSize="12"
                        content={renderLegend}
                    />

                    <Tooltip
                        //@ts-ignore
                        content={<CustomTooltip />}
                    />
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

ChartActivity.propType = {
    data: PropTypes.object.isRequired,
};
export default ChartActivity;
