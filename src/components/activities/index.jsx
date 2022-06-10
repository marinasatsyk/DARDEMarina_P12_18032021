import useFetch from '../../constants/useFetch';

function ActivitieS({ userId }) {
    const { data, loading, error } = useFetch(
        `http://localhost:3000/user/${userId}/activity`
    );

    const { sessions } = data?.data;
    // console.log(sessions);
    if (loading) return <h1>LOADING...</h1>;
    if (error) return console.log(error);
    return (
        <>
            <h1>{data?.data.userId}</h1>
            {console.log(data)}
            {/* <div>
                {sessions.map((train) => (
                    <p>{train.day}</p>
                ))}
            </div> */}
        </>
    );
}

export default ActivitieS;
