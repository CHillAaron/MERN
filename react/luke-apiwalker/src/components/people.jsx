import React , {useState, useEffect}from 'react';
import axios from 'axios';



const People = (props) => {
    const [Guide, setGuide] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/${props.category}/${props.id}`)
        .then(response =>{ console.log(response)
        setGuide(response.data)
        })
        .catch(err=> console.log(err))
    },[props])

    return (
        <div>

            <p>{Guide.name}</p>
            <p>{Guide.eye_color}</p>
            <p>{Guide.gender}</p>
            <p>{Guide.title}</p>
            {/* <p>{Guide.planets}</p> */}
            <p>{Guide.producers}</p>
            <p>{Guide.climate}</p> 
            
        </div>
    );
};

export default People;