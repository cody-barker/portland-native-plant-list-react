import React from 'react'
import Plant from './Plant'

function Trees({allPlants}) {

    const trees = allPlants.filter(plant => plant.type.toLowerCase().includes("tree"))
    const treesSorted = [...trees].sort(compare)
    const treeComps = treesSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
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
            {treeComps}
        </div>
    )
}

export default Trees