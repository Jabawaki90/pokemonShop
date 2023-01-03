import React, { useEffect, useState } from "react";
import Slider from "../../component/slider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import BannerCard from "../../component/card/BannerCard";

import "swiper/css";

const HomePage = () => {
  const [randomBanner, setRandomBanner] = useState();
  const generations = [
    "https://pokeapi.co/api/v2/generation/1/",
    "https://pokeapi.co/api/v2/generation/2/",
    "https://pokeapi.co/api/v2/generation/3/",
    "https://pokeapi.co/api/v2/generation/4/",
    "https://pokeapi.co/api/v2/generation/5/",
    "https://pokeapi.co/api/v2/generation/6/",
    "https://pokeapi.co/api/v2/generation/7/",
    "https://pokeapi.co/api/v2/generation/8/",
  ];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return `https://pokeapi.co/api/v2/generation/${result}/`;
  }

  useEffect(() => {
    fetch(getRandomInt(1, 8))
      .then((res) => res.json())
      .then((data) => {
        console.log("hellowah", data);
        setRandomBanner(data);
      });
  }, []);

  //   console.log("random", Math.floor(Math.random()) + 1);

  return (
    <div className="home-container">
      <div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            868: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 12,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          freeMode={true}
          slidesPerGroup={1}
          loop={false}
          grabCursor={true}
          modules={[Autoplay]}
        >
          {randomBanner?.pokemon_species?.map((poke, index) => {
            console.log("name", poke);
            return (
              <SwiperSlide key={index}>
                <BannerCard poke={poke.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {generations?.map((gen, index) => {
        return <Slider gen={gen} key={index} />;
      })}
    </div>
  );
};

export default HomePage;
