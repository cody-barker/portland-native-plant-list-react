import React from 'react'
import Plant from './Plant'

function Trees({allPlants}) {

    const trees = allPlants.filter(plant => plant.type.toLowerCase().includes("tree"))
    const treeComps = trees.map(plant => <Plant plant={plant} key={plant.id}/>)


    return(
        <div className="plant-card">
            {treeComps}
        </div>
    )
}

export default Trees