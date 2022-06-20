import KeyElem from './key_elem';

/**
 * data from `http://localhost:3000/user/${userId}`
 * @returns
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

export default KeyData;
