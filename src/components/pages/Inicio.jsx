import { Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import { useEffect, useState } from "react";
import { leerReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {
  const [recetas, setReceta] = useState([]);

  useEffect(() => {
    //solicitar a la api traer las recetas
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

  console.log(recetas);

  return (
    <section className="mainSection">
      <Container className="mt-5">
        <h1 className="display-4 text-center">Mis Recetas</h1>
        <hr />

        <Row>
          {recetas.map((recetas) => (
            <CardReceta key={recetas.id} receta={recetas}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
