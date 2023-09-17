import React from 'react';

function Pokecard(props) {
  return (
    <div className="pokecard">
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <p>Type: {props.type}</p>
    </div>
  );
}

export default Pokecard;
