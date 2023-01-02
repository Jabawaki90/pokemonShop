import React, { useState, useEffect } from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MiniCard from "../card/MiniCard";

// const url = "https://pokeapi.co/api/v2/generation/1/";

const Slider = (props) => {
  const [pokeGen, setPokeGen] = useState([]);
  const [genName, setGenName] = useState();

  useEffect(() => {
    fetch(props.gen)
      .then((res) => res.json())
      .then((data) => {
        setPokeGen(data?.pokemon_species);
        setGenName(data?.name);
      });
  }, []);

  return (
    <div className="slider-container">
      <h2>{genName}</h2>
      <div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            868: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          freeMode={true}
          slidesPerGroup={1}
          loop={false}
          grabCursor={true}
        >
          {pokeGen.map((poke, index) => {
            return (
              <SwiperSlide key={index}>
                <MiniCard name={poke?.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
