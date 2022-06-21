import React from 'react';
import { useParams } from 'react-router';

function Error() {
    const { error } = useParams();
    return (
        <div className="error_page">
            <h2>{error ?? 404}</h2>
            <p>Oups! La page que vous avez demandé n'existe pas.</p>
        </div>
    );
}

export default Error;
