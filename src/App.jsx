

import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Info from './Components/Info/Info'
import Skills from './Components/Skills/Skills'
import Especializacion from './Components/Especializacion/Especializacion'
import Servicios from './Components/Servicios/Servicios'
import Portfolio from './Components/Portfolio/Portfolio'
import PiePagina from './Components/Formulario/PiePagina'
import Footer from './Components/Footer/Footer'



function App() {
  

  return (
    <>
     <Header/>
     <Hero />
     <Info />
    <Skills/>
    <Especializacion/>
    <Servicios/>
    <Portfolio/>
    <PiePagina/>
    <Footer/>
    </>
  )
}

export default App
