import { useEffect, useState } from "react";
import React from 'react';

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=d7ce5bdf45b881379398a8fa8b29fdd9&query=${queryTerm}`
    useEffect(() => {
        async function fetchData() { 
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchData(); 
    }, [url]);

    return {
        data
    };
}
