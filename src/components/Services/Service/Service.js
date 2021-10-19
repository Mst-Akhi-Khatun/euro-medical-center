import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useService from '../../../hooks/useService';

// service section
const Service = () => {
    const [services, setServices] = useService();
    console.log(services);
    return (
        <div className="py-5 text-center bg-light">
            <h1><span className="text-info">Services</span> We Provide</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto my-5">
            {
                services.map(service => <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto pt-3" src={service?.img} />
                        <Card.Body className="text-center">
                            <Card.Title>{service?.name}</Card.Title>
                            <Card.Text>
                                {service?.description}
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/detail/${service?.id}`} className="mx-auto mb-3">
                            <Button variant="info" className="rounded-pill px-4 text-white">Details</Button>
                        </Link>
                    </Card>
                </Col>)
            }
        </Row>
        </div>
    );
};

export default Service;