import React from 'react'
import Plant from './Plant'
import Search from './Search'

function AllPlants({biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, compare, allPlants, moistSearch, handleMoistSearchState}) {

    const plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const plantSearch = plantsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.toLowerCase()) && plant.moistureRequirement.split(" ").join("").toLowerCase().includes(moistSearch.toLowerCase()))
    const searchComps = plantSearch.map(plant => <Plant plant={plant} key={plant.id}/>)
    
    return(
        <div>
            <Search handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch} moistSearch={moistSearch} handleMoistSearchState={handleMoistSearchState}/>
            {biSearch === "" && comSearch === "" && moistSearch === "" ? allPlantsComps : searchComps}
        </div>
    )
}

export default AllPlants