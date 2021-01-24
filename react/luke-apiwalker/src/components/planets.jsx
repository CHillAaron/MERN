import React , {useState, useEffect} from 'react';
import axios from 'axios';



const Planet = (props) => {
    const [Planet, setPlanet] = useState ({})
    const [Movies, setMovies] = useState ([])
    const [filmsPopulated, setfilmsPopulated] = useState(false)
    // const [MovieLink, setMovieLink] = useState ({})
    const {id} = props

    const slowTimeDown = async (id)=>{
        let res = await axios.get(`http://swapi.dev/api/planets/${id}`)
            .then(response =>{ console.log("this is the .then resposne",response)
            console.log("this is the response.data return", response.data)
            return (response.data)
        })
        
        
        .catch(err=> console.log("this is an error",err))
        console.log("this is before the return", res)
        return (res)
        
    }
    // setMovieLink(response.data.films.slice(29).slice(0,-1))
    useEffect(()=>{
        const f = async () =>{
            
            let planet = await slowTimeDown(id)
            console.log("this is the variable of planet", planet)
            await Moviefunction(planet.films)
            setPlanet(planet)
            setfilmsPopulated(!filmsPopulated)
        }
        f()
        },[id])

    const Moviefunction = async (movie) =>{
        // console.log('This is the Movie function',movie)
        let NewArr = []
        movie.forEach(element => {
            console.log("this is the element",element)
            axios.get(element)
            .then(response =>{ 
            NewArr.push({film: response.data.title})
            // console.log('Here is the movie axios',response.data.title)
            
        })
        // console.log(NewArr)
        .catch(err=> console.log(err))
    })
    setMovies(NewArr)
}

        const filmsMessage = () => {
            if( filmsPopulated ) {
                console.log("this is the movies for filmsMessage",Movies)
            return (

                Movies.map((film, i) => {
                    return <li key = {i}>{film.film}</li>
                }) 
                    
            )
                ;
        } else {
            return "This planet Did not show up in a Movie";
        }
        };


        return (
            <div>
                    <p>Planet: {Planet.name}</p>
                    <p>{Planet.planets}</p>
                    <p>Population: {Planet.population}</p>
                    <p>Climate: {Planet.climate}</p> 
                    <p>Films that That {Planet.name} was part of: <br/>{Movies}</p>
                    <p>Films that That {Planet.name} was part of: </p>
                    <ul>{filmsMessage()}</ul>
                    
            </div>
            );    
};

export default Planet;