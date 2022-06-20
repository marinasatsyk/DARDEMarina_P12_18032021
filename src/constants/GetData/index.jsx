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
 * @returns Object generic func for use ls if there's otherwise axios.
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

    console.log('GETDATA :' + dataName);
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

export default GetData;
