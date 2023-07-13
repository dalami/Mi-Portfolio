import React from 'react';
import './Portfolio.css'
import ivyre from '/src/assets/Images/ivyre.png'
import Homes from '/src/assets/Images/Homes.png'
import Gififty from '/src/assets/Images/Gififty.png'
import galeria from '/src/assets/Images/galeria.png'
import carrito from '/src/assets/Images/carrito.png'
import rick from '/src/assets/Images/rick.png'

const Portfolio = () => {
    return (
        <div className='container'>
        <div className='text-center pt-5 mb-5 mt-5' ><h1>Portfolio</h1></div>
        <div className='row justify-content-center'>
            <div className='col-lg-4'>
               <a href='https://dalami.github.io/trabajp-practico-2/' target='_blank' rel='noreferrer'> <img className='port-img' src={ivyre} alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
                <a href='https://dalami.github.io/Trabajo-practico-3/' target='_blank' rel='noreferrer'> <img className='port-img' src={Homes} alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/trabajo-practico1/' target='_blank' rel='noreferrer'> <img className='port-img' src={Gififty} alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/Galeria/' target='_blank' rel='noreferrer'> <img className='port-img' src={galeria} alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/Carrito-de-compra/' target='_blank' rel='noreferrer'> <img className='port-img' src={carrito} alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/axios/' target='_blank' rel='noreferrer'> <img className='port-img' src={rick} alt='foto'/></a>
            </div>
</div>



        </div>
    );
}

export default Portfolio;