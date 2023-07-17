import {useState} from 'React'

import "./Hero.css";
import FotoA from '/src/assets/Images/FotoA.png'
import Formulario from '../Formulario/Formulario';


const Hero = () => {

  const[irForm,SetForm]=useState(false)

  const verForm =()=>{
      SetForm(true)
  }
  const ocultarForm=()=>{
    SetForm(false)
  }
 
 

  return (
    <section id="inicio">
    <div className="container miestilo" >
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-sm-5">
          <h6>Hola!</h6>
          <h1>Soy Diego Alami</h1>
          <h6>Desarrollador web &</h6>
          <h6>Desarrollador de aplicaciones moviles</h6>
          {!irForm && <button onClick={verForm} className='mostrar'>Contratame</button>}
          {irForm && (<div>
          <button onClick={ocultarForm} className='ocultar'>Ocultar</button>
          <Formulario /></div>)}
        </div>
        <div className="col-sm-5">
          <img src={FotoA} alt="foto principal"></img>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
