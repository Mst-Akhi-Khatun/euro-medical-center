import React from 'react';
import Banner from '../Header/Banner/Banner';
import Service from '../Services/Service/Service';
import PatientsReviews from '../PatientsReviews/PatientsReviews';
import Doctors from '../Doctors/Doctors';


const Home = () => {
    return (
        // this is home section
        <div>
            <Banner></Banner>
            <Service></Service>
            <Doctors></Doctors>
            <PatientsReviews></PatientsReviews>
        </div>
    );
};

export default Home;