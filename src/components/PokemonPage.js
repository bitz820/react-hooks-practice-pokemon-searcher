import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])

const addPokemon = (newPokemon) => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newPokemon)
  }

  fetch('http://localhost:3001/pokemon', configObj)
  .then(r => r.json())
  .then(data => setPokemon([...pokemon, data]))
}

const filterPokemon = () => {
  console.log(search)
  const filteredArr = pokemon.filter(item => item.name.toLowerCase().includes(search))
  return filteredArr
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection data={filterPokemon()} />
    </Container>
  );
}

export default PokemonPage;
