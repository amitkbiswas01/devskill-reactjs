import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import Car from "./components/carDetails";
import CarList from "./components/carList";
import NotFound from "./components/404";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/">React Router Basic</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="w-100 navbar-nav d-flex justify-content-end">
              <NavLink to="/all-cars">All Cars</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <Switch>
          <Route exact path="/">
            <CarList />
          </Route>
          <Route exact path="/all-cars">
            <CarList />
          </Route>
          <Route exact path="/all-cars/:id">
            <Car />
          </Route>
          <Route exact path="/page-not-found">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to="/page-not-found" />
          </Route>
        </Switch>
      </div>
    </>
  );
}
