import useAxios from '../../constants/useAxios';

/**data from `http://localhost:3000/user/${userId}/performance` */
function PerformanceUser({ data }) {
    return (
        <>
            <div>Activity-Performance</div>
            {console.log('=========Performance')}
            {console.log(data)}
        </>
    );
}

export default PerformanceUser;
