import React,{Fragment} from 'react';

import SiteNavbar from '../sections/SiteNavbar';
import Header from '../sections/Header';
import OurMission from '../sections/OurMission';
import MeetBarbarian from '../sections/MeetBarbarian';
import Services from '../sections/Services';
import WeDo from '../sections/WeDo';
import OurProcess from '../sections/OurProcess';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
    return (
        <Fragment>
            <div className="container-fluid header-section">
                <SiteNavbar />
                <hr className="navbar-divider"/>
                <Header/>
            </div>
            {/* Our Mission cection */}
             <div className="overlay-bg mt-2"></div>
             <OurMission/>
             {/* Meet Barbarian Section */}
             <div className="container-fluid" id="meet-barbarian">
                <MeetBarbarian/>
             </div>
             {/* Services */}
             <div className="container-fluid" id="our-services">
                <Services/>
             </div>
             {/* What we Do Section */}
             <div className="container-fluid" id="we-do">
                <WeDo/>
             </div>
              {/* Our Process Section */}
              <div className="container-fluid" id="our-process">
                <OurProcess/>
             </div>
             <div className="container-fluid process-graphic">
                    <div className='col-12'>
                        <p className='text-center'>Process Graphic TBD</p>
                    </div>
             </div>
             {/* Our Process end */}
             {/* CTA  */}
             <div className="container-fluid" id="cta">
                <CTA/>
             </div>
            {/* contact-form */}
            <div className="container-fluid" id="contact">
                <Contact/>
             </div>
             {/* Footer section*/}
             <div className="container-fluid footer">
                    <Footer/>
             </div>
        </Fragment>
    )
}
export default Home;