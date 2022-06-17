import useAxios from '../../constants/useAxios';
import KeyElem from './key_elem';

/**
 * data from `http://localhost:3000/user/${userId}`
 * @returns
 */
function KeyData({ data }) {
    // const keyData = data.KeyData;

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

export default KeyData;
