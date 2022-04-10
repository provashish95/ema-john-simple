import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import googleIcon from '../../assets/images/google-icon.png';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Login</h2>
                <form >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pass" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-john? <Link to='/signup' className='form-link '>Create an account</Link>
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

export default Login;