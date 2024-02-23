import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupModal from './SignupModal';

const Navbar = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);

    const openSignupModal = () => {
        setShowSignupModal(true);
    };

    const closeSignupModal = () => {
        setShowSignupModal(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="ATG.svg" alt="Logo" />
            </div>
            <div className="search-bar">
                <FontAwesomeIcon style={{ color: 'black' }} icon={faSearch} />
                <input type="text" placeholder="Search for your favorite groups in ATG" />
            </div>
            <div className="buttons">
                <button className="btn" onClick={openSignupModal}><span>Create Account</span> <span style={{ color: 'blue', fontWeight: '700' }}>It's free</span></button>
                <img src="drop.svg" alt="Logo" />
            </div>

            {/* Render the SignupModal component only when showSignupModal is true */}
            {showSignupModal && <SignupModal showSignupModal={showSignupModal} closeModal={closeSignupModal} />}
        </nav>
    );
};

export default Navbar;