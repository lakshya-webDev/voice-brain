import React from 'react'

const Contact = () => {
    return (
        <div className="container contact-section">
            <div className="row">
                <div className="col-md-6">
                  <div className="contact-details">
                  <h4 className='text-start'>Can We Help?</h4>
                  <p  className='text-start'>From capital investment to direct collaboration, we work with founders to transform bold ideas in every industry, partnering with them from inception to IPO and beyond.</p>
                  <h6 className='text-start mail'>info@barbarians.com</h6>
                  </div>
                </div>
                <div className="col-md-6">
                   <form action='' className='contact-form'>
                        <div className="row g-4">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Company Name" aria-label="Company Name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Website" aria-label="Website" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" placeholder="Message" id="message" rows="7"></textarea>
                                </div>
                                <div className="col-12">
                                 <button className="btn-sm submit-btn">Submit</button>  
                                </div>
                        </div>
                   </form>
                </div>
            </div>
            
        </div>
    )
}
export default Contact;