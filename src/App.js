import { useState, useEffect } from "react";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import { Route, Switch } from "react-router";
function App() {
  const [data, setData] = useState([]);
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
          <Products products={data} />;
        </Route>
        <Route path="/produnt-detail/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
