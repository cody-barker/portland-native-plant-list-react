import React from 'react'
import Plant from './Plant'

function Grasses({allPlants}) {

    const grasses = allPlants.filter(plant => plant.type.toLowerCase().includes("grass"))
    const grassComps = grasses.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            {grassComps}
        </div>
    )
}

export default Grasses