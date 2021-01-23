import React , {useState, useEffect}from 'react';
import axios from 'axios';



const Film = () => {
    const [Guide, setGuide] = useState ([])

    useEffect(()=>{
    axios.get('http://swapi.dev/api/films/')
        .then(response =>{ console.log(response)
        setGuide(response.data.results)
        })
        .catch(err=> console.log(err))
    },[])

    return (
        <div>
            
            {
                Guide.map((info,i)=>{
                   return <div key={i}>
                    <p>{info.title}</p>
                    </div>
                })
            }
           
        </div>
    );
};

export default Film;