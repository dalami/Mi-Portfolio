import { useState } from 'react';

import './Formulario.css'

const Formulario = () => {

const[nombre,setNombre]=useState('')
const[apellido,setApellido]=useState('')
const[email,setEmail]=useState('')
const[contraseña,setContraseña]=useState('')

const[area,setArea]=useState('')

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name: nombre,
        email: email,
        message: area,
        apellido: apellido,
        contraseña: contraseña
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
          alert('Mensaje Enviado!');
          setNombre('');
          setApellido('');
          setEmail('');
          setArea('');
          setContraseña('');
        } else {
          alert('Error Intente nuevamente.');
        }
      } catch (error) {
        // console.error('Error:', error);
        alert('Error Intente nuevamente.');
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
function actualizarContraseña(e){
    setContraseña(e.target.value)
}

function actualizarArea(e){
    setArea(e.target.value)
}


  

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
                    <input type='password' name='contraseña' value={contraseña} onChange={actualizarContraseña} className='form-control'/>
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
