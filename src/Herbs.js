import React from 'react'
import Plant from './Plant'
import Search from './Search'

function Herbs({allPlants, compare, biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState}){

    const herbs = allPlants.filter(plant => plant.type.toLowerCase().includes("herb"))
    const herbsSorted = [...herbs].sort(compare)
    const herbComps = herbsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const herbSearch = herbsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = herbSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            <Search biSearch={biSearch} comSearch={comSearch} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState}/>
            {biSearch === "" && comSearch === ""? herbComps : searchComps}
        </div>
    );
};

export default Herbs;