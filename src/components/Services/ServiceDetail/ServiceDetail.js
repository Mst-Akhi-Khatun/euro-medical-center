import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../../hooks/useService';

// service detail section
const ServiceDetail = () => {
    const { serviceId} = useParams();
    const [services, setServices] = useService();
    const serviceItem = services.find(service => service.id === parseInt(serviceId))

    const myStyle = {
        textAlign: 'justify',
    }
    return (
        <div className="container">
            <div className="row d-flex align-items-center my-5">
                <div className="col-md-6 col-12 px-5">
                    <h1>{serviceItem?.name}</h1>
                    <p style={myStyle}>{serviceItem?.description}</p>
                    <Link to="/appointment">
                        <button className="btn btn-info rounded-pill px-3">
                            Appointment
                        </button>
                    </Link>
                </div>
                <div className="col-md-6 col-12 px-5 mt-3 d-flex justify-content-center">
                    <img src={serviceItem?.img} alt="" className="w-75" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;