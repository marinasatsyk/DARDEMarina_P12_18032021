import React from 'react';

/**
 * data from `http://localhost:3000/user/${userId}/average-sessions`
 * @returns
 */
function Sessions({ data }) {
    return (
        <>
            <div>Sessions</div>
            {console.log('=========sessions')}
            {console.log(data)}
        </>
    );
}

export default Sessions;
