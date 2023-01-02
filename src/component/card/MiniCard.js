import React from "react";
import { useState, useEffect } from "react";
import "./MiniCard.css";

const MiniCard = (props) => {
  const [pokemon, setPokemon] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${props?.name}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <div className="mini-card-container">
      <div className="mini-img-container">
        <img
          src={pokemon?.sprites?.other["official-artwork"].front_default}
          alt={props?.name}
        />
      </div>
      <h2>{props?.name}</h2>
    </div>
  );
};

export default MiniCard;
