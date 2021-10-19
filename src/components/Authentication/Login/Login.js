import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Login.css";
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo-1.png';

const Login = () => {
    const { user, googleSignIn, userLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const handleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect);
            })
    }

    const getEmailValue = (e) => {
        setEmail(e.target.value);
    }
    const getPasswordValue = (e) => {
        setPassword(e.target.value);
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        userLogin(email, password)
        .then((result) => {
            history.push(redirect);
        })

    }
    return (
        //  this is sign in / login section
        <div className="login-form">
            <div className="container py-1">
                <div className="text-center">
                    <img src={logo} alt="" className="w-25" />
                </div>
                <div className="container w-100">
                    <div className="form-container mx-auto rounded-3">
                        <h3>Welcome Back!</h3>
                        <p>Login to your account using your preferred social network authentication</p>
                        <button onClick={handleSignIn} className="btn btn-outline-secondary my-3 form-control">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" width="25px" /> Google Sign In</button>
                        <p>Or Login with your email address and the password</p>
                        {/* login form */}
                        <form onSubmit={handleLogIn}>
                            <label for="">Your email</label>
                            <input onBlur={getEmailValue} type="email" placeholder="Enter Your Email" className="form-control mb-4 mt-2 mx-auto" />
                            <label for="">Password</label>
                            <input onBlur={getPasswordValue} type="password" placeholder="Enter Your Password" className="form-control mx-auto mb-4 mt-2" />
                            <input type="submit" value="Sign in" className="mb-3 form-control bg-info text-light" />
                        </form>
                        <p>Don’t have an account? <Link to="/register" className="text-info">Create Account</Link></p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;