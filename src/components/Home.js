import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

export function Home() {
    return (
        <div>
            <div>
                <Link to="/beers">
                    <img src={beersImg} alt="Beers" />
                    <h1>All Beers</h1>
                </Link>
            </div>
            <div>
                <Link to="/random-beer">
                    <img src={randomBeerImg} alt="Random Beer" />
                    <h1>Random Beer</h1>
                </Link>
            </div>
            <div>
                <Link to="/new-beer">
                    <img src={newBeerImg} alt="New Beer" />
                    <h1>New Beer</h1>
                </Link>
            </div>
        </div>    
    ) 
}