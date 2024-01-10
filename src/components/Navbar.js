import React from "react";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
        <nav className="navbar px-2" >
            <a className="navbar-brand text-primary" href="/" >WeatherApp </a>
            
            <div className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Enter City "
                aria-label="Search"
                onChange={props.searchUserCity}
                />
              <button type="submit" className="btn btn-outline-primary px-3  " onClick={props.getInfoFunction}>Search</button>
              {/* <Link type="button" className="btn btn-outline-primary ms-2 px-3" to="/review">Review</Link> */}
                        
            </div>
          
        </nav>
    </>
  );
}

export default Navbar;
