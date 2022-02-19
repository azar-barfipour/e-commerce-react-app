import { useState, useEffect } from "react";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Route, Switch } from "react-router";
function App() {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const filterByNameHandler = (entered) => {
    console.log(entered);
    if (entered) {
      //  I should check clear state when cleaning the input
      // Also try button instead of search bar for searching
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(entered.toLowerCase())
      );
      setData(filteredData);
    }
  };

  const orderCartAppHandler = (cartData) => {
    console.log(cartData);
    setCartData(cartData);
  };

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
          <Products
            products={data}
            onOrderToApp={orderCartAppHandler}
            onFilterName={filterByNameHandler}
          />
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
