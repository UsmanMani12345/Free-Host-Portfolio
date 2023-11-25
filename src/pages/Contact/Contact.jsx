import React from 'react';
import './Contact.css';
import Image from '../../images/card2.jpg';
import {BsLinkedin , BsGithub , BsTwitter } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
const Contact = () => {
  return (
    <>
    <div className="contact" id='contact'>

        <div className="card card0 border-0">
            <div className="row">
                <Fade left>
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        
                        <div className=" row border-line">
                            <img src={Image} alt="" />
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade right>
                <div className="col-lg-6 col-md-6">
                    <div className="card2 d-flex card border-0 px-4 py-5">
                        <div className="row">
                        <div className="row">
                        <h6>Contact

                        <BsLinkedin color='blue' className='ms-2' size={25}/>
                        <BsGithub color='black' className='ms-2' size={25}/>
                        <BsTwitter color='black' className='ms-2' size={25}/>



                        </h6>
                        </div>
                        
                    
                    <div className="row px-3 mb-4">
                        <div className="line"/>
                        <small className="or text-center">OR</small>
                        <div className="line"/>
                    </div>

                    <div className="row px-3">
                        <input type="text" name="name" placeholder='Enter Your Name' className='mb-3' />
                    </div>

                    <div className="row px-3">
                        <input type="email" name="name" placeholder='Enter Your Email' className='mb-3' />
                    </div>

                    <div className="row px-3">
                        <textarea type="text" name="message" placeholder='Enter Your Message' className='mb-3' />
                    </div>
                    <div className="row px-3">
                        <button type='submit' className='button'>Send Message</button>
                    </div>
                </div>
            </div>
            </div>

            </Fade>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Contact