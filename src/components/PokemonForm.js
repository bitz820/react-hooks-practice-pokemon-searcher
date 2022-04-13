import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
const [name, setName] = useState("")
const [hp, setHp] = useState(0)
const [front, setFront] = useState("")
const [back, setBack] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
  const newPokemon = {
    name: name,
    hp: parseInt(hp),
    sprites: {
      front: front,
      back: back
    }
  }
  addPokemon(newPokemon)
}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid 
          onChange={(e) => setName(e.target.value)} 
          label="Name" 
          placeholder="Name" 
          name="name" />
          <Form.Input fluid 
          onChange={(e) => setHp(e.target.value)} 
          label="hp" placeholder="hp" 
          name="hp" />
          <Form.Input
            fluid
            onChange={(e) => setFront(e.target.value)}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            onChange={(e) => setBack(e.target.value)}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
