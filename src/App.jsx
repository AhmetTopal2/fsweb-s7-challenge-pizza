import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./pages/Home";
import PizzaOrder from "./pages/PizzaOrder";
import PizzaSuccess from "./pages/PizzaSuccess";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [order, setOrder] = useState('');
  console.log(order);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home setSelectedProduct={setSelectedProduct} />
        </Route>
        <Route exact path="/pizzaOrder">
          <PizzaOrder selectedProduct={selectedProduct} setOrder={setOrder} />
        </Route>
        <Route exact path="/pizzaSuccess">
          <PizzaSuccess order={order} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
