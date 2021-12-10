import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../provider/cart";
import Button from "../../components/button";
import { Card, Container } from "./styles";

const Cart = ({ type }) => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <h1>cart</h1>
      <ul>
        {cart.map((item, index) => (
          <Card key={index}>
            <p>{item.name}</p>
            <img
              src={item.image}
              alt={item.name}
              width="100px"
              height="100px"
            />
            <p>R$ {item.price}</p>
            <Button type={type} item={item} />
          </Card>
        ))}
      </ul>
      <span>
        total R$
        {cart.reduce((valorAnterior, valorAtual) => {
          return valorAnterior + valorAtual.price;
        }, 0)}
      </span>
      <Link to="/">home </Link>
    </Container>
  );
};

export default Cart;
