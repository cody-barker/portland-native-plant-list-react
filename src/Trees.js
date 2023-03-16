import React from 'react'
import Plant from './Plant'
import Search from './Search'

function Trees({allPlants, compare, biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState}) {

    const trees = allPlants.filter(plant => plant.type.toLowerCase().includes("tree"))
    const treesSorted = [...trees].sort(compare)
    const treeComps = treesSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const treeSearch = treesSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = treeSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            <Search biSearch={biSearch} comSearch={comSearch} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState}/>
            {biSearch === "" && comSearch === ""? treeComps : searchComps}
        </div>
    )
}

export default Trees