import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        // this is contact us section
        <div className="container">            
            <h1 className="text-center"><span className="text-info">Contact</span> With Us</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="container overflow-hidden">
                        <div className="row gy-5 my-4">
                            <div className="col-md-4 col-12">
                                <div className="p-3 pt-4 border rounded text-white bg-info d-flex justify-content-center">
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-phone-alt fs-1 me-3 mt-2"></i>
                                    </div>
                                    <div>
                                        <p>+(000) 1234 56789</p>
                                        <p>info@company.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                            <div className="p-3 pt-4 border rounded text-white bg-info d-flex justify-content-center">
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-map-marker-alt fs-1 me-3 mt-2"></i>
                                </div>
                                <devicePixelRatio>
                                    <p>+(000) 1234 56789</p>
                                    <p>info@company.com</p>
                                </devicePixelRatio>
                            </div>
                            </div>
                            <div className="col-md-4 col-12">
                            <div className="p-3 pt-4 border rounded text-white bg-info d-flex justify-content-center">
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

                <div className="px-5 col-md-12 my-5">
                {/* appointment form */}
                <form action="">
                    <input className="px-2 py-3 form-control" type="text" name="" id="" placeholder="Name" />
                    <input className="px-2 py-3 form-control my-3" type="email" name="" id="" placeholder="Email" />
                    <input className="px-2 py-3 form-control" type="number" name="" id="" placeholder="Phone" />
                    <input className="my-3 px-2 py-3 form-control" type="text" name="" id="" placeholder="Subject" />

                    <textarea className="my-3 form-control" rows="8" cols="53"></textarea>
                    <input className="btn btn-info text-white" type="submit" value="Book An Appointment" />
                </form>
                </div> 
            </div>
        </div>
    );
};

export default ContactUs;