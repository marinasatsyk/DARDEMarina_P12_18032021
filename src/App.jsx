import './App.css';
import Main from './components/main';
import DataProvider from './constants/DataContext';

function App() {
    // GetAllDatas();
    // if (loading) return <h1>LOADING...</h1>;
    // if (error) return console.log(error.stack);
    return (
        <DataProvider>
            <Main userID={18}/>
        </DataProvider>
    );
}

export default App;
