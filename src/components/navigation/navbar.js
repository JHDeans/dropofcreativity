import React from "react";
import {
  BrowserRouter,
  Switch,
  NavLink as Link,
  Route
} from "react-router-dom";

import ImageLogo from "../../../static/assets/images/logos/dropofcreativity-splash-page-logo.png";

import Splash from "../pages/splash";
import Gallary from "../pages/gallary";
import Contact from "../pages/contact";
import Login from "../pages/login";

const Navbar = () => {
  return (
    <div className="page-container">
      <BrowserRouter>
        <div className="navbar-container">
          <div className="navbar-wrapper">
            <div className="client-name">
              <img src={ImageLogo} />
            </div>
            <div className="links-wrapper">
              <div className="link-wrapper">
                <Link exact to="/">
                  HOMEPAGE
                </Link>
              </div>
              <div className="link-wrapper">
                <Link to="/grid">GALLARY</Link>
              </div>
              <div className="link-wrapper">
                <Link to="/contact">CONTACT</Link>
              </div>
              <div className="link-wrapper">
                <Link to="/login">LOGIN</Link>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/grid" component={Gallary} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
