import React from 'react';
import image from '../../images/appointment/appoint.png';

const Appointment = () => {
    return (
        <div className="container">
            <div className="row my-4">
                
            <h2 className="py-4 text-center">We Are Always Ready To Help You.<br /> Book An Appointment</h2>
                <div className="col-md-6">
                    <form action="">
                        <input className="p-2" type="text" name="" id="" placeholder="Name" />
                        <input className="ms-2 p-2" type="email" name="" id="" placeholder="Email" /><br />
                        <input className="p-2" type="number" name="" id="" placeholder="Phone" />
                        <input className="my-3 ms-2 p-2" type="text" name="" id="" placeholder="Department" /><br />
                        <input className="p-2" type="text" name="" id="" placeholder="Doctor" />
                        <input className="ms-2 p-2" type="text" name="date" id=""  placeholder="Date" /><br />

                        <textarea className="my-3" rows="8" cols="53"></textarea>
                        <input type="submit" value="Book An Appointment" />
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