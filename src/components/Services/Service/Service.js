import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useService from '../../../hooks/useService';

const Service = () => {
    const [services, setServices] = useService();
    console.log(services);
    return (
        <Row xs={1} md={3} className="g-4 container mx-auto">
            {
                services.map(service => <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto" src={service?.img} />
                        <Card.Body className="text-center">
                            <Card.Title>{service?.name}</Card.Title>
                            <Card.Text>
                                {service?.description}
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/detail/${service?.id}`} className="mx-auto mb-3">
                            <Button variant="danger" className="rounded-pill px-4">Details</Button>
                        </Link>
                    </Card>
                </Col>)
            }
        </Row>
    );
};

export default Service;