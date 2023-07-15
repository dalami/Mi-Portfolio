import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Formulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [area, setArea] = useState("");
  const [notification, setNotification] = useState(null);
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const showNotification = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nombre,
      email: email,
      message: area,
      apellido: apellido,
      contraseña: contraseña,
    };

    try {
      const response = await fetch("https://formspree.io/f/xbjvjbza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification("Mensaje enviado!", "success");

        setNombre("");
        setApellido("");
        setEmail("");
        setArea("");
        setContraseña("");
      } else {
        showNotification("Intente nuevamente!", "error");
      }
    } catch (error) {
      showNotification("Intente nuevamente!", "error");
    }
  };
  const toggleMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

  function actualizarNombre(e) {
    setNombre(e.target.value);
  }

  function actualizarApellido(e) {
    setApellido(e.target.value);
  }
  function actualizarEmail(e) {
    setEmail(e.target.value);
  }
  function actualizarContraseña(e) {
    setContraseña(e.target.value);
  }

  function actualizarArea(e) {
    setArea(e.target.value);
  }

  return (
    <section id="contacto">
    <div className="container contenedor">
      <h4>Deje su comentario</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={actualizarNombre}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="">Apellido</label>
              <input
                type="text"
                name="apellido"
                value={apellido}
                onChange={actualizarApellido}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={actualizarEmail}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="">Contraseña</label>
              <div className="input-group">
                <input
                  type={mostrarContraseña ? "text" : "password"}
                  name="contraseña"
                  value={contraseña}
                  onChange={actualizarContraseña}
                  className="form-control"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className={`btn btn-outline-secondary eyeButton ${
                      mostrarContraseña ? "active" : ""
                    }`}
                    onClick={toggleMostrarContraseña}
                  >
                   
                    <FontAwesomeIcon
                      icon={mostrarContraseña ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label>Ingrese su mensaje</label>
            <textarea
              value={area}
              onChange={actualizarArea}
              name="textarea"
              className="form-control"
              rows={3}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        {notification && (
          <div className={`notifica ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Formulario;
