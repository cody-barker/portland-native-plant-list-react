import React from 'react'
import Plant from './Plant'

function AllPlants({allPlants}) {

    const plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
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
            {allPlantsComps}
        </div>
    )
}

export default AllPlants