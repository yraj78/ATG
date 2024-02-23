import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <nav className="navbar">
      <ul className="nav">
        <li className={activeButton === 0 ? "nav-item custom-btn custom-btn-active" : "nav-item custom-btn"} onClick={() => handleClick(0)}>
          <a className="nav-link active" style={{color:'black'}} href="/">All Posts (32)</a>
        </li>
        <li className={activeButton === 1 ? "nav-item custom-btn custom-btn-active" : "nav-item custom-btn"} onClick={() => handleClick(1)}>
          <a className="nav-link" href="/">Articles</a>
        </li>
        <li className={activeButton === 2 ? "nav-item custom-btn custom-btn-active" : "nav-item custom-btn"} onClick={() => handleClick(2)}>
          <a className="nav-link" href="/">Events</a>
        </li>
        <li className={activeButton === 3 ? "nav-item custom-btn custom-btn-active" : "nav-item custom-btn"} onClick={() => handleClick(3)}>
          <a className="nav-link" href="/">Education</a>
        </li>
        <li className={activeButton === 4 ? "nav-item custom-btn custom-btn-active" : "nav-item custom-btn"} onClick={() => handleClick(4)}>
          <a className="nav-link" href="/">Jobs</a>
        </li>
      </ul>
      <div className="right-buttons">
        <button className="custom-btn custom-btn-secondary"> Write Post<img src="drop.svg" alt="Logo" /></button>
        <button className="custom-btn custom-btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Join Group</button>
      </div>
      <hr className="horizontal-line" />
    </nav>
  );
};

export default Navbar;