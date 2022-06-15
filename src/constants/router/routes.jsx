import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Router_func() {
    return (
        <Router>
            <Switch>
                <Route path={'/user/:id'} component={<Main />} />
                <Route path="*" component={<Error />} />
                <Route path={'/user/:id/activity'} component={<Activity />} />
                <Route
                    path={'/user/:id/average-sessions'}
                    component={<Sessions />}
                />
                <Route path={'/user/:id/today-score'} component={<Score />} />
                <Route
                    path={'/user/:id/activities'}
                    component={<ActivitieS />}
                />
                <Route path={' /user/:id/key-data'} component={<KeyData />} />
            </Switch>
        </Router>
    );
}
