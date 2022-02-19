import { useState, useEffect } from "react";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Route, Switch } from "react-router";
function App() {
  const orderCartAppHandler = (cartData) => {
    console.log(cartData);
    setCartData(cartData);
  };

  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const fetchHandler = async () => {
    try {
      const res = await fetch("https://jsonblob.com/api/943634345093251072");
      const data = await res.json();
      console.log(data);
      setData(data);
      if (!res.ok) {
        throw new Error("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Products products={data} onOrderToApp={orderCartAppHandler} />
        </Route>
        <Route path="/produnt-detail/:productId">
          <ProductDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart cartProducts={cartData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
