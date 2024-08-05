import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout"
import Thanks from './components/Thanks'

export const config = {
  endpoint: `https://qkart-frontend-3ptl.onrender.com/api/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <Switch>
      <Route path='/Register'>
          <Register />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Products />
        </Route>
        <Route path="/checkout" >
          <Checkout/>
        </Route>
        <Route path="/thanks" >
          <Thanks/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// 1. Run setup.sh in main Folder
// 2. Navigate to the backend folder
// 3.Run npm start to run backend server on 8081.
// 4.Create a new terminal npm start in main folder.
