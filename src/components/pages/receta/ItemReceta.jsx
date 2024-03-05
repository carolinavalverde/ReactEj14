import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarReceta, leerReceta } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta, setReceta }) => {
  const eliminarReceta = async () => {
    Swal.fire({
      title: "¿Está seguro de eliminar la receta?",
      text: "No se puede revertir esta operación",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarReceta(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta ${receta.nombreReceta} fue eliminada correctamente`,
            icon: "success",
          });

          const respuestaNuevasRecetas = await leerReceta();
          if (respuestaNuevasRecetas.status === 200) {
            const nuevasRecetas = await respuestaNuevasRecetas.json();
            setReceta(nuevasRecetas);
          }
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `La receta ${receta.nombreReceta} no fue eliminada, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          className="img-thumbnail"
          alt={receta.nombreReceta}
        ></img>
      </td>
      <td>{receta.descripcion}</td>
      <td>
        <ul>
          {receta.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </td>
      <td>{receta.recetaTexto}</td>
      <td className="text-center">
        <Link
          className="me-lg-2 btn btn-warning my-2"
          to={"/administrador/editar/" + receta.id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarReceta}>
          <i className="bi bi-trash my-2"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
