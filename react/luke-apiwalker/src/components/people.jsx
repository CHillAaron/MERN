import React , {useState, useEffect}from 'react';
import axios from 'axios';
import { Link} from "@reach/router";



const People = (props) => {

    // const [firstResponse, secondResponse] = await Promise.all([
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p1}`),
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}`)
    //   ]);
    const [Guide, setGuide] = useState ({})
    const [Planet, setPlanet] = useState({})
    const [Homeworldlink, setHomeworldlink] = useState({})
    useEffect(()=>{
    axios.get(`http://swapi.dev/api/people/${props.id}`)
        .then(response =>{ console.log(response)
            setHomeworldlink(response.data.homeworld.slice(29).slice(0,-1))
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

// if (category.toLowerCase() === "people") {
//     setHomeWorldId(response.data.homeworld.slice(29).slice(0,-1));
// }


    return (
        <div>

            <p>Name: {Guide.name}</p>
            <p>Eye Color: {Guide.eye_color}</p>
            <p>Gender: {Guide.gender}</p>
            {/* <p>Homeworld: <Link to={`/${Guide.homeworld}`}>{Planet.name}</Link></p> */}
            <p>Homeworld: <Link to={`/starwars/planets/${Homeworldlink}`}>{Planet.name}</Link></p>
            

            
        </div>
    );
};

export default People;