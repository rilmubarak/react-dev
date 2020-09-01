import React from 'react';
import useFetch from '../hooks/useFetcher'
import Card from '../components/Card'

export default () => {
    const baseUrl = "https://digimon-api.vercel.app/api/digimon"
    const {data:digimons, loading, error} = useFetch(baseUrl)

    if (loading) {
        return (
            <>
                <div>
                    <p>Waiting for moment gan....</p>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <div>
                    <p>Error!!!</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="mt-2">
                <h2>Digimon Page</h2>
                <div className="row m-2 mt-4">
                    {digimons.slice(1, 10).map((digimon, idx) => {
                        return <Card digimon={digimon} key={idx}/>
                    })}
                </div>
            </div>
        </>
    )
}
