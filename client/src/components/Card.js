import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <>
            {/* {JSON.stringify(this.props.digimon)} */}
            <div className="col-3 mb-3">
                <div className="card" style={{width: "18rem"}}> 
                    <img src={props.digimon.img} className="card-img-top" alt="pokemon"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.digimon.name}</h5>
                        <p className="card-text">{props.digimon.level}</p>
                        <Link to={`/detail/${props.digimon.name}`} className="btn btn-primary">Detail</Link>
                    </div>
                </div>
            </div>
        </>
    )
}