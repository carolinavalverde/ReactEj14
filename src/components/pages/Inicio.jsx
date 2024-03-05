import { Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import { useEffect, useState } from "react";
import { leerReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {
  const [recetas, setReceta] = useState([]);

  useEffect(() => {
    obtenerReceta();
  }, []);

  const obtenerReceta = async () => {
    const respuesta = await leerReceta();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setReceta(datos);
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: `No se puede obtener las recetas, intente esta operación en unos minutos`,
        icon: "error",
      });
    }
  };

  return (
    <section className="mainSection">
      <Container className="mt-5">
        <h1 className="display-4 text-center">Mis Recetas</h1>
        <hr />

        <Row>
          {recetas.slice(0, 3).map((receta) => (
            <CardReceta key={receta.id} receta={receta}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
