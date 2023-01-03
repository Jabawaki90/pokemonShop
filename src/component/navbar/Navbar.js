import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDragon, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const link = {
  textDecoration: "none",
  color: "#db0000",
  fontFamily: "arial",
};

const home_link = {
  textDecoration: "none",
};

const wishlist = {
  color: "#564d4d",
  fontSize: "30px",
};

const Navbar = () => {
  const wish = useSelector((state) => state.user.wish_list);
  const cart = useSelector((state) => state.user.cart);

  return (
    <div className="navbar-container">
      <div className="left-container">
        <Link style={home_link} to="/">
          <h1>PokemonShop</h1>
        </Link>
        <div className="primary-navigation">
          <ul>
            <li>
              <Link style={link} to="/main">
                All Pokemon
              </Link>
            </li>
            <li>
              <Link style={link}>About</Link>
            </li>
            <li>
              <Link style={link}>Category</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-container">
        <div className="icon-container">
          {wish.length > 0 && (
            <span className="amount-indicator">{wish.length}</span>
          )}
          <FontAwesomeIcon style={wishlist} icon={faHeart} />
        </div>
        <div className="icon-container">
          {cart.length > 0 && (
            <span className="amount-indicator">{cart.length}</span>
          )}
          <FontAwesomeIcon style={wishlist} icon={faDragon} />
        </div>
        <div className="icon-container">
          <FontAwesomeIcon style={wishlist} icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
