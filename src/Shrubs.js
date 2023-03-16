import React from 'react'
import Plant from './Plant'
import Search from './Search'

function Shrubs({allPlants, compare, biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState}) {
    
    const shrubs = allPlants.filter(plant => plant.type.toLowerCase().includes("shrub"))
    const shrubsSorted = [...shrubs].sort(compare)
    const shrubComps = shrubsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const shrubSearch = shrubsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = shrubSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            <Search biSearch={biSearch} comSearch={comSearch} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState}/>
            {biSearch === "" && comSearch === ""? shrubComps : searchComps}
        </div>
    )    
}

export default Shrubs