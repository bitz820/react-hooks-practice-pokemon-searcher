import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({data}) {

const renderCards = data.map(pokemon => {
  // console.log(pokemon.sprites)
  
  return <PokemonCard key={pokemon.id} sprites={pokemon.sprites} hp={pokemon.hp} id={pokemon.id} name={pokemon.name} allData={data} />
})

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {renderCards}
    </Card.Group>
  );
}

export default PokemonCollection;
