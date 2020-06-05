import React from 'react';


function DisplaySW(props) {
    console.log("from display:", props);

    if (props.category === 'people') {
        console.log(props.category)
        return (
            <div>
                <p>{props.starwars.name}</p>
                <p>{props.starwars.height}</p>
                <p>{props.starwars.hair_color}</p>
                <p>{props.starwars.eye_color}</p>
                <p>{props.starwars.homeworld}</p>
                
            </div>
        )
    } else if (props.category === 'planets') {
        console.log(props.category)
        return (
            <div>
                <p>{props.starwars.name}</p>
                <p>{props.starwars.climate}</p>
                <p>{props.starwars.gravity}</p>
                <p>{props.starwars.population}</p>
                <p>{props.starwars.residents}</p>
            </div>
        )
    } else if (props.category === 'films') {
        console.log(props.category)
        return (
            <div>
                <p>{props.starwars.title}</p>
                <p>{props.starwars.episode_id}</p>
                <p>{props.starwars.director}</p>
                <p>{props.starwars.release_date}</p>
                <p>{props.starwars.characters}</p>
            </div>
        )
    } else if (props.category === 'species') {
        console.log(props.category)
        return (
            <div>
                <p>{props.starwars.name}</p>
                <p>{props.starwars.classification}</p>
                <p>{props.starwars.skin_color}</p>
                <p>{props.starwars.average_lifespan}</p>
                <p>{props.starwars.homeworld}</p>
            </div>
        )

    } else if (props.category === 'vehicles') {
        console.log(props.category)
        return (
            <div>
                {props.starwars.map((el, i) => (
                    <p key={i}>{el.name}, {el.model}, {el.vehicle_class}</p>
                ))}

            </div>
        )

    } else if (props.category === 'starships') {
        console.log(props.category)
        return (
            <div>
                {props.starwars.map((el, i) => (
                    <p key={i}>{el.name}, {el.model}, {el.starship_class}</p>
                ))}

            </div>
        )

    } else {
        return (
            <div>Misa thinks ders a problem!</div>
        )
    }
}

export default DisplaySW