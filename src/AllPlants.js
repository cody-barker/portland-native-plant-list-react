import React from 'react'
import Plant from './Plant'
import Search from './Search'

function AllPlants({biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, compare, allPlants}) {

    const plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const plantSearch = plantsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = plantSearch.map(plant => <Plant plant={plant} key={plant.id}/>)
    
    return(
        <div>
            <Search handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
            {biSearch === "" && comSearch === "" ? allPlantsComps : searchComps}
        </div>
    )
}

export default AllPlants