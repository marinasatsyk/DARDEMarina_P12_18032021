import axios from 'axios';
import { useContext } from 'react';

//generic func for use ls if there's otherwise axios.
async function GetData(lsData, setFunc, url, dataName, loadFunc, errFunc) {
    if (!dataName) return;

    console.log('GETDATA :' + dataName);
    try {
        console.log('getData func');

        if (lsData) {
            console.log('====from LS');
            setFunc(JSON.parse(lsData));
        } else {
            const response = await axios.get(url);
            setFunc(response.data);
            localStorage.setItem(dataName, JSON.stringify(response.data));
            console.log('====from axios');
            console.log(response);
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
        //const context = useContext(pContext);
        console.log('**** ', context.setDataMain);
        return await GetData(
            localStorage.getItem('dataMain'),
            context.setDataMain,
            `http://localhost:3000/user/${userId}`,
            'dataMain',
            context.setLoading,
            context.setError
        );
    }

    static async getActivity(userId, context) {
        return await GetData(
            localStorage.getItem('dataActiviy'),
            context.setDataActiviy,
            `http://localhost:3000/user/${userId}/activity`,
            'dataActiviy',
            context.setLoading,
            context.setError
        );
    }

    static async getSessions(userId, context) {
        return await GetData(
            localStorage.getItem('dataSessions'),
            context.setDataSessions,
            `http://localhost:3000/user/${userId}/average-sessions`,
            'dataSessions',
            context.setLoading,
            context.setError
        );
    }

    static async getPerformance(userId, context) {
        return await GetData(
            localStorage.getItem('dataPerformance'),
            context.setDataPerformance,
            `http://localhost:3000/user/${userId}/performance`,
            'dataPerformance',
            context.setLoading,
            context.setError
        );
    }
}

export default GetData;
