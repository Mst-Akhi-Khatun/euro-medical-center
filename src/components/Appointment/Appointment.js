import React from 'react';
import image from '../../images/appointment/appoint.png';

const Appointment = () => {
    return (
        // this is appointment section
        <div className="container">
            <div className="row my-4">
                
            <h2 className="py-4 text-center">We Are Always Ready To <span className="text-info">Help You</span>.<br /> Book An <span className="text-info">Appointment</span></h2>
                <div className="col-md-6">
                        <form action="">
                            <div className="row px-3">
                            <div className="col-md-6 col-12 mt-3">
                                <input className="p-2 form-control" type="text" name="" id="" placeholder="Name" />
                            </div>
                            
                            <div className="col-md-6 col-12 mt-3">
                                <input className="p-2 form-control" type="email" name="" id="" placeholder="Email" /><br />
                            </div>
                            
                            <div className="col-md-6 col-12 mt-3">
                                <input className="p-2 form-control" type="number" name="" id="" placeholder="Phone" />
                            </div>
                            
                            <div className="col-md-6 col-12 mt-3">
                                <input className="p-2 form-control" type="text" name="" id="" placeholder="Department" /><br />
                            </div>
                            
                            <div className="col-md-6 col-12 mt-3">
                                <input className="p-2 form-control" type="text" name="" id="" placeholder="Doctor" />
                            </div>
                            
                            <div className="col-md-6 col-12 mt-3">
                                <input className="p-2 form-control" type="text" name="date" id=""  placeholder="Date" /><br />
                            </div>
                            

                                <textarea className="my-3 form-control" rows="8" cols="53"></textarea>
                                <input className="py-2 btn btn-info text-white mb-2" type="submit" value="Book An Appointment" />
                            </div>
                        </form>
                </div>
                <div className="col-md-6">
                    <img src={image} className="w-100" height=""alt="" />
                </div>
            </div>
        </div>
    );
};

export default Appointment;