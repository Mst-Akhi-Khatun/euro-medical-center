import React from 'react';
import doctor1 from '../../../images/Doctors/doctor-1.png';
import doctor2 from '../../../images/Doctors/doctor-2.png';
import doctor3 from '../../../images/Doctors/doctor-3.png';
import doctor4 from '../../../images/Doctors/doctor-4.png';
import doctor5 from '../../../images/Doctors/doctor-5.png';
import doctor6 from '../../../images/Doctors/doctor-6.png';


const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="row">
            <div className="col-md-6 d-flex align-items-center ps-5">
                <div>
                <h1>We Provide Medical Services That You Can Trust!</h1>
                <p>We Provide Medical Services That You Can Trust!We Provide Medical Services That You Can Trust!</p>
                <button className="btn btn-success text-white mx-2">Get Appointment</button>
                <button className="btn btn-success text-white">Learn More</button>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src={doctor1} className="d-block w-75" height="600" alt="..." />
            </div>
            </div>
            
            </div>
            <div className="carousel-item">
            <div className="row">
            <div className="col-md-6 d-flex align-items-center ps-5">
                <div>
                <h1>We Provide Medical Services That You Can Trust!</h1>
                <p>We Provide Medical Services That You Can Trust!We Provide Medical Services That You Can Trust!</p>
                <button className="btn btn-success text-white mx-2">Get Appointment</button>
                <button className="btn btn-success text-white">Learn More</button>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">            
            <img src={doctor2} className="d-block w-75" height="600" alt="..." />
            </div>
            </div>
            </div>

            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center ps-5">
                        <div>
                            <h1>We Provide Medical Services That You Can Trust!</h1>
                            <p>We Provide Medical Services That You Can Trust!We Provide Medical Services That You Can Trust!</p>
                            <button className="btn btn-success text-white mx-2">Get Appointment</button>
                            <button className="btn btn-success text-white">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={doctor3} className="d-block w-100" height="600" alt="..." />
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center ps-5">
                        <div>
                            <h1>We Provide Medical Services That You Can Trust!</h1>
                            <p>We Provide Medical Services That You Can Trust!We Provide Medical Services That You Can Trust!</p>
                            <button className="btn btn-success text-white mx-2">Get Appointment</button>
                            <button className="btn btn-success text-white">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={doctor4} className="d-block w-100" height="600" alt="..." />
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center ps-5">
                        <div>
                            <h1>We Provide Medical Services That You Can Trust!</h1>
                            <p>We Provide Medical Services That You Can Trust!We Provide Medical Services That You Can Trust!</p>
                            <button className="btn btn-success text-white mx-2">Get Appointment</button>
                            <button className="btn btn-success text-white">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={doctor5} className="d-block w-100" height="600" alt="..." />
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center ps-5">
                        <div>
                            <h1>We Provide Medical Services That You Can Trust!</h1>
                            <p>We Provide Medical Services That You Can Trust!We Provide Medical Services That You Can Trust!</p>
                            <button className="btn btn-success text-white mx-2">Get Appointment</button>
                            <button className="btn btn-success text-white">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={doctor6} className="d-block w-75" height="600" alt="..." />
                    </div>
                </div>
            </div>
           {/*  <div className="carousel-item">
            <img src={doctor4} className="d-block w-50" height="600" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={doctor5} className="d-block w-50" height="600" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={doctor6} className="d-block w-50" height="600" alt="..." />
            </div> */}
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