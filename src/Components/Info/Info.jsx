
import FotoB from '/src/assets/Images/FotoB.png'

import "./Info.css";

const Info = () => {


  
  
  return (
    <section id='info'>
    <div className="container ">
    
      <div className="row vh-100 justify-content-center align-items-center miestilo">
        <div className="col-sm-5">
          <img className="borde" src={FotoB}></img>
        </div>

        <div className="col-sm-5 ">
          <h3 className="info-h">Diego Alami</h3>

          <h5 className="info-h5">Soy un apasionado de la vida</h5>
          <p className="info-p">
            Hola! Soy licenciado en Administracion Hotelera, con una amplia
            experiencia en la industria. Además soy cocinero profesional y me
            encanta explorar diferentes sabores y tecnicas culinarias. Soy
            artista marcial y he dedicado años a perfeccionar mi tecnica y a
            mantenerme en forma.
          </p>
          <p className="info-p">
            Pero mi mayor orgullo y alegria es ser padre. Disfruto cada momento
            en familia y me esfuerzo por brindarles lo mejor. En general soy una
            persona apasionada de la vida y siempre busco nuevas aventuras y
            oportunidades para crecer tanto personal como profesionalmente.
          </p>
          <button className="btn-info" >Ver Portfolio</button>
        </div>

        <div className="rectangulo"></div>
      </div>
    </div>
    </section>
  );
};

export default Info;