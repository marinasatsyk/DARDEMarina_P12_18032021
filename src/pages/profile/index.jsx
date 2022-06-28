//@ts-check

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../components/error';
import { /*MockedDatabase as*/ Database } from '../../constants/GetData';
import { Context } from '../../constants/DataContext';
import Main from '../../components/main';
import ActivitieS from '../../components/activities';
import Sessions from '../../components/sessions';
import PerformanceUser from '../../components/performance';
import Score from '../../components/score';
import KeyData from '../../components/keydata';
import PropTypes from 'prop-types';
/*
dataMain - user main (userInfo)
dataActivity -  barChart (activity)
dataSessions - LineChart (averagesessions)
dataPerformance - RadarChart(activitieS)
todayScore - PieChart (dataMain)
dataKey - main.key(dataMain)

*/

/**
 * Main element for build the page of application and acces to routes
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function Profile({
    isKeyData,
    isTodayScore,
    isAverageSessions,
    isActivity,
    isActivities,
    showAll,
}) {
    console.log('isKeyData FROM PROFIL ');
    console.log(
        isKeyData,
        isTodayScore,
        isAverageSessions,
        isActivity,
        isActivities
    );

    /**
     * const id get the number user's Id for set it in data
     * @const {number|string}
     */
    //@ts-ignore
    const { id } = useParams();
    console.log(id);
    const {
        dataMain,
        setDataMain,
        dataActivity,
        setDataActivity,
        dataSessions,
        setDataSessions,
        dataPerformance,
        setDataPerformance,
        userId,
        setUserId,
        loading,
        setLoading,
        error,
        setError,
    } = useContext(Context);

    console.log(userId);
    const ctx = {
        dataMain,
        setDataMain,
        dataActivity,
        setDataActivity,
        dataSessions,
        setDataSessions,
        dataPerformance,
        setDataPerformance,
        userId,
        setUserId,
        loading,
        setLoading,
        setError: (code) => {
            console.log('error : ', code);
        },
    };

    useEffect(() => {
        setUserId(id);
        console.log(ctx);
        async function loadData() {
            console.log('async loadData');
            setLoading(true);
            await Database.getUser(id, ctx);
            await Database.getActivity(id, ctx);
            await Database.getSessions(id, ctx);
            await Database.getPerformance(id, ctx);
            setLoading(false);
        }
        loadData();
    }, [id]);

    // //to be able to access key figures via /user/:id/key-data route
    // isKeyData && console.table(dataMain.keyData);

    // //to be able to access today's goal completion via the /user/:id/today-score route
    // isTodayScore && console.table(dataMain.score);

    // //to be able to access average session duration via the /user/:id/average-sessions route
    // isAverageSessions && console.table(dataSessions.sessions);

    // //to be able to access sessions via the /user/:id/activities route
    // isActivities && console.table(dataPerformance);

    // //to be able to access sessions via the /user/:id/activity route
    // isActivity && console.table(dataActivity.sessions);

    // console.log('PROFILE BLOCK');
    console.log(
        'setDataMain :' + isKeyData,
        'isTodayScore: ' + isTodayScore,
        'isAverageSessions: ' + isAverageSessions,
        'isActivity: ' + isActivity,
        'isActivities: ' + isActivities
    );

    if (error) {
        return <Error />;
    } else if (loading) {
        return <div className="loading">Loading...</div>;
    } else {
        return (
            <div className="info_block">
                {dataMain.hasOwnProperty('userInfos') ? (
                    <Main data={dataMain} />
                ) : (
                    ''
                )}

                <div className="wrapper_charts">
                    <div className="charts">
                        {/* Activity */}
                        {dataActivity.hasOwnProperty('sessions') &&
                        (isActivity || showAll) ? (
                            <div className="wrap_activities">
                                <ActivitieS data={dataActivity} />
                            </div>
                        ) : (
                            ''
                        )}

                        {showAll ||
                        isAverageSessions ||
                        isActivities ||
                        isTodayScore ? (
                            <div className="wrap_small_charts">
                                {dataSessions.hasOwnProperty('sessions') &&
                                (isAverageSessions || showAll) ? (
                                    <div className="wrap_sessions">
                                        <Sessions data={dataSessions} />
                                    </div>
                                ) : (
                                    ''
                                )}

                                {dataPerformance.hasOwnProperty('kind') &&
                                (isActivities || showAll) ? (
                                    <div className="wrap_performance">
                                        <PerformanceUser
                                            data={dataPerformance}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}

                                {(dataMain.hasOwnProperty('todayScore') ||
                                    dataMain.hasOwnProperty('score')) &&
                                (isTodayScore || showAll) ? (
                                    <div className="wrap_score">
                                        <Score data={dataMain} />
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>

                    {dataMain.hasOwnProperty('keyData') &&
                    (isKeyData || showAll) ? (
                        <div className="key_data">
                            <KeyData data={dataMain} />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        );
    }
}

export default Profile;

Profile.propTypes = {
    isKeyData: PropTypes.bool,
    isTodayScore: PropTypes.bool,
    isAverageSessions: PropTypes.bool,
    isActivity: PropTypes.bool,
    isActivities: PropTypes.bool,
    showAll: PropTypes.bool,
};
