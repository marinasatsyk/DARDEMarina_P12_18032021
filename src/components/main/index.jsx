//@ts-check

import ActivitieS from '../activities';
import KeyData from '../keydata';
import PerformanceUser from '../performance';
import Score from '../score';
import Sessions from '../sessions';
import { Context } from '../../constants/DataContext';
import { useContext, useEffect } from 'react';
import { /*MockedDatabase as*/ Database } from '../../constants/GetData';
import { Redirect, useParams } from 'react-router';

/**
 * build main page, call all datas and send it to components as data
 * @returns {React.ReactElement}
 */
function Main() {
    /**
     * const id get the number user's Id for set it in data
     * @const {number|string}
     */
    //@ts-ignore
    const { id } = useParams();

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
        setLoading,
        setError,
    } = useContext(Context);

    // ctx variable for save and pass the states while call data

    const ctx = {
        setDataMain,
        setDataActivity,
        setDataSessions,
        setDataPerformance,
        setUserId,
        setLoading,
        setError: (code) => {
            console.log('error : ', code);
        },
    };
    console.log('dataActivity FROM MAIN');
    console.log(dataActivity);
    // @ts-ignore
    useEffect(() => {
        setUserId(id);
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
    }, [id, setLoading]);

    console.log('dataMain FROM MAIN');
    console.log(dataMain);
    console.log('dataMain FROM MAIN');
    console.log(dataActivity);
    return (
        <div className="info_block">
            <div className="greetings">
                <div className="wrap_greetings">
                    <h1 className="main_page">
                        Bonjour
                        {dataMain.hasOwnProperty('userInfos') ? (
                            <>
                                <span style={{ color: 'red' }}>
                                    {` ${dataMain.userInfos.firstName}`}
                                </span>
                                <br />
                            </>
                        ) : (
                            ''
                        )}
                    </h1>
                    <div className="goal">
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </div>
                </div>

                <div className="wrapper_charts">
                    <div className="charts">
                        <div className="wrap_activities">
                            {dataActivity.hasOwnProperty('sessions') ? (
                                <ActivitieS data={dataActivity} />
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="wrap_small_charts">
                            <div className="wrap_sessions">
                                {dataSessions.hasOwnProperty('sessions') ? (
                                    <Sessions data={dataSessions} />
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="wrap_performance">
                                {dataPerformance.hasOwnProperty('kind') ? (
                                    <PerformanceUser data={dataPerformance} />
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="wrap_score">
                                {dataMain.hasOwnProperty('todayScore') ||
                                dataMain.hasOwnProperty('score') ? (
                                    <Score data={dataMain} />
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="key_data">
                        {dataMain.hasOwnProperty('keyData') ? (
                            <KeyData data={dataMain} />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
