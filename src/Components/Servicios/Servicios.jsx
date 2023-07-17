
import './Servicios.css'
import diseño from '/src/assets/Images/diseño.png'
import responsive from '/src/assets/Images/responsive.png'
import ui from '/src/assets/Images/ui.png'
import web from '/src/assets/Images/web.png'
import app from '/src/assets/Images/app.png'
import video from '/src/assets/Images/video.png'


const Servicios = () => {
    return (
      <section id='servicios'>
        <div className='container-sm'>
        <div className='text-center p-5'>
        <h1 className='m-5'>Mis <span className='serv fs-1'>Servicios</span></h1>
        <p className='m-5'>Estos son algunos de mis servicios</p>
        </div>

        <div className='row justify-content-center'>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <img className='img-serv' src={diseño}></img>
            <h5>Diseño Grafico</h5>
            <p>Comunico sus ideas y conceptos de de manera visualmente atractiva y efectiva </p>
            
            </div>
         </div>

        </div>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <img className='img-serv' src={responsive}></img>
            <h5>Diseño Responsive</h5>
            <p>Creación de sitios web que se adapten y respondan a diferentes dispositivos y pantallas</p>
            
            </div>
         </div>

        </div>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <img className='img-serv' src={ui}></img>
            <h5>UI/UX</h5>
            <p>Me enfoco en la experiencia global del usuario y en el aspecto visual e interaccion con la interfaz de usuario</p>
            
            </div>
         </div>

        </div>




        </div>
        <div className='row justify-content-center'>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <img className='img-serv' src={web}></img>
            <h5>Desarrollo Web</h5>
            <p>Se realiza la creacion y construccion de sitios web, desde la planificacion y diseño hasta la implementacion</p>
            
            </div>
         </div>

        </div>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <img className='img-serv' src={app}></img>
            <h5>Desarrollo de Apps</h5>
            <p>Creacion y construccion de aplicaciones para todo tipo de dispositivos y tamaños de pantallas</p>
            
            </div>
         </div>

        </div>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <img className='img-serv' src={video}></img>
            <h5>Edicion de Videos</h5>
            <p>Manipulación y creacion de clips de video para crear una narrativa coherente y atractiva</p>
            
            </div>
         </div>

        </div>




        </div>
            
        </div>
        </section>
    );
}

export default Servicios;
