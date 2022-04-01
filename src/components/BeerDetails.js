import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function BeersDetails({ filterList }) {
    const [beer, setBeer] = useState({});
    const singleBeerID = useParams().beerId;
        
    useEffect(() => {
        setBeer(filterList(singleBeerID))
    }, [singleBeerID]);       

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