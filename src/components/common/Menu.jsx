import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.webp";
import letterLogoAsukitaCocina from "../../assets/letterLogoAsukitaCocina.png";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="col-6">
            <img
              src={logo}
              alt="Logo de AsukitaRecetas"
              className="img-fluid"
              width={150}
            />
            <img
              src={letterLogoAsukitaCocina}
              alt="Letra de AsukitaRecetas"
              className="img-fluid"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="col-6">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
              <NavLink className="nav-link" to={"/administrador"}>
                Administrador
              </NavLink>{" "}
              <NavLink className="nav-link" to={"/recetas"}>
                Más Recetas
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
