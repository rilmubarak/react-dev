import React from 'react';
import useFetcher from '../hooks/useFetcher'
import { useParams, Link } from 'react-router-dom'

export default () => {
    const { name } = useParams();
    const baseUrl = `https://digimon-api.vercel.app/api/digimon/name/${name}`
    const {data:digimons, loading, error} = useFetcher(baseUrl)

    if (loading) {
        return (
            <>
                <div>
                    <p>Waiting for mmoment gan...</p>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <div>
                    <p>Sometimes When Wrong</p>
                </div>
            </>
        )
    }


    return (
        <>
            <div>
            <h2 className="mt-2">Detail Page</h2>
            <div className="row m-2 mt-4" style={{justifyContent:"center"}}>
                <div className="col-3 mb-3">
                    <div className="card" style={{width: "18rem"}}> 
                        <img src={digimons[0].img} className="card-img-top" alt="pokemon"/>
                        <div className="card-body">
                            <h5 className="card-title">{digimons[0].name}</h5>
                            <p className="card-text">{digimons[0].level}</p>
                            <Link to={`/`} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}