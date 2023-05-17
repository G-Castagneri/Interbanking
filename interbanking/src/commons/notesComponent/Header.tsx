import Logo from "../../assets/image/Interbanking-logo.jpeg";
import "../../assets/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header_container">
          <img src={Logo}></img>
          <h1>Bienvenido a Interbanking</h1>
        </div>
      </header>
      <title className="service_title">
        <h2>
          Te invitamos a dejarnos tus comentarios para que podamos conocer tu
          opinión y mejorar nuestra calidad de servicio.
        </h2>
      </title>
    </>
  );
};

export default Header;
