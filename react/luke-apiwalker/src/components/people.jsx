import React , {useState, useEffect}from 'react';
import axios from 'axios';



const People = (props) => {

    // const [firstResponse, secondResponse] = await Promise.all([
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p1}`),
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}`)
    //   ]);
    const [Guide, setGuide] = useState ({})
    const [planet, setplanet] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/people/${props.id}`)
        .then(response =>{ console.log(response)
            
        setGuide(response.data)
        })
        .catch(err=> console.log(err))
        
        
    },[props])

    return (
        <div>

            <p>Name: {Guide.name}</p>
            <p>Eye Color: {Guide.eye_color}</p>
            <p>Gender: {Guide.gender}</p>
            <p>Home World: {planet.name}</p>

            
        </div>
    );
};

export default People;