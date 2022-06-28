//@ts-check

import React, { PureComponent } from 'react';
import ChartActivity from './chart_activity';
import PropTypes, { arrayOf, number, string } from 'prop-types';

/**
 * Activities builds chart of activies
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function ActivitieS({ data }) {
    //change the format of day
    const sessionsData_var = [...data.sessions];

    sessionsData_var.map((item, index) => {
        item.day_d = index + 1;
        return item;
    });

    return (
        <>
            <div
                className="activity_chart"
                style={{
                    maxWidth: 835,
                    maxHeight: 320,
                    minWidth: 835,
                    minHeight: 320,
                    background: '#FBFBFB',
                    borderRadius: '5px',
                }}
            >
                <ChartActivity data={sessionsData_var} />
            </div>
        </>
    );
}

ActivitieS.propTypes = {
    data: PropTypes.object.isRequired,
};
export default ActivitieS;
