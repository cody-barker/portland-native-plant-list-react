import React from 'react'

function Search({biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState}) {

    return(
        <form>
            <input onChange={handleBiNameSearchState} type="text" placeholder="Search by Binomial Name" value={biSearch}></input>
            <input onChange={handleComNameSearchState} type="text" placeholder="Search by Common Name" value={comSearch}></input>
        </form>
    )
}

export default Search