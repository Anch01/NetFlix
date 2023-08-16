import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Starting.css";

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <header className="topNav">
      <div className="logo-container"> {/* Logo on the left */}
        <Link className="navbar-brand" to="/">
          <img
            className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
          />
        </Link>
      </div>
      
      <div className="navbar right-corner"> {/* Buttons on the right */}
        <form className="d-flex" role="search">
          <select className="form-control">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className="btn" onClick={clickHandler}>
            Signin
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
