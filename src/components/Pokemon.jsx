import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Pokemon() {
    const [pokemon, setPokemon] = useState([])

    function getPokemon() {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => setPokemon([...response.data.results]))
            .catch(err => console.log(err))
        // let imgUrl = ('<img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png">');
    }


    console.log("this is the pokemon ", pokemon);

    return (
        <div>
        <Navbar />
            <h1>Gotta catch em all</h1>
            <button onClick={getPokemon} >Fetch all the Pokemon</button>
            <ul>
                {pokemon.map((el, i) =>
                    <li key={i}>{el.name} <br /> <img src={"http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + (i + 1).toString() + ".png"} alt="icon" style={{ height: '100px', width: '100px', }} /></li>
                )}

            </ul>

        </div>
    )
}

export default Pokemon;