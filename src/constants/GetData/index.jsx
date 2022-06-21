import axios from 'axios';
import { Component } from 'react';
import mockDataMain from '../mockdata/USER_MAIN_DATA';
import mockDataSessions from '../mockdata/USER_AVERAGE_SESSIONS';
import mockDataActivity from '../mockdata/USER_ACTIVITY';
import mockDataPerformance from '../mockdata/USER_PERFORMANCE';

/**
 *
 * @param {number} currentUser
 * @param {Object} lsData data from local storage
 * @param {Function} setFunc
 * @param {string} url
 * @param {string} dataName
 * @param {Function} loadFunc function of state of downoload status
 * @param {Function} errFunc
 * @returns Object generic func for use data from localStorage if there's otherwise axios request.
 */
async function GetData(
    currentUser,
    lsData,
    setFunc,
    url,
    dataName,
    loadFunc,
    errFunc
) {
    if (!dataName) return;

    try {
        if (lsData && JSON.parse(lsData)._ID === currentUser) {
            console.log('====from LS');
            setFunc(JSON.parse(lsData));
        } else {
            const response = await axios.get(url);
            const data = response.data;
            data.data._ID = currentUser;
            setFunc(data.data);
            localStorage.setItem(dataName, JSON.stringify(data.data));
            console.log('====from axios');
            console.log(data.data);
        }
    } catch (error) {
        errFunc(error);
        console.log(error.stack);
    } finally {
        loadFunc(false);
    }
}

/**
 * @type {import('react').ClassType}
 */
export class Database {
    static async getUser(userId, context) {
        console.log('->>> USER ID : ' + userId);
        console.log('**** ', context.setDataMain);
        return await GetData(
            userId,
            localStorage.getItem('dataMain'),
            context.setDataMain,
            `http://localhost:3000/user/${userId}`,
            // mockDataMain,
            'dataMain',
            context.setLoading,
            context.setError
        );
    }

    static async getActivity(userId, context) {
        return await GetData(
            userId,
            localStorage.getItem('dataActivity'),
            context.setDataActivity,
            `http://localhost:3000/user/${userId}/activity`,
            // mockDataActivity,
            'dataActivity',
            context.setLoading,
            context.setError
        );
    }

    static async getSessions(userId, context) {
        return await GetData(
            userId,
            localStorage.getItem('dataSessions'),
            context.setDataSessions,
            `http://localhost:3000/user/${userId}/average-sessions`,
            // mockDataSessions,
            'dataSessions',
            context.setLoading,
            context.setError
        );
    }

    static async getPerformance(userId, context) {
        return await GetData(
            userId,
            localStorage.getItem('dataPerformance'),
            context.setDataPerformance,
            `http://localhost:3000/user/${userId}/performance`,
            // mockDataPerformance,
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
 *
 * @param {number} currentUser
 * @param {Object} lsData data from local storage
 * @param {Function} setFunc
 * @param {string} url
 * @param {string} dataName
 * @param {Function} loadFunc function of state of downoload status
 * @param {Function} errFunc
 * @returns Object generic func for use data from localStorage if there's otherwise axios request.
 */
async function GetMockedData(
    currentUser,
    lsData,
    setFunc,
    mockedData,
    dataName,
    loadFunc,
    errFunc
) {
    if (!dataName) return;

    try {
        if (lsData && JSON.parse(lsData)._ID === currentUser) {
            console.log('====from LS');
            setFunc(JSON.parse(lsData));
        } else {
            const uId = +currentUser;
            console.log('mocked user : ', currentUser);
            console.log(mockedData);
            const data = mockedData.find((d) => {
                console.log(d);
                if (uId === d.id || uId === d.userId) {
                    console.log('FOUND');
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
            console.log(data);
        }
    } catch (error) {
        errFunc(error);
    } finally {
        loadFunc(false);
    }
}

export class MockedDatabase extends Database {
    static async getUser(userId, context) {
        console.log('->>> USER ID FROM MAIN: ' + userId);
        console.log('**** ', context.setDataMain);
        return await GetMockedData(
            userId,
            localStorage.getItem('dataMain'),
            context.setDataMain,
            mockDataMain,
            'dataMain',
            context.setLoading,
            context.setError
        );
    }

    static async getActivity(userId, context) {
        return await GetMockedData(
            userId,
            localStorage.getItem('dataActivity'),
            context.setDataActivity,
            mockDataActivity,
            'dataActivity',
            context.setLoading,
            context.setError
        );
    }

    static async getSessions(userId, context) {
        return await GetMockedData(
            userId,
            localStorage.getItem('dataSessions'),
            context.setDataSessions,
            mockDataSessions,
            'dataSessions',
            context.setLoading,
            context.setError
        );
    }

    static async getPerformance(userId, context) {
        return await GetMockedData(
            userId,
            localStorage.getItem('dataPerformance'),
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
