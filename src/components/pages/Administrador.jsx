import { Button, Table } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import { useEffect, useState } from "react";
import { leerReceta } from "../../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {
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
      //mostrar un mensaje de error al usuario
    }
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Nombre</th>

            <th>URL de Imagen</th>
            <th>Descrición</th>
            <th>Receta</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => (
            <ItemReceta
              key={receta.id}
              receta={receta}
              setReceta={setReceta}
            ></ItemReceta>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
