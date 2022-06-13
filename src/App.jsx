import './App.css';
import { useContext, useState } from 'react';
import Main from './components/main';
import GetAllDatas from './GetAllDatas';
import { Context } from './constants/DataContext';
import DataContext from './constants/DataContext';

function App() {
    // GetAllDatas();
    // if (loading) return <h1>LOADING...</h1>;
    // if (error) return console.log(error.stack);
    return (
        <DataContext>
            <Main />
        </DataContext>
    );
}

export default App;
