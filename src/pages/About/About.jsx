import React from 'react';
import './About.css';
import Image from "../../images/img1.jpg";
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <>
    <Slide bottom>
    <div className="about" id='about'>
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img src={Image} alt="" />
        </div>

        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
        <h1>About <span>M</span>e</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nesciunt perferendis voluptates quo doloremque, ipsa qui optio! Minus totam voluptatum assumenda beatae libero aut consequuntur ratione iusto repudiandae quod, porro temporibus consequatur? Libero sunt ratione, animi voluptatem quas maxime illum harum et placeat rem, ipsum nemo rerum. Recusandae architecto porro facere aut amet maiores doloremque dicta nemo natus quidem assumenda vitae doloribus facilis libero quis, harum quos deleniti! Corporis laboriosam voluptatum suscipit quaerat sed nam adipisci voluptatem.</p>
        </div>
      </div>
    </div>
    </Slide>
    
    </>
  )
}

export default About