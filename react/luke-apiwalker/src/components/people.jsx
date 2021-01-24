import React , {useState, useEffect}from 'react';
import axios from 'axios';



const People = (props) => {

    // const [firstResponse, secondResponse] = await Promise.all([
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p1}`),
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}`)
    //   ]);
    const [Guide, setGuide] = useState ({})
    const [Planet, setPlanet] = useState({})
    useEffect(()=>{
    axios.get(`http://swapi.dev/api/people/${props.id}`)
        .then(response =>{ console.log(response)
            setGuide(response.data)
            Homeworld(response.data.homeworld)
        })
        .catch(err=> console.log(err))
    },[props])

    const Homeworld = (planet) =>{
        console.log('This is the homeworld function',planet)
        axios.get(planet)
        .then(response =>{ console.log('Here is the planets axios',response)
            setPlanet(response.data)
        })
        .catch(err=> console.log(err))
    }
    


    return (
        <div>

            <p>Name: {Guide.name}</p>
            <p>Eye Color: {Guide.eye_color}</p>
            <p>Gender: {Guide.gender}</p>
            <p>Homeworld: {Planet.name}</p>

            
        </div>
    );
};

export default People;