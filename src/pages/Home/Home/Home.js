import React from 'react';
import Appointmentbanner from '../AppointmentBanner/Appointmentbanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Appointmentbanner/>
        </div>
    );
};

export default Home;