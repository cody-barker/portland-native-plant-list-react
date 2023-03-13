import React from 'react'
import Plant from './Plant'

function Herbs({allPlants}){

    const herbs = allPlants.filter(plant => plant.type.toLowerCase().includes("herb"))
    const herbsSorted = [...herbs].sort(compare)
    const herbComps = herbsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    function compare(a, b) {
        if (a.binomialName < b.binomialName) {
            return -1
        }
        if (a.binomialName > b.binomialName) {
            return 1
        }
        return 0
    }

    return(
        <div>
            {herbComps}
        </div>
    );
};

export default Herbs;