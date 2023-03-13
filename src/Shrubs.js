import React from 'react'
import Plant from './Plant'

function Shrubs({allPlants}) {
    
    const shrubs = allPlants.filter(plant => plant.type.toLowerCase().includes("shrub"))
    const shrubsSorted = shrubs.sort(compare)
    const shrubComps = shrubsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    function compare(a, b) {
        if (a.binomialName < b.binomialName) {
            return -1
        }
        if (a.binomialName > b.binomialName) {
            return 1
        }
        return 0
    }

    return(
        <div>
            {shrubComps}
        </div>
    )    
}

export default Shrubs