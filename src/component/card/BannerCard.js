import React from "react";
import { useState, useEffect } from "react";

const BannerCard = (props) => {
  const [pokemon, setPokemon] = useState();

  const url = `https://pokeapi.co/api/v2/pokemon/${props.poke}/`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        console.log("dataroo", pokemon);
      });
  }, []);

  return (
    <div>
      <img
        src={pokemon?.sprites?.other["official-artwork"].front_default}
        alt={pokemon?.name}
      />
    </div>
  );
};

export default BannerCard;
