import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./pages/Home";
import PizzaOrder from "./pages/PizzaOrder";
import PizzaSuccess from "./pages/PizzaSuccess";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pizzaOrder" component={PizzaOrder} />
        <Route exact path="/pizzaSuccess" component={PizzaSuccess} />
      </Switch>
    </>
  );
}

export default App;
