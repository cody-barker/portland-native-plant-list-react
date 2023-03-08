import React from 'react'
import Plant from './Plant'

function AllPlants({allPlants}) {

    const allPlantsComps = allPlants.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            {allPlantsComps}
        </div>
    )
}

export default AllPlants