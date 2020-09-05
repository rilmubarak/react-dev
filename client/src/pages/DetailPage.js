import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getDetail } from '../store/actions/digimonAction'

export default () => {
    const { name } = useParams();
    const digimon = useSelector((state) => state.digimonReducer.digimon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(name))
    }, [name, dispatch])

    if (digimon === null) {
        return(
            <p>Loading guys....</p>
        )
    }

    return (
        <>
            <div>
            <h2 className="mt-2">Detail Page</h2>
            <div className="row m-2 mt-4" style={{justifyContent:"center"}}>
                <div className="col-3 mb-3">
                    <div className="card" style={{width: "18rem"}}> 
                        <img src={digimon[0].img} className="card-img-top" alt="pokemon"/>
                        <div className="card-body">
                            <h5 className="card-title">{digimon[0].name}</h5>
                            <p className="card-text">{digimon[0].level}</p>
                            <Link to={`/`} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}