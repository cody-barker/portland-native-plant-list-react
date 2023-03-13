import React from 'react'
import Plant from './Plant'

function Grasses({allPlants, compare}) {

    const grasses = allPlants.filter(plant => plant.type.toLowerCase().includes("grass"))
    const grassesSorted = [...grasses].sort(compare)
    const grassComps = grassesSorted.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            {grassComps}
        </div>
    )
}

export default Grasses