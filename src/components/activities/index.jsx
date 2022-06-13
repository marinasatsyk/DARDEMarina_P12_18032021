import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

/**
 *
 * @param {*} param0
 * @returns
 */
function ActivitieS({ data }) {
    //change the format of day

    const sessionsData = data.sessions.map((item, index) => {
        item.day = index + 1;
        return item;
    });
    // sessionsData = sessionsData.map((train) => console.log(train.day));
    console.log('============activityCustom');
    console.log(sessionsData);
    return (
        <>
            <h1>{data?.userId} activity</h1>
            {console.log('============activity')}
            {console.log(data)}
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={sessionsData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" tick={{ stroke: '#9B9EAC' }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" fill="#282D30" />
                    <Bar dataKey="calories" fill="#E60000" />
                </BarChart>
            </ResponsiveContainer>

            {/* <BarChart width={730} height={250} data={data.sessions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" />
                <Bar dataKey="calories" fill="#E60000" />
            </BarChart> */}
        </>
    );
}

export default ActivitieS;
