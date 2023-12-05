
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);


import Home from './Home';

function App() {
return(
  <Router>
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
};

export default App
