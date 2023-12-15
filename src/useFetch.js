import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const abortCont = new AbortController();
            try {
                const res = await fetch(url, abortCont.signal);
                const json = await res.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(error.message);
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;