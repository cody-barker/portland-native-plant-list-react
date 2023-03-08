import React, {useState} from 'react'

function PlantForm() {

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
        fetch('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleBinomialChange} type="text" name="binomialName" placeholder="BinomialName"></input>
            <input onChange={handleCommonChange} type="text" name="commonName" placeholder="commonName"></input>
            <input onChange={handleTypeChange} type="text" name="type" placeholder="type"></input>
            <input onChange={handleHeightChange} type="text" name="height" placeholder="height"></input>
            <input onChange={handleLightChange} type="text" name="lightRequirement" placeholder="lightRequirement"></input>
            <input onChange={handleMoistureChange} type="text" name="moistureRequirement" placeholder="moistureRequirement"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PlantForm