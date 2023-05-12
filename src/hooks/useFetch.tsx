import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import { IMovieData } from "../typescript/Results";
const useFetch = (url:string) => {
    const [data, setData] = useState<null | IMovieData>(null);
    const [loading, setLoading] = useState<null | boolean | string>(null);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
                console.log(err);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;