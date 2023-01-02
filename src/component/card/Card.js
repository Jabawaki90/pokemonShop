import { useState, useEffect } from "react";
import "./Card.css";
import Modal from "../modal/Modal";

const Card = ({ name, url }) => {
  const [image, setImage] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const img = data?.sprites.other["official-artwork"].front_default;
        setImage(img);
      });
  }, [url]);

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
