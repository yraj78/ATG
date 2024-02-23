import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SignInModal = ({ showSignInModal, closeModal }) => {
    return (
        <Modal show={showSignInModal} onHide={closeModal} dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title style={{ color: 'green' }}><h6>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h6></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h6>Sign In</h6>
                        <button style={{ border: 'none', background: 'none' }}><span>Don't have an account?</span> <span style={{ color: 'blue' }}>Sign Up</span></button>
                    </div>
                    <div style={{ display: 'flex', marginTop: '5px' }}>
                        <div>
                            <div style={{ marginBottom: '20px' }} className="form-group">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div style={{ marginBottom: '20px' }} className="form-group">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div style={{ marginBottom: '20px' }} className="form-group">
                                <input type="password" placeholder="Confirm Password" />
                            </div>

                            <Button style={{ width: '15rem', marginBottom: '20px' }} variant="primary">Sign In</Button>
                            <Button style={{ background: 'none', color: 'black', border: '1px solid black', width: '15rem' }}><img src='fb.svg' alt="Facebook" /> Sign up with Facebook</Button>
                            <Button style={{ background: 'none', color: 'black', border: '1px solid black', width: '15rem' }}><img src='google.svg' alt="Google" /> Sign up with Google</Button>
                            <a style={{ marginLeft: '3rem' }} href="/" onClick={closeModal}>Forgot password?</a>
                        </div>
                        <div className="image">
                            <img src='Signup.svg' alt="SignIn" />

                            <p style={{ fontSize: '12px', marginBottom: '0',marginLeft:'5px',marginTop:'40px',opacity:0.5 }}>By signing up, you agree to our Terms & conditions,<br /> Privacy policy</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SignInModal;