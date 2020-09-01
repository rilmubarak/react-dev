import {useState, useEffect} from 'react';

export default (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((result) => {
            setData(result)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    });

    return {data, loading, error}
}