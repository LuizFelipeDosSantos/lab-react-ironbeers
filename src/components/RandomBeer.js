import { useEffect, useState } from "react";


export function RandomBeer() {
    const [beer, setBeer] = useState({});

    useEffect(() => {
        async function fetchRandomBeer() {
            const res = await fetch("https://ih-beers-api2.herokuapp.com/beers/random");
            const data = await res.json();
            setBeer(data);
        }
        fetchRandomBeer();
    }, []);

    return (
        <div className="flex">
        {/* Error: undefined beer -> therefore first check if it exists */}
        {beer ? ( 
            <>
                <div>
                    <img src={beer.image_url} alt={beer.name} height={300}/>
                </div>
                <div className="beer-info">
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p><b>{beer.first_brewed}</b></p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p><b>Created by: </b>{beer.contributed_by}</p>
                </div>
            </>) :  (
                "🍻Loading..."
            )        
        }
        </div>
        
    )
}