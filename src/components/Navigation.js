import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

//  route로 props를 보냄
/**
 *   <Link to={{
         pathname:"/about",
        state: {
            fromNavigation: true
        }
      }}>About</Link>
 */
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;