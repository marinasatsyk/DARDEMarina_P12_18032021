import { func } from 'prop-types';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChartActivity from './chart_activity';

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

ActivitieS.propTypes = {
    data: PropTypes.object,
};
export default ActivitieS;
