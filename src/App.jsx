import './App.css';
import ActivitieS from './components/activities';
import Main from './components/data/main';
import useFetch from './constants/useFetch';

function App() {
    return (
        <>
            <Main />
            <ActivitieS userId={18} />
        </>
    );
}

export default App;
