import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import googleIcon from '../../assets/images/google-icon.png';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pass" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="pass" id="" />
                    </div>
                    <input className='form-submit' type="button" value="Sign Up" />
                </form>
                <p>
                    Already have an account ?<Link to='/login' className='form-link '>Login</Link>
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