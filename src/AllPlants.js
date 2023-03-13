import React from 'react'
import Plant from './Plant'

function AllPlants({allPlants, compare}) {

    let plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    
    return(
        <div>
            {allPlantsComps}
        </div>
    )
}

export default AllPlants