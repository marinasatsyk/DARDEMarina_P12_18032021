/**   data from    `http://localhost:3000/user/${userId}` */
import ActivitieS from '../activities';
import KeyData from '../keydata';
import PerformanceUser from '../performance';
import Score from '../score';
import Sessions from '../sessions';
import { Context } from '../../constants/DataContext';
// import DataContext from '../../constants/DataContext';
import { useContext, useEffect } from 'react';
import { Database } from '../../constants/GetData';
import { useParams } from 'react-router';

//build main page, call all datas and send it to components as data
function Main() {
    const { id } = useParams();

    console.log('USER ID :' + id);

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
        setLoading,
        setError,
    };
    setUserId(id);

    useEffect(() => {
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

    console.log('dataMain');
    console.log(Object.keys(dataMain).length);
    console.log(dataMain);

    return (
        <div className="info_block">
            <div className="greeteng">
                <h1 className="main_page">
                    Bonjour {}
                    {dataMain.hasOwnProperty('userInfos') ? (
                        <span style={{ color: 'red' }}>
                            {dataMain.userInfos.firstName}
                        </span>
                    ) : (
                        ''
                    )}
                </h1>
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
                                {dataMain.hasOwnProperty('todayScore') ? (
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