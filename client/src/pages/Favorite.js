import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

export default () => {

    const favorites = useSelector((state) => state.favoriteReducer.favorites)

    return (
        <>
            <div className="mt-2">
                <h2> Digimon Favorites </h2>
                <div className="row mt-4 ml-1 mr-1">
                    {favorites.map((digimon, index) => {
                        return <Card isFavorite={true} digimon={digimon} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}
