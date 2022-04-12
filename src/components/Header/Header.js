import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser({});
            }
        });
    }, [])

    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <nav className="header">
            <img src={logo} alt="logo" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <span onClick={handleSignOut} className="btn-style">Sign Out</span>
                        :
                        <Link to="/login">Login</Link>
                }
                <p style={{ color: 'white' }}>
                    {
                        currentUser?.displayName
                    }
                </p>
            </div>
        </nav>
    );
};

export default Header;