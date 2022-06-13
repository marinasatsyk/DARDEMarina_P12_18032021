import React from 'react';
import { useState, useContext, useEffect, createContext } from 'react';
import GetData from '../GetData';
// import dataBase from '../dataBase';

export const Context = createContext();

const DataContext = ({ children }) => {
    console.log('Context func');
    const [dataMain, setDataMain] = useState('');
    const [dataActiviy, setDataActiviy] = useState('');
    const [dataSessions, setDataSessions] = useState('');
    const [dataPerformance, setDataPerformance] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userId, setUserId] = useState(12);
    const ROUTES_PATH = {
        USER_MAIN_DATA: `http://localhost:3000/user/${userId}`,
        USER_ACTIVITY: `http://localhost:3000/user/${userId}/activity`,
        USER_AVERAGE_SESSIONS: `http://localhost:3000/user/${userId}/average-sessions`,
        USER_PERFORMANCE: `http://localhost:3000/user/${userId}/performance`,
    };
    const lsMain = localStorage.getItem('dataMain');
    const lsActvity = localStorage.getItem('dataActiviy');
    const lsSessions = localStorage.getItem('dataSessions');
    const lsPerformance = localStorage.getItem('dataPerformance');

    useEffect(() => {
        async function loadData() {
            console.log('GetAllDatas');
            setLoading(true);
            await GetData(
                lsMain,
                setDataMain,
                ROUTES_PATH['USER_MAIN_DATA'],
                'dataMain',
                setLoading,
                setError
            );
            await GetData(
                lsActvity,
                setDataActiviy,
                ROUTES_PATH['USER_ACTIVITY'],
                'dataActiviy',
                setLoading,
                setError
            );
            await GetData(
                lsSessions,
                setDataSessions,
                ROUTES_PATH['USER_AVERAGE_SESSIONS'],
                'dataSessions',
                setLoading,
                setError
            );
            await GetData(
                lsPerformance,
                setDataPerformance,
                ROUTES_PATH['USER_PERFORMANCE'],
                'dataPerformance',
                setLoading,
                setError
            );
        }
        loadData();
    }, []);

    return (
        <Context.Provider
            value={{
                dataMain,
                setDataMain,
                dataActiviy,
                setDataActiviy,
                dataSessions,
                setDataSessions,
                dataPerformance,
                setDataPerformance,
                loading,
                setLoading,
                error,
                setError,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default DataContext;
