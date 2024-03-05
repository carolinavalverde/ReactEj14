import { Table } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import { useEffect, useState } from "react";
import { leerReceta } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Administrador = () => {
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
        title: "La receta no se pudo mostrar",
        text: `La receta no se pudo mostrar, intentelo nuevamente`,
        icon: "error",
      });
    }
  };

  return (
    <section className="mainSection">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4">Recetas</h1>
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
              <th>Ingredientes</th>
              <th>Receta</th>
              <th></th>
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
      </div>
    </section>
  );
};

export default Administrador;
