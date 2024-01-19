
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
]);


import Home from './Home';
import LandingPage from './routes/LandingPage';

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
          <LandingPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
};

export default App
