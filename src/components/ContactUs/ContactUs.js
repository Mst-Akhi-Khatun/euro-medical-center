import React from 'react';

const ContactUs = () => {
    return (
        <div className="container">            
            <h1 className="text-center">Contact With Us</h1>
            <div>                    
                <form action="">
                    <input className="p-2 form-control w-75" type="text" name="" id="" placeholder="Name" /><br />
                    <input className="p-2 form-control w-75" type="email" name="" id="" placeholder="Email" /><br />
                    <input className="p-2 form-control w-75" type="number" name="" id="" placeholder="Phone" /><br />
                    <input className="my-3 p-2 form-control w-75" type="text" name="" id="" placeholder="Subject" /><br />

                    <textarea className="my-3 form-control w-75" rows="8" cols="53"></textarea><br />
                    <input className="btn btn-success" type="submit" value="Book An Appointment" />
                </form>

                <div>
                    <div className="container overflow-hidden">
                        <div className="row gy-5 my-4">
                            <div className="col-4">
                                <div className="p-3 border rounded text-white bg-success d-flex justify-content-center">
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-phone-alt fs-1 me-3 mt-2"></i>
                                    </div>
                                    <div>
                                        <p>+(000) 1234 56789</p>
                                        <p>info@company.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                            <div className="p-3 border rounded text-white bg-success d-flex justify-content-center">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-map-marker-alt fs-1 me-3 mt-2"></i>
                                </div>
                                <devicePixelRatio>
                                    <p>+(000) 1234 56789</p>
                                    <p>info@company.com</p>
                                </devicePixelRatio>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="p-3 border rounded text-white bg-success d-flex justify-content-center">
                                <div>
                                    <i className="fas fa-clock fs-1 me-3 mt-2"></i>
                                </div>
                                <div>
                                    <p>Mon - Sat: 8am - 5pm</p>
                                    <p>Sunday Closed</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>    
                </div>      
            </div>
        </div>
    );
};

export default ContactUs;