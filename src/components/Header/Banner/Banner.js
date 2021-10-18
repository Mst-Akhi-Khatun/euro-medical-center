import React from 'react';
import doctor1 from '../../../images/Doctors/doctor-1.jpg';
import doctor2 from '../../../images/Doctors/doctor-2.jpg';
import doctor3 from '../../../images/Doctors/doctor-3.jpg';


const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={doctor1} className="d-block w-50" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={doctor2} className="d-block w-50" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={doctor3} className="d-block w-50" alt="..." />
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