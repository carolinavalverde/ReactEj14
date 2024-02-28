import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductos } from "../../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //solicitar a la api traer los productos
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await leerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    } else {
      //mostrar un mjs elegante de error al usuario de q en este momento no puede hacer esta transaccion
    }
  };

  console.log(productos);

  return (
    <section className="mainSection">
      <Container className="mt-5">
        <h1 className="display-4 text-center">Mis Recetas</h1>
        <hr />

        <Row>
          {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto}></CardProducto>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
