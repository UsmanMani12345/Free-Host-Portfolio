import React from 'react';
import { IoSchool } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <>
    <div className="container education" id='education'>
    <h1 className='col-md-12 mb-1 text-center mt-3'>Education Details</h1>
        <hr/>
    

    <VerticalTimeline>


    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: ' #09aff4', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   #09aff4' }}
    date="2006 - 2018"
    iconStyle={{ background: ' #09aff4', color: '#fff' }}
    icon={<IoSchool />}
  >
    <h3 className="vertical-timeline-element-title">Matric</h3>
    <h4 className="vertical-timeline-element-subtitle">F.G Sir Syd Rawalpindi</h4>
   
  </VerticalTimelineElement>


  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: ' #1d1212', color: '#fff ' }}
    contentArrowStyle={{ borderRight: '7px solid  #4b2d2d',  }}
    date="2018 - 2020"
    iconStyle={{ background: '#4b2d2d', color: '#fff' }}
    icon={<IoSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate</h3>
    <h4 className="vertical-timeline-element-subtitle">Govt College Rehamtabad</h4>
   
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: ' #09aff4', color: '#fff ' }}
    contentArrowStyle={{ borderRight: '7px solid  #09aff4',  }}
    date="2020 - Present"
    iconStyle={{ background: '#09aff4', color: '#fff' }}
    icon={<IoSchool />}
  >
    <h3 className="vertical-timeline-element-title">Web Development & Design</h3>
    <h4 className="vertical-timeline-element-subtitle">Navittacc, Islamabad</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education