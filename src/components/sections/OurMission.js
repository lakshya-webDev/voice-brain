import React,{Fragment} from 'react';
import Mission from '../../assets/images/mission.png';
import Ethos from '../../assets/images/ethos.png';

const OurMission = () => {
    return (
        <Fragment>
        <div className="container d-flex justify-content-center">
            <div className="mission-section">
                <div className="row mission-row">
                    <div className="col-md-4 col-12 mission-col border-end">
                        <div className="mission-container">
                            <div className="mission-title">
                             <h4 className="text-start">Our <b>Mission & Ethos</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mission-col border-end" id="Mission">
                       <div className="mission-container ">
                            <div className="mission-image-title d-flex">
                            <img src={Mission} className="me-3"/><h5 className='text-mission mt-1'>Mission</h5>
                            </div>
                            <div className="mission-content mt-3">
                                <p className="text-start">To partner with founders and create software companies that will define the future.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mission-col" id="Ethos">
                        <div className="mission-container mt-3">
                            <div className="mission-image-title d-flex">
                            <img src={Ethos} className="me-3"/><h5 className="text-ethos mt-1">Ethos</h5>
                            </div>
                            <div className="ethos-content mt-3">
                                <p className="text-start">Conscious Creatives. Defiant Deviants. Independent Idealist. Outrageous Outliers. Ultimate Underdogs. Worthy Warriors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default OurMission;