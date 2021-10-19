import React from 'react';

const Doctors = () => {
    return (
        // this is doctor section
        <div className="container text-center">
            <h1 className="pb-2">Meet Our <span className="text-info">Doctors</span></h1>
            <p className="pb-2">Read more about our Doctors team personal and their immense contribution.</p>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div>
                    <img src="http://jituchauhan.com/site-templates/medical-website-template/06_pathology_lab/images/team-4.jpg" className="rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dr. Ellanna Moore</h5>
                        <p className="card-text text-info">STRATEGIC INITIATIVES.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div>
                    <img src="http://jituchauhan.com/site-templates/medical-website-template/06_pathology_lab/images/team-3.jpg" className="rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dr. Aline James</h5>
                        <p className="card-text text-info">MENTOR CLINICAL PATHOLOGY.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div>
                    <img src="http://jituchauhan.com/site-templates/medical-website-template/06_pathology_lab/images/team-2.jpg" className="rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dr. Angel Santigo</h5>
                        <p className="card-text text-info">HEAD - QUALITY ASSURANCE.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div>
                    <img src="http://jituchauhan.com/site-templates/medical-website-template/06_pathology_lab/images/team-1.jpg" className="rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dr. Ellanna Moore</h5>
                        <p className="card-text text-info">STRATEGIC INITIATIVES</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;