import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from '../pages/Home'
import OrderForm from '../pages/OrderForm'
import OrderConfirmation from '../pages/OrderConfirmation'
import './index.css'
function App() {


  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/orderform'>
          <OrderForm />
        </Route>
        <Route path='/orderconfirmation'>
          <OrderConfirmation />
        </Route>
      </Switch>
    </>
  )
}

export default App
