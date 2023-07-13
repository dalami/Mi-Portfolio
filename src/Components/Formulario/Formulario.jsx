import { useState } from 'react';
import './Formulario.css'

const Formulario = () => {

const[nombre,setNombre]=useState('')
const[apellido,setApellido]=useState('')
const[email,setEmail]=useState('')
const [mostrarContraseña, setMostrarContraseña] = useState(false);

const[area,setArea]=useState('')

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name: nombre,
        email: email,
        message: area
      };
  
      try {
        const response = await fetch('https://formspree.io/f/xbjvjbza', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          alert('Message sent!');
          setNombre('');
          setEmail('');
          setArea('');
        } else {
          alert('Error sending message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
      }
    };

function actualizarNombre(e){
    setNombre(e.target.value)
}

function actualizarApellido(e){
    setApellido(e.target.value)
}
function actualizarEmail(e){
    setEmail(e.target.value)
}

function actualizarArea(e){
    setArea(e.target.value)
}

const toggleMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };
  

    return (
        <div className='container contenedor'>
        <h4>Deje su comentario</h4>
           <div>
            <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='form-group col-md-6'>
                    <label htmlFor=''>Nombre</label>
                    <input type='text' name='nombre' value={nombre} onChange={actualizarNombre} className='form-control'/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor=''>Apellido</label>
                    <input type='text' name='apellido' value={apellido}  onChange={actualizarApellido} className='form-control'/>
                </div>
                </div>
                <div className='row'>
                <div className='form-group col-md-6'>
                    <label htmlFor=''>Email</label>
                    <input type='email' name='email' value={email} onChange={actualizarEmail} className='form-control'/>
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor=''>Contraseña</label>
                    <input type='password' name='contraseña' className='form-control'/>
                </div>
                </div>
                <div>
                    <label>Ingrese su mensaje</label>
                    <textarea value={area} onChange={actualizarArea} name='textarea' className='form-control' rows={3}></textarea>
                </div>
                <button  type='submit' className='btn btn-primary' >Enviar
                </button>
               
            </form>
            </div> 
        </div>
    );
}

export default Formulario;
