import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

export default (props) => {

    const dispatch = useDispatch();

    const addFav = () => {
        dispatch({
            type: "ADD_FAVORITE",
            payload: {
                newFav: props.digimon
            }
        })
    }

    return (
        <>
            <div className="col-3 mb-3">
                <div className="card" style={{width: "18rem"}}> 
                    <img src={props.digimon.img} className="card-img-top" alt="pokemon"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.digimon.name}</h5>
                        <p className="card-text">{props.digimon.level}</p>
                        <div className="btn-toolbar" style={{justifyContent:"center"}}>    
                            <div className="btn-group mr-2">
                                <Link to={`/detail/${props.digimon.name}`} className="btn btn-info">Detail</Link>
                            </div>

                            <div className="btn-group mr-2">
                                <button onClick={addFav} className="btn btn-dark">Add to Favorites</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}