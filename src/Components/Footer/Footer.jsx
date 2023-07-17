import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "/src/Components/NavBar/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mi-container">
      <div className="logo-foot"><Logo /></div>
      <div className="d-flex justify-content-center mt-3">
        <a
          className="redes"
          href="https://github.com/dalami"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="bi bi-github"></i>
        </a>
        <a
          className="redes"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="bi bi-instagram"></i>
        </a>
        <a
          className="redes"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="bi bi-twitter"></i>
        </a>
        <a
          className="redes"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="bi-1 bi-youtube"></i>
        </a>
        <a
          className="redes"
          href="https://www.linkedin.com/home"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <p className="foot-p">®Copyrigh 2023 Alami. All Right Reserved</p>
    </div>
  );
};

export default Footer;
