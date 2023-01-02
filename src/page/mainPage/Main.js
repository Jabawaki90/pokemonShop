import { useState, useEffect } from "react";
import Card from "../../component/card/Card";
import "./Main.css";
import Modal from "../../component/modal/Modal";

const pokemon = "https://pokeapi.co/api/v2/pokemon";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [path, setPath] = useState(pokemon);
  const [current, setCurrent] = useState();
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [pokeList, setPokeList] = useState();

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data);
        setNext(data?.next);
        setPrev(data?.previous);
      });
  }, [path]);

  const nextPage = () => {
    setPath(next);
  };
  const prevPage = () => {
    setPath(prev);
  };

  //   console.log("current", current);

  return (
    <div className="main-container">
      <div className="button-container">
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
      </div>
      <div className="list-container">
        {current?.results.map((el, index) => {
          console.log(el);
          return <Card key={index} {...el} />;
        })}
      </div>
      <div className="button-container">
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default Main;
