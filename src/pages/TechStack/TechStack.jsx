import React from 'react';
import './TechStack.css';
import { TechstackList } from '../../utils/TechStackList';
import Roll from 'react-reveal/Roll';


const TechStack = () => {
  return (
    <>
    <Roll top>
    <div className="container tech-stack" id='services'>
        <h1 className='col-md-12 mb-1 text-center mt-3'>Services</h1>
        <hr/>
        <p className='pb-3 text-center'>😎 Programming Language, FrameWork Libraries, Database,FrontEnd,BackEnd </p>
        
    <div className="row">
        {TechstackList.map(tech=>(
            <div className="col-md-4" key={tech._id}>
                <div className="card m-2">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex justify-content-center">
                                <div className="align-self-content">
                                <tech.icon className='tech-icon'/>
                                </div>
                                <div className="media-body">
                                    <h4>{tech.name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ))}
    </div>
    
    </div>
    </Roll>
    </>
  )
}

export default TechStack