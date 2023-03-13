import React from 'react'
import Plant from './Plant'

function Grasses({allPlants}) {

    const grasses = allPlants.filter(plant => plant.type.toLowerCase().includes("grass"))
    const grassesSorted = [...grasses].sort(compare)
    const grassComps = grassesSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
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
            {grassComps}
        </div>
    )
}

export default Grasses