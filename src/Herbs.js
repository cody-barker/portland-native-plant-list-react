import React from 'react'
import Plant from './Plant'

function Herbs({allPlants}){

    const herbs = allPlants.filter(plant => plant.type.toLowerCase().includes("herb"))
    const herbComps = herbs.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            {herbComps}
        </div>
    );
};

export default Herbs;