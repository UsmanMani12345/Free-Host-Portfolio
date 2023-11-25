import React from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import "./Menu.css";
import Image from "../../images/img1.jpg";
import { FaHome } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import {
  FcAssistant,
  FcAbout,
  FcReadingEbook,
  FcBusinessContact,
  FcCollaboration,
} from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";

import { Link} from 'react-scroll';
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>
          <div className="navbar-profile-pic">
            <img src={Image} alt="" />
          </div>
          </Zoom>
          <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" syp={true} smooth={true} offset={-100} duration={100}>
                <FaHome />
                Home
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" syp={true} smooth={true} offset={-100} duration={100}>
                <FcAbout />
                About Us
                </Link>
              </div>
              <div className="nav-link">
              <Link to="services" syp={true} smooth={true} offset={-100} duration={100}>
                <GrTechnology />
                Tech Stack
                </Link>
              </div>
              <div className="nav-link">
              <Link to="education" syp={true} smooth={true} offset={-100} duration={100}>
                <FcReadingEbook />
                Education
                </Link>
              </div>

              <div className="nav-link">
              <Link to="project" syp={true} smooth={true} offset={-100} duration={100}>
                <GoProjectSymlink />
                Project
                </Link>
              </div>
              
              <div className="nav-link">
              <Link to="contact" syp={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessContact />
                Contact
                </Link>
              </div>
            </div>
          </div>

          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FaHome title="Home" />
              </div>

              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcAssistant title=" Work Experience" />
              </div>
              <div className="nav-link">
                <GrTechnology title="Technology" />
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Education"/>
              </div>
              <div className="nav-link">
                <GoProjectSymlink title="Project" />
              </div>
             
              <div className="nav-link">
                <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>

          
        </>
      )}
    </>
  );
};

export default Menu;
