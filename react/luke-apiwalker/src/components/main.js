import React , {useState}from 'react';



const StarWars = () => {
    const [Guide, setGuide] = useState ([])


    const getInformation = () => {
        fetch("https://swapi.dev/api/")
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response.results);
                setGuide(response.results)
            })
            .catch(err=>{
                console.log(err);
            });
    }

    return (
        <>
            <button onClick={getInformation}>Poke Dex</button>
            {
                Guide.map((people, i) =>{
                    return <div key = {i}>{people.people}</div>
                })
            }
        </>
    );
};

export default StarWars;