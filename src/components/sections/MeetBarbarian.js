import React from 'react'

const MeetBarbarian = () => {
    return (
        <div className="container">
            <div className="meet-barbarian">
                <h4 className='text-start mobile-text'>Meet The <b>Barbarians</b></h4>
            </div>
            <div className="profile-section d-inline-block justify-content-center">
                <div className="row">
                    <div className="col-md-3 profile-col"></div>
                    <div className="col-md-3 profile-col"></div>
                    <div className="col-md-3 profile-col"></div>
                    <div className="col-md-3 profile-col"></div>
                </div>
                <div className="row">
                    <div className="col-md-3 profile-col"></div>
                    <div className="col-md-3 profile-col"></div>
                    <div className="col-md-3 profile-col"></div>
                    <div className="col-md-3 profile-col"></div>
                </div>
            </div>
            <a href="#"><p className='se-all  barbarian-see'>See All</p></a>
        </div>
    )
}
export default MeetBarbarian;
