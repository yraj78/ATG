import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SigninModal from './SigninModal'; 
const SignupModal = ({ showSignupModal, closeModal }) => {
    const [showSigninModal, setShowSigninModal] = useState(false);

    const openSigninModal = () => {
        setShowSigninModal(true);
    };

    const closeSigninModal = () => {
        setShowSigninModal(false);
    };

    const handleSignupClose = () => {
        closeModal(true); 
        setShowSigninModal(false); 
    };

    return (
        <>
            <Modal show={showSignupModal} onHide={handleSignupClose} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'green' }}><h6>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h6>Sign up</h6>
                            {/* Link to open SigninModal */}
                            <Button variant="link" onClick={openSigninModal}><span>Already have an account?</span> <span style={{ color: 'blue' }}>Sign In</span></Button>
                        </div>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                            <div>
                                <div style={{ marginTop: '40px', marginBottom: '20px' }} className="form-group">
                                    <input type="text" placeholder="First and last name" />
                                </div>
                                <div style={{ marginBottom: '20px' }} className="form-group">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div style={{ marginBottom: '20px' }} className="form-group">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div style={{ marginBottom: '20px' }} className="form-group">
                                    <input type="password" placeholder="Confirm Password" />
                                </div>

                                <Button style={{ width: '15rem', marginBottom: '20px' }} variant="primary">Sign up</Button>
                                <Button style={{ background: 'none', color: 'black', border: '1px solid black', width: '15rem' }}><img src='fb.svg' alt="Facebook" /> Sign up with Facebook</Button>
                                <Button style={{ background: 'none', color: 'black', border: '1px solid black', width: '15rem' }}><img src='google.svg' alt="Google" /> Sign up with Google</Button>
                                <a style={{ marginLeft: '3rem' }} href="/" onClick={closeModal}>Forgot password?</a>
                            </div>
                            <div className="image">
                                <img src='signup.svg' alt="Signup" />

                                <p style={{ fontSize: '12px', marginBottom: '0', marginLeft: '5px', marginTop: '40px', opacity: 0.5 }}>By signing up, you agree to our Terms & conditions,<br /> Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Rendering the SigninModal component only when showSigninModal is true */}
            {showSigninModal && <SigninModal showSignInModal={showSigninModal} closeModal={closeSigninModal} />}
        </>
    );
};

export default SignupModal;