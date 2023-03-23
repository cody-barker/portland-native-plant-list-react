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
        fetch('https://plantlist-database.onrender.com/plants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
        .then(r => r.json())
        .then(plant => setAllPlants([...allPlants, plant]))
        .then(
            setBinomialName(""),
            setCommonName(""),
            setType(""),
            setHeight(""),
            setLightRequirement(""),
            setMoistureRequirement("")
        )
        .catch(error => alert(error))
    }

    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h3>Submit a New Plant to the List</h3>
            <input required onChange={handleBinomialChange} type="text" name="binomialName" placeholder="Binomial Name" value={binomialName}></input>
            <input required onChange={handleCommonChange} type="text" name="commonName" placeholder="A Common Name" value={commonName}></input>
            <input required onChange={handleTypeChange} type="text" name="type" placeholder="Type" value={type}></input>
            <input required onChange={handleHeightChange} type="text" name="height" placeholder="Height" value={height}></input>
            <input required onChange={handleLightChange} type="text" name="lightRequirement" placeholder="Light Requirement" value={lightRequirement}></input>
            <input required onChange={handleMoistureChange} type="text" name="moistureRequirement" placeholder="Moisture Requirement" value={moistureRequirement}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PlantForm