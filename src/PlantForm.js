import React, {useState} from 'react'

function PlantForm() {

    const [binomialName, setBinomialName] = useState("")

    function handleChange(e) {
        setBinomialName(e.target.value)
    }

    return(
        <form>
            <input onChange={handleChange} type="text" name="binomialName" placeholder="BinomialName"></input>
            <input type="text" name="commonName" placeholder="commonName"></input>
            <input type="text" name="type" placeholder="type"></input>
            <input type="text" name="height" placeholder="height"></input>
            <input type="text" name="lightRequirement" placeholder="lightRequirement"></input>
            <input type="text" name="moistureRequirement" placeholder="moistureRequirement"></input>
        </form>
    )
}

export default PlantForm