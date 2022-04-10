import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import googleIcon from '../../assets/images/google-icon.png';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your Two Passwords did not match!")
            return;
        } else {

        }
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="pass" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="button" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link to='/login' className='form-link '>Login</Link>
                </p>
                <div className='form-line'>
                    <div className='form-line-left'></div>
                    <div className='form-line-center'>or</div>
                    <div className='form-line-right'></div>
                </div>

                <button className='login-button'>
                    <img src={googleIcon} alt="googleIcon" />
                    <span>Continue with google</span>
                </button>
            </div>
        </div>
    );
};

export default SignUp;