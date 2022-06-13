import { React, useEffect, useState } from 'react';
import axios from 'axios';

function useAxios(url, dataName) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        // axios
        //     .get(url)
        //     .then((response) => {
        //         setData(response.data);
        //         // console.log(response);
        //         if (!dataName) return;
        //         localStorage.setItem(
        //             dataName,
        //             JSON.stringify(response.data.data)
        //         );
        //     })
        //     .catch((err) => {
        //         setError(err);
        //         console.log(err.stack);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
        async function axiosData() {
            try {
                const response = await axios.get(url);
                setData(response.data);
                if (!dataName) return;
                localStorage.setItem(
                    dataName,
                    JSON.stringify(response.data.data)
                );
                // console.log(response);

                // localStorage.setItem('data', JSON.stringify(data));
            } catch (error) {
                setError(error);
                console.log(error.stack);
            } finally {
                setLoading(false);
            }
        }
        setLoading(true);
        axiosData();
    }, [url, dataName]);
    // console.log(data);
    return {
        data,
        loading,
        error,
    };
}

export default useAxios;
