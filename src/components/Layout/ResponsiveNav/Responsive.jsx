import React, { useState } from "react";
import "./Responsive.css";
import { FaBars, FaTimes } from "react-icons/fa";
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

import { Link } from "react-scroll";

const Responsive = () => {
  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open);
  };

  const handleMenuClick=()=>{
    setOpen(false);
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <FaTimes size={30} className="mobile-nav-icon" onClick={handle} />
          ) : (
            <FaBars size={30} className="mobile-nav-icon" onClick={handle} />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
{open &&(
    <div className="mobile-nav-menu">
    <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
          <Link
            to="home"
            syp={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={handleMenuClick}
          >
            <FaHome />
            Home
          </Link>
        </div>

        <div className="nav-link">
          <Link
            to="about"
            syp={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={handleMenuClick}
          >
            <FcAbout />
            About Us
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="services"
            syp={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={handleMenuClick}
          >
            <GrTechnology />
            Tech Stack
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="education"
            syp={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={handleMenuClick}
          >
            <FcReadingEbook />
            Education
          </Link>
        </div>

        <div className="nav-link">
          <Link
            to="project"
            syp={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={handleMenuClick}
          >
            <GoProjectSymlink />
            Project
          </Link>
        </div>

        <div className="nav-link">
          <Link
            to="contact"
            syp={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={handleMenuClick}
          >
            <FcBusinessContact />
            Contact
          </Link>
        </div>
      </div>
    </div>
  </div>
)}
        
      </div>
    </>
  );
};

export default Responsive;
