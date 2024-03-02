import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarReceta, leerReceta } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta, setReceta }) => {
  const eliminarReceta = () => {
    Swal.fire({
      title: "está seguro de eliminar la receta?",
      text: "No se puede revertir ésta operación",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //solicitar a la api eliminar la receta
        const respuesta = await borrarReceta(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta ${recetas.nombreReceta} fue eliminada correctamente`,
            icon: "success",
          });

          //actualizar tabla del administrador
          const respuestaNuevasRecetas = await leerReceta();
          if (respuestaNuevasRecetas.status === 200) {
            const nuevasRecetas = await respuestaNuevasRecetas.json();
            setReceta(nuevasRecetas);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La receta ${recetas.nombreReceta} no fue eliminada, intente ésta operacion en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{recetas.id}</td>
      <td>{recetas.nombreReceta}</td>

      <td className="text-center">
        <img
          src={recetas.imagen}
          className="img-thumbnail"
          alt={recetas.nombreReceta}
        ></img>
      </td>
      <td>{recetas.descripcion}</td>
      <td className="text-center">
        <Link
          className="me-lg-2 btn btn-warning"
          to={"/administrador/editar/" + recetas.id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
