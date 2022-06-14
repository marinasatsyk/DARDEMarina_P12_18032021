/**   data from    `http://localhost:3000/user/${userId}` */
import RouterF from '../../GetAllDatas';
import ActivitieS from '../activities';
import Aside from '../aside';
import Header from '../header';
import KeyData from '../keydata';
import PerformanceUser from '../performance';
import Score from '../score';
import Sessions from '../sessions';
import { Context } from '../../constants/DataContext';
// import DataContext from '../../constants/DataContext';
import { useContext, useEffect } from 'react';
import { Database } from '../../constants/GetData';
//build main page, call all datas and send it to components as data
function Main() {
    const {
        dataMain,
        setDataMain,
        dataActiviy,
        setDataActiviy,
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
        setDataMain,
        setDataActiviy,
        setDataSessions,
        setDataPerformance,
        setUserId,
        setLoading,
        setError,
    };

    console.log('USER IS :' + userId);

    useEffect(() => {
        async function loadData() {
            console.log('async loadData');
            setLoading(true);
            await Database.getUser(userId, ctx);
            await Database.getActivity(userId, ctx);
            await Database.getSessions(userId, ctx);
            await Database.getPerformance(userId, ctx);
            setLoading(false);
        }
        loadData();
    }, [userId, setLoading]);
    console.log('dataActiviy');
    console.log(Object.keys(dataActiviy).length);
    console.log(dataActiviy);
    return (
        <div className="wrapper_main">
            <Header />
            <div className="wrapper_body">
                <Aside />
                <div className="info_block">
                    <div className="greeteng">
                        <h1>{dataMain.id}</h1>
                        <div className="wrapper_charts">
                            <div className="charts">
                                <div className="wrap_activities">
                                    {Object.keys(dataActiviy).length > 0 ? (
                                        <ActivitieS data={dataActiviy} />
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className="wrap_small_charts">
                                    <div className="wrap_sessions">
                                        {dataSessions.length > 0 ? (
                                            <Sessions data={dataSessions} />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="wrap_performance">
                                        {dataPerformance.length > 0 ? (
                                            <PerformanceUser
                                                data={dataPerformance}
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="wrap_score">
                                        {dataMain.length > 0 ? (
                                            <Score data={dataMain} />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="key_data">
                                {dataMain.length > 0 ? (
                                    <KeyData data={dataMain} />
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
