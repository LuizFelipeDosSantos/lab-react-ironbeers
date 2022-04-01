import { Link } from "react-router-dom";

export function Beers( {beersList} ) {
    
    return (
        <div>
            {beersList.length === 0 ? "🍻Loading..." :
             beersList.map(({ _id, name, tagline, contributed_by, image_url }) => {
                return (
                        <div className="flex" key={_id}>
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