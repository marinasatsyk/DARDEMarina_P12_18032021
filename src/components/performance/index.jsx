//@ts-check

import ChartPerformance from './chart_performance';
import PropTypes from 'prop-types';

/**
 *PerformanceUser build the element  contains the chart performance
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function PerformanceUser({ data }) {
    return (
        <>
            <ChartPerformance data={data} />
        </>
    );
}

PerformanceUser.propTypes = {
    data: PropTypes.object.isRequired,
};
export default PerformanceUser;
