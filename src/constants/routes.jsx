import ActivitieS from '../components/activities';
import Activity from '../components/activity';
import KeyData from '../components/keydata';
import Main from '../components/main';
import Score from '../components/score';
import Sessions from '../components/sessions';

export const ROUTES_PATH = {
    USER_MAIN_DATA: `/user/${id}`,
    USER_ACTIVITY: `/user/${id}/activity`,
    USER_AVERAGE_SESSIONS: `/user/${id}/average-sessions`,

    USER_SCORE: `/user/${id}/today-score`,
    USER_ACTIVITIES: `/user/${id}/activities`,
    USER_KEYDATA: ` /user/${id}/key-data`,
};

// USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE;
export const ROUTES = ({ pathname, data, error, loading }) => {
    switch (pathname) {
        case ROUTES_PATH.Login:
            return <Main data={data} error={error} loading={loading} />;
        case ROUTES_PATH.Activity:
            return <Activity data={data} error={error} loading={loading} />;
        case ROUTES_PATH.Sessions:
            return <Sessions data={data} error={error} loading={loading} />;
        case ROUTES_PATH.Score:
            return <Score data={data} error={error} loading={loading} />;
        case ROUTES_PATH.Activities:
            return <ActivitieS data={data} error={error} loading={loading} />;
        case ROUTES_PATH.KeyData:
            return <KeyData data={data} error={error} loading={loading} />;
        default:
            return <Main data={data} error={error} loading={loading} />;
    }
};
