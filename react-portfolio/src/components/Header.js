import React from "react";
const Header = ()=> {
          return (
       <>
        <header>
          {/* navbar links*/}
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="text-white navbar-brand" href="/">Michael Swigart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">         
                  <a className="text-white nav-link" href="/">About<span className="sr-only" />{/* a*/}
                  </a></li><a className="text-white nav-link" href="/">
                </a><li className="nav-item active"><a className="text-white nav-link" href="/">
                  </a><a className="text-white nav-link" href="portfolio">Portfolio</a>
                </li>
                <li className="nav-item active">
                  <a className="text-white nav-link" href="contact">Contact</a>
                </li>
              </ul>
              <span className="navbar-text">
              </span>
            </div>
          </nav>
        </header>
      </>
      );
    }
  ;

  export default Header;