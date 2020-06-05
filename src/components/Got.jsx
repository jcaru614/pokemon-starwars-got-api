import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Got = (props) => {
    const [characters, setCharacters] = useState([]);
    function getGot() {
        axios.get("https://anapioficeandfire.com/api/houses")
            .then(res => {
                console.log(res)
                setCharacters([...res.data])
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <Navbar />
            <h1>Winter is coming</h1>
            <button onClick={getGot}>Search GOT!</button>
            <ul>
            {characters.map((character, index) => 
                <li key={index}>{character.name}</li>
      )}
            </ul>


        </div>
    );
}

export default Got;