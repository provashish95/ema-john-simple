import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import googleIcon from '../../assets/images/google-icon.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const googleProvider = new GoogleAuthProvider();



    const handleEmailBlur = event => {
        const inputEmail = event.target.value;
        if (inputEmail) {
            if (/\S+@\S+\.\S+/.test(inputEmail)) {
                setEmail({ value: event.target.value, error: '' });
            } else {
                setEmail({ value: '', error: 'Your email is not valid' });
            }
        } else {
            setEmail({ value: '', error: 'Please fill up these field' });
        }
    }

    const handlePasswordBlur = event => {
        const inputPassword = event.target.value;
        const check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (inputPassword) {
            if (inputPassword.match(check)) {
                setPassword({ value: inputPassword, error: '' });
            } else {
                setPassword({ value: '', error: 'between 8-15 letters [lower+upper letter+ number + special letter]' });
            }
        } else {
            setPassword({ value: '', error: 'Please fill up these field' });
        }
    }
    const handleConfirmPasswordBlur = event => {
        const inputConfrimPassword = event.target.value;
        if (inputConfrimPassword) {
            if (inputConfrimPassword === password.value) {
                setConfirmPassword({ value: inputConfrimPassword, error: '' });
            } else {
                setConfirmPassword({ value: '', error: 'Password did not match' });
            }
        } else {
            setConfirmPassword({ value: '', error: 'Please fill up these field' });
        }
    }


    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (email.value && password.value && confirmPassword.value) {
            if (password.value === confirmPassword.value) {
                createUserWithEmailAndPassword(email.value, password.value)
                return;
            }
        }
    }

    // google sign in ........
    const googleAuth = (event) => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/shop');
            })
            .catch(error => {
                //const errorMessage = error.message;
                navigate('/signup');
            })
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        <br />
                        <span style={{ color: 'red' }}>{
                            email?.error && email.error
                        }</span>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="pass" id="" required />
                        <br />
                        <span style={{ color: 'red' }}>{
                            password?.error && password.error
                        }</span>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" id="" required />
                        <br />
                        <span style={{ color: 'red' }}>{
                            confirmPassword?.error && confirmPassword.error
                        }</span>
                    </div>


                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link to='/login' className='form-link '>Login</Link>
                </p>
                <div className='form-line'>
                    <div className='form-line-left'></div>
                    <div className='form-line-center'>or</div>
                    <div className='form-line-right'></div>
                </div>

                <button onClick={googleAuth} className='login-button'>
                    <img src={googleIcon} alt="googleIcon" />
                    <span>Continue with google</span>
                </button>
            </div>
        </div>
    );
};

export default SignUp;