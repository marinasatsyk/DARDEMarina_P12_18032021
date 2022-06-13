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
import { useContext } from 'react';
//build main page, call all datas and send it to components as data
function Main() {
    const {
        dataMain,
        dataActiviy,
        dataSessions,
        dataPerformance,
        loading,
        error,
    } = useContext(Context);

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
                                    {dataActiviy ? (
                                        <ActivitieS data={dataActiviy} />
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className="wrap_small_charts">
                                    <div className="wrap_sessions">
                                        {dataSessions ? (
                                            <Sessions data={dataSessions} />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="wrap_performance">
                                        {dataPerformance != null ? (
                                            <PerformanceUser
                                                data={dataPerformance}
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="wrap_score">
                                        {dataMain ? (
                                            <Score data={dataMain} />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="key_data">
                                {dataMain != null ? (
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
