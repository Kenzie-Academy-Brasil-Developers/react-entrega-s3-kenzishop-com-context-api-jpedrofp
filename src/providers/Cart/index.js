import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Adicionado ao carrinho");
  };

  const removeFromCart = (actualIndex) => {
    setCart(
      cart.filter((product, index) => {
        return actualIndex !== index;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
