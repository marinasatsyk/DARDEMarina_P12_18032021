//@ts-check

import PropTypes from 'prop-types';

/**
 * build main page, call all datas and send it to components as data
 * @returns {React.ReactElement}
 */
function Main({ data }) {
    console.log('dataMain FROM MAIN');
    console.log(data);

    return (
        <div className="greetings">
            <div className="wrap_greetings">
                <h1 className="main_page">
                    Bonjour
                    <span style={{ color: 'red' }}>
                        {` ${data.userInfos.firstName}`}
                    </span>
                    <br />
                </h1>
                <div className="goal">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
        </div>
    );
}

Main.propsTypes = {
    dataMain: PropTypes.object.isRequired,
};

export default Main;
