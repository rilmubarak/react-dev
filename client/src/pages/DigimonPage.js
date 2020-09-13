import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getDigimons } from '../store/actions/digimonAction'
import Card from '../components/Card'

export default () => {

    const data = useSelector((state) => state.digimonReducer.digimons);
    const [digimons, setDigimons] = useState(data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDigimons())
    }, [dispatch]);

    useEffect(() => {
        setDigimons(data)
    }, [data])

    return (
        <>
            <div className="mt-2">
                <h2>Digimon List</h2>
                <div className="mt-4" style={{textAlign:"center"}}>
                    <form className="form-inline my-2 my-lg-0" style={{display:"inline-block"}}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
