import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Aside from './components/aside';
import Error from './components/error';
import Header from './components/header';
import Main from './components/main';
import DataProvider from './constants/DataContext';

function App() {
    // GetAllDatas();
    // if (loading) return <h1>LOADING...</h1>;
    // if (error) return console.log(error.stack);
    return (
        <DataProvider>
            <BrowserRouter>
                <div id="wrapper_main">
                    <Header />
                    <div className="wrapper_body">
                        <Aside />
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/user/12" />
                            </Route>
                            <Route path="/user/:id">
                                <Main />
                            </Route>
                            <Route path="*">
                                <Error />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;