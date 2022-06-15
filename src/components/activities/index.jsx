import { func } from 'prop-types';
import React, { PureComponent } from 'react';

import ChartActivity from './chart_activity';

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
    console.log('============activityCustom');
    console.log(data);

    return (
        <>
            <div
                className="activity_chart"
                style={{
                    maxWidth: 835,
                    maxHeight: 320,
                    background: '#FBFBFB',
                    borderRadius: '5px',
                }}
            >
                <ChartActivity data={sessionsData} />
            </div>
        </>
    );
}

export default ActivitieS;
