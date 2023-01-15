// import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wish_list: [],
  cart: [],
  user_sign_in: true,
  openSingleModal: false,
  singlePagePokemon: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSinglePoke: (state, action) => {
      state.singlePagePokemon = [action.payload];
    },
    addWishList: (state, action) => {
      state.wish_list = [...state.wish_list, action.payload];
    },
    addToCart: (state) => {},
    openModal: (state) => {
      state.openSingleModal = true;
    },
    closeModal: (state) => {
      state.openSingleModal = false;
    },
  },
});

export const { addWishList, addToCart, openModal, closeModal, addSinglePoke } =
  userSlice.actions;

export default userSlice.reducer;
