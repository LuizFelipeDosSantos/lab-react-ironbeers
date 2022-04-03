import { useState } from "react";

export function NewBeer() {
    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    });

    function handleInput(event) {
        setNewBeer({...newBeer, [event.target.name]: event.target.value});
        console.log([event.target.name]);
    }

    async function addNewBeer() {
        try {
            const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newBeer),
            });
            const message = await response.json();
            console.log(message);

            setNewBeer({name: "",
                        tagline: "",
                        description: "",
                        first_brewed: "",
                        brewers_tips: "",
                        attenuation_level: 0,
                        contributed_by: ""});
          } catch (error) {
            console.error("Error adding new beer on the server!", error);
          }
    }

    return (
        <div>
            <h3>Name: </h3>
            <input value={newBeer.name} name="name" type="text" onChange={handleInput} />
            <h3>Tagline: </h3>
            <input value={newBeer.tagline} name="tagline" type="text" onChange={handleInput} />
            <h3>Description: </h3>
            <input value={newBeer.description} name="description" type="text" onChange={handleInput} />
            <h3>First Brewed: </h3>
            <input value={newBeer.first_brewed} name="first_brewed" type="text" onChange={handleInput} />
            <h3>Brewers Tips: </h3>
            <input value={newBeer.brewers_tips} name="brewers_tips" type="text" onChange={handleInput} />
            <h3>Attenuation Level : </h3>
            <input value={newBeer.attenuation_level } name="attenuation_level" type="number" onChange={handleInput} />
            <h3>Contributed by: </h3>
            <input value={newBeer.contributed_by} name="contributed_by" type="text" onChange={handleInput} />
            <br/>
            <button onClick={addNewBeer}>Add New</button>
        </div>
    )
}