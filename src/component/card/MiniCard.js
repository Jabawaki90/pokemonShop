import React from "react";
import { useState, useEffect } from "react";
import "./MiniCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDragon, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import {
  addWishList,
  openModal,
  addSinglePoke,
} from "../../features/user/userSlice";

const MiniCard = (props) => {
  const wish = useSelector((state) => state?.user?.wish_list);
  const modal = useSelector((state) => state?.user?.openSingleModal);
  const single = useSelector((state) => state?.user?.singlePagePokemon);

  const dispatch = useDispatch();

  const wishlist = {
    color: "white",
    fontSize: "30px",
  };

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
    <>
      <div className="mini-card-container">
        <div
          className="mini-img-container"
          onClick={(e) => {
            e.preventDefault();
            console.log("yolo", "click");
            dispatch(openModal());
            console.log("modalus", modal);
            dispatch(addSinglePoke(pokemon));
            console.log("PPPOOKE", single);
          }}
        >
          <img
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            alt={props?.name}
          />
        </div>
        <div className="action-container">
          <h2>{props?.name}</h2>
          <div className="card-button-container">
            <div
              className="icon-container"
              onClick={() => {
                dispatch(addWishList(pokemon));
              }}
            >
              <FontAwesomeIcon style={wishlist} icon={faHeart} />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon style={wishlist} icon={faDragon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
