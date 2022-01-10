import React from 'react'
import Service1 from '../../assets/images/service-1.png';
import Service2 from '../../assets/images/service-2.png';
import Service3 from '../../assets/images/service-3.png';
import Service4 from '../../assets/images/service-4.png';

const Services = () => {
    return (
        <div className="container">
        <div className="we-do pt-5">
            <h4 className='text-start text-capitalize'>Our <b>Services</b></h4>
            
            <div className="service-column mt-5 ">
             <div className="row">
                <div className="col-md-3 service-col">
                  <div className="service-icon">
                      <img src={Service1} className=''/>
                  </div>
                  <div className="service-content p-3">
                      <h5 className='text-center'>Service One</h5>
                  </div>
                  <div className="service-content">
                      <p className='text-center'>pretium vulputate sapien nec<br/>
                       sagittis aliquam<br/> 
                       malesuada bibendum.</p>
                  </div>
                  <div className="service-btn p-2">
                      <button className='service-btn-1 serice-btn-text'>Learn More</button>
                  </div>
                </div>
                <div className="col-md-3 service-col">
                  <div className="service-icon">
                      <img src={Service2} className=''/>
                  </div>
                  <div className="service-content p-3">
                      <h5 className='text-center'>Service Two</h5>
                  </div>
                  <div className="service-content">
                      <p className='text-center'>pretium vulputate sapien nec<br/> sagittis aliquam <br/> malesuada bibendum.</p>
                  </div>
                  <div className="service-btn">
                      <button className='service-btn-2 serice-btn-text'>Learn More</button>
                  </div>
                </div>
                <div className="col-md-3 service-col">
                  <div className="service-icon">
                      <img src={Service3} className=''/>
                  </div>
                  <div className="service-content p-3">
                      <h5 className='text-center'>Service Three</h5>
                  </div>
                  <div className="service-content">
                      <p className='text-center'>pretium vulputate sapien nec<br/> sagittis aliquam<br/> malesuada bibendum.</p>
                  </div>
                  <div className="service-btn p-2">
                      <button className='service-btn-3 serice-btn-text'>Learn More</button>
                  </div>
                </div>
                <div className="col-md-3 service-col">
                  <div className="service-icon">
                      <img src={Service4} className=''/>
                  </div>
                  <div className="service-content p-3">
                      <h5 className='text-center'>Service Four</h5>
                  </div>
                  <div className="service-content">
                      <p className='text-center'>pretium vulputate sapien nec<br/> sagittis aliquam<br/> malesuada bibendum.</p>
                  </div>
                  <div className="service-btn p-2">
                      <button className='service-btn-4 serice-btn-text'>Learn More</button>
                  </div>
                </div>
             </div>
            </div> 
        </div>
    </div>
    )
}
export default Services;