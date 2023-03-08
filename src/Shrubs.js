import React from 'react'
import Plant from './Plant'

function Shrubs({allPlants}) {
    
    const shrubs = allPlants.filter(plant => plant.type.toLowerCase().includes("shrub"))
    const shrubComps = shrubs.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        {shrubComps}
    )    
    
}

export default Shrubs