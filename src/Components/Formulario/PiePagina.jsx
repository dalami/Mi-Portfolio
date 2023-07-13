import piedepag from "/src/assets/Images/piedepag.jpg";
import Formulario from './Formulario'


const PiePagina = () => {


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={piedepag} alt="pie de pagina" />
        </div>
        <div className="col-md-4">
            <Formulario/>

        </div>
      </div>
    </div>
  );
};

export default PiePagina;
