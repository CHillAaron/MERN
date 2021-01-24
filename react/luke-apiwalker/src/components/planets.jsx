import React , {useState, useEffect}from 'react';
import axios from 'axios';



const Planet = (props) => {
    const [Guide, setGuide] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/planets/${props.id}`)
        .then(response =>{ console.log(response)
        setGuide(response.data)
        })
        .catch(err=> console.log(err))
    },[props])

    return (
        <div>
            <p>Planet: {Guide.name}</p>
            {/* <p>{Guide.planets}</p> */}
            <p>Population: {Guide.population}</p>
            <p>Climate: {Guide.climate}</p> 
        </div>
    );
};

export default Planet;