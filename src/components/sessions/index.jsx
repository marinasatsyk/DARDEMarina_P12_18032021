//@ts-check

import React from 'react';
import ChartSessions from './chart_sessions';
import PropTypes from 'prop-types';

/**
 * Sessions returns an React elements contains Linechart of sessions
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function Sessions({ data }) {
    return (
        <>
            <ChartSessions data={data.sessions} />
        </>
    );
}

Sessions.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Sessions;
