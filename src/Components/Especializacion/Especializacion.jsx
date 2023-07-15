import './Especializacion.css'


const Especializacion = () => {
    return (
        <div className='container-sm'>
        <div className='text-justify p-5'>
        <h1 className='m-5 esp-h1'>Especializacion</h1>
        <p className='m-5'>Poseo una amplia trayectoria en gestión hotelera y atención al cliente</p>
        </div>
        <div className='row justify-content-center'>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <h5>Gestion Hotelera</h5>
            <p>Planificación,organización,dirección y control de todas las areas y departamentos relacionados con el funcionamiento del hotel y satisfacer los requerimientos del huésped</p>
            <a href='Saber mas'/>Saber más<a/>
            </div>
         </div>

        </div>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <h5>Cocinero Profesional</h5>
            <p>Creación y preparación de alimentos en un entorno de cocina, combinando habilidades culinarias, creatividad, conocimientos técnicos y pasión por la gastronomia</p>
            <a href=''/>Saber más<a/>
            </div>
         </div>

        </div>
        <div className='col-sm-3'>
         <div className='card'>
            <div className='card-body'>
            <h5>Atención al cliente</h5>
            <p>Experto en implementación de acciones y estrategias para satisfacer las necesidades y expectativas de un cliente durante y despues de una interacción.</p>
            <a href='Saber Más'/>Saber más<a/>
            </div>
         </div>

        </div>




        </div>


            
        </div>
    );
}

export default Especializacion;