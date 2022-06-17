import React from 'react';
import ChartSessions from './chart_sessions';

/**
 * data from `http://localhost:3000/user/${userId}/average-sessions`
 * @returns
 */
function Sessions({ data }) {
    return (
        <>
            <ChartSessions data={data.sessions} />
        </>
    );
}

export default Sessions;
