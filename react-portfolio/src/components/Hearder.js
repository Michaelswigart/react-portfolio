import React from "react";
import app
//import mylogo"../logo.png;

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container"> 
  <a className="navbar-brand" href="#d"><img className="logo" src="{logo}" alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#d">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#d">about me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#d">services</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#d">work</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#d">portfolio</a>
      </li>
      <li class="nav-item">
        <a className="nav-link" href="#f">contacts</a>
      </li>
      </ul>
  </div>
 </div>
</nav>
  );
}

export default Header;