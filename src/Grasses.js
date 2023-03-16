import React from 'react'
import Plant from './Plant'
import Search from './Search'

function Grasses({allPlants, compare, biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState}) {

    const grasses = allPlants.filter(plant => plant.type.toLowerCase().includes("grass"))
    const grassesSorted = [...grasses].sort(compare)
    const grassComps = grassesSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const grassSearch = grassesSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = grassSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            <Search biSearch={biSearch} comSearch={comSearch} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState}/>
            {biSearch === "" && comSearch === ""? grassComps : searchComps}
        </div>
    )
}

export default Grasses