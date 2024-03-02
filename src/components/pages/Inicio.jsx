import { Container, Row } from "react-bootstrap";
import CardReceta from "./producto/CardReceta";
import { useEffect, useState } from "react";
import { leerReceta } from "../../helpers/queries";

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
      //mostrar un mjs elegante de error al usuario de q en este momento no puede hacer esta transaccion
    }
  };

  console.log(receta);

  return (
    <section className="mainSection">
      
      <Container className="mt-5">
        <h1 className="display-4">Mis Recetas</h1>
        <hr />

        <Row>
          {recetas.map((receta) => (
            <CardReceta key={recetas.id} receta={receta}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
