import React from 'react'

function Search({biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, handleMoistSearchState, moistSearch}) {

    return(
        <form>
            <input onChange={handleBiNameSearchState} type="text" placeholder="Search by Binomial Name" value={biSearch}></input>
            <input onChange={handleComNameSearchState} type="text" placeholder="Search by Common Name" value={comSearch}></input>
            <select onChange={handleMoistSearchState} type="text" placeholder="Search by Moisture Requirement" value={moistSearch}>
                <option value="Dry">Dry</option>
                <option value="Moist">Moist</option>
                <option value="Wet">Wet</option>
            </select>
        </form>
    )
}

export default Search