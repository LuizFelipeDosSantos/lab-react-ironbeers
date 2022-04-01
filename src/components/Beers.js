import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Beers() {
    const [beersList, setBeersList] = useState([]);

    useEffect(() => {
        async function fetchBeersList() {
            const res = await fetch("https://ih-beers-api2.herokuapp.com/beers");
            const data = await res.json();

            setBeersList(data);
        }

        fetchBeersList();
    }, []);

    return (
        <div>
            {beersList.length === 0 ? "🍻Loading..." :
             beersList.map(({ _id, name, tagline, contributed_by, image_url }) => {
                return (
                        <div className="flex">
                            <div>
                                <img src={image_url} alt={name} height={150}/>
                            </div>
                            <div className="beer-info">
                                <Link to={"/beers/" + _id}>
                                    <h2>{name}</h2>
                                </Link>
                                <h3>{tagline}</h3>
                                <p><b>Created by: </b>{contributed_by}</p>
                            </div>                     
                        </div>
                );
            })}
        </div>
    )
}