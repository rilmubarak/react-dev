import React, {Component} from 'react';
import useFetcher from '../hooks/useFetcher'
// import { useLocation } from "react-router-dom";

export default () => {
    const baseUrl = "https://digimon-api.vercel.app/api/digimon/name/"
    const {data, loading, error} = useFetcher()


    return (
        <>
            <div className="digi-card">
                <h2>Detail Page</h2>
                <div className="row">
                    {/* {JSON.stringify(this.state.digimons)} */}
                    {/* <div className="">
                        <div className="card" style={{width: "18rem"}}> 
                            <img src={this.state.digimon.img} className="card-img-top" alt="pokemon"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.digimon.name}</h5>
                                <p className="card-text">{this.state.digimon.level}</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}