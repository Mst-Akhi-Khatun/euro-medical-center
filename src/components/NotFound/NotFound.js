import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../images/error.jpg';

const NotFound = () => {
    return (
        <div className="container text-center py-5">
            <img src={images} className="w-100" height="500" alt="" />
            <p className="mt-4">The page you are looking for might have been removed, had its name changed,<br /> or is temporarily unavailabe.</p>
            <Link to="/home">
                <button className="btn btn-info text-white mt-4">BACK TO HOME PAGE</button>
            </Link>
        </div>
    );
};

export default NotFound;