
import { Box} from '@chakra-ui/react'
import "./Nav.css";
import Logo from "./Logo";


const Nav = () => {
   
  


  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light-bg-subtle">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#opciones"
          name="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <Box>
            
          <Logo/>
              
        </Box>
        <div className="collapse navbar-collapse" id="opciones">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio"  >
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#info" >
                Sobre mi
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#habilidades">
                Habilidades
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;