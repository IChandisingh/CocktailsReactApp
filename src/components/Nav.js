import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";
function Nav() {
  
    return (

        <div>
        <nav>
            <Link className="Link" to="/">Home</Link>
            <Link className="Link" to="/Cocktails">Cocktails</Link>
            <Link className="Link" to="/Ingredients">Ingredients</Link>
            <Link className="Link" to="/Instructions">Instructions</Link>
            <Link className="Link" to="/Garnish">Garnish</Link>
            <Link className="Link" to="/Glass">Glass</Link>
            <Link className="Link" to="/Equipment">Equipment</Link>
        </nav>
      </div>

     
    );
}
    
export default Nav;