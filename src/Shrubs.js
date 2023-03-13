import React from 'react'
import Plant from './Plant'

function Shrubs({allPlants, compare}) {
    
    const shrubs = allPlants.filter(plant => plant.type.toLowerCase().includes("shrub"))
    const shrubsSorted = [...shrubs].sort(compare)
    const shrubComps = shrubsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            {shrubComps}
        </div>
    )    
}

export default Shrubs