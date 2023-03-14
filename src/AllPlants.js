import React, {useState, useEffect} from 'react'
import Plant from './Plant'

function AllPlants({allPlants, compare}) {

    const plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)

    const [biSearch, setBiSearch] = useState("")
    const plantSearch = plantsSorted.filter(plant => plant.binomialName.toLowerCase().includes(biSearch.toLowerCase()))
    const searchComps = plantSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    function handleSearchState(e) {
        setBiSearch(e.target.value)
    }

    function handleSearch(e) {
        e.preventDefault()
    }

    return(
        <div>
            <form onChange={handleSearch}>
                <input onChange={handleSearchState} type="text" placeholder="Search by Binomial Name" value={biSearch}></input>
            </form>
            {biSearch === "" ? allPlantsComps : searchComps}
        </div>
    )
}

export default AllPlants