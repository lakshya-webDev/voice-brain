import React from 'react'

const WeDo = () => {
    return (
        <div className="container">
            <div className="we-do pt-5">
                <h4 className='text-start text-capitalize'>What we do</h4>
                <div className='wedo-description mt-4'>
                    <p className='text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                {/* 1 */}
                <div className='wedo-section mt-5 mb-3'>
                    <div className="row wedo-row">
                            <div className="col-md-3 wedo-col border-end">
                                <div className="wedo-container p-3">
                                    <div className="wedo-title">
                                    <h4 className="text-start">Database Development</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 wedo-col ">
                            <div className="wedo-container p-3 ">
                                    <div className="we-do-title">
                                    <h5 className='text-start'>Subheading</h5>
                                    </div>
                                    <div className="wedo-content mt-3">
                                        <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/* 2 */}
                <div className='wedo-section mt-5 mb-3'>
                    <div className="row wedo-row">
                            <div className="col-md-3 wedo-col border-end">
                                <div className="wedo-container p-3">
                                    <div className="wedo-title">
                                    <h4 className="text-start">Machine Learning & Bloack Chain</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 wedo-col ">
                            <div className="wedo-container p-3 ">
                                    <div className="we-do-title">
                                    <h5 className='text-start'>Subheading</h5>
                                    </div>
                                    <div className="wedo-content mt-3">
                                        <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/* 3 */}
                <div className='infra-wedo-section mt-5 mb-3'>
                    <div className="row wedo-row">
                            <div className="col-md-3 wedo-col border-end">
                                <div className="wedo-container p-3">
                                    <div className="wedo-title">
                                    <h4 className="text-start">Full Infrastructure Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 wedo-col ">
                            <div className="wedo-container p-3 ">
                                    <div className="we-do-title">
                                    <h5 className='text-start infra-title'>Subheading</h5>
                                    </div>
                                    <div className="wedo-content mt-3">
                                        <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/* end of 3 wedo services */}
                <p className='se-all text-end'>See All</p>
                
            </div>
            
        </div>
    )
}
export default WeDo;