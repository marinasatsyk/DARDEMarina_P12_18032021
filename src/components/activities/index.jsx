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
    console.log('activities data BEFOR change format');
    console.log(data);

    const sessionsData_var = [...data.sessions];

    // Object.keys(data).map(function (entry, index) => {
    //     console.log(entry);
    //     // if (entry === 'sessions') {
    //     //     return index;
    //     // }
    // });
    console.log('<<<<<<<<<<<<<<<<sessionsData_var>>>>>>>>>>>');
    console.log(sessionsData_var);

    const sessionsData = sessionsData_var.map((item, index) => {
        item.day = index + 1;
        return item;
    });

    // }
    //   let sessionsData = [...data.sessions];
    //  sessionsData = [...data.sessions]

    console.log('============AFTER chage sessionsData');
    console.log(sessionsData);

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

ActivitieS.propType = {
    data: PropTypes.object.isRequired,
};
export default ActivitieS;
