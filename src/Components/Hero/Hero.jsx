
import "./Hero.css";
import FotoA from '/src/assets/Images/FotoA.png'


const Hero = () => {
  return (
    <section id="inicio">
    <div className="container miestilo" >
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-sm-5">
          <h6>Hola!</h6>
          <h1>Soy Diego Alami</h1>
          <h6>Desarrollador web &</h6>
          <h6>Desarrollador de aplicaciones moviles</h6>
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
