import useAxios from '../../constants/useAxios';

/**
 * data from `http://localhost:3000/user/${userId}`
 * @returns
 */
function KeyData({ data }) {
    return (
        <>
            <div>KeyData</div>
            {console.log('===========keydata')}
            {console.log(data)}
        </>
    );
}

export default KeyData;
