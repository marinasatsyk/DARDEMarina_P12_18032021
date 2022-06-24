//@ts-check
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Aside from './components/aside';
import Error from './components/error';
import Header from './components/header';
import DataProvider from './constants/DataContext';
import Profile from './pages/profile';
/**
 * App is function router
 * @returns {React.ReactElement}
 */
function App() {
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
                                <Profile />
                            </Route>

                            <Route path="/user/:id/activity">
                                <Profile isActivity={true} />
                            </Route>

                            <Route path="/user/:id/average-sessions">
                                <Profile isAverageSessions={true} />
                            </Route>

                            <Route path="/user/:id/today-score">
                                <Profile isTodayScore={true} />
                            </Route>

                            <Route path="/user/:id/activities">
                                <Profile isActivities={true} />
                            </Route>
                            <Route path="/user/:id/key-data">
                                <Profile isKeyData={true} />
                            </Route>
                            <Route path="error/:error">
                                <Error />
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
