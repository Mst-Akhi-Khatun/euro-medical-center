import React from 'react';
import image from '../../images/logo-1.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="container-fluid footer-main p-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="image" src={image} alt="" width="180px" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <p>About Online food</p>
                                <p>Read our blog</p>
                                <p>Sign up to deliver</p>
                                <p>Add your restaurant</p>
                            </div>
                            <div className="col-md-6">
                                <p>Get help</p>
                                <p>Read FAQs</p>
                                <p>View all cities</p>
                                <p>Restaurant near me</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-7">                        
                    <p>Copyright &copy 2021 Online Food</p>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-4"><p>Privacy policy</p></div>
                            <div className="col-md-4"><p>Terms of Use</p></div>
                            <div className="col-md-4"><p>Pricing</p></div>
                        </div>
                    </div>
                </div>                
            </footer>
        </div>
    );
};

export default Footer;