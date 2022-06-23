//@ts-check

import KeyElem from './key_elem';
import PropTypes from 'prop-types';

/**
 *  KeyData build the block of  all  elements-counter  of calories, proteins, carbohydrates, lipids
 * @param {Object} props
 * @returns {React.ReactElement}
 */

function KeyData({ data }) {
    console.log(data);
    /**
     * data key for building keyelem
     * @type {{calorieCount: number, proteinCount:number, carbohydrateCount:number, lipidCount:number}}
     */
    const dataKey = data.keyData;

    return (
        <>
            <KeyElem data={dataKey} unit={'calorieCount'} />
            <KeyElem data={dataKey} unit={'proteinCount'} />
            <KeyElem data={dataKey} unit={'carbohydrateCount'} />
            <KeyElem data={dataKey} unit={'lipidCount'} />
        </>
    );
}

KeyData.propTypes = {
    data: PropTypes.object.isRequired,
};
export default KeyData;
