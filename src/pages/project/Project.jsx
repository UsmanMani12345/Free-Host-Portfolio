import React from 'react';
import './Project.css';
import Image1 from "../../images/3.png";
import Image2 from "../../images/2.png";
import Image3 from "../../images/6.png";
import Spin from 'react-reveal/Spin';
const Project = () => {
  return (
    <>

    <Spin>
    <div className="project" id="project">


    <h1 className='col-md-12 mb-1 text-center mt-3 '>Top Projects</h1>
        <hr/>
        <p className='pb-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis omnis, quibusdam sint quasi deleniti deserunt eveniet obcaecati esse commodi, sapiente ullam quod cupiditate. Ad veritatis, fuga sunt dignissimos quas id error at incidunt veniam pariatur porro voluptatum vero quaerat.</p>

        <div className="row" id='ads'>

            

            <div className="col-md-4">
            <div className="card rounded">
                <div className="card-img">
                    <span className='card-notify-badge'>FrontEnd</span>
                    <img src={Image1} alt="" />
                </div>

                <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">HTML5</span>
                    <span className="card-detail-badge">CSS3</span>
                    <span className="card-detail-badge">Bootstrap5</span>
                    <span className="card-detail-badge">Tailwind</span>
                </div>

                <div className="card-body">
                    <div className="ad-title m-auto text-center">
                        <h5 className='text-uppercase'>MUJ Website</h5>
                    </div>
                    <a href="" className='ad-btn'>View</a>
                </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="card rounded">
                <div className="card-img">
                    <span className='card-notify-badge'>Full Stack</span>
                    <img src={Image2} alt="" />
                </div>

                <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">ReactJs</span>
                    <span className="card-detail-badge">Mongodb</span>
                </div>

                <div className="card-body">
                    <div className="ad-title m-auto text-center">
                        <h5 className='text-uppercase'>MUJ Website</h5>
                    </div>
                    <a href="" className='ad-btn'>View</a>
                </div>
                </div>
            </div>


            <div className="col-md-4">
            <div className="card rounded">
                <div className="card-img">
                    <span className='card-notify-badge'>Backend</span>
                    <img src={Image3} alt="" />
                </div>

                <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">PHP</span>
                    <span className="card-detail-badge">LARAVEL</span>
                    <span className="card-detail-badge">MySql</span>
                </div>

                <div className="card-body">
                    <div className="ad-title m-auto text-center">
                        <h5 className='text-uppercase'>MUJ Website</h5>
                    </div>
                    <a href="" className='ad-btn'>View</a>
                </div>
                </div>
            </div>






            
        </div>

    </div>
    </Spin>
    </>
  )
}

export default Project