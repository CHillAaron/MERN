import React , {useState}from 'react';



const Poke = () => {
    const [pokedex, setpokedex] = useState ([])


    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response.results);
                setpokedex(response.results)
            })
            .catch(err=>{
                console.log(err);
            });
    }

    return (
        <>
            <button onClick={getPokemon}>Poke Dex</button>
            {
                pokedex.map((pokemon, i) =>{
                    return <div key = {i}>{pokemon.name}</div>
                })
            }
        </>
    );
};

export default Poke;