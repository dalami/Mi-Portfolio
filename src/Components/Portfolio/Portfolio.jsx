import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='container'>
        <div className='text-center pt-5 mb-5 mt-5' ><h1>Portfolio</h1></div>
        <div className='row justify-content-center'>
            <div className='col-lg-4'>
               <a href='https://dalami.github.io/trabajp-practico-2/' target='_blank' rel='noreferrer'> <img className='port-img' src="/src/assets/Images/ivyre.png" alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
                <a href='https://dalami.github.io/Trabajo-practico-3/' target='_blank' rel='noreferrer'> <img className='port-img' src="/src/assets/Images/Homes.png" alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/trabajo-practico1/' target='_blank' rel='noreferrer'> <img className='port-img' src="/src/assets/Images/Gififty.png" alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/Galeria/' target='_blank' rel='noreferrer'> <img className='port-img' src="/src/assets/Images/galeria.png" alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/Carrito-de-compra/' target='_blank' rel='noreferrer'> <img className='port-img' src="/src/assets/Images/carrito.png" alt='foto'/></a>
            </div>
            <div className='col-lg-4'>
            <a href='https://dalami.github.io/axios/' target='_blank' rel='noreferrer'> <img className='port-img' src="/src/assets/Images/rick.png" alt='foto'/></a>
            </div>
</div>



        </div>
    );
}

export default Portfolio;