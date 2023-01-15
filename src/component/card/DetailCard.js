import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./DetailCard.css";

const DetailCard = () => {
  const poke = useSelector((state) => state?.user.singlePagePokemon[0]);
  const {
    // base_experience,
    // height,
    // weight,
    // id,
    // location_area_encounters,
    name,
    sprites: {
      front_shiny,
      other: {
        "official-artwork": { front_default },
      },
    },
  } = poke;
  console.log("POKE CONTAINER", poke);
  return (
    <div className="detail-container">
      <div className="image-container">
        <span className="icon">
          <img className="icon-image" src={front_shiny} alt={name} />
        </span>
        <img src={front_default} alt={name} />
      </div>
    </div>
  );
};

export default DetailCard;
