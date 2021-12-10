import { useContext } from "react";
import { CartContext } from "../../provider/cart";
import StyledButton from "@mui/material/Button";

const Button = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const text = type === "products" ? "remove from cart" : "add to cart";
  const handleClick = () => {
    if (type !== "products") {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };
  return (
    <StyledButton
      variant="outlined"
      href="#outlined-buttons"
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
