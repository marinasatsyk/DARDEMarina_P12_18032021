import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Switch,
    Link,
} from 'react-router-dom';
import ActivitieS from '../components/activities';
import Activity from '../components/activity';
import Aside from '../components/aside';
import Header from '../components/header';
import KeyData from '../components/keydata';
import Main from '../components/main';
import Score from '../components/score';
import Sessions from '../components/sessions';

function RouterF() {
    return (
        <>
            <Header />
            <Aside />
            <Router>
                <Switch>
                    <Route path={'/user/:id'} component={<Main />} />
                    <Route
                        path={'/user/:id/activity'}
                        component={<Activity />}
                    />
                    <Route
                        path={'/user/:id/average-sessions'}
                        component={<Sessions />}
                    />
                    <Route
                        path={'/user/:id/today-score'}
                        component={<Score />}
                    />
                    <Route
                        path={'/user/:id/activities'}
                        component={<ActivitieS />}
                    />
                    <Route
                        path={' /user/:id/key-data'}
                        component={<KeyData />}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default RouterF;
