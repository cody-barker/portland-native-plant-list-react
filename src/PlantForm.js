import React, {useState} from 'react'

function PlantForm({allPlants, setAllPlants}) {

    const [binomialName, setBinomialName] = useState("")
    const [commonName, setCommonName] = useState("")
    const [type, setType] = useState("")
    const [height, setHeight] = useState("")
    const [lightRequirement, setLightRequirement] = useState("")
    const [moistureRequirement, setMoistureRequirement] = useState("")

    function handleBinomialChange(e) {
        setBinomialName(e.target.value)
    }

    function handleCommonChange(e) {
        setCommonName(e.target.value)
    }

    function handleTypeChange(e) {
        setType(e.target.value)
    }

    function handleHeightChange(e) {
        setHeight(e.target.value)
    }

    function handleLightChange(e) {
        setLightRequirement(e.target.value)
    }

    function handleMoistureChange(e) {
        setMoistureRequirement(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newPlant = {
            binomialName: binomialName,
            commonName: commonName,
            type: type,
            height: height,
            lightRequirement: lightRequirement,
            moistureRequirement: moistureRequirement
        }
        fetch('http://localhost:3001/plantList', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
        .then(r => r.json())
        .then(plant => setAllPlants([...allPlants, plant]))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleBinomialChange} type="text" name="binomialName" placeholder="Binomial Name"></input>
            <input onChange={handleCommonChange} type="text" name="commonName" placeholder="A Common Name"></input>
            <input onChange={handleTypeChange} type="text" name="type" placeholder="Type"></input>
            <input onChange={handleHeightChange} type="text" name="height" placeholder="Height"></input>
            <input onChange={handleLightChange} type="text" name="lightRequirement" placeholder="Light Requirement"></input>
            <input onChange={handleMoistureChange} type="text" name="moistureRequirement" placeholder="Moisture Requirement"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PlantForm