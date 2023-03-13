import React from 'react'
import Plant from './Plant'

function Herbs({allPlants, compare}){

    const herbs = allPlants.filter(plant => plant.type.toLowerCase().includes("herb"))
    const herbsSorted = [...herbs].sort(compare)
    const herbComps = herbsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            {herbComps}
        </div>
    );
};

export default Herbs;