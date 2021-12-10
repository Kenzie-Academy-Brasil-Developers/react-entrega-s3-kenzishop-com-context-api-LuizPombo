import { Link } from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/button";

import { ProductsContext } from "../../provider/products";
import { Card, Container } from "../cart/styles";

const Home = (type) => {
  const { products } = useContext(ProductsContext);
  return (
    <Container>
      <h1>Home</h1>
      <ul>
        {products.map((item, index) => (
          <Card key={index}>
            <p>{item.name}</p>
            <img
              src={item.image}
              alt={item.name}
              height="100px"
              width="100px"
            />
            <p>R$ {item.price}</p>
            <Button type={type} item={item} />
          </Card>
        ))}
      </ul>
      <Link to="/cart">cart</Link>
    </Container>
  );
};

export default Home;
