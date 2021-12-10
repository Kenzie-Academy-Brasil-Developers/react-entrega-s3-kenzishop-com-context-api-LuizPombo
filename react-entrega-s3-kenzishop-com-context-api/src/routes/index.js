import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home type="cart" />
      </Route>
      <Route path="/cart">
        <Cart type="products" />
      </Route>
    </Switch>
  );
}

export default Routes;
