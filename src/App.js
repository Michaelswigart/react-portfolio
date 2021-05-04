import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/main";
import Portfolio from './components/portfolio';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/footer";
import React from 'react';
import Contact from './components/contact';
function App() {
  return (
  <>
  <Router>
    <Header />
    <Switch>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route  path="/" component={Main}/>
    </Switch>
    <Footer />
    </Router>
  </>
  );
}

export default App;
