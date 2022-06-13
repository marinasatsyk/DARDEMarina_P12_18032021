/**
 * score from `http://localhost:3000/user/${userId}`
 * @returns
 */

function Score({ data }) {
    return (
        <>
            <div>Score</div>
            {console.log('===========score')}
            {console.log(data)}
        </>
    );
}

export default Score;
