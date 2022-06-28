//@ts-check
import axios from 'axios';
//@ts-ignore
import mockDataMain from '../mockdata/USER_MAIN_DATA';
//@ts-ignore
import mockDataSessions from '../mockdata/USER_AVERAGE_SESSIONS';
//@ts-ignore
import mockDataActivity from '../mockdata/USER_ACTIVITY';
//@ts-ignore
import mockDataPerformance from '../mockdata/USER_PERFORMANCE';
import PropTypes from 'prop-types';

/**
 *This is  generic func for use data from localStorage if there's otherwise axios request.
 * @param {number} currentUser
 * @param {Function} setFunc function of state of downoload status
 * @param {string} url
 * @param {string} dataName
 * @param {Function} loadFunc function of state of downoload status
 * @param {Function} errFunc function of state of downoload status
 */
async function GetData(currentUser, setFunc, url, dataName, loadFunc, errFunc) {
    if (!dataName) return;

    try {
        const lsData = localStorage.getItem(dataName);

        if (lsData && JSON.parse(lsData)._ID === currentUser) {
            console.log('====from LS');
            setFunc(JSON.parse(lsData));
        } else {
            const response = await axios.get(url);
            const data = response.data;
            data.data._ID = currentUser;
            localStorage.setItem(dataName, JSON.stringify(data.data));
            setFunc(data.data);
            console.log('====from axios');
        }
    } catch (error) {
        errFunc(error);
        console.log(error.stack);
    } finally {
        loadFunc(false);
    }
}

/**
 * Class generic API
 */
export class Database {
    /**
     * static methode for get main data
     * @property {Function} getUser
     * @param {number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getUser(userId, context) {
        await GetData(
            userId,
            context.setDataMain,
            `http://localhost:3000/user/${userId}`,
            'dataMain',
            context.setLoading,
            context.setError
        );
    }

    /**
     * static methode for get activity data
     * @param {Number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getActivity(userId, context) {
        await GetData(
            userId,
            context.setDataActivity,
            `http://localhost:3000/user/${userId}/activity`,
            'dataActivity',
            context.setLoading,
            context.setError
        );
    }

    /**
     * static methode for get sessions data
     * @param {Number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getSessions(userId, context) {
        await GetData(
            userId,
            context.setDataSessions,
            `http://localhost:3000/user/${userId}/average-sessions`,
            'dataSessions',
            context.setLoading,
            context.setError
        );
    }

    /**
     * static methode for get performance data
     * @param {Number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getPerformance(userId, context) {
        await GetData(
            userId,
            context.setDataPerformance,
            `http://localhost:3000/user/${userId}/performance`,
            'dataPerformance',
            context.setLoading,
            context.setError
        );
    }

    render() {
        return;
    }
}

/**
 * async function for get data mocked
 * @param {number} currentUser
 * @param {Function} setFunc
 * @param {Object} mockedData
 * @param {string} dataName
 * @param {Function} loadFunc function of state of downoload status
 * @param {Function} errFunc
 * @returns Object generic func for use data from localStorage if there's otherwise axios request.
 */
async function GetMockedData(
    currentUser,
    setFunc,
    mockedData,
    dataName,
    loadFunc,
    errFunc
) {
    if (!dataName) return;

    try {
        const lsData = localStorage.getItem(dataName);

        if (lsData && JSON.parse(lsData)._ID === currentUser) {
            console.log('====from LS');
            setFunc(JSON.parse(lsData));
        } else {
            /**
             * uId is number of user's ID
             * @const {number}
             */
            const uId = +currentUser;
            console.log('mocked user : ', currentUser);
            console.log(mockedData);
            const data = mockedData.find((d) => {
                if (uId === d.id || uId === d.userId) {
                    return true;
                } else {
                    return false;
                }
            });
            console.log('data : ', data);
            data._ID = currentUser;
            setFunc(data);
            localStorage.setItem(dataName, JSON.stringify(data));
            console.log('====from mocked');
        }
    } catch (error) {
        errFunc(error);
    } finally {
        loadFunc(false);
    }
}
/**
 *Class for get data mocked
 *  @extends Database
 */
export class MockedDatabase extends Database {
    /**
     * static methode for get main mocked data
     * @param {number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getUser(userId, context) {
        console.log('->>> MockedDatabase');

        await GetMockedData(
            userId,
            context.setDataMain,
            mockDataMain,
            'dataMain',
            context.setLoading,
            context.setError
        );
    }

    /**
     * static methode for get activity mocked data
     * @param {Number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getActivity(userId, context) {
        await GetMockedData(
            userId,
            context.setDataActivity,
            mockDataActivity,
            'dataActivity',
            context.setLoading,
            context.setError
        );
    }

    /**
     * static methode for get sessions  mocked data
     * @param {Number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getSessions(userId, context) {
        await GetMockedData(
            userId,
            context.setDataSessions,
            mockDataSessions,
            'dataSessions',
            context.setLoading,
            context.setError
        );
    }

    /**
     * static methode for get performance mocked data
     * @param {Number} userId
     * @param {Object} context this object contains set methodes of states
     */
    static async getPerformance(userId, context) {
        await GetMockedData(
            userId,
            context.setDataPerformance,
            mockDataPerformance,
            'dataPerformance',
            context.setLoading,
            context.setError
        );
    }

    render() {
        return;
    }
}

export default GetData;

GetData.propTypes = {
    currentUser: PropTypes.number.isRequired,
    lsData: PropTypes.object.isRequired,
    setFunc: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    dataName: PropTypes.string.isRequired,
    loadFunc: PropTypes.func.isRequired,
    errFunc: PropTypes.func.isRequired,
};
