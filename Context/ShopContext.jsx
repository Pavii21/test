import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"; // Ensure correct import path

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] += 1;
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo=all_product.find((product)=>product.id===Number(item))
            totalAmount +=itemInfo.new_price * cartItems[item];
        }
        return totalAmount;
    }
  }

  const getTotalCartItems =()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
  }

  const contextValue = { getTotalCartItems,getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
