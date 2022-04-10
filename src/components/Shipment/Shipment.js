// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/images/google-icon.png';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="confirmPassword" id="" required />
                    </div>
                    {/* <p style={{ color: 'red' }}>{error}</p>
                <p style={{ color: 'red' }}>{hookError.message}</p> */}
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

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

export default Shipment;