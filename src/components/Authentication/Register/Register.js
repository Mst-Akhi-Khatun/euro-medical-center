import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo-1.png';
import { getAuth, updateProfile } from 'firebase/auth';

const Register = () => {
    const { user, googleSignIn, UserSignUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const handleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect);
            })

    }

    const getNameValue = (e) => {
        setUserName(e.target.value);
    }
    const getEmailValue = (e) => {
        setEmail(e.target.value);
    }
    const getPasswordValue = (e) => {
        setPassword(e.target.value);
    }
    const auth = getAuth();
    const handleSignUp = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return;
        }
        else{
            setError('')
        }
        UserSignUp(email, password)
        .then(() => {
            history.push(redirect);
            window.location.reload();
            updateProfile(auth.currentUser, {
                displayName: userName,
            })
        })
        .catch((error) => {
            setError('Email is already in used');
        })

    }
    return (
        // this is sign up / registration section
        <div className="login-form text-center">
            <div className="container">
                <div className="text-center">
                    <img src={logo} alt="" className="w-25" />
                </div>
                <div className="container w-100">
                    <div className="form-container mx-auto rounded-3">
                    <h1>Create an account</h1>
                    <p>Do not want another password to remember? No problem! Sign Up using one of your favourite social networks</p>
                    <button onClick={handleSignIn} className="btn btn-info form-control my-3 text-white">
                        <img src="https://i.ibb.co/93GM0Qf/34-345914-continue-with-google-white-g-logo-clipart-removebg-preview.png" className="me-2" width="25px" alt="" />
                        Sign Up With Google</button>
                    {/* login form  */}
                    <p className="text-danger">{error}</p>
                    <form onSubmit={handleSignUp}>
                        <input required onBlur={getNameValue} type="name" placeholder="Name" className="form-control mx-auto mb-4 mt-2" />
                        <input required onBlur={getEmailValue} type="email" placeholder="Email" className="form-control mx-auto mb-4 mt-2" />
                        <input required onBlur={getPasswordValue} type="password" placeholder="Password" className="form-control mx-auto mb-4 mt-2" />
                        <input type="submit" value="Sign Up" className="my-2 mb-3 btn btn-info form-control text-white" />
                    </form>
                    
                    <p>Already have an account? <Link to="/login" className="text-info">Login</Link></p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;