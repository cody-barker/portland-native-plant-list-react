import React from 'react'

function Trees({allPlants}) {
    return(
        <div className="plant-card">
            <h2>{binomialName}</h2>
            <h3>{commonName}</h3>
            <p>Type: {type}</p>
            <p>Height: {height}</p>
            <p>Moisture Requirement: {moistureRequirement}</p>
            <p>Light Requirement: {lightRequirement}</p>
        </div>
    )
}

export default Trees