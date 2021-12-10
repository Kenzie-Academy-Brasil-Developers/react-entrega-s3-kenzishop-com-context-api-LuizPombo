import "./App.css";
import Routes from "./routes";
import { CartProvider } from "./provider/cart";
import { ProductsProvider } from "./provider/products";
function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
