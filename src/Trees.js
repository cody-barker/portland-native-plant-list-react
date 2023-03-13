import React from 'react'
import Plant from './Plant'

function Trees({allPlants, compare}) {

    const trees = allPlants.filter(plant => plant.type.toLowerCase().includes("tree"))
    const treesSorted = [...trees].sort(compare)
    const treeComps = treesSorted.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            {treeComps}
        </div>
    )
}

export default Trees