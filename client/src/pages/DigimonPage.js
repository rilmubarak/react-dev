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
                <div className="mt-4" style={{textAlign:"center"}}>
                    <form class="form-inline my-2 my-lg-0" style={{display:"inline-block"}}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div className="row m-2 mt-4">
                    {digimons.slice(1, 10).map((digimon, idx) => {
                        return <Card digimon={digimon} key={idx}/>
                    })}
                </div>
            </div>
        </>
    )
}
