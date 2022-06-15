import React from 'react';
import { useState, createContext } from 'react';

export const Context = createContext();

const DataProvider = ({ children }) => {
    console.log('Context func');
    const [dataMain, setDataMain] = useState([]);
    const [dataActivity, setDataActivity] = useState([]);
    const [dataSessions, setDataSessions] = useState([]);
    const [dataPerformance, setDataPerformance] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userId, setUserId] = useState(0);

    return (
        <Context.Provider
            value={{
                userId,
                setUserId,
                dataMain,
                setDataMain,
                dataActivity,
                setDataActivity,
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

export default DataProvider;
