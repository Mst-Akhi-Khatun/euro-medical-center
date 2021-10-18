import React from 'react';
import { useParams } from 'react-router';
import useService from '../../../hooks/useService';

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
                <div className="col-md-6 ps-5">
                    <h1>{serviceItem?.name}</h1>
                    <p style={myStyle}>{serviceItem?.description}</p>
                    <button className="btn btn-danger rounded-pill px-3">
                        <i className="fas fa-shopping-cart"></i> Add
                    </button>
                </div>
                <div className="col-md-6 ps-5">
                    <img src={serviceItem?.img} alt="" className="w-75" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;