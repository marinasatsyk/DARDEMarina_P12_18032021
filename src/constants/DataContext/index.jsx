import React from 'react';
import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
/**
 * Provider for all elements
 * @param {*} {React.ReactElement.children}
 * @returns {React.ReactElement}
 */
const DataProvider = ({ children }) => {
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

DataProvider.propTypes = {
    children: PropTypes.any,
};
