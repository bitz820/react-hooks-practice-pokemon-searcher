import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites, id, allData}) {
  // const {front} = sprites.front
  // const {back} = sprites.back
  const [isFront, setisFront] = useState(true)

  const toggleCard = () => {
    setisFront(isFront => !isFront)
  }

  const cardSide = isFront ? sprites.front : sprites.back

  return (
    <Card>
      <div onClick={toggleCard} key={id}>
        <div className="image">
          <img src={cardSide} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
