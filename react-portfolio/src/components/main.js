import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Hearder";
import Footer from "./Footer";
import Home from "../pages/Home";
import Dummy from "../pages/Dummy";

function Main(props) {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/dummy">
            <Dummy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Main;