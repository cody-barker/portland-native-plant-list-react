import React, {useState} from 'react'
import Plant from './Plant'

function AllPlants({allPlants, compare}) {

    const plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)

    const [biSearch, setBiSearch] = useState("")
    const [comSearch, setComSearch] = useState("")

    const plantSearch = plantsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.toLowerCase()))
    //this returns everything bc of spaces counted as empty strings in the names
    //is split and join actually working? is there still a space?

    const searchComps = plantSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    function handleBiNameSearchState(e) {
        setBiSearch(e.target.value)
    }

    function handleComNameSearchState(e) {
        setComSearch(e.target.value)
    }

    function handleSearch(e) {
        e.preventDefault()
    }

    console.log(`biSearch: ${biSearch}`)
    console.log(`comSearch: ${comSearch}`)


    return(
        <div>
            <form onChange={handleSearch}>
                <input onChange={handleBiNameSearchState} type="text" placeholder="Search by Binomial Name" value={biSearch}></input>
                <input onChange={handleComNameSearchState} type="text" placeholder="Search by Common Name" value={comSearch}></input>
            </form>
            {biSearch === "" && comSearch === ""? allPlantsComps : searchComps}
        </div>
    )
}

export default AllPlants