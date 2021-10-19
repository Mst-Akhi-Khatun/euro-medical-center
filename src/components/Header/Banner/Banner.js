import React from 'react';
import { Link } from 'react-router-dom';
import doctor1 from '../../../images/Doctors/doctor-1.png';
import doctor2 from '../../../images/Doctors/doctor-2.png';
import doctor3 from '../../../images/Doctors/doctor-3.png';
import doctor4 from '../../../images/Doctors/doctor-4.png';
import doctor5 from '../../../images/Doctors/doctor-5.png';
import doctor6 from '../../../images/Doctors/doctor-6.png';


const Banner = () => {
    return (
        // this is banner section
        <div>
            <marquee className="text-info fs-5" width="100%" direction="right" height="50px">
                EURO MEDICAL CENTER
            </marquee>
            <div id="carouselExampleControls" className="carousel slide ps-5" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="row">
            <div className="col-md-6 col-12 d-flex align-items-center px-3">
                <div className="text-justify">
                    <h1 className="pb-3">We Provide Medical Services That You Can Trust!</h1>
                    <p className="pb-3">A wide quality of diagmostic and gastroelogy service!</p>
                    <button className="btn btn-info text-white">Learn More</button>
                    <Link to="/appointment">
                        <button className="btn btn-info text-white mx-2">Get Appointment</button>
                    </Link>
                    
                </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
                <img src={doctor1} className="d-block w-75" height="600" alt="..." />
            </div>
            </div>
            
            </div>
            <div className="carousel-item">
            <div className="row">
            <div className="col-md-6 col-12 d-flex align-items-center px-3">
                <div>
                <h1 className="pb-3">Guidance for all Disease!</h1>
                <p className="pb-3">A wide quality of diagmostic and gastroelogy service</p>
                <button className="btn btn-info text-white">Learn More</button>
                <Link to="/appointment">
                    <button className="btn btn-info text-white mx-2">Get Appointment</button>
                </Link>
                </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">            
            <img src={doctor2} className="d-block w-75" height="600" alt="..." />
            </div>
            </div>
            </div>

            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex align-items-center px-3">
                        <div>
                            <h1 className="pb-3">We Provide Medical Services That You Can Trust!</h1>
                            <p className="pb-3">A wide quality of diagmostic and gastroelogy service</p>
                            <button className="btn btn-info text-white">Learn More</button>
                            <Link to="/appointment">
                                <button className="btn btn-info text-white mx-2">Get Appointment</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center">
                        <img src={doctor3} className="d-block w-100" height="600" alt="..." />
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex align-items-center px-3">
                        <div>
                            <h1 className="pb-3">We Provide Medical Services That You Can Trust!</h1>
                            <p className="pb-3">A wide quality of diagmostic and gastroelogy service</p>
                            <button className="btn btn-info text-white">Learn More</button>
                            <Link to="/appointment">
                                <button className="btn btn-info text-white mx-2">Get Appointment</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center">
                        <img src={doctor4} className="d-block w-100" height="600" alt="..." />
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex align-items-center px-3">
                        <div>
                            <h1 className="pb-3">We Provide Medical Services That You Can Trust!</h1>
                            <p className="pb-3">A wide quality of diagmostic and gastroelogy service</p>
                            <button className="btn btn-info text-white">Learn More</button>
                            <Link to="/appointment">
                                <button className="btn btn-info text-white mx-2">Get Appointment</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center">
                        <img src={doctor5} className="d-block w-100" height="600" alt="..." />
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex align-items-center px-3">
                        <div>
                            <h1 className="pb-3">We Provide Medical Services That You Can Trust!</h1>
                            <p className="pb-3">A wide quality of diagmostic and gastroelogy service</p>
                            <button className="btn btn-info text-white">Learn More</button>
                            <Link to="/appointment">
                                <button className="btn btn-info text-white mx-2">Get Appointment</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center">
                        <img src={doctor6} className="d-block w-75" height="600" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
                </div>
    );
};

export default Banner;