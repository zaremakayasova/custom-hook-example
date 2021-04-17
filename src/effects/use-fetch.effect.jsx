import { useState, useEffect } from "react";

const UseFetch = url => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const jsonData = await res.json();
            setData(jsonData[0]);
        }
        fetchData();
    }, [url]);
    return data;
};

export default UseFetch;