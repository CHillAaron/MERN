import React , {useState, useEffect}from 'react';
import axios from 'axios';



const Planet = (props) => {
    const [Planet, setPlanet] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/planets/${props.id}`)
        .then(response =>{ console.log(response)
        setPlanet(response.data)
        })
        .catch(err=> console.log(err))
    },[props])

    return (
        <div>
            <p>Planet: {Planet.name}</p>
            {/* <p>{Planet.planets}</p> */}
            <p>Population: {Planet.population}</p>
            <p>Climate: {Planet.climate}</p> 
        </div>
    );
};

export default Planet;