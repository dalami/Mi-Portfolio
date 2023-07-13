import React from "react";
import './Skills.css'

const Skills = () => {
  return (
    <div className="container mt-5 estilo-propio">
    <div className="text-center ">
    <h1>Mis <span className="fs-1 skills">Habilidades</span></h1>
    <p className="mb-5">Estas son algunas de las herramientas que utilizo</p>
    </div>
    <div className="row justify-content-center ">
    <div className="col-md-4" >
        <div className="d-flex justify-content-around">
        <span>HTML</span> <span>80%</span>
        </div>
        <div className="progress">
        
          <div className="progress-bar " style={{width:"80%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar">  
        
        </div>
        </div>
        <div className="d-flex justify-content-around">
        <span>CSSS3</span> <span>70%</span>
        </div>
        <div className="progress">
       
          <div className="progress-bar" style={{width:"70%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar"></div>
        
        </div>
        <div className="d-flex justify-content-around">
        <span>JQUERY</span> <span>90%</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{width:"90%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar"></div>
        </div>
        <div className="d-flex justify-content-around">
        <span>JAVASCRIPT</span> <span>50%</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{width:"50%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar"></div>
        </div>
      </div>
      <div className="col-md-4">
      <div className="d-flex justify-content-around">
        <span>SASS</span> <span>50%</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{width:"50%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar"></div>
        </div>
        <div className="d-flex justify-content-around">
        <span>BOOSTRAP</span> <span>70%</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{width:"70%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar"></div>
        </div>
        <div className="d-flex justify-content-around">
        <span>TYPESCRIPT</span> <span>75%</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{width:"75%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar"></div>
        </div>
        <div className="d-flex justify-content-around">
        <span>PHP</span> <span>30%</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{width:"30%"}} aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" role="progressbar"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
